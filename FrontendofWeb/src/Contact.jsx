import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#e0f0ff] text-[#003366]">
      {/* Header */}
      <header className="bg-[#004a99] text-white text-2xl font-bold py-5 text-center shadow-md">
        ElectroMart
      </header>

      {/* Main content */}
      <main className="flex-grow max-w-lg mx-auto bg-white rounded-lg shadow-lg p-8 my-10">
        <h2 className="text-center text-[#004a99] text-3xl mb-4 font-semibold">
          Contact Us
        </h2>
        <p className="text-center mb-8 text-lg">
          Have questions or need assistance? We're here to help!
        </p>

        <form action="#" method="post" className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block mb-2 font-semibold text-[#004a99]"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your full name"
              required
              className="w-full px-4 py-3 border-2 border-[#004a99] rounded-md text-base focus:outline-none focus:ring-2 focus:ring-[#0073e6]"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 font-semibold text-[#004a99]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your.email@example.com"
              required
              className="w-full px-4 py-3 border-2 border-[#004a99] rounded-md text-base focus:outline-none focus:ring-2 focus:ring-[#0073e6]"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-2 font-semibold text-[#004a99]"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message here..."
              required
              className="w-full px-4 py-3 border-2 border-[#004a99] rounded-md text-base resize-y focus:outline-none focus:ring-2 focus:ring-[#0073e6]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#004a99] text-white text-lg font-bold py-3 rounded-md hover:bg-[#003366] transition-colors"
          >
            Send Message
          </button>
        </form>
      </main>

      {/* Footer */}
      <footer className="bg-[#004a99] text-white text-center py-4 font-semibold shadow-inner">
        &copy; 2025 ElectroMart. All rights reserved.
      </footer>
    </div>
  );
};

export default Contact;
