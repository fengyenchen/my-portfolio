import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  console.log('開始寫入初始資料...')

  // TypingText
  await prisma.typingText.createMany({
    data: [
      { text: "我熱衷於探索設計、程式與互動體驗之間的可能性。" },
      { text: "我喜歡從觀察使用者需求開始，透過設計思維與技術實作，將想法轉化為具有價值的數位產品與互動體驗。" },
      { text: "我相信，好的產品不只是解決問題的工具，更是連結人與人、人與科技之間的重要媒介。" }
    ]
  })

  // Profile
  await prisma.profile.create({
    data: {
      name: "馮妍禎 Yen-Chen Feng",
      bio: "<p>我熱衷於探索設計、程式與互動體驗之間的可能性。我喜歡從觀察使用者需求開始，透過設計思維與技術實作，將想法轉化為具有價值的數位產品與互動體驗。我相信，好的產品不只是解決問題的工具，更是連結人與人、人與科技之間的重要媒介。</p><br><p>Yen-Chen Feng is passionate about exploring the intersection of design, programming, and interactive experiences.</p><br><p>Starting from understanding users' needs, she combines design thinking with technical implementation to transform ideas into meaningful digital products and engaging experiences. Her interests span UX design, frontend development, creative coding, and emerging technologies, with a particular curiosity about how people interact with technology.</p><br><p>For Yen-Chen, great products are more than tools for solving problems—they are bridges that connect people, ideas, and technology. She believes that thoughtful design and innovative technology can work together to create experiences that are both functional and meaningful.</p><br><ul><li>- Design & UX — Designing intuitive and engaging digital experiences.</li><li>- Full-Stack Development — Building scalable, end-to-end applications with modern web technologies and robust architectures.</li><li>- AI & Product Thinking — Exploring how AI can create meaningful user value.</li><li>- Creative Coding — Combining art, design, and code through interactive media and generative works.</li></ul>"
    }
  })

  // Education
  await prisma.education.createMany({
    data: [
      {
        institution: "國立臺灣大學",
        department: "工商管理學系",
        period: "2023 - NOW",
        sortOrder: 1
      }
    ]
  })

  // Experience
  await prisma.experience.createMany({
    data: [
      {
        institution: "台大自造者社 NTUMaker",
        role: "美宣",
        period: "2026.02 - NOW",
        sortOrder: 1
      },
      {
        institution: "國立臺灣大學戲劇學系",
        role: "沉浸式科技劇場專題實作助教",
        period: "2025.09 - 2025.12",
        sortOrder: 2
      },
      {
        institution: "國立臺灣大學戲劇學系",
        role: "沉浸式科技劇場專題實作 期末成發主視覺",
        period: "2025.12 - 2025.12",
        sortOrder: 3
      },
      {
        institution: "臺大生傳畢製 - 恆溫宅急便",
        role: "子計畫 - X&Y",
        period: "2025.02 - 2025.05",
        sortOrder: 4
      },
      {
        institution: "臺大工管杜鵑花節",
        role: "主視覺",
        period: "2024.03 - 2024.03",
        sortOrder: 5
      }
    ]
  })

  // Skill
  await prisma.skill.createMany({
    data: [
      { name: "JavaScript", category: "Frontend", sortOrder: 1 },
      { name: "React", category: "Frontend", sortOrder: 2 },
      { name: "Next.js", category: "Frontend", sortOrder: 3 },
      { name: "TypeScript", category: "Frontend", sortOrder: 4 },
      { name: "Vue.js", category: "Frontend", sortOrder: 5 },
      { name: "Vite", category: "Frontend", sortOrder: 6 },
      { name: "Tailwind CSS", category: "Frontend", sortOrder: 7 },
      { name: "p5.js", category: "Frontend", sortOrder: 8 },
      { name: "Node.js", category: "Backend", sortOrder: 9 },
      { name: "Python", category: "Backend", sortOrder: 10 },
      { name: "Prisma / Supabase", category: "Backend", sortOrder: 11 },
      { name: "Git", category: "Tools", sortOrder: 12 },
      { name: "MySQL", category: "Database", sortOrder: 13 },
      { name: "PostgreSQL", category: "Database", sortOrder: 14 },
      { name: "Figma", category: "Design", sortOrder: 15 },
      { name: "Illustrator", category: "Design", sortOrder: 16 },
      { name: "Photoshop", category: "Design", sortOrder: 17 },
    ]
  });

  // ProgrammingProject
  await prisma.programmingProject.createMany({
    data: [
      {
        title: "Personal Website",
        description: "用 Next.js 框架與 Tailwind CSS, React 搭配的個人網站。",
        imgSrc: "/programming-projects/personal-website.png", // 已對接 schema 的 imgSrc
        year: "2026",
        link: "https://fengyenchen-my-portfolio.vercel.app/",
        link2Desc: "Github",
        link2: "https://github.com/fengyenchen/my-portfolio",
        sortOrder: 1
      },
      {
        title: "BLOG-VUE",
        description: "用 Vue.js 框架與 Tailwind CSS 搭配的共享部落格。",
        imgSrc: "/programming-projects/blog-vue.png",
        year: "2026",
        link: "https://fengyenchen-blog-vue.vercel.app/",
        link2Desc: "Github",
        link2: "https://github.com/fengyenchen/blog-vue",
        sortOrder: 2
      },
      {
        title: "P5.js 生成式藝術",
        description: "用 P5.js 製作的生成式藝術作品，探索程式與視覺藝術的結合。",
        imgSrc: "/programming-projects/p5js.png",
        year: "2026",
        link: "https://openprocessing.org/user/538257/#sketches",
        link2Desc: "Objkt",
        link2: "https://objkt.com/users/tz2LNGCxCgLsho7zZtwe8iziAFD4Us98YspU/created",
        sortOrder: 3
      }
    ]
  })

  // DesignProject
  await prisma.designProject.createMany({
    data: [
      {
        title: 'A Promise with Time',
        description: '這篇創作目的是重新詮釋經典的白蛇故事，將其融入現代的社會背景，探討愛情、信任與人性。',
        imgSrc: '/design-projects/a-promise-with-time.png',
        link: 'https://fengyenchen.github.io/my-page/arts/A%20Promise%20with%20Time/A%20Promise%20with%20Time.html',
        tags: ['漫畫', 'Illustration', '故事創作'],
        sortOrder: 1
      },
      {
        title: '演講海報設計',
        description: 'VJ 黃芮蓁的演講海報設計，透過視覺元素傳達演講主題與氛圍。',
        imgSrc: '/design-projects/251222-vj.png',
        link: '/design-projects/251222-vj.png',
        tags: ['海報設計', 'Illustration', '視覺設計'],
        sortOrder: 2
      },
      {
        title: 'Daily Life in the Park',
        description: '這是一組以「公園」為靈感的作品。公園是城市裡最貼近日常的角落，不同的物件在這裡交織出秩序、休憩與生活的片段。',
        imgSrc: '/design-projects/daily-life-in-the-park.png',
        link: 'https://fengyenchen.github.io/my-page/arts/Daily%20Life%20in%20the%20Park/Daily%20Life%20in%20the%20Park.html',
        tags: ['插畫', 'Illustration', '生活觀察'],
        sortOrder: 3
      },
      {
        title: '內心之旅',
        description: '探索自我成長、情感變化與內在世界的多樣面貌。',
        imgSrc: '/design-projects/inner-journey.png',
        link: '/design-projects/inner-journey.png',
        tags: ['插畫', 'Photoshop', '視覺設計'],
        sortOrder: 4
      },
      {
        title: 'NTUMaker 社群貼文設計',
        description: '為 NTUMaker 社群設計的貼文，旨在提升社群的視覺吸引力與參與度。',
        imgSrc: '/design-projects/ntumaker.png',
        link: 'https://www.instagram.com/ntu_maker/',
        tags: ['貼文設計', 'Blender', 'Illustration'],
        sortOrder: 5
      },
      {
        title: '這顆石頭的日常用語',
        description: 'LINE 貼圖創作。',
        imgSrc: '/design-projects/line-stone.png',
        link: 'https://store.line.me/stickershop/product/23688291/zh-Hant',
        tags: ['貼圖設計', '角色設計', '插畫'],
        sortOrder: 6
      },
      {
        title: 'Digital Pulse',
        description: '跳動數字與幾何磚瓦的色彩律動。',
        imgSrc: '/design-projects/digital-pulse.png',
        link: 'https://fengyenchen.github.io/my-page/arts/Digital%20Pulse/Digital%20Pulse.html',
        tags: ['VJ', 'Arena Resolum', '視覺設計'],
        sortOrder: 7
      }
    ]
  })

  // Exhibition
  await prisma.exhibition.createMany({
    data: [
      {
        title: '暫存－模型場景製作期末展',
        subtitle: '臨時的永恆',
        description: '在隨時可能被抹除的「暫時」之中，往往隱藏著最溫柔的「永恆」。這種暫時搭建、隨時可能因為拆遷而消失的建築，反而有一種很強韌的生命力。它們可能有點破舊、招牌褪色，甚至牆角都長了雜草，但到了晚上，那盞暖黃色的燈光一亮,又變成鄰里間最熟悉的風景。',
        period: '2026.06.11 - 2026.06.18',
        place: '台大一號館 戲劇學系 前崩',
        imgSrc: [
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
        sortOrder: 1
      },
    ]
  })

  // Photography
  await prisma.photography.createMany({
    data: [
      {
        title: 'Presence',
        description: '在同一片樹蔭下，人們各自專注於不同的世界，共享這份城市的沉默與共鳴。',
        imgSrc: 'https://fengyenchen.github.io/my-page/photography/Presence/1%20Shared%20Silence.JPG',
        link: 'https://fengyenchen.github.io/my-page/photography/Presence/Presence.html',
        sortOrder: 1
      },
      {
        title: 'Light and Shadow',
        description: '陽光被銳利地切開，在地面投下如同琴鍵般的平行幾何光影。',
        imgSrc: 'https://fengyenchen.github.io/my-page/photography/Light%20and%20Shadow/1%20%E5%85%89%E4%B9%8B%E7%90%B4%E9%8D%B5.JPG',
        link: 'https://fengyenchen.github.io/my-page/photography/Light%20and%20Shadow/Light%20and%20Shadow.html',
        sortOrder: 2
      },
      {
        title: 'A glimpse of Daan Forest Park',
        description: '捕捉大安森林公園中自然與城市生活融合的靜謐片刻。',
        imgSrc: 'https://fengyenchen.github.io/my-page/photography/A%20glimpse%20of%20Daan%20Forest%20Park/1%20%E7%B9%A1%E7%90%83%E8%8A%B1.JPG',
        link: 'https://fengyenchen.github.io/my-page/photography/A%20glimpse%20of%20Daan%20Forest%20Park/A%20glimpse%20of%20Daan%20Forest%20Park.html',
        sortOrder: 3
      },
      {
        title: 'Flow',
        description: '透過鏡頭擺動讓色彩在黑暗中交疊，留下如絲綢般流動的虛幻軌跡。',
        imgSrc: 'https://fengyenchen.github.io/my-page/photography/Flow/1%20%E5%85%89.JPG',
        link: 'https://fengyenchen.github.io/my-page/photography/Flow/Flow.html',
        sortOrder: 4
      },
      {
        title: 'Motion blur',
        description: '行人在城市中穿梭，動態模糊的效果讓畫面充滿了時間的流動感。',
        imgSrc: 'https://fengyenchen.github.io/my-page/photography/Motion%20blur/1%20%E8%A1%8C%E4%BA%BA.JPG',
        link: 'https://fengyenchen.github.io/my-page/photography/Motion%20blur/Motion%20blur.html',
        sortOrder: 5
      },
      {
        title: 'Shapes',
        description: '以形狀為主題，透過重複的規則幾何圖案在視覺上創造出一種和諧感。',
        imgSrc: 'https://fengyenchen.github.io/my-page/photography/Shapes/1%20%E7%9F%A9%E5%BD%A2.jpg',
        link: 'https://fengyenchen.github.io/my-page/photography/Shapes/Shapes.html',
        sortOrder: 6
      },
      {
        title: 'Lines',
        description: '以線條為主題，貼近帶有造型的牆面，透過垂直線的縫隙偷窺裡面的世界。',
        imgSrc: 'https://fengyenchen.github.io/my-page/photography/Lines/1%20%E7%9B%B4%E7%B7%9A.jpg',
        link: 'https://fengyenchen.github.io/my-page/photography/Lines/Lines.html',
        sortOrder: 7
      },
      {
        title: 'Park',
        description: '聚焦於公園中常被忽略的日常角落，如靜靜佇立的三角錐。',
        imgSrc: 'https://fengyenchen.github.io/my-page/photography/Park/1%20%E4%B8%89%E8%A7%92%E9%8C%90.jpg',
        link: 'https://fengyenchen.github.io/my-page/photography/Park/Park.html',
        sortOrder: 8
      }
    ]
  })

  console.log('所有初始資料寫入成功！')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })