import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import "dotenv/config";


import { PrismaClient } from '../../generated/prisma/client';


const adapter = new PrismaMariaDb({
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT || '3306'),
    user: process.env.DATABASE_USER || '',
    password: process.env.DATABASE_PASSWORD || '',
    database: process.env.DATABASE_NAME || ''
});

const globalPrisma = globalThis as unknown as {prisma?: PrismaClient}

export const prisma: PrismaClient = globalPrisma.prisma ?? new PrismaClient({adapter});
