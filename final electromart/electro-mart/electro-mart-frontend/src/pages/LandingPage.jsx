import React, { useState, useEffect } from 'react';
import { LogIn, UserPlus, Shield, Zap, Globe, Users, Star, ArrowRight, Play, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const testimonials = [
    { name: "Sarah Johnson", role: "Tech Enthusiast", content: "ElectroMart transformed my shopping experience. The quality and service are unmatched!" },
    { name: "Michael Chen", role: "Small Business Owner", content: "As a seller, their platform tools have doubled my sales. Highly recommended!" },
    { name: "Emily Rodriguez", role: "Student", content: "Found the perfect laptop at an amazing price. Fast shipping and excellent support!" }
  ];

  const features = [
    { icon: Shield, title: "Secure Payments", description: "Bank-grade security with SSL encryption" },
    { icon: Zap, title: "Lightning Fast", description: "Instant product search and quick checkout" },
    { icon: Globe, title: "Global Reach", description: "Connect with sellers worldwide" },
    { icon: Users, title: "Trusted Community", description: "Verified sellers and authentic reviews" }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials]);

   const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-8 animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-12 animate-pulse delay-4000"></div>
      </div>

      
      {/* Hero Section */}
      <div className="relative z-10 px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gray-800/60 rounded-full border border-gray-700 backdrop-blur-sm">
                  <Star className="w-4 h-4 text-orange-400 mr-2" />
                  <span className="text-sm text-gray-300">Trusted by 100K+ customers worldwide</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-black leading-tight text-white">
                  The Future of
                  <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                    Electronics
                  </span>
                  <span className="block">Shopping</span>
                </h1>
                
                <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                  Discover cutting-edge gadgets, connect with verified sellers, and experience 
                  the most advanced electronics marketplace built for the modern world.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate('/signup')}
                  className="group flex items-center justify-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <UserPlus size={20} />
                  Get Started Free
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button
                  onClick={() => navigate('/login')}
                  className="flex items-center justify-center gap-3 bg-gray-800/80 hover:bg-gray-700/80 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 border border-gray-600 backdrop-blur-sm"
                >
                  <LogIn size={20} />
                  Sign In
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2 text-gray-400">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-sm">SSL Secured</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <CheckCircle className="w-5 h-5 text-orange-400" />
                  <span className="text-sm">24/7 Support</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <CheckCircle className="w-5 h-5 text-blue-400" />
                  <span className="text-sm">Fast Shipping</span>
                </div>
              </div>
            </div>

           
            <div className="relative">
              <div className="relative bg-gradient-to-br from-white rounded-3xl p-8 border border-gray-700/50 shadow-2xl">
                
             
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {/* Smartphone */}
                  <div className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border border-gray-700/50">
                    <div className="bg-gradient-to-b from-blue-500 to-blue-600 rounded-xl h-32 w-20 mx-auto mb-4 relative overflow-hidden">
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gray-800 rounded-full"></div>
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 border-2 border-gray-800 rounded-full"></div>
                      <div className="absolute inset-2 bg-gradient-to-b from-blue-300 to-blue-400 rounded-lg opacity-20"></div>
                    </div>
                    <p className="text-white text-sm font-semibold text-center">Smartphones</p>
                    <p className="text-gray-400 text-xs text-center mt-1">Latest Models</p>
                  </div>

                  
                  <div className="group bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border border-gray-700/50">
                    <div className="bg-gray-700 rounded-lg h-20 w-full mb-2 relative overflow-hidden">
                      <div className="absolute bottom-0 bg-gray-600 rounded-b-lg h-3 w-full"></div>
                      <div className="absolute inset-2 bg-gradient-to-br from-gray-500 to-gray-600 rounded opacity-30"></div>
                    </div>
                    <div className="bg-gray-600 rounded-lg h-1 w-3/4 mx-auto mb-3"></div>
                    <p className="text-white text-sm font-semibold text-center">Laptops</p>
                    <p className="text-gray-400 text-xs text-center mt-1">High Performance</p>
                  </div>

            
                  <div className="group bg-gradient-to-br from-orange-900/50 to-orange-800/50 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border border-orange-700/30">
                    <div className="relative h-24 w-20 mx-auto mb-4">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-3 bg-orange-500 rounded-full"></div>
                      <div className="absolute top-2 left-0 w-6 h-6 bg-orange-500 rounded-full"></div>
                      <div className="absolute top-2 right-0 w-6 h-6 bg-orange-500 rounded-full"></div>
                      <div className="absolute top-4 left-2 right-2 h-16 border-2 border-orange-500 rounded-full"></div>
                    </div>
                    <p className="text-orange-100 text-sm font-semibold text-center">Headphones</p>
                    <p className="text-orange-300 text-xs text-center mt-1">Premium Audio</p>
                  </div>

                  
                  <div className="group bg-gradient-to-br from-purple-900/50 to-purple-800/50 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border border-purple-700/30">
                    <div className="bg-gradient-to-b from-purple-600 to-purple-700 rounded-xl h-16 w-full mb-4 relative">
                      <div className="absolute top-2 left-2 w-2 h-2 bg-purple-300 rounded-full"></div>
                      <div className="absolute top-2 right-2 w-2 h-2 bg-purple-300 rounded-full"></div>
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-purple-300 rounded-full"></div>
                    </div>
                    <p className="text-purple-100 text-sm font-semibold text-center">Gaming</p>
                    <p className="text-purple-300 text-xs text-center mt-1">Next-Gen</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 rounded-2xl p-6 border border-gray-700/50">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-white mb-1">50K+</div>
                      <div className="text-sm text-gray-400">Products</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-orange-400 mb-1">100K+</div>
                      <div className="text-sm text-gray-400">Customers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-400 mb-1">99.9%</div>
                      <div className="text-sm text-gray-400">Uptime</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose ElectroMart?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the perfect blend of innovation, security, and convenience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-gradient-to-br from-whitebackdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      
      <div className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-300">Real feedback from real people</p>
          </div>

          <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/50 shadow-2xl">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-orange-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-2xl text-white mb-6 leading-relaxed">
                "{testimonials[currentSlide].content}"
              </blockquote>
              <div className="text-gray-300">
                <p className="font-semibold">{testimonials[currentSlide].name}</p>
                <p className="text-gray-400">{testimonials[currentSlide].role}</p>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-orange-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-orange-500/10 to-orange-600/10 backdrop-blur-sm rounded-3xl p-12 border border-orange-500/20 shadow-2xl">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join thousands of satisfied customers and discover why ElectroMart is the future of electronics shopping.
            </p>
            <button
              onClick={() => navigate('/signup')}
              className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold px-12 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 inline ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default LandingPage;