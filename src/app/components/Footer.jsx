import React from "react";
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white bg-[#181818]">
      <div className="container p-12 flex justify-between items-center">
        <span>Denis Scarabelli</span>
        <div className="flex space-x-4">
          <Link href="https://www.instagram.com/denis.desenvolvedor" target="_blank">
            <FaInstagram size={24} className="text-white hover:text-yellow-500 transition-colors duration-300" />
          </Link>
          <Link href="https://www.linkedin.com/in/denis-scarabelli/" target="_blank">
            <FaLinkedin size={24} className="text-white hover:text-yellow-500 transition-colors duration-300" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
