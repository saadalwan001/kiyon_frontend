import React from "react";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import Navbar from "./Components/client_navbar";
import Footer from "./Components/Footer";
import Button from "./Components/ui/Button";

const Contact = () => {
  return (
    <>
      <Navbar />

      <div className="w-full">
        {/* ===================== SECTION 1 - HERO ===================== */}
        <section>
          <div
            className="relative bg-cover bg-center h-[750px] flex flex-col items-center justify-center text-black"
            style={{ backgroundImage: `url('/Contact.jpg')` }}
          >
           <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg font-['Playfair_Display']">
           Get in Touch With Us
        </h1>
        <h2 className="mt-4 text-xl md:text-2xl text-white max-w-2xl drop-shadow-md  font-['barlow'] text-center">
          We’d love to hear from you! Reach out to us for any travel
            inquiries, feedback, or support.
        </h2>
      
          </div>
        </section>

        {/* ===================== SECTION 2 - CONTACT INFO & FORM ===================== */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left Column - Contact Cards + Map */}
            <div className="space-y-8">
              {/* Contact Grid */}
              <div className="grid grid-cols-2 gap-6">
                {/* Phone */}
                <div className="bg-white rounded-2xl shadow-md p-6 text-center group transition">
                  <Phone
                    size={40}
                    className="mx-auto mb-3 text-gray-500 group-hover:text-[#238B45] transition-colors"
                  />
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-gray-600 mt-1">+94 77 123 4567</p>
                </div>

                {/* WhatsApp */}
                <div className="bg-white rounded-2xl shadow-md p-6 text-center group transition">
                  <MessageCircle
                    size={40}
                    className="mx-auto mb-3 text-gray-500 group-hover:text-[#238B45] transition-colors"
                  />
                  <h3 className="font-semibold text-lg">WhatsApp</h3>
                  <p className="text-gray-600 mt-1">+94 77 765 4321</p>
                </div>

                {/* Email */}
                <div className="bg-white rounded-2xl shadow-md p-6 text-center group transition">
                  <Mail
                    size={40}
                    className="mx-auto mb-3 text-gray-500 group-hover:text-[#238B45] transition-colors"
                  />
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-600 mt-1">info@lankatours.com</p>
                </div>

                {/* Address */}
                <div className="bg-white rounded-2xl shadow-md p-6 text-center group transition">
                  <MapPin
                    size={40}
                    className="mx-auto mb-3 text-gray-500 group-hover:text-[#238B45] transition-colors"
                  />
                  <h3 className="font-semibold text-lg">Address</h3>
                  <p className="text-gray-600 mt-1">
                    25 Galle Road, Colombo, Sri Lanka
                  </p>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg h-64 sm:h-80 lg:h-[400px]">
                <iframe
                  title="Location Map"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63314.25373102983!2d79.80828079651827!3d6.921837094133746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2594ed3a3ed07%3A0x8c5df801f3a6f8e6!2sColombo!5e0!3m2!1sen!2slk!4v1695921429297!5m2!1sen!2slk"
                ></iframe>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="p-6 sm:p-8 rounded-lg bg-white shadow-lg">
              <h2 className="font-['Playfair_Display'] text-2xl lg:text-[40px] font-bold mb-6">
                Contact Us
              </h2>
              <form className="space-y-6">
                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      <span className="text-gray-400">*</span> Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Name"
                      required
                      className="mt-1 block w-full h-[60px] bg-[#d5f0de] rounded-md p-2 text-[#656566] border-none focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      <span className="text-gray-400">*</span> Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      required
                      className="mt-1 block w-full h-[60px] bg-[#d5f0de] rounded-md p-2 text-[#656566] border-none focus:outline-none"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Mobile No or Whatsapp No:
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter Your Mobile Number"
                      className="mt-1 block w-full h-[60px] bg-[#d5f0de] rounded-md p-2 text-[#656566] border-none focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      <span className="text-gray-400">*</span> Country
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Country"
                      required
                      className="mt-1 block w-full h-[60px] bg-[#d5f0de] rounded-md p-2 text-[#656566] border-none focus:outline-none"
                    />
                  </div>
                </div>

                {/* Row 3 - Dates */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Arrival Date:
                    </label>
                    <input
                      type="date"
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Departure Date:
                    </label>
                    <input
                      type="date"
                      className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    rows="6"
                    placeholder="Enter Your Message"
                    className="mt-1 block w-full bg-[#d5f0de] rounded-md p-4 text-[#656566] border-none focus:outline-none"
                  ></textarea>
                </div>

                {/* Required Fields Note */}
                <p className="text-sm text-gray-500">Required Fields *</p>

                {/* Button */}
                <Button text="Send A Message" size="text-lg" />
              </form>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
