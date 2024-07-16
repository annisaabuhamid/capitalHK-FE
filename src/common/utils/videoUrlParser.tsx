import urlParser from "js-video-url-parser/lib/base"
import "js-video-url-parser/lib/provider/vimeo"
import "js-video-url-parser/lib/provider/youtube"
import { OptionalString } from "../types"

export function videoUrlParser(url: OptionalString) {
  const matches = urlParser.parse(url ?? "")

  switch (matches?.provider) {
    case "youtube":
      return {
        type: matches.provider,
        id: matches.id,
        src: "https://www.youtube.com/embed/" + matches.id,
      }
    case "vimeo":
      return {
        type: matches.provider,
        id: matches.id,
        src: "https://player.vimeo.com/video/" + matches.id,
      }
  }
}
