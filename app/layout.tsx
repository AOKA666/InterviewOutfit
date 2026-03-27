import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";
import { absoluteUrl, pageTitle, siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: pageTitle("Interview Outfit Generator"),
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: pageTitle("Interview Outfit Generator"),
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: absoluteUrl(siteConfig.ogImage),
        width: 1200,
        height: 630,
        alt: "Interview Outfit Generator"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle("Interview Outfit Generator"),
    description: siteConfig.description,
    images: [absoluteUrl(siteConfig.ogImage)]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/blog?query={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en">
      <body>
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="RJZFZznkI3bpmPtbio5Npg"
          strategy="afterInteractive"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
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
