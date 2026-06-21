"use client";

import Image from 'next/image';
import Link from 'next/link';
import type { DesignProject } from '@prisma/client';
import { useState } from 'react';
import LoadingCircleSpinner from '@/components/LoadingCircleSpinner';

interface ClientProps {
    initialProjects: DesignProject[];
}

export default function DesignProjectsClient({ initialProjects }: ClientProps) {
    const [projects] = useState<DesignProject[]>(initialProjects);
    const [loadedImages, setLoadedImages] = useState<{ [key: number]: boolean }>({});

    if (projects.length === 0) {
        return (
            <div className="h-full flex flex-col justify-center items-center text-primary gap-4 w-full relative">
                <div className="fixed top-1/2 transform -translate-y-1/2 flex justify-center items-center text-primary/80">目前尚無設計作品</div>
            </div>
        );
    }

    return (
        <div className="h-full flex flex-col justify-start items-center text-primary gap-4 w-full">
            <div className="cards relative w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="card border border-primary rounded p-4 w-full hover:bg-primary/5 transition flex flex-col justify-between"
                    >
                        <div className="flex flex-col grow">
                            <div className="relative w-full h-48 mb-4 rounded overflow-hidden flex items-center justify-center bg-primary/5 aspect-video">

                                {!loadedImages[index] && (
                                    <div className="absolute inset-0 flex items-center justify-center z-10">
                                        <LoadingCircleSpinner />
                                    </div>
                                )}

                                <Image
                                    src={project.imgSrc}
                                    alt={project.title}
                                    fill
                                    className={`object-cover transition ${loadedImages[index] ? 'opacity-100' : 'opacity-0'}`}
                                    onLoad={() => setLoadedImages(prev => ({ ...prev, [index]: true }))}
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

        </div>
    );
}