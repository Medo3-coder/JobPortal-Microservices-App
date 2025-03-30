import { ObjectId } from "mongoose";

/**
 * Represents a buyer in the system.
 */
export interface IBuyerDocument {
  _id?: string | ObjectId; // Unique identifier for the buyer
  username?: string; // Buyer's username
  email?: string; // Buyer's email address
  profilePicture?: string; // URL of the buyer's profile picture
  country: string; // Buyer's country
  isSeller?: boolean; // Whether the buyer is also a seller
  purchasedGigs: string[]; // Array of purchased gig IDs
  createdAt?: Date | string; // Date when the account was created
  updatedAt?: Date | string; // Date when the account was last updated
}

/**
 * Represents the Redux action structure for managing buyer data in the store.
 */
export interface IReduxBuyer {
  type?: string; // Action type (e.g., 'SET_BUYER', 'UPDATE_BUYER')
  payload: IBuyerDocument; // Buyer data being stored or updated
}
