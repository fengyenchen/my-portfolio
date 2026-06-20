"use client";

import TextType from '@/components/TextType';
import FuzzyText from '@/components/FuzzyText';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [typingTexts, setTypingTexts] = useState<string[]>([]);
  
  useEffect(() => {
    fetch("/api/typingText")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setTypingTexts(data);
        }
      })
      .catch((err) => console.error("撈取打字機資料失敗:", err));
  }, []);

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
        {typingTexts.length > 0 && (
          <TextType
            text={typingTexts}
            typingSpeed={75}
            pauseDuration={1500}
            deletingSpeed={50}
            showCursor={true}
            cursorCharacter="_"
            cursorBlinkDuration={0.5}
          />
        )}
      </div>
    </div>
  );
}
