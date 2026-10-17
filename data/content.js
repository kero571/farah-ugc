import { SITE } from "@/lib/site";
export const WORK_COVER = "/profile.jpg";
export const NAV = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#reviews", label: "Reviews" },
];

export const TOPICS = ["Skincare", "Hair", "Makeup", "Lifestyle", "Food"];
export const BRANDS = [
  "L'Oréal Paris",
  "Garnier",
  "CeraVe",
  "Vichy",
  "Rody Perfumes",
  "Alya Perfumes",
  "Skadi Bloom",
  "Miss Jello",
  "Vabilla",
  "Eureka (Kiara)",
  "Premier",
  "Skin Who",
  "Disaar",
  "PinknGreen",
  "Noon",
  "Bemart",
];

export const HERO_STATS = [
  { value: "50+", label: "Collabs" },
  { value: "High ROI", label: "Beauty & Food", gold: true },
  { value: "48h", label: "Delivery" },
];

export const ABOUT_CARDS = [
  {
    label: "Content Focus",
    title: "Beauty & Lifestyle",
    sub: "Hair, Skincare, Food",
  },
  {
    label: "Delivery Speed",
    title: "Fast & Reliable",
    sub: "2–4 Business Days",
  },
];

export const SERVICES = [
  {
    icon: "videoOff",
    chip: "Organic Content",
    title: "UGC Content Bundles",
    text: "Raw footage + professional editing, ready to post.",
    tiers: [
      { label: "1 UGC Video", price: "500 EGP" },
      { label: "2 UGC Videos", price: "900 EGP", was: "1,000 EGP" },
      { label: "3 UGC Videos", price: "1,300 EGP", was: "1,500 EGP" },
      { label: "4 UGC Videos", price: "1,700 EGP", was: "2,000 EGP" },
      { label: "5 UGC Videos", price: "2,000 EGP", was: "2,500 EGP", badge: "Best Value" },
    ],
  },
  {
    icon: "gauge",
    chip: "Paid Ads",
    title: "Single Video · Ad Rights",
    text: "Use one video as a paid ad on your brand's accounts.",
    tiers: [
      { label: "1 Month", price: "1,500 EGP" },
      { label: "2 Months", price: "2,000 EGP", was: "2,500 EGP" },
      { label: "3 Months", price: "2,500 EGP", badge: "Most Popular" },
    ],
  },
  {
    icon: "cube",
    chip: "Best Deal",
    title: "The Golden Bundle",
    text: "2 distinct video ads for your brand, with 3 full months of ad usage rights per video. Double the content variety to test and scale.",
    tiers: [
      { label: "2 Video Ads", price: "4,000 EGP", was: "5,000 EGP", badge: "Save 1,000 EGP" },
    ],
    featured: true,
  },
];
export const FILTERS = [
  { id: "all", label: "All Work" },
  { id: "skincare", label: "Skincare" },
  { id: "makeup", label: "Makeup" },
  { id: "hair", label: "Hair Care" },
  { id: "lifestyle", label: "Lifestyle" },
];

export const WORKS = Array.from({ length: 7 }, (_, i) => ({
  id: i + 1,
  src: `/videos/${i + 1}.mp4`,
}));

export const STEPS = [
  {
    n: "01",
    title: "Brief & Goals",
    text: "We align on your target audience, value propositions, key visual hooks, and campaign specifications.",
    day: "Day 1",
  },
  {
    n: "02",
    title: "Concept & Script",
    text: "I draft 2–3 scroll-stopping angles and talking scripts for your rapid approval before shooting.",
    day: "Day 2",
  },
  {
    n: "03",
    title: "Create & Film",
    text: "High-definition 4K 60fps filming using professional lighting, genuine reactions, and crisp clean audio.",
    day: "Day 3",
  },
  {
    n: "04",
    title: "Deliver & Revise",
    text: "Edited drafts delivered with dynamic captions. Includes 1 free round of revisions for your peace of mind.",
    day: "Day 4",
  },
];

export const REVIEWS = [
  { type: "image", src: "/reviews/1.jpg" },
  { type: "image", src: "/reviews/2.jpg" },
  { type: "image", src: "/reviews/3.jpg" },
  { type: "image", src: "/reviews/4.jpg" },
  { type: "video", src: "/reviews/5.mp4" },
];
export const SOCIALS = [
  { icon: "instagram", label: "Instagram", href: SITE.socials.instagram },
  { icon: "tiktok", label: "TikTok", href: SITE.socials.tiktok },
];
