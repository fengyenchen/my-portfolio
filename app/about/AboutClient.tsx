"use client"

import { useState } from 'react';
import type { Profile, Education, Experience, Skill } from '@prisma/client';

interface ClientProps {
    initialProfile: Profile | null;
    initialEducations: Education[];
    initialExperiences: Experience[];
    initialSkills: Skill[];
}

export default function AboutPage({ initialProfile, initialEducations, initialExperiences, initialSkills }: ClientProps) {
    const [profile] = useState<Profile | null>(initialProfile);
    const [educationList] = useState<Education[]>(initialEducations);
    const [experienceList] = useState<Experience[]>(initialExperiences);
    const [skills] = useState<Skill[]>(initialSkills);

    const isEmpty = !profile && educationList.length === 0 && experienceList.length === 0 && skills.length === 0

    if (isEmpty) {
        return (
            <div className="h-full w-full flex flex-col justify-center items-center gap-8 p-8 text-primary relative">
                <div className="fixed top-1/2 transform -translate-y-1/2 flex justify-center items-center text-primary/80">目前尚無簡介</div>
            </div>

        );
    }

    return (
        <div className="h-full w-full flex flex-col justify-start items-start gap-8 p-8 text-primary relative">
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
                        {educationList.map((edu, index) => (
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

            {skills.length > 0 ? (
                <div className="skills w-full">
                    <h2 className="page-subtitle">Skills</h2>

                    <div className="skills-items flex flex-col gap-4 pl-2 w-full">
                        <div className="frontend">
                            <h3 className="text-primary/80 font-bold mb-2">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.filter((skill) => skill.category === "Frontend").map((skill, index) => (
                                    <div key={skill.id || index} className="frontend-item bg-primary/6 hover:bg-primary/10 transition text-primary/80 text-sm font-mono px-2 rounded-full">
                                        {skill.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="backend">
                            <h3 className="text-primary/80 font-bold mb-2">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.filter((skill) => skill.category === "Backend").map((skill, index) => (
                                    <div key={skill.id || index} className="backend-item bg-primary/6 hover:bg-primary/10 transition text-primary/80 text-sm font-mono px-2 rounded-full">
                                        {skill.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="tools">
                            <h3 className="text-primary/80 font-bold mb-2">Tools</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.filter((skill) => skill.category === "Tools").map((skill, index) => (
                                    <div key={skill.id || index} className="tools-item bg-primary/6 hover:bg-primary/10 transition text-primary/80 text-sm font-mono px-2 rounded-full">
                                        {skill.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="database">
                            <h3 className="text-primary/80 font-bold mb-2">Database</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.filter((skill) => skill.category === "Database").map((skill, index) => (
                                    <div key={skill.id || index} className="database-item bg-primary/6 hover:bg-primary/10 transition text-primary/80 text-sm font-mono px-2 rounded-full">
                                        {skill.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="design">
                            <h3 className="text-primary/80 font-bold mb-2">Design</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.filter((skill) => skill.category === "Design").map((skill, index) => (
                                    <div key={skill.id || index} className="design-item bg-primary/6 hover:bg-primary/10 transition text-primary/80 text-sm font-mono px-2 rounded-full">
                                        {skill.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            ) : (
                <></>
            )}

        </div>
    );
}
