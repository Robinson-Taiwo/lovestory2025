'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

// Sample gallery data (replace with actual image paths and captions)
const galleryImages = [
  {
    src: '/images/image1.png',
    alt: 'Zoe & Joshua’s engagement shoot',
    caption: 'love is patient.',
    width: 600,
    height: 400,
  },
  {
    src: '/images/image2.png',
    alt: 'Beach date moment',
    caption: 'love is kind.',
    width: 400,
    height: 600,
  },
  {
    src: '/images/image3.png',
    alt: 'Wedding rings',
    caption: 'love is not boastful.',
    width: 500,
    height: 500,
  },
  {
    src: '/images/image4.png',
    alt: 'Sunset kiss',
    caption: 'love beareth all things.',
    width: 600,
    height: 450,
  },
  {
    src: '/images/image5.png',
    alt: 'Wedding preparations',
    caption: 'love believeth all things.',
    width: 450,
    height: 600,
  },
  {
    src: '/images/image6.png',
    alt: 'Laughing together',
    caption: 'love hopeth all things.',
    width: 600,
    height: 400,
  },
  {
    src: '/images/image7.png',
    alt: 'Ocean walk',
    caption: 'love endureth all things.',
    width: 500,
    height: 600,
  },
  {
    src: '/images/image8.png',
    alt: 'Proposal moment',
    caption: 'A little throwback',
    width: 600,
    height: 450,
  },
  {
    src: '/images/image9.png',
    alt: 'Holding hands',
    caption: 'love is not puffed up.',
    width: 400,
    height: 600,
  },
  {
    src: '/images/image10.png',
    alt: 'Beach picnic',
    caption: 'love is not easily provoked.',
    width: 600,
    height: 400,
  },
  {
    src: '/images/image11.png',
    alt: 'Building sandcastles',
    caption: 'love rejoiceth not in iniqity.',
    width: 500,
    height: 500,
  },
  {
    src: '/images/image12.png',
    alt: 'Lighthouse moment',
    caption: 'Love rejoices in the truth',
    width: 450,
    height: 600,
  },

    {
    src: '/images/image13.png',
    alt: 'Wedding preparations',
    caption: 'Getting ready for our big day.',
    width: 450,
    height: 600,
  },
  {
    src: '/images/image14.png',
    alt: 'Laughing together',
    caption: 'LOve never dies.',
    width: 600,
    height: 400,
  },
  {
    src: '/images/image15.png',
    alt: 'Ocean walk',
    caption: 'Chasing waves, chasing dreams.',
    width: 500,
    height: 600,
  },
  {
    src: '/images/image16.png',
    alt: 'Proposal moment',
    caption: 'love envieth not',
    width: 600,
    height: 450,
  },
  {
    src: '/images/image17.png',
    alt: 'Holding hands',
    caption: 'Together, always and forever.',
    width: 400,
    height: 600,
  },
  {
    src: '/images/image18.png',
    alt: 'Beach picnic',
    caption: 'love is beautiful',
    width: 600,
    height: 400,
  },
  {
    src: '/images/image19.png',
    alt: 'Building sandcastles',
    caption: 'Building our dreams together.',
    width: 500,
    height: 500,
  },
  {
    src: '/images/image20.png',
    alt: 'Lighthouse moment',
    caption: 'You’re my guiding light.',
    width: 450,
    height: 600,
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  // Animation variants for gallery items
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' },
    }),
  };

  // Animation variants for modal
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } },
  };

  return (
    <div className="min-h-screen bg-wedding-cream text-wedding-charcoal">
      {/* Header Section */}
      <section className="relative py-16 text-center bg-wedding-olive/10">
        <div className="absolute inset-0 bg-[url('/images/flower.png')] bg-cover bg-center opacity-10"></div>
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl font-allura text-wedding-gold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Love in Moments
        </motion.h1>
        <motion.p
          className="mt-4 text-lg sm:text-xl font-greatVibes p-8 text-wedding-wine max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Captured memories of Zoe & Joshua’s journey to forever. #JZ Love Story’25
        </motion.p>
      </section>

      {/* Gallery Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative break-inside-avoid group cursor-pointer"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div
                      className="relative overflow-hidden rounded-lg shadow-md"
                      onClick={() => setSelectedImage(image)}
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        className="w-full h-auto object-cover transition-transform duration-300 border border-wedding-gold group-hover:scale-105"
                        quality={85}
                      />
                      <div className="absolute inset-0 bg-wedding-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <p className="text-wedding-cream font-lora text-sm sm:text-base text-center px-4">
                          {image.caption}
                        </p>
                      </div>
                    </div>
                  </DialogTrigger>
                  <AnimatePresence>
                    {selectedImage && (
                      <motion.div
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                      >
                        <DialogContent className="bg-wedding-cream text-wedding-charcoal rounded-xl shadow-2xl p-6 max-w-[90vw] sm:max-w-3xl w-full">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-playfair font-bold text-wedding-charcoal">
                              {selectedImage.alt}
                            </DialogTitle>
                            <DialogDescription className="text-sm font-lora text-wedding-charcoal/80">
                              {selectedImage.caption}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="relative mt-4">
                            <Image
                              src={selectedImage.src}
                              alt={selectedImage.alt}
                              width={selectedImage.width * 1.5}
                              height={selectedImage.height * 1.5}
                              className="w-full h-auto object-contain rounded-md"
                              quality={90}
                            />
                          </div>
                          <Button
                            onClick={() => setSelectedImage(null)}
                            className="mt-4 w-full bg-wedding-gold text-wedding-charcoal font-lora py-2 px-6 rounded-md hover:bg-wedding-wine hover:text-wedding-cream"
                          >
                            Close
                          </Button>
                        </DialogContent>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Dialog>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center bg-wedding-olive/10">
        <motion.p
          className="text-lg sm:text-xl font-greatVibes text-wedding-wine max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Join us to celebrate our love on 10.05.25
        </motion.p>
        <Button
          asChild
          className="mt-6 bg-wedding-gold text-wedding-charcoal font-lora py-2 px-8 rounded-md hover:bg-wedding-wine hover:text-wedding-cream"
        >
          <a href="/josh-zoe">Back to Our Story</a>
        </Button>
      </section>
    </div>
  );
};

export default Gallery;