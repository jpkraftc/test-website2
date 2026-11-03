import { Clock, MapPin } from 'lucide-react';
import { business, serviceArea } from '@/data/siteContent';

const townPins: Record<string, { top: string; left: string }> = {
  Oakridge: { top: '50%', left: '50%' },
  'Maple Valley': { top: '22%', left: '66%' },
  'Lake Haven': { top: '70%', left: '72%' },
  'Pine Hollow': { top: '30%', left: '26%' },
  'Westfield Heights': { top: '78%', left: '32%' },
  'Cedar Ridge': { top: '12%', left: '44%' },
};

export default function ServiceArea() {
  return (
    <section id="service-area" className="scroll-mt-20 bg-navy-950 py-24 text-white sm:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 sm:px-8 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-amber-400">Service Area</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">{serviceArea.headline}</h2>
          <p className="mt-4 text-base leading-relaxed text-navy-100">{serviceArea.description}</p>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {serviceArea.towns.map((town) => (
              <li
                key={town.name}
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-5 py-4 transition-colors hover:border-amber-400/60 hover:bg-white/10"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-amber-400" />
                  <span className="font-semibold text-white">{town.name}</span>
                </div>
                <span className="flex items-center gap-1.5 text-sm text-navy-200">
                  <Clock className="h-3.5 w-3.5" />
                  {town.drive}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-sm text-navy-200">
            Outside this area? Call {business.phone} and we will let you know if we can help.
          </p>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-md" aria-hidden="true">
          <div className="absolute inset-0 rounded-full border border-white/10" />
          <div className="absolute inset-[15%] rounded-full border border-white/15" />
          <div className="absolute inset-[30%] rounded-full border border-amber-400/40 bg-amber-400/5" />
          {serviceArea.towns.map((town) => {
            const pin = townPins[town.name];
            const isHome = town.name === 'Oakridge';
            return (
              <div
                key={town.name}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ top: pin.top, left: pin.left }}
              >
                <span
                  className={`block rounded-full ring-4 ring-navy-950 ${
                    isHome ? 'h-5 w-5 bg-amber-400' : 'h-3 w-3 bg-white'
                  }`}
                />
                <span
                  className={`absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap text-xs font-semibold ${
                    isHome ? 'text-amber-400' : 'text-navy-100'
                  }`}
                >
                  {town.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
