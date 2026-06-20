"use client";

import TextType from '@/components/TextType';
import FuzzyText from '@/components/FuzzyText';
import { useState } from 'react';
import type { TypingText } from '@prisma/client';

interface ClientProps {
  initialTypingTexts: TypingText[];
}

export default function HomeClient({ initialTypingTexts }: ClientProps) {
  const [typingTexts] = useState<TypingText[]>(initialTypingTexts);

  const textList = typingTexts.map((item) => item.text);

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
            text={textList}
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
