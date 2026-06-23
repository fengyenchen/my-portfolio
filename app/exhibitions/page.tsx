import { prisma } from '@/lib/db';
import ExhibitionsClient from './ExhibitionsClient';

// 每次請求都重新生成頁面，確保獲取最新的資料
export const revalidate = 0;

export default async function ExhibitionsPage() {
  const exhibitions = await prisma.exhibition.findMany({
    orderBy: { sortOrder: 'asc' }
  })

  return (
    <div className="exhibitions">

      <ExhibitionsClient initialProjects={exhibitions} />
      

    </div>
  );
}