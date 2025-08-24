import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import {
  Scissors, Sparkles, Heart, Droplets, Mail,
  ChevronLeft, ChevronRight, Star, Camera, Gem, Palette
} from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      text: "Absolutely incredible experience! The stylists here are true artists. My hair has never looked better.",
      image: "https://i.pinimg.com/1200x/d9/4c/f8/d94cf817fe2189d57a812606e1368a1f.jpg"
    },
    {
      id: 2,
      name: "Emily Chen",
      rating: 5,
      text: "The spa treatments are divine! I left feeling completely refreshed and pampered. Will definitely be back!",
      image: "https://i.pinimg.com/1200x/b4/71/a8/b471a88cd690252f448457e9c75f750c.jpg"
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      rating: 5,
      text: "Best salon in town! The attention to detail and personalized service is unmatched. Highly recommend!",
      image: "https://i.pinimg.com/1200x/b1/64/e6/b164e68cb83412a1445b20cc25825b5e.jpg"
    },
    {
      id: 4,
      name: "Jessica Williams",
      rating: 5,
      text: "From the moment you walk in, you feel like royalty. The ambiance is perfect and the results are stunning!",
      image: "https://i.pinimg.com/736x/6a/12/ed/6a12edab511bcac6d329dbb5de70ca1e.jpg"
    }
  ];

  const services = [
  {
    icon: Scissors,
    title: "Hair Styling",
    description: "Expert cuts, colors, and magical transformations",
    gradient: "from-pink-400 via-rose-400 to-pink-600",
    bgGradient: "from-pink-100/80 to-rose-200/60",
    shadowColor: "shadow-pink-300/40"
  },
  {
    icon: Sparkles,
    title: "Nail Art",
    description: "Stunning manicures, pedicures, and creative designs",
    gradient: "from-purple-400 via-violet-400 to-purple-600",
    bgGradient: "from-purple-100/80 to-violet-200/60",
    shadowColor: "shadow-purple-300/40"
  },
  {
    icon: Heart,
    title: "Skincare",
    description: "Luxurious facials and rejuvenating treatments",
    gradient: "from-emerald-400 via-teal-400 to-green-600",
    bgGradient: "from-emerald-100/80 to-teal-200/60",
    shadowColor: "shadow-emerald-300/40"
  },
  {
    icon: Droplets,
    title: "Spa Wellness",
    description: "Relaxing massages and holistic wellness",
    gradient: "from-blue-400 via-cyan-400 to-blue-600",
    bgGradient: "from-blue-100/80 to-cyan-200/60",
    shadowColor: "shadow-blue-300/40"
  }
];


  const images = [
    // 'https://i.pinimg.com/1200x/94/10/c2/9410c260f3ee2e2e971b0c5737ba502b.jpg',
    'https://i.pinimg.com/1200x/bc/ed/d2/bcedd2d8b9526be1b4065195a1b3b61d.jpg',
    'https://i.pinimg.com/1200x/d0/8f/4e/d08f4e75d25d098b1fe496802978dbf9.jpg',
    // 'https://i.pinimg.com/736x/09/58/3c/09583c48af2832ce686f03091a2e6eff.jpg',
    // 'https://i.pinimg.com/736x/27/55/ec/2755ecec9b9954791515f15aae2dce1e.jpg',
    // 'https://i.pinimg.com/736x/89/b6/4c/89b64c6d7ace13645150d8ca782c3aa2.jpg',
    'https://i.pinimg.com/1200x/df/57/03/df5703b4f85e64f05a777f593ab855d5.jpg'
    
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);

    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      clearInterval(slideInterval);
      clearInterval(testimonialInterval);
    };
  }, [images.length, testimonials.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  const nextTestimonial = () => {
  setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
};

const prevTestimonial = () => {
  setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 text-gray-900 overflow-hidden relative">
{/* Magic Slideshow Section */}
<section className="relative h-screen flex items-center justify-center overflow-hidden mt-24">
  {/* Animated Neon Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-pink-900/20 animate-gradient-shift"></div>

  {/* Floating Neon Orbs */}
  <div className="absolute top-20 left-20 w-32 h-32 neon-orb neon-pink rounded-full blur-xl opacity-60 animate-float-slow"></div>
  <div className="absolute top-40 right-32 w-24 h-24 neon-orb neon-purple rounded-full blur-lg opacity-70 animate-float-medium"></div>
  <div className="absolute bottom-32 left-32 w-40 h-40 neon-orb neon-cyan rounded-full blur-2xl opacity-50 animate-float-fast"></div>
  <div className="absolute bottom-20 right-20 w-28 h-28 neon-orb neon-green rounded-full blur-xl opacity-65 animate-float-slow"></div>

  {/* Main Slideshow */}
  <div className="relative z-10 w-full h-full mx-auto overflow-hidden">
    {images.map((url, index) => (
      <div
        key={index}
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
        }`}
      >
        <img
          src={url}
          alt={`Slide ${index + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
    ))}

    {/* Navigation Buttons */}
    <button
      onClick={prevSlide}
      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full z-20 transition"
    >
      <ChevronLeft className="w-6 h-6" />
    </button>
    <button
      onClick={nextSlide}
      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full z-20 transition"
    >
      <ChevronRight className="w-6 h-6" />
    </button>

    {/* Indicators */}
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
      {images.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentSlide(index)}
          className={`w-3 h-3 rounded-full ${
            index === currentSlide ? 'bg-pink-500 scale-125' : 'bg-white/50'
          } transition`}
        />
      ))}
    </div>
  </div>

  {/* Animated Title */}
  <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
    <h1 className="neon-title text-4xl md:text-6xl font-bold">
      <span className="neon-text-pink">Beauty</span>
      <span className="neon-text-purple"> Dreams</span>
    </h1>
    <p className="neon-subtitle text-lg md:text-xl mt-4">
      Where Magic Meets Glamour
    </p>
  </div>
</section>


      {/* Service Highlights - Enhanced with Dynamic Effects */}
<section id="services" className="relative py-32 px-6 z-10 overflow-hidden">
  {/* Animated Background Elements */}
  <div className="absolute inset-0">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-pink-500/10 via-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-spin" style={{animationDuration: '20s'}}></div>
  </div>

  <div className="max-w-7xl mx-auto relative">
    {/* Enhanced Title with Floating Elements */}
    <div className="text-center mb-20 relative">
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-pulse"></div>
      
      <h2 className="text-6xl lg:text-7xl font-black mb-6 relative">
        <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent animate-gradient bg-300% drop-shadow-2xl">
          Premium Services
        </span>
        <div className="absolute -inset-4 bg-gradient-to-r from-pink-600/20 via-purple-600/20 to-blue-600/20 blur-2xl -z-10 animate-pulse"></div>
      </h2>
      
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Elevate your experience with our cutting-edge solutions designed to transform your vision into reality
      </p>
      
      <div className="flex justify-center mt-8 space-x-2">
        {[...Array(5)].map((_, i) => (
          <div 
            key={i}
            className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-bounce"
            style={{animationDelay: `${i * 0.1}s`}}
          ></div>
        ))}
      </div>
    </div>

    {/* Enhanced Service Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          title: "Hair Styling",
          description: "Expert cuts, colors, and magical transformations",
          image: "https://i.pinimg.com/736x/f5/be/34/f5be34c7238d37b4c43b8d3d3ed714e3.jpg",
          bgGradient: "from-pink-50 to-red-50",
          gradient: "from-pink-500 to-red-600",
          shadowColor: "hover:shadow-pink-200"
        },
        {
          title: "Nail Art",
          description: "Stunning manicures, pedicures, and creative designs",
          image: "https://i.pinimg.com/736x/31/79/1a/31791a5b694b777dc2a96aceb7ff665b.jpg",
          bgGradient: "from-purple-50 to-indigo-50",
          gradient: "from-purple-500 to-indigo-600",
          shadowColor: "hover:shadow-purple-200"
        },
        {
          title: "Skincare",
          description: "Luxurious facials and rejuvenating treatments",
          image: "https://i.pinimg.com/736x/68/18/4d/68184d2a97f14da6f58ca3d37df1c8c6.jpg",
          bgGradient: "from-green-50 to-emerald-50",
          gradient: "from-green-500 to-emerald-600",
          shadowColor: "hover:shadow-green-200"
        },
        {
          title: "Spa Wellness",
          description: "Relaxing massages and holistic wellness",
          image: "https://i.pinimg.com/736x/3d/2f/3e/3d2f3e0b8bef5bb2d0f5cccbdb40a84c.jpg",
          bgGradient: "from-cyan-50 to-blue-50",
          gradient: "from-cyan-500 to-blue-600",
          shadowColor: "hover:shadow-cyan-200"
        }
      ].map((service, index) => (
        <div
          key={service.title}
          className={`group service-card relative transition-all duration-700 hover:scale-105 ${ 
            isVisible.services ? 'animate-fade-in-up' : 'opacity-0 translate-y-8' 
          }`}
          style={{ animationDelay: `${index * 150}ms` }}
        >
          {/* Main Card */}
          <div className={`relative glass-card-premium p-8 rounded-3xl bg-gradient-to-br ${service.bgGradient} backdrop-blur-2xl border border-white/40 shadow-2xl hover:shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] transition-all duration-500 overflow-hidden`}>
            
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-white to-transparent rounded-full transform translate-x-8 -translate-y-8"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-white/20 to-transparent rounded-full transform -translate-x-12 translate-y-12"></div>
            </div>

            {/* Floating Image with Advanced Effects */}
            <div className="relative mb-8 flex justify-center">
              <div className="relative group-hover:animate-bounce">
                <div className={`image-premium w-20 h-20 rounded-2xl bg-gradient-to-r ${service.gradient} p-1 shadow-2xl transform group-hover:rotate-6 transition-all duration-500 overflow-hidden`}>
                  <div className="w-full h-full rounded-xl overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                
                {/* Glowing Ring Effect */}
                <div className={`absolute inset-0 w-20 h-20 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-30 blur-md scale-110 transition-all duration-500`}></div>
                
                {/* Orbit Elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping opacity-75"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Enhanced Content */}
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-gray-900 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors">
                {service.description}
              </p>
              
              {/* CTA Element */}
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                <Link to="/gallery" className="inline-flex items-center space-x-2 text-sm font-semibold text-purple-600 hover:text-purple-700 cursor-pointer">
                  <span>Explore our gallery</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Advanced Hover Effects */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-pink-400/0 via-purple-400/0 to-blue-400/0 group-hover:from-pink-400/10 group-hover:via-purple-400/10 group-hover:to-blue-400/10 transition-all duration-700"></div>
            
            {/* Shimmer Effect */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </div>
          </div>

          {/* Floating Shadow */}
          <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 blur-xl scale-105 transition-all duration-500 -z-10`}></div>
        </div>
      ))}
    </div>

    {/* Bottom Accent */}
    <div className="flex justify-center mt-16">
      <div className="w-48 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full opacity-60"></div>
    </div>
  </div>

  {/* Custom Styles */}
  <style jsx>{`
    @keyframes gradient {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    
    .animate-gradient {
      animation: gradient 3s ease infinite;
    }
    
    .bg-300% {
      background-size: 300% 300%;
    }
    
    .glass-card-premium {
      position: relative;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
    }
    
    .glass-card-premium::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: inherit;
      padding: 2px;
      background: linear-gradient(45deg, rgba(255,255,255,0.3), transparent, rgba(255,255,255,0.1));
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask-composite: subtract;
    }
    
    .image-premium {
      position: relative;
    }
    
    .image-premium::before {
      content: '';
      position: absolute;
      inset: -2px;
      border-radius: inherit;
      background: linear-gradient(45deg, rgba(255,255,255,0.4), transparent);
      z-index: -1;
    }
  `}</style>
</section>
      {/* Testimonials */}
      <section id="testimonials" className="relative py-24 px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-16 text-3d bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          
          <div className="relative testimonial-container">
            <div className="glass-card-advanced rounded-3xl p-12 bg-gradient-to-br from-white/80 to-pink-50/60 backdrop-blur-xl border border-white/30 shadow-2xl min-h-[350px] flex items-center">
              <div className={`testimonial-content transition-all duration-500 ${isVisible.testimonials ? 'animate-fade-in' : 'opacity-0'}`}>
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <img 
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].name}
                      className="w-24 h-24 rounded-full border-4 border-pink-400 shadow-xl image-3d"
                    />
                    <div className="absolute inset-0 w-24 h-24 rounded-full bg-gradient-to-tr from-pink-400/30 to-purple-400/30 blur-sm"></div>
                  </div>
                </div>
                
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-7 h-7 text-yellow-500 fill-current star-bounce" style={{ animationDelay: `${i * 100}ms` }} />
                  ))}
                </div>
                
                <p className="text-xl text-gray-700 mb-6 italic leading-relaxed max-w-2xl">
                  "{testimonials[currentTestimonial].text}"
                </p>
                
                <h4 className="text-lg font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  {testimonials[currentTestimonial].name}
                </h4>
              </div>
            </div>
            
            <button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 glass-button-nav"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 glass-button-nav"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 scale-125 shadow-lg' 
                    : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section id="newsletter" className="relative py-24 px-6 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className={`newsletter-content transition-all duration-700 ${isVisible.newsletter ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            <div className="mb-8">
              <div className="relative inline-block">
                <Mail className="w-20 h-20 mx-auto mb-6 text-pink-500 icon-3d" />
                <div className="absolute inset-0 w-20 h-20 mx-auto bg-gradient-to-r from-pink-400/30 to-purple-400/30 rounded-full blur-lg"></div>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-3d bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Stay Beautiful
            </h2>
            
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Subscribe to our newsletter for exclusive beauty tips, special offers, and the latest trends
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full glass-input bg-white/80 backdrop-blur-lg border border-white/30 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 shadow-lg"
              />
              <button className="glass-button-3d px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold transition-all duration-300 whitespace-nowrap">
                Subscribe
                <div className="button-shine"></div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .floating-element {
          animation: float 6s ease-in-out infinite;
        }
        
        .floating-3d {
          animation: float3d 8s ease-in-out infinite;
        }
        
        .glass-morphism {
          background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.18);
        }
        
        .glass-card-3d {
          background: linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.1));
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255,255,255,0.3);
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
          transform-style: preserve-3d;
          transition: all 0.3s ease;
        }
        
        .glass-card-advanced {
          background: linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.1));
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.3);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        
        .glass-button-3d {
          background: linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1));
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
          box-shadow: 0 8px 32px rgba(236,72,153,0.3);
          transform: translateZ(0);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .glass-button-3d:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 15px 40px rgba(236,72,153,0.4);
        }
        
        .glass-button-outline {
          background: linear-gradient(135deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1));
          backdrop-filter: blur(10px);
          border: 2px solid rgba(147,51,234,0.5);
          box-shadow: 0 8px 32px rgba(147,51,234,0.2);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .glass-button-outline:hover {
          transform: translateY(-2px) scale(1.02);
          border-color: rgba(147,51,234,0.8);
          box-shadow: 0 12px 35px rgba(147,51,234,0.3);
        }
        
        .glass-button-nav {
          background: linear-gradient(135deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1));
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255,255,255,0.3);
          padding: 12px;
          rounded: 50%;
          border-radius: 50%;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          color: #6b7280;
        }
        
        .glass-button-nav:hover {
          transform: scale(1.1);
          color: #374151;
          box-shadow: 0 12px 30px rgba(0,0,0,0.15);
        }
        
        .glass-input {
          background: linear-gradient(135deg, rgba(255,255,255,0.4), rgba(255,255,255,0.2));
          backdrop-filter: blur(15px);
          border: 1px solid rgba(255,255,255,0.3);
          box-shadow: inset 0 2px 10px rgba(0,0,0,0.05);
        }
        
        .glass-input:focus {
          background: linear-gradient(135deg, rgba(255,255,255,0.5), rgba(255,255,255,0.3));
          box-shadow: 0 0 0 2px rgba(236,72,153,0.3), inset 0 2px 10px rgba(0,0,0,0.05);
        }
        
        .service-card-3d:hover {
          transform: translateY(-10px) rotateX(5deg);
        }
        
        .icon-3d {
          transition: all 0.3s ease;
        }
        
        .icon-3d:hover {
          transform: rotateY(180deg) scale(1.1);
        }
        
        .image-3d {
          transition: all 0.3s ease;
        }
        
        .image-3d:hover {
          transform: scale(1.1) rotateZ(5deg);
        }
        
        .text-3d {
          text-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        
        .text-shadow {
          text-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .transform-3d {
          transform-style: preserve-3d;
        }
        
        .text-gradient-rainbow {
          background: linear-gradient(45deg, #ec4899, #8b5cf6, #06b6d4, #10b981);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientShift 3s ease-in-out infinite;
        }
        
        .text-gradient-sunset {
          background: linear-gradient(45deg, #f59e0b, #ef4444, #ec4899, #8b5cf6);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientShift 4s ease-in-out infinite reverse;
        }
        
        .premium-button {
          background: linear-gradient(135deg, #ec4899, #8b5cf6);
          color: white;
          box-shadow: 0 10px 30px rgba(236, 72, 153, 0.3);
          transition: all 0.3s ease;
        }
        
        .premium-button:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 20px 40px rgba(236, 72, 153, 0.4);
        }
        
        .outline-button {
          background: transparent;
          border: 2px solid transparent;
          background-image: linear-gradient(white, white), linear-gradient(45deg, #ec4899, #8b5cf6);
          background-origin: border-box;
          background-clip: content-box, border-box;
          color: #8b5cf6;
          transition: all 0.3s ease;
        }
        
        .outline-button:hover {
          transform: translateY(-2px) scale(1.02);
          color: #ec4899;
        }
        
        .button-magic-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, #8b5cf6, #ec4899, #06b6d4);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .premium-button:hover .button-magic-bg {
          opacity: 1;
        }
        
        .button-sparkle-effect {
          position: absolute;
          inset: 0;
          background: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpolygon points='10 0 12 8 20 10 12 12 10 20 8 12 0 10 8 8'/%3E%3C/g%3E%3C/svg%3E");
          opacity: 0;
          animation: sparkleMove 2s linear infinite;
        }
        
        .premium-button:hover .button-sparkle-effect {
          opacity: 1;
        }
        
        .button-glow-effect {
          position: absolute;
          inset: 0;
          background: linear-gradient(45deg, rgba(236, 72, 153, 0.1), rgba(139, 92, 246, 0.1));
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: inherit;
        }
        
        .outline-button:hover .button-glow-effect {
          opacity: 1;
        }
        
        .geometric-shape {
          border-radius: 30%;
          transform-origin: center;
        }
        
        .geometric-shape-triangle {
          clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
        }
        
        .hero-content-wrapper {
          animation: heroContentRise 1.2s ease-out forwards;
        }
        
        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes animate-gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: animate-gradient-shift 8s ease infinite;
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          33% { transform: translateY(-20px) translateX(10px) scale(1.1); }
          66% { transform: translateY(-10px) translateX(-15px) scale(0.9); }
        }
        
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          50% { transform: translateY(-30px) translateX(20px) scale(1.2); }
        }
        
        @keyframes float-fast {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          25% { transform: translateY(-15px) translateX(-10px) scale(1.1); }
          50% { transform: translateY(-25px) translateX(15px) scale(0.9); }
          75% { transform: translateY(-10px) translateX(-20px) scale(1.05); }
        }
        
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 6s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin-slow { animation: spin-slow 10s linear infinite; }
        
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-bounce-gentle { animation: bounce-gentle 3s ease-in-out infinite; }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        
        .animate-twinkle { animation: twinkle 2s ease-in-out infinite; }
        
        @keyframes sparkle-dance {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-5px) rotate(5deg); }
          66% { transform: translateY(-2px) rotate(-3deg); }
        }
        
        .animate-sparkle-dance { animation: sparkle-dance 4s ease-in-out infinite; }
        
        @keyframes text-shimmer {
          0%, 100% { transform: translateX(0) scale(1); }
          50% { transform: translateX(2px) scale(1.02); }
        }
        
        .animate-text-shimmer { animation: text-shimmer 3s ease-in-out infinite; }
        
        @keyframes text-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(1deg); }
        }
        
        .animate-text-float { animation: text-float 4s ease-in-out infinite; }
        
        @keyframes fade-in-delayed {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in-delayed {
          animation: fade-in-delayed 1s ease-out 0.5s forwards;
          opacity: 0;
        }
        
        @keyframes buttons-rise {
          0% { opacity: 0; transform: translateY(30px) scale(0.9); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        .animate-buttons-rise {
          animation: buttons-rise 1s ease-out 0.8s forwards;
          opacity: 0;
        }
        
        @keyframes trust-badges {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-trust-badges {
          animation: trust-badges 1s ease-out 1.2s forwards;
          opacity: 0;
        }
        
        @keyframes heroContentRise {
          0% { opacity: 0; transform: translateY(50px) scale(0.95); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        @keyframes sparkleMove {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .testimonial-content {
          animation: testimonialFloat 6s ease-in-out infinite;
        }
        
        .newsletter-content {
          animation: newsletterPulse 4s ease-in-out infinite;
        }
        
        .star-bounce {
          animation: starBounce 0.6s ease-out forwards;
        }
        
        .button-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
          transition: left 0.6s ease;
        }
        
        .glass-button-3d:hover .button-shine {
          left: 100%;
        }
        
        .button-glow {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          background: linear-gradient(135deg, rgba(147,51,234,0.1), rgba(236,72,153,0.1));
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .glass-button-outline:hover .button-glow {
          opacity: 1;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float3d {
          0%, 100% { transform: translateY(0px) translateX(0px) rotateY(0deg); }
          33% { transform: translateY(-15px) translateX(10px) rotateY(120deg); }
          66% { transform: translateY(-5px) translateX(-10px) rotateY(240deg); }
        }
        
        @keyframes heroTextIn {
          0% { opacity: 0; transform: translateY(50px) rotateX(20deg); }
          100% { opacity: 1; transform: translateY(0) rotateX(0deg); }
        }
        
        @keyframes buttonGroupIn {
          0% { opacity: 0; transform: translateY(30px) scale(0.8); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        @keyframes testimonialFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes newsletterPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }
        
        @keyframes starBounce {
          0% { transform: scale(0) rotate(0deg); }
          50% { transform: scale(1.3) rotate(180deg); }
          100% { transform: scale(1) rotate(360deg); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(50px) rotateX(20deg); }
          to { opacity: 1; transform: translateY(0) rotateX(0deg); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        /* Enhanced Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: linear-gradient(to bottom, #f8fafc, #e2e8f0);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #ec4899, #8b5cf6);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #db2777, #7c3aed);
        }
      `}</style>
    </div>
  );
};

export default Home;