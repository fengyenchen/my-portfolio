"use client"

import Image from 'next/image';
import Link from 'next/link';
import type { ProgrammingProject } from '@prisma/client';
import { useState } from 'react';
import LoadingCircleSpinner from '@/components/LoadingCircleSpinner';

interface ClientProps {
    initialProjects: ProgrammingProject[];
}

export default function ProgrammingProjectsPage({ initialProjects }: ClientProps) {
    const [projects] = useState<ProgrammingProject[]>(initialProjects);
    const [loadedImages, setLoadedImages] = useState<{ [key: number]: boolean }>({});

    if (projects.length === 0) {
        return (
            <div className="h-full flex flex-col justify-center items-center text-primary gap-4 w-full relative">
                <div className="fixed top-1/2 transform -translate-y-1/2 flex justify-center items-center text-primary/80">目前尚無程式設計作品</div>
            </div>
        );
    }

    return (
        <div className="h-full flex flex-col justify-start items-center text-primary gap-4 w-full relative">
            <div className="cards w-full grid grid-cols-1 gap-4">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="card border border-primary rounded p-4 w-full hover:bg-primary/5 transition flex flex-col justify-between"
                    >
                        <div className="flex flex-col grow">
                            <div className="relative w-full h-42 md:h-92 mb-4 rounded overflow-hidden flex items-center justify-center bg-primary/5">

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
        </div>
    );
}