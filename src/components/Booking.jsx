import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Calendar, Clock, User, Mail, Phone, Scissors, Star, CheckCircle, MapPin, ArrowLeft } from 'lucide-react';

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    stylist: '',
    date: '',
    time: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [preSelectedService, setPreSelectedService] = useState(null);

  const services = [
    { value: 'haircut', label: 'Premium Haircut - Ksh 2,500', duration: '60-90 mins' },
    { value: 'coloring', label: 'Hair Coloring - Ksh 4,000', duration: '2-4 hours' },
    { value: 'manicure', label: 'Luxury Manicure - Ksh 1,500', duration: '45 mins' },
    { value: 'pedicure', label: 'Relaxing Pedicure - Ksh 1,800', duration: '60 mins' },
    { value: 'facial', label: 'Signature Facial - Ksh 3,500', duration: '75 mins' },
    { value: 'spa', label: 'Full Body Spa - Ksh 5,500', duration: '90-120 mins' },
    { value: 'bridal', label: 'Bridal Package - Ksh 12,000', duration: '4-6 hours' },
    { value: 'eyebrow', label: 'Eyebrow & Lash Services - Ksh 2,000', duration: '30-90 mins' }
  ];

  const stylists = [
    { value: 'any', label: 'Any Available Stylist', rating: 5.0 },
    { value: 'sarah', label: 'Sarah Johnson - Hair Specialist', rating: 4.9 },
    { value: 'mike', label: 'Mike Chen - Color Expert', rating: 4.8 },
    { value: 'emma', label: 'Emma Rodriguez - Spa Therapist', rating: 5.0 },
    { value: 'david', label: 'David Williams - Senior Stylist', rating: 4.9 }
  ];

  const timeSlots = [
    { time: '09:00', available: true },
    { time: '09:30', available: true },
    { time: '10:00', available: false },
    { time: '10:30', available: true },
    { time: '11:00', available: true },
    { time: '11:30', available: false },
    { time: '12:00', available: true },
    { time: '12:30', available: true },
    { time: '13:00', available: false },
    { time: '13:30', available: true },
    { time: '14:00', available: true },
    { time: '14:30', available: true },
    { time: '15:00', available: false },
    { time: '15:30', available: true },
    { time: '16:00', available: true },
    { time: '16:30', available: true },
    { time: '17:00', available: true },
    { time: '17:30', available: false }
  ];

  // Extract service data from React Router state on component mount
  useEffect(() => {
    if (location.state?.preSelectedService) {
      const serviceData = location.state.preSelectedService;
      
      // Set pre-selected service info
      setPreSelectedService(serviceData);

      // Pre-fill the form with the selected service
      setFormData(prev => ({
        ...prev,
        service: serviceData.value
      }));
    }
  }, [location.state]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleTimeSlotSelect = (time) => {
    setSelectedTimeSlot(time);
    setFormData(prev => ({
      ...prev,
      time: time
    }));
  };

  const handleSubmit = async () => {
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.date || !formData.time) {
      alert('Please fill in all required fields');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      stylist: '',
      date: '',
      time: ''
    });
    setSelectedTimeSlot('');
    setIsSubmitted(false);
    setPreSelectedService(null);
  };

  const goBackToServices = () => {
    navigate('/services');
  };

  // Get minimum date (today)
  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  // Get service display info
  const getServiceDisplayInfo = () => {
    if (preSelectedService) {
      return preSelectedService;
    }
    const selectedService = services.find(s => s.value === formData.service);
    return selectedService || null;
  };

  if (isSubmitted) {
    const serviceDisplayInfo = getServiceDisplayInfo();
    
    return (
      <div className="min-h-screen bg-white text-gray-900 pt-24 px-6 flex items-center justify-center">
        <div className="max-w-2xl w-full animate-fade-in">
          <div className="bg-gray-50 rounded-3xl p-12 border border-gray-200 shadow-2xl text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
              Booking Confirmed! 🎉
            </h1>
            
            <p className="text-xl text-gray-700 mb-8">
              Thank you, {formData.name}! Your appointment has been successfully booked.
            </p>
            
            <div className="bg-white rounded-2xl p-6 mb-8 text-left border border-gray-200 shadow-lg">
              <h3 className="text-lg font-semibold text-pink-600 mb-4">Appointment Details:</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Service:</strong> {serviceDisplayInfo?.label || services.find(s => s.value === formData.service)?.label}</p>
                <p><strong>Stylist:</strong> {stylists.find(s => s.value === formData.stylist)?.label}</p>
                <p><strong>Date:</strong> {new Date(formData.date).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</p>
                <p><strong>Time:</strong> {formData.time}</p>
                <p><strong>Phone:</strong> {formData.phone}</p>
              </div>
            </div>
            
            <div className="text-sm text-gray-600 mb-8">
              <p>📱 You'll receive a confirmation SMS shortly</p>
              <p>📧 Check your email for appointment details</p>
              <p>⏰ Please arrive 10 minutes early</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={resetForm}
                className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Book Another Appointment
              </button>
              <button
                onClick={() => window.location.href = 'tel:+254700123456'}
                className="px-8 py-3 border-2 border-gray-300 bg-white text-gray-700 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:bg-gray-50 hover:border-gray-400"
              >
                Call Salon
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const serviceDisplayInfo = getServiceDisplayInfo();

  return (
    <div className="min-h-screen bg-white text-gray-900 pt-24 px-6">
      <div className="max-w-4xl mx-auto animate-fade-in">
        {/* Header */}
        <div className="text-center mb-12">
          {/* Back to Services Button */}
          {preSelectedService && (
            <div className="mb-6">
              <button
                onClick={goBackToServices}
                className="inline-flex items-center px-4 py-2 text-pink-600 hover:text-pink-800 transition-colors duration-300"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </button>
            </div>
          )}
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Book Your Appointment
          </h1>
          
          {/* Pre-selected Service Banner */}
          {preSelectedService && (
            <div className="mb-6 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl border border-pink-200">
              <div className="flex items-center justify-center space-x-2">
                <Scissors className="w-5 h-5 text-pink-600" />
                <span className="text-lg font-semibold text-pink-800">
                  Selected Service: {preSelectedService.title}
                </span>
              </div>
              <p className="text-sm text-pink-700 mt-1">
                {preSelectedService.label} • {preSelectedService.duration}
              </p>
            </div>
          )}
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {preSelectedService 
              ? `Great choice! Now just fill in your details below to complete your ${preSelectedService.title} booking.`
              : 'Schedule your beauty transformation with our expert team. Fill out the form below and we\'ll confirm your appointment.'
            }
          </p>
        </div>

        {/* Booking Form */}
        <div className="bg-gray-50 rounded-3xl border border-gray-200 shadow-2xl p-8 md:p-12">
          <div className="space-y-8">
            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-pink-600 flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold text-pink-600 flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-pink-600 flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="+254 700 123 456"
                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Service Selection */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-pink-600 flex items-center">
                <Scissors className="w-4 h-4 mr-2" />
                Select Service *
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer"
              >
                <option value="" className="bg-white text-gray-900">Choose a service...</option>
                {services.map((service) => (
                  <option key={service.value} value={service.value} className="bg-white text-gray-900">
                    {service.label}
                  </option>
                ))}
              </select>
              {preSelectedService && (
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Service pre-selected from our services page
                </p>
              )}
            </div>

            {/* Stylist Preference */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-pink-600 flex items-center">
                <Star className="w-4 h-4 mr-2" />
                Stylist Preference
              </label>
              <select
                name="stylist"
                value={formData.stylist}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer"
              >
                <option value="" className="bg-white text-gray-900">Choose your preferred stylist...</option>
                {stylists.map((stylist) => (
                  <option key={stylist.value} value={stylist.value} className="bg-white text-gray-900">
                    {stylist.label} ({stylist.rating}★)
                  </option>
                ))}
              </select>
            </div>

            {/* Date Selection */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-pink-600 flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Preferred Date *
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                min={getMinDate()}
                required
                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Time Slots */}
            <div className="space-y-4">
              <label className="block text-sm font-semibold text-pink-600 flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                Available Time Slots *
              </label>
              
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                {timeSlots.map((slot) => (
                  <button
                    key={slot.time}
                    type="button"
                    onClick={() => slot.available && handleTimeSlotSelect(slot.time)}
                    disabled={!slot.available}
                    className={`py-3 px-4 rounded-xl text-sm font-semibold transition-all duration-300 ${
                      selectedTimeSlot === slot.time
                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white scale-105 shadow-lg'
                        : slot.available
                        ? 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 hover:scale-105 hover:border-gray-400'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed border border-gray-200'
                    }`}
                  >
                    {slot.time}
                  </button>
                ))}
              </div>
              
              <p className="text-sm text-gray-500 flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                Times shown are for our Nairobi location
              </p>
            </div>

            {/* Service Summary */}
            {serviceDisplayInfo && (
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
                <h3 className="text-lg font-semibold text-pink-600 mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Booking Summary
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Service:</strong> {serviceDisplayInfo.title || serviceDisplayInfo.label}</p>
                  {serviceDisplayInfo.duration && (
                    <p><strong>Duration:</strong> {serviceDisplayInfo.duration}</p>
                  )}
                  {formData.stylist && (
                    <p><strong>Stylist:</strong> {stylists.find(s => s.value === formData.stylist)?.label}</p>
                  )}
                  {formData.date && (
                    <p><strong>Date:</strong> {new Date(formData.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</p>
                  )}
                  {formData.time && (
                    <p><strong>Time:</strong> {formData.time}</p>
                  )}
                </div>
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-6">
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className={`w-full py-4 px-8 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/50 ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                    Processing Booking...
                  </div>
                ) : (
                  'Confirm Booking ✨'
                )}
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600 mb-4">Need help or have questions?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+254700123456"
                className="inline-flex items-center justify-center px-6 py-2 bg-white border border-gray-300 rounded-full text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call +254 700 123 456
              </a>
              <a 
                href="https://wa.me/254700123456"
                className="inline-flex items-center justify-center px-6 py-2 bg-white border border-gray-300 rounded-full text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        
        input[type="date"]::-webkit-calendar-picker-indicator {
          cursor: pointer;
        }
        
        select {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e");
          background-position: right 0.5rem center;
          background-repeat: no-repeat;
          background-size: 1.5em 1.5em;
          padding-right: 2.5rem;
        }
      `}</style>
    </div>
  );
};

export default Booking;