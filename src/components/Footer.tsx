import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img src="/iscap-logo.png" alt="ISCAP Logo" className="h-16 w-auto mb-6" />
            <p className="text-gray-400 mb-6 leading-relaxed">
              ISCAP is revolutionizing education with AI-powered personalized learning experiences. 
              Join millions of students worldwide in their journey to excellence.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook />} href="#" color="bg-[#4B9CD3]" />
              <SocialIcon icon={<Twitter />} href="#" color="bg-[#23B573]" />
              <SocialIcon icon={<Instagram />} href="#" color="bg-[#F7B928]" />
              <SocialIcon icon={<Linkedin />} href="#" color="bg-[#8E44AD]" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Explore</h3>
            <ul className="space-y-4">
              <FooterLink text="All Courses" href="#" />
              <FooterLink text="Learning Paths" href="#" />
              <FooterLink text="Success Stories" href="#" />
              <FooterLink text="Enterprise" href="#" />
              <FooterLink text="Become a Mentor" href="#" />
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              <FooterLink text="Help Center" href="#" />
              <FooterLink text="Career Guide" href="#" />
              <FooterLink text="Blog" href="#" />
              <FooterLink text="Student Community" href="#" />
              <FooterLink text="Partner with Us" href="#" />
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-[#4B9CD3]" />
                <a href="mailto:contact@iscap.com" className="text-gray-400 hover:text-white transition">
                  contact@iscap.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-[#23B573]" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition">
                  +91 8247819853
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-[#F7B928] mt-1" />
                <p className="text-gray-400">
                  Manikonda,<br />
                  Hyderabad, 500032
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} ISCAP. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon, href, color }) {
  return (
    <a 
      href={href}
      className={`${color} p-3 rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-110 text-white`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}

function FooterLink({ text, href }) {
  return (
    <li>
      <a 
        href={href}
        className="text-gray-400 hover:text-white transition"
      >
        {text}
      </a>
    </li>
  );
}

export default Footer;