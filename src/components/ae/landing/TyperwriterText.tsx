'use client';
import React from 'react';
import Typewriter from 'typewriter-effect';

const TyperwriterText = () => {
  return (
    <Typewriter
      options={{
        strings: 'Cultivating AI Natives for the AI-First World',
        autoStart: true,
        loop: true,
        //   cursor: '', // if you dont want pipe
        cursorClassName: 'text-[#AAC191]',
        delay: 95,
      }}
    />
  );
};

export default TyperwriterText;
