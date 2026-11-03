import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import { galleryItems } from '@/data/siteContent';

const categories = ['All', ...Array.from(new Set(galleryItems.map((item) => item.category)))];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const visibleItems =
    activeCategory === 'All' ? galleryItems : galleryItems.filter((item) => item.category === activeCategory);

  const isOpen = openIndex !== null;
  const current = openIndex !== null ? visibleItems[openIndex] : undefined;

  const showPrevious = () =>
    setOpenIndex((index) => (index === null ? null : (index - 1 + visibleItems.length) % visibleItems.length));
  const showNext = () =>
    setOpenIndex((index) => (index === null ? null : (index + 1) % visibleItems.length));

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenIndex(null);
      if (event.key === 'ArrowLeft') setOpenIndex((index) => (index === null ? null : (index - 1 + visibleItems.length) % visibleItems.length));
      if (event.key === 'ArrowRight') setOpenIndex((index) => (index === null ? null : (index + 1) % visibleItems.length));
    };
    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, visibleItems.length]);

  return (
    <section id="projects" className="scroll-mt-20 bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Recent Projects"
          title="A look at the work we are proud of"
          description="Panel upgrades, lighting installs, and commercial builds from the past year across our service area."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => {
            const active = category === activeCategory;
            return (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setActiveCategory(category);
                  setOpenIndex(null);
                }}
                aria-pressed={active}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                  active
                    ? 'bg-navy-950 text-white shadow-md'
                    : 'bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-navy-50 hover:text-navy-900'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleItems.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setOpenIndex(index)}
              className="group relative overflow-hidden rounded-2xl bg-navy-900 text-left shadow-sm transition-shadow duration-300 hover:shadow-xl"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-amber-400">{item.category}</p>
                  <p className="mt-1 text-lg font-bold text-white">{item.title}</p>
                </div>
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  <ZoomIn className="h-5 w-5" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-navy-950/90 p-4 backdrop-blur-sm"
          onClick={() => setOpenIndex(null)}
        >
          <div className="relative w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <img
              src={current.src.replace('h=650&w=940', 'h=900&w=1400')}
              alt={current.alt}
              className="max-h-[78vh] w-full rounded-2xl object-contain"
            />
            <div className="mt-4 flex items-center justify-between text-white">
              <div>
                <p className="text-lg font-bold">{current.title}</p>
                <p className="text-sm text-navy-200">
                  {current.category} | {(openIndex ?? 0) + 1} of {visibleItems.length}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={showPrevious}
                  aria-label="Previous photo"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Next photo"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpenIndex(null)}
              aria-label="Close photo"
              className="absolute -top-3 -right-3 flex h-10 w-10 items-center justify-center rounded-full bg-amber-400 text-navy-950 shadow-lg transition-transform hover:scale-110"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
