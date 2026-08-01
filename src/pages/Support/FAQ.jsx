import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import { faqs } from '../../data/faqs';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openItem, setOpenItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'general', name: 'General Questions' },
    { id: 'admission', name: 'Admission Process' },
    { id: 'visa', name: 'Visa & Immigration' },
    { id: 'scholarship', name: 'Scholarships & Funding' },
    { id: 'preparation', name: 'Test Preparation' },
  ];

  const toggleItem = (question) => {
    setOpenItem(prev => prev === question ? null : question);
  };

  const filteredFaqs = faqs[activeCategory]?.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  return (
    <>
      <Helmet>
        <title>FAQ | Frequently Asked Questions - Study Abroad</title>
        <meta name="description" content="Find answers to common questions about studying abroad, admissions, visas, scholarships, test preparation, and more." />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-200">
              Find answers to common questions about studying abroad, admissions, visas, 
              scholarships, and more.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-16">
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search for questions..."
              className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Categories Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h3 className="font-bold text-lg mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id);
                      setOpenItem(null);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg transition ${
                      activeCategory === category.id
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Contact CTA */}
              <div className="mt-8 p-6 bg-gradient-to-r from-secondary-50 to-secondary-100 rounded-xl">
                <h3 className="font-bold mb-3">Can't find your answer?</h3>
                <p className="text-sm text-gray-600 mb-4">Our experts are here to help you</p>
                <button className="w-full btn-primary">
                  Contact Support
                </button>
              </div>
            </div>
          </div>

          {/* FAQ Items */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold mb-8">
              {categories.find(c => c.id === activeCategory)?.name}
            </h2>

            {searchQuery && filteredFaqs.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold mb-2">No results found</h3>
                <p className="text-gray-600">Try searching with different keywords</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFaqs.map((faq) => (
                  <div key={faq.question} className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <button
                      onClick={() => toggleItem(faq.question)}
                      className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition"
                    >
                      <span className="font-semibold text-lg pr-8">{faq.question}</span>
                      {openItem === faq.question ? (
                        <ChevronUp size={20} className="text-primary-600 flex-shrink-0" />
                      ) : (
                        <ChevronDown size={20} className="text-primary-600 flex-shrink-0" />
                      )}
                    </button>
                    {openItem === faq.question && (
                      <div className="px-6 py-4 border-t border-gray-200">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Popular Questions */}
            <div className="mt-12">
              <h3 className="text-xl font-bold mb-6">Popular Questions</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'How much does it cost to study abroad?',
                  'What are the English language requirements?',
                  'How early should I start my application?',
                  'Can I work while studying?',
                  'What is the visa success rate?',
                  'How to get scholarships?'
                ].map((question, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveCategory('general');
                      setSearchQuery(question);
                      setOpenItems([]);
                    }}
                    className="text-left p-4 border border-gray-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition"
                  >
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-3">
                        {index + 1}
                      </div>
                      <span className="font-medium">{question}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;