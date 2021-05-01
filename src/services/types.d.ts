declare module "Models" {
  export type Services = typeof import("./index").default;

  namespace ImageAPI {
    export type SearchImagesParams = {
      query: string;
      per_page: number;
      page: number;
      orientation: string;
    };
    export type GetRandomPhotos = {
      query: string;
      count: number;
      orientation: string;
    };
    export type SearchImages = {
      total: number;
      total_pages: number;
      results?: ResultsEntity[] | null;
    };
    export type ResultsEntity = {
      id: string;
      created_at: string;
      updated_at: string;
      promoted_at?: null;
      width: number;
      height: number;
      color: string;
      blur_hash: string;
      description?: null;
      alt_description: string;
      urls: Urls;
      links: Links;
      categories?: null[] | null;
      likes: number;
      liked_by_user: boolean;
      current_user_collections?: null[] | null;
      sponsorship?: null;
      user: User;
      tags?: TagsEntity[] | null;
    };
    export type Urls = {
      raw: string;
      full: string;
      regular: string;
      small: string;
      thumb: string;
    };
    export type Links = {
      self: string;
      html: string;
      download: string;
      download_location: string;
    };

    export type UserLinks = {
      self: string;
      html: string;
      photos: string;
      likes: string;
      portfolio: string;
      following: string;
      followers: string;
    };
    export type ProfileImage = {
      small: string;
      medium: string;
      large: string;
    };
    export type TagsEntity = {
      type: string;
      title: string;
      source?: Source | null;
    };
    export type Source = {
      ancestry: Ancestry;
      title: string;
      subtitle: string;
      description: string;
      meta_title: string;
      meta_description: string;
      cover_photo: CoverPhoto;
    };
    export type Ancestry = {
      type: TypeOrCategoryOrSubcategory;
      category: TypeOrCategoryOrSubcategory;
      subcategory: TypeOrCategoryOrSubcategory;
    };
    export type TypeOrCategoryOrSubcategory = {
      slug: string;
      pretty_slug: string;
    };
    export type CoverPhoto = {
      id: string;
      created_at: string;
      updated_at: string;
      promoted_at: string;
      width: number;
      height: number;
      color: string;
      blur_hash: string;
      description: string;
      alt_description: string;
      urls: Urls;
      links: Links;
      categories?: null[] | null;
      likes: number;
      liked_by_user: boolean;
      current_user_collections?: null[] | null;
      sponsorship?: null;
      user: User;
    };
    export type User = {
      id: string;
      updated_at: string;
      username: string;
      name: string;
      first_name: string;
      last_name: string;
      twitter_username?: null;
      portfolio_url?: null;
      bio?: null;
      location?: null;
      links: UserLinks;
      profile_image: ProfileImage;
      instagram_username?: null;
      total_collections: number;
      total_likes: number;
      total_photos: number;
      accepted_tos: boolean;
      for_hire: boolean;
    };
  }
}
