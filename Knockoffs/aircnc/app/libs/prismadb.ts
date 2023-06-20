import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined;
}


//client either search for global.prisma or create a new one if not exist
const client = global.prisma || new PrismaClient();
//checks if there is no multiple instances of prismaclients
if(process.env.NODE_ENV !== 'production') globalThis.prisma = client;

export default client;
