"use client"

import Image from 'next/image';
import type { Exhibition } from '@prisma/client';
import { useState } from 'react';

interface ClientProps {
  initialProjects: Exhibition[];
}

export default function ExhibitionsClient({ initialProjects }: ClientProps) {
  const [exhibitions] = useState<Exhibition[]>(initialProjects);

  return (
    <div className="h-full flex flex-col justify-start items-start gap-8 p-8 text-primary">
      {exhibitions.length > 0 ? (
        <div className="items w-full">
          {exhibitions.map((project, index) => (
          <div key={index} className="item flex flex-col gap-0 w-full">
            <h1 className="page-title">{project.title}</h1>
            <div className="flex flex-col md:flex-row items-start justify-between md:items-center w-full pb-4">
              <p className="text-primary/80 text-sm">{project.place}</p>
              <span className="block text-primary/50 text-xs">{project.period}</span>    
            </div>
            <h2 className="page-subtitle">{project.subtitle}</h2>
            <p className="text-primary/80 text-sm mb-4">{project.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
              {project.imgSrc.map((image, index) => (
                <Image key={index} src={image} alt={`Project Image ${index + 1}`} width={400} height={300} />
              ))}
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