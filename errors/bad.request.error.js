import APIError from './api.error.js';
import { StatusCodes } from 'http-status-codes';

class BadRequestError extends APIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

export default BadRequestError;
