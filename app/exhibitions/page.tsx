"use client"

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const projects = [
    {
      title: '暫存－模型場景製作期末展',
      subtitle: '臨時的永恆',
      description: '在隨時可能被抹除的「暫時」之中，往往隱藏著最溫柔的「永恆」。這種暫時搭建、隨時可能因為拆遷而消失的建築，反而有一種很強韌的生命力。它們可能有點破舊、招牌褪色，甚至牆角都長了雜草，但到了晚上，那盞暖黃色的燈光一亮,又變成鄰里間最熟悉的風景。',
      date: '2026.06.11 - 2026.06.18',
      place: '台大一號館 戲劇學系 前崩',
      images: [
        '/exhibitions/temporary-eternity/1.jpg', 
        '/exhibitions/temporary-eternity/2.JPG', 
        '/exhibitions/temporary-eternity/3.JPG', 
        '/exhibitions/temporary-eternity/4.jpg', 
        '/exhibitions/temporary-eternity/5.JPG', 
        '/exhibitions/temporary-eternity/6.JPG', 
        '/exhibitions/temporary-eternity/7.JPG', 
        '/exhibitions/temporary-eternity/8.JPG', 
        '/exhibitions/temporary-eternity/9.JPG'
      ],
    },

  ];

  return (
    <div className="h-full flex flex-col justify-start items-start gap-8 p-8 text-primary">
      <div className="items w-full">
        {projects.map((project, index) => (
        <div key={index} className="item flex flex-col gap-0 w-full">
          <h1 className="page-title">{project.title}</h1>
          <div className="flex flex-col md:flex-row items-start justify-between md:items-center w-full pb-4">
            <p className="text-primary/80 text-sm">{project.place}</p>
            <span className="block text-primary/50 text-xs">{project.date}</span>    
          </div>
          <h2 className="page-subtitle">{project.subtitle}</h2>
          <p className="text-primary/80 text-sm mb-4">{project.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {project.images.map((image, index) => (
              <Image key={index} src={image} alt={`Project Image ${index + 1}`} width={400} height={300} />
            ))}
          </div>
        </div>
        ))}
      </div>
      
      <div className="space w-full pb-4"></div>
    </div>
  );
}