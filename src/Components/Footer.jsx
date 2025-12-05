import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PawPrint, Phone, Mail, MapPin } from "lucide-react";
const Footer = () => {
     return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <PawPrint className="w-8 h-8 text-pink-400" />
            <h2 className="text-xl font-semibold text-pink-300">PetCare BD</h2>
          </div>
          <p>
            We are committed to providing the best care for your pets. PetCare Hub offers Grooming, Training, Health Care, and many more services
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-pink-400 transition">Home</Link></li>
            <li><Link to="/services" className="hover:text-pink-400 transition">Services</Link></li>
            <li><Link to="/about" className="hover:text-pink-400 transition">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-pink-400 transition">Contact</Link></li>
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li className="hover:text-pink-400 transition">Pet Grooming</li>
            <li className="hover:text-pink-400 transition">Pet Training</li>
            <li className="hover:text-pink-400 transition">Veterinary Care</li>
            <li className="hover:text-pink-400 transition">Pet Boarding</li>
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2"><Phone className="w-5 h-5 text-pink-400" /> +880 1234 567890</li>
            <li className="flex items-center gap-2"><Mail className="w-5 h-5 text-pink-400" /> support@petcarehub.com</li>
            <li className="flex items-center gap-2"><MapPin className="w-5 h-5 text-pink-400" /> Chittagong, Bangladesh</li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        className="text-center text-sm text-gray-500 mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        © {new Date().getFullYear()} PetCare Hub — All Rights Reserved.
      </motion.div>
    </footer>
  );
};

export default Footer





