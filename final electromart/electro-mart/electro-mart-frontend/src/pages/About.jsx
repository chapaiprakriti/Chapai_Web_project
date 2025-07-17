import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-16 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-orange-600 rounded-full mix-blend-multiply filter blur-3xl opacity-8 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-orange-400 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-pulse delay-3000"></div>
      </div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-900/50 to-transparent"></div>
      
      <div className="relative z-10 px-6 py-16">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto text-center mb-20">
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
              About{' '}
              <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                ElectroMart
              </span>
            </h1>
            <div className="flex justify-center mb-8">
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full"></div>
            </div>
            <p className="text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
              Revolutionizing electronics commerce with cutting-edge technology, 
              unparalleled quality, and seamless user experience.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Company Story */}
          <div className="space-y-12">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-10 border border-gray-700/50 shadow-2xl">
              <div className="mb-8">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Our Story
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mb-6"></div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                ElectroMart emerged from a simple vision: to create the most intuitive and 
                reliable electronics marketplace in the digital age. We bridge the gap between 
                cutting-edge technology and everyday accessibility.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Founded by tech enthusiasts and e-commerce veterans, we understand both the 
                complexities of modern electronics and the need for streamlined, secure transactions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-10 border border-gray-700/50 shadow-2xl">
              <div className="mb-8">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Our Mission
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mb-6"></div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                To democratize access to premium electronics while empowering sellers with 
                world-class tools. We're not just building a marketplace — we're crafting 
                the future of tech commerce, one transaction at a time.
              </p>
            </div>
          </div>

          {/* Right Column - Features & Vision */}
          <div className="space-y-12">
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-10 border border-gray-700/50 shadow-2xl">
              <div className="mb-8">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  What Sets Us Apart
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mb-6"></div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">Seamless Experience</h3>
                    <p className="text-gray-300">Intuitive interface designed for both tech novices and experts</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">Advanced Security</h3>
                    <p className="text-gray-300">Enterprise-grade encryption and role-based access control</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">Lightning Fast</h3>
                    <p className="text-gray-300">Optimized infrastructure for instant product discovery</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">Seller Empowerment</h3>
                    <p className="text-gray-300">Comprehensive tools for inventory and customer management</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-10 border border-gray-700/50 shadow-2xl">
              <div className="mb-8">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                  Our Vision
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mb-6"></div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                We envision a world where technology connects people, not divides them. 
                ElectroMart is your gateway to this future — where every purchase is 
                an investment in innovation, and every seller is a partner in progress.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
              <div className="text-5xl font-black bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-4">
                50K+
              </div>
              <p className="text-gray-300 text-lg font-medium">Happy Customers</p>
            </div>
            <div className="text-center bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
              <div className="text-5xl font-black bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-4">
                10K+
              </div>
              <p className="text-gray-300 text-lg font-medium">Products Available</p>
            </div>
            <div className="text-center bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30">
              <div className="text-5xl font-black bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-4">
                99.9%
              </div>
              <p className="text-gray-300 text-lg font-medium">Uptime Guarantee</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/50 shadow-2xl">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              Ready to Experience the Future?
            </h2>
            <p className="text-gray-300 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
              Join thousands of satisfied customers and sellers who've made ElectroMart their 
              trusted electronics destination. Your journey starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700
                               text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl
                               transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
                Contact Our Team
              </button>
              <button className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white
                               px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:-translate-y-1">
                Explore Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}