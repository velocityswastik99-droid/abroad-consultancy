function ContactForm() {
  return (
    <form className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <input className="input-field" placeholder="Full name" />
        <input className="input-field" placeholder="Email address" type="email" />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <input className="input-field" placeholder="Phone number" />
        <select className="input-field">
          <option value="">Preferred destination</option>
          <option value="usa">United States</option>
          <option value="uk">United Kingdom</option>
          <option value="canada">Canada</option>
          <option value="australia">Australia</option>
          <option value="germany">Germany</option>
        </select>
      </div>
      <textarea className="input-field" rows="4" placeholder="Tell us about your goals" />
      <button type="submit" className="btn-primary w-full md:w-auto">
        Request Consultation
      </button>
    </form>
  );
}

export default ContactForm;
