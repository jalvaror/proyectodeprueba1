import { Router } from "express";

import { getDatabaseHealth, getHealth } from "./health.controller";

const healthRouter = Router();

healthRouter.get("/", getHealth);
healthRouter.get("/db", getDatabaseHealth);

export { healthRouter };
