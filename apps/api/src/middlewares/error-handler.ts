import { NextFunction, Request, Response } from "express";

export const errorHandler = (
  error: Error,
  _request: Request,
  response: Response,
  _next: NextFunction
): void => {
  response.status(500).json({
    message: "Internal server error",
    details: error.message
  });
};

