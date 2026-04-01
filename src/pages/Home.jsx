import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import HeroSection from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import CountriesSection from '../components/sections/CountriesSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CTASection from '../components/sections/CTASection';

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const floatingParticles = useMemo(() => {
    const width = typeof window !== 'undefined' ? window.innerWidth : 1200;
    const height = typeof window !== 'undefined' ? window.innerHeight : 800;
    return Array.from({ length: 20 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      driftX: (Math.random() - 0.5) * width * 0.25,
      driftY: (Math.random() - 0.5) * height * 0.25,
      duration: 12 + Math.random() * 18,
      delay: -Math.random() * 10,
      size: 4 + Math.random() * 6,
    }));
  }, []);

  const statsOrbs = useMemo(() => {
    const width = typeof window !== 'undefined' ? window.innerWidth : 1200;
    const height = typeof window !== 'undefined' ? window.innerHeight : 800;
    return Array.from({ length: 5 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      driftX: (Math.random() - 0.5) * width * 0.3,
      driftY: (Math.random() - 0.5) * height * 0.3,
      duration: 14 + Math.random() * 16,
      delay: -Math.random() * 8,
      size: 96 + Math.floor(Math.random() * 64),
    }));
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--home-mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--home-mouse-y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animated data with roadmap elements
  const services = [
    {
      id: 1,
      slug: 'university-admissions',
      title: 'University Admissions',
      description: 'Complete guidance for university selection, application process, and admission strategies.',
      icon: '🎓',
      features: ['Personalized university shortlisting', 'Application documentation assistance', 'SOP & LOR preparation', 'Interview preparation'],
      roadmap: ['Profile Analysis', 'University Shortlist', 'Application', 'Admission']
    },
    {
      id: 2,
      slug: 'visa-assistance',
      title: 'Visa Assistance',
      description: 'End-to-end visa support from documentation to interview preparation.',
      icon: '✈️',
      features: ['Documentation checklist', 'Financial proof assistance', 'Interview preparation', 'Application filing'],
      roadmap: ['Documentation', 'Financial Proof', 'Interview Prep', 'Visa Grant']
    },
    {
      id: 3,
      slug: 'test-preparation',
      title: 'Test Preparation',
      description: 'Expert coaching for IELTS, TOEFL, GRE, GMAT, SAT, and other entrance exams.',
      icon: '📝',
      features: ['Personalized study plans', 'Mock tests and practice sessions', 'Score improvement strategies', 'Test-taking techniques'],
      roadmap: ['Diagnostic Test', 'Study Plan', 'Practice', 'Target Score']
    }
  ];

  const countries = [
    {
      id: 1,
      slug: 'usa',
      name: 'United States',
      title: 'Study in USA',
      description: 'World-class education with extensive research opportunities and diverse cultural experiences.',
      universities: 4000,
      averageTuition: '$25,000 - $50,000',
      popularCourses: ['Computer Science', 'Business Administration'],
      flag: '🇺🇸'
    },
    {
      id: 2,
      slug: 'uk',
      name: 'United Kingdom',
      title: 'Study in UK',
      description: 'Historic universities with globally recognized degrees and shorter course durations.',
      universities: 160,
      averageTuition: '£12,000 - £35,000',
      popularCourses: ['Law', 'Medicine'],
      flag: '🇬🇧'
    },
    {
      id: 3,
      slug: 'canada',
      name: 'Canada',
      title: 'Study in Canada',
      description: 'High-quality education, affordable tuition fees, and excellent post-study work opportunities.',
      universities: 96,
      averageTuition: 'CAD 15,000 - CAD 35,000',
      popularCourses: ['Computer Science', 'Business'],
      flag: '🇨🇦'
    },
    {
      id: 4,
      slug: 'australia',
      name: 'Australia',
      title: 'Study in Australia',
      description: 'Innovative education system with strong focus on research and industry connections.',
      universities: 43,
      averageTuition: 'AUD 20,000 - AUD 45,000',
      popularCourses: ['Hospitality', 'Engineering'],
      flag: '🇦🇺'
    },
    {
      id: 5,
      slug: 'germany',
      name: 'Germany',
      title: 'Study in Germany',
      description: 'Tuition-free education at public universities with strong engineering programs.',
      universities: 400,
      averageTuition: '€0 - €20,000',
      popularCourses: ['Engineering', 'Computer Science'],
      flag: '🇩🇪'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Rahul Sharma',
      university: 'Stanford University',
      country: 'USA',
      quote: 'GlobalEduConsult helped me secure admission to my dream university with a 50% scholarship. Their guidance was invaluable throughout the process.',
      rating: 5
    },
    {
      id: 2,
      name: 'Priya Patel',
      university: 'University of Oxford',
      country: 'UK',
      quote: 'The visa assistance and interview preparation were exceptional. I got my UK student visa in just 2 weeks!',
      rating: 5
    },
    {
      id: 3,
      name: 'Amit Kumar',
      university: 'University of Toronto',
      country: 'Canada',
      quote: 'From university selection to accommodation, they handled everything perfectly. Now I\'m pursuing my Master\'s in Canada.',
      rating: 5
    }
  ];

  // Floating particles animation in red theme
  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingParticles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-red-500/20 rounded-full"
          initial={{
            x: particle.x,
            y: particle.y,
          }}
          animate={{
            x: [particle.x, particle.x + particle.driftX],
            y: [particle.y, particle.y + particle.driftY],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
          style={{ width: particle.size, height: particle.size }}
        />
      ))}
    </div>
  );

  // Roadmap path component
  const RoadmapPath = ({ items, className = "" }) => (
    <div className={`relative ${className}`}>
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-red-300 via-red-500 to-red-300 transform -translate-y-1/2" />
      <div className="relative flex justify-between">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="flex flex-col items-center"
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="w-10 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10"
            >
              {index + 1}
            </motion.div>
            <span className="mt-2 text-sm font-medium text-gray-700">{item}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="relative">
      <Helmet>
        <title>GlobalEduConsult | Study Abroad Experts for USA, UK, Canada, Australia, Germany</title>
        <meta name="description" content="Expert study abroad consultancy for USA, UK, Canada, Australia & Germany. University admissions, visa assistance, scholarship guidance & test preparation." />
        <meta name="keywords" content="study abroad, education consultants, USA universities, UK education, Canada student visa, Australia study, Germany education" />
      </Helmet>

      {/* Animated Background Elements - Red Theme */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div 
          style={{ scale, rotate }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-200/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow"
        />
        <motion.div 
          style={{ scale, rotate: useTransform(rotate, [0, 360], [0, -360]) }}
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-red-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow animation-delay-2000"
        />
        <motion.div 
          style={{ scale }}
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-rose-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow animation-delay-4000"
        />
        
        {/* Red overlay effect based on mouse position */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at var(--home-mouse-x, 50%) var(--home-mouse-y, 50%), rgba(239, 68, 68, 0.15), transparent 50%)'
          }}
        />
      </div>

      <HeroSection />
      
      {/* Why Choose Us - Roadmap Style */}
      <section className="section-padding bg-gradient-to-b from-white to-red-50 relative overflow-hidden">
        <FloatingParticles />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-6 py-2 bg-red-100 text-red-600 rounded-full text-sm font-bold mb-4"
            >
              Your Journey Starts Here
            </motion.div>
            <h2 className="section-title">
              Your <span className="text-red-600">Roadmap</span> to Success
            </h2>
            <p className="section-subtitle">
              Follow our proven path to achieve your study abroad dreams
            </p>
          </motion.div>
          
          <RoadmapPath 
            items={['Discovery Call', 'Profile Assessment', 'University Selection', 'Application', 'Visa Process', 'Arrival']}
            className="mb-16"
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: '🏆',
                title: '15+ Years Excellence',
                description: 'Expert guidance from seasoned professionals with proven track record',
                delay: 0.1,
                steps: ['Founded 2008', '5000+ Students', '98% Success']
              },
              {
                icon: '🤝',
                title: 'Personalized Journey',
                description: 'Tailored solutions based on your academic background and career goals',
                delay: 0.2,
                steps: ['1-on-1 Counseling', 'Custom Strategy', 'Ongoing Support']
              },
              {
                icon: '💰',
                title: 'Scholarship Success',
                description: 'Helped students secure over ₹10 Crores in scholarships and financial aid',
                delay: 0.3,
                steps: ['Eligibility Check', 'Application', '₹10Cr+ Secured']
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: feature.delay }}
                whileHover={{ y: -10 }}
                className="relative bg-white rounded-2xl shadow-xl overflow-hidden group"
              >
                {/* Red gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                
                {/* Animated border */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-300 via-red-500 to-red-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                
                <div className="p-8">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6 shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-3xl">{feature.icon}</span>
                  </motion.div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-800">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {feature.description}
                  </p>
                  
                  {/* Mini roadmap */}
                  <div className="space-y-3">
                    {feature.steps.map((step, stepIndex) => (
                      <div key={stepIndex} className="flex items-center space-x-3">
                        <div className={`w-2 h-2 rounded-full ${
                          stepIndex === 0 ? 'bg-red-400' :
                          stepIndex === 1 ? 'bg-red-500' : 'bg-red-600'
                        }`} />
                        <span className="text-sm text-gray-600">{step}</span>
                        {stepIndex < feature.steps.length - 1 && (
                          <div className="flex-1 h-0.5 bg-gradient-to-r from-red-300 to-red-500" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Stats Counter - Red Theme */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-800 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute top-0 left-0 w-full h-full">
            {statsOrbs.map((orb, i) => (
              <motion.div
                key={i}
                className="absolute bg-white/5 rounded-full"
                initial={{
                  x: orb.x,
                  y: orb.y,
                }}
                animate={{
                  x: [orb.x, orb.x + orb.driftX],
                  y: [orb.y, orb.y + orb.driftY],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: orb.duration,
                  delay: orb.delay,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear"
                }}
                style={{ width: orb.size, height: orb.size }}
              />
            ))}
          </div>
        </div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: 5000, suffix: '+', label: 'Students Placed', icon: '🎓' },
              { value: 98, suffix: '%', label: 'Visa Success Rate', icon: '✅' },
              { value: 50, suffix: '+', label: 'Countries', icon: '🌍' },
              { value: 1000, suffix: 'Cr+', label: 'Scholarships', icon: '💰' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <motion.div
                  className="text-4xl md:text-5xl font-bold mb-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </motion.div>
                <div className="text-lg text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <ServicesSection services={services} />
      
      {/* Roadmap-style Countries Section */}
      <section className="section-padding bg-gradient-to-b from-white to-red-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Global <span className="text-red-600">Roadmap</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose your destination and follow our proven path to success
            </p>
          </motion.div>

          <div className="relative">
            {/* Main roadmap line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-red-200 via-red-500 to-red-200 transform -translate-y-1/2 hidden md:block" />
            
            <div className="grid md:grid-cols-5 gap-4">
              {countries.map((country, index) => (
                <motion.div
                  key={country.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="relative"
                >
                  <motion.div
                    className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-500 rounded-full border-4 border-white shadow-lg hidden md:flex items-center justify-center text-white text-xs font-bold"
                    whileHover={{ scale: 1.2 }}
                  >
                    {index + 1}
                  </motion.div>
                  
                  <div className="bg-white rounded-2xl shadow-xl p-6 text-center border-2 border-red-100 hover:border-red-500 transition-colors duration-300">
                    <div className="text-4xl mb-3">{country.flag}</div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{country.name}</h3>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">{country.description}</p>
                    
                    {/* Mini roadmap for each country */}
                    <div className="space-y-2">
                      {['Apply', 'Visa', 'Fly'].map((step, stepIndex) => (
                        <div key={stepIndex} className="flex items-center text-xs">
                          <div className={`w-2 h-2 rounded-full ${
                            stepIndex === 0 ? 'bg-red-300' :
                            stepIndex === 1 ? 'bg-red-500' : 'bg-red-700'
                          } mr-2`} />
                          <span className="text-gray-600">{step}</span>
                          {stepIndex < 2 && (
                            <div className="flex-1 h-0.5 bg-gradient-to-r from-red-300 to-red-500 mx-2" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Success Journey Timeline - Red Theme */}
      <section className="section-padding bg-gradient-to-b from-red-50 to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-red-600">Success</span> Roadmap
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Milestones that shaped our journey of excellence
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <motion.div
              className="absolute left-8 md:left-1/2 top-0 w-1 h-full bg-gradient-to-b from-red-300 via-red-500 to-red-300 transform -translate-x-1/2"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              style={{ originY: 0 }}
            />
            
            {/* Timeline items */}
            {[
              { year: '2008', title: 'The Beginning', description: 'Started with a vision to make global education accessible', icon: '🌱' },
              { year: '2012', title: 'First Milestone', description: 'Guided 500+ students to international universities', icon: '🎯' },
              { year: '2015', title: 'Expansion', description: 'Opened offices in 5 major cities across India', icon: '🏢' },
              { year: '2018', title: 'Global Recognition', description: 'Recognized as Top Study Abroad Consultancy', icon: '🏆' },
              { year: '2021', title: 'Digital Transformation', description: 'Launched virtual counseling platform', icon: '💻' },
              { year: '2024', title: '5000+ Students', description: 'Successfully placed 5000+ students worldwide', icon: '🌟' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex items-start mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-2xl shadow-xl p-6 inline-block w-full"
                  >
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="text-3xl">{item.icon}</div>
                      <div>
                        <span className="text-red-600 font-bold">{item.year}</span>
                        <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600">{item.description}</p>
                  </motion.div>
                </div>
                
                <motion.div
                  className="absolute left-8 md:left-1/2 w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white font-bold shadow-xl transform -translate-x-1/2 z-10"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  {index + 1}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection testimonials={testimonials} />
      
      {/* Animated Floating CTA - Red Theme */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        className="fixed bottom-8 right-8 z-50"
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4 rounded-2xl shadow-2xl cursor-pointer group"
        >
          <div className="flex items-center space-x-3">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <span className="text-2xl">🎯</span>
            </motion.div>
            <div>
              <div className="text-xs opacity-80">Start Your Journey</div>
              <div className="font-bold">Free Consultation</div>
            </div>
          </div>
          
          {/* Roadmap trail effect */}
          <div className="absolute -bottom-2 -right-2 w-full h-full bg-red-400/30 rounded-2xl -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300" />
        </motion.div>
      </motion.div>

      <CTASection />
    </div>
  );
};

// Enhanced Animated Counter Component
const AnimatedCounter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const step = Math.ceil(value / (duration / 16));
    let start = 0;
    
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.span
      key={count}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {count.toLocaleString()}{suffix}
    </motion.span>
  );
};

export default Home;
