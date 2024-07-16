import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  ArticleBlocksDynamicZoneInput: { input: any; output: any; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  HomePageCarouselDynamicZoneInput: { input: any; output: any; }
  HomePageCategoryFeatureDynamicZoneInput: { input: any; output: any; }
  JSON: { input: any; output: any; }
  PageBlocksDynamicZoneInput: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type AdBanner = {
  __typename?: 'AdBanner';
  ad_unit_path: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  size_mapping: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type AdBannerEntity = {
  __typename?: 'AdBannerEntity';
  attributes?: Maybe<AdBanner>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type AdBannerEntityResponse = {
  __typename?: 'AdBannerEntityResponse';
  data?: Maybe<AdBannerEntity>;
};

export type AdBannerEntityResponseCollection = {
  __typename?: 'AdBannerEntityResponseCollection';
  data: Array<AdBannerEntity>;
  meta: ResponseCollectionMeta;
};

export type AdBannerFiltersInput = {
  ad_unit_path?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<AdBannerFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<AdBannerFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<AdBannerFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  size_mapping?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type AdBannerInput = {
  ad_unit_path?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']['input']>;
  size_mapping?: InputMaybe<Scalars['String']['input']>;
};

export type Article = {
  __typename?: 'Article';
  Interviewee?: Maybe<ComponentArticleInterviewee>;
  ad_banner_side?: Maybe<AdBannerEntityResponse>;
  blocks?: Maybe<Array<Maybe<ArticleBlocksDynamicZone>>>;
  categories?: Maybe<CategoryRelationResponseCollection>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  editor?: Maybe<EditorEntityResponse>;
  editorSelect?: Maybe<Scalars['Boolean']['output']>;
  hideKeyVisual?: Maybe<Scalars['Boolean']['output']>;
  keyVisualHorizontal: UploadFileEntityResponse;
  keyVisualSquare?: Maybe<UploadFileEntityResponse>;
  keyVisualVertical?: Maybe<UploadFileEntityResponse>;
  layout?: Maybe<Enum_Article_Layout>;
  otherEventArticles?: Maybe<ArticleRelationResponseCollection>;
  password?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedDate: Scalars['Date']['output'];
  relatedArticles?: Maybe<ArticleRelationResponseCollection>;
  seo?: Maybe<ComponentSharedSeo>;
  sidenote?: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  stockQuote?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<TagRelationResponseCollection>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
  wp_id?: Maybe<Scalars['Int']['output']>;
};


export type ArticleCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ArticleOtherEventArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ArticleRelatedArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ArticleTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ArticleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ArticleBlocksDynamicZone = ComponentArticleEmbedInstagram | ComponentArticleEmbedVideo | ComponentArticleFaq | ComponentArticleImage | ComponentArticleImageCarousel | ComponentArticleImageGallery | ComponentArticleInfoBox | ComponentArticleListicleTitle | ComponentArticlePictureWithTag | ComponentArticlePrizeList | ComponentArticleProductList | ComponentArticleProductRate | ComponentArticleProductReview | ComponentArticleQuestionAnswer | ComponentArticleQuestionAnswer2Columns | ComponentArticleRichText | ComponentArticleTipsBox | ComponentArticleVideo | Error;

export type ArticleEntity = {
  __typename?: 'ArticleEntity';
  attributes?: Maybe<Article>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ArticleEntityResponse = {
  __typename?: 'ArticleEntityResponse';
  data?: Maybe<ArticleEntity>;
};

export type ArticleEntityResponseCollection = {
  __typename?: 'ArticleEntityResponseCollection';
  data: Array<ArticleEntity>;
  meta: ResponseCollectionMeta;
};

export type ArticleFiltersInput = {
  Interviewee?: InputMaybe<ComponentArticleIntervieweeFiltersInput>;
  ad_banner_side?: InputMaybe<AdBannerFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
  categories?: InputMaybe<CategoryFiltersInput>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  editor?: InputMaybe<EditorFiltersInput>;
  editorSelect?: InputMaybe<BooleanFilterInput>;
  hideKeyVisual?: InputMaybe<BooleanFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  layout?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ArticleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ArticleFiltersInput>>>;
  otherEventArticles?: InputMaybe<ArticleFiltersInput>;
  password?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  publishedDate?: InputMaybe<DateFilterInput>;
  relatedArticles?: InputMaybe<ArticleFiltersInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  sidenote?: InputMaybe<StringFilterInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  stockQuote?: InputMaybe<StringFilterInput>;
  tags?: InputMaybe<TagFiltersInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
  wp_id?: InputMaybe<IntFilterInput>;
};

export type ArticleInput = {
  Interviewee?: InputMaybe<ComponentArticleIntervieweeInput>;
  ad_banner_side?: InputMaybe<Scalars['ID']['input']>;
  blocks?: InputMaybe<Array<Scalars['ArticleBlocksDynamicZoneInput']['input']>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  content?: InputMaybe<Scalars['String']['input']>;
  editor?: InputMaybe<Scalars['ID']['input']>;
  editorSelect?: InputMaybe<Scalars['Boolean']['input']>;
  hideKeyVisual?: InputMaybe<Scalars['Boolean']['input']>;
  keyVisualHorizontal?: InputMaybe<Scalars['ID']['input']>;
  keyVisualSquare?: InputMaybe<Scalars['ID']['input']>;
  keyVisualVertical?: InputMaybe<Scalars['ID']['input']>;
  layout?: InputMaybe<Enum_Article_Layout>;
  otherEventArticles?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedDate?: InputMaybe<Scalars['Date']['input']>;
  relatedArticles?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  sidenote?: InputMaybe<Scalars['String']['input']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  stockQuote?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  wp_id?: InputMaybe<Scalars['Int']['input']>;
};

export type ArticleRelationResponseCollection = {
  __typename?: 'ArticleRelationResponseCollection';
  data: Array<ArticleEntity>;
};

export type BookmarkInput = {
  id: Scalars['ID']['input'];
  operation: BookmarkOperation;
  type: BookmarkType;
};

export enum BookmarkOperation {
  Insert = 'insert',
  Remove = 'remove'
}

export type BookmarkPayload = {
  __typename?: 'BookmarkPayload';
  articles?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  editors?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
  information_boxes?: Maybe<Array<Maybe<Scalars['Int']['output']>>>;
};

export enum BookmarkType {
  Articles = 'articles',
  Editors = 'editors',
  InformationBoxes = 'information_boxes'
}

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BossDiary = {
  __typename?: 'BossDiary';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  name: Scalars['String']['output'];
  portrait: UploadFileEntityResponse;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type BossDiaryEntity = {
  __typename?: 'BossDiaryEntity';
  attributes?: Maybe<BossDiary>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type BossDiaryEntityResponse = {
  __typename?: 'BossDiaryEntityResponse';
  data?: Maybe<BossDiaryEntity>;
};

export type BossDiaryInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  portrait?: InputMaybe<Scalars['ID']['input']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type Category = {
  __typename?: 'Category';
  ListingOrder?: Maybe<Scalars['Int']['output']>;
  Topic?: Maybe<ComponentArticleTopic>;
  ad_banner_in_between?: Maybe<AdBannerEntityResponse>;
  ad_banner_side?: Maybe<AdBannerEntityResponse>;
  articles?: Maybe<ArticleRelationResponseCollection>;
  bloggerList?: Maybe<EditorRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  editorPicks?: Maybe<ArticleRelationResponseCollection>;
  layout?: Maybe<Enum_Category_Layout>;
  name: Scalars['String']['output'];
  parentCategory?: Maybe<CategoryEntityResponse>;
  pinArticle?: Maybe<ArticleEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  recommendArticles?: Maybe<ArticleRelationResponseCollection>;
  seo?: Maybe<ComponentSharedSeo>;
  slug: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type CategoryArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CategoryBloggerListArgs = {
  filters?: InputMaybe<EditorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CategoryEditorPicksArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CategoryRecommendArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CategoryEntity = {
  __typename?: 'CategoryEntity';
  attributes?: Maybe<Category>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CategoryEntityResponse = {
  __typename?: 'CategoryEntityResponse';
  data?: Maybe<CategoryEntity>;
};

export type CategoryEntityResponseCollection = {
  __typename?: 'CategoryEntityResponseCollection';
  data: Array<CategoryEntity>;
  meta: ResponseCollectionMeta;
};

export type CategoryFiltersInput = {
  ListingOrder?: InputMaybe<IntFilterInput>;
  Topic?: InputMaybe<ComponentArticleTopicFiltersInput>;
  ad_banner_in_between?: InputMaybe<AdBannerFiltersInput>;
  ad_banner_side?: InputMaybe<AdBannerFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  articles?: InputMaybe<ArticleFiltersInput>;
  bloggerList?: InputMaybe<EditorFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  editorPicks?: InputMaybe<ArticleFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  layout?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CategoryFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CategoryFiltersInput>>>;
  parentCategory?: InputMaybe<CategoryFiltersInput>;
  pinArticle?: InputMaybe<ArticleFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  recommendArticles?: InputMaybe<ArticleFiltersInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type CategoryInput = {
  ListingOrder?: InputMaybe<Scalars['Int']['input']>;
  Topic?: InputMaybe<ComponentArticleTopicInput>;
  ad_banner_in_between?: InputMaybe<Scalars['ID']['input']>;
  ad_banner_side?: InputMaybe<Scalars['ID']['input']>;
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  bloggerList?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  editorPicks?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  layout?: InputMaybe<Enum_Category_Layout>;
  name?: InputMaybe<Scalars['String']['input']>;
  parentCategory?: InputMaybe<Scalars['ID']['input']>;
  pinArticle?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  recommendArticles?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type CategoryRelationResponseCollection = {
  __typename?: 'CategoryRelationResponseCollection';
  data: Array<CategoryEntity>;
};

export type ComponentArticleEditorPick = {
  __typename?: 'ComponentArticleEditorPick';
  articles?: Maybe<ArticleRelationResponseCollection>;
  id: Scalars['ID']['output'];
};


export type ComponentArticleEditorPickArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentArticleEmbedInstagram = {
  __typename?: 'ComponentArticleEmbedInstagram';
  URL: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type ComponentArticleEmbedVideo = {
  __typename?: 'ComponentArticleEmbedVideo';
  URL: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: UploadFileEntityResponse;
  name: Scalars['String']['output'];
};

export type ComponentArticleFaq = {
  __typename?: 'ComponentArticleFaq';
  faq?: Maybe<Array<Maybe<ComponentArticleQuestionAnswer>>>;
  id: Scalars['ID']['output'];
};


export type ComponentArticleFaqFaqArgs = {
  filters?: InputMaybe<ComponentArticleQuestionAnswerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentArticleImage = {
  __typename?: 'ComponentArticleImage';
  caption?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
};

export type ComponentArticleImageCarousel = {
  __typename?: 'ComponentArticleImageCarousel';
  ImageCarousel?: Maybe<Array<Maybe<ComponentSharedImage>>>;
  id: Scalars['ID']['output'];
};


export type ComponentArticleImageCarouselImageCarouselArgs = {
  filters?: InputMaybe<ComponentSharedImageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentArticleImageGallery = {
  __typename?: 'ComponentArticleImageGallery';
  ImageGallery?: Maybe<Array<Maybe<ComponentSharedImage>>>;
  id: Scalars['ID']['output'];
};


export type ComponentArticleImageGalleryImageGalleryArgs = {
  filters?: InputMaybe<ComponentSharedImageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentArticleImageWithContent = {
  __typename?: 'ComponentArticleImageWithContent';
  content?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
  showAtRightColumn?: Maybe<Scalars['Boolean']['output']>;
};

export type ComponentArticleInfoBox = {
  __typename?: 'ComponentArticleInfoBox';
  id: Scalars['ID']['output'];
  information_box?: Maybe<InformationBoxEntityResponse>;
};

export type ComponentArticleInterviewee = {
  __typename?: 'ComponentArticleInterviewee';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  portrait: UploadFileEntityResponse;
  title: Scalars['String']['output'];
};

export type ComponentArticleIntervieweeFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentArticleIntervieweeFiltersInput>>>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentArticleIntervieweeFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentArticleIntervieweeFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentArticleIntervieweeInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  portrait?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentArticleListicleTitle = {
  __typename?: 'ComponentArticleListicleTitle';
  Number?: Maybe<Scalars['Int']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentArticlePictureWithTag = {
  __typename?: 'ComponentArticlePictureWithTag';
  Image?: Maybe<UploadFileEntityResponse>;
  id: Scalars['ID']['output'];
  tags?: Maybe<Array<Maybe<ComponentSharedTag>>>;
};


export type ComponentArticlePictureWithTagTagsArgs = {
  filters?: InputMaybe<ComponentSharedTagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentArticlePrizeList = {
  __typename?: 'ComponentArticlePrizeList';
  id: Scalars['ID']['output'];
  prizeList?: Maybe<Array<Maybe<ComponentCommonPrizeList>>>;
};


export type ComponentArticlePrizeListPrizeListArgs = {
  filters?: InputMaybe<ComponentCommonPrizeListFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentArticleProductList = {
  __typename?: 'ComponentArticleProductList';
  Products?: Maybe<Array<Maybe<ComponentSharedProducts>>>;
  id: Scalars['ID']['output'];
};


export type ComponentArticleProductListProductsArgs = {
  filters?: InputMaybe<ComponentSharedProductsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentArticleProductRate = {
  __typename?: 'ComponentArticleProductRate';
  ProductRate?: Maybe<Array<Maybe<ComponentCommonProductRate>>>;
  id: Scalars['ID']['output'];
};


export type ComponentArticleProductRateProductRateArgs = {
  filters?: InputMaybe<ComponentCommonProductRateFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentArticleProductReview = {
  __typename?: 'ComponentArticleProductReview';
  ImageCarousel?: Maybe<Array<Maybe<ComponentSharedImage>>>;
  ListicleTitle?: Maybe<ComponentArticleListicleTitle>;
  ProductRate?: Maybe<Array<Maybe<ComponentCommonProductRate>>>;
  id: Scalars['ID']['output'];
};


export type ComponentArticleProductReviewImageCarouselArgs = {
  filters?: InputMaybe<ComponentSharedImageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentArticleProductReviewProductRateArgs = {
  filters?: InputMaybe<ComponentCommonProductRateFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentArticleQuestionAnswer = {
  __typename?: 'ComponentArticleQuestionAnswer';
  Answer?: Maybe<Scalars['String']['output']>;
  Question?: Maybe<Scalars['String']['output']>;
  SubAnswer?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentArticleQuestionAnswer2Columns = {
  __typename?: 'ComponentArticleQuestionAnswer2Columns';
  QuestionAnswers?: Maybe<Array<Maybe<ComponentArticleQuestionAnswer>>>;
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
  imageCaption?: Maybe<Scalars['String']['output']>;
  showAtRightColumn?: Maybe<Scalars['Boolean']['output']>;
};


export type ComponentArticleQuestionAnswer2ColumnsQuestionAnswersArgs = {
  filters?: InputMaybe<ComponentArticleQuestionAnswerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentArticleQuestionAnswerFiltersInput = {
  Answer?: InputMaybe<StringFilterInput>;
  Question?: InputMaybe<StringFilterInput>;
  SubAnswer?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentArticleQuestionAnswerFiltersInput>>>;
  not?: InputMaybe<ComponentArticleQuestionAnswerFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentArticleQuestionAnswerFiltersInput>>>;
};

export type ComponentArticleRichText = {
  __typename?: 'ComponentArticleRichText';
  id: Scalars['ID']['output'];
  richText?: Maybe<Scalars['String']['output']>;
};

export type ComponentArticleTipsBox = {
  __typename?: 'ComponentArticleTipsBox';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type ComponentArticleTopic = {
  __typename?: 'ComponentArticleTopic';
  id: Scalars['ID']['output'];
  keyVisualHorizontal: UploadFileEntityResponse;
};

export type ComponentArticleTopicFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentArticleTopicFiltersInput>>>;
  not?: InputMaybe<ComponentArticleTopicFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentArticleTopicFiltersInput>>>;
};

export type ComponentArticleTopicInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  keyVisualHorizontal?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentArticleVideo = {
  __typename?: 'ComponentArticleVideo';
  id: Scalars['ID']['output'];
  image: UploadFileEntityResponse;
  name?: Maybe<Scalars['String']['output']>;
  video: UploadFileEntityResponse;
};

export type ComponentCommonLink = {
  __typename?: 'ComponentCommonLink';
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  target: Enum_Componentcommonlink_Target;
  url: Scalars['String']['output'];
};

export type ComponentCommonLinkFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCommonLinkFiltersInput>>>;
  label?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentCommonLinkFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentCommonLinkFiltersInput>>>;
  target?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentCommonLinkInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  target?: InputMaybe<Enum_Componentcommonlink_Target>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentCommonPrizeList = {
  __typename?: 'ComponentCommonPrizeList';
  companyLogo: UploadFileEntityResponse;
  companyName?: Maybe<Scalars['String']['output']>;
  content1?: Maybe<Scalars['String']['output']>;
  content2?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type ComponentCommonPrizeListFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentCommonPrizeListFiltersInput>>>;
  companyName?: InputMaybe<StringFilterInput>;
  content1?: InputMaybe<StringFilterInput>;
  content2?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentCommonPrizeListFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentCommonPrizeListFiltersInput>>>;
};

export type ComponentCommonProductRate = {
  __typename?: 'ComponentCommonProductRate';
  Icon?: Maybe<ScoreEntityResponse>;
  Label?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  score?: Maybe<Scalars['Int']['output']>;
};

export type ComponentCommonProductRateFiltersInput = {
  Icon?: InputMaybe<ScoreFiltersInput>;
  Label?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentCommonProductRateFiltersInput>>>;
  not?: InputMaybe<ComponentCommonProductRateFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentCommonProductRateFiltersInput>>>;
  score?: InputMaybe<IntFilterInput>;
};

export type ComponentCommonSingleArticle = {
  __typename?: 'ComponentCommonSingleArticle';
  article?: Maybe<ArticleEntityResponse>;
  id: Scalars['ID']['output'];
};

export type ComponentGlobalCustomPages = {
  __typename?: 'ComponentGlobalCustomPages';
  PageLink?: Maybe<Array<Maybe<ComponentCommonLink>>>;
  id: Scalars['ID']['output'];
};


export type ComponentGlobalCustomPagesPageLinkArgs = {
  filters?: InputMaybe<ComponentCommonLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentGlobalCustomPagesInput = {
  PageLink?: InputMaybe<Array<InputMaybe<ComponentCommonLinkInput>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentGlobalMagazine = {
  __typename?: 'ComponentGlobalMagazine';
  ctaLabel: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  magazineCover: UploadFileEntityResponse;
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type ComponentGlobalMagazineInput = {
  ctaLabel?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  magazineCover?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentGlobalSocialNetworks = {
  __typename?: 'ComponentGlobalSocialNetworks';
  id: Scalars['ID']['output'];
  link?: Maybe<Array<Maybe<ComponentCommonLink>>>;
};


export type ComponentGlobalSocialNetworksLinkArgs = {
  filters?: InputMaybe<ComponentCommonLinkFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentGlobalSocialNetworksInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  link?: InputMaybe<Array<InputMaybe<ComponentCommonLinkInput>>>;
};

export type ComponentGlobalTags = {
  __typename?: 'ComponentGlobalTags';
  id: Scalars['ID']['output'];
  tags?: Maybe<TagRelationResponseCollection>;
};


export type ComponentGlobalTagsTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentGlobalTagsInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ComponentHomeBannerArticle = {
  __typename?: 'ComponentHomeBannerArticle';
  article?: Maybe<ArticleEntityResponse>;
  id: Scalars['ID']['output'];
};

export type ComponentHomeBannerImage = {
  __typename?: 'ComponentHomeBannerImage';
  id: Scalars['ID']['output'];
  image: UploadFileEntityResponse;
  target?: Maybe<Enum_Componenthomebannerimage_Target>;
  text: Scalars['String']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type ComponentHomeBannerVideoMp4 = {
  __typename?: 'ComponentHomeBannerVideoMp4';
  id: Scalars['ID']['output'];
  media?: Maybe<UploadFileEntityResponse>;
  text?: Maybe<Scalars['String']['output']>;
  video?: Maybe<UploadFileEntityResponse>;
  videoPoster?: Maybe<UploadFileRelationResponseCollection>;
};


export type ComponentHomeBannerVideoMp4VideoPosterArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentHomeBannerVideoUrl = {
  __typename?: 'ComponentHomeBannerVideoUrl';
  id: Scalars['ID']['output'];
  media?: Maybe<UploadFileEntityResponse>;
  text?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ComponentHomeCategoryColumn = {
  __typename?: 'ComponentHomeCategoryColumn';
  categories?: Maybe<CategoryRelationResponseCollection>;
  id: Scalars['ID']['output'];
};


export type ComponentHomeCategoryColumnCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentHomeCategoryColumnInput = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type ComponentHomeCategoryFeature = {
  __typename?: 'ComponentHomeCategoryFeature';
  ad_banner_in_between?: Maybe<AdBannerEntityResponse>;
  category?: Maybe<CategoryEntityResponse>;
  id: Scalars['ID']['output'];
  pinArticle?: Maybe<ArticleEntityResponse>;
};

export type ComponentHomeFeaturedSection = {
  __typename?: 'ComponentHomeFeaturedSection';
  ad_banner_side?: Maybe<AdBannerEntityResponse>;
  editor_picks?: Maybe<ArticleRelationResponseCollection>;
  id: Scalars['ID']['output'];
  popular_news?: Maybe<ArticleRelationResponseCollection>;
};


export type ComponentHomeFeaturedSectionEditor_PicksArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type ComponentHomeFeaturedSectionPopular_NewsArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentHomeFeaturedSectionInput = {
  ad_banner_side?: InputMaybe<Scalars['ID']['input']>;
  editor_picks?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  popular_news?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ComponentHomeHomeBanner = {
  __typename?: 'ComponentHomeHomeBanner';
  alternativeText?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image: UploadFileEntityResponse;
  mobileImage?: Maybe<UploadFileEntityResponse>;
  target?: Maybe<Enum_Componenthomehomebanner_Target>;
  url: Scalars['String']['output'];
};

export type ComponentHomeHomeBannerInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  mobileImage?: InputMaybe<Scalars['ID']['input']>;
  target?: InputMaybe<Enum_Componenthomehomebanner_Target>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentHomeTopic = {
  __typename?: 'ComponentHomeTopic';
  categories?: Maybe<CategoryRelationResponseCollection>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};


export type ComponentHomeTopicCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentHomeTopicInput = {
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSharedImage = {
  __typename?: 'ComponentSharedImage';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ComponentSharedImageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedImageFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedImageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedImageFiltersInput>>>;
  title?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ComponentSharedMetaSocial = {
  __typename?: 'ComponentSharedMetaSocial';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<UploadFileEntityResponse>;
  socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork;
  title: Scalars['String']['output'];
};

export type ComponentSharedMetaSocialFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>;
  description?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialFiltersInput>>>;
  socialNetwork?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
};

export type ComponentSharedMetaSocialInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  socialNetwork?: InputMaybe<Enum_Componentsharedmetasocial_Socialnetwork>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type ComponentSharedProducts = {
  __typename?: 'ComponentSharedProducts';
  id: Scalars['ID']['output'];
  product?: Maybe<ProductEntityResponse>;
};

export type ComponentSharedProductsFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedProductsFiltersInput>>>;
  not?: InputMaybe<ComponentSharedProductsFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedProductsFiltersInput>>>;
  product?: InputMaybe<ProductFiltersInput>;
};

export type ComponentSharedSeo = {
  __typename?: 'ComponentSharedSeo';
  canonicalURL?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  keywords?: Maybe<Scalars['String']['output']>;
  metaDescription: Scalars['String']['output'];
  metaImage?: Maybe<UploadFileEntityResponse>;
  metaRobots?: Maybe<Scalars['String']['output']>;
  metaSocial?: Maybe<Array<Maybe<ComponentSharedMetaSocial>>>;
  metaTitle: Scalars['String']['output'];
  metaViewport?: Maybe<Scalars['String']['output']>;
  structuredData?: Maybe<Scalars['JSON']['output']>;
};


export type ComponentSharedSeoMetaSocialArgs = {
  filters?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentSharedSeoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>;
  canonicalURL?: InputMaybe<StringFilterInput>;
  keywords?: InputMaybe<StringFilterInput>;
  metaDescription?: InputMaybe<StringFilterInput>;
  metaRobots?: InputMaybe<StringFilterInput>;
  metaSocial?: InputMaybe<ComponentSharedMetaSocialFiltersInput>;
  metaTitle?: InputMaybe<StringFilterInput>;
  metaViewport?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedSeoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedSeoFiltersInput>>>;
  structuredData?: InputMaybe<JsonFilterInput>;
};

export type ComponentSharedSeoInput = {
  canonicalURL?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaImage?: InputMaybe<Scalars['ID']['input']>;
  metaRobots?: InputMaybe<Scalars['String']['input']>;
  metaSocial?: InputMaybe<Array<InputMaybe<ComponentSharedMetaSocialInput>>>;
  metaTitle?: InputMaybe<Scalars['String']['input']>;
  metaViewport?: InputMaybe<Scalars['String']['input']>;
  structuredData?: InputMaybe<Scalars['JSON']['input']>;
};

export type ComponentSharedTag = {
  __typename?: 'ComponentSharedTag';
  PositionX?: Maybe<Scalars['Float']['output']>;
  PositionY?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  product?: Maybe<ProductEntityResponse>;
};

export type ComponentSharedTagFiltersInput = {
  PositionX?: InputMaybe<FloatFilterInput>;
  PositionY?: InputMaybe<FloatFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentSharedTagFiltersInput>>>;
  not?: InputMaybe<ComponentSharedTagFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedTagFiltersInput>>>;
  product?: InputMaybe<ProductFiltersInput>;
};

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  contains?: InputMaybe<Scalars['Date']['input']>;
  containsi?: InputMaybe<Scalars['Date']['input']>;
  endsWith?: InputMaybe<Scalars['Date']['input']>;
  eq?: InputMaybe<Scalars['Date']['input']>;
  eqi?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nei?: InputMaybe<Scalars['Date']['input']>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']['input']>;
  notContainsi?: InputMaybe<Scalars['Date']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  startsWith?: InputMaybe<Scalars['Date']['input']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum Enum_Article_Layout {
  Celebrity = 'Celebrity',
  Event = 'Event',
  Generic = 'Generic'
}

export enum Enum_Category_Layout {
  Blogger = 'Blogger',
  FirstLevel = 'First_Level',
  SecondLevel = 'Second_Level',
  ThirdLevel = 'Third_Level'
}

export enum Enum_Componentcommonlink_Target {
  Blank = 'blank',
  Self = 'self'
}

export enum Enum_Componenthomebannerimage_Target {
  Blank = 'blank',
  Parent = 'parent',
  Self = 'self',
  Top = 'top'
}

export enum Enum_Componenthomehomebanner_Target {
  Blank = 'blank',
  Parent = 'parent',
  Self = 'self',
  Top = 'top'
}

export enum Enum_Componentsharedmetasocial_Socialnetwork {
  Facebook = 'Facebook',
  Twitter = 'Twitter'
}

export enum Enum_Menusmenuitem_Target {
  Blank = 'blank',
  Parent = 'parent',
  Self = 'self',
  Top = 'top'
}

export enum Enum_Route_Type {
  Article = 'Article',
  Category = 'Category',
  Redirect = 'Redirect'
}

export enum Enum_Sitemapsitemap_Type {
  DefaultHreflang = 'default_hreflang',
  Index = 'index'
}

export enum Enum_Userspermissionsuser_Areacode {
  China_86 = 'China_86',
  HongKong_852 = 'Hong_Kong_852',
  Macao_853 = 'Macao_853',
  Singapore_65 = 'Singapore_65',
  Taiwan_886 = 'Taiwan_886'
}

export enum Enum_Userspermissionsuser_Salutation {
  Dr = 'Dr',
  Miss = 'Miss',
  Mr = 'Mr',
  Mrs = 'Mrs',
  Ms = 'Ms',
  Prof = 'Prof'
}

export type Editor = {
  __typename?: 'Editor';
  avatar: UploadFileEntityResponse;
  biography?: Maybe<Scalars['String']['output']>;
  category?: Maybe<CategoryEntityResponse>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  isBlogger?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  slug: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
  wp_id?: Maybe<Scalars['Int']['output']>;
};


export type EditorUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type EditorEntity = {
  __typename?: 'EditorEntity';
  attributes?: Maybe<Editor>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type EditorEntityResponse = {
  __typename?: 'EditorEntityResponse';
  data?: Maybe<EditorEntity>;
};

export type EditorEntityResponseCollection = {
  __typename?: 'EditorEntityResponseCollection';
  data: Array<EditorEntity>;
  meta: ResponseCollectionMeta;
};

export type EditorFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<EditorFiltersInput>>>;
  biography?: InputMaybe<StringFilterInput>;
  category?: InputMaybe<CategoryFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isBlogger?: InputMaybe<BooleanFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<EditorFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<EditorFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
  wp_id?: InputMaybe<IntFilterInput>;
};

export type EditorInput = {
  avatar?: InputMaybe<Scalars['ID']['input']>;
  biography?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Scalars['ID']['input']>;
  isBlogger?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  wp_id?: InputMaybe<Scalars['Int']['input']>;
};

export type EditorListing = {
  __typename?: 'EditorListing';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  editors?: Maybe<EditorRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type EditorListingEditorsArgs = {
  filters?: InputMaybe<EditorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type EditorListingEntity = {
  __typename?: 'EditorListingEntity';
  attributes?: Maybe<EditorListing>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type EditorListingEntityResponse = {
  __typename?: 'EditorListingEntityResponse';
  data?: Maybe<EditorListingEntity>;
};

export type EditorListingInput = {
  editors?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EditorRelationResponseCollection = {
  __typename?: 'EditorRelationResponseCollection';
  data: Array<EditorEntity>;
};

export type Error = {
  __typename?: 'Error';
  code: Scalars['String']['output'];
  message?: Maybe<Scalars['String']['output']>;
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = AdBanner | Article | BossDiary | Category | ComponentArticleEditorPick | ComponentArticleEmbedInstagram | ComponentArticleEmbedVideo | ComponentArticleFaq | ComponentArticleImage | ComponentArticleImageCarousel | ComponentArticleImageGallery | ComponentArticleImageWithContent | ComponentArticleInfoBox | ComponentArticleInterviewee | ComponentArticleListicleTitle | ComponentArticlePictureWithTag | ComponentArticlePrizeList | ComponentArticleProductList | ComponentArticleProductRate | ComponentArticleProductReview | ComponentArticleQuestionAnswer | ComponentArticleQuestionAnswer2Columns | ComponentArticleRichText | ComponentArticleTipsBox | ComponentArticleTopic | ComponentArticleVideo | ComponentCommonLink | ComponentCommonPrizeList | ComponentCommonProductRate | ComponentCommonSingleArticle | ComponentGlobalCustomPages | ComponentGlobalMagazine | ComponentGlobalSocialNetworks | ComponentGlobalTags | ComponentHomeBannerArticle | ComponentHomeBannerImage | ComponentHomeBannerVideoMp4 | ComponentHomeBannerVideoUrl | ComponentHomeCategoryColumn | ComponentHomeCategoryFeature | ComponentHomeFeaturedSection | ComponentHomeHomeBanner | ComponentHomeTopic | ComponentSharedImage | ComponentSharedMetaSocial | ComponentSharedProducts | ComponentSharedSeo | ComponentSharedTag | Editor | EditorListing | Global | HomePage | I18NLocale | InformationBox | InterestedArea | Interview | MenusMenu | MenusMenuItem | Newsletter | Page | Product | PublisherAction | RelatedArticle | Route | Score | SitemapSitemap | SitemapSitemapCache | Tag | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type Global = {
  __typename?: 'Global';
  CustomPages?: Maybe<ComponentGlobalCustomPages>;
  Magazine?: Maybe<ComponentGlobalMagazine>;
  Tags?: Maybe<ComponentGlobalTags>;
  companyLogo: UploadFileEntityResponse;
  copyright: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  logo: UploadFileEntityResponse;
  shortIntroduction?: Maybe<Scalars['String']['output']>;
  socialNetworks?: Maybe<ComponentGlobalSocialNetworks>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type GlobalEntity = {
  __typename?: 'GlobalEntity';
  attributes?: Maybe<Global>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type GlobalEntityResponse = {
  __typename?: 'GlobalEntityResponse';
  data?: Maybe<GlobalEntity>;
};

export type GlobalInput = {
  CustomPages?: InputMaybe<ComponentGlobalCustomPagesInput>;
  Magazine?: InputMaybe<ComponentGlobalMagazineInput>;
  Tags?: InputMaybe<ComponentGlobalTagsInput>;
  companyLogo?: InputMaybe<Scalars['ID']['input']>;
  copyright?: InputMaybe<Scalars['String']['input']>;
  logo?: InputMaybe<Scalars['ID']['input']>;
  shortIntroduction?: InputMaybe<Scalars['String']['input']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']['input']>;
  socialNetworks?: InputMaybe<ComponentGlobalSocialNetworksInput>;
};

export type HomePage = {
  __typename?: 'HomePage';
  Carousel: Array<Maybe<HomePageCarouselDynamicZone>>;
  CategoryColumn?: Maybe<ComponentHomeCategoryColumn>;
  CategoryFeature?: Maybe<Array<Maybe<HomePageCategoryFeatureDynamicZone>>>;
  ExpertReviewUrl?: Maybe<Scalars['String']['output']>;
  HomeTopBanner?: Maybe<ComponentHomeHomeBanner>;
  PageTitle: Scalars['String']['output'];
  Topic?: Maybe<ComponentHomeTopic>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  featuredSection: ComponentHomeFeaturedSection;
  seo?: Maybe<ComponentSharedSeo>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type HomePageCarouselDynamicZone = ComponentHomeBannerArticle | ComponentHomeBannerImage | ComponentHomeBannerVideoMp4 | ComponentHomeBannerVideoUrl | Error;

export type HomePageCategoryFeatureDynamicZone = ComponentHomeCategoryFeature | Error;

export type HomePageEntity = {
  __typename?: 'HomePageEntity';
  attributes?: Maybe<HomePage>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type HomePageEntityResponse = {
  __typename?: 'HomePageEntityResponse';
  data?: Maybe<HomePageEntity>;
};

export type HomePageInput = {
  Carousel?: InputMaybe<Array<Scalars['HomePageCarouselDynamicZoneInput']['input']>>;
  CategoryColumn?: InputMaybe<ComponentHomeCategoryColumnInput>;
  CategoryFeature?: InputMaybe<Array<Scalars['HomePageCategoryFeatureDynamicZoneInput']['input']>>;
  ExpertReviewUrl?: InputMaybe<Scalars['String']['input']>;
  HomeTopBanner?: InputMaybe<ComponentHomeHomeBannerInput>;
  PageTitle?: InputMaybe<Scalars['String']['input']>;
  Topic?: InputMaybe<ComponentHomeTopicInput>;
  featuredSection?: InputMaybe<ComponentHomeFeaturedSectionInput>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']['input']>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type InformationBox = {
  __typename?: 'InformationBox';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  hours?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  remark?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type InformationBoxUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type InformationBoxEntity = {
  __typename?: 'InformationBoxEntity';
  attributes?: Maybe<InformationBox>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type InformationBoxEntityResponse = {
  __typename?: 'InformationBoxEntityResponse';
  data?: Maybe<InformationBoxEntity>;
};

export type InformationBoxEntityResponseCollection = {
  __typename?: 'InformationBoxEntityResponseCollection';
  data: Array<InformationBoxEntity>;
  meta: ResponseCollectionMeta;
};

export type InformationBoxFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<InformationBoxFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  hours?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  location?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<InformationBoxFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<InformationBoxFiltersInput>>>;
  phone?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  remark?: InputMaybe<StringFilterInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type InformationBoxInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  hours?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  remark?: InputMaybe<Scalars['String']['input']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type InformationBoxRelationResponseCollection = {
  __typename?: 'InformationBoxRelationResponseCollection';
  data: Array<InformationBoxEntity>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type InterestedArea = {
  __typename?: 'InterestedArea';
  Title?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users_permissions_users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type InterestedAreaUsers_Permissions_UsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type InterestedAreaEntity = {
  __typename?: 'InterestedAreaEntity';
  attributes?: Maybe<InterestedArea>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type InterestedAreaEntityResponse = {
  __typename?: 'InterestedAreaEntityResponse';
  data?: Maybe<InterestedAreaEntity>;
};

export type InterestedAreaEntityResponseCollection = {
  __typename?: 'InterestedAreaEntityResponseCollection';
  data: Array<InterestedAreaEntity>;
  meta: ResponseCollectionMeta;
};

export type InterestedAreaFiltersInput = {
  Title?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<InterestedAreaFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<InterestedAreaFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<InterestedAreaFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users_permissions_users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type InterestedAreaInput = {
  Title?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']['input']>;
  users_permissions_users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type InterestedAreaRelationResponseCollection = {
  __typename?: 'InterestedAreaRelationResponseCollection';
  data: Array<InterestedAreaEntity>;
};

export type Interview = {
  __typename?: 'Interview';
  articles?: Maybe<ArticleRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};


export type InterviewArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type InterviewEntity = {
  __typename?: 'InterviewEntity';
  attributes?: Maybe<Interview>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type InterviewEntityResponse = {
  __typename?: 'InterviewEntityResponse';
  data?: Maybe<InterviewEntity>;
};

export type InterviewInput = {
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type MenusMenu = {
  __typename?: 'MenusMenu';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  items?: Maybe<MenusMenuItemRelationResponseCollection>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type MenusMenuItemsArgs = {
  filters?: InputMaybe<MenusMenuItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MenusMenuEntity = {
  __typename?: 'MenusMenuEntity';
  attributes?: Maybe<MenusMenu>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type MenusMenuEntityResponse = {
  __typename?: 'MenusMenuEntityResponse';
  data?: Maybe<MenusMenuEntity>;
};

export type MenusMenuEntityResponseCollection = {
  __typename?: 'MenusMenuEntityResponseCollection';
  data: Array<MenusMenuEntity>;
  meta: ResponseCollectionMeta;
};

export type MenusMenuFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<MenusMenuFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  items?: InputMaybe<MenusMenuItemFiltersInput>;
  not?: InputMaybe<MenusMenuFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MenusMenuFiltersInput>>>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type MenusMenuInput = {
  items?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type MenusMenuItem = {
  __typename?: 'MenusMenuItem';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  order?: Maybe<Scalars['Int']['output']>;
  parent?: Maybe<MenusMenuItemEntityResponse>;
  root_menu: MenusMenuEntityResponse;
  target?: Maybe<Enum_Menusmenuitem_Target>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type MenusMenuItemEntity = {
  __typename?: 'MenusMenuItemEntity';
  attributes?: Maybe<MenusMenuItem>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type MenusMenuItemEntityResponse = {
  __typename?: 'MenusMenuItemEntityResponse';
  data?: Maybe<MenusMenuItemEntity>;
};

export type MenusMenuItemEntityResponseCollection = {
  __typename?: 'MenusMenuItemEntityResponseCollection';
  data: Array<MenusMenuItemEntity>;
  meta: ResponseCollectionMeta;
};

export type MenusMenuItemFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<MenusMenuItemFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<MenusMenuItemFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<MenusMenuItemFiltersInput>>>;
  order?: InputMaybe<IntFilterInput>;
  parent?: InputMaybe<MenusMenuItemFiltersInput>;
  root_menu?: InputMaybe<MenusMenuFiltersInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  target?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type MenusMenuItemInput = {
  order?: InputMaybe<Scalars['Int']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  root_menu?: InputMaybe<Scalars['ID']['input']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']['input']>;
  target?: InputMaybe<Enum_Menusmenuitem_Target>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type MenusMenuItemRelationResponseCollection = {
  __typename?: 'MenusMenuItemRelationResponseCollection';
  data: Array<MenusMenuItemEntity>;
};

export type Mutation = {
  __typename?: 'Mutation';
  UsersPermissionsUpdateMe?: Maybe<UsersPermissionsUpdateMePayload>;
  bookmark?: Maybe<BookmarkPayload>;
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createAdBanner?: Maybe<AdBannerEntityResponse>;
  createArticle?: Maybe<ArticleEntityResponse>;
  createCategory?: Maybe<CategoryEntityResponse>;
  createEditor?: Maybe<EditorEntityResponse>;
  createInformationBox?: Maybe<InformationBoxEntityResponse>;
  createInterestedArea?: Maybe<InterestedAreaEntityResponse>;
  createMenusMenu?: Maybe<MenusMenuEntityResponse>;
  createMenusMenuItem?: Maybe<MenusMenuItemEntityResponse>;
  createNewsletter?: Maybe<NewsletterEntityResponse>;
  createPage?: Maybe<PageEntityResponse>;
  createProduct?: Maybe<ProductEntityResponse>;
  createPublisherAction?: Maybe<PublisherActionEntityResponse>;
  createRoute?: Maybe<RouteEntityResponse>;
  createScore?: Maybe<ScoreEntityResponse>;
  createSitemapSitemap?: Maybe<SitemapSitemapEntityResponse>;
  createSitemapSitemapCache?: Maybe<SitemapSitemapCacheEntityResponse>;
  createTag?: Maybe<TagEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteAdBanner?: Maybe<AdBannerEntityResponse>;
  deleteArticle?: Maybe<ArticleEntityResponse>;
  deleteBossDiary?: Maybe<BossDiaryEntityResponse>;
  deleteCategory?: Maybe<CategoryEntityResponse>;
  deleteEditor?: Maybe<EditorEntityResponse>;
  deleteEditorListing?: Maybe<EditorListingEntityResponse>;
  deleteGlobal?: Maybe<GlobalEntityResponse>;
  deleteHomePage?: Maybe<HomePageEntityResponse>;
  deleteInformationBox?: Maybe<InformationBoxEntityResponse>;
  deleteInterestedArea?: Maybe<InterestedAreaEntityResponse>;
  deleteInterview?: Maybe<InterviewEntityResponse>;
  deleteMenusMenu?: Maybe<MenusMenuEntityResponse>;
  deleteMenusMenuItem?: Maybe<MenusMenuItemEntityResponse>;
  deleteNewsletter?: Maybe<NewsletterEntityResponse>;
  deletePage?: Maybe<PageEntityResponse>;
  deleteProduct?: Maybe<ProductEntityResponse>;
  deletePublisherAction?: Maybe<PublisherActionEntityResponse>;
  deleteRelatedArticle?: Maybe<RelatedArticleEntityResponse>;
  deleteRoute?: Maybe<RouteEntityResponse>;
  deleteScore?: Maybe<ScoreEntityResponse>;
  deleteSitemapSitemap?: Maybe<SitemapSitemapEntityResponse>;
  deleteSitemapSitemapCache?: Maybe<SitemapSitemapCacheEntityResponse>;
  deleteTag?: Maybe<TagEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  subscribeNewsletter?: Maybe<NewsletterSubscriptionResponse>;
  unsubscribeNewsletter?: Maybe<NewsletterSubscriptionResponse>;
  updateAdBanner?: Maybe<AdBannerEntityResponse>;
  updateArticle?: Maybe<ArticleEntityResponse>;
  updateBossDiary?: Maybe<BossDiaryEntityResponse>;
  updateCategory?: Maybe<CategoryEntityResponse>;
  updateEditor?: Maybe<EditorEntityResponse>;
  updateEditorListing?: Maybe<EditorListingEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateGlobal?: Maybe<GlobalEntityResponse>;
  updateHomePage?: Maybe<HomePageEntityResponse>;
  updateInformationBox?: Maybe<InformationBoxEntityResponse>;
  updateInterestedArea?: Maybe<InterestedAreaEntityResponse>;
  updateInterview?: Maybe<InterviewEntityResponse>;
  updateMenusMenu?: Maybe<MenusMenuEntityResponse>;
  updateMenusMenuItem?: Maybe<MenusMenuItemEntityResponse>;
  updateNewsletter?: Maybe<NewsletterEntityResponse>;
  updatePage?: Maybe<PageEntityResponse>;
  updateProduct?: Maybe<ProductEntityResponse>;
  updatePublisherAction?: Maybe<PublisherActionEntityResponse>;
  updateRelatedArticle?: Maybe<RelatedArticleEntityResponse>;
  updateRoute?: Maybe<RouteEntityResponse>;
  updateScore?: Maybe<ScoreEntityResponse>;
  updateSitemapSitemap?: Maybe<SitemapSitemapEntityResponse>;
  updateSitemapSitemapCache?: Maybe<SitemapSitemapCacheEntityResponse>;
  updateTag?: Maybe<TagEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationUsersPermissionsUpdateMeArgs = {
  input?: InputMaybe<UsersPermissionsUpdateMeInput>;
};


export type MutationBookmarkArgs = {
  input?: InputMaybe<BookmarkInput>;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateAdBannerArgs = {
  data: AdBannerInput;
};


export type MutationCreateArticleArgs = {
  data: ArticleInput;
};


export type MutationCreateCategoryArgs = {
  data: CategoryInput;
};


export type MutationCreateEditorArgs = {
  data: EditorInput;
};


export type MutationCreateInformationBoxArgs = {
  data: InformationBoxInput;
};


export type MutationCreateInterestedAreaArgs = {
  data: InterestedAreaInput;
};


export type MutationCreateMenusMenuArgs = {
  data: MenusMenuInput;
};


export type MutationCreateMenusMenuItemArgs = {
  data: MenusMenuItemInput;
};


export type MutationCreateNewsletterArgs = {
  data: NewsletterInput;
};


export type MutationCreatePageArgs = {
  data: PageInput;
};


export type MutationCreateProductArgs = {
  data: ProductInput;
};


export type MutationCreatePublisherActionArgs = {
  data: PublisherActionInput;
};


export type MutationCreateRouteArgs = {
  data: RouteInput;
};


export type MutationCreateScoreArgs = {
  data: ScoreInput;
};


export type MutationCreateSitemapSitemapArgs = {
  data: SitemapSitemapInput;
};


export type MutationCreateSitemapSitemapCacheArgs = {
  data: SitemapSitemapCacheInput;
};


export type MutationCreateTagArgs = {
  data: TagInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteAdBannerArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteArticleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteEditorArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteInformationBoxArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteInterestedAreaArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteMenusMenuArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteMenusMenuItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteNewsletterArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePageArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePublisherActionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteRouteArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteScoreArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSitemapSitemapArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSitemapSitemapCacheArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTagArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationSubscribeNewsletterArgs = {
  data?: InputMaybe<NewsletterSubscriptionInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUnsubscribeNewsletterArgs = {
  data?: InputMaybe<NewsletterSubscriptionInput>;
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationUpdateAdBannerArgs = {
  data: AdBannerInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateArticleArgs = {
  data: ArticleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateBossDiaryArgs = {
  data: BossDiaryInput;
};


export type MutationUpdateCategoryArgs = {
  data: CategoryInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateEditorArgs = {
  data: EditorInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateEditorListingArgs = {
  data: EditorListingInput;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateGlobalArgs = {
  data: GlobalInput;
};


export type MutationUpdateHomePageArgs = {
  data: HomePageInput;
};


export type MutationUpdateInformationBoxArgs = {
  data: InformationBoxInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateInterestedAreaArgs = {
  data: InterestedAreaInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateInterviewArgs = {
  data: InterviewInput;
};


export type MutationUpdateMenusMenuArgs = {
  data: MenusMenuInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateMenusMenuItemArgs = {
  data: MenusMenuItemInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateNewsletterArgs = {
  data: NewsletterInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdatePageArgs = {
  data: PageInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateProductArgs = {
  data: ProductInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdatePublisherActionArgs = {
  data: PublisherActionInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateRelatedArticleArgs = {
  data: RelatedArticleInput;
};


export type MutationUpdateRouteArgs = {
  data: RouteInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateScoreArgs = {
  data: ScoreInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateSitemapSitemapArgs = {
  data: SitemapSitemapInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateSitemapSitemapCacheArgs = {
  data: SitemapSitemapCacheInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateTagArgs = {
  data: TagInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type Newsletter = {
  __typename?: 'Newsletter';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users_permissions_user?: Maybe<UsersPermissionsUserEntityResponse>;
};

export type NewsletterEntity = {
  __typename?: 'NewsletterEntity';
  attributes?: Maybe<Newsletter>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type NewsletterEntityResponse = {
  __typename?: 'NewsletterEntityResponse';
  data?: Maybe<NewsletterEntity>;
};

export type NewsletterEntityResponseCollection = {
  __typename?: 'NewsletterEntityResponseCollection';
  data: Array<NewsletterEntity>;
  meta: ResponseCollectionMeta;
};

export type NewsletterFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<NewsletterFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<NewsletterFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<NewsletterFiltersInput>>>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users_permissions_user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type NewsletterInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']['input']>;
  users_permissions_user?: InputMaybe<Scalars['ID']['input']>;
};

export type NewsletterSubscriptionInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  recaptchaToken?: InputMaybe<Scalars['String']['input']>;
};

export type NewsletterSubscriptionResponse = {
  __typename?: 'NewsletterSubscriptionResponse';
  data?: Maybe<SubscribeNewsletterEntity>;
};

export type Page = {
  __typename?: 'Page';
  blocks?: Maybe<Array<Maybe<PageBlocksDynamicZone>>>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  mastheadBanner?: Maybe<UploadFileEntityResponse>;
  mastheadTitle?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PageBlocksDynamicZone = ComponentArticleEmbedInstagram | ComponentArticleEmbedVideo | ComponentArticleFaq | ComponentArticleImage | ComponentArticleImageCarousel | ComponentArticleImageGallery | ComponentArticleImageWithContent | ComponentArticleInfoBox | ComponentArticleListicleTitle | ComponentArticlePictureWithTag | ComponentArticlePrizeList | ComponentArticleProductList | ComponentArticleProductReview | ComponentArticleQuestionAnswer | ComponentArticleQuestionAnswer2Columns | ComponentArticleRichText | ComponentArticleTipsBox | ComponentArticleVideo | Error;

export type PageEntity = {
  __typename?: 'PageEntity';
  attributes?: Maybe<Page>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type PageEntityResponse = {
  __typename?: 'PageEntityResponse';
  data?: Maybe<PageEntity>;
};

export type PageEntityResponseCollection = {
  __typename?: 'PageEntityResponseCollection';
  data: Array<PageEntity>;
  meta: ResponseCollectionMeta;
};

export type PageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>;
  content?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mastheadTitle?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<PageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  title?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PageInput = {
  blocks?: InputMaybe<Array<Scalars['PageBlocksDynamicZoneInput']['input']>>;
  content?: InputMaybe<Scalars['String']['input']>;
  mastheadBanner?: InputMaybe<Scalars['ID']['input']>;
  mastheadTitle?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type Product = {
  __typename?: 'Product';
  brand?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<UploadFileEntityResponse>;
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  retailPriceHKD?: Maybe<Scalars['Float']['output']>;
  specialPriceHKD?: Maybe<Scalars['Float']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type ProductEntity = {
  __typename?: 'ProductEntity';
  attributes?: Maybe<Product>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ProductEntityResponse = {
  __typename?: 'ProductEntityResponse';
  data?: Maybe<ProductEntity>;
};

export type ProductEntityResponseCollection = {
  __typename?: 'ProductEntityResponseCollection';
  data: Array<ProductEntity>;
  meta: ResponseCollectionMeta;
};

export type ProductFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  brand?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ProductFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProductFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  retailPriceHKD?: InputMaybe<FloatFilterInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  specialPriceHKD?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
};

export type ProductInput = {
  brand?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  retailPriceHKD?: InputMaybe<Scalars['Float']['input']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']['input']>;
  specialPriceHKD?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type PublisherAction = {
  __typename?: 'PublisherAction';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  entityId?: Maybe<Scalars['Int']['output']>;
  entitySlug?: Maybe<Scalars['String']['output']>;
  executeAt?: Maybe<Scalars['DateTime']['output']>;
  mode?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type PublisherActionEntity = {
  __typename?: 'PublisherActionEntity';
  attributes?: Maybe<PublisherAction>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type PublisherActionEntityResponse = {
  __typename?: 'PublisherActionEntityResponse';
  data?: Maybe<PublisherActionEntity>;
};

export type PublisherActionEntityResponseCollection = {
  __typename?: 'PublisherActionEntityResponseCollection';
  data: Array<PublisherActionEntity>;
  meta: ResponseCollectionMeta;
};

export type PublisherActionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<PublisherActionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  entityId?: InputMaybe<IntFilterInput>;
  entitySlug?: InputMaybe<StringFilterInput>;
  executeAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mode?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<PublisherActionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PublisherActionFiltersInput>>>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PublisherActionInput = {
  entityId?: InputMaybe<Scalars['Int']['input']>;
  entitySlug?: InputMaybe<Scalars['String']['input']>;
  executeAt?: InputMaybe<Scalars['DateTime']['input']>;
  mode?: InputMaybe<Scalars['String']['input']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Query = {
  __typename?: 'Query';
  adBanner?: Maybe<AdBannerEntityResponse>;
  adBanners?: Maybe<AdBannerEntityResponseCollection>;
  article?: Maybe<ArticleEntityResponse>;
  articles?: Maybe<ArticleEntityResponseCollection>;
  bossDiary?: Maybe<BossDiaryEntityResponse>;
  categories?: Maybe<CategoryEntityResponseCollection>;
  category?: Maybe<CategoryEntityResponse>;
  editor?: Maybe<EditorEntityResponse>;
  editorListing?: Maybe<EditorListingEntityResponse>;
  editors?: Maybe<EditorEntityResponseCollection>;
  findNewsletterSubscription?: Maybe<NewsletterSubscriptionResponse>;
  global?: Maybe<GlobalEntityResponse>;
  homePage?: Maybe<HomePageEntityResponse>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  informationBox?: Maybe<InformationBoxEntityResponse>;
  informationBoxes?: Maybe<InformationBoxEntityResponseCollection>;
  interestedArea?: Maybe<InterestedAreaEntityResponse>;
  interestedAreas?: Maybe<InterestedAreaEntityResponseCollection>;
  interview?: Maybe<InterviewEntityResponse>;
  me?: Maybe<UsersPermissionsMe>;
  menusMenu?: Maybe<MenusMenuEntityResponse>;
  menusMenuItem?: Maybe<MenusMenuItemEntityResponse>;
  menusMenuItems?: Maybe<MenusMenuItemEntityResponseCollection>;
  menusMenus?: Maybe<MenusMenuEntityResponseCollection>;
  newsletter?: Maybe<NewsletterEntityResponse>;
  newsletters?: Maybe<NewsletterEntityResponseCollection>;
  page?: Maybe<PageEntityResponse>;
  pages?: Maybe<PageEntityResponseCollection>;
  product?: Maybe<ProductEntityResponse>;
  products?: Maybe<ProductEntityResponseCollection>;
  publisherAction?: Maybe<PublisherActionEntityResponse>;
  publisherActions?: Maybe<PublisherActionEntityResponseCollection>;
  relatedArticle?: Maybe<RelatedArticleEntityResponse>;
  route?: Maybe<RouteEntityResponse>;
  routes?: Maybe<RouteEntityResponseCollection>;
  score?: Maybe<ScoreEntityResponse>;
  scores?: Maybe<ScoreEntityResponseCollection>;
  sitemapSitemap?: Maybe<SitemapSitemapEntityResponse>;
  sitemapSitemapCache?: Maybe<SitemapSitemapCacheEntityResponse>;
  sitemapSitemapCaches?: Maybe<SitemapSitemapCacheEntityResponseCollection>;
  sitemapSitemaps?: Maybe<SitemapSitemapEntityResponseCollection>;
  tag?: Maybe<TagEntityResponse>;
  tags?: Maybe<TagEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryAdBannerArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryAdBannersArgs = {
  filters?: InputMaybe<AdBannerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryArticleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategoriesArgs = {
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCategoryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryEditorArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryEditorsArgs = {
  filters?: InputMaybe<EditorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryFindNewsletterSubscriptionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryInformationBoxArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryInformationBoxesArgs = {
  filters?: InputMaybe<InformationBoxFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryInterestedAreaArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryInterestedAreasArgs = {
  filters?: InputMaybe<InterestedAreaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryMenusMenuArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryMenusMenuItemArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryMenusMenuItemsArgs = {
  filters?: InputMaybe<MenusMenuItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryMenusMenusArgs = {
  filters?: InputMaybe<MenusMenuFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryNewsletterArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryNewslettersArgs = {
  filters?: InputMaybe<NewsletterFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPageArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPagesArgs = {
  filters?: InputMaybe<PageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryProductArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryProductsArgs = {
  filters?: InputMaybe<ProductFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryPublisherActionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryPublisherActionsArgs = {
  filters?: InputMaybe<PublisherActionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryRouteArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryRoutesArgs = {
  filters?: InputMaybe<RouteFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryScoreArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryScoresArgs = {
  filters?: InputMaybe<ScoreFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySitemapSitemapArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySitemapSitemapCacheArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySitemapSitemapCachesArgs = {
  filters?: InputMaybe<SitemapSitemapCacheFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySitemapSitemapsArgs = {
  filters?: InputMaybe<SitemapSitemapFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTagArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryTagsArgs = {
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type RelatedArticle = {
  __typename?: 'RelatedArticle';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  maxNoTag?: Maybe<Scalars['Int']['output']>;
  slot: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type RelatedArticleEntity = {
  __typename?: 'RelatedArticleEntity';
  attributes?: Maybe<RelatedArticle>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type RelatedArticleEntityResponse = {
  __typename?: 'RelatedArticleEntityResponse';
  data?: Maybe<RelatedArticleEntity>;
};

export type RelatedArticleInput = {
  maxNoTag?: InputMaybe<Scalars['Int']['input']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']['input']>;
  slot?: InputMaybe<Scalars['Int']['input']>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type Route = {
  __typename?: 'Route';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  requestPath: Scalars['String']['output'];
  type: Enum_Route_Type;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type RouteEntity = {
  __typename?: 'RouteEntity';
  attributes?: Maybe<Route>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type RouteEntityResponse = {
  __typename?: 'RouteEntityResponse';
  data?: Maybe<RouteEntity>;
};

export type RouteEntityResponseCollection = {
  __typename?: 'RouteEntityResponseCollection';
  data: Array<RouteEntity>;
  meta: ResponseCollectionMeta;
};

export type RouteFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<RouteFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<RouteFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<RouteFiltersInput>>>;
  requestPath?: InputMaybe<StringFilterInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  value?: InputMaybe<StringFilterInput>;
};

export type RouteInput = {
  requestPath?: InputMaybe<Scalars['String']['input']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Enum_Route_Type>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type Score = {
  __typename?: 'Score';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  icon?: Maybe<UploadFileEntityResponse>;
  iconFilled?: Maybe<UploadFileEntityResponse>;
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ScoreEntity = {
  __typename?: 'ScoreEntity';
  attributes?: Maybe<Score>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ScoreEntityResponse = {
  __typename?: 'ScoreEntityResponse';
  data?: Maybe<ScoreEntity>;
};

export type ScoreEntityResponseCollection = {
  __typename?: 'ScoreEntityResponseCollection';
  data: Array<ScoreEntity>;
  meta: ResponseCollectionMeta;
};

export type ScoreFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ScoreFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ScoreFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ScoreFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ScoreInput = {
  icon?: InputMaybe<Scalars['ID']['input']>;
  iconFilled?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SitemapSitemap = {
  __typename?: 'SitemapSitemap';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  delta?: Maybe<Scalars['Int']['output']>;
  link_count?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  sitemap_string: Scalars['String']['output'];
  type?: Maybe<Enum_Sitemapsitemap_Type>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SitemapSitemapCache = {
  __typename?: 'SitemapSitemapCache';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name: Scalars['String']['output'];
  sitemap_id: Scalars['Int']['output'];
  sitemap_json: Scalars['JSON']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SitemapSitemapCacheEntity = {
  __typename?: 'SitemapSitemapCacheEntity';
  attributes?: Maybe<SitemapSitemapCache>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type SitemapSitemapCacheEntityResponse = {
  __typename?: 'SitemapSitemapCacheEntityResponse';
  data?: Maybe<SitemapSitemapCacheEntity>;
};

export type SitemapSitemapCacheEntityResponseCollection = {
  __typename?: 'SitemapSitemapCacheEntityResponseCollection';
  data: Array<SitemapSitemapCacheEntity>;
  meta: ResponseCollectionMeta;
};

export type SitemapSitemapCacheFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SitemapSitemapCacheFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<SitemapSitemapCacheFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SitemapSitemapCacheFiltersInput>>>;
  sitemap_id?: InputMaybe<IntFilterInput>;
  sitemap_json?: InputMaybe<JsonFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SitemapSitemapCacheInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  sitemap_id?: InputMaybe<Scalars['Int']['input']>;
  sitemap_json?: InputMaybe<Scalars['JSON']['input']>;
};

export type SitemapSitemapEntity = {
  __typename?: 'SitemapSitemapEntity';
  attributes?: Maybe<SitemapSitemap>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type SitemapSitemapEntityResponse = {
  __typename?: 'SitemapSitemapEntityResponse';
  data?: Maybe<SitemapSitemapEntity>;
};

export type SitemapSitemapEntityResponseCollection = {
  __typename?: 'SitemapSitemapEntityResponseCollection';
  data: Array<SitemapSitemapEntity>;
  meta: ResponseCollectionMeta;
};

export type SitemapSitemapFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<SitemapSitemapFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  delta?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  link_count?: InputMaybe<IntFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<SitemapSitemapFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<SitemapSitemapFiltersInput>>>;
  sitemap_string?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type SitemapSitemapInput = {
  delta?: InputMaybe<Scalars['Int']['input']>;
  link_count?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sitemap_string?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Enum_Sitemapsitemap_Type>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type SubscribeNewsletterEntity = {
  __typename?: 'SubscribeNewsletterEntity';
  createdAt?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type Tag = {
  __typename?: 'Tag';
  articles?: Maybe<ArticleRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  seo?: Maybe<ComponentSharedSeo>;
  slug: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  wp_id?: Maybe<Scalars['Int']['output']>;
};


export type TagArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TagEntity = {
  __typename?: 'TagEntity';
  attributes?: Maybe<Tag>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type TagEntityResponse = {
  __typename?: 'TagEntityResponse';
  data?: Maybe<TagEntity>;
};

export type TagEntityResponseCollection = {
  __typename?: 'TagEntityResponseCollection';
  data: Array<TagEntity>;
  meta: ResponseCollectionMeta;
};

export type TagFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>;
  articles?: InputMaybe<ArticleFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<TagFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<TagFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  seo?: InputMaybe<ComponentSharedSeoFiltersInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  slug?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  wp_id?: InputMaybe<IntFilterInput>;
};

export type TagInput = {
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  seo?: InputMaybe<ComponentSharedSeoInput>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  wp_id?: InputMaybe<Scalars['Int']['input']>;
};

export type TagRelationResponseCollection = {
  __typename?: 'TagRelationResponseCollection';
  data: Array<TagEntity>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Scalars['ID']['input']>;
  folderPath?: InputMaybe<Scalars['String']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pathId?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
  recaptchaToken: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  DOBM?: Maybe<Scalars['Int']['output']>;
  DOBY?: Maybe<Scalars['Int']['output']>;
  areaCode?: Maybe<Enum_Userspermissionsuser_Areacode>;
  articles?: Maybe<ArticleEntityResponseCollection>;
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  interested_areas?: Maybe<InterestedAreaEntityResponseCollection>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsMeRole>;
  salutation?: Maybe<Enum_Userspermissionsuser_Salutation>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  DOBM?: InputMaybe<Scalars['Int']['input']>;
  DOBY?: InputMaybe<Scalars['Int']['input']>;
  agreement: Scalars['Boolean']['input'];
  areaCode?: InputMaybe<Enum_Userspermissionsuser_Areacode>;
  email: Scalars['String']['input'];
  interested_areas?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  password: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  recaptchaToken: Scalars['String']['input'];
  salutation?: InputMaybe<Enum_Userspermissionsuser_Salutation>;
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateMeInput = {
  areaCode?: InputMaybe<Enum_Userspermissionsuser_Areacode>;
  dobM?: InputMaybe<Scalars['Int']['input']>;
  dobY?: InputMaybe<Scalars['Int']['input']>;
  interested_areas?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  salutation?: InputMaybe<Enum_Userspermissionsuser_Salutation>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUpdateMePayload = {
  __typename?: 'UsersPermissionsUpdateMePayload';
  user?: Maybe<UsersPermissionsMe>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  DOBM: Scalars['Int']['output'];
  DOBY: Scalars['Int']['output'];
  agreement?: Maybe<Scalars['Boolean']['output']>;
  areaCode?: Maybe<Enum_Userspermissionsuser_Areacode>;
  articles?: Maybe<ArticleRelationResponseCollection>;
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  editors?: Maybe<EditorRelationResponseCollection>;
  email: Scalars['String']['output'];
  information_boxes?: Maybe<InformationBoxRelationResponseCollection>;
  interested_areas?: Maybe<InterestedAreaRelationResponseCollection>;
  newsletter?: Maybe<NewsletterEntityResponse>;
  phoneNumber: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  resetPasswordTokenSave?: Maybe<Scalars['String']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  salutation?: Maybe<Enum_Userspermissionsuser_Salutation>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};


export type UsersPermissionsUserArticlesArgs = {
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsUserEditorsArgs = {
  filters?: InputMaybe<EditorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsUserInformation_BoxesArgs = {
  filters?: InputMaybe<InformationBoxFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsUserInterested_AreasArgs = {
  filters?: InputMaybe<InterestedAreaFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  DOBM?: InputMaybe<IntFilterInput>;
  DOBY?: InputMaybe<IntFilterInput>;
  agreement?: InputMaybe<BooleanFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  areaCode?: InputMaybe<StringFilterInput>;
  articles?: InputMaybe<ArticleFiltersInput>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  editors?: InputMaybe<EditorFiltersInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  information_boxes?: InputMaybe<InformationBoxFiltersInput>;
  interested_areas?: InputMaybe<InterestedAreaFiltersInput>;
  newsletter?: InputMaybe<NewsletterFiltersInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  phoneNumber?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  resetPasswordTokenSave?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  salutation?: InputMaybe<StringFilterInput>;
  sitemap_exclude?: InputMaybe<BooleanFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  DOBM?: InputMaybe<Scalars['Int']['input']>;
  DOBY?: InputMaybe<Scalars['Int']['input']>;
  agreement?: InputMaybe<Scalars['Boolean']['input']>;
  areaCode?: InputMaybe<Enum_Userspermissionsuser_Areacode>;
  articles?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  editors?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  email?: InputMaybe<Scalars['String']['input']>;
  information_boxes?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  interested_areas?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  newsletter?: InputMaybe<Scalars['ID']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  resetPasswordTokenSave?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  salutation?: InputMaybe<Enum_Userspermissionsuser_Salutation>;
  sitemap_exclude?: InputMaybe<Scalars['Boolean']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type LoginMutationVariables = Exact<{
  input: UsersPermissionsLoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UsersPermissionsLoginPayload', jwt?: string | null, user: { __typename?: 'UsersPermissionsMe', id: string, username: string, email?: string | null, confirmed?: boolean | null, blocked?: boolean | null, role?: { __typename?: 'UsersPermissionsMeRole', id: string, name: string, description?: string | null, type?: string | null } | null } } };

export type RegisterMutationVariables = Exact<{
  input: UsersPermissionsRegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UsersPermissionsLoginPayload', jwt?: string | null, user: { __typename?: 'UsersPermissionsMe', salutation?: Enum_Userspermissionsuser_Salutation | null, id: string, username: string, email?: string | null, areaCode?: Enum_Userspermissionsuser_Areacode | null, phoneNumber?: string | null, DOBM?: number | null, DOBY?: number | null, confirmed?: boolean | null, blocked?: boolean | null, interested_areas?: { __typename?: 'InterestedAreaEntityResponseCollection', data: Array<{ __typename?: 'InterestedAreaEntity', id?: string | null, attributes?: { __typename?: 'InterestedArea', Title?: string | null } | null }> } | null, role?: { __typename?: 'UsersPermissionsMeRole', id: string, name: string, description?: string | null, type?: string | null } | null } } };

export type SubscribeNewsMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type SubscribeNewsMutation = { __typename?: 'Mutation', subscribeNewsletter?: { __typename?: 'NewsletterSubscriptionResponse', data?: { __typename?: 'SubscribeNewsletterEntity', id?: number | null, email?: string | null, createdAt?: string | null, updatedAt?: string | null } | null } | null };

export type UnsubscribeNewsMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type UnsubscribeNewsMutation = { __typename?: 'Mutation', unsubscribeNewsletter?: { __typename?: 'NewsletterSubscriptionResponse', data?: { __typename?: 'SubscribeNewsletterEntity', id?: number | null, email?: string | null, createdAt?: string | null, updatedAt?: string | null } | null } | null };

export type UpdateUsersPermissionsUserMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  data: UsersPermissionsUserInput;
}>;


export type UpdateUsersPermissionsUserMutation = { __typename?: 'Mutation', updateUsersPermissionsUser: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', username: string, email: string, DOBM: number, DOBY: number, salutation?: Enum_Userspermissionsuser_Salutation | null, areaCode?: Enum_Userspermissionsuser_Areacode | null, phoneNumber: string, agreement?: boolean | null, provider?: string | null, confirmed?: boolean | null, blocked?: boolean | null, interested_areas?: { __typename?: 'InterestedAreaRelationResponseCollection', data: Array<{ __typename?: 'InterestedAreaEntity', id?: string | null, attributes?: { __typename?: 'InterestedArea', Title?: string | null } | null }> } | null, role?: { __typename?: 'UsersPermissionsRoleEntityResponse', data?: { __typename?: 'UsersPermissionsRoleEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsRole', name: string, description?: string | null, type?: string | null } | null } | null } | null } | null } | null } };

export type AdsQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type AdsQuery = { __typename?: 'Query', adBanner?: { __typename?: 'AdBannerEntityResponse', data?: { __typename?: 'AdBannerEntity', attributes?: { __typename?: 'AdBanner', ad_unit_path: string, size_mapping: string, name: string } | null } | null } | null };

export type ArticleAdsQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type ArticleAdsQuery = { __typename?: 'Query', article?: { __typename?: 'ArticleEntityResponse', data?: { __typename?: 'ArticleEntity', attributes?: { __typename?: 'Article', ad_banner_side?: { __typename?: 'AdBannerEntityResponse', data?: { __typename?: 'AdBannerEntity', attributes?: { __typename?: 'AdBanner', ad_unit_path: string, size_mapping: string, name: string } | null } | null } | null } | null } | null } | null };

export type ArticleBasicFragment = { __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', stockQuote?: string | null, hideKeyVisual?: boolean | null, title: string, publishedDate: any, slug: string, editorSelect?: boolean | null, layout?: Enum_Article_Layout | null, sidenote?: string | null, ad_banner_side?: { __typename?: 'AdBannerEntityResponse', data?: { __typename?: 'AdBannerEntity', id?: string | null } | null } | null, seo?: { __typename?: 'ComponentSharedSeo', metaDescription: string, metaTitle: string, keywords?: string | null, metaRobots?: string | null, metaViewport?: string | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null, formats?: any | null } | null } | null } | null, metaSocial?: Array<{ __typename?: 'ComponentSharedMetaSocial', socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork, title: string, description: string } | null> | null } | null, categories?: { __typename?: 'CategoryRelationResponseCollection', data: Array<{ __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', name: string, slug: string, parentCategory?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', slug: string, name: string } | null } | null } | null } | null }> } | null, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null, formats?: any | null } | null } | null }, keyVisualSquare?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null, Interviewee?: { __typename?: 'ComponentArticleInterviewee', name: string, title: string, portrait: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null, formats?: any | null } | null } | null } } | null, editor?: { __typename?: 'EditorEntityResponse', data?: { __typename?: 'EditorEntity', id?: string | null, attributes?: { __typename?: 'Editor', name: string, biography?: string | null, isBlogger?: boolean | null, avatar: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null, formats?: any | null } | null } | null } } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', id?: string | null, attributes?: { __typename?: 'Tag', name: string, slug: string } | null }> } | null, relatedArticles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, publishedDate: any, slug: string, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null, alternativeText?: string | null } | null } | null } } | null }> } | null, otherEventArticles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, publishedDate: any, slug: string, publishedAt?: any | null, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null, alternativeText?: string | null } | null } | null } } | null }> } | null } | null };

export type ArticleListFragment = { __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, publishedDate: any, slug: string, editorSelect?: boolean | null, seo?: { __typename?: 'ComponentSharedSeo', metaDescription: string } | null, categories?: { __typename?: 'CategoryRelationResponseCollection', data: Array<{ __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', name: string, slug: string, parentCategory?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', slug: string, name: string } | null } | null } | null } | null }> } | null, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null, formats?: any | null } | null } | null }, editor?: { __typename?: 'EditorEntityResponse', data?: { __typename?: 'EditorEntity', id?: string | null, attributes?: { __typename?: 'Editor', name: string, biography?: string | null, isBlogger?: boolean | null, avatar: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null, formats?: any | null } | null } | null } } | null } | null } | null } | null };

export type ArticleListItemQueryVariables = Exact<{
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  publicationState?: InputMaybe<PublicationState>;
}>;


export type ArticleListItemQuery = { __typename?: 'Query', articles?: { __typename?: 'ArticleEntityResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, publishedDate: any, slug: string, editorSelect?: boolean | null, seo?: { __typename?: 'ComponentSharedSeo', metaDescription: string } | null, categories?: { __typename?: 'CategoryRelationResponseCollection', data: Array<{ __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', name: string, slug: string, parentCategory?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', slug: string, name: string } | null } | null } | null } | null }> } | null, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null, formats?: any | null } | null } | null }, editor?: { __typename?: 'EditorEntityResponse', data?: { __typename?: 'EditorEntity', id?: string | null, attributes?: { __typename?: 'Editor', name: string, biography?: string | null, isBlogger?: boolean | null, avatar: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null, formats?: any | null } | null } | null } } | null } | null } | null } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number } } } | null };

export type ArticleListSimpleQueryVariables = Exact<{
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  publicationState?: InputMaybe<PublicationState>;
}>;


export type ArticleListSimpleQuery = { __typename?: 'Query', articles?: { __typename?: 'ArticleEntityResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', stockQuote?: string | null, hideKeyVisual?: boolean | null, title: string, publishedDate: any, slug: string, editorSelect?: boolean | null, layout?: Enum_Article_Layout | null, sidenote?: string | null, ad_banner_side?: { __typename?: 'AdBannerEntityResponse', data?: { __typename?: 'AdBannerEntity', id?: string | null } | null } | null, seo?: { __typename?: 'ComponentSharedSeo', metaDescription: string, metaTitle: string, keywords?: string | null, metaRobots?: string | null, metaViewport?: string | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null, formats?: any | null } | null } | null } | null, metaSocial?: Array<{ __typename?: 'ComponentSharedMetaSocial', socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork, title: string, description: string } | null> | null } | null, categories?: { __typename?: 'CategoryRelationResponseCollection', data: Array<{ __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', name: string, slug: string, parentCategory?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', slug: string, name: string } | null } | null } | null } | null }> } | null, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null, formats?: any | null } | null } | null }, keyVisualSquare?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null, Interviewee?: { __typename?: 'ComponentArticleInterviewee', name: string, title: string, portrait: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null, formats?: any | null } | null } | null } } | null, editor?: { __typename?: 'EditorEntityResponse', data?: { __typename?: 'EditorEntity', id?: string | null, attributes?: { __typename?: 'Editor', name: string, biography?: string | null, isBlogger?: boolean | null, avatar: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null, formats?: any | null } | null } | null } } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', id?: string | null, attributes?: { __typename?: 'Tag', name: string, slug: string } | null }> } | null, relatedArticles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, publishedDate: any, slug: string, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null, alternativeText?: string | null } | null } | null } } | null }> } | null, otherEventArticles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, publishedDate: any, slug: string, publishedAt?: any | null, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null, alternativeText?: string | null } | null } | null } } | null }> } | null } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number } } } | null };

export type ArticleListWithContentQueryVariables = Exact<{
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  publicationState?: InputMaybe<PublicationState>;
}>;


export type ArticleListWithContentQuery = { __typename?: 'Query', articles?: { __typename?: 'ArticleEntityResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', content?: string | null, stockQuote?: string | null, hideKeyVisual?: boolean | null, title: string, publishedDate: any, slug: string, editorSelect?: boolean | null, layout?: Enum_Article_Layout | null, sidenote?: string | null, blocks?: Array<{ __typename?: 'ComponentArticleEmbedInstagram', URL: string } | { __typename?: 'ComponentArticleEmbedVideo', URL: string, videoName: string, video: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } } | { __typename?: 'ComponentArticleFaq', faq?: Array<{ __typename?: 'ComponentArticleQuestionAnswer', Question?: string | null, Answer?: string | null, SubAnswer?: string | null } | null> | null } | { __typename?: 'ComponentArticleImage', caption?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } | null } | { __typename?: 'ComponentArticleImageCarousel', id: string, ImageCarousel?: Array<{ __typename?: 'ComponentSharedImage', id: string, description?: string | null, url?: string | null, title?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } | null } | null> | null } | { __typename?: 'ComponentArticleImageGallery', id: string, ImageGallery?: Array<{ __typename?: 'ComponentSharedImage', description?: string | null, url?: string | null, title?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } | null } | null> | null } | { __typename?: 'ComponentArticleInfoBox', information_box?: { __typename?: 'InformationBoxEntityResponse', data?: { __typename?: 'InformationBoxEntity', id?: string | null, attributes?: { __typename?: 'InformationBox', location?: string | null, title?: string | null, hours?: string | null, phone?: string | null, remark?: string | null, description?: string | null, users?: { __typename?: 'UsersPermissionsUserRelationResponseCollection', data: Array<{ __typename?: 'UsersPermissionsUserEntity', attributes?: { __typename?: 'UsersPermissionsUser', username: string } | null }> } | null } | null } | null } | null } | { __typename?: 'ComponentArticleListicleTitle', Number?: number | null, Title?: string | null, description?: string | null } | { __typename?: 'ComponentArticlePictureWithTag', Image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } | null, tags?: Array<{ __typename?: 'ComponentSharedTag', id: string, PositionX?: number | null, PositionY?: number | null, product?: { __typename?: 'ProductEntityResponse', data?: { __typename?: 'ProductEntity', attributes?: { __typename?: 'Product', name?: string | null, description?: string | null, retailPriceHKD?: number | null, specialPriceHKD?: number | null, url?: string | null, brand?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } | null } | null } | null } | null } | null> | null } | { __typename?: 'ComponentArticlePrizeList', prizeList?: Array<{ __typename?: 'ComponentCommonPrizeList', name: string, companyName?: string | null, content1?: string | null, content2?: string | null, companyLogo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } } | null> | null } | { __typename?: 'ComponentArticleProductList', Products?: Array<{ __typename?: 'ComponentSharedProducts', product?: { __typename?: 'ProductEntityResponse', data?: { __typename?: 'ProductEntity', attributes?: { __typename?: 'Product', brand?: string | null, name?: string | null, retailPriceHKD?: number | null, specialPriceHKD?: number | null, url?: string | null, description?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } | null } | null } | null } | null } | null> | null } | { __typename?: 'ComponentArticleProductRate', ProductRate?: Array<{ __typename?: 'ComponentCommonProductRate', Label?: string | null, score?: number | null, Icon?: { __typename?: 'ScoreEntityResponse', data?: { __typename?: 'ScoreEntity', attributes?: { __typename?: 'Score', iconFilled?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null, alternativeText?: string | null } | null } | null } | null, icon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null, alternativeText?: string | null } | null } | null } | null } | null } | null } | null } | null> | null } | { __typename?: 'ComponentArticleProductReview', ListicleTitle?: { __typename?: 'ComponentArticleListicleTitle', Number?: number | null, Title?: string | null, description?: string | null } | null, ImageCarousel?: Array<{ __typename?: 'ComponentSharedImage', description?: string | null, url?: string | null, title?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } | null } | null> | null, ProductRate?: Array<{ __typename?: 'ComponentCommonProductRate', Label?: string | null, score?: number | null, Icon?: { __typename?: 'ScoreEntityResponse', data?: { __typename?: 'ScoreEntity', attributes?: { __typename?: 'Score', name?: string | null, icon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } | null, iconFilled?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } | null } | null } | null } | null } | null> | null } | { __typename?: 'ComponentArticleQuestionAnswer', Question?: string | null, Answer?: string | null, SubAnswer?: string | null } | { __typename?: 'ComponentArticleQuestionAnswer2Columns', imageCaption?: string | null, showAtRightColumn?: boolean | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } | null, QuestionAnswers?: Array<{ __typename?: 'ComponentArticleQuestionAnswer', Question?: string | null, Answer?: string | null, SubAnswer?: string | null } | null> | null } | { __typename?: 'ComponentArticleRichText', richText?: string | null } | { __typename?: 'ComponentArticleTipsBox', description?: string | null } | { __typename?: 'ComponentArticleVideo', name?: string | null, video: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null }, ArticleVideoImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } } | { __typename?: 'Error' } | null> | null, ad_banner_side?: { __typename?: 'AdBannerEntityResponse', data?: { __typename?: 'AdBannerEntity', id?: string | null } | null } | null, seo?: { __typename?: 'ComponentSharedSeo', metaDescription: string, metaTitle: string, keywords?: string | null, metaRobots?: string | null, metaViewport?: string | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null, formats?: any | null } | null } | null } | null, metaSocial?: Array<{ __typename?: 'ComponentSharedMetaSocial', socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork, title: string, description: string } | null> | null } | null, categories?: { __typename?: 'CategoryRelationResponseCollection', data: Array<{ __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', name: string, slug: string, parentCategory?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', slug: string, name: string } | null } | null } | null } | null }> } | null, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null, formats?: any | null } | null } | null }, keyVisualSquare?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null, Interviewee?: { __typename?: 'ComponentArticleInterviewee', name: string, title: string, portrait: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null, formats?: any | null } | null } | null } } | null, editor?: { __typename?: 'EditorEntityResponse', data?: { __typename?: 'EditorEntity', id?: string | null, attributes?: { __typename?: 'Editor', name: string, biography?: string | null, isBlogger?: boolean | null, avatar: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null, formats?: any | null } | null } | null } } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', id?: string | null, attributes?: { __typename?: 'Tag', name: string, slug: string } | null }> } | null, relatedArticles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, publishedDate: any, slug: string, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null, alternativeText?: string | null } | null } | null } } | null }> } | null, otherEventArticles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, publishedDate: any, slug: string, publishedAt?: any | null, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null, alternativeText?: string | null } | null } | null } } | null }> } | null } | null }> } | null };

export type ComponentArticleEmbedInstagramFragmentFragment = { __typename?: 'ComponentArticleEmbedInstagram', URL: string };

export type ComponentArticleEmbedVideoFragmentFragment = { __typename?: 'ComponentArticleEmbedVideo', URL: string, videoName: string, video: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } };

export type ComponentArticleImageFragmentFragment = { __typename?: 'ComponentArticleImage', caption?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } | null };

export type ComponentArticleImageCarouselFragmentFragment = { __typename?: 'ComponentArticleImageCarousel', id: string, ImageCarousel?: Array<{ __typename?: 'ComponentSharedImage', id: string, description?: string | null, url?: string | null, title?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } | null } | null> | null };

export type ComponentArticleImageGalleryFragmentFragment = { __typename?: 'ComponentArticleImageGallery', id: string, ImageGallery?: Array<{ __typename?: 'ComponentSharedImage', description?: string | null, url?: string | null, title?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } | null } | null> | null };

export type ComponentArticleInfoBoxFragmentFragment = { __typename?: 'ComponentArticleInfoBox', information_box?: { __typename?: 'InformationBoxEntityResponse', data?: { __typename?: 'InformationBoxEntity', id?: string | null, attributes?: { __typename?: 'InformationBox', location?: string | null, title?: string | null, hours?: string | null, phone?: string | null, remark?: string | null, description?: string | null, users?: { __typename?: 'UsersPermissionsUserRelationResponseCollection', data: Array<{ __typename?: 'UsersPermissionsUserEntity', attributes?: { __typename?: 'UsersPermissionsUser', username: string } | null }> } | null } | null } | null } | null };

export type ComponentArticleIntervieweeFragmentFragment = { __typename?: 'ComponentArticleInterviewee', name: string, title: string, portrait: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } };

export type ComponentArticleListicleTitleFragmentFragment = { __typename?: 'ComponentArticleListicleTitle', Number?: number | null, Title?: string | null, description?: string | null };

export type ComponentArticlePictureWithTagFragmentFragment = { __typename?: 'ComponentArticlePictureWithTag', Image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } | null, tags?: Array<{ __typename?: 'ComponentSharedTag', id: string, PositionX?: number | null, PositionY?: number | null, product?: { __typename?: 'ProductEntityResponse', data?: { __typename?: 'ProductEntity', attributes?: { __typename?: 'Product', name?: string | null, description?: string | null, retailPriceHKD?: number | null, specialPriceHKD?: number | null, url?: string | null, brand?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } | null } | null } | null } | null } | null> | null };

export type ComponentArticlePrizeListFragmentFragment = { __typename?: 'ComponentArticlePrizeList', prizeList?: Array<{ __typename?: 'ComponentCommonPrizeList', name: string, companyName?: string | null, content1?: string | null, content2?: string | null, companyLogo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } } | null> | null };

export type ComponentArticleProductListFragmentFragment = { __typename?: 'ComponentArticleProductList', Products?: Array<{ __typename?: 'ComponentSharedProducts', product?: { __typename?: 'ProductEntityResponse', data?: { __typename?: 'ProductEntity', attributes?: { __typename?: 'Product', brand?: string | null, name?: string | null, retailPriceHKD?: number | null, specialPriceHKD?: number | null, url?: string | null, description?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } | null } | null } | null } | null } | null> | null };

export type ComponentArticleProductRateFragmentFragment = { __typename?: 'ComponentArticleProductRate', ProductRate?: Array<{ __typename?: 'ComponentCommonProductRate', Label?: string | null, score?: number | null, Icon?: { __typename?: 'ScoreEntityResponse', data?: { __typename?: 'ScoreEntity', attributes?: { __typename?: 'Score', iconFilled?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null, alternativeText?: string | null } | null } | null } | null, icon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null, alternativeText?: string | null } | null } | null } | null } | null } | null } | null } | null> | null };

export type ComponentArticleProductReviewFragmentFragment = { __typename?: 'ComponentArticleProductReview', ListicleTitle?: { __typename?: 'ComponentArticleListicleTitle', Number?: number | null, Title?: string | null, description?: string | null } | null, ImageCarousel?: Array<{ __typename?: 'ComponentSharedImage', description?: string | null, url?: string | null, title?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } | null } | null> | null, ProductRate?: Array<{ __typename?: 'ComponentCommonProductRate', Label?: string | null, score?: number | null, Icon?: { __typename?: 'ScoreEntityResponse', data?: { __typename?: 'ScoreEntity', attributes?: { __typename?: 'Score', name?: string | null, icon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } | null, iconFilled?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } | null } | null } | null } | null } | null> | null };

export type ComponentArticleQuestionAnswerFragmentFragment = { __typename?: 'ComponentArticleQuestionAnswer', Question?: string | null, Answer?: string | null, SubAnswer?: string | null };

export type ComponentArticleQuestionAnswer2ColumnsFragmentFragment = { __typename?: 'ComponentArticleQuestionAnswer2Columns', imageCaption?: string | null, showAtRightColumn?: boolean | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } | null, QuestionAnswers?: Array<{ __typename?: 'ComponentArticleQuestionAnswer', Question?: string | null, Answer?: string | null, SubAnswer?: string | null } | null> | null };

export type ComponentArticleRichTextFragmentFragment = { __typename?: 'ComponentArticleRichText', richText?: string | null };

export type ComponentArticleTipsBoxFragmentFragment = { __typename?: 'ComponentArticleTipsBox', description?: string | null };

export type ComponentArticleTopicFragmentFragment = { __typename?: 'ComponentArticleTopic', keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } };

export type ComponentArticleVideoFragmentFragment = { __typename?: 'ComponentArticleVideo', name?: string | null, video: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null }, ArticleVideoImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } };

export type ComponentArticleFaqFragmentFragment = { __typename?: 'ComponentArticleFaq', faq?: Array<{ __typename?: 'ComponentArticleQuestionAnswer', Question?: string | null, Answer?: string | null, SubAnswer?: string | null } | null> | null };

export type RelatedArticleListQueryVariables = Exact<{ [key: string]: never; }>;


export type RelatedArticleListQuery = { __typename?: 'Query', relatedArticle?: { __typename?: 'RelatedArticleEntityResponse', data?: { __typename?: 'RelatedArticleEntity', id?: string | null, attributes?: { __typename?: 'RelatedArticle', slot: number, maxNoTag?: number | null, createdAt?: any | null, updatedAt?: any | null } | null } | null } | null };

export type AccountDetailsFragmentFragment = { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', username: string, email: string, DOBM: number, DOBY: number, salutation?: Enum_Userspermissionsuser_Salutation | null, areaCode?: Enum_Userspermissionsuser_Areacode | null, phoneNumber: string, agreement?: boolean | null, provider?: string | null, confirmed?: boolean | null, blocked?: boolean | null, interested_areas?: { __typename?: 'InterestedAreaRelationResponseCollection', data: Array<{ __typename?: 'InterestedAreaEntity', id?: string | null, attributes?: { __typename?: 'InterestedArea', Title?: string | null } | null }> } | null, role?: { __typename?: 'UsersPermissionsRoleEntityResponse', data?: { __typename?: 'UsersPermissionsRoleEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsRole', name: string, description?: string | null, type?: string | null } | null } | null } | null } | null };

export type AccountDetailsQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
}>;


export type AccountDetailsQuery = { __typename?: 'Query', usersPermissionsUser?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', username: string, email: string, DOBM: number, DOBY: number, salutation?: Enum_Userspermissionsuser_Salutation | null, areaCode?: Enum_Userspermissionsuser_Areacode | null, phoneNumber: string, agreement?: boolean | null, provider?: string | null, confirmed?: boolean | null, blocked?: boolean | null, interested_areas?: { __typename?: 'InterestedAreaRelationResponseCollection', data: Array<{ __typename?: 'InterestedAreaEntity', id?: string | null, attributes?: { __typename?: 'InterestedArea', Title?: string | null } | null }> } | null, role?: { __typename?: 'UsersPermissionsRoleEntityResponse', data?: { __typename?: 'UsersPermissionsRoleEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsRole', name: string, description?: string | null, type?: string | null } | null } | null } | null } | null } | null } | null };

export type UsersPermissionsUserQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
}>;


export type UsersPermissionsUserQuery = { __typename?: 'Query', usersPermissionsUser?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', articles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', stockQuote?: string | null, hideKeyVisual?: boolean | null, title: string, publishedDate: any, slug: string, editorSelect?: boolean | null, layout?: Enum_Article_Layout | null, sidenote?: string | null, ad_banner_side?: { __typename?: 'AdBannerEntityResponse', data?: { __typename?: 'AdBannerEntity', id?: string | null } | null } | null, seo?: { __typename?: 'ComponentSharedSeo', metaDescription: string, metaTitle: string, keywords?: string | null, metaRobots?: string | null, metaViewport?: string | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null, formats?: any | null } | null } | null } | null, metaSocial?: Array<{ __typename?: 'ComponentSharedMetaSocial', socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork, title: string, description: string } | null> | null } | null, categories?: { __typename?: 'CategoryRelationResponseCollection', data: Array<{ __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', name: string, slug: string, parentCategory?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', slug: string, name: string } | null } | null } | null } | null }> } | null, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null, formats?: any | null } | null } | null }, keyVisualSquare?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null, Interviewee?: { __typename?: 'ComponentArticleInterviewee', name: string, title: string, portrait: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null, formats?: any | null } | null } | null } } | null, editor?: { __typename?: 'EditorEntityResponse', data?: { __typename?: 'EditorEntity', id?: string | null, attributes?: { __typename?: 'Editor', name: string, biography?: string | null, isBlogger?: boolean | null, avatar: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null, formats?: any | null } | null } | null } } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', id?: string | null, attributes?: { __typename?: 'Tag', name: string, slug: string } | null }> } | null, relatedArticles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, publishedDate: any, slug: string, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null, alternativeText?: string | null } | null } | null } } | null }> } | null, otherEventArticles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, publishedDate: any, slug: string, publishedAt?: any | null, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null, alternativeText?: string | null } | null } | null } } | null }> } | null } | null }> } | null, information_boxes?: { __typename?: 'InformationBoxRelationResponseCollection', data: Array<{ __typename?: 'InformationBoxEntity', id?: string | null, attributes?: { __typename?: 'InformationBox', location?: string | null, title?: string | null, hours?: string | null, phone?: string | null, remark?: string | null, description?: string | null, users?: { __typename?: 'UsersPermissionsUserRelationResponseCollection', data: Array<{ __typename?: 'UsersPermissionsUserEntity', attributes?: { __typename?: 'UsersPermissionsUser', username: string } | null }> } | null } | null }> } | null, editors?: { __typename?: 'EditorRelationResponseCollection', data: Array<{ __typename?: 'EditorEntity', id?: string | null, attributes?: { __typename?: 'Editor', name: string, slug: string, biography?: string | null, title?: string | null, avatar: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, formats?: any | null } | null } | null } } | null }> } | null } | null } | null } | null };

export type AllCategoryIdsQueryVariables = Exact<{
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  publicationState?: InputMaybe<PublicationState>;
}>;


export type AllCategoryIdsQuery = { __typename?: 'Query', categories?: { __typename?: 'CategoryEntityResponseCollection', data: Array<{ __typename?: 'CategoryEntity', id?: string | null }> } | null };

export type CategoriesQueryVariables = Exact<{
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  publicationState?: InputMaybe<PublicationState>;
  includeLayout?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CategoriesQuery = { __typename?: 'Query', categories?: { __typename?: 'CategoryEntityResponseCollection', data: Array<{ __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', name: string, slug: string, layout?: Enum_Category_Layout | null, editorPicks?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null }> } | null, bloggerList?: { __typename?: 'EditorRelationResponseCollection', data: Array<{ __typename?: 'EditorEntity', id?: string | null, attributes?: { __typename?: 'Editor', slug: string, name: string, biography?: string | null, avatar: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } } | null }> } | null, pinArticle?: { __typename?: 'ArticleEntityResponse', data?: { __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, slug: string, content?: string | null, publishedDate: any, categories?: { __typename?: 'CategoryRelationResponseCollection', data: Array<{ __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', name: string, slug: string } | null }> } | null, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null, formats?: any | null } | null } | null }, keyVisualVertical?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, height?: number | null, width?: number | null } | null } | null } | null } | null } | null } | null, recommendArticles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, slug: string, publishedAt?: any | null, publishedDate: any, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, alternativeText?: string | null, width?: number | null, formats?: any | null } | null } | null }, keyVisualVertical?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, alternativeText?: string | null, width?: number | null } | null } | null } | null } | null }> } | null, articles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, slug: string, keyVisualVertical?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, height?: number | null, width?: number | null, formats?: any | null } | null } | null } | null } | null }> } | null, Topic?: { __typename?: 'ComponentArticleTopic', keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, formats?: any | null, alternativeText?: string | null } | null } | null } } | null, parentCategory?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', name: string, slug: string } | null } | null } | null, seo?: { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string } | null } | null }> } | null };

export type CategoryFragmentFragment = { __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', name: string, slug: string, layout?: Enum_Category_Layout | null, editorPicks?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null }> } | null, bloggerList?: { __typename?: 'EditorRelationResponseCollection', data: Array<{ __typename?: 'EditorEntity', id?: string | null, attributes?: { __typename?: 'Editor', slug: string, name: string, biography?: string | null, avatar: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } } | null }> } | null, pinArticle?: { __typename?: 'ArticleEntityResponse', data?: { __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, slug: string, content?: string | null, publishedDate: any, categories?: { __typename?: 'CategoryRelationResponseCollection', data: Array<{ __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', name: string, slug: string } | null }> } | null, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null, formats?: any | null } | null } | null }, keyVisualVertical?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, height?: number | null, width?: number | null } | null } | null } | null } | null } | null } | null, recommendArticles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, slug: string, publishedAt?: any | null, publishedDate: any, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, alternativeText?: string | null, width?: number | null, formats?: any | null } | null } | null }, keyVisualVertical?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, alternativeText?: string | null, width?: number | null } | null } | null } | null } | null }> } | null, articles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, slug: string, keyVisualVertical?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, height?: number | null, width?: number | null, formats?: any | null } | null } | null } | null } | null }> } | null, Topic?: { __typename?: 'ComponentArticleTopic', keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, formats?: any | null, alternativeText?: string | null } | null } | null } } | null, parentCategory?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', name: string, slug: string } | null } | null } | null, seo?: { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string } | null } | null };

export type CategoryQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
  includeLayout?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type CategoryQuery = { __typename?: 'Query', category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', name: string, slug: string, layout?: Enum_Category_Layout | null, editorPicks?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null }> } | null, bloggerList?: { __typename?: 'EditorRelationResponseCollection', data: Array<{ __typename?: 'EditorEntity', id?: string | null, attributes?: { __typename?: 'Editor', slug: string, name: string, biography?: string | null, avatar: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } } | null }> } | null, pinArticle?: { __typename?: 'ArticleEntityResponse', data?: { __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, slug: string, content?: string | null, publishedDate: any, categories?: { __typename?: 'CategoryRelationResponseCollection', data: Array<{ __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', name: string, slug: string } | null }> } | null, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null, formats?: any | null } | null } | null }, keyVisualVertical?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, height?: number | null, width?: number | null } | null } | null } | null } | null } | null } | null, recommendArticles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, slug: string, publishedAt?: any | null, publishedDate: any, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, alternativeText?: string | null, width?: number | null, formats?: any | null } | null } | null }, keyVisualVertical?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, alternativeText?: string | null, width?: number | null } | null } | null } | null } | null }> } | null, articles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, slug: string, keyVisualVertical?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, height?: number | null, width?: number | null, formats?: any | null } | null } | null } | null } | null }> } | null, Topic?: { __typename?: 'ComponentArticleTopic', keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, formats?: any | null, alternativeText?: string | null } | null } | null } } | null, parentCategory?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', name: string, slug: string } | null } | null } | null, seo?: { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string } | null } | null } | null } | null };

export type CategoryAdsQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
}>;


export type CategoryAdsQuery = { __typename?: 'Query', category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', ad_banner_in_between?: { __typename?: 'AdBannerEntityResponse', data?: { __typename?: 'AdBannerEntity', id?: string | null, attributes?: { __typename?: 'AdBanner', ad_unit_path: string, size_mapping: string, name: string } | null } | null } | null, ad_banner_side?: { __typename?: 'AdBannerEntityResponse', data?: { __typename?: 'AdBannerEntity', id?: string | null, attributes?: { __typename?: 'AdBanner', ad_unit_path: string, size_mapping: string, name: string } | null } | null } | null, parentCategory?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', ad_banner_in_between?: { __typename?: 'AdBannerEntityResponse', data?: { __typename?: 'AdBannerEntity', attributes?: { __typename?: 'AdBanner', ad_unit_path: string, size_mapping: string, name: string } | null } | null } | null, ad_banner_side?: { __typename?: 'AdBannerEntityResponse', data?: { __typename?: 'AdBannerEntity', attributes?: { __typename?: 'AdBanner', ad_unit_path: string, size_mapping: string, name: string } | null } | null } | null } | null } | null } | null } | null } | null } | null };

export type CategoryAdsBySlugQueryVariables = Exact<{
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type CategoryAdsBySlugQuery = { __typename?: 'Query', categories?: { __typename?: 'CategoryEntityResponseCollection', data: Array<{ __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', ad_banner_side?: { __typename?: 'AdBannerEntityResponse', data?: { __typename?: 'AdBannerEntity', id?: string | null } | null } | null } | null }> } | null };

export type CategoryEditorPickQueryVariables = Exact<{
  filters?: InputMaybe<CategoryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type CategoryEditorPickQuery = { __typename?: 'Query', categories?: { __typename?: 'CategoryEntityResponseCollection', data: Array<{ __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', editorPicks?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', stockQuote?: string | null, hideKeyVisual?: boolean | null, title: string, publishedDate: any, slug: string, editorSelect?: boolean | null, layout?: Enum_Article_Layout | null, sidenote?: string | null, ad_banner_side?: { __typename?: 'AdBannerEntityResponse', data?: { __typename?: 'AdBannerEntity', id?: string | null } | null } | null, seo?: { __typename?: 'ComponentSharedSeo', metaDescription: string, metaTitle: string, keywords?: string | null, metaRobots?: string | null, metaViewport?: string | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null, formats?: any | null } | null } | null } | null, metaSocial?: Array<{ __typename?: 'ComponentSharedMetaSocial', socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork, title: string, description: string } | null> | null } | null, categories?: { __typename?: 'CategoryRelationResponseCollection', data: Array<{ __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', name: string, slug: string, parentCategory?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', slug: string, name: string } | null } | null } | null } | null }> } | null, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null, formats?: any | null } | null } | null }, keyVisualSquare?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null, Interviewee?: { __typename?: 'ComponentArticleInterviewee', name: string, title: string, portrait: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null, formats?: any | null } | null } | null } } | null, editor?: { __typename?: 'EditorEntityResponse', data?: { __typename?: 'EditorEntity', id?: string | null, attributes?: { __typename?: 'Editor', name: string, biography?: string | null, isBlogger?: boolean | null, avatar: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null, formats?: any | null } | null } | null } } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', id?: string | null, attributes?: { __typename?: 'Tag', name: string, slug: string } | null }> } | null, relatedArticles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, publishedDate: any, slug: string, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null, alternativeText?: string | null } | null } | null } } | null }> } | null, otherEventArticles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, publishedDate: any, slug: string, publishedAt?: any | null, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null, alternativeText?: string | null } | null } | null } } | null }> } | null } | null }> } | null } | null }> } | null };

export type CategoryPinArticleQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
}>;


export type CategoryPinArticleQuery = { __typename?: 'Query', category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', pinArticle?: { __typename?: 'ArticleEntityResponse', data?: { __typename?: 'ArticleEntity', id?: string | null } | null } | null } | null } | null } | null };

export type ComponentArticleQuestionAnswerFragment = { __typename?: 'ComponentArticleQuestionAnswer', id: string, Question?: string | null, Answer?: string | null, SubAnswer?: string | null };

export type EditorFragmentFragment = { __typename?: 'EditorEntity', id?: string | null, attributes?: { __typename?: 'Editor', name: string, slug: string, biography?: string | null, title?: string | null, avatar: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, formats?: any | null } | null } | null } } | null };

export type EditorListingQueryVariables = Exact<{ [key: string]: never; }>;


export type EditorListingQuery = { __typename?: 'Query', editorListing?: { __typename?: 'EditorListingEntityResponse', data?: { __typename?: 'EditorListingEntity', id?: string | null, attributes?: { __typename?: 'EditorListing', editors?: { __typename?: 'EditorRelationResponseCollection', data: Array<{ __typename?: 'EditorEntity', id?: string | null, attributes?: { __typename?: 'Editor', name: string, title?: string | null, biography?: string | null, slug: string, avatar: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null, formats?: any | null } | null } | null } } | null }> } | null } | null } | null } | null };

export type EditorsQueryVariables = Exact<{
  filters?: InputMaybe<EditorFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  publicationState?: InputMaybe<PublicationState>;
}>;


export type EditorsQuery = { __typename?: 'Query', editors?: { __typename?: 'EditorEntityResponseCollection', data: Array<{ __typename?: 'EditorEntity', id?: string | null, attributes?: { __typename?: 'Editor', name: string, slug: string, biography?: string | null, title?: string | null, avatar: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, formats?: any | null } | null } | null } } | null }> } | null };

export type GlobalQueryVariables = Exact<{ [key: string]: never; }>;


export type GlobalQuery = { __typename?: 'Query', global?: { __typename?: 'GlobalEntityResponse', data?: { __typename?: 'GlobalEntity', id?: string | null, attributes?: { __typename?: 'Global', copyright: string, shortIntroduction?: string | null, logo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null }, Magazine?: { __typename?: 'ComponentGlobalMagazine', title: string, ctaLabel: string, url: string, description?: string | null, magazineCover: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } } | null, companyLogo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null }, CustomPages?: { __typename?: 'ComponentGlobalCustomPages', PageLink?: Array<{ __typename?: 'ComponentCommonLink', label: string, url: string, target: Enum_Componentcommonlink_Target } | null> | null } | null, Tags?: { __typename?: 'ComponentGlobalTags', tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', name: string, slug: string } | null }> } | null } | null, socialNetworks?: { __typename?: 'ComponentGlobalSocialNetworks', link?: Array<{ __typename?: 'ComponentCommonLink', id: string, label: string, url: string, target: Enum_Componentcommonlink_Target } | null> | null } | null } | null } | null } | null };

export type GlobalFooterFragmentFragment = { __typename?: 'Global', copyright: string, shortIntroduction?: string | null, logo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null }, Magazine?: { __typename?: 'ComponentGlobalMagazine', title: string, ctaLabel: string, url: string, description?: string | null, magazineCover: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } } | null, companyLogo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null }, CustomPages?: { __typename?: 'ComponentGlobalCustomPages', PageLink?: Array<{ __typename?: 'ComponentCommonLink', label: string, url: string, target: Enum_Componentcommonlink_Target } | null> | null } | null, Tags?: { __typename?: 'ComponentGlobalTags', tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', name: string, slug: string } | null }> } | null } | null };

export type GlobalSocialNetworksFragmentFragment = { __typename?: 'Global', socialNetworks?: { __typename?: 'ComponentGlobalSocialNetworks', link?: Array<{ __typename?: 'ComponentCommonLink', id: string, label: string, url: string, target: Enum_Componentcommonlink_Target } | null> | null } | null };

export type BossDiaryQueryVariables = Exact<{ [key: string]: never; }>;


export type BossDiaryQuery = { __typename?: 'Query', bossDiary?: { __typename?: 'BossDiaryEntityResponse', data?: { __typename?: 'BossDiaryEntity', id?: string | null, attributes?: { __typename?: 'BossDiary', name: string, description: string, url?: string | null, portrait: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string } | null } | null } } | null } | null } | null, articles?: { __typename?: 'ArticleEntityResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', stockQuote?: string | null, hideKeyVisual?: boolean | null, title: string, publishedDate: any, slug: string, editorSelect?: boolean | null, layout?: Enum_Article_Layout | null, sidenote?: string | null, ad_banner_side?: { __typename?: 'AdBannerEntityResponse', data?: { __typename?: 'AdBannerEntity', id?: string | null } | null } | null, seo?: { __typename?: 'ComponentSharedSeo', metaDescription: string, metaTitle: string, keywords?: string | null, metaRobots?: string | null, metaViewport?: string | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null, formats?: any | null } | null } | null } | null, metaSocial?: Array<{ __typename?: 'ComponentSharedMetaSocial', socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork, title: string, description: string } | null> | null } | null, categories?: { __typename?: 'CategoryRelationResponseCollection', data: Array<{ __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', name: string, slug: string, parentCategory?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', slug: string, name: string } | null } | null } | null } | null }> } | null, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null, formats?: any | null } | null } | null }, keyVisualSquare?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null, Interviewee?: { __typename?: 'ComponentArticleInterviewee', name: string, title: string, portrait: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null, formats?: any | null } | null } | null } } | null, editor?: { __typename?: 'EditorEntityResponse', data?: { __typename?: 'EditorEntity', id?: string | null, attributes?: { __typename?: 'Editor', name: string, biography?: string | null, isBlogger?: boolean | null, avatar: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null, formats?: any | null } | null } | null } } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', id?: string | null, attributes?: { __typename?: 'Tag', name: string, slug: string } | null }> } | null, relatedArticles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, publishedDate: any, slug: string, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null, alternativeText?: string | null } | null } | null } } | null }> } | null, otherEventArticles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, publishedDate: any, slug: string, publishedAt?: any | null, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null, alternativeText?: string | null } | null } | null } } | null }> } | null } | null }> } | null };

export type ComponentHomeCategoryFeatureFragment = { __typename?: 'ComponentHomeCategoryFeature', id: string, pinArticle?: { __typename?: 'ArticleEntityResponse', data?: { __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', stockQuote?: string | null, hideKeyVisual?: boolean | null, title: string, publishedDate: any, slug: string, editorSelect?: boolean | null, layout?: Enum_Article_Layout | null, sidenote?: string | null, ad_banner_side?: { __typename?: 'AdBannerEntityResponse', data?: { __typename?: 'AdBannerEntity', id?: string | null } | null } | null, seo?: { __typename?: 'ComponentSharedSeo', metaDescription: string, metaTitle: string, keywords?: string | null, metaRobots?: string | null, metaViewport?: string | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null, formats?: any | null } | null } | null } | null, metaSocial?: Array<{ __typename?: 'ComponentSharedMetaSocial', socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork, title: string, description: string } | null> | null } | null, categories?: { __typename?: 'CategoryRelationResponseCollection', data: Array<{ __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', name: string, slug: string, parentCategory?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', slug: string, name: string } | null } | null } | null } | null }> } | null, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null, formats?: any | null } | null } | null }, keyVisualSquare?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null, Interviewee?: { __typename?: 'ComponentArticleInterviewee', name: string, title: string, portrait: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null, formats?: any | null } | null } | null } } | null, editor?: { __typename?: 'EditorEntityResponse', data?: { __typename?: 'EditorEntity', id?: string | null, attributes?: { __typename?: 'Editor', name: string, biography?: string | null, isBlogger?: boolean | null, avatar: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null, formats?: any | null } | null } | null } } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', id?: string | null, attributes?: { __typename?: 'Tag', name: string, slug: string } | null }> } | null, relatedArticles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, publishedDate: any, slug: string, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null, alternativeText?: string | null } | null } | null } } | null }> } | null, otherEventArticles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, publishedDate: any, slug: string, publishedAt?: any | null, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null, alternativeText?: string | null } | null } | null } } | null }> } | null } | null } | null } | null, category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', name: string, slug: string, layout?: Enum_Category_Layout | null, editorPicks?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null }> } | null, bloggerList?: { __typename?: 'EditorRelationResponseCollection', data: Array<{ __typename?: 'EditorEntity', id?: string | null, attributes?: { __typename?: 'Editor', slug: string, name: string, biography?: string | null, avatar: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } } | null }> } | null, pinArticle?: { __typename?: 'ArticleEntityResponse', data?: { __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, slug: string, content?: string | null, publishedDate: any, categories?: { __typename?: 'CategoryRelationResponseCollection', data: Array<{ __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', name: string, slug: string } | null }> } | null, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null, formats?: any | null } | null } | null }, keyVisualVertical?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, height?: number | null, width?: number | null } | null } | null } | null } | null } | null } | null, recommendArticles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, slug: string, publishedAt?: any | null, publishedDate: any, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, alternativeText?: string | null, width?: number | null, formats?: any | null } | null } | null }, keyVisualVertical?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, alternativeText?: string | null, width?: number | null } | null } | null } | null } | null }> } | null, articles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, slug: string, keyVisualVertical?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, height?: number | null, width?: number | null, formats?: any | null } | null } | null } | null } | null }> } | null, Topic?: { __typename?: 'ComponentArticleTopic', keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, formats?: any | null, alternativeText?: string | null } | null } | null } } | null, parentCategory?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', name: string, slug: string } | null } | null } | null, seo?: { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string } | null } | null } | null } | null, ad_banner_in_between?: { __typename?: 'AdBannerEntityResponse', data?: { __typename?: 'AdBannerEntity', id?: string | null } | null } | null };

export type HomeCategoryColumnQueryVariables = Exact<{
  includeLayout?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type HomeCategoryColumnQuery = { __typename?: 'Query', homePage?: { __typename?: 'HomePageEntityResponse', data?: { __typename?: 'HomePageEntity', id?: string | null, attributes?: { __typename?: 'HomePage', CategoryColumn?: { __typename?: 'ComponentHomeCategoryColumn', id: string, categories?: { __typename?: 'CategoryRelationResponseCollection', data: Array<{ __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', name: string, slug: string, layout?: Enum_Category_Layout | null, editorPicks?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null }> } | null, bloggerList?: { __typename?: 'EditorRelationResponseCollection', data: Array<{ __typename?: 'EditorEntity', id?: string | null, attributes?: { __typename?: 'Editor', slug: string, name: string, biography?: string | null, avatar: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } } | null }> } | null, pinArticle?: { __typename?: 'ArticleEntityResponse', data?: { __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, slug: string, content?: string | null, publishedDate: any, categories?: { __typename?: 'CategoryRelationResponseCollection', data: Array<{ __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', name: string, slug: string } | null }> } | null, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null, formats?: any | null } | null } | null }, keyVisualVertical?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, height?: number | null, width?: number | null } | null } | null } | null } | null } | null } | null, recommendArticles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, slug: string, publishedAt?: any | null, publishedDate: any, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, alternativeText?: string | null, width?: number | null, formats?: any | null } | null } | null }, keyVisualVertical?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, alternativeText?: string | null, width?: number | null } | null } | null } | null } | null }> } | null, articles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, slug: string, keyVisualVertical?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, height?: number | null, width?: number | null, formats?: any | null } | null } | null } | null } | null }> } | null, Topic?: { __typename?: 'ComponentArticleTopic', keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, formats?: any | null, alternativeText?: string | null } | null } | null } } | null, parentCategory?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', name: string, slug: string } | null } | null } | null, seo?: { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string } | null } | null }> } | null } | null } | null } | null } | null };

export type HomeCategoryFeatureQueryVariables = Exact<{
  includeLayout?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type HomeCategoryFeatureQuery = { __typename?: 'Query', homePage?: { __typename?: 'HomePageEntityResponse', data?: { __typename?: 'HomePageEntity', id?: string | null, attributes?: { __typename?: 'HomePage', CategoryFeature?: Array<{ __typename?: 'ComponentHomeCategoryFeature', id: string, pinArticle?: { __typename?: 'ArticleEntityResponse', data?: { __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', stockQuote?: string | null, hideKeyVisual?: boolean | null, title: string, publishedDate: any, slug: string, editorSelect?: boolean | null, layout?: Enum_Article_Layout | null, sidenote?: string | null, ad_banner_side?: { __typename?: 'AdBannerEntityResponse', data?: { __typename?: 'AdBannerEntity', id?: string | null } | null } | null, seo?: { __typename?: 'ComponentSharedSeo', metaDescription: string, metaTitle: string, keywords?: string | null, metaRobots?: string | null, metaViewport?: string | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null, formats?: any | null } | null } | null } | null, metaSocial?: Array<{ __typename?: 'ComponentSharedMetaSocial', socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork, title: string, description: string } | null> | null } | null, categories?: { __typename?: 'CategoryRelationResponseCollection', data: Array<{ __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', name: string, slug: string, parentCategory?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', slug: string, name: string } | null } | null } | null } | null }> } | null, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null, formats?: any | null } | null } | null }, keyVisualSquare?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null, Interviewee?: { __typename?: 'ComponentArticleInterviewee', name: string, title: string, portrait: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null, formats?: any | null } | null } | null } } | null, editor?: { __typename?: 'EditorEntityResponse', data?: { __typename?: 'EditorEntity', id?: string | null, attributes?: { __typename?: 'Editor', name: string, biography?: string | null, isBlogger?: boolean | null, avatar: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null, formats?: any | null } | null } | null } } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', id?: string | null, attributes?: { __typename?: 'Tag', name: string, slug: string } | null }> } | null, relatedArticles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, publishedDate: any, slug: string, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null, alternativeText?: string | null } | null } | null } } | null }> } | null, otherEventArticles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, publishedDate: any, slug: string, publishedAt?: any | null, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null, alternativeText?: string | null } | null } | null } } | null }> } | null } | null } | null } | null, category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', name: string, slug: string, layout?: Enum_Category_Layout | null, editorPicks?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null }> } | null, bloggerList?: { __typename?: 'EditorRelationResponseCollection', data: Array<{ __typename?: 'EditorEntity', id?: string | null, attributes?: { __typename?: 'Editor', slug: string, name: string, biography?: string | null, avatar: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } } | null }> } | null, pinArticle?: { __typename?: 'ArticleEntityResponse', data?: { __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, slug: string, content?: string | null, publishedDate: any, categories?: { __typename?: 'CategoryRelationResponseCollection', data: Array<{ __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', name: string, slug: string } | null }> } | null, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null, formats?: any | null } | null } | null }, keyVisualVertical?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, height?: number | null, width?: number | null } | null } | null } | null } | null } | null } | null, recommendArticles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, slug: string, publishedAt?: any | null, publishedDate: any, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, alternativeText?: string | null, width?: number | null, formats?: any | null } | null } | null }, keyVisualVertical?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, alternativeText?: string | null, width?: number | null } | null } | null } | null } | null }> } | null, articles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, slug: string, keyVisualVertical?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, height?: number | null, width?: number | null, formats?: any | null } | null } | null } | null } | null }> } | null, Topic?: { __typename?: 'ComponentArticleTopic', keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, formats?: any | null, alternativeText?: string | null } | null } | null } } | null, parentCategory?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', name: string, slug: string } | null } | null } | null, seo?: { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string } | null } | null } | null } | null, ad_banner_in_between?: { __typename?: 'AdBannerEntityResponse', data?: { __typename?: 'AdBannerEntity', id?: string | null } | null } | null } | { __typename?: 'Error' } | null> | null } | null } | null } | null };

type HomePageCategoryFeatureDynamicZoneFragment_ComponentHomeCategoryFeature_Fragment = { __typename?: 'ComponentHomeCategoryFeature', id: string, pinArticle?: { __typename?: 'ArticleEntityResponse', data?: { __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', stockQuote?: string | null, hideKeyVisual?: boolean | null, title: string, publishedDate: any, slug: string, editorSelect?: boolean | null, layout?: Enum_Article_Layout | null, sidenote?: string | null, ad_banner_side?: { __typename?: 'AdBannerEntityResponse', data?: { __typename?: 'AdBannerEntity', id?: string | null } | null } | null, seo?: { __typename?: 'ComponentSharedSeo', metaDescription: string, metaTitle: string, keywords?: string | null, metaRobots?: string | null, metaViewport?: string | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null, formats?: any | null } | null } | null } | null, metaSocial?: Array<{ __typename?: 'ComponentSharedMetaSocial', socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork, title: string, description: string } | null> | null } | null, categories?: { __typename?: 'CategoryRelationResponseCollection', data: Array<{ __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', name: string, slug: string, parentCategory?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', slug: string, name: string } | null } | null } | null } | null }> } | null, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null, formats?: any | null } | null } | null }, keyVisualSquare?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null, Interviewee?: { __typename?: 'ComponentArticleInterviewee', name: string, title: string, portrait: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null, formats?: any | null } | null } | null } } | null, editor?: { __typename?: 'EditorEntityResponse', data?: { __typename?: 'EditorEntity', id?: string | null, attributes?: { __typename?: 'Editor', name: string, biography?: string | null, isBlogger?: boolean | null, avatar: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null, formats?: any | null } | null } | null } } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', id?: string | null, attributes?: { __typename?: 'Tag', name: string, slug: string } | null }> } | null, relatedArticles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, publishedDate: any, slug: string, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null, alternativeText?: string | null } | null } | null } } | null }> } | null, otherEventArticles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, publishedDate: any, slug: string, publishedAt?: any | null, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null, alternativeText?: string | null } | null } | null } } | null }> } | null } | null } | null } | null, category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', name: string, slug: string, layout?: Enum_Category_Layout | null, editorPicks?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null }> } | null, bloggerList?: { __typename?: 'EditorRelationResponseCollection', data: Array<{ __typename?: 'EditorEntity', id?: string | null, attributes?: { __typename?: 'Editor', slug: string, name: string, biography?: string | null, avatar: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } } | null }> } | null, pinArticle?: { __typename?: 'ArticleEntityResponse', data?: { __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, slug: string, content?: string | null, publishedDate: any, categories?: { __typename?: 'CategoryRelationResponseCollection', data: Array<{ __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', name: string, slug: string } | null }> } | null, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null, formats?: any | null } | null } | null }, keyVisualVertical?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, height?: number | null, width?: number | null } | null } | null } | null } | null } | null } | null, recommendArticles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, slug: string, publishedAt?: any | null, publishedDate: any, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, alternativeText?: string | null, width?: number | null, formats?: any | null } | null } | null }, keyVisualVertical?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, alternativeText?: string | null, width?: number | null } | null } | null } | null } | null }> } | null, articles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, slug: string, keyVisualVertical?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, height?: number | null, width?: number | null, formats?: any | null } | null } | null } | null } | null }> } | null, Topic?: { __typename?: 'ComponentArticleTopic', keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, formats?: any | null, alternativeText?: string | null } | null } | null } } | null, parentCategory?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', name: string, slug: string } | null } | null } | null, seo?: { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string } | null } | null } | null } | null, ad_banner_in_between?: { __typename?: 'AdBannerEntityResponse', data?: { __typename?: 'AdBannerEntity', id?: string | null } | null } | null };

type HomePageCategoryFeatureDynamicZoneFragment_Error_Fragment = { __typename?: 'Error' };

export type HomePageCategoryFeatureDynamicZoneFragmentFragment = HomePageCategoryFeatureDynamicZoneFragment_ComponentHomeCategoryFeature_Fragment | HomePageCategoryFeatureDynamicZoneFragment_Error_Fragment;

export type HomeFeatureAdsQueryVariables = Exact<{ [key: string]: never; }>;


export type HomeFeatureAdsQuery = { __typename?: 'Query', homePage?: { __typename?: 'HomePageEntityResponse', data?: { __typename?: 'HomePageEntity', attributes?: { __typename?: 'HomePage', featuredSection: { __typename?: 'ComponentHomeFeaturedSection', ad_banner_side?: { __typename?: 'AdBannerEntityResponse', data?: { __typename?: 'AdBannerEntity', id?: string | null } | null } | null } } | null } | null } | null };

export type HomeFeaturedEditorPickQueryVariables = Exact<{ [key: string]: never; }>;


export type HomeFeaturedEditorPickQuery = { __typename?: 'Query', homePage?: { __typename?: 'HomePageEntityResponse', data?: { __typename?: 'HomePageEntity', id?: string | null, attributes?: { __typename?: 'HomePage', featuredSection: { __typename?: 'ComponentHomeFeaturedSection', id: string, editor_picks?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, publishedDate: any, slug: string, editorSelect?: boolean | null, seo?: { __typename?: 'ComponentSharedSeo', metaDescription: string } | null, categories?: { __typename?: 'CategoryRelationResponseCollection', data: Array<{ __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', name: string, slug: string, parentCategory?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', slug: string, name: string } | null } | null } | null } | null }> } | null, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null, formats?: any | null } | null } | null }, editor?: { __typename?: 'EditorEntityResponse', data?: { __typename?: 'EditorEntity', id?: string | null, attributes?: { __typename?: 'Editor', name: string, biography?: string | null, isBlogger?: boolean | null, avatar: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null, formats?: any | null } | null } | null } } | null } | null } | null } | null }> } | null } } | null } | null } | null };

export type HomeFeatureTrendingNewsQueryVariables = Exact<{ [key: string]: never; }>;


export type HomeFeatureTrendingNewsQuery = { __typename?: 'Query', homePage?: { __typename?: 'HomePageEntityResponse', data?: { __typename?: 'HomePageEntity', id?: string | null, attributes?: { __typename?: 'HomePage', featuredSection: { __typename?: 'ComponentHomeFeaturedSection', id: string, popular_news?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, publishedDate: any, slug: string, editorSelect?: boolean | null, seo?: { __typename?: 'ComponentSharedSeo', metaDescription: string } | null, categories?: { __typename?: 'CategoryRelationResponseCollection', data: Array<{ __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', name: string, slug: string, parentCategory?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', slug: string, name: string } | null } | null } | null } | null }> } | null, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null, formats?: any | null } | null } | null }, editor?: { __typename?: 'EditorEntityResponse', data?: { __typename?: 'EditorEntity', id?: string | null, attributes?: { __typename?: 'Editor', name: string, biography?: string | null, isBlogger?: boolean | null, avatar: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null, formats?: any | null } | null } | null } } | null } | null } | null } | null }> } | null } } | null } | null } | null };

export type HomeInterviewQueryVariables = Exact<{
  filters?: InputMaybe<ArticleFiltersInput>;
}>;


export type HomeInterviewQuery = { __typename?: 'Query', interview?: { __typename?: 'InterviewEntityResponse', data?: { __typename?: 'InterviewEntity', id?: string | null, attributes?: { __typename?: 'Interview', url?: string | null, name: string, articles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', stockQuote?: string | null, hideKeyVisual?: boolean | null, title: string, publishedDate: any, slug: string, editorSelect?: boolean | null, layout?: Enum_Article_Layout | null, sidenote?: string | null, ad_banner_side?: { __typename?: 'AdBannerEntityResponse', data?: { __typename?: 'AdBannerEntity', id?: string | null } | null } | null, seo?: { __typename?: 'ComponentSharedSeo', metaDescription: string, metaTitle: string, keywords?: string | null, metaRobots?: string | null, metaViewport?: string | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null, formats?: any | null } | null } | null } | null, metaSocial?: Array<{ __typename?: 'ComponentSharedMetaSocial', socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork, title: string, description: string } | null> | null } | null, categories?: { __typename?: 'CategoryRelationResponseCollection', data: Array<{ __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', name: string, slug: string, parentCategory?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', slug: string, name: string } | null } | null } | null } | null }> } | null, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null, formats?: any | null } | null } | null }, keyVisualSquare?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null, Interviewee?: { __typename?: 'ComponentArticleInterviewee', name: string, title: string, portrait: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null, formats?: any | null } | null } | null } } | null, editor?: { __typename?: 'EditorEntityResponse', data?: { __typename?: 'EditorEntity', id?: string | null, attributes?: { __typename?: 'Editor', name: string, biography?: string | null, isBlogger?: boolean | null, avatar: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null, formats?: any | null } | null } | null } } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', id?: string | null, attributes?: { __typename?: 'Tag', name: string, slug: string } | null }> } | null, relatedArticles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, publishedDate: any, slug: string, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null, alternativeText?: string | null } | null } | null } } | null }> } | null, otherEventArticles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, publishedDate: any, slug: string, publishedAt?: any | null, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null, alternativeText?: string | null } | null } | null } } | null }> } | null } | null }> } | null } | null } | null } | null, articles?: { __typename?: 'ArticleEntityResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', stockQuote?: string | null, hideKeyVisual?: boolean | null, title: string, publishedDate: any, slug: string, editorSelect?: boolean | null, layout?: Enum_Article_Layout | null, sidenote?: string | null, ad_banner_side?: { __typename?: 'AdBannerEntityResponse', data?: { __typename?: 'AdBannerEntity', id?: string | null } | null } | null, seo?: { __typename?: 'ComponentSharedSeo', metaDescription: string, metaTitle: string, keywords?: string | null, metaRobots?: string | null, metaViewport?: string | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null, formats?: any | null } | null } | null } | null, metaSocial?: Array<{ __typename?: 'ComponentSharedMetaSocial', socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork, title: string, description: string } | null> | null } | null, categories?: { __typename?: 'CategoryRelationResponseCollection', data: Array<{ __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', name: string, slug: string, parentCategory?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', slug: string, name: string } | null } | null } | null } | null }> } | null, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null, formats?: any | null } | null } | null }, keyVisualSquare?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string } | null } | null } | null, Interviewee?: { __typename?: 'ComponentArticleInterviewee', name: string, title: string, portrait: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null, formats?: any | null } | null } | null } } | null, editor?: { __typename?: 'EditorEntityResponse', data?: { __typename?: 'EditorEntity', id?: string | null, attributes?: { __typename?: 'Editor', name: string, biography?: string | null, isBlogger?: boolean | null, avatar: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null, formats?: any | null } | null } | null } } | null } | null } | null, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', id?: string | null, attributes?: { __typename?: 'Tag', name: string, slug: string } | null }> } | null, relatedArticles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, publishedDate: any, slug: string, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null, alternativeText?: string | null } | null } | null } } | null }> } | null, otherEventArticles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, publishedDate: any, slug: string, publishedAt?: any | null, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null, alternativeText?: string | null } | null } | null } } | null }> } | null } | null }> } | null };

export type HomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type HomePageQuery = { __typename?: 'Query', homePage?: { __typename?: 'HomePageEntityResponse', data?: { __typename?: 'HomePageEntity', id?: string | null, attributes?: { __typename?: 'HomePage', ExpertReviewUrl?: string | null, PageTitle: string, Carousel: Array<{ __typename?: 'ComponentHomeBannerArticle', id: string, article?: { __typename?: 'ArticleEntityResponse', data?: { __typename?: 'ArticleEntity', attributes?: { __typename?: 'Article', title: string, slug: string, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', id?: string | null, attributes?: { __typename?: 'Tag', name: string, seo?: { __typename?: 'ComponentSharedSeo', id: string, metaDescription: string } | null } | null }> } | null, categories?: { __typename?: 'CategoryRelationResponseCollection', data: Array<{ __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', name: string, slug: string, parentCategory?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', slug: string, name: string } | null } | null } | null } | null }> } | null, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null, formats?: any | null } | null } | null } } | null } | null } | null } | { __typename?: 'ComponentHomeBannerImage', id: string, url?: string | null, target?: Enum_Componenthomebannerimage_Target | null, ImageText: string, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null, formats?: any | null } | null } | null } } | { __typename?: 'ComponentHomeBannerVideoMp4', id: string, videoText?: string | null, video?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, name: string, alternativeText?: string | null } | null } | null } | null, media?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, name: string, width?: number | null, height?: number | null, alternativeText?: string | null, formats?: any | null } | null } | null } | null, videoPoster?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null, formats?: any | null } | null }> } | null } | { __typename?: 'ComponentHomeBannerVideoUrl', id: string, url?: string | null, videoURLText?: string | null, media?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, url: string, width?: number | null, height?: number | null, alternativeText?: string | null, formats?: any | null } | null } | null } | null } | { __typename?: 'Error' } | null>, seo?: { __typename?: 'ComponentSharedSeo', metaDescription: string, metaTitle: string, keywords?: string | null, metaRobots?: string | null, metaViewport?: string | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } | null, metaSocial?: Array<{ __typename?: 'ComponentSharedMetaSocial', socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork, title: string, description: string } | null> | null } | null } | null } | null } | null };

export type ComponentHomeBannerArticleFragmentFragment = { __typename?: 'ComponentHomeBannerArticle', id: string, article?: { __typename?: 'ArticleEntityResponse', data?: { __typename?: 'ArticleEntity', attributes?: { __typename?: 'Article', title: string, slug: string, tags?: { __typename?: 'TagRelationResponseCollection', data: Array<{ __typename?: 'TagEntity', id?: string | null, attributes?: { __typename?: 'Tag', name: string, seo?: { __typename?: 'ComponentSharedSeo', id: string, metaDescription: string } | null } | null }> } | null, categories?: { __typename?: 'CategoryRelationResponseCollection', data: Array<{ __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', name: string, slug: string, parentCategory?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', slug: string, name: string } | null } | null } | null } | null }> } | null, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null, formats?: any | null } | null } | null } } | null } | null } | null };

export type ComponentHomeBannerImageFragmentFragment = { __typename?: 'ComponentHomeBannerImage', id: string, url?: string | null, target?: Enum_Componenthomebannerimage_Target | null, ImageText: string, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null, formats?: any | null } | null } | null } };

export type ComponentHomeBannerVideoMp4FragmentFragment = { __typename?: 'ComponentHomeBannerVideoMp4', id: string, videoText?: string | null, video?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, name: string, alternativeText?: string | null } | null } | null } | null, media?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, name: string, width?: number | null, height?: number | null, alternativeText?: string | null, formats?: any | null } | null } | null } | null, videoPoster?: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null, formats?: any | null } | null }> } | null };

export type ComponentHomeBannerVideoUrlFragmentFragment = { __typename?: 'ComponentHomeBannerVideoUrl', id: string, url?: string | null, videoURLText?: string | null, media?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', name: string, url: string, width?: number | null, height?: number | null, alternativeText?: string | null, formats?: any | null } | null } | null } | null };

export type HomeTopBannerQueryVariables = Exact<{ [key: string]: never; }>;


export type HomeTopBannerQuery = { __typename?: 'Query', homePage?: { __typename?: 'HomePageEntityResponse', data?: { __typename?: 'HomePageEntity', id?: string | null, attributes?: { __typename?: 'HomePage', HomeTopBanner?: { __typename?: 'ComponentHomeHomeBanner', url: string, target?: Enum_Componenthomehomebanner_Target | null, alternativeText?: string | null, image: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null }, mobileImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string } | null } | null } | null } | null } | null } | null } | null };

export type HomeTopicSectionQueryVariables = Exact<{
  includeLayout?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type HomeTopicSectionQuery = { __typename?: 'Query', homePage?: { __typename?: 'HomePageEntityResponse', data?: { __typename?: 'HomePageEntity', id?: string | null, attributes?: { __typename?: 'HomePage', Topic?: { __typename?: 'ComponentHomeTopic', id: string, url?: string | null, name?: string | null, categories?: { __typename?: 'CategoryRelationResponseCollection', data: Array<{ __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', name: string, slug: string, layout?: Enum_Category_Layout | null, Topic?: { __typename?: 'ComponentArticleTopic', keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, formats?: any | null, width?: number | null, height?: number | null } | null } | null } } | null, editorPicks?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null }> } | null, bloggerList?: { __typename?: 'EditorRelationResponseCollection', data: Array<{ __typename?: 'EditorEntity', id?: string | null, attributes?: { __typename?: 'Editor', slug: string, name: string, biography?: string | null, avatar: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null } | null } | null } } | null }> } | null, pinArticle?: { __typename?: 'ArticleEntityResponse', data?: { __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, slug: string, content?: string | null, publishedDate: any, categories?: { __typename?: 'CategoryRelationResponseCollection', data: Array<{ __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', name: string, slug: string } | null }> } | null, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, width?: number | null, height?: number | null, formats?: any | null } | null } | null }, keyVisualVertical?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, height?: number | null, width?: number | null } | null } | null } | null } | null } | null } | null, recommendArticles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, slug: string, publishedAt?: any | null, publishedDate: any, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, alternativeText?: string | null, width?: number | null, formats?: any | null } | null } | null }, keyVisualVertical?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, alternativeText?: string | null, width?: number | null } | null } | null } | null } | null }> } | null, articles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, slug: string, keyVisualVertical?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, height?: number | null, width?: number | null, formats?: any | null } | null } | null } | null } | null }> } | null, parentCategory?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', id?: string | null, attributes?: { __typename?: 'Category', name: string, slug: string } | null } | null } | null, seo?: { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string } | null } | null }> } | null } | null } | null } | null } | null };

export type HomeTopicSectionExtraCategoryImageFragment = { __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', Topic?: { __typename?: 'ComponentArticleTopic', keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, formats?: any | null } | null } | null } } | null } | null };

export type InformationBoxesBasicFragment = { __typename?: 'InformationBoxEntity', id?: string | null, attributes?: { __typename?: 'InformationBox', location?: string | null, title?: string | null, hours?: string | null, phone?: string | null, remark?: string | null, description?: string | null, users?: { __typename?: 'UsersPermissionsUserRelationResponseCollection', data: Array<{ __typename?: 'UsersPermissionsUserEntity', attributes?: { __typename?: 'UsersPermissionsUser', username: string } | null }> } | null } | null };

export type InterestedAreaQueryVariables = Exact<{ [key: string]: never; }>;


export type InterestedAreaQuery = { __typename?: 'Query', interestedAreas?: { __typename?: 'InterestedAreaEntityResponseCollection', data: Array<{ __typename?: 'InterestedAreaEntity', id?: string | null, attributes?: { __typename?: 'InterestedArea', Title?: string | null } | null }> } | null };

export type InterviewListQueryVariables = Exact<{ [key: string]: never; }>;


export type InterviewListQuery = { __typename?: 'Query', interview?: { __typename?: 'InterviewEntityResponse', data?: { __typename?: 'InterviewEntity', id?: string | null, attributes?: { __typename?: 'Interview', articles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null, attributes?: { __typename?: 'Article', title: string, slug: string, categories?: { __typename?: 'CategoryRelationResponseCollection', data: Array<{ __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', name: string, slug: string, parentCategory?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', slug: string, name: string } | null } | null } | null } | null }> } | null, Interviewee?: { __typename?: 'ComponentArticleInterviewee', name: string, title: string, portrait: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, width?: number | null, height?: number | null, url: string, formats?: any | null } | null } | null } } | null, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, height?: number | null, width?: number | null, alternativeText?: string | null } | null } | null } } | null }> } | null } | null } | null } | null };

export type MenusMenuItemsQueryVariables = Exact<{
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  filters?: InputMaybe<MenusMenuItemFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
}>;


export type MenusMenuItemsQuery = { __typename?: 'Query', menusMenuItems?: { __typename?: 'MenusMenuItemEntityResponseCollection', data: Array<{ __typename?: 'MenusMenuItemEntity', id?: string | null, attributes?: { __typename?: 'MenusMenuItem', order?: number | null, title: string, url?: string | null, target?: Enum_Menusmenuitem_Target | null, parent?: { __typename?: 'MenusMenuItemEntityResponse', data?: { __typename?: 'MenusMenuItemEntity', attributes?: { __typename?: 'MenusMenuItem', order?: number | null, title: string, url?: string | null, target?: Enum_Menusmenuitem_Target | null } | null } | null } | null } | null }> } | null };

export type FindNewsletterSubscriptionQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
}>;


export type FindNewsletterSubscriptionQuery = { __typename?: 'Query', findNewsletterSubscription?: { __typename?: 'NewsletterSubscriptionResponse', data?: { __typename?: 'SubscribeNewsletterEntity', email?: string | null, createdAt?: string | null, updatedAt?: string | null, id?: number | null } | null } | null };

export type PagesListQueryVariables = Exact<{
  filters?: InputMaybe<PageFiltersInput>;
}>;


export type PagesListQuery = { __typename?: 'Query', pages?: { __typename?: 'PageEntityResponseCollection', data: Array<{ __typename?: 'PageEntity', attributes?: { __typename?: 'Page', title: string, slug: string, mastheadTitle?: string | null, content?: string | null, blocks?: Array<{ __typename?: 'ComponentArticleEmbedInstagram', URL: string } | { __typename?: 'ComponentArticleEmbedVideo', URL: string, videoName: string, video: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } } | { __typename?: 'ComponentArticleFaq', faq?: Array<{ __typename?: 'ComponentArticleQuestionAnswer', Question?: string | null, Answer?: string | null, SubAnswer?: string | null } | null> | null } | { __typename?: 'ComponentArticleImage', caption?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } | null } | { __typename?: 'ComponentArticleImageCarousel', id: string, ImageCarousel?: Array<{ __typename?: 'ComponentSharedImage', id: string, description?: string | null, url?: string | null, title?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } | null } | null> | null } | { __typename?: 'ComponentArticleImageGallery', id: string, ImageGallery?: Array<{ __typename?: 'ComponentSharedImage', description?: string | null, url?: string | null, title?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } | null } | null> | null } | { __typename?: 'ComponentArticleImageWithContent', id: string, showAtRightColumn?: boolean | null, content?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } | null } | { __typename?: 'ComponentArticleInfoBox', information_box?: { __typename?: 'InformationBoxEntityResponse', data?: { __typename?: 'InformationBoxEntity', id?: string | null, attributes?: { __typename?: 'InformationBox', location?: string | null, title?: string | null, hours?: string | null, phone?: string | null, remark?: string | null, description?: string | null, users?: { __typename?: 'UsersPermissionsUserRelationResponseCollection', data: Array<{ __typename?: 'UsersPermissionsUserEntity', attributes?: { __typename?: 'UsersPermissionsUser', username: string } | null }> } | null } | null } | null } | null } | { __typename?: 'ComponentArticleListicleTitle', Number?: number | null, Title?: string | null, description?: string | null } | { __typename?: 'ComponentArticlePictureWithTag', Image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } | null, tags?: Array<{ __typename?: 'ComponentSharedTag', id: string, PositionX?: number | null, PositionY?: number | null, product?: { __typename?: 'ProductEntityResponse', data?: { __typename?: 'ProductEntity', attributes?: { __typename?: 'Product', name?: string | null, description?: string | null, retailPriceHKD?: number | null, specialPriceHKD?: number | null, url?: string | null, brand?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } | null } | null } | null } | null } | null> | null } | { __typename?: 'ComponentArticlePrizeList', prizeList?: Array<{ __typename?: 'ComponentCommonPrizeList', name: string, companyName?: string | null, content1?: string | null, content2?: string | null, companyLogo: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } } | null> | null } | { __typename?: 'ComponentArticleProductList', Products?: Array<{ __typename?: 'ComponentSharedProducts', product?: { __typename?: 'ProductEntityResponse', data?: { __typename?: 'ProductEntity', attributes?: { __typename?: 'Product', brand?: string | null, name?: string | null, retailPriceHKD?: number | null, specialPriceHKD?: number | null, url?: string | null, description?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } | null } | null } | null } | null } | null> | null } | { __typename?: 'ComponentArticleProductReview', ListicleTitle?: { __typename?: 'ComponentArticleListicleTitle', Number?: number | null, Title?: string | null, description?: string | null } | null, ImageCarousel?: Array<{ __typename?: 'ComponentSharedImage', description?: string | null, url?: string | null, title?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } | null } | null> | null, ProductRate?: Array<{ __typename?: 'ComponentCommonProductRate', Label?: string | null, score?: number | null, Icon?: { __typename?: 'ScoreEntityResponse', data?: { __typename?: 'ScoreEntity', attributes?: { __typename?: 'Score', name?: string | null, icon?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } | null, iconFilled?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } | null } | null } | null } | null } | null> | null } | { __typename?: 'ComponentArticleQuestionAnswer', Question?: string | null, Answer?: string | null, SubAnswer?: string | null } | { __typename?: 'ComponentArticleQuestionAnswer2Columns', imageCaption?: string | null, showAtRightColumn?: boolean | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } | null, QuestionAnswers?: Array<{ __typename?: 'ComponentArticleQuestionAnswer', Question?: string | null, Answer?: string | null, SubAnswer?: string | null } | null> | null } | { __typename?: 'ComponentArticleRichText', richText?: string | null } | { __typename?: 'ComponentArticleTipsBox', description?: string | null } | { __typename?: 'ComponentArticleVideo', name?: string | null, video: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null }, ArticleVideoImage: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } } | { __typename?: 'Error' } | null> | null, mastheadBanner?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, height?: number | null, width?: number | null } | null } | null } | null, seo?: { __typename?: 'ComponentSharedSeo', metaTitle: string, metaDescription: string, keywords?: string | null, metaRobots?: string | null, structuredData?: any | null, metaViewport?: string | null, canonicalURL?: string | null, metaSocial?: Array<{ __typename?: 'ComponentSharedMetaSocial', title: string, socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork, description: string, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, alternativeText?: string | null, height?: number | null, width?: number | null } | null } | null } | null } | null> | null } | null } | null }> } | null };

export type ComponentArticleImageWithContentFragmentFragment = { __typename?: 'ComponentArticleImageWithContent', id: string, showAtRightColumn?: boolean | null, content?: string | null, image?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } | null };

export type RoutesQueryVariables = Exact<{
  filters?: InputMaybe<RouteFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type RoutesQuery = { __typename?: 'Query', routes?: { __typename?: 'RouteEntityResponseCollection', data: Array<{ __typename?: 'RouteEntity', id?: string | null, attributes?: { __typename?: 'Route', requestPath: string, value?: string | null, type: Enum_Route_Type } | null }> } | null };

export type ArticleSeoQueryVariables = Exact<{
  filters?: InputMaybe<ArticleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
  publicationState?: InputMaybe<PublicationState>;
}>;


export type ArticleSeoQuery = { __typename?: 'Query', articles?: { __typename?: 'ArticleEntityResponseCollection', data: Array<{ __typename?: 'ArticleEntity', attributes?: { __typename?: 'Article', slug: string, keyVisualHorizontal: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', id?: string | null, attributes?: { __typename?: 'UploadFile', alternativeText?: string | null, url: string, width?: number | null, height?: number | null, formats?: any | null } | null } | null }, categories?: { __typename?: 'CategoryRelationResponseCollection', data: Array<{ __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', slug: string, parentCategory?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', slug: string } | null } | null } | null } | null }> } | null, seo?: { __typename?: 'ComponentSharedSeo', metaDescription: string, metaTitle: string, keywords?: string | null, metaRobots?: string | null, metaViewport?: string | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null, formats?: any | null } | null } | null } | null, metaSocial?: Array<{ __typename?: 'ComponentSharedMetaSocial', socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork, title: string, description: string } | null> | null } | null } | null }> } | null };

export type CategorySeoQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
}>;


export type CategorySeoQuery = { __typename?: 'Query', category?: { __typename?: 'CategoryEntityResponse', data?: { __typename?: 'CategoryEntity', attributes?: { __typename?: 'Category', seo?: { __typename?: 'ComponentSharedSeo', metaDescription: string, metaTitle: string, keywords?: string | null, metaRobots?: string | null, metaViewport?: string | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } | null, metaSocial?: Array<{ __typename?: 'ComponentSharedMetaSocial', socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork, title: string, description: string } | null> | null } | null } | null } | null } | null };

export type HomeSeoQueryVariables = Exact<{ [key: string]: never; }>;


export type HomeSeoQuery = { __typename?: 'Query', homePage?: { __typename?: 'HomePageEntityResponse', data?: { __typename?: 'HomePageEntity', id?: string | null, attributes?: { __typename?: 'HomePage', seo?: { __typename?: 'ComponentSharedSeo', metaDescription: string, metaTitle: string, keywords?: string | null, metaRobots?: string | null, metaViewport?: string | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } | null, metaSocial?: Array<{ __typename?: 'ComponentSharedMetaSocial', socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork, title: string, description: string } | null> | null } | null } | null } | null } | null };

export type PageSeoQueryVariables = Exact<{
  filters?: InputMaybe<PageFiltersInput>;
}>;


export type PageSeoQuery = { __typename?: 'Query', pages?: { __typename?: 'PageEntityResponseCollection', data: Array<{ __typename?: 'PageEntity', attributes?: { __typename?: 'Page', seo?: { __typename?: 'ComponentSharedSeo', metaDescription: string, metaTitle: string, keywords?: string | null, metaRobots?: string | null, metaViewport?: string | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } | null, metaSocial?: Array<{ __typename?: 'ComponentSharedMetaSocial', socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork, title: string, description: string } | null> | null } | null } | null }> } | null };

export type TagSeoQueryVariables = Exact<{
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type TagSeoQuery = { __typename?: 'Query', tags?: { __typename?: 'TagEntityResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', seo?: { __typename?: 'ComponentSharedSeo', metaDescription: string, metaTitle: string, keywords?: string | null, metaRobots?: string | null, metaViewport?: string | null, metaImage?: { __typename?: 'UploadFileEntityResponse', data?: { __typename?: 'UploadFileEntity', attributes?: { __typename?: 'UploadFile', url: string, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null } | null, metaSocial?: Array<{ __typename?: 'ComponentSharedMetaSocial', socialNetwork: Enum_Componentsharedmetasocial_Socialnetwork, title: string, description: string } | null> | null } | null } | null }> } | null };

export type TagsQueryVariables = Exact<{
  filters?: InputMaybe<TagFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>> | InputMaybe<Scalars['String']['input']>>;
}>;


export type TagsQuery = { __typename?: 'Query', tags?: { __typename?: 'TagEntityResponseCollection', data: Array<{ __typename?: 'TagEntity', attributes?: { __typename?: 'Tag', slug: string, name: string, articles?: { __typename?: 'ArticleRelationResponseCollection', data: Array<{ __typename?: 'ArticleEntity', id?: string | null }> } | null } | null }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number } } } | null };

export const ArticleListFragmentDoc = gql`
    fragment ArticleList on ArticleEntity {
  id
  attributes {
    title
    publishedDate
    slug
    editorSelect
    seo {
      metaDescription
    }
    categories {
      data {
        attributes {
          name
          slug
          parentCategory {
            data {
              attributes {
                slug
                name
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
          alternativeText
          url
          width
          height
          formats
        }
      }
    }
    editor {
      data {
        id
        attributes {
          name
          biography
          isBlogger
          avatar {
            data {
              attributes {
                url
                width
                height
                alternativeText
                formats
              }
            }
          }
        }
      }
    }
  }
}
    `;
export const ComponentArticleEmbedInstagramFragmentFragmentDoc = gql`
    fragment ComponentArticleEmbedInstagramFragment on ComponentArticleEmbedInstagram {
  URL
}
    `;
export const ComponentArticleEmbedVideoFragmentFragmentDoc = gql`
    fragment ComponentArticleEmbedVideoFragment on ComponentArticleEmbedVideo {
  videoName: name
  URL
  video: image {
    data {
      attributes {
        url
        width
        height
        alternativeText
      }
    }
  }
}
    `;
export const ComponentArticleImageFragmentFragmentDoc = gql`
    fragment ComponentArticleImageFragment on ComponentArticleImage {
  image {
    data {
      attributes {
        url
        width
        height
        alternativeText
      }
    }
  }
  caption
}
    `;
export const ComponentArticleImageCarouselFragmentFragmentDoc = gql`
    fragment ComponentArticleImageCarouselFragment on ComponentArticleImageCarousel {
  id
  ImageCarousel {
    id
    description
    url
    title
    image {
      data {
        attributes {
          url
          width
          height
          alternativeText
        }
      }
    }
  }
}
    `;
export const ComponentArticleImageGalleryFragmentFragmentDoc = gql`
    fragment ComponentArticleImageGalleryFragment on ComponentArticleImageGallery {
  id
  ImageGallery {
    image {
      data {
        attributes {
          url
          width
          height
          alternativeText
        }
      }
    }
    description
    url
    title
  }
}
    `;
export const InformationBoxesBasicFragmentDoc = gql`
    fragment InformationBoxesBasic on InformationBoxEntity {
  id
  attributes {
    location
    title
    hours
    phone
    remark
    description
    users {
      data {
        attributes {
          username
        }
      }
    }
  }
}
    `;
export const ComponentArticleInfoBoxFragmentFragmentDoc = gql`
    fragment ComponentArticleInfoBoxFragment on ComponentArticleInfoBox {
  information_box {
    data {
      ...InformationBoxesBasic
    }
  }
}
    ${InformationBoxesBasicFragmentDoc}`;
export const ComponentArticleIntervieweeFragmentFragmentDoc = gql`
    fragment ComponentArticleIntervieweeFragment on ComponentArticleInterviewee {
  name
  portrait {
    data {
      attributes {
        url
        width
        height
        alternativeText
      }
    }
  }
  title
}
    `;
export const ComponentArticleListicleTitleFragmentFragmentDoc = gql`
    fragment ComponentArticleListicleTitleFragment on ComponentArticleListicleTitle {
  Number
  Title
  description
}
    `;
export const ComponentArticlePictureWithTagFragmentFragmentDoc = gql`
    fragment ComponentArticlePictureWithTagFragment on ComponentArticlePictureWithTag {
  Image {
    data {
      attributes {
        url
        width
        height
        alternativeText
      }
    }
  }
  tags {
    id
    PositionX
    PositionY
    product {
      data {
        attributes {
          name
          description
          retailPriceHKD
          specialPriceHKD
          url
          brand
          image {
            data {
              attributes {
                url
                width
                height
                alternativeText
              }
            }
          }
        }
      }
    }
  }
}
    `;
export const ComponentArticlePrizeListFragmentFragmentDoc = gql`
    fragment ComponentArticlePrizeListFragment on ComponentArticlePrizeList {
  prizeList {
    name
    companyName
    content1
    content2
    companyLogo {
      data {
        attributes {
          url
          width
          height
          alternativeText
        }
      }
    }
  }
}
    `;
export const ComponentArticleProductListFragmentFragmentDoc = gql`
    fragment ComponentArticleProductListFragment on ComponentArticleProductList {
  Products {
    product {
      data {
        attributes {
          brand
          name
          retailPriceHKD
          specialPriceHKD
          url
          description
          image {
            data {
              attributes {
                url
                width
                height
                alternativeText
              }
            }
          }
        }
      }
    }
  }
}
    `;
export const ComponentArticleProductRateFragmentFragmentDoc = gql`
    fragment ComponentArticleProductRateFragment on ComponentArticleProductRate {
  ProductRate {
    Label
    score
    Icon {
      data {
        attributes {
          iconFilled {
            data {
              attributes {
                url
                height
                width
                alternativeText
              }
            }
          }
          icon {
            data {
              attributes {
                url
                height
                width
                alternativeText
              }
            }
          }
        }
      }
    }
  }
}
    `;
export const ComponentArticleProductReviewFragmentFragmentDoc = gql`
    fragment ComponentArticleProductReviewFragment on ComponentArticleProductReview {
  ListicleTitle {
    Number
    Title
    description
  }
  ImageCarousel {
    image {
      data {
        attributes {
          url
          width
          height
          alternativeText
        }
      }
    }
    description
    url
    title
  }
  ProductRate {
    Label
    score
    Icon {
      data {
        attributes {
          icon {
            data {
              attributes {
                url
                width
                height
                alternativeText
              }
            }
          }
          iconFilled {
            data {
              attributes {
                url
                width
                height
                alternativeText
              }
            }
          }
          name
        }
      }
    }
  }
}
    `;
export const ComponentArticleQuestionAnswerFragmentFragmentDoc = gql`
    fragment ComponentArticleQuestionAnswerFragment on ComponentArticleQuestionAnswer {
  Question
  Answer
  SubAnswer
}
    `;
export const ComponentArticleQuestionAnswer2ColumnsFragmentFragmentDoc = gql`
    fragment ComponentArticleQuestionAnswer2ColumnsFragment on ComponentArticleQuestionAnswer2Columns {
  image {
    data {
      attributes {
        url
        width
        height
        alternativeText
      }
    }
  }
  imageCaption
  showAtRightColumn
  QuestionAnswers {
    Question
    Answer
    SubAnswer
  }
}
    `;
export const ComponentArticleRichTextFragmentFragmentDoc = gql`
    fragment ComponentArticleRichTextFragment on ComponentArticleRichText {
  richText
}
    `;
export const ComponentArticleTipsBoxFragmentFragmentDoc = gql`
    fragment ComponentArticleTipsBoxFragment on ComponentArticleTipsBox {
  description
}
    `;
export const ComponentArticleTopicFragmentFragmentDoc = gql`
    fragment ComponentArticleTopicFragment on ComponentArticleTopic {
  keyVisualHorizontal {
    data {
      attributes {
        url
        width
        height
        alternativeText
      }
    }
  }
}
    `;
export const ComponentArticleVideoFragmentFragmentDoc = gql`
    fragment ComponentArticleVideoFragment on ComponentArticleVideo {
  video {
    data {
      attributes {
        url
        width
        height
        alternativeText
      }
    }
  }
  name
  ArticleVideoImage: image {
    data {
      attributes {
        url
        width
        height
        alternativeText
      }
    }
  }
}
    `;
export const ComponentArticleFaqFragmentFragmentDoc = gql`
    fragment ComponentArticleFaqFragment on ComponentArticleFaq {
  faq {
    Question
    Answer
    SubAnswer
  }
}
    `;
export const AccountDetailsFragmentFragmentDoc = gql`
    fragment AccountDetailsFragment on UsersPermissionsUserEntity {
  id
  attributes {
    username
    email
    DOBM
    DOBY
    salutation
    areaCode
    phoneNumber
    agreement
    provider
    confirmed
    blocked
    interested_areas {
      data {
        id
        attributes {
          Title
        }
      }
    }
    role {
      data {
        id
        attributes {
          name
          description
          type
        }
      }
    }
  }
}
    `;
export const ComponentArticleQuestionAnswerFragmentDoc = gql`
    fragment componentArticleQuestionAnswer on ComponentArticleQuestionAnswer {
  id
  Question
  Answer
  SubAnswer
}
    `;
export const EditorFragmentFragmentDoc = gql`
    fragment EditorFragment on EditorEntity {
  id
  attributes {
    name
    slug
    biography
    title
    avatar {
      data {
        attributes {
          url
          formats
        }
      }
    }
  }
}
    `;
export const GlobalFooterFragmentFragmentDoc = gql`
    fragment GlobalFooterFragment on Global {
  logo {
    data {
      attributes {
        url
        width
        height
        alternativeText
      }
    }
  }
  Magazine {
    magazineCover {
      data {
        attributes {
          url
          width
          height
          alternativeText
        }
      }
    }
    title
    ctaLabel
    url
    description
  }
  companyLogo {
    data {
      attributes {
        url
        width
        height
        alternativeText
      }
    }
  }
  copyright
  CustomPages {
    PageLink {
      label
      url
      target
    }
  }
  shortIntroduction
  Tags {
    tags {
      data {
        attributes {
          name
          slug
        }
      }
    }
  }
}
    `;
export const GlobalSocialNetworksFragmentFragmentDoc = gql`
    fragment GlobalSocialNetworksFragment on Global {
  socialNetworks {
    link {
      id
      label
      url
      target
    }
  }
}
    `;
export const ArticleBasicFragmentDoc = gql`
    fragment ArticleBasic on ArticleEntity {
  id
  attributes {
    ad_banner_side {
      data {
        id
      }
    }
    stockQuote
    hideKeyVisual
    seo {
      metaDescription
      metaTitle
      metaImage {
        data {
          attributes {
            url
            width
            height
            alternativeText
            formats
          }
        }
      }
      metaSocial {
        socialNetwork
        title
        description
      }
      keywords
      metaRobots
      metaViewport
    }
    categories {
      data {
        attributes {
          name
          slug
          parentCategory {
            data {
              attributes {
                slug
                name
              }
            }
          }
        }
      }
    }
    title
    publishedDate
    slug
    editorSelect
    layout
    keyVisualHorizontal {
      data {
        id
        attributes {
          alternativeText
          url
          width
          height
          formats
        }
      }
    }
    keyVisualSquare {
      data {
        id
        attributes {
          alternativeText
          url
        }
      }
    }
    Interviewee {
      name
      title
      portrait {
        data {
          id
          attributes {
            url
            alternativeText
            width
            height
            formats
          }
        }
      }
    }
    editor {
      data {
        id
        attributes {
          name
          biography
          isBlogger
          avatar {
            data {
              attributes {
                url
                width
                height
                alternativeText
                formats
              }
            }
          }
        }
      }
    }
    tags {
      data {
        id
        attributes {
          name
          slug
        }
      }
    }
    sidenote
    relatedArticles {
      data {
        id
        attributes {
          title
          publishedDate
          slug
          keyVisualHorizontal {
            data {
              attributes {
                url
                height
                width
                alternativeText
              }
            }
          }
        }
      }
    }
    otherEventArticles {
      data {
        id
        attributes {
          title
          publishedDate
          slug
          publishedAt
          keyVisualHorizontal {
            data {
              attributes {
                url
                height
                width
                alternativeText
              }
            }
          }
        }
      }
    }
  }
}
    `;
export const CategoryFragmentFragmentDoc = gql`
    fragment CategoryFragment on CategoryEntity {
  id
  attributes {
    name
    slug
    editorPicks {
      data {
        id
      }
    }
    bloggerList {
      data {
        id
        attributes {
          slug
          name
          biography
          avatar {
            data {
              attributes {
                url
                alternativeText
                width
                height
              }
            }
          }
        }
      }
    }
    pinArticle {
      data {
        id
        attributes {
          title
          slug
          content
          publishedDate
          categories {
            data {
              id
              attributes {
                name
                slug
              }
            }
          }
          keyVisualHorizontal {
            data {
              attributes {
                url
                alternativeText
                width
                height
                formats
              }
            }
          }
          keyVisualVertical {
            data {
              attributes {
                url
                alternativeText
                height
                width
              }
            }
          }
        }
      }
    }
    recommendArticles {
      data {
        id
        attributes {
          title
          slug
          publishedAt
          publishedDate
          keyVisualHorizontal {
            data {
              attributes {
                url
                height
                alternativeText
                width
                formats
              }
            }
          }
          keyVisualVertical {
            data {
              attributes {
                url
                height
                alternativeText
                width
              }
            }
          }
        }
      }
    }
    articles {
      data {
        id
        attributes {
          title
          slug
          keyVisualVertical {
            data {
              attributes {
                url
                alternativeText
                height
                width
                formats
              }
            }
          }
        }
      }
    }
    layout @include(if: $includeLayout)
    Topic {
      keyVisualHorizontal {
        data {
          attributes {
            url
            width
            height
            formats
            alternativeText
          }
        }
      }
    }
    parentCategory {
      data {
        id
        attributes {
          name
          slug
        }
      }
    }
    seo {
      metaTitle
      metaDescription
    }
  }
}
    `;
export const ComponentHomeCategoryFeatureFragmentDoc = gql`
    fragment componentHomeCategoryFeature on ComponentHomeCategoryFeature {
  id
  pinArticle {
    data {
      ... on ArticleEntity {
        ...ArticleBasic
      }
    }
  }
  category {
    data {
      ... on CategoryEntity {
        ...CategoryFragment
      }
    }
  }
  ad_banner_in_between {
    data {
      ... on AdBannerEntity {
        id
      }
    }
  }
}
    ${ArticleBasicFragmentDoc}
${CategoryFragmentFragmentDoc}`;
export const HomePageCategoryFeatureDynamicZoneFragmentFragmentDoc = gql`
    fragment homePageCategoryFeatureDynamicZoneFragment on HomePageCategoryFeatureDynamicZone {
  ... on ComponentHomeCategoryFeature {
    ...componentHomeCategoryFeature
  }
}
    ${ComponentHomeCategoryFeatureFragmentDoc}`;
export const ComponentHomeBannerArticleFragmentFragmentDoc = gql`
    fragment ComponentHomeBannerArticleFragment on ComponentHomeBannerArticle {
  id
  article {
    data {
      attributes {
        title
        slug
        tags(pagination: {limit: 1}) {
          data {
            id
            attributes {
              name
              seo {
                id
                metaDescription
              }
            }
          }
        }
        categories {
          data {
            id
            attributes {
              parentCategory {
                data {
                  attributes {
                    slug
                    name
                  }
                }
              }
              name
              slug
            }
          }
        }
        keyVisualHorizontal {
          data {
            id
            attributes {
              url
              width
              height
              alternativeText
              formats
            }
          }
        }
      }
    }
  }
}
    `;
export const ComponentHomeBannerImageFragmentFragmentDoc = gql`
    fragment ComponentHomeBannerImageFragment on ComponentHomeBannerImage {
  id
  image {
    data {
      attributes {
        url
        width
        height
        alternativeText
        formats
      }
    }
  }
  url
  target
  ImageText: text
}
    `;
export const ComponentHomeBannerVideoMp4FragmentFragmentDoc = gql`
    fragment ComponentHomeBannerVideoMp4Fragment on ComponentHomeBannerVideoMp4 {
  id
  video {
    data {
      id
      attributes {
        url
        name
        alternativeText
      }
    }
  }
  media {
    data {
      id
      attributes {
        url
        name
        width
        height
        alternativeText
        formats
      }
    }
  }
  videoPoster {
    data {
      id
      attributes {
        url
        width
        height
        alternativeText
        formats
      }
    }
  }
  videoText: text
}
    `;
export const ComponentHomeBannerVideoUrlFragmentFragmentDoc = gql`
    fragment ComponentHomeBannerVideoUrlFragment on ComponentHomeBannerVideoUrl {
  id
  url
  videoURLText: text
  media {
    data {
      id
      attributes {
        name
        url
        width
        height
        alternativeText
        formats
      }
    }
  }
}
    `;
export const HomeTopicSectionExtraCategoryImageFragmentDoc = gql`
    fragment HomeTopicSectionExtraCategoryImage on CategoryEntity {
  attributes {
    Topic {
      keyVisualHorizontal {
        data {
          attributes {
            url
            alternativeText
            formats
          }
        }
      }
    }
  }
}
    `;
export const ComponentArticleImageWithContentFragmentFragmentDoc = gql`
    fragment ComponentArticleImageWithContentFragment on ComponentArticleImageWithContent {
  id
  showAtRightColumn
  content
  image {
    data {
      attributes {
        url
        width
        height
        alternativeText
      }
    }
  }
}
    `;
export const LoginDocument = gql`
    mutation login($input: UsersPermissionsLoginInput!) {
  login(input: $input) {
    jwt
    user {
      id
      username
      email
      confirmed
      blocked
      role {
        id
        name
        description
        type
      }
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation register($input: UsersPermissionsRegisterInput!) {
  register(input: $input) {
    jwt
    user {
      salutation
      id
      username
      email
      areaCode
      phoneNumber
      DOBM
      DOBY
      confirmed
      interested_areas {
        data {
          id
          attributes {
            Title
          }
        }
      }
      blocked
      role {
        id
        name
        description
        type
      }
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const SubscribeNewsDocument = gql`
    mutation subscribeNews($id: ID!) {
  subscribeNewsletter(id: $id) {
    data {
      id
      email
      createdAt
      updatedAt
    }
  }
}
    `;
export type SubscribeNewsMutationFn = Apollo.MutationFunction<SubscribeNewsMutation, SubscribeNewsMutationVariables>;

/**
 * __useSubscribeNewsMutation__
 *
 * To run a mutation, you first call `useSubscribeNewsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubscribeNewsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [subscribeNewsMutation, { data, loading, error }] = useSubscribeNewsMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSubscribeNewsMutation(baseOptions?: Apollo.MutationHookOptions<SubscribeNewsMutation, SubscribeNewsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubscribeNewsMutation, SubscribeNewsMutationVariables>(SubscribeNewsDocument, options);
      }
export type SubscribeNewsMutationHookResult = ReturnType<typeof useSubscribeNewsMutation>;
export type SubscribeNewsMutationResult = Apollo.MutationResult<SubscribeNewsMutation>;
export type SubscribeNewsMutationOptions = Apollo.BaseMutationOptions<SubscribeNewsMutation, SubscribeNewsMutationVariables>;
export const UnsubscribeNewsDocument = gql`
    mutation unsubscribeNews($id: ID!) {
  unsubscribeNewsletter(id: $id) {
    data {
      id
      email
      createdAt
      updatedAt
    }
  }
}
    `;
export type UnsubscribeNewsMutationFn = Apollo.MutationFunction<UnsubscribeNewsMutation, UnsubscribeNewsMutationVariables>;

/**
 * __useUnsubscribeNewsMutation__
 *
 * To run a mutation, you first call `useUnsubscribeNewsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnsubscribeNewsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unsubscribeNewsMutation, { data, loading, error }] = useUnsubscribeNewsMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUnsubscribeNewsMutation(baseOptions?: Apollo.MutationHookOptions<UnsubscribeNewsMutation, UnsubscribeNewsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnsubscribeNewsMutation, UnsubscribeNewsMutationVariables>(UnsubscribeNewsDocument, options);
      }
export type UnsubscribeNewsMutationHookResult = ReturnType<typeof useUnsubscribeNewsMutation>;
export type UnsubscribeNewsMutationResult = Apollo.MutationResult<UnsubscribeNewsMutation>;
export type UnsubscribeNewsMutationOptions = Apollo.BaseMutationOptions<UnsubscribeNewsMutation, UnsubscribeNewsMutationVariables>;
export const UpdateUsersPermissionsUserDocument = gql`
    mutation updateUsersPermissionsUser($id: ID!, $data: UsersPermissionsUserInput!) {
  updateUsersPermissionsUser(id: $id, data: $data) {
    data {
      ...AccountDetailsFragment
    }
  }
}
    ${AccountDetailsFragmentFragmentDoc}`;
export type UpdateUsersPermissionsUserMutationFn = Apollo.MutationFunction<UpdateUsersPermissionsUserMutation, UpdateUsersPermissionsUserMutationVariables>;

/**
 * __useUpdateUsersPermissionsUserMutation__
 *
 * To run a mutation, you first call `useUpdateUsersPermissionsUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUsersPermissionsUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUsersPermissionsUserMutation, { data, loading, error }] = useUpdateUsersPermissionsUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateUsersPermissionsUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUsersPermissionsUserMutation, UpdateUsersPermissionsUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUsersPermissionsUserMutation, UpdateUsersPermissionsUserMutationVariables>(UpdateUsersPermissionsUserDocument, options);
      }
export type UpdateUsersPermissionsUserMutationHookResult = ReturnType<typeof useUpdateUsersPermissionsUserMutation>;
export type UpdateUsersPermissionsUserMutationResult = Apollo.MutationResult<UpdateUsersPermissionsUserMutation>;
export type UpdateUsersPermissionsUserMutationOptions = Apollo.BaseMutationOptions<UpdateUsersPermissionsUserMutation, UpdateUsersPermissionsUserMutationVariables>;
export const AdsDocument = gql`
    query ads($id: ID!) {
  adBanner(id: $id) {
    data {
      attributes {
        ad_unit_path
        size_mapping
        name
      }
    }
  }
}
    `;

/**
 * __useAdsQuery__
 *
 * To run a query within a React component, call `useAdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAdsQuery(baseOptions: Apollo.QueryHookOptions<AdsQuery, AdsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdsQuery, AdsQueryVariables>(AdsDocument, options);
      }
export function useAdsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdsQuery, AdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdsQuery, AdsQueryVariables>(AdsDocument, options);
        }
export function useAdsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AdsQuery, AdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AdsQuery, AdsQueryVariables>(AdsDocument, options);
        }
export type AdsQueryHookResult = ReturnType<typeof useAdsQuery>;
export type AdsLazyQueryHookResult = ReturnType<typeof useAdsLazyQuery>;
export type AdsSuspenseQueryHookResult = ReturnType<typeof useAdsSuspenseQuery>;
export type AdsQueryResult = Apollo.QueryResult<AdsQuery, AdsQueryVariables>;
export const ArticleAdsDocument = gql`
    query articleAds($id: ID!) {
  article(id: $id) {
    data {
      attributes {
        ad_banner_side {
          data {
            attributes {
              ad_unit_path
              size_mapping
              name
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useArticleAdsQuery__
 *
 * To run a query within a React component, call `useArticleAdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticleAdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticleAdsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useArticleAdsQuery(baseOptions: Apollo.QueryHookOptions<ArticleAdsQuery, ArticleAdsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ArticleAdsQuery, ArticleAdsQueryVariables>(ArticleAdsDocument, options);
      }
export function useArticleAdsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticleAdsQuery, ArticleAdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ArticleAdsQuery, ArticleAdsQueryVariables>(ArticleAdsDocument, options);
        }
export function useArticleAdsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ArticleAdsQuery, ArticleAdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ArticleAdsQuery, ArticleAdsQueryVariables>(ArticleAdsDocument, options);
        }
export type ArticleAdsQueryHookResult = ReturnType<typeof useArticleAdsQuery>;
export type ArticleAdsLazyQueryHookResult = ReturnType<typeof useArticleAdsLazyQuery>;
export type ArticleAdsSuspenseQueryHookResult = ReturnType<typeof useArticleAdsSuspenseQuery>;
export type ArticleAdsQueryResult = Apollo.QueryResult<ArticleAdsQuery, ArticleAdsQueryVariables>;
export const ArticleListItemDocument = gql`
    query articleListItem($filters: ArticleFiltersInput, $pagination: PaginationArg = {}, $sort: [String] = [], $publicationState: PublicationState = LIVE) {
  articles(
    filters: $filters
    sort: $sort
    publicationState: $publicationState
    pagination: $pagination
  ) {
    data {
      ...ArticleList
    }
    meta {
      pagination {
        total
      }
    }
  }
}
    ${ArticleListFragmentDoc}`;

/**
 * __useArticleListItemQuery__
 *
 * To run a query within a React component, call `useArticleListItemQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticleListItemQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticleListItemQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *      publicationState: // value for 'publicationState'
 *   },
 * });
 */
export function useArticleListItemQuery(baseOptions?: Apollo.QueryHookOptions<ArticleListItemQuery, ArticleListItemQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ArticleListItemQuery, ArticleListItemQueryVariables>(ArticleListItemDocument, options);
      }
export function useArticleListItemLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticleListItemQuery, ArticleListItemQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ArticleListItemQuery, ArticleListItemQueryVariables>(ArticleListItemDocument, options);
        }
export function useArticleListItemSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ArticleListItemQuery, ArticleListItemQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ArticleListItemQuery, ArticleListItemQueryVariables>(ArticleListItemDocument, options);
        }
export type ArticleListItemQueryHookResult = ReturnType<typeof useArticleListItemQuery>;
export type ArticleListItemLazyQueryHookResult = ReturnType<typeof useArticleListItemLazyQuery>;
export type ArticleListItemSuspenseQueryHookResult = ReturnType<typeof useArticleListItemSuspenseQuery>;
export type ArticleListItemQueryResult = Apollo.QueryResult<ArticleListItemQuery, ArticleListItemQueryVariables>;
export const ArticleListSimpleDocument = gql`
    query articleListSimple($filters: ArticleFiltersInput, $pagination: PaginationArg = {}, $sort: [String] = [], $publicationState: PublicationState = LIVE) {
  articles(
    filters: $filters
    sort: $sort
    publicationState: $publicationState
    pagination: $pagination
  ) {
    data {
      ...ArticleBasic
    }
    meta {
      pagination {
        total
      }
    }
  }
}
    ${ArticleBasicFragmentDoc}`;

/**
 * __useArticleListSimpleQuery__
 *
 * To run a query within a React component, call `useArticleListSimpleQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticleListSimpleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticleListSimpleQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *      publicationState: // value for 'publicationState'
 *   },
 * });
 */
export function useArticleListSimpleQuery(baseOptions?: Apollo.QueryHookOptions<ArticleListSimpleQuery, ArticleListSimpleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ArticleListSimpleQuery, ArticleListSimpleQueryVariables>(ArticleListSimpleDocument, options);
      }
export function useArticleListSimpleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticleListSimpleQuery, ArticleListSimpleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ArticleListSimpleQuery, ArticleListSimpleQueryVariables>(ArticleListSimpleDocument, options);
        }
export function useArticleListSimpleSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ArticleListSimpleQuery, ArticleListSimpleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ArticleListSimpleQuery, ArticleListSimpleQueryVariables>(ArticleListSimpleDocument, options);
        }
export type ArticleListSimpleQueryHookResult = ReturnType<typeof useArticleListSimpleQuery>;
export type ArticleListSimpleLazyQueryHookResult = ReturnType<typeof useArticleListSimpleLazyQuery>;
export type ArticleListSimpleSuspenseQueryHookResult = ReturnType<typeof useArticleListSimpleSuspenseQuery>;
export type ArticleListSimpleQueryResult = Apollo.QueryResult<ArticleListSimpleQuery, ArticleListSimpleQueryVariables>;
export const ArticleListWithContentDocument = gql`
    query articleListWithContent($filters: ArticleFiltersInput, $pagination: PaginationArg = {}, $sort: [String] = [], $publicationState: PublicationState = LIVE) {
  articles(
    filters: $filters
    sort: $sort
    publicationState: $publicationState
    pagination: $pagination
  ) {
    data {
      ...ArticleBasic
      attributes {
        content
        blocks {
          ... on ComponentArticleEmbedInstagram {
            ...ComponentArticleEmbedInstagramFragment
          }
          ... on ComponentArticleEmbedVideo {
            ...ComponentArticleEmbedVideoFragment
          }
          ... on ComponentArticleImage {
            ...ComponentArticleImageFragment
          }
          ... on ComponentArticleImageCarousel {
            ...ComponentArticleImageCarouselFragment
          }
          ... on ComponentArticleImageGallery {
            ...ComponentArticleImageGalleryFragment
          }
          ... on ComponentArticleInfoBox {
            ...ComponentArticleInfoBoxFragment
          }
          ... on ComponentArticleListicleTitle {
            ...ComponentArticleListicleTitleFragment
          }
          ... on ComponentArticlePictureWithTag {
            ...ComponentArticlePictureWithTagFragment
          }
          ... on ComponentArticlePrizeList {
            ...ComponentArticlePrizeListFragment
          }
          ... on ComponentArticleProductRate {
            ...ComponentArticleProductRateFragment
          }
          ... on ComponentArticleProductReview {
            ...ComponentArticleProductReviewFragment
          }
          ... on ComponentArticleQuestionAnswer {
            ...ComponentArticleQuestionAnswerFragment
          }
          ... on ComponentArticleQuestionAnswer2Columns {
            ...ComponentArticleQuestionAnswer2ColumnsFragment
          }
          ... on ComponentArticleRichText {
            ...ComponentArticleRichTextFragment
          }
          ... on ComponentArticleTipsBox {
            ...ComponentArticleTipsBoxFragment
          }
          ... on ComponentArticleVideo {
            ...ComponentArticleVideoFragment
          }
          ... on ComponentArticleFaq {
            ...ComponentArticleFaqFragment
          }
          ... on ComponentArticleProductList {
            ...ComponentArticleProductListFragment
          }
        }
      }
    }
  }
}
    ${ArticleBasicFragmentDoc}
${ComponentArticleEmbedInstagramFragmentFragmentDoc}
${ComponentArticleEmbedVideoFragmentFragmentDoc}
${ComponentArticleImageFragmentFragmentDoc}
${ComponentArticleImageCarouselFragmentFragmentDoc}
${ComponentArticleImageGalleryFragmentFragmentDoc}
${ComponentArticleInfoBoxFragmentFragmentDoc}
${ComponentArticleListicleTitleFragmentFragmentDoc}
${ComponentArticlePictureWithTagFragmentFragmentDoc}
${ComponentArticlePrizeListFragmentFragmentDoc}
${ComponentArticleProductRateFragmentFragmentDoc}
${ComponentArticleProductReviewFragmentFragmentDoc}
${ComponentArticleQuestionAnswerFragmentFragmentDoc}
${ComponentArticleQuestionAnswer2ColumnsFragmentFragmentDoc}
${ComponentArticleRichTextFragmentFragmentDoc}
${ComponentArticleTipsBoxFragmentFragmentDoc}
${ComponentArticleVideoFragmentFragmentDoc}
${ComponentArticleFaqFragmentFragmentDoc}
${ComponentArticleProductListFragmentFragmentDoc}`;

/**
 * __useArticleListWithContentQuery__
 *
 * To run a query within a React component, call `useArticleListWithContentQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticleListWithContentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticleListWithContentQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *      publicationState: // value for 'publicationState'
 *   },
 * });
 */
export function useArticleListWithContentQuery(baseOptions?: Apollo.QueryHookOptions<ArticleListWithContentQuery, ArticleListWithContentQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ArticleListWithContentQuery, ArticleListWithContentQueryVariables>(ArticleListWithContentDocument, options);
      }
export function useArticleListWithContentLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticleListWithContentQuery, ArticleListWithContentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ArticleListWithContentQuery, ArticleListWithContentQueryVariables>(ArticleListWithContentDocument, options);
        }
export function useArticleListWithContentSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ArticleListWithContentQuery, ArticleListWithContentQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ArticleListWithContentQuery, ArticleListWithContentQueryVariables>(ArticleListWithContentDocument, options);
        }
export type ArticleListWithContentQueryHookResult = ReturnType<typeof useArticleListWithContentQuery>;
export type ArticleListWithContentLazyQueryHookResult = ReturnType<typeof useArticleListWithContentLazyQuery>;
export type ArticleListWithContentSuspenseQueryHookResult = ReturnType<typeof useArticleListWithContentSuspenseQuery>;
export type ArticleListWithContentQueryResult = Apollo.QueryResult<ArticleListWithContentQuery, ArticleListWithContentQueryVariables>;
export const RelatedArticleListDocument = gql`
    query relatedArticleList {
  relatedArticle {
    data {
      id
      attributes {
        slot
        maxNoTag
        createdAt
        updatedAt
      }
    }
  }
}
    `;

/**
 * __useRelatedArticleListQuery__
 *
 * To run a query within a React component, call `useRelatedArticleListQuery` and pass it any options that fit your needs.
 * When your component renders, `useRelatedArticleListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRelatedArticleListQuery({
 *   variables: {
 *   },
 * });
 */
export function useRelatedArticleListQuery(baseOptions?: Apollo.QueryHookOptions<RelatedArticleListQuery, RelatedArticleListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RelatedArticleListQuery, RelatedArticleListQueryVariables>(RelatedArticleListDocument, options);
      }
export function useRelatedArticleListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RelatedArticleListQuery, RelatedArticleListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RelatedArticleListQuery, RelatedArticleListQueryVariables>(RelatedArticleListDocument, options);
        }
export function useRelatedArticleListSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<RelatedArticleListQuery, RelatedArticleListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<RelatedArticleListQuery, RelatedArticleListQueryVariables>(RelatedArticleListDocument, options);
        }
export type RelatedArticleListQueryHookResult = ReturnType<typeof useRelatedArticleListQuery>;
export type RelatedArticleListLazyQueryHookResult = ReturnType<typeof useRelatedArticleListLazyQuery>;
export type RelatedArticleListSuspenseQueryHookResult = ReturnType<typeof useRelatedArticleListSuspenseQuery>;
export type RelatedArticleListQueryResult = Apollo.QueryResult<RelatedArticleListQuery, RelatedArticleListQueryVariables>;
export const AccountDetailsDocument = gql`
    query accountDetails($id: ID) {
  usersPermissionsUser(id: $id) {
    data {
      ...AccountDetailsFragment
    }
  }
}
    ${AccountDetailsFragmentFragmentDoc}`;

/**
 * __useAccountDetailsQuery__
 *
 * To run a query within a React component, call `useAccountDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAccountDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAccountDetailsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAccountDetailsQuery(baseOptions?: Apollo.QueryHookOptions<AccountDetailsQuery, AccountDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AccountDetailsQuery, AccountDetailsQueryVariables>(AccountDetailsDocument, options);
      }
export function useAccountDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AccountDetailsQuery, AccountDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AccountDetailsQuery, AccountDetailsQueryVariables>(AccountDetailsDocument, options);
        }
export function useAccountDetailsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AccountDetailsQuery, AccountDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AccountDetailsQuery, AccountDetailsQueryVariables>(AccountDetailsDocument, options);
        }
export type AccountDetailsQueryHookResult = ReturnType<typeof useAccountDetailsQuery>;
export type AccountDetailsLazyQueryHookResult = ReturnType<typeof useAccountDetailsLazyQuery>;
export type AccountDetailsSuspenseQueryHookResult = ReturnType<typeof useAccountDetailsSuspenseQuery>;
export type AccountDetailsQueryResult = Apollo.QueryResult<AccountDetailsQuery, AccountDetailsQueryVariables>;
export const UsersPermissionsUserDocument = gql`
    query usersPermissionsUser($id: ID, $pagination: PaginationArg = {}, $publicationState: PublicationState = LIVE) {
  usersPermissionsUser(id: $id) {
    data {
      id
      attributes {
        articles(publicationState: $publicationState, pagination: $pagination) {
          data {
            ...ArticleBasic
          }
        }
        information_boxes(publicationState: $publicationState, pagination: $pagination) {
          data {
            ...InformationBoxesBasic
          }
        }
        editors(publicationState: $publicationState, pagination: $pagination) {
          data {
            ...EditorFragment
          }
        }
      }
    }
  }
}
    ${ArticleBasicFragmentDoc}
${InformationBoxesBasicFragmentDoc}
${EditorFragmentFragmentDoc}`;

/**
 * __useUsersPermissionsUserQuery__
 *
 * To run a query within a React component, call `useUsersPermissionsUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersPermissionsUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersPermissionsUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *      pagination: // value for 'pagination'
 *      publicationState: // value for 'publicationState'
 *   },
 * });
 */
export function useUsersPermissionsUserQuery(baseOptions?: Apollo.QueryHookOptions<UsersPermissionsUserQuery, UsersPermissionsUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersPermissionsUserQuery, UsersPermissionsUserQueryVariables>(UsersPermissionsUserDocument, options);
      }
export function useUsersPermissionsUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersPermissionsUserQuery, UsersPermissionsUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersPermissionsUserQuery, UsersPermissionsUserQueryVariables>(UsersPermissionsUserDocument, options);
        }
export function useUsersPermissionsUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<UsersPermissionsUserQuery, UsersPermissionsUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UsersPermissionsUserQuery, UsersPermissionsUserQueryVariables>(UsersPermissionsUserDocument, options);
        }
export type UsersPermissionsUserQueryHookResult = ReturnType<typeof useUsersPermissionsUserQuery>;
export type UsersPermissionsUserLazyQueryHookResult = ReturnType<typeof useUsersPermissionsUserLazyQuery>;
export type UsersPermissionsUserSuspenseQueryHookResult = ReturnType<typeof useUsersPermissionsUserSuspenseQuery>;
export type UsersPermissionsUserQueryResult = Apollo.QueryResult<UsersPermissionsUserQuery, UsersPermissionsUserQueryVariables>;
export const AllCategoryIdsDocument = gql`
    query allCategoryIds($filters: CategoryFiltersInput, $pagination: PaginationArg = {limit: -1}, $sort: [String] = [], $publicationState: PublicationState = LIVE) {
  categories(
    filters: $filters
    pagination: $pagination
    sort: $sort
    publicationState: $publicationState
  ) {
    data {
      id
    }
  }
}
    `;

/**
 * __useAllCategoryIdsQuery__
 *
 * To run a query within a React component, call `useAllCategoryIdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllCategoryIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllCategoryIdsQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *      publicationState: // value for 'publicationState'
 *   },
 * });
 */
export function useAllCategoryIdsQuery(baseOptions?: Apollo.QueryHookOptions<AllCategoryIdsQuery, AllCategoryIdsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllCategoryIdsQuery, AllCategoryIdsQueryVariables>(AllCategoryIdsDocument, options);
      }
export function useAllCategoryIdsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllCategoryIdsQuery, AllCategoryIdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllCategoryIdsQuery, AllCategoryIdsQueryVariables>(AllCategoryIdsDocument, options);
        }
export function useAllCategoryIdsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AllCategoryIdsQuery, AllCategoryIdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AllCategoryIdsQuery, AllCategoryIdsQueryVariables>(AllCategoryIdsDocument, options);
        }
export type AllCategoryIdsQueryHookResult = ReturnType<typeof useAllCategoryIdsQuery>;
export type AllCategoryIdsLazyQueryHookResult = ReturnType<typeof useAllCategoryIdsLazyQuery>;
export type AllCategoryIdsSuspenseQueryHookResult = ReturnType<typeof useAllCategoryIdsSuspenseQuery>;
export type AllCategoryIdsQueryResult = Apollo.QueryResult<AllCategoryIdsQuery, AllCategoryIdsQueryVariables>;
export const CategoriesDocument = gql`
    query categories($filters: CategoryFiltersInput, $pagination: PaginationArg = {}, $sort: [String] = [], $publicationState: PublicationState = LIVE, $includeLayout: Boolean = false) {
  categories(
    filters: $filters
    pagination: $pagination
    sort: $sort
    publicationState: $publicationState
  ) {
    data {
      ...CategoryFragment
    }
  }
}
    ${CategoryFragmentFragmentDoc}`;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *      publicationState: // value for 'publicationState'
 *      includeLayout: // value for 'includeLayout'
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
      }
export function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export function useCategoriesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesSuspenseQueryHookResult = ReturnType<typeof useCategoriesSuspenseQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const CategoryDocument = gql`
    query category($id: ID, $includeLayout: Boolean = true) {
  category(id: $id) {
    data {
      ...CategoryFragment
    }
  }
}
    ${CategoryFragmentFragmentDoc}`;

/**
 * __useCategoryQuery__
 *
 * To run a query within a React component, call `useCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryQuery({
 *   variables: {
 *      id: // value for 'id'
 *      includeLayout: // value for 'includeLayout'
 *   },
 * });
 */
export function useCategoryQuery(baseOptions?: Apollo.QueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, options);
      }
export function useCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, options);
        }
export function useCategorySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CategoryQuery, CategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CategoryQuery, CategoryQueryVariables>(CategoryDocument, options);
        }
export type CategoryQueryHookResult = ReturnType<typeof useCategoryQuery>;
export type CategoryLazyQueryHookResult = ReturnType<typeof useCategoryLazyQuery>;
export type CategorySuspenseQueryHookResult = ReturnType<typeof useCategorySuspenseQuery>;
export type CategoryQueryResult = Apollo.QueryResult<CategoryQuery, CategoryQueryVariables>;
export const CategoryAdsDocument = gql`
    query categoryAds($id: ID) {
  category(id: $id) {
    data {
      attributes {
        ad_banner_in_between {
          data {
            id
            attributes {
              ad_unit_path
              size_mapping
              name
            }
          }
        }
        ad_banner_side {
          data {
            id
            attributes {
              ad_unit_path
              size_mapping
              name
            }
          }
        }
        parentCategory {
          data {
            attributes {
              ad_banner_in_between {
                data {
                  attributes {
                    ad_unit_path
                    size_mapping
                    name
                  }
                }
              }
              ad_banner_side {
                data {
                  attributes {
                    ad_unit_path
                    size_mapping
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useCategoryAdsQuery__
 *
 * To run a query within a React component, call `useCategoryAdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryAdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryAdsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCategoryAdsQuery(baseOptions?: Apollo.QueryHookOptions<CategoryAdsQuery, CategoryAdsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoryAdsQuery, CategoryAdsQueryVariables>(CategoryAdsDocument, options);
      }
export function useCategoryAdsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoryAdsQuery, CategoryAdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoryAdsQuery, CategoryAdsQueryVariables>(CategoryAdsDocument, options);
        }
export function useCategoryAdsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CategoryAdsQuery, CategoryAdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CategoryAdsQuery, CategoryAdsQueryVariables>(CategoryAdsDocument, options);
        }
export type CategoryAdsQueryHookResult = ReturnType<typeof useCategoryAdsQuery>;
export type CategoryAdsLazyQueryHookResult = ReturnType<typeof useCategoryAdsLazyQuery>;
export type CategoryAdsSuspenseQueryHookResult = ReturnType<typeof useCategoryAdsSuspenseQuery>;
export type CategoryAdsQueryResult = Apollo.QueryResult<CategoryAdsQuery, CategoryAdsQueryVariables>;
export const CategoryAdsBySlugDocument = gql`
    query categoryAdsBySlug($filters: CategoryFiltersInput, $pagination: PaginationArg = {}, $sort: [String] = []) {
  categories(filters: $filters, pagination: $pagination, sort: $sort) {
    data {
      attributes {
        ad_banner_side {
          data {
            id
          }
        }
      }
    }
  }
}
    `;

/**
 * __useCategoryAdsBySlugQuery__
 *
 * To run a query within a React component, call `useCategoryAdsBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryAdsBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryAdsBySlugQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useCategoryAdsBySlugQuery(baseOptions?: Apollo.QueryHookOptions<CategoryAdsBySlugQuery, CategoryAdsBySlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoryAdsBySlugQuery, CategoryAdsBySlugQueryVariables>(CategoryAdsBySlugDocument, options);
      }
export function useCategoryAdsBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoryAdsBySlugQuery, CategoryAdsBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoryAdsBySlugQuery, CategoryAdsBySlugQueryVariables>(CategoryAdsBySlugDocument, options);
        }
export function useCategoryAdsBySlugSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CategoryAdsBySlugQuery, CategoryAdsBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CategoryAdsBySlugQuery, CategoryAdsBySlugQueryVariables>(CategoryAdsBySlugDocument, options);
        }
export type CategoryAdsBySlugQueryHookResult = ReturnType<typeof useCategoryAdsBySlugQuery>;
export type CategoryAdsBySlugLazyQueryHookResult = ReturnType<typeof useCategoryAdsBySlugLazyQuery>;
export type CategoryAdsBySlugSuspenseQueryHookResult = ReturnType<typeof useCategoryAdsBySlugSuspenseQuery>;
export type CategoryAdsBySlugQueryResult = Apollo.QueryResult<CategoryAdsBySlugQuery, CategoryAdsBySlugQueryVariables>;
export const CategoryEditorPickDocument = gql`
    query categoryEditorPick($filters: CategoryFiltersInput, $pagination: PaginationArg = {}, $sort: [String] = []) {
  categories(filters: $filters, pagination: $pagination, sort: $sort) {
    data {
      attributes {
        editorPicks {
          data {
            ...ArticleBasic
          }
        }
      }
    }
  }
}
    ${ArticleBasicFragmentDoc}`;

/**
 * __useCategoryEditorPickQuery__
 *
 * To run a query within a React component, call `useCategoryEditorPickQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryEditorPickQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryEditorPickQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useCategoryEditorPickQuery(baseOptions?: Apollo.QueryHookOptions<CategoryEditorPickQuery, CategoryEditorPickQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoryEditorPickQuery, CategoryEditorPickQueryVariables>(CategoryEditorPickDocument, options);
      }
export function useCategoryEditorPickLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoryEditorPickQuery, CategoryEditorPickQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoryEditorPickQuery, CategoryEditorPickQueryVariables>(CategoryEditorPickDocument, options);
        }
export function useCategoryEditorPickSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CategoryEditorPickQuery, CategoryEditorPickQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CategoryEditorPickQuery, CategoryEditorPickQueryVariables>(CategoryEditorPickDocument, options);
        }
export type CategoryEditorPickQueryHookResult = ReturnType<typeof useCategoryEditorPickQuery>;
export type CategoryEditorPickLazyQueryHookResult = ReturnType<typeof useCategoryEditorPickLazyQuery>;
export type CategoryEditorPickSuspenseQueryHookResult = ReturnType<typeof useCategoryEditorPickSuspenseQuery>;
export type CategoryEditorPickQueryResult = Apollo.QueryResult<CategoryEditorPickQuery, CategoryEditorPickQueryVariables>;
export const CategoryPinArticleDocument = gql`
    query categoryPinArticle($id: ID) {
  category(id: $id) {
    data {
      attributes {
        pinArticle {
          data {
            id
          }
        }
      }
    }
  }
}
    `;

/**
 * __useCategoryPinArticleQuery__
 *
 * To run a query within a React component, call `useCategoryPinArticleQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryPinArticleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryPinArticleQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCategoryPinArticleQuery(baseOptions?: Apollo.QueryHookOptions<CategoryPinArticleQuery, CategoryPinArticleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoryPinArticleQuery, CategoryPinArticleQueryVariables>(CategoryPinArticleDocument, options);
      }
export function useCategoryPinArticleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoryPinArticleQuery, CategoryPinArticleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoryPinArticleQuery, CategoryPinArticleQueryVariables>(CategoryPinArticleDocument, options);
        }
export function useCategoryPinArticleSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CategoryPinArticleQuery, CategoryPinArticleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CategoryPinArticleQuery, CategoryPinArticleQueryVariables>(CategoryPinArticleDocument, options);
        }
export type CategoryPinArticleQueryHookResult = ReturnType<typeof useCategoryPinArticleQuery>;
export type CategoryPinArticleLazyQueryHookResult = ReturnType<typeof useCategoryPinArticleLazyQuery>;
export type CategoryPinArticleSuspenseQueryHookResult = ReturnType<typeof useCategoryPinArticleSuspenseQuery>;
export type CategoryPinArticleQueryResult = Apollo.QueryResult<CategoryPinArticleQuery, CategoryPinArticleQueryVariables>;
export const EditorListingDocument = gql`
    query editorListing {
  editorListing {
    data {
      id
      attributes {
        editors {
          data {
            id
            attributes {
              name
              title
              biography
              slug
              avatar {
                data {
                  attributes {
                    url
                    width
                    height
                    alternativeText
                    formats
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useEditorListingQuery__
 *
 * To run a query within a React component, call `useEditorListingQuery` and pass it any options that fit your needs.
 * When your component renders, `useEditorListingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEditorListingQuery({
 *   variables: {
 *   },
 * });
 */
export function useEditorListingQuery(baseOptions?: Apollo.QueryHookOptions<EditorListingQuery, EditorListingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EditorListingQuery, EditorListingQueryVariables>(EditorListingDocument, options);
      }
export function useEditorListingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EditorListingQuery, EditorListingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EditorListingQuery, EditorListingQueryVariables>(EditorListingDocument, options);
        }
export function useEditorListingSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<EditorListingQuery, EditorListingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<EditorListingQuery, EditorListingQueryVariables>(EditorListingDocument, options);
        }
export type EditorListingQueryHookResult = ReturnType<typeof useEditorListingQuery>;
export type EditorListingLazyQueryHookResult = ReturnType<typeof useEditorListingLazyQuery>;
export type EditorListingSuspenseQueryHookResult = ReturnType<typeof useEditorListingSuspenseQuery>;
export type EditorListingQueryResult = Apollo.QueryResult<EditorListingQuery, EditorListingQueryVariables>;
export const EditorsDocument = gql`
    query editors($filters: EditorFiltersInput, $pagination: PaginationArg = {}, $sort: [String] = [], $publicationState: PublicationState = LIVE) {
  editors(
    filters: $filters
    pagination: $pagination
    sort: $sort
    publicationState: $publicationState
  ) {
    data {
      ...EditorFragment
    }
  }
}
    ${EditorFragmentFragmentDoc}`;

/**
 * __useEditorsQuery__
 *
 * To run a query within a React component, call `useEditorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useEditorsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEditorsQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *      publicationState: // value for 'publicationState'
 *   },
 * });
 */
export function useEditorsQuery(baseOptions?: Apollo.QueryHookOptions<EditorsQuery, EditorsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EditorsQuery, EditorsQueryVariables>(EditorsDocument, options);
      }
export function useEditorsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EditorsQuery, EditorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EditorsQuery, EditorsQueryVariables>(EditorsDocument, options);
        }
export function useEditorsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<EditorsQuery, EditorsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<EditorsQuery, EditorsQueryVariables>(EditorsDocument, options);
        }
export type EditorsQueryHookResult = ReturnType<typeof useEditorsQuery>;
export type EditorsLazyQueryHookResult = ReturnType<typeof useEditorsLazyQuery>;
export type EditorsSuspenseQueryHookResult = ReturnType<typeof useEditorsSuspenseQuery>;
export type EditorsQueryResult = Apollo.QueryResult<EditorsQuery, EditorsQueryVariables>;
export const GlobalDocument = gql`
    query global {
  global {
    data {
      id
      attributes {
        ... on Global {
          ...GlobalFooterFragment
        }
        ... on Global {
          ...GlobalSocialNetworksFragment
        }
      }
    }
  }
}
    ${GlobalFooterFragmentFragmentDoc}
${GlobalSocialNetworksFragmentFragmentDoc}`;

/**
 * __useGlobalQuery__
 *
 * To run a query within a React component, call `useGlobalQuery` and pass it any options that fit your needs.
 * When your component renders, `useGlobalQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGlobalQuery({
 *   variables: {
 *   },
 * });
 */
export function useGlobalQuery(baseOptions?: Apollo.QueryHookOptions<GlobalQuery, GlobalQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GlobalQuery, GlobalQueryVariables>(GlobalDocument, options);
      }
export function useGlobalLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GlobalQuery, GlobalQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GlobalQuery, GlobalQueryVariables>(GlobalDocument, options);
        }
export function useGlobalSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GlobalQuery, GlobalQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GlobalQuery, GlobalQueryVariables>(GlobalDocument, options);
        }
export type GlobalQueryHookResult = ReturnType<typeof useGlobalQuery>;
export type GlobalLazyQueryHookResult = ReturnType<typeof useGlobalLazyQuery>;
export type GlobalSuspenseQueryHookResult = ReturnType<typeof useGlobalSuspenseQuery>;
export type GlobalQueryResult = Apollo.QueryResult<GlobalQuery, GlobalQueryVariables>;
export const BossDiaryDocument = gql`
    query bossDiary {
  bossDiary {
    data {
      id
      attributes {
        name
        description
        url
        portrait {
          data {
            id
            attributes {
              url
            }
          }
        }
      }
    }
  }
  articles(
    filters: {categories: {name: {eq: "吳老闆筆記"}}}
    pagination: {limit: 1}
    sort: ["publishedDate:desc"]
  ) {
    data {
      ...ArticleBasic
    }
  }
}
    ${ArticleBasicFragmentDoc}`;

/**
 * __useBossDiaryQuery__
 *
 * To run a query within a React component, call `useBossDiaryQuery` and pass it any options that fit your needs.
 * When your component renders, `useBossDiaryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBossDiaryQuery({
 *   variables: {
 *   },
 * });
 */
export function useBossDiaryQuery(baseOptions?: Apollo.QueryHookOptions<BossDiaryQuery, BossDiaryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BossDiaryQuery, BossDiaryQueryVariables>(BossDiaryDocument, options);
      }
export function useBossDiaryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BossDiaryQuery, BossDiaryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BossDiaryQuery, BossDiaryQueryVariables>(BossDiaryDocument, options);
        }
export function useBossDiarySuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<BossDiaryQuery, BossDiaryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<BossDiaryQuery, BossDiaryQueryVariables>(BossDiaryDocument, options);
        }
export type BossDiaryQueryHookResult = ReturnType<typeof useBossDiaryQuery>;
export type BossDiaryLazyQueryHookResult = ReturnType<typeof useBossDiaryLazyQuery>;
export type BossDiarySuspenseQueryHookResult = ReturnType<typeof useBossDiarySuspenseQuery>;
export type BossDiaryQueryResult = Apollo.QueryResult<BossDiaryQuery, BossDiaryQueryVariables>;
export const HomeCategoryColumnDocument = gql`
    query homeCategoryColumn($includeLayout: Boolean = false) {
  homePage {
    data {
      id
      attributes {
        CategoryColumn {
          id
          categories {
            data {
              ...CategoryFragment
            }
          }
        }
      }
    }
  }
}
    ${CategoryFragmentFragmentDoc}`;

/**
 * __useHomeCategoryColumnQuery__
 *
 * To run a query within a React component, call `useHomeCategoryColumnQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeCategoryColumnQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeCategoryColumnQuery({
 *   variables: {
 *      includeLayout: // value for 'includeLayout'
 *   },
 * });
 */
export function useHomeCategoryColumnQuery(baseOptions?: Apollo.QueryHookOptions<HomeCategoryColumnQuery, HomeCategoryColumnQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HomeCategoryColumnQuery, HomeCategoryColumnQueryVariables>(HomeCategoryColumnDocument, options);
      }
export function useHomeCategoryColumnLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomeCategoryColumnQuery, HomeCategoryColumnQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HomeCategoryColumnQuery, HomeCategoryColumnQueryVariables>(HomeCategoryColumnDocument, options);
        }
export function useHomeCategoryColumnSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<HomeCategoryColumnQuery, HomeCategoryColumnQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<HomeCategoryColumnQuery, HomeCategoryColumnQueryVariables>(HomeCategoryColumnDocument, options);
        }
export type HomeCategoryColumnQueryHookResult = ReturnType<typeof useHomeCategoryColumnQuery>;
export type HomeCategoryColumnLazyQueryHookResult = ReturnType<typeof useHomeCategoryColumnLazyQuery>;
export type HomeCategoryColumnSuspenseQueryHookResult = ReturnType<typeof useHomeCategoryColumnSuspenseQuery>;
export type HomeCategoryColumnQueryResult = Apollo.QueryResult<HomeCategoryColumnQuery, HomeCategoryColumnQueryVariables>;
export const HomeCategoryFeatureDocument = gql`
    query homeCategoryFeature($includeLayout: Boolean = false) {
  homePage {
    data {
      id
      attributes {
        CategoryFeature {
          ... on HomePageCategoryFeatureDynamicZone {
            ...homePageCategoryFeatureDynamicZoneFragment
          }
        }
      }
    }
  }
}
    ${HomePageCategoryFeatureDynamicZoneFragmentFragmentDoc}`;

/**
 * __useHomeCategoryFeatureQuery__
 *
 * To run a query within a React component, call `useHomeCategoryFeatureQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeCategoryFeatureQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeCategoryFeatureQuery({
 *   variables: {
 *      includeLayout: // value for 'includeLayout'
 *   },
 * });
 */
export function useHomeCategoryFeatureQuery(baseOptions?: Apollo.QueryHookOptions<HomeCategoryFeatureQuery, HomeCategoryFeatureQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HomeCategoryFeatureQuery, HomeCategoryFeatureQueryVariables>(HomeCategoryFeatureDocument, options);
      }
export function useHomeCategoryFeatureLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomeCategoryFeatureQuery, HomeCategoryFeatureQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HomeCategoryFeatureQuery, HomeCategoryFeatureQueryVariables>(HomeCategoryFeatureDocument, options);
        }
export function useHomeCategoryFeatureSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<HomeCategoryFeatureQuery, HomeCategoryFeatureQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<HomeCategoryFeatureQuery, HomeCategoryFeatureQueryVariables>(HomeCategoryFeatureDocument, options);
        }
export type HomeCategoryFeatureQueryHookResult = ReturnType<typeof useHomeCategoryFeatureQuery>;
export type HomeCategoryFeatureLazyQueryHookResult = ReturnType<typeof useHomeCategoryFeatureLazyQuery>;
export type HomeCategoryFeatureSuspenseQueryHookResult = ReturnType<typeof useHomeCategoryFeatureSuspenseQuery>;
export type HomeCategoryFeatureQueryResult = Apollo.QueryResult<HomeCategoryFeatureQuery, HomeCategoryFeatureQueryVariables>;
export const HomeFeatureAdsDocument = gql`
    query homeFeatureAds {
  homePage {
    data {
      attributes {
        featuredSection {
          ad_banner_side {
            data {
              id
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useHomeFeatureAdsQuery__
 *
 * To run a query within a React component, call `useHomeFeatureAdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeFeatureAdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeFeatureAdsQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomeFeatureAdsQuery(baseOptions?: Apollo.QueryHookOptions<HomeFeatureAdsQuery, HomeFeatureAdsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HomeFeatureAdsQuery, HomeFeatureAdsQueryVariables>(HomeFeatureAdsDocument, options);
      }
export function useHomeFeatureAdsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomeFeatureAdsQuery, HomeFeatureAdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HomeFeatureAdsQuery, HomeFeatureAdsQueryVariables>(HomeFeatureAdsDocument, options);
        }
export function useHomeFeatureAdsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<HomeFeatureAdsQuery, HomeFeatureAdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<HomeFeatureAdsQuery, HomeFeatureAdsQueryVariables>(HomeFeatureAdsDocument, options);
        }
export type HomeFeatureAdsQueryHookResult = ReturnType<typeof useHomeFeatureAdsQuery>;
export type HomeFeatureAdsLazyQueryHookResult = ReturnType<typeof useHomeFeatureAdsLazyQuery>;
export type HomeFeatureAdsSuspenseQueryHookResult = ReturnType<typeof useHomeFeatureAdsSuspenseQuery>;
export type HomeFeatureAdsQueryResult = Apollo.QueryResult<HomeFeatureAdsQuery, HomeFeatureAdsQueryVariables>;
export const HomeFeaturedEditorPickDocument = gql`
    query homeFeaturedEditorPick {
  homePage {
    data {
      id
      attributes {
        featuredSection {
          id
          editor_picks {
            data {
              ... on ArticleEntity {
                ...ArticleList
              }
            }
          }
        }
      }
    }
  }
}
    ${ArticleListFragmentDoc}`;

/**
 * __useHomeFeaturedEditorPickQuery__
 *
 * To run a query within a React component, call `useHomeFeaturedEditorPickQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeFeaturedEditorPickQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeFeaturedEditorPickQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomeFeaturedEditorPickQuery(baseOptions?: Apollo.QueryHookOptions<HomeFeaturedEditorPickQuery, HomeFeaturedEditorPickQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HomeFeaturedEditorPickQuery, HomeFeaturedEditorPickQueryVariables>(HomeFeaturedEditorPickDocument, options);
      }
export function useHomeFeaturedEditorPickLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomeFeaturedEditorPickQuery, HomeFeaturedEditorPickQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HomeFeaturedEditorPickQuery, HomeFeaturedEditorPickQueryVariables>(HomeFeaturedEditorPickDocument, options);
        }
export function useHomeFeaturedEditorPickSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<HomeFeaturedEditorPickQuery, HomeFeaturedEditorPickQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<HomeFeaturedEditorPickQuery, HomeFeaturedEditorPickQueryVariables>(HomeFeaturedEditorPickDocument, options);
        }
export type HomeFeaturedEditorPickQueryHookResult = ReturnType<typeof useHomeFeaturedEditorPickQuery>;
export type HomeFeaturedEditorPickLazyQueryHookResult = ReturnType<typeof useHomeFeaturedEditorPickLazyQuery>;
export type HomeFeaturedEditorPickSuspenseQueryHookResult = ReturnType<typeof useHomeFeaturedEditorPickSuspenseQuery>;
export type HomeFeaturedEditorPickQueryResult = Apollo.QueryResult<HomeFeaturedEditorPickQuery, HomeFeaturedEditorPickQueryVariables>;
export const HomeFeatureTrendingNewsDocument = gql`
    query homeFeatureTrendingNews {
  homePage {
    data {
      id
      attributes {
        featuredSection {
          id
          popular_news {
            data {
              ... on ArticleEntity {
                ...ArticleList
              }
            }
          }
        }
      }
    }
  }
}
    ${ArticleListFragmentDoc}`;

/**
 * __useHomeFeatureTrendingNewsQuery__
 *
 * To run a query within a React component, call `useHomeFeatureTrendingNewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeFeatureTrendingNewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeFeatureTrendingNewsQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomeFeatureTrendingNewsQuery(baseOptions?: Apollo.QueryHookOptions<HomeFeatureTrendingNewsQuery, HomeFeatureTrendingNewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HomeFeatureTrendingNewsQuery, HomeFeatureTrendingNewsQueryVariables>(HomeFeatureTrendingNewsDocument, options);
      }
export function useHomeFeatureTrendingNewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomeFeatureTrendingNewsQuery, HomeFeatureTrendingNewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HomeFeatureTrendingNewsQuery, HomeFeatureTrendingNewsQueryVariables>(HomeFeatureTrendingNewsDocument, options);
        }
export function useHomeFeatureTrendingNewsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<HomeFeatureTrendingNewsQuery, HomeFeatureTrendingNewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<HomeFeatureTrendingNewsQuery, HomeFeatureTrendingNewsQueryVariables>(HomeFeatureTrendingNewsDocument, options);
        }
export type HomeFeatureTrendingNewsQueryHookResult = ReturnType<typeof useHomeFeatureTrendingNewsQuery>;
export type HomeFeatureTrendingNewsLazyQueryHookResult = ReturnType<typeof useHomeFeatureTrendingNewsLazyQuery>;
export type HomeFeatureTrendingNewsSuspenseQueryHookResult = ReturnType<typeof useHomeFeatureTrendingNewsSuspenseQuery>;
export type HomeFeatureTrendingNewsQueryResult = Apollo.QueryResult<HomeFeatureTrendingNewsQuery, HomeFeatureTrendingNewsQueryVariables>;
export const HomeInterviewDocument = gql`
    query homeInterview($filters: ArticleFiltersInput) {
  interview {
    data {
      id
      attributes {
        url
        name
        articles(pagination: {limit: 20}) {
          data {
            ...ArticleBasic
          }
        }
      }
    }
  }
  articles(
    filters: $filters
    sort: ["publishedDate:desc"]
    pagination: {limit: 20}
  ) {
    data {
      ...ArticleBasic
    }
  }
}
    ${ArticleBasicFragmentDoc}`;

/**
 * __useHomeInterviewQuery__
 *
 * To run a query within a React component, call `useHomeInterviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeInterviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeInterviewQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useHomeInterviewQuery(baseOptions?: Apollo.QueryHookOptions<HomeInterviewQuery, HomeInterviewQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HomeInterviewQuery, HomeInterviewQueryVariables>(HomeInterviewDocument, options);
      }
export function useHomeInterviewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomeInterviewQuery, HomeInterviewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HomeInterviewQuery, HomeInterviewQueryVariables>(HomeInterviewDocument, options);
        }
export function useHomeInterviewSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<HomeInterviewQuery, HomeInterviewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<HomeInterviewQuery, HomeInterviewQueryVariables>(HomeInterviewDocument, options);
        }
export type HomeInterviewQueryHookResult = ReturnType<typeof useHomeInterviewQuery>;
export type HomeInterviewLazyQueryHookResult = ReturnType<typeof useHomeInterviewLazyQuery>;
export type HomeInterviewSuspenseQueryHookResult = ReturnType<typeof useHomeInterviewSuspenseQuery>;
export type HomeInterviewQueryResult = Apollo.QueryResult<HomeInterviewQuery, HomeInterviewQueryVariables>;
export const HomePageDocument = gql`
    query homePage {
  homePage {
    data {
      id
      attributes {
        ExpertReviewUrl
        Carousel {
          ... on ComponentHomeBannerArticle {
            ...ComponentHomeBannerArticleFragment
          }
          ... on ComponentHomeBannerImage {
            ...ComponentHomeBannerImageFragment
          }
          ... on ComponentHomeBannerVideoMp4 {
            ...ComponentHomeBannerVideoMp4Fragment
          }
          ... on ComponentHomeBannerVideoUrl {
            ...ComponentHomeBannerVideoUrlFragment
          }
        }
        PageTitle
        seo {
          metaDescription
          metaTitle
          metaImage {
            data {
              attributes {
                url
                width
                height
                alternativeText
              }
            }
          }
          metaSocial {
            socialNetwork
            title
            description
          }
          keywords
          metaRobots
          metaViewport
        }
      }
    }
  }
}
    ${ComponentHomeBannerArticleFragmentFragmentDoc}
${ComponentHomeBannerImageFragmentFragmentDoc}
${ComponentHomeBannerVideoMp4FragmentFragmentDoc}
${ComponentHomeBannerVideoUrlFragmentFragmentDoc}`;

/**
 * __useHomePageQuery__
 *
 * To run a query within a React component, call `useHomePageQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomePageQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomePageQuery(baseOptions?: Apollo.QueryHookOptions<HomePageQuery, HomePageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HomePageQuery, HomePageQueryVariables>(HomePageDocument, options);
      }
export function useHomePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomePageQuery, HomePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HomePageQuery, HomePageQueryVariables>(HomePageDocument, options);
        }
export function useHomePageSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<HomePageQuery, HomePageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<HomePageQuery, HomePageQueryVariables>(HomePageDocument, options);
        }
export type HomePageQueryHookResult = ReturnType<typeof useHomePageQuery>;
export type HomePageLazyQueryHookResult = ReturnType<typeof useHomePageLazyQuery>;
export type HomePageSuspenseQueryHookResult = ReturnType<typeof useHomePageSuspenseQuery>;
export type HomePageQueryResult = Apollo.QueryResult<HomePageQuery, HomePageQueryVariables>;
export const HomeTopBannerDocument = gql`
    query homeTopBanner {
  homePage {
    data {
      id
      attributes {
        HomeTopBanner {
          image {
            data {
              attributes {
                url
              }
            }
          }
          mobileImage {
            data {
              attributes {
                url
              }
            }
          }
          url
          target
          alternativeText
        }
      }
    }
  }
}
    `;

/**
 * __useHomeTopBannerQuery__
 *
 * To run a query within a React component, call `useHomeTopBannerQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeTopBannerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeTopBannerQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomeTopBannerQuery(baseOptions?: Apollo.QueryHookOptions<HomeTopBannerQuery, HomeTopBannerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HomeTopBannerQuery, HomeTopBannerQueryVariables>(HomeTopBannerDocument, options);
      }
export function useHomeTopBannerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomeTopBannerQuery, HomeTopBannerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HomeTopBannerQuery, HomeTopBannerQueryVariables>(HomeTopBannerDocument, options);
        }
export function useHomeTopBannerSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<HomeTopBannerQuery, HomeTopBannerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<HomeTopBannerQuery, HomeTopBannerQueryVariables>(HomeTopBannerDocument, options);
        }
export type HomeTopBannerQueryHookResult = ReturnType<typeof useHomeTopBannerQuery>;
export type HomeTopBannerLazyQueryHookResult = ReturnType<typeof useHomeTopBannerLazyQuery>;
export type HomeTopBannerSuspenseQueryHookResult = ReturnType<typeof useHomeTopBannerSuspenseQuery>;
export type HomeTopBannerQueryResult = Apollo.QueryResult<HomeTopBannerQuery, HomeTopBannerQueryVariables>;
export const HomeTopicSectionDocument = gql`
    query homeTopicSection($includeLayout: Boolean = false) {
  homePage {
    data {
      id
      attributes {
        Topic {
          id
          url
          name
          categories {
            data {
              ...HomeTopicSectionExtraCategoryImage
              ...CategoryFragment
            }
          }
        }
      }
    }
  }
}
    ${HomeTopicSectionExtraCategoryImageFragmentDoc}
${CategoryFragmentFragmentDoc}`;

/**
 * __useHomeTopicSectionQuery__
 *
 * To run a query within a React component, call `useHomeTopicSectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeTopicSectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeTopicSectionQuery({
 *   variables: {
 *      includeLayout: // value for 'includeLayout'
 *   },
 * });
 */
export function useHomeTopicSectionQuery(baseOptions?: Apollo.QueryHookOptions<HomeTopicSectionQuery, HomeTopicSectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HomeTopicSectionQuery, HomeTopicSectionQueryVariables>(HomeTopicSectionDocument, options);
      }
export function useHomeTopicSectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomeTopicSectionQuery, HomeTopicSectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HomeTopicSectionQuery, HomeTopicSectionQueryVariables>(HomeTopicSectionDocument, options);
        }
export function useHomeTopicSectionSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<HomeTopicSectionQuery, HomeTopicSectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<HomeTopicSectionQuery, HomeTopicSectionQueryVariables>(HomeTopicSectionDocument, options);
        }
export type HomeTopicSectionQueryHookResult = ReturnType<typeof useHomeTopicSectionQuery>;
export type HomeTopicSectionLazyQueryHookResult = ReturnType<typeof useHomeTopicSectionLazyQuery>;
export type HomeTopicSectionSuspenseQueryHookResult = ReturnType<typeof useHomeTopicSectionSuspenseQuery>;
export type HomeTopicSectionQueryResult = Apollo.QueryResult<HomeTopicSectionQuery, HomeTopicSectionQueryVariables>;
export const InterestedAreaDocument = gql`
    query interestedArea {
  interestedAreas {
    data {
      id
      attributes {
        Title
      }
    }
  }
}
    `;

/**
 * __useInterestedAreaQuery__
 *
 * To run a query within a React component, call `useInterestedAreaQuery` and pass it any options that fit your needs.
 * When your component renders, `useInterestedAreaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInterestedAreaQuery({
 *   variables: {
 *   },
 * });
 */
export function useInterestedAreaQuery(baseOptions?: Apollo.QueryHookOptions<InterestedAreaQuery, InterestedAreaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InterestedAreaQuery, InterestedAreaQueryVariables>(InterestedAreaDocument, options);
      }
export function useInterestedAreaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InterestedAreaQuery, InterestedAreaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InterestedAreaQuery, InterestedAreaQueryVariables>(InterestedAreaDocument, options);
        }
export function useInterestedAreaSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<InterestedAreaQuery, InterestedAreaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<InterestedAreaQuery, InterestedAreaQueryVariables>(InterestedAreaDocument, options);
        }
export type InterestedAreaQueryHookResult = ReturnType<typeof useInterestedAreaQuery>;
export type InterestedAreaLazyQueryHookResult = ReturnType<typeof useInterestedAreaLazyQuery>;
export type InterestedAreaSuspenseQueryHookResult = ReturnType<typeof useInterestedAreaSuspenseQuery>;
export type InterestedAreaQueryResult = Apollo.QueryResult<InterestedAreaQuery, InterestedAreaQueryVariables>;
export const InterviewListDocument = gql`
    query interviewList {
  interview {
    data {
      id
      attributes {
        articles {
          data {
            id
            attributes {
              categories {
                data {
                  attributes {
                    name
                    slug
                    parentCategory {
                      data {
                        attributes {
                          slug
                          name
                        }
                      }
                    }
                  }
                }
              }
              title
              slug
              Interviewee {
                name
                title
                portrait {
                  data {
                    attributes {
                      alternativeText
                      width
                      height
                      url
                      formats
                    }
                  }
                }
              }
              keyVisualHorizontal {
                data {
                  attributes {
                    url
                    height
                    width
                    alternativeText
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useInterviewListQuery__
 *
 * To run a query within a React component, call `useInterviewListQuery` and pass it any options that fit your needs.
 * When your component renders, `useInterviewListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInterviewListQuery({
 *   variables: {
 *   },
 * });
 */
export function useInterviewListQuery(baseOptions?: Apollo.QueryHookOptions<InterviewListQuery, InterviewListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<InterviewListQuery, InterviewListQueryVariables>(InterviewListDocument, options);
      }
export function useInterviewListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<InterviewListQuery, InterviewListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<InterviewListQuery, InterviewListQueryVariables>(InterviewListDocument, options);
        }
export function useInterviewListSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<InterviewListQuery, InterviewListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<InterviewListQuery, InterviewListQueryVariables>(InterviewListDocument, options);
        }
export type InterviewListQueryHookResult = ReturnType<typeof useInterviewListQuery>;
export type InterviewListLazyQueryHookResult = ReturnType<typeof useInterviewListLazyQuery>;
export type InterviewListSuspenseQueryHookResult = ReturnType<typeof useInterviewListSuspenseQuery>;
export type InterviewListQueryResult = Apollo.QueryResult<InterviewListQuery, InterviewListQueryVariables>;
export const MenusMenuItemsDocument = gql`
    query menusMenuItems($sort: [String] = [], $filters: MenusMenuItemFiltersInput, $pagination: PaginationArg = {}) {
  menusMenuItems(sort: $sort, filters: $filters, pagination: $pagination) {
    data {
      id
      attributes {
        parent {
          data {
            attributes {
              order
              title
              url
              target
            }
          }
        }
        order
        title
        url
        target
      }
    }
  }
}
    `;

/**
 * __useMenusMenuItemsQuery__
 *
 * To run a query within a React component, call `useMenusMenuItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMenusMenuItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMenusMenuItemsQuery({
 *   variables: {
 *      sort: // value for 'sort'
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useMenusMenuItemsQuery(baseOptions?: Apollo.QueryHookOptions<MenusMenuItemsQuery, MenusMenuItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MenusMenuItemsQuery, MenusMenuItemsQueryVariables>(MenusMenuItemsDocument, options);
      }
export function useMenusMenuItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MenusMenuItemsQuery, MenusMenuItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MenusMenuItemsQuery, MenusMenuItemsQueryVariables>(MenusMenuItemsDocument, options);
        }
export function useMenusMenuItemsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<MenusMenuItemsQuery, MenusMenuItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MenusMenuItemsQuery, MenusMenuItemsQueryVariables>(MenusMenuItemsDocument, options);
        }
export type MenusMenuItemsQueryHookResult = ReturnType<typeof useMenusMenuItemsQuery>;
export type MenusMenuItemsLazyQueryHookResult = ReturnType<typeof useMenusMenuItemsLazyQuery>;
export type MenusMenuItemsSuspenseQueryHookResult = ReturnType<typeof useMenusMenuItemsSuspenseQuery>;
export type MenusMenuItemsQueryResult = Apollo.QueryResult<MenusMenuItemsQuery, MenusMenuItemsQueryVariables>;
export const FindNewsletterSubscriptionDocument = gql`
    query FindNewsletterSubscription($id: ID) {
  findNewsletterSubscription(id: $id) {
    data {
      email
      createdAt
      updatedAt
      id
    }
  }
}
    `;

/**
 * __useFindNewsletterSubscriptionQuery__
 *
 * To run a query within a React component, call `useFindNewsletterSubscriptionQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindNewsletterSubscriptionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindNewsletterSubscriptionQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindNewsletterSubscriptionQuery(baseOptions?: Apollo.QueryHookOptions<FindNewsletterSubscriptionQuery, FindNewsletterSubscriptionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindNewsletterSubscriptionQuery, FindNewsletterSubscriptionQueryVariables>(FindNewsletterSubscriptionDocument, options);
      }
export function useFindNewsletterSubscriptionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindNewsletterSubscriptionQuery, FindNewsletterSubscriptionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindNewsletterSubscriptionQuery, FindNewsletterSubscriptionQueryVariables>(FindNewsletterSubscriptionDocument, options);
        }
export function useFindNewsletterSubscriptionSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<FindNewsletterSubscriptionQuery, FindNewsletterSubscriptionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindNewsletterSubscriptionQuery, FindNewsletterSubscriptionQueryVariables>(FindNewsletterSubscriptionDocument, options);
        }
export type FindNewsletterSubscriptionQueryHookResult = ReturnType<typeof useFindNewsletterSubscriptionQuery>;
export type FindNewsletterSubscriptionLazyQueryHookResult = ReturnType<typeof useFindNewsletterSubscriptionLazyQuery>;
export type FindNewsletterSubscriptionSuspenseQueryHookResult = ReturnType<typeof useFindNewsletterSubscriptionSuspenseQuery>;
export type FindNewsletterSubscriptionQueryResult = Apollo.QueryResult<FindNewsletterSubscriptionQuery, FindNewsletterSubscriptionQueryVariables>;
export const PagesListDocument = gql`
    query pagesList($filters: PageFiltersInput) {
  pages(filters: $filters) {
    data {
      attributes {
        blocks {
          ... on ComponentArticleEmbedInstagram {
            ...ComponentArticleEmbedInstagramFragment
          }
          ... on ComponentArticleEmbedVideo {
            ...ComponentArticleEmbedVideoFragment
          }
          ... on ComponentArticleImage {
            ...ComponentArticleImageFragment
          }
          ... on ComponentArticleImageCarousel {
            ...ComponentArticleImageCarouselFragment
          }
          ... on ComponentArticleImageGallery {
            ...ComponentArticleImageGalleryFragment
          }
          ... on ComponentArticleInfoBox {
            ...ComponentArticleInfoBoxFragment
          }
          ... on ComponentArticleListicleTitle {
            ...ComponentArticleListicleTitleFragment
          }
          ... on ComponentArticlePictureWithTag {
            ...ComponentArticlePictureWithTagFragment
          }
          ... on ComponentArticlePrizeList {
            ...ComponentArticlePrizeListFragment
          }
          ... on ComponentArticleProductReview {
            ...ComponentArticleProductReviewFragment
          }
          ... on ComponentArticleQuestionAnswer {
            ...ComponentArticleQuestionAnswerFragment
          }
          ... on ComponentArticleQuestionAnswer2Columns {
            ...ComponentArticleQuestionAnswer2ColumnsFragment
          }
          ... on ComponentArticleRichText {
            ...ComponentArticleRichTextFragment
          }
          ... on ComponentArticleTipsBox {
            ...ComponentArticleTipsBoxFragment
          }
          ... on ComponentArticleVideo {
            ...ComponentArticleVideoFragment
          }
          ... on ComponentArticleFaq {
            ...ComponentArticleFaqFragment
          }
          ... on ComponentArticleProductList {
            ...ComponentArticleProductListFragment
          }
          ... on ComponentArticleImageWithContent {
            ...ComponentArticleImageWithContentFragment
          }
        }
        title
        slug
        mastheadTitle
        content
        mastheadBanner {
          data {
            attributes {
              url
              alternativeText
              height
              width
            }
          }
        }
        seo {
          metaTitle
          metaDescription
          keywords
          metaRobots
          structuredData
          metaViewport
          canonicalURL
          metaSocial {
            title
            socialNetwork
            description
            image {
              data {
                attributes {
                  url
                  alternativeText
                  height
                  width
                }
              }
            }
          }
        }
      }
    }
  }
}
    ${ComponentArticleEmbedInstagramFragmentFragmentDoc}
${ComponentArticleEmbedVideoFragmentFragmentDoc}
${ComponentArticleImageFragmentFragmentDoc}
${ComponentArticleImageCarouselFragmentFragmentDoc}
${ComponentArticleImageGalleryFragmentFragmentDoc}
${ComponentArticleInfoBoxFragmentFragmentDoc}
${ComponentArticleListicleTitleFragmentFragmentDoc}
${ComponentArticlePictureWithTagFragmentFragmentDoc}
${ComponentArticlePrizeListFragmentFragmentDoc}
${ComponentArticleProductReviewFragmentFragmentDoc}
${ComponentArticleQuestionAnswerFragmentFragmentDoc}
${ComponentArticleQuestionAnswer2ColumnsFragmentFragmentDoc}
${ComponentArticleRichTextFragmentFragmentDoc}
${ComponentArticleTipsBoxFragmentFragmentDoc}
${ComponentArticleVideoFragmentFragmentDoc}
${ComponentArticleFaqFragmentFragmentDoc}
${ComponentArticleProductListFragmentFragmentDoc}
${ComponentArticleImageWithContentFragmentFragmentDoc}`;

/**
 * __usePagesListQuery__
 *
 * To run a query within a React component, call `usePagesListQuery` and pass it any options that fit your needs.
 * When your component renders, `usePagesListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePagesListQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function usePagesListQuery(baseOptions?: Apollo.QueryHookOptions<PagesListQuery, PagesListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PagesListQuery, PagesListQueryVariables>(PagesListDocument, options);
      }
export function usePagesListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PagesListQuery, PagesListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PagesListQuery, PagesListQueryVariables>(PagesListDocument, options);
        }
export function usePagesListSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<PagesListQuery, PagesListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PagesListQuery, PagesListQueryVariables>(PagesListDocument, options);
        }
export type PagesListQueryHookResult = ReturnType<typeof usePagesListQuery>;
export type PagesListLazyQueryHookResult = ReturnType<typeof usePagesListLazyQuery>;
export type PagesListSuspenseQueryHookResult = ReturnType<typeof usePagesListSuspenseQuery>;
export type PagesListQueryResult = Apollo.QueryResult<PagesListQuery, PagesListQueryVariables>;
export const RoutesDocument = gql`
    query routes($filters: RouteFiltersInput, $pagination: PaginationArg = {}, $sort: [String] = []) {
  routes(filters: $filters, pagination: $pagination, sort: $sort) {
    data {
      id
      attributes {
        requestPath
        value
        type
      }
    }
  }
}
    `;

/**
 * __useRoutesQuery__
 *
 * To run a query within a React component, call `useRoutesQuery` and pass it any options that fit your needs.
 * When your component renders, `useRoutesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRoutesQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useRoutesQuery(baseOptions?: Apollo.QueryHookOptions<RoutesQuery, RoutesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RoutesQuery, RoutesQueryVariables>(RoutesDocument, options);
      }
export function useRoutesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RoutesQuery, RoutesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RoutesQuery, RoutesQueryVariables>(RoutesDocument, options);
        }
export function useRoutesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<RoutesQuery, RoutesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<RoutesQuery, RoutesQueryVariables>(RoutesDocument, options);
        }
export type RoutesQueryHookResult = ReturnType<typeof useRoutesQuery>;
export type RoutesLazyQueryHookResult = ReturnType<typeof useRoutesLazyQuery>;
export type RoutesSuspenseQueryHookResult = ReturnType<typeof useRoutesSuspenseQuery>;
export type RoutesQueryResult = Apollo.QueryResult<RoutesQuery, RoutesQueryVariables>;
export const ArticleSeoDocument = gql`
    query articleSeo($filters: ArticleFiltersInput, $pagination: PaginationArg = {}, $sort: [String] = [], $publicationState: PublicationState = LIVE) {
  articles(
    filters: $filters
    sort: $sort
    publicationState: $publicationState
    pagination: $pagination
  ) {
    data {
      attributes {
        slug
        keyVisualHorizontal {
          data {
            id
            attributes {
              alternativeText
              url
              width
              height
              formats
            }
          }
        }
        categories {
          data {
            attributes {
              slug
              parentCategory {
                data {
                  attributes {
                    slug
                  }
                }
              }
            }
          }
        }
        seo {
          metaDescription
          metaTitle
          metaImage {
            data {
              attributes {
                url
                width
                height
                alternativeText
                formats
              }
            }
          }
          metaSocial {
            socialNetwork
            title
            description
          }
          keywords
          metaRobots
          metaViewport
        }
      }
    }
  }
}
    `;

/**
 * __useArticleSeoQuery__
 *
 * To run a query within a React component, call `useArticleSeoQuery` and pass it any options that fit your needs.
 * When your component renders, `useArticleSeoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useArticleSeoQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *      publicationState: // value for 'publicationState'
 *   },
 * });
 */
export function useArticleSeoQuery(baseOptions?: Apollo.QueryHookOptions<ArticleSeoQuery, ArticleSeoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ArticleSeoQuery, ArticleSeoQueryVariables>(ArticleSeoDocument, options);
      }
export function useArticleSeoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ArticleSeoQuery, ArticleSeoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ArticleSeoQuery, ArticleSeoQueryVariables>(ArticleSeoDocument, options);
        }
export function useArticleSeoSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ArticleSeoQuery, ArticleSeoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ArticleSeoQuery, ArticleSeoQueryVariables>(ArticleSeoDocument, options);
        }
export type ArticleSeoQueryHookResult = ReturnType<typeof useArticleSeoQuery>;
export type ArticleSeoLazyQueryHookResult = ReturnType<typeof useArticleSeoLazyQuery>;
export type ArticleSeoSuspenseQueryHookResult = ReturnType<typeof useArticleSeoSuspenseQuery>;
export type ArticleSeoQueryResult = Apollo.QueryResult<ArticleSeoQuery, ArticleSeoQueryVariables>;
export const CategorySeoDocument = gql`
    query categorySeo($id: ID) {
  category(id: $id) {
    data {
      attributes {
        seo {
          metaDescription
          metaTitle
          metaImage {
            data {
              attributes {
                url
                width
                height
                alternativeText
              }
            }
          }
          metaSocial {
            socialNetwork
            title
            description
          }
          keywords
          metaRobots
          metaViewport
        }
      }
    }
  }
}
    `;

/**
 * __useCategorySeoQuery__
 *
 * To run a query within a React component, call `useCategorySeoQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategorySeoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategorySeoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCategorySeoQuery(baseOptions?: Apollo.QueryHookOptions<CategorySeoQuery, CategorySeoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategorySeoQuery, CategorySeoQueryVariables>(CategorySeoDocument, options);
      }
export function useCategorySeoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategorySeoQuery, CategorySeoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategorySeoQuery, CategorySeoQueryVariables>(CategorySeoDocument, options);
        }
export function useCategorySeoSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CategorySeoQuery, CategorySeoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CategorySeoQuery, CategorySeoQueryVariables>(CategorySeoDocument, options);
        }
export type CategorySeoQueryHookResult = ReturnType<typeof useCategorySeoQuery>;
export type CategorySeoLazyQueryHookResult = ReturnType<typeof useCategorySeoLazyQuery>;
export type CategorySeoSuspenseQueryHookResult = ReturnType<typeof useCategorySeoSuspenseQuery>;
export type CategorySeoQueryResult = Apollo.QueryResult<CategorySeoQuery, CategorySeoQueryVariables>;
export const HomeSeoDocument = gql`
    query homeSeo {
  homePage {
    data {
      id
      attributes {
        seo {
          metaDescription
          metaTitle
          metaImage {
            data {
              attributes {
                url
                width
                height
                alternativeText
              }
            }
          }
          metaSocial {
            socialNetwork
            title
            description
          }
          keywords
          metaRobots
          metaViewport
        }
      }
    }
  }
}
    `;

/**
 * __useHomeSeoQuery__
 *
 * To run a query within a React component, call `useHomeSeoQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeSeoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeSeoQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomeSeoQuery(baseOptions?: Apollo.QueryHookOptions<HomeSeoQuery, HomeSeoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HomeSeoQuery, HomeSeoQueryVariables>(HomeSeoDocument, options);
      }
export function useHomeSeoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomeSeoQuery, HomeSeoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HomeSeoQuery, HomeSeoQueryVariables>(HomeSeoDocument, options);
        }
export function useHomeSeoSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<HomeSeoQuery, HomeSeoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<HomeSeoQuery, HomeSeoQueryVariables>(HomeSeoDocument, options);
        }
export type HomeSeoQueryHookResult = ReturnType<typeof useHomeSeoQuery>;
export type HomeSeoLazyQueryHookResult = ReturnType<typeof useHomeSeoLazyQuery>;
export type HomeSeoSuspenseQueryHookResult = ReturnType<typeof useHomeSeoSuspenseQuery>;
export type HomeSeoQueryResult = Apollo.QueryResult<HomeSeoQuery, HomeSeoQueryVariables>;
export const PageSeoDocument = gql`
    query pageSeo($filters: PageFiltersInput) {
  pages(filters: $filters) {
    data {
      attributes {
        seo {
          metaDescription
          metaTitle
          metaImage {
            data {
              attributes {
                url
                width
                height
                alternativeText
              }
            }
          }
          metaSocial {
            socialNetwork
            title
            description
          }
          keywords
          metaRobots
          metaViewport
        }
      }
    }
  }
}
    `;

/**
 * __usePageSeoQuery__
 *
 * To run a query within a React component, call `usePageSeoQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageSeoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageSeoQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function usePageSeoQuery(baseOptions?: Apollo.QueryHookOptions<PageSeoQuery, PageSeoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageSeoQuery, PageSeoQueryVariables>(PageSeoDocument, options);
      }
export function usePageSeoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageSeoQuery, PageSeoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageSeoQuery, PageSeoQueryVariables>(PageSeoDocument, options);
        }
export function usePageSeoSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<PageSeoQuery, PageSeoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PageSeoQuery, PageSeoQueryVariables>(PageSeoDocument, options);
        }
export type PageSeoQueryHookResult = ReturnType<typeof usePageSeoQuery>;
export type PageSeoLazyQueryHookResult = ReturnType<typeof usePageSeoLazyQuery>;
export type PageSeoSuspenseQueryHookResult = ReturnType<typeof usePageSeoSuspenseQuery>;
export type PageSeoQueryResult = Apollo.QueryResult<PageSeoQuery, PageSeoQueryVariables>;
export const TagSeoDocument = gql`
    query tagSeo($filters: TagFiltersInput, $pagination: PaginationArg = {}, $sort: [String] = []) {
  tags(filters: $filters, pagination: $pagination, sort: $sort) {
    data {
      attributes {
        seo {
          metaDescription
          metaTitle
          metaImage {
            data {
              attributes {
                url
                width
                height
                alternativeText
              }
            }
          }
          metaSocial {
            socialNetwork
            title
            description
          }
          keywords
          metaRobots
          metaViewport
        }
      }
    }
  }
}
    `;

/**
 * __useTagSeoQuery__
 *
 * To run a query within a React component, call `useTagSeoQuery` and pass it any options that fit your needs.
 * When your component renders, `useTagSeoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTagSeoQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useTagSeoQuery(baseOptions?: Apollo.QueryHookOptions<TagSeoQuery, TagSeoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TagSeoQuery, TagSeoQueryVariables>(TagSeoDocument, options);
      }
export function useTagSeoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TagSeoQuery, TagSeoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TagSeoQuery, TagSeoQueryVariables>(TagSeoDocument, options);
        }
export function useTagSeoSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<TagSeoQuery, TagSeoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TagSeoQuery, TagSeoQueryVariables>(TagSeoDocument, options);
        }
export type TagSeoQueryHookResult = ReturnType<typeof useTagSeoQuery>;
export type TagSeoLazyQueryHookResult = ReturnType<typeof useTagSeoLazyQuery>;
export type TagSeoSuspenseQueryHookResult = ReturnType<typeof useTagSeoSuspenseQuery>;
export type TagSeoQueryResult = Apollo.QueryResult<TagSeoQuery, TagSeoQueryVariables>;
export const TagsDocument = gql`
    query tags($filters: TagFiltersInput, $pagination: PaginationArg = {}, $sort: [String] = []) {
  tags(filters: $filters, pagination: $pagination, sort: $sort) {
    data {
      attributes {
        slug
        name
        articles {
          data {
            id
          }
        }
      }
    }
    meta {
      pagination {
        total
      }
    }
  }
}
    `;

/**
 * __useTagsQuery__
 *
 * To run a query within a React component, call `useTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTagsQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *      pagination: // value for 'pagination'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useTagsQuery(baseOptions?: Apollo.QueryHookOptions<TagsQuery, TagsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TagsQuery, TagsQueryVariables>(TagsDocument, options);
      }
export function useTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TagsQuery, TagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TagsQuery, TagsQueryVariables>(TagsDocument, options);
        }
export function useTagsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<TagsQuery, TagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<TagsQuery, TagsQueryVariables>(TagsDocument, options);
        }
export type TagsQueryHookResult = ReturnType<typeof useTagsQuery>;
export type TagsLazyQueryHookResult = ReturnType<typeof useTagsLazyQuery>;
export type TagsSuspenseQueryHookResult = ReturnType<typeof useTagsSuspenseQuery>;
export type TagsQueryResult = Apollo.QueryResult<TagsQuery, TagsQueryVariables>;