import { prisma } from '@/lib/db';
import AboutClient from './AboutClient';

// 每次請求都重新生成頁面，確保獲取最新的資料
export const revalidate = 0;

export default async function AboutPage() {
  const profile = await prisma.profile.findFirst();
  const educationList = await prisma.education.findMany({
    orderBy: { sortOrder: 'asc' }
  })
  const experienceList = await prisma.experience.findMany({
    orderBy: { sortOrder: 'asc' }
  })
  const skills = await prisma.skill.findMany({
    orderBy: { sortOrder: 'asc' }
  })

  return (
    <div className="about">

      <AboutClient initialProfile={profile} initialEducations={educationList} initialExperiences={experienceList} initialSkills={skills} />

    </div>
  );
}
