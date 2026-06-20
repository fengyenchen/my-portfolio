import { prisma } from "../db/prisma";

export async function getAboutPageData() {
  const [profile, educations, experiences] = await Promise.all([
    prisma.profile.findFirst(), // 一筆簡介資料
    prisma.education.findMany(),
    prisma.experience.findMany(),
  ]);

  return {
    profile,
    educations,
    experiences,
  };
}