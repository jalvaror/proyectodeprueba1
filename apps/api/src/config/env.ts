const toNumber = (value: string | undefined, fallback: number): number => {
  const parsed = Number(value);
  return Number.isNaN(parsed) ? fallback : parsed;
};

export const env = {
  port: toNumber(process.env.PORT, 3000),
  nodeEnv: process.env.NODE_ENV ?? "development",
  corsOrigin: process.env.CORS_ORIGIN ?? "*",
  databaseUrl: process.env.DATABASE_URL ?? ""
};
