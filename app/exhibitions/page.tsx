import { prisma } from '@/lib/db';
import ExhibitionsClient from './ExhibitionsClient';

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