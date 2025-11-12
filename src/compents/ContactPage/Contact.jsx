import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { toast } from "react-toastify"; // ✅ import toast only

const Contact = () => {
  // State for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Function to handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!name || !email || !phone || !message) {
      toast.error(" Please fill in all fields before submitting!");
      return;
    }

    // Success message
    toast.success(
      " Thank you for contacting us! We’ll get back to you soon."
    );

    // Reset form
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <>
      {/* Breadcrumbs */}
      <div className="mb-8 md:mb-12 max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-8">
        <p className="text-gray-500 text-sm md:text-base">
          <Link to="/" className="hover:text-black transition">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-black font-medium">Contact</span>
        </p>
      </div>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {/* Left Info */}
        <div className="p-6 md:p-8 rounded-lg shadow-sm bg-white">
          {/* Call Us */}
          <div className="flex items-start gap-4 mb-8">
            <div className="bg-[#DB4444] text-white p-3 rounded-full flex items-center justify-center text-xl">
              <FiPhoneCall />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Call To Us</h3>
              <p className="text-gray-600 text-sm">
                We are available 24/7, 7 days a week.
              </p>
              <p className="text-gray-800 font-medium mt-1">
                Phone: +8801611112222
              </p>
            </div>
          </div>

          <hr className="my-6" />

          {/* Write to Us */}
          <div className="flex items-start gap-4">
            <div className="bg-[#DB4444] text-white p-3 rounded-full flex items-center justify-center text-xl">
              <FiMail />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Write To Us</h3>
              <p className="text-gray-600 text-sm mb-2">
                Fill out our form and we will contact you within 24 hours.
              </p>
              <p className="text-gray-800 text-sm">
                Emails: customer@exclusive.com
              </p>
              <p className="text-gray-800 text-sm">
                Emails: support@exclusive.com
              </p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="p-6 md:p-8 rounded-lg shadow-sm bg-white">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                placeholder="Your Name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-md w-full px-4 py-3 focus:outline-none focus:ring-1 focus:ring-red-400 bg-[#F5F5F5]"
              />
              <input
                type="email"
                placeholder="Your Email *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-md w-full px-4 py-3 focus:outline-none focus:ring-1 focus:ring-red-400 bg-[#F5F5F5]"
              />
              <input
                type="tel"
                placeholder="Your Phone *"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="rounded-md w-full px-4 py-3 focus:outline-none focus:ring-1 focus:ring-red-400 bg-[#F5F5F5]"
              />
            </div>

            <textarea
              placeholder="Your Message"
              rows="6"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="rounded-md w-full px-4 py-3 focus:outline-none focus:ring-1 focus:ring-red-400 bg-[#F5F5F5]"
            ></textarea>

            <div className="flex justify-center md:justify-end">
              <button
                type="submit"
                className="bg-[#DB4444] text-white px-8 py-3 rounded-md font-medium hover:bg-red-600 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
