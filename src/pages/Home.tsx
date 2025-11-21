import React from 'react';
import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';
import { CategoryFilter } from '../components/CategoryFilter';
import { FeaturedRestaurants } from '../components/FeaturedRestaurants';
import { PromoSection } from '../components/PromoSection';
import { PopularDishes } from '../components/PopularDishes';
import { HowItWorks } from '../components/HowItWorks';
import { StarIcon, MapPinIcon, PhoneIcon, MailIcon, SendIcon, QuoteIcon, ChefHatIcon, UtensilsIcon, ClockIcon } from 'lucide-react';
export const Home = () => {
  const cuisineCategories = ['Pizza', 'Burgers', 'Sushi', 'Italian', 'Mexican', 'Chinese', 'Indian', 'Thai', 'Desserts', 'Healthy'];
  const testimonials = [{
    id: 1,
    name: 'Reymel Aquino',
    role: 'Food Blogger',
    image: 'https://i.pravatar.cc/150?img=1',
    rating: 5,
    text: "FoodControl has completely transformed how I discover new restaurants! The variety is incredible and the delivery is always on time. I've found so many hidden gems through this platform.",
    restaurant: "Tony's Pizzeria"
  }, {
    id: 2,
    name: 'Euan Francisco',
    role: 'Regular Customer',
    image: 'https://i.pravatar.cc/150?img=2',
    rating: 5,
    text: 'As someone who works late hours, FoodControl is a lifesaver. The quality of food is always top-notch, and I love how easy it is to track my orders. Best food delivery service hands down!',
    restaurant: 'Sakura Sushi'
  }, {
    id: 3,
    name: 'Lance Bernal',
    role: 'Busy Mom',
    image: 'https://i.pravatar.cc/150?img=3',
    rating: 5,
    text: 'With three kids, cooking every night is tough. FoodControl makes it so easy to get delicious, healthy meals delivered. The family meal deals are perfect for us!',
    restaurant: 'Green Bowl'
  }, {
    id: 4,
    name: 'Reniel Cardenas',
    role: 'Office Manager',
    image: 'https://i.pravatar.cc/150?img=4',
    rating: 5,
    text: 'We use FoodControl for all our office lunch orders. The group ordering feature is fantastic, and everyone loves the variety of restaurants available. Highly recommend!',
    restaurant: 'Burger Haven'
  }];
  return <>
      <Hero />
      <section className="container mx-auto px-4 py-8">
        <CategoryFilter categories={cuisineCategories} />
      </section>
      <FeaturedRestaurants />
      <PromoSection />
      <PopularDishes />
      <HowItWorks />
      <div className="relative bg-gradient-to-br from-primary/5 via-orange-50 to-secondary/5 py-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg className="relative block w-full h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#F9F9F9" />
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <motion.div initial={{
            scale: 0
          }} whileInView={{
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            type: 'spring',
            bounce: 0.5
          }} className="inline-flex items-center bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full mb-6 shadow-lg">
              <QuoteIcon size={20} className="text-primary mr-2" />
              <span className="text-sm font-bold text-textDark">
                What Our Customers Say
              </span>
            </motion.div>
            <h2 className="heading-font text-4xl md:text-5xl font-bold text-textDark mb-4">
              Loved by <span className="text-primary">Thousands</span>
            </h2>
            <p className="text-textLight text-lg max-w-2xl mx-auto">
              Real stories from real people who love ordering through FoodControl
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => <motion.div key={testimonial.id} initial={{
            opacity: 0,
            y: 40,
            rotate: -5
          }} whileInView={{
            opacity: 1,
            y: 0,
            rotate: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1,
            type: 'spring',
            bounce: 0.4
          }} whileHover={{
            y: -10,
            rotate: 2
          }} className="relative">
                <div className="bg-white p-4 rounded-lg shadow-xl">
                  <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg p-6 mb-4">
                    <div className="flex items-center mb-4">
                      <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full border-4 border-white shadow-md object-cover" />
                      <div className="ml-4">
                        <h4 className="font-bold text-textDark">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs text-textLight">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => <StarIcon key={i} size={16} className="fill-secondary text-secondary" />)}
                    </div>
                    <p className="text-sm text-textLight leading-relaxed mb-3">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center text-xs text-primary font-semibold">
                      <UtensilsIcon size={14} className="mr-1" />
                      {testimonial.restaurant}
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-textLight italic">
                      - Verified Customer
                    </p>
                  </div>
                </div>
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-secondary/30 rounded-sm rotate-3" />
              </motion.div>)}
          </div>
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="mt-16 flex flex-wrap justify-center gap-8">
            {[{
            icon: '🏆',
            text: 'Award Winning Service'
          }, {
            icon: '✅',
            text: '100% Satisfaction'
          }, {
            icon: '🔒',
            text: 'Secure Payments'
          }, {
            icon: '⚡',
            text: 'Lightning Fast'
          }].map((badge, index) => <motion.div key={index} initial={{
            opacity: 0,
            scale: 0.8
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="flex items-center bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-md">
                <span className="text-2xl mr-3">{badge.icon}</span>
                <span className="text-sm font-semibold text-textDark">
                  {badge.text}
                </span>
              </motion.div>)}
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#F9F9F9" />
          </svg>
        </div>
      </div>
      <div id="contact" className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-12">
            <motion.div initial={{
            scale: 0
          }} whileInView={{
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            type: 'spring',
            bounce: 0.5
          }} className="inline-flex items-center bg-primary/10 px-6 py-3 rounded-full mb-6">
              <ChefHatIcon size={20} className="text-primary mr-2" />
              <span className="text-sm font-bold text-primary">
                We're Here to Help
              </span>
            </motion.div>
            <h2 className="heading-font text-4xl md:text-5xl font-bold text-textDark mb-4">
              Get in <span className="text-primary">Touch</span>
            </h2>
            <p className="text-textLight text-lg max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div initial={{
            opacity: 0,
            x: -40
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="bg-white rounded-3xl shadow-xl p-8 border-2 border-primary/10">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-textDark mb-2">
                    Your Name
                  </label>
                  <input type="text" placeholder="Kirk Doe" className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-textDark mb-2">
                    Email Address
                  </label>
                  <input type="email" placeholder="Kirk@example.com" className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-textDark mb-2">
                    Phone Number
                  </label>
                  <input type="tel" placeholder="+1 (555) 000-0000" className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-textDark mb-2">
                    Message
                  </label>
                  <textarea rows={5} placeholder="Tell us how we can help..." className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl outline-none focus:border-primary transition-colors resize-none" />
                </div>
                <motion.button whileHover={{
                scale: 1.02
              }} whileTap={{
                scale: 0.98
              }} type="submit" className="w-full btn-primary text-lg py-4 flex items-center justify-center gap-2">
                  <SendIcon size={20} />
                  Send Message
                </motion.button>
              </form>
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            x: 40
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} className="space-y-6">
              {[{
              icon: <MapPinIcon size={28} />,
              title: 'Visit Us',
              info: '123 Main Street, Malolos, Bulacan 10001',
              bgColor: 'bg-primary/10',
              iconColor: 'text-primary'
            }, {
              icon: <PhoneIcon size={28} />,
              title: 'Call Us',
              info: '+1 (555) 123-4567',
              bgColor: 'bg-secondary/10',
              iconColor: 'text-secondary'
            }, {
              icon: <MailIcon size={28} />,
              title: 'Email Us',
              info: 'support@FoodControl.com',
              bgColor: 'bg-accent/10',
              iconColor: 'text-accent'
            }].map((item, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1
            }} whileHover={{
              y: -5,
              transition: {
                duration: 0.2
              }
            }} className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100 hover:border-primary/30 hover:shadow-xl transition-all">
                  <div className="flex items-start gap-4">
                    <div className={`${item.bgColor} p-4 rounded-2xl shadow-md`}>
                      <div className={item.iconColor}>
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-textDark mb-1">
                        {item.title}
                      </h3>
                      <p className="text-textLight">{item.info}</p>
                    </div>
                  </div>
                </motion.div>)}
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: 0.3
            }} className="bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
                <h3 className="font-bold text-lg text-textDark mb-4 flex items-center">
                  <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center mr-3">
                    <ClockIcon size={20} className="text-secondary" />
                  </div>
                  Business Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-backgroundAlt p-3 rounded-xl">
                    <span className="text-textLight font-medium">Monday - Friday</span>
                    <span className="font-bold text-primary">
                      9:00 AM - 10:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center bg-backgroundAlt p-3 rounded-xl">
                    <span className="text-textLight font-medium">Saturday</span>
                    <span className="font-bold text-primary">
                      10:00 AM - 11:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center bg-backgroundAlt p-3 rounded-xl">
                    <span className="text-textLight font-medium">Sunday</span>
                    <span className="font-bold text-primary">
                      10:00 AM - 9:00 PM
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>;
};