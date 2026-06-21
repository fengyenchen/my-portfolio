"use client"

import Link from "next/link";
import Image from "next/image";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import LoadingCircleSpinner from "@/components/LoadingCircleSpinner";
import { useState } from "react";

interface MenuProps {
  info: {
    name: string
    role: string
    imgSrc: string
    email: string
    github: string
    linkedin: string
    instagram: string
  } | null // 預防資料庫是空的時候
}

export default function Menu({ info }: MenuProps) {
  const items = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Design Projects', path: '/design-projects' },
    { name: 'Programming Projects', path: '/programming-projects' },
    { name: 'Exhibitions', path: '/exhibitions' },
    { name: 'Photography', path: '/photography' },
  ];

  const socials = [
    { name: 'Email', url: info?.email, icon: <AiOutlineMail className="w-6 h-6" /> },
    { name: 'GitHub', url: info?.github, icon: <AiOutlineGithub className="w-6 h-6" /> },
    { name: 'LinkedIn', url: info?.linkedin, icon: <AiOutlineLinkedin className="w-6 h-6" /> },
    { name: 'Instagram', url: info?.instagram, icon: <AiOutlineInstagram className="w-6 h-6" /> },
  ];

  const [loadedImage, setLoadedImage] = useState<boolean>(false);

  return (
    <div className="menu hidden w-full h-full lg:flex flex-col items-center justify-start px-2 py-4 flex-1">
      <div className="position-relative top-0">
        {/* 大頭貼 */}
        <div className="w-24 h-24 rounded-full mx-auto mb-3 overflow-hidden bg-primary/5 border border-background shadow-sm relative transition">

          {!loadedImage && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <LoadingCircleSpinner />
            </div>
          )}

          <Image
            src={info?.imgSrc || 'https://lusxdwrmykhitndhsbwp.supabase.co/storage/v1/object/public/my-portfolio/favicon.png'}
            alt="馮妍禎"
            fill
            sizes="96px"
            className={`object-cover w-full h-full grayscale hover:grayscale-0 transition-opacity duration-300 ${loadedImage ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setLoadedImage(true)}
            priority
          />
        </div>

        <h1 className="text-lg font-bold text-center tracking-widest text-primary">{info?.name}</h1>
        <p className="text-center text-xs text-primary/60 font-mono mt-0.5 mb-6">{info?.role}</p>

        <div className="flex items-center justify-center gap-6 w-full mb-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url || '/'}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-primary/80 hover:text-primary transition rounded-full hover:bg-primary/5"
              title={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* 選單列表 */}
      <div className="w-full flex flex-col gap-4 pb-4">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.path}
            className="flex justify-center items-center border border-primary/80 hover:bg-primary px-4 py-2.5 rounded-md text-primary/80 hover:text-white text-sm font-mono font-bold tracking-wide transition"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}