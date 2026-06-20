import { prisma } from "@/lib/db";
import ProgrammingProjectsClient from "./ProgrammingProjectsClient";

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