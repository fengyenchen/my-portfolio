"use client"

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const projects = [
    {
      title: "Personal Website",
      description: "用 Next.js 框架與 Tailwind CSS, React 搭配的個人網站。",
      image: "/programming-projects/personal-website.png",
      date: "2026",
      link: "https://fengyenchen-my-portfolio.vercel.app/",
      link2Desc: "Github",
      link2: "https://github.com/fengyenchen/my-portfolio"
    },
    {
      title: "BLOG-VUE",
      description: "用 Vue.js 框架與 Tailwind CSS 搭配的共享部落格。",
      image: "/programming-projects/blog-vue.png",
      date: "2026",
      link: "https://fengyenchen-blog-vue.vercel.app/",
      link2Desc: "Github",
      link2: "https://github.com/fengyenchen/blog-vue"
    },
    {
      title: "P5.js 生成式藝術",
      description: "用 P5.js 製作的生成式藝術作品，探索程式與視覺藝術的結合。",
      image: "/programming-projects/p5js.png",
      date: "2026",
      link: "https://openprocessing.org/user/538257/#sketches",
      link2Desc: "Objkt",
      link2: "https://objkt.com/users/tz2LNGCxCgLsho7zZtwe8iziAFD4Us98YspU/created"
    },
  ];

  return (
    <div className="h-full flex flex-col justify-start items-center text-primary gap-4 w-full">      
      <div className="cards w-full grid grid-cols-1 gap-4">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="card border border-primary rounded p-4 w-full hover:bg-primary/5 transition flex flex-col justify-between"
          >
            <div className="flex flex-col grow">
              <div className="relative w-full h-42 md:h-92 mb-4 rounded overflow-hidden">
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h2 className="text-primary font-bold text-lg">{project.title}</h2>
              <span className="block text-primary/60 text-xs mb-2">{project.date}</span>
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
      
      <div className="space w-full pb-4"></div>
    </div>
  );
}