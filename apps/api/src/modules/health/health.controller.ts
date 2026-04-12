import { Request, Response } from "express";

import { checkDatabaseConnection } from "../../database/database.service";
import { getHealthStatus } from "./health.service";

export const getHealth = (_request: Request, response: Response): void => {
  response.status(200).json(getHealthStatus());
};

export const getDatabaseHealth = async (
  _request: Request,
  response: Response
): Promise<void> => {
  try {
    const database = await checkDatabaseConnection();

    response.status(200).json({
      status: "ok",
      database
    });
  } catch (error) {
    response.status(503).json({
      status: "error",
      database: "disconnected",
      message: error instanceof Error ? error.message : "Database unavailable"
    });
  }
};
