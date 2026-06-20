import { prisma } from "../db/prisma";

export async function getExhibitions() {
  return await prisma.exhibition.findMany();
}