"use client"

import Image from 'next/image';
import Link from 'next/link';
import type { DesignProject } from '@prisma/client';
import { useState, useEffect } from 'react';

export default function DesignProjectsPage() {
  const [projects, setProjects] = useState<DesignProject[]>([]);
  useEffect(() => {
    fetch("/api/project?type=design")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setProjects(data);
        }
      })
      .catch((err) => console.error("撈取設計作品資料失敗:", err));
  }, []);

  return (
    <div className="h-full flex flex-col justify-start items-center text-primary gap-4 w-full">
      {projects.length > 0 ? (
        <div className="cards w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="card border border-primary rounded p-4 w-full hover:bg-primary/5 transition flex flex-col justify-between"
            >
              <div className="flex flex-col grow">
                <div className="relative w-full h-48 mb-4 rounded overflow-hidden">
                  <Image 
                    src={project.imgSrc}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <h2 className="text-primary font-bold text-lg mb-1">{project.title}</h2>
                <p className="text-primary/80 text-sm mb-3">{project.description}</p>
                
                {project.tags && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((t, i) => (
                      <span key={i} className="px-2 py-1 bg-primary/5 text-primary/80 text-xs hover:bg-primary/10 transition rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <div className="w-full">
                <Link 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full text-center px-4 py-2 bg-primary text-white rounded hover:bg-primary/80 transition cursor-pointer"
                >
                  查看作品
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}

      <div className="space w-full pb-4"></div>
      
    </div>
  );
}