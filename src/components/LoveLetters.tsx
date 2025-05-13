'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Parallax } from 'react-parallax';
import Image from 'next/image';

interface Letter {
  title: string;
  content: string;
}

interface Letters {
  Joshua: Letter;
  Zoe: Letter;
}

interface LoveLettersProps {
  letters: Letters;
}

export default function LoveLetters({ letters }: LoveLettersProps) {
  const [activeLetter, setActiveLetter] = useState<'Joshua' | 'Zoe' | null>(null);

  return (
    <Parallax
      bgImage="/images/wr.png"
      strength={300}
      className="bg-center bg-cover bg-no-repeat"
    >
      <div className="relative px-10 py-24 lg:py-40 flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-70 z-0" />

        <h2 className="text-center font-dancing-script text-4xl sm:text-5xl text-wedding-olive/120 mb-12 z-10">
          Our Love Letters
        </h2>

        <h2 className="text-center font-playfair text-lg sm:text-base text-wedding-olive/120 mb-12 z-10">
          check out love letters inspired by love and passion. romantic, soothing and beautiful
        </h2>

        <div className="max-w-4xl mx-auto px-4 z-10">
          {activeLetter ? (
            <AnimatePresence>
              <motion.div
                key={activeLetter}
                className="bg-transparent text-wedding-olive border border-wedding-olive p-6 rounded-md shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="font-serif text-2xl text-wedding-olive mb-4">
                  {letters[activeLetter].title}♡
                </h3>
                <p className="text-wedding-cream leading-relaxed whitespace-pre-line">
                  {letters[activeLetter].content}
                </p>
                <button
                  onClick={() => setActiveLetter(null)}
                  className="mt-6 px-4 py-2 bg-transparent border-wedding-olive border text-wedding-olive font-semibold rounded-md hover:bg-wedding-olive transition-colors"
                >
                  Close
                </button>
              </motion.div>
            </AnimatePresence>
          ) : (
            <div className="flex justify-center gap-8">
              <motion.div
                className="cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => setActiveLetter('Joshua')}
              >
                <Image
                  src="/images/rings.png"
                  alt="Bottle for Joshua's letter"
                  width={120}
                  height={200}
                />
                <p className="text-center text-wedding-olive font-bold mt-2">To Zoe</p>
              </motion.div>
              <motion.div
                className="cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => setActiveLetter('Zoe')}
              >
                <Image
                  src="/images/rings.png"
                  alt="Bottle for Zoe's letter"
                  width={120}
                  height={200}
                />
                <p className="text-center text-wedding-olive font-bold mt-2">To Joshua</p>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </Parallax>
  );
}
