import JWT from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { NotAuthorizedError } from './error-handler';

/**
 * List of allowed token identifiers for API Gateway verification.
 */
const tokens: string[] = ['auth', 'seller', 'gig', 'search', 'buyer', 'message', 'order', 'review'];


export function verifyGatewayRequest(req: Request, res: Response, next: NextFunction): void {
  if (!req.headers?.gatewaytoken) {
    throw new NotAuthorizedError('Invalid request', 'verifyGatewayRequest() - Missing or invalid gateway token');
  }

  const token: string = req.headers?.gatewaytoken as string;
  if (!token) {
    throw new NotAuthorizedError('Invalid request', 'verifyGatewayRequest() - Missing or invalid gateway token');
  }

  try {
    const payload: { id: string, iat: number } = JWT.verify(token, 'secret') as { id: string, iat: number };
    if (!token.includes(payload.id)) {  // payload.id is one of those 'auth', 'seller', 'gig
      throw new NotAuthorizedError('Invalid request', 'verifyGatewayRequest() method: Request payload is invalid');
    }
  } catch (error) {
    throw new NotAuthorizedError('Invalid request', 'verifyGatewayRequest() - Missing or invalid gateway token');
  }
}
