import type { Metadata } from "next";
import "./css/globals.css";
import Header from "@/shared/components/ui/header";
import {
  Host_Grotesk,
  Instrument_Sans,
  DM_Sans,
  Bungee,
  Plus_Jakarta_Sans,
  Cardo,
  Poppins,
  Space_Grotesk,
} from "next/font/google";

const HOST_GROTESK = Host_Grotesk({
  subsets: ["latin"],
  variable: "--font-host",
  display: "swap",
});

const INSTRUMENT_SANS = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
});

const BUNGEE_FONT = Bungee({
  subsets: ["latin"],
  variable: "--font-bungee",
  weight: "400",
  display: "swap",
});

const PLUS_JAKARTA_SANS = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const DM_SANS_FONT = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const CARDO = Cardo({
  subsets: ["latin"],
  variable: "--font-cardo",
  weight: ["400", "700"],
  display: "swap",
});

const POPPINS = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

const SPACE_GROTESK = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Quantiqo Labs",
    template: "%s | Quantiqo Labs",
  },
  description:
    "Quantiqo Labs designs and builds high-performance digital products — branding, web apps, and interactive experiences for ambitious companies.",
  metadataBase: new URL("https://quantiqolabs.com"),
  openGraph: {
    type: "website",
    siteName: "Quantiqo Labs",
    title: "Quantiqo Labs",
    description:
      "Quantiqo Labs designs and builds high-performance digital products — branding, web apps, and interactive experiences for ambitious companies.",
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quantiqo Labs",
    description:
      "Quantiqo Labs designs and builds high-performance digital products — branding, web apps, and interactive experiences for ambitious companies.",
    images: ["/og-default.png"],
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <body
        cz-shortcut-listen="true"
        className={`${HOST_GROTESK.variable} ${INSTRUMENT_SANS.variable} ${DM_SANS_FONT.variable} ${BUNGEE_FONT.variable} ${PLUS_JAKARTA_SANS.variable} ${CARDO.variable} ${POPPINS.variable} ${SPACE_GROTESK.variable} ${HOST_GROTESK.className} bg-black text-white h-dvh`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
