import { StatusCodes } from 'http-status-codes';

/**
 * Interface representing a structured error response.
 */
export interface IErrorResponse {
  message: string;    // Error message
  statusCode: number; // HTTP status code
  status: string;     // Status of the error (e.g., "error", "fail")
  comingFrom: string; // Source of the error
  serializeErrors(): IError; // Method to return the error object
}

/**
 * Interface defining the structure of an error object.
 */
export interface IError {
  message: string;
  statusCode: number;
  status: string;
  comingFrom: string;
}

/**
 * Abstract class for custom error handling.
 * All custom error classes must extend this class.
 */
export abstract class CustomError extends Error {
  abstract statusCode: number; // HTTP status code
  abstract status: string;     // Error status (e.g., "error")
  comingFrom: string;          // Source where the error occurred

  constructor(message: string, comingFrom: string) {
    super(message);
    this.comingFrom = comingFrom;
  }

  /**
   * Method to serialize the error response.
   */
  serializeErrors(): IError {
    return {
      message: this.message,
      statusCode: this.statusCode,
      status: this.status,
      comingFrom: this.comingFrom,
    };
  }
}

/**
 * BadRequestError - Represents a 400 Bad Request error.
 */
export class BadRequestError extends CustomError {
  statusCode = StatusCodes.BAD_REQUEST;
  status = 'error';

  constructor(message: string, comingFrom: string) {
    super(message, comingFrom);
  }
}

/**
 * NotFoundError - Represents a 404 Not Found error.
 */
export class NotFoundError extends CustomError {
  statusCode = StatusCodes.NOT_FOUND;
  status = 'error';

  constructor(message: string, comingFrom: string) {
    super(message, comingFrom);
  }
}

/**
 * NotAuthorizedError - Represents a 401 Unauthorized error.
 */
export class NotAuthorizedError extends CustomError {
  statusCode = StatusCodes.UNAUTHORIZED;
  status = 'error';

  constructor(message: string, comingFrom: string) {
    super(message, comingFrom);
  }
}

/**
 * FileTooLargeError - Represents a 413 Request Too Long error.
 */
export class FileTooLargeError extends CustomError {
  statusCode = StatusCodes.REQUEST_TOO_LONG;
  status = 'error';

  constructor(message: string, comingFrom: string) {
    super(message, comingFrom);
  }
}

/**
 * ServerError - Represents a 503 Service Unavailable error.
 */
export class ServerError extends CustomError {
  statusCode = StatusCodes.SERVICE_UNAVAILABLE;
  status = 'error';

  constructor(message: string, comingFrom: string) {
    super(message, comingFrom);
  }
}

/**
 * Interface for low-level system errors (like file system errors).
 */
export interface ErrnoException extends Error {
  errno?: number;   // Error number
  code?: string;    // Error code
  path?: string;    // File path (if applicable)
  syscall?: string; // System call that failed
  stack?: string;   // Stack trace of the error
}
