import PhotographyClient from './PhotographyClient';
import { prisma } from '@/lib/db';

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