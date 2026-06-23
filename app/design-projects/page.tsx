import { prisma } from "@/lib/db";
import DesignProjectsClient from "./DesignProjectsClient";

// 每次請求都重新生成頁面，確保獲取最新的資料
export const revalidate = 0;

export default async function DesignProjectsPage() {
  const projects = await prisma.designProject.findMany({
    orderBy: { sortOrder: 'asc' }
  });

  return (
    <div className="design-projects">

      <DesignProjectsClient initialProjects={projects} />

    </div>
  );
}