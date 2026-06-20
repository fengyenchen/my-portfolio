import { prisma } from "../db/prisma";

export async function getPhotographyList() {
  return await prisma.photography.findMany();
}