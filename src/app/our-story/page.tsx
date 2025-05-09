'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

// Timeline data
const timeline = [
  {
    date: 'April 2019',
    title: 'The Meeting',
    description:
      'Zoe and Joshua met at a university charity event in Lagos. Joshua’s warm smile caught Zoe’s eye, and a shared love for music sparked their first conversation under the stars.',
    image: '/images/meeting.jpg',
    alt: 'Zoe and Joshua at charity event',
  },
  {
    date: 'June 2020',
    title: 'First Date by the Shore',
    description:
      'Their first date was a sunset walk along Lagos Beach. The waves whispered promises, and their laughter became the soundtrack of a love that would grow forever.',
    image: '/images/beach-date.jpg',
    alt: 'Zoe and Joshua on beach date',
  },
  {
    date: 'December 2021',
    title: 'Falling in Love',
    description:
      'Countless beach picnics and late-night talks later, Zoe and Joshua realized their hearts were intertwined. They confessed their love under a moonlit sky.',
    image: '/images/moonlit-love.jpg',
    alt: 'Zoe and Joshua under moonlight',
  },
  {
    date: 'August 2023',
    title: 'The Proposal',
    description:
      'Joshua proposed on a cliff overlooking the ocean, with the sunset painting the sky in gold and wine. Zoe said yes, sealing their promise with a kiss.',
    image: '/images/proposal.jpg',
    alt: 'Joshua proposing to Zoe',
  },
  {
    date: 'March 2024',
    title: 'Engagement Celebration',
    description:
      'Friends and family gathered to celebrate their engagement. The night was filled with music, laughter, and dreams of a future together.',
    image: '/images/engagement.jpg',
    alt: 'Zoe and Joshua’s engagement party',
  },
  {
    date: 'August 2025',
    title: 'Our Wedding Day',
    description:
      'The day we say ‘I do’ by the shore, surrounded by love and the ocean’s embrace. Our journey continues, written in the sands of time.',
    image: '/images/wedding-day.jpg',
    alt: 'Zoe and Joshua’s wedding',
  },
];

export default function OurStory() {
  // Animation variants for timeline items
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2, ease: 'easeOut' },
    }),
  };

  // Animation variants for section headers
  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="min-h-screen bg-wedding-cream text-wedding-charcoal">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/secondedited.png')" }}
      >
        <div className="absolute inset-0 bg-wedding-wine/70"></div>
        <motion.div
          className="text-center max-w-4xl z-10 mx-auto"
          initial="hidden"
          animate="visible"
          variants={headerVariants}
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-dancing-script font-extrabold text-wedding-cream">
            Our Story
          </h1>
          <p className="text-2xl font-greatVibes text-wedding-gold mt-4">
            #JZ Love Story’25
          </p>
          <p className="mt-6 text-lg font-lora text-wedding-cream max-w-2xl mx-auto">
            Zoe and Joshua’s journey is a testament to love’s serendipity. From a chance encounter to a lifelong promise, here’s how their love blossomed by the shore.
          </p>
        </motion.div>
      </section>

      {/* Couple Names Section */}
      <section
        className="relative h-[40vh] flex items-center justify-center w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/wedding1.png')" }}
      >
        <div className="absolute inset-0 bg-wedding-wine/50"></div>
        <motion.div
          className="flex flex-row gap-8 sm:gap-12 items-center z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-parisienne text-wedding-gold">
            Joshua
          </h2>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-allura text-wedding-cream">
            &
          </h2>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-parisienne text-wedding-gold">
            Zoe
          </h2>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-wedding-cream">
        <motion.h2
          className="text-center text-4xl sm:text-5xl font-dancing-script text-wedding-wine mb-12"
          initial="hidden"
          animate="visible"
          variants={headerVariants}
        >
          A Journey Written in Love
        </motion.h2>
        <div className="max-w-5xl mx-auto space-y-12">
          {timeline.map((event, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-center gap-8"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <motion.div
                  className="relative rounded-lg overflow-hidden shadow-lg group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={event.image}
                    alt={event.alt}
                    width={500}
                    height={400}
                    className="w-full h-auto object-cover"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-wedding-wine/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              </div>
              {/* Text */}
              <Card className="w-full md:w-1/2 bg-wedding-cream border-wedding-wine/50 shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-playfair font-bold text-wedding-wine">
                    {event.date}: {event.title}
                  </h3>
                  <p className="mt-4 text-lg font-lora text-wedding-charcoal">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-wedding-wine/10 text-center">
        <motion.blockquote
          className="text-2xl sm:text-3xl font-greatVibes text-wedding-wine max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          “You are my today and all my tomorrows.” – Joshua to Zoe
        </motion.blockquote>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center bg-wedding-cream">
        <motion.p
          className="text-lg sm:text-xl font-greatVibes text-wedding-wine max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Celebrate our love with us on 08.15.25
        </motion.p>
        <div className="flex justify-center gap-4">
          <Button
            asChild
            className="bg-wedding-wine text-wedding-cream font-lora py-2 px-8 rounded-md hover:bg-wedding-gold hover:text-wedding-charcoal"
          >
            <a href="/josh-zoe">Back to Our Story</a>
          </Button>
          <Button
            asChild
            className="bg-wedding-wine text-wedding-cream font-lora py-2 px-8 rounded-md hover:bg-wedding-gold hover:text-wedding-charcoal"
          >
            <a href="/gallery">View Our Gallery</a>
          </Button>
        </div>
      </section>
    </div>
  );
}