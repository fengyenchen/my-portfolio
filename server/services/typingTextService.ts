import { prisma } from "../db/prisma";

export async function getTypingText() {
  const data = await prisma.typingText.findMany();

  return data.map((item) => item.text);
}