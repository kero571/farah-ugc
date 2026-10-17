import ReviewsCarousel from "../ReviewsCarousel";
import SectionHeading, { Em } from "../ui/SectionHeading";
import { REVIEWS } from "@/data/content";

export default function Reviews() {
  return (
    <section id="reviews" aria-labelledby="reviews-title" className="section container-x defer">
      <SectionHeading id="reviews-title" eyebrow="05 / Testimonials">Loved by brands &amp; <Em>agencies</Em>.</SectionHeading>
      <ReviewsCarousel items={REVIEWS} />
    </section>
  );
}
