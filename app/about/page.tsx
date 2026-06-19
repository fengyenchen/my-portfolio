"use client"

export default function Home() {
  const education = [
    {
      institution: "國立臺灣大學",
      department: "工商管理學系",
      period: "2023 - NOW"
    }
  ];

  const experience = [
    {
      institution: "台大自造者社 NTUMaker",
      role: "美宣",
      period: "2026.02 - NOW"
    },
    {
      institution: "國立臺灣大學戲劇學系",
      role: "沉浸式科技劇場專題實作助教",
      period: "2025.09 - 2025.12"
    },
    {
      institution: "國立臺灣大學戲劇學系",
      role: "沉浸式科技劇場專題實作 期末成發主視覺",
      period: "2025.12 - 2025.12"
    },
    {
      institution: "臺大生傳畢製 - 恆溫宅急便",
      role: "子計畫 - X&Y",
      period: "2025.02 - 2025.05"
    },
    {
      institution: "臺大工管杜鵑花節",
      role: "主視覺",
      period: "2024.03 - 2024.03"
    },
   ]
  return (
    <div className="h-full flex flex-col justify-start items-start gap-8 p-8 text-primary">
      <div className="content">
        <h1 className="page-title">馮妍禎 Yen-Chen Feng</h1>
        <p>
          我熱衷於探索設計、程式與互動體驗之間的可能性。
          我喜歡從觀察使用者需求開始，透過設計思維與技術實作，將想法轉化為具有價值的數位產品與互動體驗。
          我相信，好的產品不只是解決問題的工具，更是連結人與人、人與科技之間的重要媒介。
        </p>
        <br></br>
        <p>
          Yen-Chen Feng is passionate about exploring the intersection of design, programming, and interactive experiences.
          Starting from understanding users' needs, she combines design thinking with technical implementation to transform ideas into meaningful digital products and engaging experiences. Her interests span UX design, frontend development, creative coding, and emerging technologies, with a particular curiosity about how people interact with technology.
          For Yen-Chen, great products are more than tools for solving problems—they are bridges that connect people, ideas, and technology. She believes that thoughtful design and innovative technology can work together to create experiences that are both functional and meaningful.
        </p>
        <br></br>
        <ul className="list-disc ml-4">
          <li>🎨 Design & UX — Designing intuitive and engaging digital experiences.</li>
          <li>🌐 Full-Stack Development — Building scalable, end-to-end applications with modern web technologies and robust architectures.</li>
          <li>🤖 AI & Product Thinking — Exploring how AI can create meaningful user value.</li>
          <li>✨ Creative Coding — Combining art, design, and code through interactive media and generative works.</li>
        </ul>
      </div>

      <div className="education w-full">
        <h2 className="page-subtitle">Education</h2>
         <div className="education-items flex flex-col gap-4 pl-2 w-full">
        {education.map((edu, index) => (
          <div className="education-item flex flex-col hover:translate-x-1 transition">
            <h3 className="text-primary/80 font-bold">{edu.institution}</h3>
            <div className="flex flex-col md:flex-row md:justify-between justify-start md:items-center w-full">
              <h4 className="text-primary/80 text-sm">{edu.department}</h4>
              <span className="block text-primary/50 text-xs">{edu.period}</span>    
            </div>
          </div>
        ))}
        </div>
      </div>
      
      <div className="experience w-full">
        <h2 className="page-subtitle">Experience</h2>
        <div className="experience-items flex flex-col gap-4 pl-2 w-full">
          {experience.map((exp, index) => (
            <div key={index} className="experience-item flex flex-col hover:translate-x-1 transition">
              <h3 className="text-primary/80 font-bold">{exp.institution}</h3>
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full">
                <h4 className="text-primary/80 text-sm">{exp.role}</h4>
                <span className="block text-primary/50 text-xs">{exp.period}</span>
              </div>
            </div>
          ))}
          
        </div>
      </div>


      <div className="space w-full pb-4"></div>
      
    </div>
  );
}
