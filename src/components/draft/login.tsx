"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import React from "react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Article, useArticleListSimpleQuery } from "@/common/lib/graphql/generated/graphql"
import { ArticleBasicFragmentWithContent, ArticlePropsOptional } from "@/common/types"
import { getArticleById } from "@/common/utils/data/article/getArticleById"
import { transformArticleShape } from "@/common/utils/transformArticleShape"
import Container from "@/components/common/atom/container/Container"
import Button from "@/components/common/molecule/button/Button"
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import PreviewBanner from "../article/common/atom/PreviewBanner"
import ArticleMain from "../article/common/organisms/article-content/ArticleMain"
import ArticlesWithContentInfiniteScroll from "../article/common/organisms/article-content/ArticlesWithContentInfiniteScroll"
import RecommendArticles from "../article/component/RecommendArticles"

const draftLoginSchema = z.object({
  password: z.string().min(1, { message: "請輸入密碼" }),
})

export type DraftLoginValues = z.infer<typeof draftLoginSchema>

const defaultValues: DraftLoginValues = {
  password: "",
}

const DraftLoginPage = ({ articleId }: { articleId: string }) => {
  const [wrongPassword, setWrongPassword] = useState(false)
  const [mainArticle, setMainArticle] = useState<any>(null)
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL
  const secret = process.env.NEXT_PUBLIC_PREVIEW_SECRET

  const [password, setPassword] = useState("")
  const [mask, setMask] = useState(true)
  // const router = useRouter()

  const form = useForm<DraftLoginValues>({
    resolver: zodResolver(draftLoginSchema),
    defaultValues,
  })
  const onSubmit = async (formValues: { password: string }, e: any) => {
    e?.preventDefault()
    const password = formValues["password"]
    const response: Response = await fetch("/api/draft", {
      method: "POST",
      body: JSON.stringify({
        articleId: parseInt(articleId),
        password: password,
      }),
    })

    const mainArticle: any = await response.json()

    if (mainArticle.data === null) {
      const message: string | null = mainArticle.error?.message
      setMainArticle(null)
      if (message && message.toLowerCase().includes("password does not match")) {
        setWrongPassword(true)
      }
      // update mainArticle state
    } else {
      setMainArticle(mainArticle)
    }
  }

  // based on mainArticle state, display either form or article
  if (!mainArticle) {
    return (
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex h-screen flex-col flex-wrap content-center bg-[#F7F6EF]">
          <div className="flex h-screen max-w-[500px] flex-col items-center justify-center">
            {/* <Image
              className="mx-auto lg:m-0"
              src="/mc-logo.svg"
              alt="logo"
              width={250}
              height={99.67}
              style={{
                marginBottom: "20px",
                maxWidth: "100%",
                height: "auto",
              }}
            /> */}
            <div className="flex h-[300px] w-[500px] flex-col items-center justify-center bg-white">
              <div className="mb-[18px] w-full flex-wrap content-center text-center text-3xl font-black">客戶登入</div>
              <div
                className={
                  wrongPassword
                    ? "flex h-[38px] w-[350px] flex-row items-center border border-solid border-rose-600 p-2"
                    : "flex h-[38px] w-[350px] flex-row items-center border border-solid p-2"
                }
              >
                <input
                  placeholder="請輸入密碼"
                  className="flex-1 pl-2 outline-white"
                  type={mask ? "password" : "text"}
                  // id="pr-password"
                  // name="pr-password"
                  // onChange={passwordChange}
                  // value={password}
                  {...form.register("password")}
                />
                <div>
                  {/* <Image
                    src={mask ? "/unmask.png" : "/mask.png"}
                    width={20}
                    height={10}
                    alt=""
                    onClick={() => {
                      setMask(!mask);
                    }}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  /> */}
                </div>
              </div>
              {wrongPassword && (
                <div className="mt-2 w-[350px] text-xs text-red-600">
                  The password you entered is incorrect. Try again or contact admin for assistance.
                </div>
              )}
              {/* <button
                className="mt-4 h-[38px] w-[350px] bg-black text-lg text-white"
                type="button"
                onClick={() => {
                  router.push(`/article/${articleId}?password=${password}`)
                }}
              >
                登入
              </button> */}
              {/* <Button type="submit" className="w-full cta" disabled={loading}> */}
              <Button type="submit" className="mt-4 h-[38px] w-[350px] cta">
                {/* {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />} */}
                登入
              </Button>
            </div>
          </div>
        </div>
      </form>
    )
  } else {
    return (
      <>
        <Container>
          {/* <PreviewBanner /> */}
          {mainArticle ? (
            <ArticleMain
              titleVariant={"h1"}
              articleItemVariant={`vertical`}
              article={mainArticle}
              isArticlePreview={true}
            />
          ) : null}

          {/* <ArticlesWithContentInfiniteScroll
            articleIdsToExclude={mainArticle?.articleId ? [mainArticle.articleId] : []}
          /> */}

          {/* <RecommendArticles categoryLabel={mainArticle?.categoryLabel} /> */}
          {/* <ArticleProgressBar /> */}
        </Container>
      </>
    )
  }
}

export default DraftLoginPage
