import { Link } from 'react-router-dom';
import { PlayCircle, Award, Globe, Users, Target, MapPin, TrendingUp, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useMemo, useRef } from 'react';

const HeroSection = () => {
  const sectionRef = useRef(null);

  const particles = useMemo(() => {
    const width = typeof window !== 'undefined' ? window.innerWidth : 1200;
    const height = typeof window !== 'undefined' ? window.innerHeight : 800;
    return Array.from({ length: 20 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      driftX: (Math.random() - 0.5) * width * 0.3,
      driftY: (Math.random() - 0.5) * height * 0.3,
      duration: 12 + Math.random() * 18,
      delay: -Math.random() * 10,
      size: 4 + Math.random() * 6,
    }));
  }, []);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;
    const handleMouseMove = (e) => {
      const rect = sectionEl.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      sectionEl.style.setProperty('--mouse-x', `${x}px`);
      sectionEl.style.setProperty('--mouse-y', `${y}px`);
    };
    sectionEl.addEventListener('mousemove', handleMouseMove);
    return () => sectionEl.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Roadmap steps
  const roadmapSteps = [
    { number: 1, title: 'Discover', description: 'Find your perfect course' },
    { number: 2, title: 'Apply', description: 'Submit applications' },
    { number: 3, title: 'Visa', description: 'Get your visa approved' },
    { number: 4, title: 'Fly', description: 'Start your journey' }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#1a1a2e] text-white"
      style={{ '--mouse-x': '50%', '--mouse-y': '50%' }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Red gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
        
        {/* Floating particles */}
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/15 rounded-full"
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
        
        {/* Mouse-following gradient */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.18), transparent 50%)'
          }}
        />
      </div>

      {/* Roadmap path decoration */}
      <div className="absolute top-1/3 left-0 w-full h-32 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path
            d="M0,50 Q300,0 600,50 T1200,50"
            stroke="white"
            strokeWidth="2"
            fill="none"
            strokeDasharray="10 10"
          />
        </svg>
      </div>

      <div className="container-custom relative py-16 md:py-24 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Trust badge with roadmap indicator */}
            <motion.div 
              className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/15"
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
            >
              <Award size={16} className="text-white/80" />
              <span className="text-sm font-medium">Trusted by 5,000+ Students Worldwide</span>
              <div className="flex items-center space-x-1 ml-2">
                {[1,2,3].map((dot) => (
                  <motion.div
                    key={dot}
                    className="w-1.5 h-1.5 bg-white/50 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1, delay: dot * 0.2, repeat: Infinity }}
                  />
                ))}
              </div>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your <span className="text-red-400">Roadmap</span> to{' '}
              <span className="relative">
                Global Education
                <motion.div 
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-300"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-8">
              Expert guidance for studying abroad in top universities across 50+ countries.
              From admission to visa, we handle everything with a 98% success rate.
            </p>

            {/* Roadmap mini timeline */}
            <div className="mb-8 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <div className="flex items-center justify-between">
                {roadmapSteps.map((step, index) => (
                  <div key={step.number} className="flex items-center flex-1">
                    <div className="flex flex-col items-center">
                      <motion.div 
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                          ${index === 0 ? 'bg-red-500 text-white' : 'bg-white/15 text-white'}`}
                        whileHover={{ scale: 1.2 }}
                      >
                        {step.number}
                      </motion.div>
                      <span className="text-xs mt-1 text-white/70">{step.title}</span>
                    </div>
                    {index < roadmapSteps.length - 1 && (
                      <div className="flex-1 h-0.5 mx-2 bg-gradient-to-r from-red-500/80 to-red-400/50" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/free-consultation" 
                  className="btn-secondary text-lg px-8 py-4 text-center bg-red-600 text-white hover:bg-red-700 font-bold shadow-xl hover:shadow-2xl transition-all duration-300 inline-flex items-center space-x-2"
                >
                  <Target size={20} />
                  <span>Start Your Journey</span>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/services"
                  className="bg-white/5 hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-lg transition flex items-center justify-center space-x-2 border border-white/15 backdrop-blur-sm"
                >
                  <PlayCircle size={20} />
                  <span>Watch Success Stories</span>
                </Link>
              </motion.div>
            </div>

            {/* Stats with roadmap style */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: '5,000+', label: 'Students Placed', icon: '🎓' },
                { value: '50+', label: 'Countries', icon: '🌍' },
                { value: '98%', label: 'Visa Success', icon: '✅' },
                { value: '₹10 Cr+', label: 'Scholarships', icon: '💰' }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.1)' }}
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-xl md:text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-white/70 text-xs">{stat.label}</div>
                  
                  {/* Roadmap dot */}
                  <motion.div 
                    className="w-1 h-1 bg-red-400 rounded-full mx-auto mt-2"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1, delay: index * 0.2, repeat: Infinity }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Consultation Form with Roadmap Theme */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative roadmap lines */}
            <div className="absolute -top-4 -right-4 w-24 h-24">
              <svg viewBox="0 0 100 100" className="w-full h-full text-red-300/30">
                <path d="M10,90 Q50,10 90,50" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="5 5" />
              </svg>
            </div>
            
            <div className="bg-white rounded-2xl shadow-2xl p-8 text-gray-800 relative overflow-hidden">
              {/* Red gradient header */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-300 via-red-500 to-red-300" />
              
              {/* Form header with roadmap */}
              <div className="text-center mb-8 relative">
                <motion.div 
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full mb-4 shadow-lg relative overflow-hidden group"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  <Globe size={32} className="text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-2">Start Your <span className="text-red-600">Roadmap</span></h3>
                <p className="text-gray-600">Free consultation with our experts</p>
                
                {/* Step indicators */}
                <div className="flex items-center justify-center space-x-2 mt-4">
                  {[1,2,3,4].map((step) => (
                    <div key={step} className="flex items-center">
                      <div className={`w-2 h-2 rounded-full ${step === 1 ? 'bg-red-500' : 'bg-gray-300'}`} />
                      {step < 4 && <div className="w-4 h-0.5 bg-gray-300" />}
                    </div>
                  ))}
                </div>
              </div>

              <form className="space-y-4">
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    className="input-field border-2 focus:border-red-500 transition w-full px-4 py-3 rounded-lg" 
                    required 
                  />
                </motion.div>
                
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="input-field border-2 focus:border-red-500 transition w-full px-4 py-3 rounded-lg" 
                    required 
                  />
                </motion.div>
                
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="input-field border-2 focus:border-red-500 transition w-full px-4 py-3 rounded-lg" 
                    required 
                  />
                </motion.div>
                
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="relative"
                >
                  <select className="input-field border-2 focus:border-red-500 transition w-full px-4 py-3 rounded-lg appearance-none">
                    <option value="">Preferred Study Destination</option>
                    <option value="usa">🇺🇸 United States</option>
                    <option value="uk">🇬🇧 United Kingdom</option>
                    <option value="canada">🇨🇦 Canada</option>
                    <option value="australia">🇦🇺 Australia</option>
                    <option value="germany">🇩🇪 Germany</option>
                    <option value="other">🌍 Other</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <div className="w-2 h-2 border-r-2 border-b-2 border-red-500 transform rotate-45" />
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="relative"
                >
                  <select className="input-field border-2 focus:border-red-500 transition w-full px-4 py-3 rounded-lg appearance-none">
                    <option value="">Level of Study</option>
                    <option value="bachelors">🎓 Bachelor's Degree</option>
                    <option value="masters">📚 Master's Degree</option>
                    <option value="phd">🔬 PhD/Doctorate</option>
                    <option value="diploma">📜 Diploma/Certificate</option>
                  </select>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <div className="w-2 h-2 border-r-2 border-b-2 border-red-500 transform rotate-45" />
                  </div>
                </motion.div>
                
                <motion.button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-4 px-6 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center space-x-2">
                    <Target size={20} />
                    <span>Start Your Roadmap</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </motion.button>
              </form>

              {/* Form footer with roadmap */}
              <motion.div 
                className="mt-6 pt-6 border-t border-gray-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                  <Users size={20} className="text-red-600" />
                  <span className="text-sm text-gray-600">Expert consultation</span>
                </div>
                  
                  {/* Roadmap progress */}
                  <div className="flex items-center space-x-2">
                    <CheckCircle size={16} className="text-red-500" />
                    <span className="text-xs text-gray-500">Step 1 of 4</span>
                    <div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-red-500 to-red-600"
                        initial={{ width: '0%' }}
                        animate={{ width: '25%' }}
                        transition={{ duration: 1, delay: 1 }}
                      />
                    </div>
                  </div>
                </div>

                {/* Trust badges */}
                <div className="flex items-center justify-center space-x-4 mt-4">
                  {['Verified', 'Secure', 'Fast'].map((badge, index) => (
                    <motion.div
                      key={badge}
                      className="flex items-center space-x-1"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                    >
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                      <span className="text-xs text-gray-500">{badge}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Floating roadmap element */}
            <motion.div 
              className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-red-400 to-red-500 rounded-full opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.div>
        </div>

        {/* Bottom roadmap indicator */}
        <motion.div 
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <div className="flex items-center space-x-1">
            {['Discover', 'Apply', 'Succeed'].map((step, index) => (
              <div key={step} className="flex items-center">
                <span className="text-xs text-white/60">{step}</span>
                {index < 2 && <div className="w-8 h-0.5 bg-white/20 mx-2" />}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,120 C240,100 480,60 720,60 C960,60 1200,100 1440,120 L1440,120 L0,120 Z" fill="white" fillOpacity="0.08" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;


