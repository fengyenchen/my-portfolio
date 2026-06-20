"use client"

import Image from 'next/image';
import Link from 'next/link';
import type { ProgrammingProject } from '@prisma/client';
import { useState } from 'react';

interface ClientProps {
  initialProjects: ProgrammingProject[];
}

export default function ProgrammingProjectsPage({ initialProjects }: ClientProps) {
    const [projects] = useState<ProgrammingProject[]>(initialProjects);

    return (
        <div className="h-full flex flex-col justify-start items-center text-primary gap-4 w-full">      
            {projects.length > 0 ? (
                <div className="cards w-full grid grid-cols-1 gap-4">
                {projects.map((project, index) => (
                    <div 
                    key={index}
                    className="card border border-primary rounded p-4 w-full hover:bg-primary/5 transition flex flex-col justify-between"
                    >
                    <div className="flex flex-col grow">
                        <div className="relative w-full h-42 md:h-92 mb-4 rounded overflow-hidden">
                        <Image 
                            src={project.imgSrc}
                            alt={project.title}
                            fill
                            className="object-cover"
                        />
                        </div>

                        <h2 className="text-primary font-bold text-lg">{project.title}</h2>
                        <span className="block text-primary/60 text-xs mb-2">{project.year}</span>
                        <h3 className="text-primary/80 text-sm mb-4 grow">{project.description}</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-auto">
                        <Link 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block w-full text-center px-4 py-2 bg-primary text-white border border-primary rounded hover:bg-primary/80 transition cursor-pointer text-sm"
                        >
                        查看網站
                        </Link>
                        
                        <Link 
                        href={project.link2} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block w-full text-center px-4 py-2 bg-sub-background text-primary border border-primary rounded hover:bg-primary/10 transition cursor-pointer text-sm"
                        >
                        {project.link2Desc}
                        </Link>
                    </div>
                    </div>
                ))}
                </div>
            ) : (
                <></>
            )}
            
        </div>
    );
}