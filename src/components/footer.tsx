import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section - Branding */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-xl font-bold">Mayank Piparde</h2>
          <p className="text-gray-400 text-sm">
            Full Stack Developer | React, Next.js & React Native
          </p>
        </div>

        {/* Right Section - Social Media */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/MayankPiparde04"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition-all"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/mayankpiparde"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition-all"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-blue-400 transition-all"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="mailto:mayankpiparde20@gmail.com"
            className="text-gray-300 hover:text-blue-400 transition-all"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="text-center text-gray-400 text-xs mt-6">
        <p>
          &copy; {new Date().getFullYear()} Mayank Piparde. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
