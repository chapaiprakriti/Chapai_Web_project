import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ShoppingBag, ShieldCheck, Star, TrendingUp, Smartphone, Laptop, Headphones, 
  Camera, Watch,   Gamepad2, Zap, Award, Users, Clock, ChevronLeft, ChevronRight,
  Quote, ArrowRight, CheckCircle, Globe, Truck, RefreshCw
} from 'lucide-react';

export default function BuyerHome() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [counters, setCounters] = useState({ deals: 0, rating: 0, support: 0 });

  
  const featuredProducts = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      price: "$1,199",
      originalPrice: "$1,299",
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
      rating: 4.9,
      discount: "8% OFF"
    },
    {
      id: 2,
      name: "MacBook Pro M3",
      price: "$1,999",
      originalPrice: "$2,299",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop",
      rating: 4.8,
      discount: "13% OFF"
    },
    {
      id: 3,
      name: "Sony WH-1000XM5",
      price: "$349",
      originalPrice: "$399",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
      rating: 4.7,
      discount: "12% OFF"
    },
    {
      id: 4,
      name: "Samsung Galaxy S24",
      price: "$899",
      originalPrice: "$999",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
      rating: 4.6,
      discount: "10% OFF"
    }
  ];

  
  const categories = [
    {
      icon: Smartphone,
      name: "Smartphones",
      description: "Latest flagship devices with cutting-edge technology",
      count: "250+ Products"
    },
    {
      icon: Laptop,
      name: "Laptops",
      description: "High-performance laptops for work and gaming",
      count: "180+ Products"
    },
    {
      icon: Headphones,
      name: "Audio",
      description: "Premium headphones and speakers for audiophiles",
      count: "120+ Products"
    },
    {
      icon: Camera,
      name: "Cameras",
      description: "Professional cameras and photography gear",
      count: "95+ Products"
    },
    {
      icon: Watch,
      name: "Wearables",
      description: "Smart watches and fitness tracking devices",
      count: "85+ Products"
    },
    {
      icon: Gamepad2,
      name: "Gaming",
      description: "Gaming consoles, accessories, and peripherals",
      count: "200+ Products"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Amazing selection and fast shipping! Got my new iPhone in just 2 days.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b510?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Mike Chen",
      rating: 5,
      comment: "Best prices I've found online. The laptop I ordered was exactly as described.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Emma Davis",
      rating: 5,
      comment: "Excellent customer service and authentic products. Highly recommend!",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    }
  ];

  // Counter animation effect
  useEffect(() => {
    const animateCounters = () => {
      const targetValues = { deals: 1200, rating: 4.8, support: 24 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          deals: Math.floor(targetValues.deals * progress),
          rating: parseFloat((targetValues.rating * progress).toFixed(1)),
          support: Math.floor(targetValues.support * progress)
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounters(targetValues);
        }
      }, stepDuration);
    };

    animateCounters();
  }, []);

  // Auto-slide for featured products
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(featuredProducts.length / 2));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleViewProducts = () => {
    navigate('/buyer/products');
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(featuredProducts.length / 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(featuredProducts.length / 2)) % Math.ceil(featuredProducts.length / 2));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-2000"></div>
        
        {/* Geometric Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-orange-500 rounded-lg rotate-45 animate-spin-slow"></div>
          <div className="absolute top-40 right-40 w-24 h-24 border border-orange-400 rounded-full animate-bounce-slow"></div>
          <div className="absolute bottom-40 left-40 w-28 h-28 border border-orange-600 rounded-lg rotate-12 animate-pulse"></div>
        </div>
      </div>

      <div className="relative z-10 px-4 py-8">
        {/* Enhanced Hero Section */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 pt-12">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl shadow-2xl mb-8 group hover:scale-110 transition-all duration-500">
              <ShoppingBag className="w-12 h-12 text-white group-hover:rotate-12 transition-transform duration-300" />
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              Your Tech{' '}
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent animate-pulse">
                Paradise
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-6 font-medium">
              Discover Premium Electronics at Unbeatable Prices
            </p>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join over 50,000 tech enthusiasts who trust us for authentic products, lightning-fast delivery, and exceptional customer service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleViewProducts}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 min-w-[220px] group"
              >
                Shop Now
                <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 text-xl min-w-[220px]">
                Browse Categories
              </button>
            </div>
          </div>

          {/* Enhanced Categories Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Shop by Category
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Explore our carefully curated collection of premium electronics
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center group hover:scale-105 cursor-pointer border border-gray-700 hover:border-orange-500"
                >
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{category.name}</h3>
                  <p className="text-gray-400 text-sm mb-2">{category.description}</p>
                  <p className="text-orange-500 text-xs font-medium">{category.count}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Products Carousel */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Featured Deals
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Limited-time offers on the latest and greatest tech products
              </p>
            </div>

            <div className="relative bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Today's Hot Deals</h3>
                <div className="flex gap-2">
                  <button
                    onClick={prevSlide}
                    className="p-3 bg-gray-700 hover:bg-orange-500 rounded-full transition-colors duration-300"
                  >
                    <ChevronLeft className="w-5 h-5 text-white" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="p-3 bg-gray-700 hover:bg-orange-500 rounded-full transition-colors duration-300"
                  >
                    <ChevronRight className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {Array.from({ length: Math.ceil(featuredProducts.length / 2) }).map((_, slideIndex) => (
                    <div key={slideIndex} className="min-w-full flex gap-6">
                      {featuredProducts.slice(slideIndex * 2, slideIndex * 2 + 2).map((product) => (
                        <div
                          key={product.id}
                          className="flex-1 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer group border border-gray-700 hover:border-orange-500"
                        >
                          <div className="relative mb-4">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-48 object-cover rounded-xl group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                              {product.discount}
                            </div>
                          </div>
                          <h4 className="text-white font-bold text-lg mb-2">{product.name}</h4>
                          <div className="flex items-center gap-2 mb-3">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="text-gray-300 text-sm">{product.rating}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-orange-500 font-bold text-xl">{product.price}</span>
                            <span className="text-gray-500 line-through text-sm">{product.originalPrice}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Statistics Section */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-4xl font-bold text-white mb-2">{counters.deals.toLocaleString()}+</p>
                  <p className="text-gray-400 text-lg">Daily Deals</p>
                  <p className="text-gray-500 text-sm mt-2">New products added every hour</p>
                </div>
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-4xl font-bold text-white mb-2">{counters.rating}/5</p>
                  <p className="text-gray-400 text-lg">Customer Rating</p>
                  <p className="text-gray-500 text-sm mt-2">Based on 10,000+ reviews</p>
                </div>
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-4xl font-bold text-white mb-2">{counters.support}/7</p>
                  <p className="text-gray-400 text-lg">Support</p>
                  <p className="text-gray-500 text-sm mt-2">Always here to help you</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Why Choose Us?
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                We're committed to providing the best shopping experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: ShieldCheck, title: "Authentic Products", description: "100% genuine products from authorized dealers" },
                { icon: Truck, title: "Free Shipping", description: "Free delivery on orders over $99" },
                { icon: RefreshCw, title: "Easy Returns", description: "30-day hassle-free return policy" },
                { icon: Award, title: "Best Prices", description: "Price match guarantee on all items" }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center group hover:scale-105 border border-gray-700 hover:border-orange-500"
                >
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Customer Testimonials */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Join thousands of satisfied customers worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-xl border border-gray-700 hover:border-orange-500 transition-all duration-300 group hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="text-white font-bold">{testimonial.name}</h4>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <Quote className="w-8 h-8 text-orange-500 mb-3" />
                  <p className="text-gray-300 italic">{testimonial.comment}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="text-center bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Start Shopping?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Discover amazing deals on the latest tech products. Your perfect device is waiting!
            </p>
            <button
              onClick={handleViewProducts}
              className="bg-white text-orange-600 hover:bg-gray-100 font-bold px-12 py-6 rounded-2xl transition-all duration-300 text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 min-w-[250px] group"
            >
              Explore Products
              <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Trust Badges Footer */}
      <div className="bg-gray-900 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-green-400" />
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-blue-400" />
              <span>Verified Sellers</span>
            </div>
            <div className="flex items-center gap-2">
              <RefreshCw className="w-5 h-5 text-orange-400" />
              <span>30-Day Returns</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-purple-400" />
              <span>Worldwide Shipping</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}