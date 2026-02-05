import { useState } from 'react';

function FAQItem({ item }) {
  const [open, setOpen] = useState(false);

  if (!item) {
    return (
      <div className="bg-white rounded-lg border border-gray-100 p-4">FAQ item</div>
    );
  }

  return (
    <div className="bg-white rounded-lg border border-gray-100 p-4">
      <button
        type="button"
        className="w-full flex items-center justify-between text-left"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="font-semibold">{item.question}</span>
        <span className="text-primary-600 text-lg">{open ? '-' : '+'}</span>
      </button>
      {open ? <p className="text-gray-600 text-sm mt-3">{item.answer}</p> : null}
    </div>
  );
}

export default FAQItem;
