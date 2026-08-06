import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";

import { ThemeProvider, themeInitScript } from "@/components/theme/ThemeProvider";

import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk"
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono"
});

export const metadata: Metadata = {
  title: "Ahmad Raza | AI Automation Developer",
  description:
    "Ahmad Raza builds AI agents, n8n automations, SaaS MVP prototypes, and modern Next.js interfaces with a premium AI-startup aesthetic.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Ahmad Raza | AI Automation Developer",
    description:
      "Portfolio for Ahmad Raza, an AI Automation Developer and BSCS student focused on practical AI systems and smart web products.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${jetBrainsMono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}