import mongoose, { ObjectId } from 'mongoose';
import { IOffer } from './order.interface';
import { ISellerGig } from './gig.interface';
import { ISellerDocument } from './seller.interface';

/**
 * Represents a conversation between two users (buyer & seller).
 */
export interface IConversationDocument extends Document {
  _id: mongoose.Types.ObjectId | string; // Unique conversation ID
  conversationId: string; // Unique string-based ID for the conversation
  senderUsername: string; // The username of the sender
  receiverUsername: string; // The username of the receiver
}

/**
 * Represents an individual message exchanged in a conversation.
 */
export interface IMessageDocument {
  _id?: string | ObjectId; // Message ID
  conversationId?: string; // ID of the conversation this message belongs to
  body?: string; // Message text content
  url?: string; // URL (if sending a link)
  file?: string; // Attached file (if any)
  fileType?: string; // Type of the file (e.g., 'image/png', 'pdf', etc.)
  fileSize?: string; // Size of the attached file
  fileName?: string; // Name of the file
  gigId?: string; // Associated gig ID
  sellerId?: string; // ID of the seller
  buyerId?: string; // ID of the buyer
  senderUsername?: string; // Sender’s username
  senderPicture?: string; // Sender’s profile picture URL
  receiverUsername?: string; // Receiver’s username
  receiverPicture?: string; // Receiver’s profile picture URL
  isRead?: boolean; // Whether the message has been read
  hasOffer?: boolean; // Whether the message includes an offer
  offer?: IOffer; // Offer details if applicable
  hasConversationId?: boolean; // If the message is linked to a conversation
  createdAt?: Date | string; // Timestamp when the message was sent
}

/**
 * Represents the details of an offer included in a message.
 */
export interface IMessageDetails {
  sender?: string; // Sender's name
  offerLink?: string; // Link to the offer
  amount?: string; // Offer amount (price)
  buyerUsername?: string; // Buyer's username
  sellerUsername?: string; // Seller's username
  title?: string; // Title of the gig
  description?: string; // Offer description
  deliveryDays?: string; // Estimated delivery time in days
  template?: string; // Message template (if any)
}

/**
 * Props required for rendering the chat box UI component.
 */
export interface IChatBoxProps {
  seller: IChatSellerProps; // Seller details
  buyer: IChatBuyerProps; // Buyer details
  gigId: string; // Gig associated with this chat
  onClose: () => void; // Function to close the chat UI
}

/**
 * Represents seller details in a chat conversation.
 */
export interface IChatSellerProps {
  _id: string; // Seller's unique ID
  username: string; // Seller's username
  profilePicture: string; // URL to the seller's profile picture
  responseTime: number; // Seller’s response time in hours
}

/**
 * Represents buyer details in a chat conversation.
 */
export interface IChatBuyerProps {
  _id: string; // Buyer's unique ID
  username: string; // Buyer's username
  profilePicture: string; // URL to the buyer's profile picture
}

/**
 * Props for rendering an individual chat message.
 */
export interface IChatMessageProps {
  message: IMessageDocument; // The actual message details
  seller?: ISellerDocument; // Seller’s details if available
  gig?: ISellerGig; // Gig details if available
}
