import { EditorFragmentFragment } from "@/common/lib/graphql/generated/graphql"

export const transformEditorShape = (editors: EditorFragmentFragment[] | readonly EditorFragmentFragment[]) => {
  const transformedEditors = editors.map((editor) => {
    const id = editor.id
    const attrs = editor.attributes
    const { avatar, name, slug, biography, title } = attrs || {}
    const avatarUrl = avatar?.data?.attributes?.formats?.small?.url ?? avatar?.data?.attributes?.url
    const newEditor = { avatarUrl, name, slug, biography, title, id }
    return newEditor
  })

  return transformedEditors
}
