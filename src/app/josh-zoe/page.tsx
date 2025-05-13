'use client'

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Parallax } from 'react-parallax';
import { Button } from '@/components/ui/button';
import Link from 'next/link';



const Josh = () => {

  const [activeVow, setActiveVow] = useState<number | null>(null);

  const [activeLetter, setActiveLetter] = useState<'Joshua' | 'Zoe' | null>(null);

  const letters = {
    Joshua: {
      title: 'To Zoe',
      content:
        'Zoe, from the moment we walked along the shore, your laughter became my favorite song. The waves taught me patience, but you taught me love—endless, like the tide. Every sunrise we’ve chased, every shell we’ve collected, has built a life I can’t wait to live with you. I promise to be your anchor, your partner, through every storm and calm sea. Here’s to our forever, written in the sand and sealed by the sea.',
    },
    Zoe: {
      title: 'To Joshua',
      content:
        'Joshua, you’re my lighthouse in every storm, guiding me home with your smile. The first time I saw you by the ocean, I knew my heart had found its shore. Your kindness is my compass, your love my map. I promise to hold your hand through every sunset we chase, to build sandcastles and dreams together. Our love is a tide that never fades, and I can’t wait to sail into forever with you.',
    },
  };

  const quotes = [
    {
      text: '“Love is the sea where intellect drowns and the heart swims.” – Rumi',
      reflection: 'Joshua: This reminds me of our midnight talks by the beach, where words fell away, and our hearts spoke louder than the waves.',
    },
    {
      text: '“We loved with a love that was more than love.” – Edgar Allan Poe',
      reflection: 'Zoe: Your laughter on our first beach date felt like a wave crashing over my soul, endless and alive.',
    },
    {
      text: '“The heart is a tide, always returning to the shore of love.” – Unknown',
      reflection: 'Joshua & Zoe: Every trip to the ocean feels like coming home, because it’s where we promised forever.',
    },
  ];


  const vows = [
    {
      title: 'Joshua’s Promise',
      excerpt: 'I promise to be your safe harbor, to laugh with you when the tides are high...',
      full: 'I promise to be your safe harbor, to laugh with you when the tides are high, and to hold you close when storms arise. Our love will always find its way back to the shore, like waves that never forget the sand. I’ll stand by you through every adventure, my heart forever anchored to yours.',
    },
    {
      title: 'Zoe’s Promise',
      excerpt: 'I vow to chase every sunset with you, to build our dreams like sandcastles...',
      full: 'I vow to chase every sunset with you, to build our dreams like sandcastles, and to love you with the depth of the ocean, endless and true. You are my compass, guiding me through life’s waves, and I promise to be your steady shore, always waiting for you.',
    },
  ];



  return (
    <div className="flex flex-col">

      {/* HERO SECTION */}
      <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          poster="/images/wedding1.png"
        >
          <source src="/videos/beach.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black/40 -z-10" />

        <div className="text-center text-white z-10 px-4 sm:px-6">
          <div className="absolute md:w-[30%] w-[50%] text-lg bottom-0 right-3 text-wedding-wine">
            <p className="text-white font-allura italic">
              &quot;He that findeth a wife findeth a good thing and obtaineth favour of the LORD&#34;
            </p>
            <p className="text-wedding-cream font-playfair">~ proverbs 18:22</p>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-allura mb-4 drop-shadow-lg">
            You are my Anchor, My Tide, My Home
          </h1>
          <p className="font-serif text-xl sm:text-2xl md:text-3xl mb-8 drop-shadow-md">
            08.15.25 | Joshua & Zoe | Forever by the Shore
          </p>
          <p className="text-sm text-wedding-white">
            A Home built in God with Jesus at the center
          </p>
        </div>
      </section>

      {/* SECTION TWO */}
      <Parallax bgImage="/images/paper.png" strength={400}>
        <section className="w-full py-20 lg:py-30 relative justify-center flex items-center">
          <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

          <div className="flex w-full flex-col items-center max-w-5xl justify-center  text lg:flex-row z-10">
            <div className="relative border border-wedding-gold px-8 w-[90%] md:w-[60%] lg:w-[50%] rounded-md py-20 z-10 text-center mx-auto">
              <h2 className="text-5xl font-playfair font-bold text-wedding-cream">
                Zoe & Joshua’s Wedding
              </h2>
              <p className="text-3xl font-greatVibes mt-4 text-wedding-gold">
                #JZ Love Story’25
              </p>
              <p className="text-lg font-lora mt-6 text-wedding-cream max-w-2xl mx-auto">
                From a serendipitous meeting to a <span className="text-wedding-gold">love</span> that grows stronger each day,
                <span className="text-wedding-gold"> Zoe </span> and
                <span className="text-wedding-gold"> Joshua </span> invite you to celebrate their union filled with joy, faith,
                and forever promises. A testament of God&apos;s <span className="text-wedding-gold">love</span> and grace.
              </p>
              <Link href="/gallery">
                <Button
                  variant="outline"
                  size="lg"
                  className="mt-8 border-wedding-gold text-wedding-gold bg-transparent hover:bg-wedding-gold hover:text-wedding-charcoal font-lora"
                >
                  Explore Our Gallery
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </Parallax>

      {/* SECTION THREE */}
      <Parallax bgImage="/images/bulbs.png" strength={300} className="bg-center bg-cover bg-no-repeat" >
        <section className="relative py-20 lg:py-30 text-center flex items-center justify-center text-wedding-cream border-dashed">
          <div className="absolute inset-0 bg-black opacity-80 z-0" />
          <div className="max-w-5xl flex items-center justify-center p-10 z-10">
            <div className="relative w-[100%] md:w-[60%] lg:w-[70%] mx-auto border-wedding-wine border rounded-md py-10 p-10  bg-black/40  ">
              <h2 className="md:text-5xl text-4xl font-dancing-script text-wedding-wine  font-extrabold">
                Our one of a kind Story
              </h2>
              <p className="text-2xl font-greatVibes mt-2 text-wedding-gold">
                #JZ Love Story’25
              </p>
              <p className="mt-6 text-lg font-lora max-w-2xl mx-auto">
                <span className="text-2xl">S</span>tories are beautiful especially when it&apos;s about love. Check out a love story specially written by God—an amazing tale of reflection, laughter and purpose. A reminder of God&apos;s plan and intentions toward us.
              </p>
              <p className="mt-4 italic text-xl font-greatVibes">
                “You are my today and all my tomorrows.” – Joshua to Zoe
              </p>
              <Link href="/our-story">
                <Button
                  variant="outline"
                  size="lg"
                  className="mt-6 border-wedding-wine text-wedding-wine bg-transparent hover:bg-wedding-wine hover:text-wedding-cream font-lora"
                >
                  Read Our Story
                </Button>
              </Link>
            </div>
          </div>
        </section>






      </Parallax>


      <Parallax bgImage="/images/wr.png" strength={300} className="bg-center bg-cover bg-no-repeat" >

        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

        <section className="relative px-10 py-24 lg:py-40 flex-col flex  items-center justify-center overflow-hidden">
          <h2 className="text-center font-dancing-script text-4xl sm:text-5xl text-wedding-olive/120 mb-12">Our Love Letters </h2>

          <h2 className="text-center font-playfair  text-lg sm:text-base text-wedding-olive/120  mb-12">check out love letters inspired by love and passion. romantic, soothing and beautiful </h2>
          <div className="max-w-4xl mx-auto px-4">
            {activeLetter ? (
              <AnimatePresence>
                <motion.div
                  key={activeLetter}
                  className="bg-transparent text-wedding-olive border border-wedding-olive  p-6 rounded-md shadow-lg"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="font-serif text-2xl text-wedding-olive  mb-4">{letters[activeLetter].title}♡</h3>
                  <p className="text-wedding-cream leading-relaxed">{letters[activeLetter].content}</p>
                  <button
                    onClick={() => setActiveLetter(null)}
                    className="mt-6 px-4 py-2 bg-transparent border-wedding-olive border text-wedding-olive  font-semibold rounded-md hover:bg-wedding-olive transition-colors"
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
                    src="/images/rings.png" // Replace with actual image path
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
                    src="/images/rings.png" // Replace with actual image path
                    alt="Bottle for Zoe's letter"
                    width={120}
                    height={200}
                  />
                  <p className="text-center text-wedding-olive font-bold mt-2">To Joshua</p>
                </motion.div>
              </div>
            )}
          </div>
        </section>
      </Parallax>


      <Parallax bgImage="/images/rose.png" strength={300} className="bg-center bg-cover bg-no-repeat  relative ">

        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

        <section className="py-24 lg:py-40 relative z-10 px-8 ">
          <h2 className="text-center font-dancing-script px-10 text-4xl sm:text-5xl text-wedding-gold mb-12">Words That Echo Our Love</h2>
          <p className="text-center text-wedding-cream max-w-2xl mx-auto mb-8">
            The ocean has always inspired our love, and these words capture the waves of our hearts.
          </p>
          <div className="max-w-4xl bg-transparent  mx-auto z-10 px-4 space-y-12">
            {quotes.map((quote, index) => (
              <motion.div
                key={index}
                className="bg-transparent p-6 rounded-md border-wedding-gold  border  shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <p className="font-serif text-xl text-wedding-gold italic mb-4">{quote.text}</p>
                <p className="text-wedding-cream">{quote.reflection}</p>
              </motion.div>
            ))}
          </div>
        </section>


      </Parallax>





      <Parallax bgImage="/images/water.png" strength={300} className="bg-center bg-cover bg-no-repeat  relative ">

        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

        <section className="py-24 lg:py-40 px-10  relative z-10  bg-gradient-to-b from-sky-10 to-sand-100">
          <h2 className="text-center  text-4xl sm:text-5xl text-wedding-cream font-dancing-script font-bold mb-12   ">Our Promises for eternity</h2>
          <p className="text-center text-wedding-cream max-w-2xl mx-auto mb-8">
            As we prepare to say ‘I do,’ these are the promises we hold in our hearts, inspired by the sea that brought us together.
          </p>
          <div className="max-w-4xl mx-auto px-4 space-y-6">
            {vows.map((vow, index) => (
              <motion.div
                key={index}
                className="bg-transparent p-6 rounded-md shadow-lg border-wedding-cream border cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                onClick={() => setActiveVow(activeVow === index ? null : index)}
              >
                <h3 className="font-serif text-2xl text-wedding-cream mb-2">{vow.title}</h3>
                <p className="text-wedding-cream">{activeVow === index ? vow.full : vow.excerpt}</p>
              </motion.div>
            ))}
          </div>
        </section>



      </Parallax>





    </div>
  );
};

export default Josh;
