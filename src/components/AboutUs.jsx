import React, { useState, useEffect } from 'react';
import { Award, Star, Heart, Scissors, Sparkles, Users, Trophy, Medal, Crown } from 'lucide-react';

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState({});

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

  const handleBookAppointment = () => {
    // Navigate to booking page
    window.location.href = '/booking';
  };

  const handleViewServices = () => {
    // Navigate to services page
    window.location.href = '/services';
  };

  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      specialty: "Senior Hair Stylist",
      tagline: "Transforming visions into beautiful reality",
      experience: "8 years",
      image: "https://i.pinimg.com/1200x/5d/14/9e/5d149e62b72dd074f1d1fa223cdbc774.jpg",
      skills: ["Hair Cutting", "Color Correction", "Wedding Styles"]
    },
    {
      id: 2,
      name: "Mike Chen",
      specialty: "Color Specialist",
      tagline: "Master of vibrant transformations",
      experience: "6 years",
      image: "https://i.pinimg.com/1200x/3e/f3/50/3ef350dc86cc82a092463e5d795654b5.jpg",
      skills: ["Hair Coloring", "Highlights", "Balayage"]
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      specialty: "Spa & Wellness Therapist",
      tagline: "Bringing peace and rejuvenation",
      experience: "7 years",
      image: "https://i.pinimg.com/736x/bb/2e/20/bb2e2044cad804ff5293e242925a18bf.jpg",
      skills: ["Massage Therapy", "Facials", "Body Treatments"]
    },
    {
      id: 4,
      name: "David Williams",
      specialty: "Master Barber",
      tagline: "Precision cuts with modern flair",
      experience: "10 years",
      image: "https://i.pinimg.com/736x/37/26/d3/3726d36e26625d9d03b4736f581a85c7.jpg",
      skills: ["Men's Cuts", "Beard Styling", "Classic Shaves"]
    },
    {
      id: 5,
      name: "Lisa Park",
      specialty: "Nail Artist",
      tagline: "Creating art at your fingertips",
      experience: "5 years",
      image: "https://i.pinimg.com/736x/5b/06/09/5b0609c1a20b48f207ed3d0bc49897ed.jpg",
      skills: ["Nail Art", "Gel Extensions", "Pedicures"]
    },
    {
      id: 6,
      name: "James Thompson",
      specialty: "Makeup Artist",
      tagline: "Enhancing your natural beauty",
      experience: "4 years",
      image: "https://i.pinimg.com/1200x/f4/c9/89/f4c989364e9e672d7267863c380c95ec.jpg",
      skills: ["Bridal Makeup", "Special Events", "Photoshoots"]
    }
  ];

  const awards = [
    { icon: Trophy, title: "Best Salon 2023", org: "Nairobi Beauty Awards" },
    { icon: Star, title: "5-Star Rating", org: "Google Reviews" },
    { icon: Crown, title: "Premium Service", org: "Kenya Beauty Institute" },
    { icon: Medal, title: "Excellence Award", org: "African Hair & Beauty" },
    { icon: Award, title: "Certified Professionals", org: "International Beauty Board" },
    { icon: Heart, title: "Customer Choice", org: "Beauty Magazine Kenya" }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-100/50 to-purple-100/50" />
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent animate-fade-in">
            About Luxe Salon
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed animate-fade-in-delayed">
            Where beauty meets artistry, and every client leaves feeling transformed and confident.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div 
            data-id="story"
            className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
              isVisible.story ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-8'
            }`}
          >
            {/* Story Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent flex items-center">
                  <Heart className="w-8 h-8 text-pink-500 mr-4" />
                  Our Story
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Founded in 2018, Luxe Salon began as a dream to create a sanctuary where beauty, 
                    wellness, and self-care converge. We believe that everyone deserves to feel confident 
                    and beautiful, and our mission is to help you discover and enhance your unique style.
                  </p>
                  <p>
                    Our salon is more than just a place for beauty treatments – it's a community where 
                    clients become family, where artistry meets precision, and where every service is 
                    delivered with passion and expertise. We've built our reputation on trust, quality, 
                    and an unwavering commitment to excellence.
                  </p>
                  <p>
                    From the moment you step through our doors, you'll experience the Luxe difference: 
                    personalized consultations, premium products, cutting-edge techniques, and a warm, 
                    welcoming atmosphere that makes every visit a luxurious escape from the everyday.
                  </p>
                </div>
              </div>

              {/* Values */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 border border-pink-200 shadow-lg">
                  <Sparkles className="w-8 h-8 text-pink-500 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Excellence</h3>
                  <p className="text-gray-600 text-sm">Delivering exceptional results with every service</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-cyan-50 rounded-2xl p-6 border border-purple-200 shadow-lg">
                  <Users className="w-8 h-8 text-purple-500 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Community</h3>
                  <p className="text-gray-600 text-sm">Building lasting relationships with our clients</p>
                </div>
                <div className="bg-gradient-to-br from-cyan-50 to-pink-50 rounded-2xl p-6 border border-cyan-200 shadow-lg">
                  <Heart className="w-8 h-8 text-cyan-500 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">Care</h3>
                  <p className="text-gray-600 text-sm">Prioritizing your comfort and wellbeing</p>
                </div>
              </div>
            </div>

            {/* Story Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=700&fit=crop"
                  alt="Luxe Salon Interior"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 border border-gray-200 shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-500">5000+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 border border-gray-200 shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-500">6</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div 
            data-id="team-header"
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible['team-header'] ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent flex items-center justify-center">
              <Scissors className="w-8 h-8 text-pink-500 mr-4" />
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our talented professionals are passionate about their craft and dedicated to making you look and feel amazing.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                data-id={`team-${member.id}`}
                className={`group relative bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-lg transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-purple-200 ${
                  isVisible[`team-${member.id}`] ? 'animate-zoom-in opacity-100' : 'opacity-0 scale-90'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Member Image */}
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h4 className="text-lg font-bold text-white mb-2">{member.tagline}</h4>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {member.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-3 py-1 bg-pink-500/80 rounded-full text-xs font-medium text-white"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      <p className="text-white/80 text-sm">{member.experience} of experience</p>
                    </div>
                  </div>
                </div>

                {/* Member Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-pink-500 font-semibold mb-3">{member.specialty}</p>
                  <p className="text-gray-600 text-sm italic">"{member.tagline}"</p>
                  
                  {/* Rating Stars */}
                  <div className="flex items-center mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-2 text-gray-500 text-sm">5.0</span>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-500/0 to-purple-500/0 group-hover:from-pink-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Certifications Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div 
            data-id="awards-header"
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible['awards-header'] ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent flex items-center justify-center">
              <Trophy className="w-8 h-8 text-yellow-500 mr-4" />
              Awards & Recognition
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our commitment to excellence has been recognized by industry leaders and beloved by our clients.
            </p>
          </div>

          {/* Awards Grid */}
          <div 
            data-id="awards"
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 ${
              isVisible.awards ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-8'
            }`}
          >
            {awards.map((award, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <award.icon className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{award.title}</h3>
                <p className="text-gray-600 text-sm">{award.org}</p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div 
            data-id="cta"
            className={`text-center mt-16 transition-all duration-1000 ${
              isVisible.cta ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-white rounded-3xl p-12 border border-gray-200 shadow-xl max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Ready to Experience the Luxe Difference?
              </h3>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Join our family of satisfied clients and discover why we're Nairobi's premier beauty destination.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button 
                  onClick={handleBookAppointment}
                  className="px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-300"
                >
                  Book Your Appointment
                </button>
                <button 
                  onClick={handleViewServices}
                  className="px-10 py-4 border-2 border-gray-300 bg-gray-50 text-gray-700 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:bg-gray-100 hover:border-gray-400"
                >
                  View Our Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-delayed {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes zoom-in {
          from { opacity: 0; transform: scale(0.9) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        .animate-fade-in-delayed {
          animation: fade-in-delayed 1.2s ease-out 0.3s forwards;
          opacity: 0;
        }
        
        .animate-zoom-in {
          animation: zoom-in 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default AboutUs;