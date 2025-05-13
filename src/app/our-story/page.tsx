'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

// Updated Timeline Data
const timeline = [
  {
    date: 'March 2015',
    title: 'A Chance Encounter',
    description:
      'After a long day of lectures, Joshua was heading to his hotel with a cold coke in hand when Zoe approached him with a calm, gentle voice. She requested a tutorial session for herself and her friends. They exchanged pleasantries, and Joshua agreed to the tutorial.',
    image: '/images/first-meeting.jpg',
    alt: 'Joshua and Zoe first meeting',
  },
  {
    date: 'April 2015',
    title: 'The Tutorial Session',
    description:
      'Joshua conducted the tutorial session as promised. It was a brief interaction, and they parted ways, not knowing their paths would cross again years later.',
    image: '/images/tutorial-session.jpg',
    alt: 'Tutorial session',
  },
  {
    date: 'June 2021',
    title: 'Reconnecting Online',
    description:
      'Six years later, Joshua stumbled upon a video Zoe posted on Facebook. Captivated by her soft, sweet voice, he decided to reach out, rekindling their connection.',
    image: '/images/reconnecting-online.jpg',
    alt: 'Reconnecting through Facebook',
  },
  {
    date: 'August 2021',
    title: 'Friendship Rekindled',
    description:
      'Their online conversations blossomed into a deep friendship. They shared stories, dreams, and laughter, laying the foundation for something more.',
    image: '/images/friendship.jpg',
    alt: 'Zoe and Joshua becoming friends',
  },
  {
    date: 'December 2021',
    title: 'Love Blossoms',
    description:
      'As their bond grew stronger, Zoe and Joshua realized their feelings had deepened. They embraced their love, marking the beginning of their courtship.',
    image: '/images/love-blossoms.jpg',
    alt: 'Zoe and Joshua in love',
  },
  {
    date: 'August 2023',
    title: 'The Proposal',
    description:
      'Joshua proposed on a cliff overlooking the ocean, with the sunset painting the sky in gold and wine. Zoe said yes, sealing their promise with a kiss.',
    image: '/images/proposal.jpg',
    alt: 'Joshua proposing to Zoe',
  },
];

export default function OurStory() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2, ease: 'easeOut' },
    }),
  };

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
            <Link href="/josh-zoe">Back to Our Overview page</Link>
          </Button>
          <Button
            asChild
            className="bg-wedding-wine text-wedding-cream font-lora py-2 px-8 rounded-md hover:bg-wedding-gold hover:text-wedding-charcoal"
          >
            <Link href="/gallery">View Our Gallery</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
