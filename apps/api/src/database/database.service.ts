import { prisma } from "./prisma";

export const checkDatabaseConnection = async () => {
  await prisma.$queryRaw`SELECT 1`;

  return {
    status: "connected"
  };
};

