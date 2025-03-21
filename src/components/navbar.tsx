"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex w-full bg-gray-900 shadow-md fixed top-0 left-0 z-50 justify-center"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <ul className="flex space-x-8 text-2xl">
          <motion.li
            whileHover={{ scale: 1.1, color: "#3B82F6" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link href="/" className="text-gray-300 transition-all">
              Home
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, color: "#3B82F6" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link href="/about" className="text-gray-300 transition-all">
              About
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, color: "#3B82F6" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link href="/projects" className="text-gray-300 transition-all">
              Projects
            </Link>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1, color: "#3B82F6" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link href="/contact" className="text-gray-300 transition-all">
              Contact
            </Link>
          </motion.li>
        </ul>
      </div>
    </motion.nav>
  );
}
