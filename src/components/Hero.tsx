import { ArrowRight, Clock, Phone, ShieldCheck, Star } from 'lucide-react';
import { business } from '@/data/siteContent';

const heroImage =
  'https://images.pexels.com/photos/20500461/pexels-photo-20500461.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const trustBadges = [
  { icon: ShieldCheck, label: 'Licensed & insured' },
  { icon: Clock, label: '24/7 emergency service' },
  { icon: Star, label: '4.9 average rating' },
];

export default function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[92vh] items-center overflow-hidden bg-navy-950">
      <img
        src={heroImage}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-950 via-navy-900/90 to-navy-800/70" />

      <div className="mx-auto w-full max-w-6xl px-6 pb-20 pt-32 sm:px-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 text-sm font-semibold text-amber-200">
            <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
            Now booking installs across Lane County
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Reliable electrical work, <span className="text-amber-400">done right the first time.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-navy-100">{business.tagline}</p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-7 py-4 text-base font-bold text-navy-950 shadow-lg shadow-amber-500/20 transition-all hover:-translate-y-0.5 hover:bg-amber-300"
            >
              Get a Free Estimate
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={business.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-4 text-base font-bold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              <Phone className="h-5 w-5" />
              {business.phone}
            </a>
          </div>

          <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
            {trustBadges.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2.5 text-sm font-semibold text-navy-100">
                <Icon className="h-5 w-5 text-amber-400" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
