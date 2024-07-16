import { BookmarkType } from "@/common/types/bookmarkTypes"
import { getStrapiURL } from "@/utils"

type Props = {
  bookmarkId: string
  bookmarkType: BookmarkType
  token: string
}

export const createBookmark = async ({ bookmarkId, bookmarkType, token }: Props) => {
  try {
    const response = await fetch(getStrapiURL(`/api/bookmark/${bookmarkType}/${bookmarkId}`), {
      method: "PUT",
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    })

    if (!response.ok) {
      // setSubmitErrors(response.error?.message);
      console.error("createBookmark error")
      return false
    } else {
      return true
    }
  } catch (error) {
    console.error(`createBookmark error: `, error)
    return false
  }
}
