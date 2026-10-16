import type { Metadata } from "next";
import localFont from "next/font/local";


import "./globals.css";

const spaceGrotesk = localFont({
  src: "./fonts/space-grotesk-latin.woff2",
  weight: "300 700",
  display: "swap",
  variable: "--font-space-grotesk"
});

const jetBrainsMono = localFont({
  src: "./fonts/jetbrains-mono-latin.woff2",
  weight: "100 800",
  display: "swap",
  variable: "--font-jetbrains-mono"
});

export const metadata: Metadata = {
  title: "Ahmad Raza — Frontend & AI Automation Engineer",
  description:
    "Frontend development meets intelligent automation. Explore Ahmad Raza's web interfaces, AI agents, and n8n workflows.",
  metadataBase: new URL("https://razaahmad.tech"),
  keywords: [
    "Ahmad Raza",
    "Raza Ahmad",
    "Automation Developer",
    "Frontend Developer",
  ],
  openGraph: {
    title: "Ahmad Raza — Frontend & AI Automation Engineer",
    description:
      "Portfolio for Ahmad Raza, an AI Automation Developer and BSCS student focused on practical AI systems and smart web products.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`dark ${spaceGrotesk.variable} ${jetBrainsMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
