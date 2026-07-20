import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, Tag, ArrowRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../../data/blog';

const categories = ['All', 'Admissions', 'Visa', 'Scholarships', 'Test Prep', 'Student Life'];

const BlogHome = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const featuredPost = useMemo(() => BLOG_POSTS.find((post) => post.featured) || BLOG_POSTS[0], []);

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'All') return BLOG_POSTS;
    return BLOG_POSTS.filter((post) => post.category === activeCategory);
  }, [activeCategory]);

  const latestPosts = useMemo(() => BLOG_POSTS.slice(0, 6), []);

  return (
    <>
      <Helmet>
        <title>Blog | Future path career Insights</title>
        <meta
          name="description"
          content="Study abroad tips, admissions guidance, visa updates, scholarship resources, and student success stories."
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-[#1a1a2e] text-white">
        <div className="container-custom py-16 md:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/15 rounded-full px-4 py-2 text-sm mb-6">
              <Tag size={14} />
              <span>Guides • Updates • Success Stories</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Study Abroad Blog</h1>
            <p className="text-lg text-white/70">
              Practical, proven guidance to help you plan, apply, and succeed abroad.
            </p>
          </div>
        </div>
      </section>

      {/* Featured */}
      {featuredPost && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-10 items-center bg-slate-50 rounded-2xl p-6 md:p-10 border border-slate-100">
              <div className="relative">
                {featuredPost.image ? (
                  <img src={featuredPost.image} alt={featuredPost.title} className="aspect-[4/3] rounded-2xl object-cover w-full" />
                ) : (
                  <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#1a1a2e] to-[#141427] text-white p-8 flex flex-col justify-between">
                    <div className="text-sm uppercase tracking-widest">Featured</div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-3">{featuredPost.title}</h2>
                      <p className="text-white/70">{featuredPost.excerpt}</p>
                    </div>
                  </div>
                )}
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                  <span className="inline-flex items-center gap-2">
                    <Calendar size={16} /> {featuredPost.date}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock size={16} /> {featuredPost.readTime}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <User size={16} /> {featuredPost.author}
                  </span>
                </div>
                <div className="inline-flex items-center text-sm font-semibold text-[#1a1a2e] bg-white px-3 py-1 rounded-full border border-slate-200">
                  {featuredPost.category}
                </div>
                <p className="text-gray-600 mt-4">{featuredPost.excerpt}</p>
                <Link
                  to={`/blog/${featuredPost.slug}`}
                  className="inline-flex items-center gap-2 text-[#1a1a2e] font-semibold mt-6"
                >
                  Read full article <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filters */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
                    activeCategory === category
                    ? 'bg-[#1a1a2e] text-white border-[#1a1a2e]'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-slate-300 hover:text-[#1a1a2e]'
                  }`}
                >
                  {category}
                </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition overflow-hidden"
              >
                {post.image ? (
                  <img src={post.image} alt={post.title} className="h-40 w-full object-cover rounded-t-2xl" />
                ) : (
                  <div className="h-40 bg-gradient-to-br from-slate-100 to-slate-200" />
                )}
                <div className="p-6">
                  <div className="inline-flex items-center text-xs font-semibold text-[#1a1a2e] bg-slate-50 px-3 py-1 rounded-full border border-slate-100 mb-4">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500">
                    <span className="inline-flex items-center gap-2">
                      <Calendar size={14} /> {post.date}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Clock size={14} /> {post.readTime}
                    </span>
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-[#1a1a2e] font-semibold mt-4"
                  >
                    Read more <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Latest */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Latest Articles</h2>
            <Link to="/blog" className="text-[#1a1a2e] font-semibold inline-flex items-center gap-2">
              View all <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.map((post) => (
              <div key={post.slug} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="text-xs font-semibold text-[#1a1a2e] mb-2">{post.category}</div>
                <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span className="inline-flex items-center gap-2">
                    <Calendar size={12} /> {post.date}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock size={12} /> {post.readTime}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-[#1a1a2e] text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get the latest study abroad insights</h2>
            <p className="text-white/70 mb-6">
              Weekly tips, scholarship updates, and admissions checklists.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none"
              />
              <button className="bg-secondary-600 hover:bg-secondary-700 text-white font-semibold px-6 py-3 rounded-lg transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogHome;

