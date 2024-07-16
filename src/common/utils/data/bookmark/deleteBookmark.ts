import { BookmarkType } from "@/common/types/bookmarkTypes"
import { getStrapiURL } from "@/utils"

type Props = {
  bookmarkId: string
  bookmarkType: BookmarkType
  token: string
}

export const deleteBookmark = async ({ bookmarkId, bookmarkType, token }: Props) => {
  try {
    const response = await fetch(getStrapiURL(`/api/bookmark/${bookmarkType}/${bookmarkId}`), {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
    })

    if (!response.ok) {
      // setSubmitErrors(response.error?.message);
      console.error("deleteBookmark error")
      return false
    } else {
      return true
    }
  } catch (error) {
    console.error(`deleteBookmark error: `, error)
    return false
  }
}
