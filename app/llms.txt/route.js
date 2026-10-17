import { SITE } from "@/lib/site";
import { SERVICES, STEPS } from "@/data/content";

export const dynamic = "force-static";

// /llms.txt — ملخص نظيف للموقع لمحركات الذكاء الاصطناعي (GEO)
export function GET() {
  const text = `# ${SITE.brand}

> ${SITE.description}

Farah is a UGC (user-generated content) creator specialising in beauty, skincare, hair care, makeup, lifestyle and food content for TikTok and Meta (Instagram/Facebook) ads.

## Services and starting prices (USD)
${SERVICES.map((s) => `- ${s.title}: from ${s.price} — ${s.text}`).join("\n")}

## Process
${STEPS.map((s) => `- ${s.day} — ${s.title}: ${s.text}`).join("\n")}

## Key facts
- 50+ brand collaborations; focus on beauty & food; typical delivery 2–4 business days (first drafts within 48 hours).
- Includes 1 free round of revisions. Discounts for multi-video bundles and monthly retainers.

## Contact
- Website: ${SITE.url}
- WhatsApp: ${SITE.whatsapp}
- Instagram: ${SITE.socials.instagram}
- TikTok: ${SITE.socials.tiktok}
- Facebook: ${SITE.socials.facebook}
`;
  return new Response(text, { headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=86400" } });
}
