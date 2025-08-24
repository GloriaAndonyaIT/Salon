import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Scissors, Palette, Hand, Footprints, Sparkles, Droplets, Crown, Heart, Star, Clock } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState({});
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: "Premium Haircuts",
      description: "Expert styling and cutting techniques tailored to your face shape and lifestyle. Includes wash, cut, and styling.",
      price: "Starting from Ksh 2,500",
      image: "https://i.pinimg.com/736x/21/04/88/2104885c0ec355bcda0bf084ce831a25.jpg",
      icon: Scissors,
      gradient: "from-pink-500 to-rose-500",
      duration: "60-90 mins",
      popular: true,
      bookingValue: "haircut",
      bookingLabel: "Premium Haircut - Ksh 2,500"
    },
    {
      id: 2,
      title: "Hair Coloring & Highlights",
      description: "Transform your look with our professional coloring services. From subtle highlights to bold transformations.",
      price: "Starting from Ksh 4,000",
      image: "https://i.pinimg.com/736x/c0/c0/22/c0c022331895d8ed11269da57f57e8c9.jpg",
      icon: Palette,
      gradient: "from-purple-500 to-indigo-500",
      duration: "2-4 hours",
      bookingValue: "coloring",
      bookingLabel: "Hair Coloring - Ksh 4,000"
    },
    {
      id: 3,
      title: "Luxury Manicure",
      description: "Pamper your hands with our comprehensive manicure service including nail shaping, cuticle care, and polish.",
      price: "Starting from Ksh 1,500",
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&h=300&fit=crop",
      icon: Hand,
      gradient: "from-emerald-500 to-teal-500",
      duration: "45 mins",
      bookingValue: "manicure",
      bookingLabel: "Luxury Manicure - Ksh 1,500"
    },
    {
      id: 4,
      title: "Relaxing Pedicure",
      description: "Rejuvenate your feet with our spa pedicure including foot soak, exfoliation, massage, and nail care.",
      price: "Starting from Ksh 1,800",
      image: "https://i.pinimg.com/736x/a5/e4/b1/a5e4b122719ffe015ebc0f16d82874a6.jpg",
      icon: Footprints,
      gradient: "from-blue-500 to-cyan-500",
      duration: "60 mins",
      bookingValue: "pedicure",
      bookingLabel: "Relaxing Pedicure - Ksh 1,800"
    },
    {
      id: 5,
      title: "Signature Facials",
      description: "Customized facial treatments for all skin types. Deep cleansing, hydration, and anti-aging solutions.",
      price: "Starting from Ksh 3,500",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=300&fit=crop",
      icon: Sparkles,
      gradient: "from-yellow-500 to-orange-500",
      duration: "75 mins",
      popular: true,
      bookingValue: "facial",
      bookingLabel: "Signature Facial - Ksh 3,500"
    },
    {
      id: 6,
      title: "Full Body Spa",
      description: "Ultimate relaxation with our full body massage and spa treatments. Perfect for stress relief and rejuvenation.",
      price: "Starting from Ksh 5,500",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=300&fit=crop",
      icon: Droplets,
      gradient: "from-indigo-500 to-purple-500",
      duration: "90-120 mins",
      bookingValue: "spa",
      bookingLabel: "Full Body Spa - Ksh 5,500"
    },
    {
      id: 7,
      title: "Bridal Packages",
      description: "Complete bridal beauty package including hair, makeup, and nail services for your special day.",
      price: "Starting from Ksh 12,000",
      image: "https://i.pinimg.com/1200x/cf/21/56/cf2156aeae3dbf709627e98dd703a260.jpg",
      icon: Crown,
      gradient: "from-pink-500 to-purple-500",
      duration: "4-6 hours",
      premium: true,
      bookingValue: "bridal",
      bookingLabel: "Bridal Package - Ksh 12,000"
    },
    {
      id: 8,
      title: "Eyebrow & Lash Services",
      description: "Professional eyebrow shaping, tinting, and eyelash extensions to enhance your natural beauty.",
      price: "Starting from Ksh 2,000",
      image: "https://i.pinimg.com/736x/ac/26/24/ac262422ae0fc583d57a91a168ce9d6c.jpg",
      icon: Heart,
      gradient: "from-rose-500 to-pink-500",
      duration: "30-90 mins",
      bookingValue: "eyebrow",
      bookingLabel: "Eyebrow & Lash Services - Ksh 2,000"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.dataset.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-id]').forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  const handleBookNow = (service) => {
    // Navigate using React Router with state
    navigate('/booking', {
      state: {
        preSelectedService: {
          value: service.bookingValue,
          title: service.title,
          label: service.bookingLabel,
          duration: service.duration
        }
      }
    });
  };

  const handleGeneralBooking = () => {
    navigate('/booking');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100/50 to-purple-100/50" />
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed animate-fade-in-delayed">
            Discover our comprehensive range of premium beauty and wellness services, 
            designed to make you look and feel your absolute best.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                data-id={service.id}
                className={`group relative bg-white rounded-3xl border border-gray-200 shadow-lg overflow-hidden transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-purple-200/50 ${
                  isVisible[service.id] ? 'animate-fade-up opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Popular/Premium Badge */}
                {(service.popular || service.premium) && (
                  <div className={`absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-bold ${
                    service.premium 
                      ? 'bg-gradient-to-r from-yellow-400 to-orange-400 text-black' 
                      : 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
                  }`}>
                    {service.premium ? 'PREMIUM' : 'POPULAR'}
                  </div>
                )}

                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Icon Overlay */}
                  <div className={`absolute top-4 left-4 w-12 h-12 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center shadow-lg`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <div className="flex items-center text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {service.duration}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-bold text-pink-600">
                        {service.price}
                      </span>
                    </div>
                    
                    <button 
                      onClick={() => handleBookNow(service)}
                      className={`w-full py-3 px-4 bg-gradient-to-r ${service.gradient} text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg transform group-hover:shadow-xl`}
                    >
                      Book Now
                    </button>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-500/0 to-purple-500/0 group-hover:from-pink-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-3xl p-12 border border-gray-200 shadow-xl">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Ready to Transform Your Look?
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Book your appointment today and experience the difference our expert team can make. 
              We're here to help you look and feel your absolute best.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={handleGeneralBooking}
                className="px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/50"
              >
                Book Appointment
              </button>
              <button className="px-10 py-4 border-2 border-gray-300 bg-white text-gray-700 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:bg-gray-50 hover:border-gray-400">
                Call Us: +254 700 123 456
              </button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animate-fade-in-delayed {
          animation: fade-in 1.2s ease-out 0.3s forwards;
          opacity: 0;
        }
        
        .animate-fade-up {
          animation: fade-up 0.8s ease-out forwards;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default Services;