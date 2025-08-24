import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, X, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 mt-8">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Main Content - Split Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Left Side - Contact Form */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="backdrop-blur-lg bg-white/30 rounded-3xl p-8 shadow-xl border border-white/20">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send us a Message</h2>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-white/30 backdrop-blur-sm bg-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-white/30 backdrop-blur-sm bg-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-xl border border-white/30 backdrop-blur-sm bg-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Write your message here..."
                  />
                </div>

                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Google Maps */}
          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="backdrop-blur-lg bg-white/30 rounded-3xl p-4 shadow-xl border border-white/20 h-full">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 px-4">Find Us Here</h2>
              
              <div className="rounded-2xl overflow-hidden h-96 lg:h-full min-h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.816654509!2d36.82194737475245!3d-1.2920659987015765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d22c8b4745%3A0x63c5e4b6b5d3b3c7!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1692345678901!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Details */}
        <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Phone */}
            <div className="backdrop-blur-lg bg-white/30 rounded-2xl p-6 shadow-lg border border-white/20 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-600">+254 123 456 789</p>
              <p className="text-gray-600">+254 987 654 321</p>
            </div>

            {/* Email */}
            <div className="backdrop-blur-lg bg-white/30 rounded-2xl p-6 shadow-lg border border-white/20 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">info@glamoursalon.com</p>
              <p className="text-gray-600">booking@glamoursalon.com</p>
            </div>

            {/* Address */}
            <div className="backdrop-blur-lg bg-white/30 rounded-2xl p-6 shadow-lg border border-white/20 text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Address</h3>
              <p className="text-gray-600">123 Beauty Street</p>
              <p className="text-gray-600">Nairobi, Kenya</p>
            </div>
          </div>
        </div>

        {/* Social Media Buttons */}
        <div className={`text-center transform transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Follow Us</h3>
          <div className="flex justify-center gap-4">
            {[
              { icon: Facebook, color: 'from-blue-500 to-blue-600', hoverColor: 'hover:from-blue-600 hover:to-blue-700' },
              { icon: Instagram, color: 'from-pink-500 to-purple-600', hoverColor: 'hover:from-pink-600 hover:to-purple-700' },
              { icon: X, color: 'from-gray-800 to-black', hoverColor: 'hover:from-gray-900 hover:to-gray-800' },
              { 
                icon: () => (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                ), 
                color: 'from-black to-gray-800', 
                hoverColor: 'hover:from-gray-800 hover:to-black' 
              }
            ].map((social, index) => (
              <button
                key={index}
                className={`w-12 h-12 bg-gradient-to-r ${social.color} ${social.hoverColor} rounded-full flex items-center justify-center text-white transform hover:scale-110 hover:rotate-12 transition-all duration-300 shadow-lg hover:shadow-xl`}
              >
                <social.icon size={24} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;