import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Japan Toolkit",
    template: "%s | Japan Toolkit",
  },
  description: siteConfig.description,
  applicationName: "Japan Toolkit",
  openGraph: {
    type: "website",
    title: "Japan Toolkit",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "Japan Toolkit",
  },
  twitter: {
    card: "summary_large_image",
    title: "Japan Toolkit",
    description: siteConfig.description,
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">{`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag("js", new Date());
  gtag("config", "${GA_ID}");
`}</Script>
        </>
      )}
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.15),transparent_28%),linear-gradient(180deg,#fffaf0_0%,#fffdf8_30%,#f8fafc_100%)] font-sans text-stone-900 antialiased`}
      >
        <div className="relative min-h-screen">
          <div className="absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[linear-gradient(180deg,rgba(251,191,36,0.08),transparent)]" />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "@id": "https://japantoolkit.com/#website",
                "url": "https://japantoolkit.com",
                "name": "Japan Toolkit",
                "description": "Practical Japan trip planning tools and itineraries"
              },
              {
                "@type": "Organization",
                "@id": "https://japantoolkit.com/#organization",
                "name": "Japan Toolkit",
                "url": "https://japantoolkit.com",
                "email": "hello@japantoolkit.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://japantoolkit.com/opengraph-image",
                  "width": 1200,
                  "height": 630
                },
                "sameAs": []
              }
            ]
          }) }} />
          <SiteHeader />
          <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
