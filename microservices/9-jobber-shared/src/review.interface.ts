// Used for notifications/messages when a review is posted.
export interface IReviewMessageDetails {
  gigId?: string;
  reviewerId?: string;
  sellerId?: string;
  review?: string;
  rating?: number;
  orderId?: string;
  createdAt?: string;
  type: string;
}

// defines a flexible structure for rating categories using an index signature.
export interface IRatingTypes {
  [key: string]: string;
}

// defines the schema for storing reviews in a database.
export interface IReviewDocument {
  _id?: string;
  gigId: string;
  reviewerId: string;
  sellerId: string;
  review: string;
  reviewerImage: string;
  rating: number;
  orderId: string;
  createdAt: Date | string;
  reviewerUsername: string;
  country: string;
  reviewType?: string;
}

//Defines a single rating category with its value and count.
export interface IRatingCategoryItem {
  value: number;
  count: number;
}

//Stores a breakdown of all rating categories (1-5 stars).
export interface IRatingCategories {
  five: IRatingCategoryItem;
  four: IRatingCategoryItem;
  three: IRatingCategoryItem;
  two: IRatingCategoryItem;
  one: IRatingCategoryItem;
}
