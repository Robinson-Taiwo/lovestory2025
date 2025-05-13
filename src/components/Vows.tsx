'use client';

import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import React, { useState } from 'react';

interface Vow {
  title: string;
  excerpt: string;
  full: string;
}

interface VowsSectionProps {
  vows: Vow[];
}

export default function VowsSection({ vows }: VowsSectionProps) {
  const [activeVow, setActiveVow] = useState<number | null>(null);

  return (
    <Parallax
      bgImage="/images/water.png"
      strength={300}
      className="bg-center bg-cover bg-no-repeat relative"
    >
      <div className="absolute inset-0 bg-black opacity-70 z-0" />

      <section className="py-24 lg:py-40 px-10 relative z-10 bg-gradient-to-b from-sky-10 to-sand-100">
        <h2 className="text-center text-4xl sm:text-5xl text-wedding-cream font-dancing-script font-bold mb-12">
          Our Promises for eternity
        </h2>
        <p className="text-center text-wedding-cream max-w-2xl mx-auto mb-8">
          As we prepare to say ‘I do,’ these are the promises we hold in our hearts, inspired by the sea that brought us together.
        </p>

        <div className="max-w-4xl mx-auto px-4 space-y-6">
          {vows.map((vow, index) => (
            <motion.div
              key={index}
              className="bg-transparent p-6 rounded-md shadow-lg border-wedding-cream border cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }} // animate only once, when 30% is in view
              onClick={() => setActiveVow(activeVow === index ? null : index)}
            >
              <h3 className="font-serif text-2xl text-wedding-cream mb-2">{vow.title}</h3>
              <p className="text-wedding-cream">
                {activeVow === index ? vow.full : vow.excerpt}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </Parallax>
  );
}
