import React from "react";

const Contactus = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-14">
      
      {/* Heading */}
      <h1 className="text-4xl font-bold text-orange-500 text-center">
        Contact Us 📞
      </h1>

      {/* Intro */}
      <p className="mt-6 text-center text-gray-600 text-lg">
        Have a question, suggestion, or feedback? We'd love to hear from you!
      </p>

      {/* Content */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Reach out to us anytime and we’ll get back to you as soon as possible.
          </p>

          <ul className="space-y-4 text-gray-600">
            <li>
              📧 <span className="font-medium">Email:</span> support@recipebook.com
            </li>
            <li>
              📞 <span className="font-medium">Phone:</span> +1 234 567 890
            </li>
            <li>
              📍 <span className="font-medium">Address:</span> Food Street, Kitchen City
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Send a Message</h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md
                         focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md
                         focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-2 border border-gray-300 rounded-md
                         focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-md
                         hover:bg-orange-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer Text */}
      <p className="mt-16 text-center text-gray-500">
        We usually respond within 24 hours ⏰
      </p>
    </div>
  );
};

export default Contactus;
