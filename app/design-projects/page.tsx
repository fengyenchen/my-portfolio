"use client"

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const projects = [
    {
      title: 'A Promise with Time',
      description: '這篇創作目的是重新詮釋經典的白蛇故事，將其融入現代的社會背景，探討愛情、信任與人性。',
      image: '/design-projects/a-promise-with-time.png',
      link: 'https://fengyenchen.github.io/my-page/arts/A%20Promise%20with%20Time/A%20Promise%20with%20Time.html',
      tag: ['漫畫', 'Illustration', '故事創作']
    },
    {
      title: '演講海報設計',
      description: 'VJ 黃芮蓁的演講海報設計，透過視覺元素傳達演講主題與氛圍。',
      image: '/design-projects/251222-vj.png',
      link: '',
      tag: ['海報設計', 'Illustration', '視覺設計']
    },
    {
      title: 'Daily Life in the Park',
      description: '這是一組以「公園」為靈感的作品。公園是城市裡最貼近日常的角落，不同的物件在這裡交織出秩序、休憩與生活的片段。',
      image: '/design-projects/daily-life-in-the-park.png',
      link: 'https://fengyenchen.github.io/my-page/arts/Daily%20Life%20in%20the%20Park/Daily%20Life%20in%20the%20Park.html',
      tag: ['插畫', 'Illustration', '生活觀察']
    },
    {
      title: '內心之旅',
      description: '探索自我成長、情感變化與內在世界的多樣面貌。',
      image: '/design-projects/inner-journey.png',
      link: '',
      tag: ['插畫', 'Photoshop', '視覺設計']
    },
    {
      title: 'Digital Pulse',
      description: '跳動數字與幾何磚瓦的色彩律動。',
      image: '/design-projects/digital-pulse.png',
      link: 'https://fengyenchen.github.io/my-page/arts/Digital%20Pulse/Digital%20Pulse.html',
      tag: ['VJ', 'Arena Resolum', '視覺設計']
    },
  ];

  return (
    <div className="h-full flex flex-col justify-start items-center text-primary gap-4 w-full">
      <div className="cards w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="card border border-primary rounded p-4 w-full hover:bg-primary/5 transition flex flex-col justify-between"
          >
            <div className="flex flex-col grow">
              <div className="relative w-full h-48 mb-4 rounded overflow-hidden">
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h2 className="text-primary font-bold text-lg mb-1">{project.title}</h2>
              <p className="text-primary/80 text-sm mb-3">{project.description}</p>
              
              {project.tag && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tag.map((t, i) => (
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
      <div className="space w-full pb-4"></div>
    </div>
  );
}