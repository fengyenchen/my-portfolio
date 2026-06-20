import { prisma } from '@/lib/db';
import HomeClient from './HomeClient';

export default async function HomePage() {
  const typingTexts = await prisma.typingText.findMany()

  return (
    <div className="home h-full">
      <HomeClient initialTypingTexts={typingTexts} />
    </div>
  );
}
