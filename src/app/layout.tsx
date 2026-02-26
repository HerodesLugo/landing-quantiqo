import type { Metadata } from "next";
import "./css/globals.css";
import Header from "@/shared/components/ui/header";
import {Host_Grotesk} from "next/font/google"


const HOST_GROTESK = Host_Grotesk({
  subsets: ["latin"],
  variable: "--font-host",
  display: "swap",
});


export const metadata: Metadata = {
  title: "Quantiqo Labs",
  openGraph: {
    description: "",
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
        className={`${HOST_GROTESK.className} bg-black  text-white h-dvh`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
