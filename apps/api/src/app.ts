import cors from "cors";
import express from "express";
import helmet from "helmet";

import { env } from "./config/env";
import { errorHandler } from "./middlewares/error-handler";
import { healthRouter } from "./modules/health/health.routes";

export const createApp = () => {
  const app = express();

  app.use(helmet());
  app.use(
    cors({
      origin: env.corsOrigin
    })
  );
  app.use(express.json());

  app.get("/", (_request, response) => {
    response.json({
      name: "portfolio-api",
      status: "running"
    });
  });

  app.use("/api/health", healthRouter);
  app.use(errorHandler);

  return app;
};

