import React, { useState, useEffect } from 'react';
import { 
  Package, Users, Star, CheckCircle, TrendingUp, DollarSign, 
  BarChart3, Shield, Award, Clock, ArrowRight, PlusCircle,
  Target, Zap, Globe, ChevronRight, LineChart, Briefcase,
  Calendar, Eye, ShoppingCart, MessageCircle, Settings
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SellerHome() {
  const [counters, setCounters] = useState({ listings: 0, reach: 0, satisfaction: 0, sales: 0 });
  const [currentTip, setCurrentTip] = useState(0);
   const navigate = useNavigate();

  
  const goToProducts = () => {
    navigate('/seller/products');
  };

  const goToAddProduct = () => {
    navigate('/seller/add-product');
  };

  const goToAnalytics = () => {
    console.log('Navigate to analytics');
  };
  // Seller tips carousel
  const sellerTips = [
    {
      title: "High-Quality Photos",
      description: "Products with professional photos sell 3x faster",
      icon: Eye
    },
    {
      title: "Competitive Pricing",
      description: "Price matching increases your conversion rate by 40%",
      icon: DollarSign
    },
    {
      title: "Fast Shipping",
      description: "Same-day dispatch boosts your seller rating significantly",
      icon: Zap
    },
    {
      title: "Customer Service",
      description: "Quick responses lead to 95% positive feedback",
      icon: MessageCircle
    }
  ];

  // Recent activities data
  const recentActivities = [
    { action: "New order received", product: "iPhone 15 Pro", time: "2 min ago", status: "success" },
    { action: "Product viewed", product: "MacBook Pro M3", time: "5 min ago", status: "info" },
    { action: "Review received", product: "Sony Headphones", time: "1 hour ago", status: "success" },
    { action: "Listing updated", product: "Samsung Galaxy S24", time: "3 hours ago", status: "warning" }
  ];

  // Counter animation effect
  useEffect(() => {
    const animateCounters = () => {
      const targetValues = { listings: 120, reach: 30000, satisfaction: 98, sales: 15000 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          listings: Math.floor(targetValues.listings * progress),
          reach: Math.floor(targetValues.reach * progress),
          satisfaction: Math.floor(targetValues.satisfaction * progress),
          sales: Math.floor(targetValues.sales * progress)
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounters(targetValues);
        }
      }, stepDuration);
    };

    animateCounters();
  }, []);

  // Auto-rotate tips
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % sellerTips.length);
    }, 4000);
    return () => clearInterval(timer);
  }, );

  

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-2000"></div>
        
        {/* Geometric Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-32 left-32 w-24 h-24 border border-orange-500 rounded-lg rotate-45 animate-spin-slow"></div>
          <div className="absolute top-1/2 right-32 w-32 h-32 border border-orange-400 rounded-full animate-bounce-slow"></div>
          <div className="absolute bottom-32 left-1/2 w-20 h-20 border border-orange-600 rounded-lg rotate-12 animate-pulse"></div>
        </div>
      </div>

      <div className="relative z-10 px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Hero Section */}
          <div className="text-center mb-16 pt-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl shadow-2xl mb-8 group hover:scale-110 transition-all duration-500">
              <Briefcase className="w-12 h-12 text-white group-hover:rotate-12 transition-transform duration-300" />
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight text-white">
              Seller{' '}
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent animate-pulse">
                Dashboard
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-6 font-medium">
              Your Gateway to E-commerce Success
            </p>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Manage your inventory, track performance, and grow your business with our powerful seller tools and analytics.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={goToProducts}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 text-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 min-w-[220px] group"
              >
                Manage Products
                <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={goToAddProduct}
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 text-xl min-w-[220px] group"
              >
                Add Product
                <PlusCircle className="inline ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>

          {/* Key Metrics Dashboard */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <MetricCard
              icon={Package}
              title="Active Listings"
              value={counters.listings}
              suffix="+"
              description="Products currently for sale"
              color="from-blue-500 to-blue-600"
              bgColor="from-blue-500/10 to-blue-600/10"
            />
            <MetricCard
              icon={Users}
              title="Monthly Reach"
              value={counters.reach}
              suffix="+"
              description="Unique visitors to your products"
              color="from-green-500 to-green-600"
              bgColor="from-green-500/10 to-green-600/10"
            />
            <MetricCard
              icon={Star}
              title="Satisfaction Rate"
              value={counters.satisfaction}
              suffix="%"
              description="Positive customer feedback"
              color="from-yellow-500 to-yellow-600"
              bgColor="from-yellow-500/10 to-yellow-600/10"
            />
            <MetricCard
              icon={DollarSign}
              title="Total Sales"
              value={counters.sales}
              suffix="+"
              description="Revenue generated this month"
              color="from-purple-500 to-purple-600"
              bgColor="from-purple-500/10 to-purple-600/10"
            />
          </div>

          {/* Quick Actions Panel */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 mb-16 shadow-2xl border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <QuickActionCard
                icon={PlusCircle}
                title="Add New Product"
                description="List a new item in your inventory"
                onClick={goToAddProduct}
                color="from-green-500 to-green-600"
              />
              <QuickActionCard
                icon={BarChart3}
                title="View Analytics"
                description="Check your sales and performance metrics"
                onClick={goToAnalytics}
                color="from-blue-500 to-blue-600"
              />
              <QuickActionCard
                icon={Settings}
                title="Store Settings"
                description="Configure your seller preferences"
                onClick={() => console.log('Navigate to settings')}
                color="from-purple-500 to-purple-600"
              />
            </div>
          </div>

          {/* Seller Tips Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-white mb-4">Seller Success Tips</h2>
              <p className="text-xl text-gray-400">Pro tips to boost your sales and rankings</p>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-700">
              <div className="text-center">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  {React.createElement(sellerTips[currentTip].icon, { className: 'w-8 h-8 text-white' })}

                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{sellerTips[currentTip].title}</h3>
                <p className="text-gray-300 text-lg mb-6">{sellerTips[currentTip].description}</p>
                
                <div className="flex justify-center gap-2 mt-6">
                  {sellerTips.map((_, index) => (
                    <div
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTip ? 'bg-orange-500' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity Feed */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Clock className="w-6 h-6 mr-3 text-orange-500" />
                Recent Activity
              </h3>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-gray-700 rounded-xl hover:bg-gray-600 transition-colors">
                    <div className={`w-3 h-3 rounded-full ${
                      activity.status === 'success' ? 'bg-green-500' : 
                      activity.status === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                    }`} />
                    <div className="flex-1">
                      <p className="text-white font-medium">{activity.action}</p>
                      <p className="text-gray-400 text-sm">{activity.product}</p>
                    </div>
                    <span className="text-gray-500 text-sm">{activity.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Target className="w-6 h-6 mr-3 text-orange-500" />
                Performance Goals
              </h3>
              <div className="space-y-6">
                <ProgressGoal
                  title="Monthly Sales Target"
                  current={15000}
                  target={20000}
                  color="orange"
                />
                <ProgressGoal
                  title="Product Listings"
                  current={120}
                  target={150}
                  color="blue"
                />
                <ProgressGoal
                  title="Customer Satisfaction"
                  current={98}
                  target={100}
                  color="green"
                />
              </div>
            </div>
          </div>

          {/* Seller Benefits Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Why Sellers Love Us</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Join thousands of successful sellers growing their business with our platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Secure Payments",
                  description: "Get paid safely with our secure payment processing system",
                  color: "from-green-500 to-green-600"
                },
                {
                  icon: Zap,
                  title: "Fast Payouts",
                  description: "Receive your earnings within 24 hours of order completion",
                  color: "from-blue-500 to-blue-600"
                },
                {
                  icon: Award,
                  title: "Seller Recognition",
                  description: "Earn badges and recognition for excellent service",
                  color: "from-yellow-500 to-yellow-600"
                },
                {
                  icon: LineChart,
                  title: "Advanced Analytics",
                  description: "Track your performance with detailed insights and reports",
                  color: "from-purple-500 to-purple-600"
                },
                {
                  icon: Globe,
                  title: "Global Reach",
                  description: "Sell to customers worldwide with our international platform",
                  color: "from-orange-500 to-orange-600"
                },
                {
                  icon: MessageCircle,
                  title: "24/7 Support",
                  description: "Get help whenever you need it with our dedicated support team",
                  color: "from-red-500 to-red-600"
                }
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-105 border border-gray-700 hover:border-orange-500"
                >
                  <div className={`bg-gradient-to-r ${benefit.color} w-16 h-16 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-gray-400 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="text-center bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Boost Your Sales?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Take your business to the next level with our powerful seller tools and insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={goToProducts}
                className="bg-white text-orange-600 hover:bg-gray-100 font-bold px-12 py-6 rounded-2xl transition-all duration-300 text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
              >
                Manage Products
                <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={goToAnalytics}
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-bold px-12 py-6 rounded-2xl transition-all duration-300 text-xl group"
              >
                View Analytics
                <BarChart3 className="inline ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Enhanced Metric Card Component
const MetricCard = ({ icon: Icon, title, value, suffix, description, color, bgColor }) => (
  <div className={`bg-gradient-to-br ${bgColor} backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-105 border border-gray-700`}>
    <div className="flex items-center justify-between mb-4">
      <div className={`bg-gradient-to-r ${color} w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-orange-500 transition-colors" />
    </div>
    <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
    <p className="text-3xl font-bold text-white mb-2">
      {value.toLocaleString()}{suffix}
    </p>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

// Quick Action Card Component
const QuickActionCard = ({ icon: Icon, title, description, onClick, color }) => (
  <div
    onClick={onClick}
    className="bg-gradient-to-br from-gray-700 to-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group hover:scale-105 border border-gray-600 hover:border-orange-500"
  >
    <div className={`bg-gradient-to-r ${color} w-14 h-14 rounded-xl mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
      <Icon className="w-7 h-7 text-white" />
    </div>
    <h3 className="text-white font-bold text-xl mb-2">{title}</h3>
    <p className="text-gray-400 mb-4">{description}</p>
    <ArrowRight className="w-5 h-5 text-orange-500 group-hover:translate-x-1 transition-transform" />
  </div>
);

// Progress Goal Component
const ProgressGoal = ({ title, current, target, color }) => {
  const percentage = (current / target) * 100;
  const colors = {
    orange: 'bg-orange-500',
    blue: 'bg-blue-500',
    green: 'bg-green-500'
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-white font-medium">{title}</span>
        <span className="text-gray-400 text-sm">{current.toLocaleString()} / {target.toLocaleString()}</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-3">
        <div
          className={`h-3 rounded-full ${colors[color]} transition-all duration-1000`}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>
      <div className="text-right mt-1">
        <span className="text-sm font-medium text-gray-300">{Math.round(percentage)}%</span>
      </div>
    </div>
  );
};