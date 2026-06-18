"use client"

import TextType from '@/components/TextType';
import FuzzyText from '@/components/FuzzyText';

export default function Home() {
  return (
    <div className="h-full flex flex-col justify-center items-center gap-8 p-8 text-primary">
      <FuzzyText
        baseIntensity={0.2}
        hoverIntensity={0.4}
        enableHover
        color="var(--primary) !important"
        fontSize="clamp(2.2rem, 8vw, 4rem)" 
        className="font-bold tracking-wide text-center"
      >
        Yen Chen, Feng
      </FuzzyText>

      <div className="text-xs md:text-md lg:text-lg font-bold text-secondary font-mono">
        \\ Welcome to my portfolio! //
      </div>

      <div className="text-md md:text-md font-bold text-center">
        <TextType
          text={[
            "我熱衷於探索設計、程式與互動體驗之間的可能性。",
            "我喜歡從觀察使用者需求開始，透過設計思維與技術實作，將想法轉化為具有價值的數位產品與互動體驗。",
            "我相信，好的產品不只是解決問題的工具，更是連結人與人、人與科技之間的重要媒介。"
          ]}
          typingSpeed={75}
          pauseDuration={1500}
          deletingSpeed={50}
          showCursor={true}
          cursorCharacter="_"
          cursorBlinkDuration={0.5}
        />
      </div>
    </div>
  );
}
