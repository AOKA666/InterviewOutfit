import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Interview Outfit Generator | Find the Perfect Interview Look",
  description:
    "Use our interview outfit generator to find the best outfit for your job interview based on industry and dress code."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/80 backdrop-blur">
          <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-6">
            <Link href="/" className="text-sm font-bold tracking-wide text-ink">
              Interview Outfit
            </Link>
            <div className="flex gap-5 text-sm text-slate-700">
              <Link href="/interview-outfit-generator">Generator</Link>
              <Link href="/blog">Blog</Link>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
