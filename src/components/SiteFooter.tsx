import { Phone, Zap } from 'lucide-react';
import { business, serviceArea } from '@/data/siteContent';

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function SiteFooter() {
  return (
    <footer className="bg-navy-950 text-navy-200">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#top" className="flex items-center gap-3 font-bold text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400 text-navy-950">
              <Zap className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span className="text-lg tracking-tight">{business.name}</span>
          </a>
          <p className="mt-5 text-sm leading-relaxed text-navy-200">{business.tagline}</p>
          <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-amber-400">{business.license}</p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-white">Explore</h4>
          <ul className="mt-5 space-y-3">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm transition-colors hover:text-amber-300">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-white">Service Area</h4>
          <ul className="mt-5 space-y-3">
            {serviceArea.towns.map((town) => (
              <li key={town.name} className="text-sm">
                {town.name}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-widest text-white">Get in Touch</h4>
          <a
            href={business.phoneHref}
            className="mt-5 flex items-center gap-2 text-lg font-bold text-white transition-colors hover:text-amber-300"
          >
            <Phone className="h-5 w-5 text-amber-400" />
            {business.phone}
          </a>
          <p className="mt-3 text-sm">Emergency: {business.emergencyLine}</p>
          <p className="mt-5 text-sm leading-relaxed">{business.address}</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-6 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            &copy; {new Date().getFullYear()} {business.name}. All rights reserved. Established {business.founded}.
          </p>
          <p>Dummy demo site. All business details are fictional.</p>
        </div>
      </div>
    </footer>
  );
}
