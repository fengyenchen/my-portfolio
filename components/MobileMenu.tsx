"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

const items = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Design Projects", path: "/design-projects" },
    { name: "Programming Projects", path: "/programming-projects" },
    { name: "Exhibitions", path: "/exhibitions" },
    { name: 'Photography', path: '/photography' },
];

const socials = [
    { name: 'Email', url: 'mailto:feng20050504@gmail.com', icon: <AiOutlineMail className="w-6 h-6" /> },
    { name: 'GitHub', url: 'https://github.com/fengyenchen', icon: <AiOutlineGithub className="w-6 h-6" /> },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/fengyenchen/', icon: <AiOutlineLinkedin className="w-6 h-6" /> },
    { name: 'Instagram', url: 'https://www.instagram.com/yenchen_0504/', icon: <AiOutlineInstagram className="w-6 h-6" /> },
  ];

export default function Hamburger() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="lg:hidden flex items-center justify-end">
        
        {/* 漢堡按鈕 */}
        <button 
            onClick={() => setIsOpen(true)}
            className="text-primary bg-sub-background p-1 rounded border border-primary focus:outline-none flex items-center"
        >
            <Menu className="w-6 h-6" />
        </button>

        {/* 側邊欄動畫 */}
        <AnimatePresence>
            {isOpen && (
            <>
                {/* 半透明背景遮罩 */}
                <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                className="fixed inset-0 bg-primary z-50"
                />

                {/* 側邊導覽欄主體 */}
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", bounce: 0, duration: 0.35 }}
                    className="fixed right-0 top-0 h-full w-64 bg-sub-background shadow-sm z-50 p-6 flex flex-col gap-6"
                    >
                    {/* 關閉按鈕 */}
                    <div className="flex justify-end">
                        <button onClick={() => setIsOpen(false)} className="p-1">
                        <X className="w-6 h-6 text-primary" />
                        </button>
                    </div>

                    {/* 選單連結群組 */}
                    <nav className="flex flex-col gap-2 text-sm font-medium text-primary">
                        {items.map((link) => (
                            <Link
                            key={link.path}
                            href={link.path}
                            onClick={() => setIsOpen(false)}
                            className="py-2 rounded-lg font-mono text-center transition-all duration-200 hover:bg-primary/5"
                            >
                            {link.name}
                            </Link>
                        ))}
                    </nav>
                    {/* 社交媒體圖示群組 */}
                    <div className="flex items-center justify-center gap-0 w-full mb-4">
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
                </motion.div>
            </>
            )}
        </AnimatePresence>
        </div>
    );
}