"use client"

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const projects = [
    {
      title: 'Presence',
      description: '在同一片樹蔭下，人們各自專注於不同的世界，共享這份城市的沉默與共鳴。',
      image: 'https://fengyenchen.github.io/my-page/photography/Presence/1%20Shared%20Silence.JPG',
      link: 'https://fengyenchen.github.io/my-page/photography/Presence/Presence.html',
    },
    {
      title: 'Light and Shadow',
      description: '陽光被銳利地切開，在地面投下如同琴鍵般的平行幾何光影。',
      image: 'https://fengyenchen.github.io/my-page/photography/Light%20and%20Shadow/1%20%E5%85%89%E4%B9%8B%E7%90%B4%E9%8D%B5.JPG',
      link: 'https://fengyenchen.github.io/my-page/photography/Light%20and%20Shadow/Light%20and%20Shadow.html',
    },
    {
      title: 'A glimpse of Daan Forest Park',
      description: '捕捉大安森林公園中自然與城市生活融合的靜謐片刻。',
      image: 'https://fengyenchen.github.io/my-page/photography/A%20glimpse%20of%20Daan%20Forest%20Park/1%20%E7%B9%A1%E7%90%83%E8%8A%B1.JPG',
      link: 'https://fengyenchen.github.io/my-page/photography/A%20glimpse%20of%20Daan%20Forest%20Park/A%20glimpse%20of%20Daan%20Forest%20Park.html',
    },
    {
      title: 'Flow',
      description: '透過鏡頭擺動讓色彩在黑暗中交疊，留下如絲綢般流動的虛幻軌跡。',
      image: 'https://fengyenchen.github.io/my-page/photography/Flow/1%20%E5%85%89.JPG',
      link: 'https://fengyenchen.github.io/my-page/photography/Flow/Flow.html',
    },
    {
      title: 'Motion blur',
      description: '行人在城市中穿梭，動態模糊的效果讓畫面充滿了時間的流動感。',
      image: 'https://fengyenchen.github.io/my-page/photography/Motion%20blur/1%20%E8%A1%8C%E4%BA%BA.JPG',
      link: 'https://fengyenchen.github.io/my-page/photography/Motion%20blur/Motion%20blur.html',
    },
    {
      title: 'Shapes',
      description: '以形狀為主題，透過重複的規則幾何圖案在視覺上創造出一種和諧感。',
      image: 'https://fengyenchen.github.io/my-page/photography/Shapes/1%20%E7%9F%A9%E5%BD%A2.jpg',
      link: 'https://fengyenchen.github.io/my-page/photography/Shapes/Shapes.html',
    },
    {
      title: 'Lines',
      description: '以線條為主題，貼近帶有造型的牆面，透過垂直線的縫隙偷窺裡面的世界。',
      image: 'https://fengyenchen.github.io/my-page/photography/Lines/1%20%E7%9B%B4%E7%B7%9A.jpg',
      link: 'https://fengyenchen.github.io/my-page/photography/Lines/Lines.html',
    },
    {
      title: 'Park',
      description: '聚焦於公園中常被忽略的日常角落，如靜靜佇立的三角錐。',
      image: 'https://fengyenchen.github.io/my-page/photography/Park/1%20%E4%B8%89%E8%A7%92%E9%8C%90.jpg',
      link: 'https://fengyenchen.github.io/my-page/photography/Park/Park.html',
    }
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