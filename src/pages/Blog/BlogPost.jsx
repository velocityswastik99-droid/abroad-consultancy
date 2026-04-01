import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { Calendar, Clock, ChevronRight, Tag, User } from 'lucide-react';
import { BLOG_POSTS } from '../../data/blog';

const BlogPost = () => {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((item) => item.slug === slug);
  const related = BLOG_POSTS.filter((item) => item.slug !== slug).slice(0, 3);

  if (!post) {
    return (
      <div className="container-custom py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Article not found</h1>
        <p className="text-gray-600 mb-6">The blog post you are looking for doesn&apos;t exist.</p>
        <Link to="/blog" className="text-red-600 font-semibold">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | GlobalEduConsult Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container-custom py-12">
          <div className="flex items-center text-sm text-red-100 mb-4">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight size={14} className="mx-2" />
            <Link to="/blog" className="hover:text-white">Blog</Link>
            <ChevronRight size={14} className="mx-2" />
            <span className="text-white">{post.title}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <p className="text-red-100 max-w-3xl">{post.excerpt}</p>
          <div className="flex flex-wrap gap-4 text-sm mt-6">
            <span className="inline-flex items-center gap-2">
              <Calendar size={16} /> {post.date}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock size={16} /> {post.readTime}
            </span>
            <span className="inline-flex items-center gap-2">
              <User size={16} /> {post.author}
            </span>
            <span className="inline-flex items-center gap-2">
              <Tag size={16} /> {post.category}
            </span>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-[2fr_1fr] gap-10">
            <article className="prose max-w-none">
              {post.content.map((block) => (
                <div key={block.heading} className="mb-8">
                  <h2 className="text-2xl font-bold mb-3">{block.heading}</h2>
                  <p className="text-gray-600">{block.body}</p>
                  {block.points && (
                    <div className="mt-4 space-y-2">
                      {block.points.map((point) => (
                        <div key={point} className="flex items-start gap-2">
                          <span className="w-2 h-2 mt-2 rounded-full bg-red-500" />
                          <span className="text-gray-600">{point}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </article>

            <aside className="space-y-6">
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-2">Key Takeaways</h3>
                <div className="space-y-2">
                  {post.takeaways.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="w-2 h-2 mt-2 rounded-full bg-red-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-red-100 rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold mb-2">Need personalized guidance?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Talk to our counselors and get a custom study abroad plan.
                </p>
                <Link
                  to="/free-consultation"
                  className="inline-flex items-center justify-center w-full bg-red-600 text-white font-semibold px-4 py-3 rounded-lg"
                >
                  Book Free Consultation
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((item) => (
              <Link
                key={item.slug}
                to={`/blog/${item.slug}`}
                className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition"
              >
                <div className="text-xs font-semibold text-red-600 mb-2">{item.category}</div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{item.excerpt}</p>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <span className="inline-flex items-center gap-2">
                    <Calendar size={12} /> {item.date}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Clock size={12} /> {item.readTime}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;

