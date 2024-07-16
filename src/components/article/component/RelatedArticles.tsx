"use client"

import delve from "dlv"
import { usePathname } from "next/navigation"
import React, { useEffect, useState } from "react"
import { ArticlePropsOptional, OptionalString } from "@/common/types"
import RelatedArticlesItem from "@/components/article/component/RelatedArticlesItem"
import { fetchAPI } from "@/utils"
import { getStrapiURL } from "@/utils"

type Props = ArticlePropsOptional & {
  className?: string
  name?: string
  layoutType?: string
}

const RelatedArticles = ({ categoryLabel, articleId, tags, relatedArticles, layoutType }: Props) => {
  // const pagination = { clickable: true }
  const [relatedArticless, setRelatedArticless] = useState<any[]>([])
  let manualPick = relatedArticles?.data
  // console.log("articleId", articleId);
  //slug

  // const pathname = usePathname()

  // const newSlug = categorySlug.startsWith("/") ? categorySlug.slice(1) : categorySlug
  // const newHref = `${pathname}/${newSlug}`.replace(/\s+/g, "")
  const getConfig = () => {
    return fetchAPI(`/related-article`, {
      populate: "*",
    })
      .then((resRelatedArticle) => {
        if (typeof resRelatedArticle === "object" && resRelatedArticle !== null && "data" in resRelatedArticle) {
          const data = resRelatedArticle as {
            data: { attributes: { slot: number; maxNoTag: number } }
          }

          return data
        } else {
          console.error("Invalid data structure received from the server")
          return null
        }
      })
      .catch((error) => {
        console.error("Error fetching the config of Editor Pick Article:", error)
        return null
      })
  }

  useEffect(() => {
    getConfig().then(async (config) => {
      const articleSlot = config?.data?.attributes?.slot || 0
      const maxNoTag = config?.data?.attributes?.maxNoTag || 0

      const maxLoop = 3
      const maxNumberArticles =
        manualPick !== undefined ? Math.max(0, articleSlot - (manualPick?.length || 0)) : articleSlot
      const numberTags = maxNoTag || tags?.data?.length || 0
      const articlePerTag = Math.floor(maxNumberArticles / numberTags)
      const excludedArticles = new Set([articleId])
      let remainingSlot = maxNumberArticles
      const manualPickIds = manualPick?.map((article) => article.id) || []
      // console.log('manualPick',manualPickIds)
      if (!!tags?.data.length && !!maxNumberArticles) {
        const main = async (
          tags: any[],
          excludedArticles: Set<OptionalString>,
          articlePerTag: number,
          remainingSlot: number
        ): Promise<Map<string, any[]>> => {
          const articlesByTag: Map<string, any[]> = new Map()

          const getArticlesForTag = async (tag: any): Promise<void> => {
            const tagId = delve(tag, "id")

            if (remainingSlot <= 0) return

            const fetchLimit = Math.min(articlePerTag, remainingSlot)

            const graphqlQuery = `
              query ($tagId: ID!, $excludedArticleIds: [ID!]!, $fetchLimit: Int!) {
                articles(
                  filters: {
                    tags: {
                      id: {
                        eq: $tagId,
                      },
                    },
                    id: {
                      notIn: $excludedArticleIds,
                    },
                  },
                  sort: "publishedDate:desc",
                  pagination: {
                    start: 0,
                    limit: $fetchLimit,
                  }
                ) {
                  meta { pagination { pageSize } }
                  data {
                    id
                    attributes {
                      title
                      content
                      slug
                      publishedDate
                      publishedAt
                      editorSelect
                      categories{
                        data{
                          attributes{
                            name
                            slug
                            parentCategory{
                              data{
                                attributes{
                                  name
                                  slug
                                }
                              }
                            }
                          }
                        }
                      }
                      keyVisualHorizontal {
                        data {
                          id
                          attributes {
                            width
                            height
                            alternativeText
                            url
                          }
                        }
                      }
                    }
                  }
                }
              }
            `

            const variables = {
              tagId,
              excludedArticleIds: Array.from(excludedArticles)
                .filter((id) => typeof id === "string") // Filter out null and undefined values
                .concat(manualPickIds), // Include manualPickIds
              fetchLimit,
            }
            if (manualPickIds.length > 0) {
              variables.excludedArticleIds = [...variables.excludedArticleIds, ...manualPickIds]
            }
            try {
              const response = await fetch(getStrapiURL(`/graphql`), {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  query: graphqlQuery,
                  variables,
                }),
              })

              if (!response.ok) {
                console.error("GraphQL request failed:", response.status, response.statusText)
                return
              }

              const data: any = await response.json()
              const fetchedArticles = data?.data?.articles?.data || []

              if (Array.isArray(fetchedArticles) && fetchedArticles.length > 0) {
                fetchedArticles.forEach((article: any) => excludedArticles.add(article.id))
                const tagArticles = articlesByTag.get(tagId) || []
                tagArticles.push(...fetchedArticles)
                articlesByTag.set(tagId, tagArticles)
                remainingSlot -= fetchedArticles.length
              }
            } catch (error) {
              console.error("Error fetching selected articles:", error)
            }
          }

          const tagsToProcess = tags.slice(0, numberTags)
          let loopIndex = 0
          while (remainingSlot > 0 && loopIndex < maxLoop) {
            for (const tag of tagsToProcess) {
              await getArticlesForTag(tag)
            }
            loopIndex++
          }
          return articlesByTag
        }

        await main(tags.data, excludedArticles, articlePerTag, maxNumberArticles)
          .then((articlesByTag) => {
            const allArticles = Array.from(articlesByTag.values()).reduce((acc, articles) => acc.concat(articles), [])
            // console.log('articlesByTag',articlesByTag)
            // articlesByTag.forEach((articles, tagId) => {
            //   console.log(`Tag ID: ${tagId}, Articles:`, articles);
            // });
            // Handle results here
            // console.log("filteredArticlesMapResult", filteredArticlesMap.values())
            // filteredArticlesMap.forEach((value, key) => {
            //   value.map((article: any) => {
            //     filteredArticles.push(article)
            //   })
            // })
            // console.log("manualPick", manualPick)
            // Check if manualPick is defined and not null
            if (manualPick !== undefined && manualPick !== null) {
              const manualPickIds = new Set(manualPick.map((article) => article.id))
              const filteredUniqueArticles = allArticles.filter((article) => !manualPickIds.has(article.id))

              const combinedArticles = manualPick.concat(filteredUniqueArticles)

              // Remove duplicates based on article IDs
              const uniqueArticles = Array.from(new Set(combinedArticles.map((article) => article.id))).map((id) =>
                combinedArticles.find((article) => article.id === id)
              )

              setRelatedArticless(uniqueArticles)
            } else {
              setRelatedArticless(allArticles)
            }
          })
          .catch((error) => {
            console.error(error)
          })

        if (articleSlot > 0) {
          const filteredTags = tags.data.slice(0, numberTags)
          main(filteredTags, excludedArticles, articlePerTag, remainingSlot)
        }
      } else {
        if (manualPick !== undefined) {
          if (manualPick.length > articleSlot) {
            setRelatedArticless(manualPick.slice(0, articleSlot))
          } else {
            setRelatedArticless(manualPick)
          }
        }
      }
    })
  }, [articleId, tags, manualPick])

  return (
    <div className="mt-9">
      {relatedArticless.length !== 0 && (
        <p className="text-[#E02C2C] pb-3 md:pb-[16px] text-[17px] font-semibold md:border-b md:border-[#E8E8E8]">
          相關新聞
        </p>
      )}

      {relatedArticless?.map((article, index) => <RelatedArticlesItem article={article} key={article.id} />)}
    </div>
  )
}

export default RelatedArticles
