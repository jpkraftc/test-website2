import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm';
import SectionHeading from '@/components/SectionHeading';
import { business } from '@/data/siteContent';

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 sm:px-8 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Contact Us"
            title="Let us take a look at your project"
            description="Send us the details or give us a call. Free estimates are available for most residential jobs within our service area."
          />

          <ul className="mt-10 space-y-6">
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-800">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="font-bold text-navy-950">Call us</p>
                <a href={business.phoneHref} className="text-slate-600 transition-colors hover:text-amber-700">
                  {business.phone}
                </a>
                <p className="text-sm text-slate-500">Emergency line: {business.emergencyLine}</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-800">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="font-bold text-navy-950">Email</p>
                <a href={`mailto:${business.email}`} className="text-slate-600 transition-colors hover:text-amber-700">
                  {business.email}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-800">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="font-bold text-navy-950">Office</p>
                <p className="text-slate-600">{business.address}</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-800">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <p className="font-bold text-navy-950">Office hours</p>
                <ul className="mt-1 space-y-1">
                  {business.hours.map((hour) => (
                    <li key={hour.label} className="flex justify-between gap-8 text-sm text-slate-600">
                      <span>{hour.label}</span>
                      <span className="font-semibold text-navy-900">{hour.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <QuoteForm />
      </div>
    </section>
  );
}
