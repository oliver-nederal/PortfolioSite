import type { Metadata } from "next";
import ThemeProvider from "../components/themeprovider";

import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "Oliver Nederal",
  description:
    "I am a high school student with interests in computer vision, graph traversal algorithms, and full-stack development. Read more about me and see some of my projects on this website.",
  keywords: [
    "student",
    "developer",
    "software developer",
    "software engineer",
    "fullstack developer",
    "nederal",
    "oliver nederal",
    "oliver"
  ],
  creator: "Oliver Nederal",
  robots: {
    index: true,
    follow: true,
    nocache: true
  },
  metadataBase: new URL(baseUrl),
  manifest: "/manifest.json"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="antialiased absolute inset-0 -z-10 sm:mb-0 h-fit w-full bg-white dark:bg-darkbackground
      bg-[radial-gradient(#e5e7eb_1.2px,transparent_1px)] dark:bg-[radial-gradient(rgba(255,255,255,0)_1px,transparent_1px)] [background-size:16px_16px]"
      >
        <ThemeProvider>
          <header>
            <Navbar />
          </header>
          <main className="hidden xs:block">{children}</main>
          {/* too small screen */}
          <main className="block xs:hidden pt-[80px] px-[20px]">
            <h1>This page can not be displayed properly on this device</h1>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
