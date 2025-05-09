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
      <div className="relative h-screen bg-wedding-olive items-center justify-center flex flex-col w-full">
        <div
          className="absolute inset-0 bg-black opacity-70 bg-opacity-30 bg-center"
        ></div>
        {/* Top Left */}
        <div className="absolute top-0 left-0 h-[12rem] w-[12rem] md:h-[20rem] md:w-[20rem] xl:h-[40vh] xl:w-[30vw] 2xl:h-[30rem] 2xl:w-[30rem]">
          <Image
            src="/images/flower.png"
            alt="Floral decoration"
            layout="fill"
            objectFit="cover"
            quality={85}
            priority
            className="rotate-90"
          />
        </div>
        {/* Top Right */}
        <div className="absolute top-0 right-0 h-[12rem] w-[12rem] xl:h-[40vh] xl:w-[30vw] md:h-[20rem] md:w-[20rem] 2xl:h-[30rem] 2xl:w-[30rem]">
          <Image
            src="/images/flower.png"
            alt="Floral decoration"
            layout="fill"
            objectFit="cover"
            quality={85}
            priority
            className="rotate-180"
          />
        </div>
        {/* Bottom Left */}
        <div className="absolute bottom-0 left-0 h-[12rem] w-[12rem] md:h-[20rem] md:w-[20rem] xl:h-[40vh] xl:w-[30vw] 2xl:h-[30rem] 2xl:w-[30rem]">
          <Image
            src="/images/flower.png"
            alt="Floral decoration"
            layout="fill"
            objectFit="cover"
            quality={85}
            priority
            className=""
          />
        </div>
        {/* Bottom Right */}
        <div className="absolute bottom-0 right-0 h-[12rem] w-[12rem] md:h-[20rem] md:w-[20rem] xl:h-[40vh] xl:w-[30vw] 2xl:h-[30rem] 2xl:w-[30rem]">
          <Image
            src="/images/flower.png"
            alt="Floral decoration"
            layout="fill"
            objectFit="cover"
            quality={85}
            priority
            className="rotate-270 h-full"
          />
        </div>

       
        <div className="flex relative w-full h-full max-w-5xl overflow-x-hidden">
      

      <div className="w-full flex flex-col items-center justify-center text-center text-[2rem] font-medium z-10">
        <div className="font-parisienne flex flex-col gap-4  font-bold text-wedding-gold 2xl:text-[5.5rem] text-4xl md:text-[4rem]">
          <h1>Zoe Abidemi</h1>
          &<h1>Joshua Iyanu</h1>
        </div>
        <p className="md:text-lg text-sm font-greatVibes text-wedding-wine mb-6">#JZ Love Story’25</p>

        <Dialog>
          <DialogTrigger asChild>
            <Button
              className="lg:mt-8 mt-6 rounded-full  bg-transparent border-wedding-gold text-wedding-wine font-allura py-3 px-8 text-lg hover:bg-wedding-wine hover:text-wedding-cream transition-colors duration-300 border md:text-2xl  cursor-pointer "
            >
              Continue
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-wedding-gold text-center rounded-b-md justify-center h-[50%]  flex items-center flex-col text-wedding-charcoal rounded-xl rounded-t-full shadow-2xl p-6 max-w-[90vw] sm:max-w-md md:max-w-lg lg:max-w-lg xl:max-w-[30rem] w-full transform transition-all duration-300 scale-100 sm:scale-105 border border-wedding-gold/20">

          <Image
            src="/images/weddingGuys.png"
            alt="Floral decoration"
            objectFit="cover"
            quality={85}
            priority
            height={200}
            width={200}
            className=" h-20 w-30 relative left-10  "
          />

            <DialogHeader>
              <DialogTitle className="text-4xl  font-parisienne text-center font-extrabold  text-wedding-olive ">
                Welcome, Guest
              </DialogTitle>
              <DialogDescription className="text-sm font-cinzel font-nedium text-center text-wedding-wine">
                Let the couple know you viewed this website
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="items-center gap-4">
               
                <Input
                  id="name"
                  required  
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="please enter your name"
                  className="col-span-3 border-b-wedding-wine border-t-wedding-gold border-l-wedding-gold border-r-wedding-gold 
                  focus:border-b-wedding-wine focus:border-t-wedding-gold focus:border-l-wedding-gold focus:border-r-wedding-gold 
                   outline-none focus:border-b  placeholder:font-dancing-script text-wedding-charcoal font-lora rounded-none bg-transparent border-b  w-full "
                />
              </div>
            </div>
            <DialogFooter  className="flex flex-col" >
              <Button
                type="submit"
                onClick={handleSubmit}
                disabled={!name.trim()}
                className="w-full rounded-full bg-transparent text-wedding-charcoal font-lora py-2 px-6 hover:bg-wedding-wine/80 hover:text-wedding-cream focus:ring-2 focus:ring-wedding-gold cursor-pointer focus:ring-offset-2 transition-all border-wedding-wine border duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
              >
                Continue
              </Button>
            </DialogFooter>
              <Image
            src="/images/line.png"
            alt="Floral decoration"
            objectFit="cover"
            quality={85}
            priority
            height={200}
            width={500}
            className=" h-20 w-[10rem]   "
          />
          </DialogContent>
        </Dialog>
      </div>
    </div>
    
      </div>
    </>
  );
};

export default Home;