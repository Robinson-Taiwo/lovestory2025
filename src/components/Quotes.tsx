'use client';

import { motion } from 'framer-motion';
import { Parallax } from 'react-parallax';
import React from 'react';

interface Quote {
  text: string;
  reflection: string;
}

interface QuotesSectionProps {
  quotes: Quote[];
}

export default function QuotesSection({ quotes }: QuotesSectionProps) {
  return (
    <Parallax
      bgImage="/images/rose.png"
      strength={300}
      className="bg-center bg-cover bg-no-repeat relative"
    >
      <div className="absolute inset-0 bg-black opacity-70 z-0" />

      <section className="py-24 lg:py-40 relative z-10 px-8">
        <h2 className="text-center font-dancing-script px-10 text-4xl sm:text-5xl text-wedding-gold mb-12">
          Words That Echo Our Love
        </h2>
        <p className="text-center text-wedding-cream max-w-2xl mx-auto mb-8">
          The ocean has always inspired our love, and these words capture the waves of our hearts.
        </p>

        <div className="max-w-4xl bg-transparent mx-auto z-10 px-4 space-y-12">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              className="bg-transparent p-6 rounded-md border-wedding-gold border shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="font-serif text-xl text-wedding-gold italic mb-4">{quote.text}</p>
              <p className="text-wedding-cream">{quote.reflection}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </Parallax>
  );
}
