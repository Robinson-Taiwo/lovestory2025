"use client"
import { Parallax } from 'react-parallax';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import LoveLetters from '@/components/LoveLetters';
import VowsSection from '@/components/Vows';
import QuotesSection from '@/components/Quotes';
import { Heart, Waves, Handshake, Infinity, Quote, Book } from "lucide-react"; // or your preferred icon set



const Josh = () => {

 

  const letters = {
    Joshua: {
      title: 'To Zoe',
      content:
        'My Love, You are my answered prayer, my divine gift wrapped in grace. Each day with you feels like a testimony, and your smile is my daily miracle. Just like Ruth to Boaz, you are my blessing in season. I cherish you with a love rooted in God, guided by His light. May heaven keep us together, stronger in faith and deeper in love. My heart sings your name in every prayer. You’re my forever, my love ordained by God./n',
    },
    Zoe: {
      title: 'To Joshua',
      content:
        "Iyanu, my Love, you are more than a blessing; you are a quiet miracle wrapped in kindness, laughter, and love. In you, I’ve found strength, gentleness, and a heart that mirrors mine. You make loving you so easy, and every moment with you feels like sunlight pouring through my soul.\n\nAs we begin this new chapter as husband and wife, I want you to know that I am here—wholly and completely. In joy and in trials, in abundance and in simplicity. I will be your partner, your confidant, your encourager, and your warm hug at the end of long days.\n\nThank you for choosing me. Thank you for your patience, your prayers, your dreams, and your heart. I look forward to building with you, laughing with you, learning with you, and walking hand in hand with you through every season.\n\nwith all my love,\nyour wife,\nZoe♡.",
    },
  };

  const quotes = [
    {
      icon: <Heart className="text-wedding-gold w-6 h-6" />,
      text: '“Love bears all things, believes all things, hopes all things, endures all things.” – 1 Corinthians 13:7',
      reflection: 'Zoe: Your love carries me through the highs and lows — unwavering, enduring, and full of hope.',
    },
    {
      icon: <Book className="text-wedding-gold w-6 h-6" />,
      text: '“I have found the one whom my soul loves.” – Song of Solomon 3:4',
      reflection: 'Joshua: From the first moment, my soul recognized you — like a promise fulfilled by God Himself.',
    },
    {
      icon: <Handshake className="text-wedding-gold w-6 h-6" />,
      text: '“Two are better than one... for if they fall, one will lift up the other.” – Ecclesiastes 4:9-10',
      reflection: 'Zoe: You’re my strength when I stumble, my safe place when the world feels heavy.',
    },
    {
      icon: <Quote className="text-wedding-gold w-6 h-6" />,
      text: '“Let all that you do be done in love.” – 1 Corinthians 16:14',
      reflection: 'Joshua & Zoe: In every word, every touch, every choice — we choose love first.',
    },
    {
      icon: <Waves className="text-wedding-gold w-6 h-6" />,
      text: '“Many waters cannot quench love; rivers cannot wash it away.” – Song of Solomon 8:7',
      reflection: 'Zoe: Even the waves of life can’t drown what God has written on our hearts.',
    },
    {
      icon: <Infinity className="text-wedding-gold w-6 h-6" />,
      text: '“Above all, love each other deeply, because love covers over a multitude of sins.” – 1 Peter 4:8',
      reflection: 'Joshua: Your grace teaches me how to love beyond flaws — just as Christ loved us.',
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
            10.05.25 | Joshua & Zoe | Forever by the Shore
          </p>
          <p className="text-sm text-wedding-white">
            A Home built in God with Jesus at the center
          </p>

           <Link href="/gift"  className=" mt-6 " > <Button  className=" mt-6 bg-transparent border rounded-md border-wedding-cream text-lg p-6  text-wedding-cream" >  Gift the couple</Button></Link>

          
        </div>
      </section>

      <LoveLetters letters={letters} />

      <VowsSection vows={vows} />

      <QuotesSection quotes={quotes} />




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








    </div>
  );
};

export default Josh;
