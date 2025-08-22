"use client"
import React from 'react';
import Link from 'next/link';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaHeart,
  FaTruck,
  FaHeadset,
  FaShieldAlt,
  FaWhatsapp
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content">

     
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-primary">
              LakshmiCommerce
            </Link>
            <p className=" dark:text-gray-600">
              Your trusted partner for premium quality supari and traditional products. 
              We bring you the finest areca nuts from sustainable farms.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-base-300 rounded-full hover:bg-primary hover:text-white transition-colors">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="p-2 bg-base-300 rounded-full hover:bg-primary hover:text-white transition-colors">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="p-2 bg-base-300 rounded-full hover:bg-primary hover:text-white transition-colors">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="p-2 bg-base-300 rounded-full hover:bg-primary hover:text-white transition-colors">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/products" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Products</Link></li>
              <li><Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="/faq" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link href="/category/supari" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Supari</Link></li>
              <li><Link href="/category/betel-nuts" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Betel Nuts</Link></li>
              <li><Link href="/category/traditional" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Traditional</Link></li>
              <li><Link href="/category/organic" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Organic</Link></li>
              <li><Link href="/category/gift-packs" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Gift Packs</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-primary flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">123 Trade Street, Lakshmipur, Bangladesh 20000</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-primary flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-4 00">+8801820220509</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-primary flex-shrink-0" />
                <span className="text-gray-600 dark:text-gray-400">info@lakshmicommerce.com</span>
              </div>
            </div>

            
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-base-300">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © 2024 LakshmiCommerce. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/refund" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/1820220509"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-success btn-circle btn-lg shadow-lg hover:shadow-xl transition-all"
          aria-label="Chat on WhatsApp"
        >
         <FaWhatsapp />
        </a>
      </div>
    </footer>
  );
};

export default Footer;