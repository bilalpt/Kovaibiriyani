import React from "react";
import Service247 from '../../assets/Service247.svg';

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fffbf2] p-6">
      <div className="max-w-4xl w-full flex flex-col md:flex-row gap-8">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">CONTACT US</h2>
          <p className="text-gray-600 mb-6">
            Let's connect: We're here to help, and we’d love to hear from you! Whether you have a
            question, comment, or just want to chat, you can reach out to us through the contact form
            below, or via phone, email, or social media.
          </p>

          {/* Buttons */}
          <div className="flex gap-2 mb-4">
            <a
              href="https://wa.me/9847996111"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 bg-[#000000] text-white rounded-lg flex items-center justify-center gap-2"
            >
              <span>💬</span> VIA SUPPORT CHAT
            </a>
            <a
              href="tel:9567040042"
              className="flex-1 py-2 bg-[#000000] text-white rounded-lg flex items-center justify-center gap-2"
            >
              <span>📞</span> VIA CALL
            </a>
          </div>

          {/* Email Form */}
          <div>
            <p className="text-gray-700 font-semibold mb-3">📧 VIA EMAIL FORM</p>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 mb-3 border rounded-lg"
            />
            <input
              type="email"
              placeholder="E-Mail"
              className="w-full p-2 mb-3 border rounded-lg"
            />
            <textarea
              placeholder="TEXT"
              className="w-full p-2 border rounded-lg h-24"
            ></textarea>
            <button className="w-full mt-3 py-2 bg-[#090909] text-white rounded-lg">SUBMIT</button>
          </div>
        </div>

        {/* Right Side - Illustration */}
        <div className="w-full md:w-1/2 flex justify-center items-center md:pl-20">
          <img src={Service247} alt="24/7 Service" className="w-80" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
