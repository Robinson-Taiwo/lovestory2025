'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function GiftTheCouple() {
  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  // Animation variants for buttons
  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <div className="min-h-screen bg-wedding-cream text-wedding-charcoal">
      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/images/wedding1.png')" }}
      >
        <div className="absolute inset-0 bg-wedding-wine/70"></div>
        <motion.div
          className="text-center max-w-4xl z-10 mx-auto px-4 sm:px-6"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-dancing-script font-extrabold text-wedding-cream">
            Gift Zoe & Joshua
          </h1>
          <p className="text-2xl font-greatVibes text-wedding-gold mt-4">
            #JZ Love Story’25
          </p>
          <p className="mt-6 text-lg font-lora text-wedding-cream max-w-2xl mx-auto">
            Your love and presence are the greatest gifts, but if you’d like to contribute to our future together, we’d be deeply grateful.
          </p>
        </motion.div>
      </section>

      {/* Message Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-wedding-cream">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <h2 className="text-4xl sm:text-5xl font-allura text-wedding-wine mb-8">
            A Future Built on Love
          </h2>
          <p className="text-lg font-lora text-wedding-charcoal max-w-3xl mx-auto mb-6">
            As we embark on this journey as husband and wife, your support means the world to us. Your gifts will help us build a home filled with love, faith, and dreams—whether it’s a cozy dinner table for family gatherings or the start of our next adventure together.
          </p>
          <p className="text-lg font-lora text-wedding-charcoal max-w-3xl mx-auto">
            From near or far, your generosity will be a cherished part of our story. Thank you for being with us as we write this new chapter.
          </p>
        </motion.div>
      </section>

      {/* Gift Options Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-wedding-wine/10">
        <motion.h2
          className="text-center text-4xl sm:text-5xl font-dancing-script text-wedding-wine mb-12"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          How to Gift Us
        </motion.h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            <Card className="bg-wedding-cream border-wedding-wine/50 shadow-md">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-playfair font-bold text-wedding-wine mb-4">
                  Our Wedding Registry
                </h3>
                <p className="text-lg font-lora text-wedding-charcoal mb-6">
                  We’ve curated a registry with items to help us start our life together. From home essentials to special experiences, your gift will bring us joy every day.
                </p>
                <Button
                  asChild
                  className="bg-wedding-wine text-wedding-cream font-lora py-2 px-8 rounded-md hover:bg-wedding-gold hover:text-wedding-charcoal"
                >
                  <a
                    href="https://www.zola.com/registry/zoeandjoshua"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Our Registry
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            <Card className="bg-wedding-cream border-wedding-wine/50 shadow-md">
              <CardContent className="p-6 text-center">
                <h3 className="text-2xl font-playfair font-bold text-wedding-wine mb-4">
                  Digital Contributions
                </h3>
                <p className="text-lg font-lora text-wedding-charcoal mb-6">
                  For guests joining us from around the world, you can send a monetary gift to support our future. Every contribution, big or small, is a blessing.
                </p>
                <Button
                  asChild
                  className="bg-wedding-wine text-wedding-cream font-lora py-2 px-8 rounded-md hover:bg-wedding-gold hover:text-wedding-charcoal"
                >
                  <Link
                    href="https://www.paypal.com/zoeandjoshua"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Send a Gift
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Image Section */}
      <section
        className="relative py-16 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/flower.png')" }}
      >
        <div className="absolute inset-0 bg-wedding-wine/30"></div>
        <motion.div
          className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8 z-10"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          <div className="w-full md:w-1/2">
            <motion.div
              className="relative rounded-lg overflow-hidden shadow-lg group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/couple.jpg"
                alt="Zoe and Joshua together"
                width={500}
                height={400}
                className="w-full h-auto object-cover"
                quality={85}
              />
              <div className="absolute inset-0 bg-wedding-wine/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <blockquote className="text-2xl sm:text-3xl font-greatVibes text-wedding-wine mb-4">
              “He that findeth a wife findeth a good thing and obtaineth favour of the LORD”
            </blockquote>
            <p className="text-lg font-lora text-wedding-cream">~ Proverbs 18:22</p>
          </div>
        </motion.div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 text-center bg-wedding-cream">
        <motion.p
          className="text-lg sm:text-xl font-greatVibes text-wedding-wine max-w-2xl mx-auto mb-8"
          initial="hidden"
          animate="visible"
          variants={sectionVariants}
        >
          Your love and generosity will forever be part of our story. Thank you for celebrating with us.
        </motion.p>
        <motion.div variants={buttonVariants} whileHover="hover">
          <Button
            asChild
            className="bg-wedding-wine text-wedding-cream font-lora py-2 px-8 rounded-md hover:bg-wedding-gold hover:text-wedding-charcoal"
          >
            <a href="/josh-zoe">Back to Our Story</a>
          </Button>
        </motion.div>
      </section>
    </div>
  );
}