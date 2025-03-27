import { ObjectId } from "mongoose";
import { IRatingCategories, IReviewDocument } from "./review.interface";
import { ISellerDocument } from "./seller.interface";

/**
 * Defines the possible types for gig properties.
 */
export type GigType = string | string[] | number | unknown | undefined;

/**
 * Represents the structure for creating a new gig.
 */
export interface ICreateGig extends Record<string, GigType> {
  sellerId?: string; // Unique seller identifier
  profilePicture?: string; // Seller's profile image
  title: string; // Gig title
  categories: string; // Main category
  description: string; // Detailed description of the gig
  subCategories: string[]; // List of subcategories
  tags: string[]; // Keywords associated with the gig
  price: number; // Gig price
  coverImage: string; // URL of the gig's cover image
  expectedDelivery: string; // Delivery time frame
  basicTitle: string; // Title of the basic package
  basicDescription: string; // Description of the basic package
}

/**
 * Represents a gig created by a seller.
 */
export interface ISellerGig {
  _id?: string | ObjectId; // Unique gig identifier
  id?: string | ObjectId; // Alternative ID for Elasticsearch
  sellerId?: string | ObjectId; // Seller's unique identifier
  title: string; // Gig title
  username?: string; // Seller's username
  profilePicture?: string; // Seller's profile image
  email?: string; // Seller's email address
  description: string; // Gig description
  active?: boolean; // Indicates if the gig is active
  categories: string; // Gig categories
  subCategories: string[]; // List of subcategories
  tags: string[]; // Keywords associated with the gig
  ratingsCount?: number; // Total number of ratings
  ratingSum?: number; // Sum of all ratings for average calculation
  ratingCategories?: IRatingCategories; // Detailed rating breakdown
  expectedDelivery: string; // Delivery time frame
  basicTitle: string; // Title of the basic package
  basicDescription: string; // Description of the basic package
  price: number; // Gig price
  coverImage: string; // URL of the gig's cover image
  createdAt?: Date | string; // Date the gig was created
  sortId?: number; // Sorting identifier

  /**
   * Converts the gig document to JSON format.
   ******************************************************
   * this is added here because we will use the json format of the document
   * at some point instead of the Mongoose document
   * the json object which will contain the virtual field "id" without the field "_id" will be added to elasticsearch
   * because "_id" is a reserved field name in elasticsearch.
   */
  toJSON?: () => unknown;
}

/**
 * Provides contextual data related to a gig.
 */
export interface IGigContext {
  gig: ISellerGig; // The gig object
  seller: ISellerDocument; // Seller information
  isSuccess?: boolean; // Indicates successful data fetch
  isLoading?: boolean; // Indicates if data is loading
}

/**
 * Defines the structure of props for a gig component.
 */
export interface IGigsProps {
  type?: string; // Type of gig display
  gig?: ISellerGig; // Gig object
}

/**
 * Represents the structure of a gig card item.
 */
export interface IGigCardItems {
  gig: ISellerGig; // Gig details
  linkTarget: boolean; // Determines link behavior
  showEditIcon: boolean; // Indicates if edit icon should be shown
}

/**
 * Represents the selected budget filter for gigs.
 */
export interface ISelectedBudget {
  minPrice: string; // Minimum price range
  maxPrice: string; // Maximum price range
}

/**
 * Represents the properties for displaying gig reviews.
 */
export interface IGigViewReviewsProps {
  showRatings: boolean; // Indicates if ratings should be shown
  reviews?: IReviewDocument[]; // List of reviews
}

/**
 * Represents structured gig information for display.
 */
export interface IGigInfo {
  total: number | string; // Total number of gigs or earnings
  title: string; // Display title
  bgColor: string; // Background color
}

/**
 * Represents properties for displaying top gigs in different categories.
 */
export interface IGigTopProps {
  gigs: ISellerGig[]; // List of top gigs
  title?: string; // Section title
  subTitle?: string; // Section subtitle
  category?: string; // Category filter
  width: string; // Width of the component
  type: string; // Type of gig display
}
