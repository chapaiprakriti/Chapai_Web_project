// src/components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-10 pb-6 mt-auto">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left">
        {/* About Section */}
        <div>
          <h3 className="font-bold text-xl mb-3 text-orange-500">About</h3>
          <p className="text-gray-400">
            ElectroMart is your one-stop shop for top-tier electronics. Shop smarter, live better.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-xl mb-3 text-orange-500">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline text-gray-300">Home</a></li>
            <li><a href="#" className="hover:underline text-gray-300">Products</a></li>
            <li><a href="#" className="hover:underline text-gray-300">Deals</a></li>
            <li><a href="#" className="hover:underline text-gray-300">Support</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-xl mb-3 text-orange-500">Contact</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Email: support@electromart.com</li>
            <li>Phone: 01-8484848</li>
            <li>Location: Kathmandu, Nepal</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} ElectroMart. All rights reserved.
      </div>
    </footer>
  );
}
