import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBagIcon, MenuIcon, XIcon, SearchIcon, MapPinIcon, UserIcon } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    getCartCount,
    setCartOpen
  } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const lightBackgroundPages = ['/shop', '/restaurants', '/account', '/restaurant', '/food', '/checkout', '/order'];
  const isLightBackground = lightBackgroundPages.some(page => location.pathname.startsWith(page));
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [{
    name: 'Restaurants',
    path: '/restaurants'
  }, {
    name: 'Cuisines',
    path: '/shop'
  }, {
    name: 'Deals',
    scrollTo: 'deals'
  }, {
    name: 'Contact Us',
    scrollTo: 'contact'
  }];
  const cartCount = getCartCount();
  const shouldShowLightStyle = isLightBackground || isScrolled;
  return <header className={`fixed w-full z-50 transition-all duration-300 ${isLightBackground ? 'bg-white shadow-md py-3' : isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <motion.div initial={{
          opacity: 0,
          y: -20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="flex items-center">
            <span className={`text-2xl font-bold ${shouldShowLightStyle ? 'text-primary' : 'text-white'}`}>
              Food<span className="text-secondary">Control</span>
            </span>
          </motion.div>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <div className={`flex items-center space-x-1 ${shouldShowLightStyle ? 'text-primary' : 'text-white'}`}>
            <MapPinIcon size={18} />
            <span className="text-sm font-medium">Malolos, Bulacan</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, i) => <motion.button key={item.name} onClick={() => {
              if (item.path) {
                navigate(item.path);
              } else if (item.scrollTo) {
                if (location.pathname !== '/') {
                  navigate('/');
                  setTimeout(() => {
                    document.getElementById(item.scrollTo)?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                } else {
                  document.getElementById(item.scrollTo)?.scrollIntoView({ behavior: 'smooth' });
                }
              }
            }} initial={{
            opacity: 0,
            y: -20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.1 * i
          }} className={`font-medium hover:text-secondary transition-colors ${shouldShowLightStyle ? 'text-primary' : 'text-white'}`}>
                {item.name}
              </motion.button>)}
          </nav>
          <div className="flex items-center space-x-4">
            <motion.button initial={{
            opacity: 0,
            scale: 0.8
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.5,
            delay: 0.5
          }} className={`p-2 rounded-full ${shouldShowLightStyle ? 'bg-gray-100 text-primary' : 'bg-white/20 text-white'}`}>
              <SearchIcon size={20} />
            </motion.button>
            <motion.button initial={{
            opacity: 0,
            scale: 0.8
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.5,
            delay: 0.6
          }} onClick={() => navigate('/account')} className={`p-2 rounded-full ${shouldShowLightStyle ? 'bg-gray-100 text-primary' : 'bg-white/20 text-white'}`}>
              <UserIcon size={20} />
            </motion.button>
            <motion.button initial={{
            opacity: 0,
            scale: 0.8
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.5,
            delay: 0.7
          }} onClick={() => setCartOpen(true)} className="bg-primary p-2 rounded-full text-white relative">
              <ShoppingBagIcon size={20} />
              {cartCount > 0 && <motion.span initial={{
              scale: 0
            }} animate={{
              scale: 1
            }} className="absolute -top-1 -right-1 bg-secondary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
                  {cartCount}
                </motion.span>}
            </motion.button>
          </div>
        </div>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className={`md:hidden ${shouldShowLightStyle ? 'text-primary' : 'text-white'}`}>
          {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && <motion.div initial={{
      opacity: 0,
      height: 0
    }} animate={{
      opacity: 1,
      height: 'auto'
    }} exit={{
      opacity: 0,
      height: 0
    }} className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map(item => <button key={item.name} onClick={() => {
            if (item.path) {
              navigate(item.path);
            } else if (item.scrollTo) {
              if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => {
                  document.getElementById(item.scrollTo)?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              } else {
                document.getElementById(item.scrollTo)?.scrollIntoView({ behavior: 'smooth' });
              }
            }
            setMobileMenuOpen(false);
          }} className="font-medium text-textDark hover:text-primary transition-colors py-2 border-b border-gray-100 text-left">
                  {item.name}
                </button>)}
            </nav>
            <div className="mt-4 flex items-center space-x-4">
              <button className="p-2 bg-gray-100 rounded-full text-primary">
                <SearchIcon size={20} />
              </button>
              <button onClick={() => {
            navigate('/account');
            setMobileMenuOpen(false);
          }} className="p-2 bg-gray-100 rounded-full text-primary">
                <UserIcon size={20} />
              </button>
              <button onClick={() => {
            setCartOpen(true);
            setMobileMenuOpen(false);
          }} className="bg-primary p-2 rounded-full text-white relative">
                <ShoppingBagIcon size={20} />
                {cartCount > 0 && <span className="absolute -top-1 -right-1 bg-secondary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>}
              </button>
            </div>
          </div>
        </motion.div>}
    </header>;
};