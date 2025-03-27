/**
 * Interface representing the dynamic values (locals) used in email templates.
 */
export interface IEmailLocals {
  sender?: string;          // The sender's name or identifier
  appLink: string;          // Link to the application or website
  appIcon: string;          // URL of the application's logo/icon

  // Offer-related details
  offerLink?: string;       // Link to the offer
  amount?: string;          // Offer amount
  buyerUsername?: string;   // Buyer's username
  sellerUsername?: string;  // Seller's username
  title?: string;           // Offer title
  description?: string;     // Description of the offer
  deliveryDays?: string;    // Delivery time in days

  // Order-related details
  orderId?: string;         // Unique order identifier
  orderDue?: string;        // Due date for the order
  requirements?: string;    // Order requirements from the buyer
  orderUrl?: string;        // URL to view the order

  // Extended delivery details
  originalDate?: string;    // Original delivery date
  newDate?: string;         // Updated delivery date
  reason?: string;          // Reason for extending the delivery date

  // Email content-related fields
  subject?: string;         // Email subject
  header?: string;          // Email header text
  type?: string;            // Type of email (e.g., "order", "offer", "notification")
  message?: string;         // Main email body content

  // Payment-related details
  serviceFee?: string;      // Any service fees associated with the order
  total?: string;           // Total amount of the transaction

  // Authentication-related fields
  username?: string;        // User's username (used in verification emails)
  verifyLink?: string;      // Link for email verification
  resetLink?: string;       // Link for password reset
  otp?: string;             // One-time password (OTP) for authentication
}
