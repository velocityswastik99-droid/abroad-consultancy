import { useState } from 'react';

function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', phone: '', destination: '', goals: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((err) => ({ ...err, [name]: '' }));
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
      alert('Thank you — we will contact you soon.');
      setValues({ name: '', email: '', phone: '', destination: '', goals: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <input name="name" value={values.name} onChange={handleChange} className="input-field" placeholder="Full name" />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>
        <div>
          <input name="email" value={values.email} onChange={handleChange} className="input-field" placeholder="Email address" type="email" />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <input name="phone" value={values.phone} onChange={handleChange} className="input-field" placeholder="Phone number" />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>
        <div className="relative">
          <select name="destination" value={values.destination} onChange={handleChange} className="input-field appearance-none pr-8">
            <option value="" disabled hidden>Preferred Destination *</option>
            <option value="usa">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="canada">Canada</option>
            <option value="australia">Australia</option>
            <option value="germany">Germany</option>
          </select>
          {errors.destination && <p className="text-red-500 text-sm mt-1">{errors.destination}</p>}
        </div>
      </div>
      <textarea name="goals" value={values.goals} onChange={handleChange} className="input-field" rows="4" placeholder="Tell us about your goals" />
      <button type="submit" className="btn-primary w-full md:w-auto">
        Request Consultation
      </button>
    </form>
  );
}

export default ContactForm;
