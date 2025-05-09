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
  title: 'HarmoniQ Wedding',
  description: 'Join us for a celebration of love and unity',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
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
      </body>
    </html>
  );
}