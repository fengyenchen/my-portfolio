import { prisma } from "@/lib/db";
import DesignProjectsClient from "./DesignProjectsClient";

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