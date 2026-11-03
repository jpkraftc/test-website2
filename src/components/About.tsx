import { BadgeCheck } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { stats } from '@/data/siteContent';

const aboutImage =
  'https://images.pexels.com/photos/7285965/pexels-photo-7285965.jpeg?auto=compress&cs=tinysrgb&h=650&w=940';

const values = [
  'Every job is performed by a state-licensed electrician, never a subcontractor',
  'Upfront, itemized pricing with no surprise add-ons',
  'Clean work areas and a full walkthrough when we finish',
  'Permits pulled and inspections handled for you',
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 sm:px-8 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute -left-4 -top-4 h-full w-full rounded-3xl bg-amber-100" />
          <img
            src={aboutImage}
            alt="Electrician carefully cutting and organizing wiring"
            loading="lazy"
            className="relative h-[480px] w-full rounded-3xl object-cover shadow-xl"
          />
          <div className="absolute -bottom-6 right-6 rounded-2xl bg-navy-950 px-6 py-5 text-white shadow-xl">
            <p className="text-4xl font-bold text-amber-400">15+</p>
            <p className="mt-1 text-sm font-semibold text-navy-100">Years of trusted service</p>
          </div>
        </div>

        <div>
          <SectionHeading
            align="left"
            eyebrow="About Brightline"
            title="A local electrical company built on honest work"
            description="Brightline started in 2009 as a two-person crew fixing outlets for neighbors. Today we are a full-service electrical company with licensed electricians across Oakridge and the towns around it, and we still answer our own phones."
          />

          <ul className="mt-8 space-y-4">
            {values.map((value) => (
              <li key={value} className="flex items-start gap-3 text-base text-slate-700">
                <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" />
                {value}
              </li>
            ))}
          </ul>

          <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-slate-200 pt-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-sm font-medium text-slate-600">{stat.label}</dt>
                <dd className="mt-1 text-3xl font-bold text-navy-950">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
