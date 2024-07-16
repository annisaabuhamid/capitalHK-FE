import { type NextRequest, NextResponse } from 'next/server'
import { redirect } from 'next/navigation'
import { draftMode } from 'next/headers';
import { z } from 'zod';
import { getArticleById } from '@/common/utils/data/article/getArticleById';
import { transformArticleShape } from '@/common/utils/transformArticleShape';
import { ArticleBasicFragmentWithContent } from '@/common/types';
import qs from 'qs';

const pluralize = require('pluralize')

interface Draft {
  slug: string;
  apiId: string;
  kind: string;
  draft: boolean;
}

const DraftSchema = z.object({
  articleId: z
    .number()
    .int()
    .positive(),
  password: z
    .string()
    .trim()
    .min(1),
});

const getStrapiURL = (path: string = ''): string => {
  return `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"}${path}`;
}

/** Keeping this code, might be useful in future */
const getData = ({ slug, apiId, kind, draft }: Draft) => {
  const draftParams = draft ? "&publicationState=preview&secret=ARNFCb9zrC9ZHm5hZzCigWivD40icS4s" : "";
  
  if (kind == "collectionType") {
    let prefix = `/${pluralize(apiId)}`;
    if (apiId == "page") {
      prefix = '';
    } else if (apiId == "article") {
      prefix = '/blog';
    }
    const slugToReturn = slug;
    const apiUrl = `/${pluralize(apiId)}?filters[id][$eq]=${slug}&${draftParams}&populate[blocks][populate]=members.picture,header,buttons.link,faq,featuresCheck,cards,pricingCards.perks,articles,restaurants,author.picture,images,cards.image,image&populate[seo][populate]=metaSocial.image`;

    draftMode().enable()

    return {
      data: getStrapiURL(apiUrl),
      slug: slugToReturn,
    };
  } else {
    const apiUrl = `/${apiId}?${draftParams}&populate[blocks][populate]=*,buttons.link&&populate[header]=*&populate[seo]=metaSocial`;

    if (apiId.includes("-page")) {
      const slugToReturn =
        apiId == "blog-page" ? `/${apiId.replace("-page", "")}` : `/${apiId.replace("-page", "s")}`;
      return {
        data: getStrapiURL(apiUrl),
        slug: slugToReturn,
      };
    } else {
      return {
        data: getStrapiURL(apiUrl),
        slug: `/${slug}`,
      };
    }
  }
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const slug = searchParams.get('slug');
  const apiId = searchParams.get('apiId');
  const kind = searchParams.get('kind');


  if (!slug) {
    return new Response('Invalid slug.', {
      status: 401
    });
  }

  const draftArticle: Draft = {
    slug: slug,
    apiId: apiId ?? '',
    kind: kind ?? '',
    draft: true
  }

  const draftData = getData(draftArticle);

  if (!draftData) {
    return new Response('Invalid slug.', {
      status: 401
    });
  }

  const host = process.env.NEXTAUTH_URL;
  draftMode().enable();
  redirect(encodeURI(host + "/" + draftData.slug))
}

export async function POST(request: Request) {
  if (draftMode().isEnabled) {
    const body = <any>await request.json();
    const validate = DraftSchema.safeParse(body)
    if (!validate.success) {
      return new Response(JSON.stringify(validate), {status: 400});
    }
    const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
    const secret = process.env.NEXT_PUBLIC_PREVIEW_SECRET;
    const { articleId, password } = validate.data;
    
    const previewQuery = `publicationState=preview&secret=${secret}&password=${password}`;

    const query = qs.stringify(
      {
          populate: {
              keyVisualHorizontal: { populate: "*"},
              blocks: {
                  on: {
                      "article.product-rate": {
                          populate: [
                            "Label",
                            "score",
                            "ProductRate",                          
                            "ProductRate.Icon",
                            "ProductRate.Icon.icon",
                            "ProductRate.Icon.iconFilled",],
                      },
                      "article.image": { populate: "*" },
                      "article.listicle-title": { populate: "*" },
                      "article.image-carousel": {
                          populate: ["ImageCarousel", "ImageCarousel.image"],
                      },
                      "article.product-list": {
                          populate: ["Products", "Products.product", "Products.product.image"],
                      },
                      "article.prize-list":{
                        populate: ["name", "companyName", "content1", "content2", "prizeList.companyLogo"]
                      },
                      "article.question-answer": { populate: "*" },
                      "article.question-answer2-columns": { populate: "*" },
                      "article.info-box": { populate: "*" },
                      "article.tips-box": { populate: "*" },
                      "article.rich-text": { populate: "*" },
                      "article.embed-video": { populate: "*" },
                      "article.product-review": {
                          populate: [
                              "ListicleTitle",
                              "ImageCarousel",
                              "ImageCarousel.image",
                              "ProductRate",
                              "ProductRate.Icon",
                              "ProductRate.Icon.icon",
                              "ProductRate.Icon.iconFilled",
                              ""
                          ],
                      },
                      "article.faq":{ populate: "*"},
                      "article.editor-pick-article": { populate: "*" },
                      "article.embed-instagram": { populate: "*" },
                      "article.video": { populate: "*" },
                      "article.picture-with-tag": {
                          populate: [
                              "Image",
                              "tags.PositionX",
                              "tags.PositionY",
                              "tags.product.image",
                              "tags.product",
                              "tags.title",
                          ],
                      },
                      "article.image-gallery": {
                          populate: ["ImageGallery", "ImageGallery.image", "ImageGallery.description", "ImageGallery.url", "ImageGallery.title"],
                      },
                      "article.hot-offer": {
                          populate: ["products", "products.image"],
                      },
                  },
              },
          }
      },
  );

    let fetchUrl = `${strapiUrl}/api/articles?filters[id][$eq]=${articleId}&${previewQuery}&${query}`;


    
    console.log(fetchUrl)
    const response: Response = await fetch(fetchUrl, {cache: "no-cache"});
    const statusCode = response.status;
    const result: any = await response.json();

    const rawArticleList = (result.data ?? []) as ArticleBasicFragmentWithContent[]
    const articles = transformArticleShape(rawArticleList)
    let article = articles[0] ?? null

    if (result.data?.length) {
      return NextResponse.json(
        article
      )
    } else {
      return NextResponse.json(result ,{status: statusCode});
    }
  } else {
    return new Response('', {status: 400});
  }
}