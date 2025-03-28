import JWT from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { NotAuthorizedError } from './error-handler';

/**
 * List of allowed token identifiers for API Gateway verification.
 */
const tokens: string[] = ['auth', 'seller', 'gig', 'search', 'buyer', 'message', 'order', 'review'];


/**
 * Middleware to verify requests coming from the API Gateway.
 * Ensures that the request contains a valid `gatewaytoken` in headers.
 */

export function verifyGatewayRequest(req: Request, res: Response, next: NextFunction): void {
  if (!req.headers?.gatewaytoken) {
    throw new NotAuthorizedError('Invalid request', 'verifyGatewayRequest() - Missing or invalid gateway token');
  }

  const token: string = req.headers?.gatewaytoken as string;
  if (!token) {
    throw new NotAuthorizedError('Invalid request', 'verifyGatewayRequest() - Missing or invalid gateway token');
  }

  try {
    const payload: { id: string, iat: number } = JWT.verify(token,  process.env.JWT_SECRET || 'default_secret') as { id: string, iat: number };

    // Ensure the token's payload ID is in the allowed list
    if (!token.includes(payload.id)) {
      throw new NotAuthorizedError('Invalid request', 'verifyGatewayRequest() method: Request payload is invalid');
    }
  } catch (error) {
    throw new NotAuthorizedError('Invalid request', 'verifyGatewayRequest() - Missing or invalid gateway token');
  }


  next(); // Proceed to the next middleware

}
