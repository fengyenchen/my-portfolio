import { prisma } from '@/lib/db';
import HomeClient from './HomeClient';

// 每次請求都重新生成頁面，確保獲取最新的資料
export const revalidate = 0;

export default async function HomePage() {
  const typingTexts = await prisma.typingText.findMany()

  return (
    <div className="home h-full">
      <HomeClient initialTypingTexts={typingTexts} />
    </div>
  );
}
