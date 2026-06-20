import { prisma } from '@/lib/db';
import AboutClient from './AboutClient';

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
