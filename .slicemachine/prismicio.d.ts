// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for Home documents */
interface HomeDocumentData {
    /**
     * title1 field in *Home*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: home.title1
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title1: prismicT.TitleField;
    /**
     * sub title1 field in *Home*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home.sub_title1
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    sub_title1: prismicT.RichTextField;
    /**
     * link action1 field in *Home*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: home.link_action1
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link_action1: prismicT.LinkField;
    /**
     * image1 field in *Home*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: home.image1
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image1: prismicT.ImageField<never>;
    /**
     * title2 field in *Home*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: home.title2
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title2: prismicT.TitleField;
    /**
     * sub title2 field in *Home*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home.sub_title2
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    sub_title2: prismicT.RichTextField;
    /**
     * link action2 field in *Home*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: home.link_action2
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link_action2: prismicT.LinkField;
    /**
     * image2 field in *Home*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: home.image2
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image2: prismicT.ImageField<never>;
    /**
     * title3 field in *Home*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: home.title3
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title3: prismicT.TitleField;
    /**
     * sub title3 field in *Home*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: home.sub_title3
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    sub_title3: prismicT.RichTextField;
    /**
     * link action3 field in *Home*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: home.link_action3
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link_action3: prismicT.LinkField;
    /**
     * image3 field in *Home*
     *
     * - **Field Type**: Link to Media
     * - **Placeholder**: *None*
     * - **API ID Path**: home.image3
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    image3: prismicT.LinkToMediaField;
}
/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<HomeDocumentData>, "home", Lang>;
/** Content for Post documents */
interface PostDocumentData {
    /**
     * title field in *Post*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: post.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * image field in *Post*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: post.image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * description field in *Post*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: post.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Post document from Prismic
 *
 * - **API ID**: `post`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PostDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<PostDocumentData>, "post", Lang>;
/** Content for Project documents */
interface ProjectDocumentData {
    /**
     * title field in *Project*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: project.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * subTitle field in *Project*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: project.subtitle
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    subtitle: prismicT.RichTextField;
    /**
     * image field in *Project*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: project.image
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * description field in *Project*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: project.description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * position field in *Project*
     *
     * - **Field Type**: Number
     * - **Placeholder**: *None*
     * - **API ID Path**: project.position
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/number
     *
     */
    position: prismicT.NumberField;
}
/**
 * Project document from Prismic
 *
 * - **API ID**: `project`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<ProjectDocumentData>, "project", Lang>;
export type AllDocumentTypes = HomeDocument | PostDocument | ProjectDocument;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { HomeDocumentData, HomeDocument, PostDocumentData, PostDocument, ProjectDocumentData, ProjectDocument, AllDocumentTypes };
    }
}
