import React from 'react';
import KovaiLogo2 from '../../assets/KovaiLogo2.svg';
import '../Footer/Footer.css';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-[#f6f6c578] rounded-t-xl"
    >
      <div className="container md:pl-10 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Brand Info */}
          <div className="space-y-2 lg:max-w-[300px] mx-10 md:mx-0">
            <img src={KovaiLogo2} alt="Kovai Logo" className="w-36" />
            <p className="text-gray-700 text-sm leading-tight">
              NO.88, MEZZANINE FLOOR, JYOTHI NIVAS COLLEGE ROAD,<br />
              KORAMANGALA INDUSTRIAL AREA,<br />
              BENGALURU, INDIA, BTM LAYOUT,<br />
              B.B.M.P South, Karnataka-560095
            </p>
          </div>

          {/* Footer Navigation Links and Follow Us */}
          <div className="col-span-2 grid grid-cols-3 gap-3 items-start mx-10 md:mx-0">
            {/* First Quick Links */}
            <div>
              <h1 className="text-lg font-semibold ">Quick Links</h1>
              <ul className="space-y-1 mt-3 text-sm md:pt-4">
                <li><a href="#home" className="footer-link">Home</a></li>
                <li><a href="#about" className="footer-link">About</a></li>
                <li><a href="#contact" className="footer-link">Contact</a></li>
                <li><a href="/BecomeaFranchise" className="footer-link">Become a Franchise</a></li>
              </ul>
            </div>

            {/* Follow Us (Centered and Reduced Gap) */}
            <div className="flex flex-col items-center justify-start space-y-2">
              <h1 className="text-lg font-semibold">Follow Us</h1>
              <a href="https://www.instagram.com/kovairawutherbiryani/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-sm md:pt-4">
                <FaInstagram className="text-lg text-pink-500" />
                <span>Instagram</span>
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-1 text-sm">
                <FaFacebook className="text-lg text-blue-600" />
                <span>Facebook</span>
              </a>
            </div>

            {/* Second Quick Links */}
            <div>
              <h1 className="text-lg font-semibold">Quick Links</h1>
              <ul className="space-y-1 mt-3 text-sm">
                <li><a href="#home" className="footer-link md:pt-4">Home</a></li>
                <li><a href="#about" className="footer-link">About</a></li>
                <li><a href="#contact" className="footer-link">Contact</a></li>
                <li><a href="/BecomeaFranchise" className="footer-link">Become a Franchise</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
