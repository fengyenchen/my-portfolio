import { prisma } from "../db/prisma";

// 設計
export async function getDesignProjects() {
  return await prisma.designProject.findMany();
}

// 程式
export async function getProgrammingProjects() {
  return await prisma.programmingProject.findMany();
}