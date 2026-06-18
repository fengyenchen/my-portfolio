"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const NAV_LINKS = [
    { name: "首頁", href: "/" },
    { name: "關於我", href: "/about" },
    { name: "設計作品", href: "/design-projects" },
    { name: "程式作品", href: "/programming-projects" },
    { name: "展覽經歷", href: "/exhibitions" },
    { name: "聯絡我", href: "/contact" },
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
                className="fixed right-0 top-0 h-full w-64 bg-white shadow-sm z-50 p-6 flex flex-col gap-6"
                >
                {/* 關閉按鈕 */}
                <div className="flex justify-end">
                    <button onClick={() => setIsOpen(false)} className="p-1">
                    <X className="w-6 h-6 text-primary" />
                    </button>
                </div>

                {/* 選單連結群組 */}
                <nav className="flex flex-col gap-2 text-sm font-medium text-primary">
                    {NAV_LINKS.map((link) => (
                        <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="py-2 rounded-lg text-center transition-all duration-200 hover:bg-primary/5"
                        >
                        {link.name}
                        </Link>
                    ))}
                </nav>
                </motion.div>
            </>
            )}
        </AnimatePresence>
        </div>
    );
}