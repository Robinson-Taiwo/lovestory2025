"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';

const Home = () => {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleSubmit = () => {
    if (name.trim()) {
      localStorage.setItem('visitorName', name); // Optional: Store name
      router.push('/josh-zoe'); // Redirect to /josh-zoe
    }
  };

  return (
    <>
    <div className="relative h-screen bg-wedding-olive flex flex-col items-center justify-center w-full overflow-hidden">
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/30 z-0"></div>

  {/* Corner Flowers */}
  {[
    { pos: "top-0 left-0", rotate: "rotate-90" },
    { pos: "top-0 right-0", rotate: "rotate-180" },
    { pos: "bottom-0 left-0", rotate: "" },
    { pos: "bottom-0 right-0", rotate: "rotate-270" },
  ].map(({ pos, rotate }, i) => (
    <div
      key={i}
      className={`absolute ${pos} h-[25vw] w-[25vw] md:h-[20vw] md:w-[20vw] lg:h-[18vw] lg:w-[18vw] xl:h-[15vw] xl:w-[15vw] max-h-[250px] max-w-[250px]`}
    >
      <Image
        src="/images/flower.png"
        alt="Floral decoration"
        layout="fill"
        objectFit="cover"
        quality={85}
        priority
        className={`${rotate}`}
      />
    </div>
  ))}

  {/* Center Content */}
  <div className="flex relative z-10 w-full h-full max-w-5xl items-center justify-center px-4">
    <div className="w-full flex flex-col items-center text-center">
      {/* Names */}
      <div className="font-parisienne font-bold text-wedding-gold flex flex-col gap-4 text-[clamp(2.5rem,6vw,5.5rem)] leading-tight">
        <h1>Zoe Abidemi</h1>
        &<h1>Joshua Iyanu</h1>
      </div>

      {/* Hashtag */}
      <p className="mt-2 md:text-lg text-sm font-greatVibes text-wedding-gold mb-6">
        #JZ Love Story’25
      </p>

      {/* Dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <Button
            className="mt-6 lg:mt-8 rounded-full bg-transparent border-wedding-gold text-wedding-gold font-allura py-3 px-8 text-lg md:text-2xl hover:bg-wedding-wine hover:text-wedding-cream transition-colors border cursor-pointer"
          >
            Continue
          </Button>
        </DialogTrigger>

        <DialogContent className="bg-wedding-gold text-center rounded-xl flex flex-col items-center justify-center rounded-t-full shadow-2xl xs:h-[100%] h-[70%] px-6 py-10 w-full max-w-[90vw] sm:max-w-md md:max-w-lg xl:max-w-xl  border text-wedding-wine border-wedding-wine">
          <Image
            src="/images/weddingGuysss.png"
            alt="Floral decoration"
            objectFit="cover"
            quality={85}
            priority
            height={200}
            width={200}
            className="h-20 w-30 flex-wrap relative"
          />

          <DialogHeader>
            <DialogTitle className="text-3xl sm:text-4xl font-parisienne font-extrabold text-center text-wedding-olive">
              Welcome
            </DialogTitle>
            <DialogDescription className="text-sm font-cinzel font-medium text-center text-wedding-wine">
              Let the couple know you viewed this website
            </DialogDescription>
          </DialogHeader>

          {/* Name Input */}
          <div className="grid gap-4 py-4">
            <Input
              id="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="please enter your name"
              className="w-full bg-transparent outline-none placeholder:text-center text-center text-base
                border-0 border-b-2 border-b-wedding-wine 
                focus:!border-b-2 focus:!border-b-wedding-wine 
                focus:!ring-0 focus:!outline-none 
                placeholder:font-dancing-script text-wedding-charcoal font-lora rounded-none"
            />
          </div>


          <p className="text-wedding-wine  text-sm ">you need to write your name to access the website</p>

          {/* Button */}
          <DialogFooter className="flex   items-center justify-center  w-[80%]">
            <Button
              type="submit"
              onClick={handleSubmit}
              disabled={!name.trim()}
              className=" rounded-full bg-transparent self-center  flex  text-wedding-charcoal font-lora py-2 px-6 border w-full border-wedding-wine hover:bg-wedding-wine/80 hover:text-wedding-cream focus:ring-2 active:outline-none active:border-wedding-wine  focus:ring-wedding-gold focus:ring-offset-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continue
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  </div>
</div>

    </>
  );
};

export default Home;