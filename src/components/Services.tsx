import { BatteryCharging, Building2, Cable, Home, Lightbulb, PlugZap, Siren, Zap } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { services } from '@/data/siteContent';

const iconMap = {
  Home,
  Zap,
  Lightbulb,
  Cable,
  BatteryCharging,
  PlugZap,
  Building2,
  Siren,
};

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Everything your home or business needs to stay powered"
          description="From a single broken outlet to a full commercial build-out, our licensed team handles it with the same care and attention."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <article
                key={service.title}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-navy-200 hover:shadow-xl"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-50 text-navy-800 transition-colors duration-300 group-hover:bg-amber-400 group-hover:text-navy-950">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-6 text-xl font-bold text-navy-950">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.description}</p>
                <ul className="mt-6 space-y-2 border-t border-slate-100 pt-6">
                  {service.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
