import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Brands from "@/components/sections/Brands";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Work from "@/components/sections/Work";
import Process from "@/components/sections/Process";
import Reviews from "@/components/sections/Reviews";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { SITE } from "@/lib/site";
import { SERVICES, TOPICS } from "@/data/content";

// SEO + GEO: بيانات منظّمة (كيان + خدمات + أسعار) تفهمها محركات البحث ومحركات الذكاء الاصطناعي
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebSite", "@id": `${SITE.url}/#website`, url: SITE.url, name: SITE.brand, inLanguage: "en" },
    {
      "@type": "Person", "@id": `${SITE.url}/#person`, name: SITE.name, jobTitle: "UGC Creator", url: SITE.url,
      image: `${SITE.url}/profile.jpg`, email: SITE.email, description: SITE.tagline,
      knowsAbout: [...TOPICS, "UGC video ads", "TikTok Spark Ads", "Meta ads creatives", "Product reviews", "GRWM"],
      sameAs: Object.values(SITE.socials),
    },
    {
      "@type": "ProfessionalService", "@id": `${SITE.url}/#service`, name: SITE.brand, url: SITE.url, image: `${SITE.url}/profile.jpg`,
      description: SITE.description, founder: { "@id": `${SITE.url}/#person` }, areaServed: "Worldwide", priceRange: "$150–$280",
      hasOfferCatalog: {
        "@type": "OfferCatalog", name: "UGC content packages",
        itemListElement: SERVICES.map((s) => ({
          "@type": "Offer", priceCurrency: "USD",
          priceSpecification: { "@type": "PriceSpecification", minPrice: s.amount, priceCurrency: "USD" },
          itemOffered: { "@type": "Service", name: s.title, description: s.text },
        })),
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Brands />
        <About />
        <Services />
        <Work />
        <Process />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
