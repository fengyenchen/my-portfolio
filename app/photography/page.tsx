import PhotographyClient from './PhotographyClient';
import { prisma } from '@/lib/db';

// 每次請求都重新生成頁面，確保獲取最新的資料
export const revalidate = 0;

export default async function PhotographyPage() {
  const photographs = await prisma.photography.findMany({
    orderBy: { sortOrder: 'asc' }
  })

  return (
    <div className="photography ">

      <PhotographyClient initialPhotographs={photographs} />

    </div>
  );
}