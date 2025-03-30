//Defines the structure of an offer related to a gig
export interface IOffer {
  [key: string]: string | number | boolean | undefined;
  gigTitle: string;
  price: number;
  description: string;
  deliveryInDays: number;
  oldDeliveryDate: string;
  newDeliveryDate: string;
  accepted: boolean;
  cancelled: boolean;
  reason?: string; // this is the reason for extending the delivery date
}

//Handles delivery extensions for an order.
export interface IExtendedDelivery {
  originalDate: string;
  newDate: string;
  days: number;
  reason: string;
  deliveryDateUpdate?: string;
}

//Represents the files delivered by the seller.
export interface IDeliveredWork {
  message: string;
  file: string;
  fileType: string;
  fileSize: number;
  fileName: string;
}

//Tracks events during the order lifecycle.
export interface IOrderEvents {
  placeOrder: string;
  requirements: string;
  orderStarted: string;
  deliveryDateUpdate?: string;
  orderDelivered?: string;
  buyerReview?: string;
  sellerReview?: string;
}

//Represents a review left by the buyer or seller.
export interface IOrderReview {
  rating: number;
  review: string;
  date?: string;
}

//Represents messages exchanged between the buyer and seller
//Contains order details, user information, and financial data.
export interface IOrderMessage {
  sellerId?: string;
  buyerId?: string;
  ongoingJobs?: number;
  completedJobs?: number;
  totalEarnings?: number;
  purchasedGigs?: string;
  recentDelivery?: string;
  type?: string;
  receiverEmail?: string;
  username?: string;
  template?: string;
  sender?: string;
  offerLink?: string;
  amount?: string;
  buyerUsername?: string;
  sellerUsername?: string;
  title?: string;
  description?: string;
  deliveryDays?: string;
  orderId?: string;
  invoiceId?: string;
  orderDue?: string;
  requirements?: string;
  orderUrl?: string;
  originalDate?: string;
  newDate?: string;
  reason?: string;
  subject?: string;
  header?: string;
  total?: string;
  message?: string;
  serviceFee?: string;
}

//Defines the full order structure.
export interface IOrderDocument {
  offer: IOffer;
  gigId: string;
  sellerId: string;
  sellerUsername: string;
  sellerImage: string;
  sellerEmail: string;
  gigCoverImage: string;
  gigMainTitle: string;
  gigBasicTitle: string;
  gigBasicDescription: string;
  buyerId: string;
  buyerUsername: string;
  buyerEmail: string;
  buyerImage: string;
  status: string;
  orderId: string;
  invoiceId: string;
  quantity: number;
  price: number;
  requestExtension?: IExtendedDelivery;
  serviceFee?: number;
  requirements?: string;
  approved?: boolean;
  cancelled?: boolean;
  delivered?: boolean;
  approvedAt?: string;
  deliveredWork?: IDeliveredWork[];
  dateOrdered?: string;
  events: IOrderEvents;
  buyerReview?: IOrderReview;
  sellerReview?: IOrderReview;
  paymentIntent?: string;
  
  currency?: string; // New field: USD, EUR, etc.
  paymentMethod?: string; // New field: PayPal, Credit Card, etc.
}

//Defines a notification for order updates , Tracks who sent and received the notification.
export interface IOrderNotifcation {
  _id?: string;
  userTo: string;
  senderUsername: string;
  senderPicture: string;
  receiverUsername: string;
  receiverPicture: string;
  isRead?: boolean;
  orderId: string;
  type?: string;
  message: string;
  rating?: number;
  createdAt: Date;
}
