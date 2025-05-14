import type { Metadata } from 'next';
import {
  Playfair_Display,
  Great_Vibes,
  Lora,
  Cinzel,
  Dancing_Script,
  Allura,
  Open_Sans,
  Montserrat,
  Parisienne,
  Herr_Von_Muellerhoff,
  Sacramento,
} from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import Head from 'next/head';

// Configure fonts with CSS variables for Tailwind
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-great-vibes',
});

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lora',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-cinzel',
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-dancing-script',
});

const allura = Allura({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-allura',
});



const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-open-sans',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-montserrat',
});

const parisienne = Parisienne({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-parisienne',
});

const herrVonMuellerhoff = Herr_Von_Muellerhoff({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-herr-von-muellerhoff',
});

const sacramento = Sacramento({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-sacramento',
});

export const metadata: Metadata = {
  title: 'JZ loveStory 2025',
  description: 'Join us for a celebration of love and unity between Joshua and Zoe',
  openGraph: {
    title: 'JZ loveStory 2025',
    description: 'Join us for a celebration of love and unity between Joshua and Zoe',
    images: ['/images/image1.png'],
    url: 'https://lovestory2025.vercel.app/',
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
<link  rel="icon" href='/favicon.ico' />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="JZ loveStory 2025" />
        <meta property="og:description" content="Celebrate love and unity with the latest couple, Joshua and Zoe Taiwo" />
        <meta property="og:image" content="/images/image1.png" />
        <meta property="og:url" content="https://lovestory2025.vercel.app/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="JZ loveStory 2025" />
        <meta name="twitter:title" content="JZ loveStory 2025" />
        <meta name="twitter:description" content="Celebrate love and unity with the latest couple, Joshua and Zoe Taiwo!" />

      </Head>
      <body
        className={`
          ${playfair.variable}
          ${greatVibes.variable}
          ${lora.variable}
          ${cinzel.variable}
          ${dancingScript.variable}
          ${allura.variable}
          ${openSans.variable}
          ${montserrat.variable}
          ${parisienne.variable}
          ${herrVonMuellerhoff.variable}
          ${sacramento.variable}
          bg-wedding-cream text-wedding-charcoal antialiased
        `}
      >
        {children}
        <Analytics />
        <div className="flex py-4 px-4 justify-center items-center w-full text-base bg-wedding-wine font-playfair text-center text-wedding-cream">Built with fun and love by Taiwo <span className="text-wedding-gold">(@Oluwarotimi_ on X)</span>.</div>
      </body>
    </html>
  );
}