import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../../generated/prisma/client";
import "dotenv/config";

const adapter = new PrismaMariaDb({
  host: process.env.DATABASE_HOST || 'localhost',
  user: process.env.DATABASE_USER || '',
  password: process.env.DATABASE_PASSWORD || '',
  database: process.env.DATABASE_NAME || '',
  port: parseInt(process.env.DATABASE_PORT || '3306'),
  allowPublicKeyRetrieval: true,
});
const prisma = new PrismaClient({ adapter });
export { prisma };