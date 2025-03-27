declare global {
  namespace Express {
    //This allows middleware and controllers to access the authenticated user's details easily.
    interface Request {
      currentUser?: IAuthPayload;
    }
  }
}

//Represents the payload stored in a JWT
export interface IAuthPayload {
  id: number;
  username: string;
  email: string;
  iat: number;     // iat (Issued At): Optional field indicating when the token was issued.
}

//Stores basic user information and used for user registration or profile updates
export interface IAuth {
  username?: string;
  password?: string;
  email?: string;
  country?: string;
  profilePicture?: string;
}

export interface IAuthDocument {
  id?: number;
  profilePublicId?: number;
  username?: string;
  email?: string;
  password?: string;
  country?: string;
  profilePicture?: string;
  emailVerified?: number;
  emailVerificationToken?: string;    //Used for email verification
  browserName?: string;
  deviceType?: string;
  otp?: string;                 //Used for OTP-based authentication
  otpExpiration?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  passwordResetToken?: string;
  passwordResetExpires?: Date;
  comparePassword(password: string, hashedPassword: string): Promise<boolean>;
  hashPassword(password: string): Promise<string>;
}


//Represents buyer details in a messaging system, including name, email, profile picture, and country.
export interface IAuthBuyerMessageDetails {
  username?: string;
  profilePicture?: string;
  email?: string;
  country?: string;
  createdAt?: Date;
  type?: string;
}

//Stores email details for sending verification, password reset, or OTP messages.
export interface IEmailMessageDetails {
  receiverEmail?: string;
  template?: string;
  verifyLink?: string;
  resetLink?: string;
  username?: string;
  otp?: string
}

//Represents the payload required for user registration.
export interface ISignUpPayload {
  [key: string]: string;
  username: string;
  password: string;
  email: string;
  country: string;
  profilePicture: string;
}

//Contains the data needed for user authentication (sign-in).
export interface ISignInPayload {
  [key: string]: string;
  username: string;
  password: string;
}

//Used when requesting a password reset link.
export interface IForgotPassword {
  email: string;
}

//Contains the new password and its confirmation for resetting the password.
export interface IResetPassword {
  [key: string]: string;
  password: string;
  confirmPassword: string;
}

//Represents authentication-related data stored in Redux.
export interface IReduxAuthPayload {
  authInfo?: IAuthDocument
}

//Represents a Redux action for adding an authenticated user.
export interface IReduxAddAuthUser {
  type: string;
  payload: IReduxAuthPayload;
}

//Represents a Redux action for logging out a user.
export interface IReduxLogout {
  type: string;
  payload: boolean;
}

//Defines the structure of authentication-related API responses.
export interface IAuthResponse {
  message: string;
}

//Represents the authenticated user after login.
export interface IAuthUser {
  profilePublicId: string | null;
  country: string | null;
  createdAt: Date | null;
  email: string;
  emailVerificationToken: string | null;
  emailVerified: boolean | null,
  id: number | null;
  passwordResetExpires: Date | null;
  passwordResetToken: null | null;
  profilePicture: string;
  updatedAt: Date | null;
  username: string | null;
}


/*
The Index Signature:

[key: string]: string; allows additional properties to be added dynamically as long as their values are string.


 -- Without Index Signature (Strict)

const user: ISignUpPayload = {
  username: "JohnDoe",
  password: "secure123",
  email: "john@example.com",
  country: "USA",
  profilePicture: "john.jpg",
  age: "30", // ❌ Error: Property 'age' does not exist on type 'ISignUpPayload'
};
 -- With Index Signature (Flexible)

const user: ISignUpPayload = {
  username: "JohnDoe",
  password: "secure123",
  email: "john@example.com",
  country: "USA",
  profilePicture: "john.jpg",
  age: "30", // ✅ Allowed because of index signature
  phone: "123-456-7890", // ✅ Also allowed
};

*/
