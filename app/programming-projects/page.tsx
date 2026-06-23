import { prisma } from "@/lib/db";
import ProgrammingProjectsClient from "./ProgrammingProjectsClient";

// 每次請求都重新生成頁面，確保獲取最新的資料
export const revalidate = 0;

export default async function ProgrammingProjectsPage() {
  const projects = await prisma.programmingProject.findMany({
    orderBy: { sortOrder: 'asc' }
  });

  return (
    <div className="programming-projects">      
      
      <ProgrammingProjectsClient initialProjects={projects} />

    </div>
  );
}