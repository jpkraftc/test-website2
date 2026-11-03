import { Quote, Star } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { testimonials } from '@/data/siteContent';

export default function Testimonials() {
  return (
    <section id="reviews" className="scroll-mt-20 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Customer Reviews"
          title="What our neighbors and business partners say"
          description="We measure success one happy customer at a time. Here is what a few of them have shared."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
                  {Array.from({ length: testimonial.rating }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <Quote className="h-7 w-7 text-navy-200" />
              </div>

              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-slate-700">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <figcaption className="mt-8 flex items-center gap-4 border-t border-slate-200 pt-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-950 text-sm font-bold text-amber-400">
                  {testimonial.name
                    .split(' ')
                    .map((part) => part[0])
                    .slice(0, 2)
                    .join('')}
                </span>
                <div>
                  <p className="font-bold text-navy-950">{testimonial.name}</p>
                  <p className="text-sm text-slate-600">
                    {testimonial.location} | {testimonial.service}
                  </p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
