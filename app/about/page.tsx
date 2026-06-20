"use client"

import { useState, useEffect } from 'react';
import type { Profile, Education, Experience } from '@prisma/client';

export default function AboutPage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [educationList, setEducationList] = useState<Education[]>([]);
  const [experienceList, setExperienceList] = useState<Experience[]>([]);
  
  useEffect(() => {
    fetch("/api/about")
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          if (data.profile) {
            setProfile(data.profile);
          }
          if (Array.isArray(data.educations)) {
            setEducationList(data.educations);
          }
          if (Array.isArray(data.experiences)) {
            setExperienceList(data.experiences);
          }
        }
      })
      .catch((err) => console.error("撈取 About 資料失敗:", err));
  }, []);

  return (
    <div className="h-full flex flex-col justify-start items-start gap-8 p-8 text-primary">
      {profile ? (
        <div className="content">
          <h1 className="page-title">{profile?.name}</h1>
          <div className="bio-content" dangerouslySetInnerHTML={{ __html: profile.bio }} />
        </div>
      ) : (
        <></>
      )}

      {educationList.length > 0 ? (
        <div className="education w-full">
          <h2 className="page-subtitle">Education</h2>
          <div className="education-items flex flex-col gap-4 pl-2 w-full">
          { educationList.map((edu, index) => (
            <div key={edu.id || index} className="education-item flex flex-col hover:translate-x-1 transition">
              <h3 className="text-primary/80 font-bold">{edu.institution}</h3>
              <div className="flex flex-col md:flex-row md:justify-between justify-start md:items-center w-full">
                <h4 className="text-primary/80 text-sm">{edu.department}</h4>
                <span className="block text-primary/50 text-xs">{edu.period}</span>    
              </div>
            </div>
          ))}
          </div>
        </div>
      ) : (
        <></>
      )}
      
      {experienceList.length > 0 ? (
        <div className="experience w-full">
          <h2 className="page-subtitle">Experience</h2>
          <div className="experience-items flex flex-col gap-4 pl-2 w-full">
            {experienceList.map((exp, index) => (
              <div key={exp.id || index} className="experience-item flex flex-col hover:translate-x-1 transition">
                <h3 className="text-primary/80 font-bold">{exp.institution}</h3>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full">
                  <h4 className="text-primary/80 text-sm">{exp.role}</h4>
                  <span className="block text-primary/50 text-xs">{exp.period}</span>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      ) : (
        <></>
      )}
      
      <div className="space w-full pb-4"></div>
      
    </div>
  );
}
