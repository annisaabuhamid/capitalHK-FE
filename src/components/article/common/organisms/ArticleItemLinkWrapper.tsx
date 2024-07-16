"use client"

import Link, { LinkProps } from "next/link"
import { useParams, usePathname } from "next/navigation"
import React from "react"
import { ArticleBasicFragment } from "@/common/lib/graphql/generated/graphql"
import { renderRootPath } from "@/utils"

type EitherSlugOrHref =
  | {
      href: LinkProps["href"]
      slug?: never
    }
  | {
      slug: string
      href?: never
    }

type CustomLinkAttributes = {
  children?: React.ReactNode
  categories?: NonNullable<ArticleBasicFragment["attributes"]>["categories"]

  // extend more custom attributes here
}
export type CustomLinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> &
  Omit<LinkProps, "href"> &
  CustomLinkAttributes &
  EitherSlugOrHref &
  React.RefAttributes<HTMLAnchorElement>

type Props = CustomLinkProps

function ArticleItemLinkWrapper({ children, categories, ...linkProps }: Props) {
  const pathname = usePathname()
  // append slug to url pathname
  let href: LinkProps["href"] = ""

  const router = usePathname()
  const dynamicRouter = useParams()

  const catSlug = renderRootPath(router, dynamicRouter, categories)

  if (linkProps.href) {
    href = linkProps.href
  } else if (linkProps.slug) {
    const rawSlug = linkProps.slug
    const slugWithSlash = rawSlug.startsWith("/") ? rawSlug : `/${rawSlug}`
    const validPathname = pathname.endsWith("/") ? pathname.slice(0, -1) : pathname
    href = `${validPathname}${slugWithSlash}`
  }

  const finalHref = `${catSlug}/${linkProps.slug}`

  return (
    <Link {...linkProps} href={finalHref}>
      {children}
    </Link>
  )
}

export default ArticleItemLinkWrapper
