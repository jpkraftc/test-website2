import { useEffect, useState } from 'react';
import { Menu, Phone, X, Zap } from 'lucide-react';
import { business } from '@/data/siteContent';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Service Area', href: '#service-area' },
  { label: 'Projects', href: '#projects' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const solid = scrolled || menuOpen;
  const textColor = solid ? 'text-navy-950' : 'text-white';
  const linkColor = solid ? 'text-slate-700 hover:text-navy-900' : 'text-white/90 hover:text-white';

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid ? 'bg-white/95 shadow-sm backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 sm:px-8">
        <a href="#top" className={`flex items-center gap-3 font-bold transition-colors ${textColor}`}>
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400 text-navy-950 shadow-md">
            <Zap className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="text-lg tracking-tight">{business.name}</span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition-colors ${linkColor}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={business.phoneHref}
            className={`flex items-center gap-2 text-sm font-semibold transition-colors ${linkColor}`}
          >
            <Phone className="h-4 w-4" />
            {business.phone}
          </a>
          <a
            href="#contact"
            className="rounded-full bg-amber-400 px-5 py-2.5 text-sm font-bold text-navy-950 shadow-md transition-all hover:-translate-y-0.5 hover:bg-amber-300 hover:shadow-lg"
          >
            Free Estimate
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className={`flex h-11 w-11 items-center justify-center rounded-lg transition-colors lg:hidden ${textColor}`}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-6 pb-6 pt-4 shadow-lg lg:hidden">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-slate-100 py-3.5 text-base font-semibold text-navy-950"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-5 flex flex-col gap-3">
            <a
              href={business.phoneHref}
              className="flex items-center justify-center gap-2 rounded-full border border-navy-200 px-5 py-3 text-sm font-bold text-navy-900"
            >
              <Phone className="h-4 w-4" />
              {business.phone}
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-amber-400 px-5 py-3 text-center text-sm font-bold text-navy-950"
            >
              Request a Free Estimate
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
