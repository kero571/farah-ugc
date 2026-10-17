import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";

const sans = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap", variable: "--font-sans" });
const serif = Playfair_Display({ subsets: ["latin"], style: ["normal", "italic"], weight: ["600", "700", "800"], display: "swap", variable: "--font-serif" });

export const viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#0d0808" };

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.title, template: "%s | Farah UGC" },
  description: SITE.description,
  keywords: ["UGC creator", "beauty UGC", "skincare UGC", "hair care content creator", "food content creator", "TikTok ads creator", "Meta ads UGC", "GRWM", "product reviews"],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  alternates: { canonical: "/", types: { "text/plain": "/llms.txt" } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "website", locale: "en_US", url: SITE.url, siteName: SITE.brand, title: SITE.title, description: SITE.description, images: [{ url: "/profile.jpg", width: 854, height: 1280, alt: "Farah, UGC creator" }] },
  twitter: { card: "summary_large_image", title: SITE.title, description: SITE.description, images: ["/profile.jpg"] },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
