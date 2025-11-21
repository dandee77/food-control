import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
export const Footer = () => {
  const footerLinks = [{
    title: 'Company',
    links: ['About Us', 'Careers', 'Blog', 'Press']
  }, {
    title: 'Information',
    links: ['Contact Us', 'FAQ', 'Help Center', 'COVID-19 Safety']
  }, {
    title: 'For Restaurants',
    links: ['Partner With Us', 'Restaurant Dashboard', 'For Drivers']
  }, {
    title: 'Legal',
    links: ['Terms & Conditions', 'Privacy Policy', 'Cookies Policy']
  }];
  const socialIcons = [{
    icon: <Facebook size={20} />,
    label: 'Facebook'
  }, {
    icon: <Twitter size={20} />,
    label: 'Twitter'
  }, {
    icon: <Instagram size={20} />,
    label: 'Instagram'
  }, {
    icon: <Youtube size={20} />,
    label: 'YouTube'
  }];
  return <footer className="bg-textDark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5
          }}>
              <h2 className="text-2xl font-bold mb-4">
                Food<span className="text-secondary">Control</span>
              </h2>
              <p className="text-gray-400 mb-6 max-w-md">
                Discover the best food from over 500 restaurants and fast
                delivery to your doorstep
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin size={18} className="mt-1 mr-3 text-[#FF4E50]" />
                  <p className="text-gray-400">
                    123 Main Street, Malolos, Bulacan 10001
                  </p>
                </div>
                <div className="flex items-center">
                  <Phone size={18} className="mr-3 text-[#FF4E50]" />
                  <p className="text-gray-400">(123) 456-7890</p>
                </div>
                <div className="flex items-center">
                  <Mail size={18} className="mr-3 text-[#FF4E50]" />
                  <p className="text-gray-400">support@FoodControl.com</p>
                </div>
              </div>
            </motion.div>
          </div>
          {footerLinks.map((section, i) => <motion.div key={section.title} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.1 * i
        }}>
              <h3 className="font-bold mb-4 text-lg">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map(link => <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>)}
              </ul>
            </motion.div>)}
        </div>
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5,
        delay: 0.5
      }} className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} FoodControl. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {socialIcons.map((social, i) => <motion.a key={social.label} href="#" whileHover={{
            y: -3
          }} className="bg-gray-800 text-gray-400 hover:text-white p-2 rounded-full transition-colors" aria-label={social.label}>
                {social.icon}
              </motion.a>)}
          </div>
        </motion.div>
      </div>
    </footer>;
};