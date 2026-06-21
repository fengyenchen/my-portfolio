"use client"

import Image from 'next/image';
import type { Exhibition } from '@prisma/client';
import { useState } from 'react';
import LoadingCircleSpinner from '@/components/LoadingCircleSpinner';

interface ClientProps {
  initialProjects: Exhibition[];
}

export default function ExhibitionsClient({ initialProjects }: ClientProps) {
  const [exhibitions] = useState<Exhibition[]>(initialProjects);
  
  const [loadedImages, setLoadedImages] = useState<{ [key: string]: boolean }>({});

  // 處理圖片載入完成的函式
  const handleImageLoad = (key: string) => {
    setLoadedImages((prev) => ({
      ...prev,
      [key]: true,
    }));
  };

  if (exhibitions.length === 0) {
    return (
      <div className="h-full flex flex-col justify-start items-start gap-8 p-8 text-primary relative">
        目前尚無展覽資料
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col justify-start items-start gap-8 p-8 text-primary">
      <div className="items w-full flex flex-col gap-8">
        {exhibitions.map((project, projectIndex) => (
          <div key={project.id || projectIndex} className="item flex flex-col gap-0 w-full">
            <h1 className="page-title">{project.title}</h1>
            <div className="flex flex-col md:flex-row items-start justify-between md:items-center w-full pb-4">
              <p className="text-primary/80 text-sm">{project.place}</p>
              <span className="block text-primary/50 text-xs">{project.period}</span>    
            </div>
            <h2 className="page-subtitle">{project.subtitle}</h2>
            <p className="text-primary/80 text-sm mb-4">{project.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
              {project.imgSrc.map((image, imageIndex) => {
                const imageKey = `${projectIndex}-${imageIndex}`;
                const isLoaded = loadedImages[imageKey];

                return (
                  <div key={imageIndex} className="relative w-full aspect-4/3 bg-primary/5 rounded overflow-hidden">

                    {!isLoaded && (
                      <div className="absolute inset-0 flex justify-center items-center bg-primary/5 z-10">
                        <LoadingCircleSpinner />
                      </div>
                    )}

                    <Image 
                      src={image} 
                      alt={`${project.title} - Image ${imageIndex + 1}`} 
                      fill
                      className={`object-cover transition ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      onLoad={() => handleImageLoad(imageKey)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}