import { InMemoryCacheConfig } from "@apollo/client"

export const inMemoryCacheConfig: InMemoryCacheConfig = {
  addTypename: true,
  possibleTypes: {
    HomePageCarouselDynamicZone: [
      "ComponentHomeBannerArticleFragment",
      "ComponentHomeBannerImageFragment",
      "ComponentHomeBannerVideoMp4Fragment",
      "ComponentHomeBannerVideoUrlFragment",
      "Error",
    ],
    HomePageCategoryFeatureDynamicZone: ["ComponentHomeCategoryFeature", "Error"],
  },
  typePolicies: {
    HomePage: {
      merge: true,
      fields: {
        attributes: {
          merge: true,
        },
      },
    },
    Article: {
      merge: true,
    },
    Tag: {
      merge: true,
    },
    CategoryEntity: {
      fields: {
        attributes: {
          merge: true,
        },
      },
    },
    UploadFile: {
      keyFields: ["url"],
      fields: {
        attributes: {},
      },
    },
    EditorEntity: {
      fields: {
        attributes: {
          merge: true,
        },
      },
    },
    UsersPermissionsUserEntity: {
      fields: {
        attributes: {
          merge(existing, incoming, { mergeObjects }) {
            return mergeObjects(existing, incoming)
          },
        },
      },
    },
    UsersPermissionsUser: {
      fields: {
        attributes: {
          merge(existing, incoming, { mergeObjects }) {
            return mergeObjects(existing, incoming)
          },
        },
        // attributes: {
        //   merge: true,
        // },
      },
    },
  },
}
