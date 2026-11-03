import SectionHeading from '@/components/SectionHeading';
import { processSteps } from '@/data/siteContent';

export default function Process() {
  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="From first call to finished project in four steps"
          description="No runaround and no guesswork. You always know what happens next."
        />

        <ol className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <li
              key={step.title}
              className="group relative rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-950 text-lg font-bold text-amber-400 transition-colors group-hover:bg-amber-400 group-hover:text-navy-950">
                {index + 1}
              </span>
              <h3 className="mt-6 text-lg font-bold text-navy-950">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
