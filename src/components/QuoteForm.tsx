import { useState, type FormEvent } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import { serviceTypes } from '@/data/siteContent';
import { supabase } from '@/lib/supabase';

interface FormValues {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;
type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

const emptyValues: FormValues = { name: '', email: '', phone: '', service: '', message: '' };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = 'Please tell us your name.';
  if (!emailPattern.test(values.email.trim())) errors.email = 'Enter a valid email address.';
  if (!values.service) errors.service = 'Choose the service you need.';
  if (values.message.length > 2000) errors.message = 'Please keep your message under 2000 characters.';
  return errors;
}

const fieldClass =
  'mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-navy-950 placeholder:text-slate-400 transition-colors focus:border-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-100';

export default function QuoteForm() {
  const [values, setValues] = useState<FormValues>(emptyValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const updateField = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus('submitting');
    const { error } = await supabase.from('quote_requests').insert({
      name: values.name.trim(),
      email: values.email.trim(),
      phone: values.phone.trim() || null,
      service: values.service,
      message: values.message.trim() || null,
    });

    if (error) {
      setStatus('error');
      return;
    }
    setValues(emptyValues);
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-emerald-200 bg-emerald-50 p-10 text-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500 text-white">
          <CheckCircle2 className="h-9 w-9" />
        </span>
        <h3 className="mt-6 text-2xl font-bold text-navy-950">Thanks, your request is in</h3>
        <p className="mt-3 max-w-md text-base leading-relaxed text-slate-700">
          A Brightline team member will review your details and reach out within one business day to schedule your free estimate.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-8 rounded-full border border-navy-200 px-6 py-3 text-sm font-bold text-navy-900 transition-colors hover:bg-white"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl sm:p-10">
      <h3 className="text-2xl font-bold text-navy-950">Request a free estimate</h3>
      <p className="mt-2 text-sm text-slate-600">Tell us about your project and we will get back to you quickly.</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="quote-name" className="text-sm font-semibold text-navy-950">
            Full name <span className="text-red-600">*</span>
          </label>
          <input
            id="quote-name"
            type="text"
            autoComplete="name"
            maxLength={100}
            value={values.name}
            onChange={(event) => updateField('name', event.target.value)}
            placeholder="Jane Smith"
            aria-invalid={Boolean(errors.name)}
            className={fieldClass}
          />
          {errors.name && <p className="mt-1.5 text-xs font-medium text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="quote-email" className="text-sm font-semibold text-navy-950">
            Email <span className="text-red-600">*</span>
          </label>
          <input
            id="quote-email"
            type="email"
            autoComplete="email"
            maxLength={255}
            value={values.email}
            onChange={(event) => updateField('email', event.target.value)}
            placeholder="jane@example.com"
            aria-invalid={Boolean(errors.email)}
            className={fieldClass}
          />
          {errors.email && <p className="mt-1.5 text-xs font-medium text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="quote-phone" className="text-sm font-semibold text-navy-950">
            Phone <span className="font-normal text-slate-500">(optional)</span>
          </label>
          <input
            id="quote-phone"
            type="tel"
            autoComplete="tel"
            maxLength={30}
            value={values.phone}
            onChange={(event) => updateField('phone', event.target.value)}
            placeholder="(555) 000-0000"
            className={fieldClass}
          />
        </div>

        <div>
          <label htmlFor="quote-service" className="text-sm font-semibold text-navy-950">
            Service needed <span className="text-red-600">*</span>
          </label>
          <select
            id="quote-service"
            value={values.service}
            onChange={(event) => updateField('service', event.target.value)}
            aria-invalid={Boolean(errors.service)}
            className={fieldClass}
          >
            <option value="">Select a service</option>
            {serviceTypes.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.service && <p className="mt-1.5 text-xs font-medium text-red-600">{errors.service}</p>}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="quote-message" className="text-sm font-semibold text-navy-950">
            Project details <span className="font-normal text-slate-500">(optional)</span>
          </label>
          <textarea
            id="quote-message"
            rows={4}
            maxLength={2000}
            value={values.message}
            onChange={(event) => updateField('message', event.target.value)}
            placeholder="Tell us about the work, the age of the home or building, and any timing needs."
            aria-invalid={Boolean(errors.message)}
            className={`${fieldClass} resize-y`}
          />
          {errors.message && <p className="mt-1.5 text-xs font-medium text-red-600">{errors.message}</p>}
        </div>
      </div>

      {status === 'error' && (
        <p role="alert" className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          We could not send your request just now. Please try again, or call us directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-navy-950 px-7 py-4 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-navy-800 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
      >
        {status === 'submitting' ? 'Sending...' : 'Send My Request'}
        {status !== 'submitting' && <Send className="h-4 w-4" />}
      </button>
      <p className="mt-4 text-center text-xs text-slate-500">We respond to every request within one business day.</p>
    </form>
  );
}
