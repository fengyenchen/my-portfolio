"use client"

import Link from "next/link";
import Image from "next/image";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

export default function Menu() {
  const items = [
    { name: 'About', path: '/about' },
    { name: 'Design Projects', path: '/design-projects' },
    { name: 'Programming Projects', path: '/programming-projects' },
    { name: 'Exhibitions', path: '/exhibitions' },
    { name: 'Contact', path: '/contact' },
  ];

  const socials = [
    { name: 'Email', url: 'mailto:feng20050504@gmail.com', icon: <AiOutlineMail className="w-6 h-6" /> },
    { name: 'GitHub', url: 'https://github.com/fengyenchen', icon: <AiOutlineGithub className="w-6 h-6" /> },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/fengyenchen/', icon: <AiOutlineLinkedin className="w-6 h-6" /> },
    { name: 'Instagram', url: 'https://www.instagram.com/yenchen_0504/', icon: <AiOutlineInstagram className="w-6 h-6" /> },
  ];

  return (
    <div className="menu hidden w-full h-full lg:flex flex-col items-center justify-start px-2 py-4 flex-1">
        <div className="position-relative top-0">
            {/* 大頭貼 */}
            <div className="w-24 h-24 rounded-full mx-auto mb-3 overflow-hidden border border-background shadow-sm transition">
                <Image
                src="/profile.jpg"
                width={100}
                height={100}
                alt="馮妍禎"
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition"
                />
            </div>
            
            <h1 className="text-lg font-bold text-center tracking-widest text-primary">馮妍禎</h1>
            <p className="text-center text-xs text-primary/60 font-mono mt-0.5 mb-6">NTU BA</p>

            <div className="flex items-center justify-center gap-6 w-full mb-4">
                {socials.map((social) => (
                <a
                    key={social.name}
                    href={social.url}
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
                className="flex justify-center items-center border border-primary/80 hover:bg-primary/80 px-4 py-2.5 rounded-md text-primary/80 hover:text-white text-sm font-mono font-bold tracking-wide transition"
            >
                {item.name}
            </Link>
            ))}
        </div>
    </div>
  );
}