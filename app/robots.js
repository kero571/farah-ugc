import { SITE } from "@/lib/site";

// السماح الصريح لزواحف الذكاء الاصطناعي (GEO) إلى جانب محركات البحث
export default function robots() {
  const ai = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-SearchBot", "PerplexityBot", "Google-Extended", "Applebot-Extended"];
  return {
    rules: [{ userAgent: "*", allow: "/" }, ...ai.map((userAgent) => ({ userAgent, allow: "/" }))],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
