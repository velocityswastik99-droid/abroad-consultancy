import { useEffect, useState } from 'react';
import { COMPANY_INFO } from '../../utils/constants.js';

const DESTINATION_OPTIONS = [
  { label: 'United Kingdom', value: 'uk' },
  { label: 'Australia', value: 'australia' },
  { label: 'United States', value: 'usa' },
  { label: 'Canada', value: 'canada' },
  { label: 'Germany', value: 'germany' },
  { label: 'Other', value: 'other' },
];

function ContactForm({ initialDestination = '', submitLabel = 'Request Consultation' }) {
  const [values, setValues] = useState({ name: '', email: '', phone: '', destination: initialDestination, goals: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialDestination) {
      setValues((prev) => ({ ...prev, destination: initialDestination }));
    }
  }, [initialDestination]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((err) => ({ ...err, [name]: '' }));
  };

  const getDestinationLabel = () => {
    return DESTINATION_OPTIONS.find((option) => option.value === values.destination)?.label || values.destination || 'Not selected';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErr = {};
    if (!values.name.trim()) newErr.name = 'Required';
    if (!values.email.trim()) newErr.email = 'Required';
    if (!values.phone.trim()) newErr.phone = 'Required';
    if (!values.destination) newErr.destination = 'Required';
    setErrors(newErr);
    if (Object.keys(newErr).length === 0) {
      const destinationLabel = getDestinationLabel();
      const subject = `Study Abroad Enquiry: ${destinationLabel}`;
      const body = `Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\nDestination: ${destinationLabel}\nMessage: ${values.goals || 'N/A'}\n\nPlease contact me about studying abroad.`;
      const mailtoLink = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
      setSubmitted(true);
      setValues({ name: '', email: '', phone: '', destination: initialDestination || '', goals: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <input
            name="name"
            value={values.name}
            onChange={handleChange}
            className="input-field"
            placeholder="Full name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <input
            name="email"
            value={values.email}
            onChange={handleChange}
            className="input-field"
            placeholder="Email address"
            type="email"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <input
            name="phone"
            value={values.phone}
            onChange={handleChange}
            className="input-field"
            placeholder="Phone number"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>
        <div className="relative">
          <select
            name="destination"
            value={values.destination}
            onChange={handleChange}
            className="input-field appearance-none pr-8"
          >
            <option value="" disabled hidden>
              Preferred Destination *
            </option>
            {DESTINATION_OPTIONS.map((country) => (
              <option key={country.value} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
          {errors.destination && <p className="text-red-500 text-sm mt-1">{errors.destination}</p>}
        </div>
      </div>

      <textarea
        name="goals"
        value={values.goals}
        onChange={handleChange}
        className="input-field"
        rows="4"
        placeholder="Tell us about your goals"
      />

      <button type="submit" className="btn-primary w-full md:w-auto">
        {submitLabel}
      </button>

      {submitted && (
        <div className="rounded-lg bg-emerald-50 border border-emerald-200 px-4 py-3 text-sm text-emerald-700">
          Thanks for your enquiry! Your details are being prepared for our support team.
        </div>
      )}
    </form>
  );
}

export default ContactForm;
