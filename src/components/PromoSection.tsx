import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from 'lucide-react';
export const PromoSection = () => {
  const promos = [{
    id: 1,
    title: '50% OFF Your First Order',
    description: 'Use code WELCOME50 at checkout',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=300&q=80',
    color: 'from-primary to-primaryDark'
  }, {
    id: 2,
    title: 'Free Delivery All Weekend',
    description: 'Order over ₱750 and pay no delivery fee',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=300&q=80',
    color: 'from-secondary to-amber-500'
  }, {
    id: 3,
    title: 'Buy 1 Get 1 Free',
    description: 'On selected restaurants every Tuesday',
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=300&q=80',
    color: 'from-accent to-teal-500'
  }];
  return <section id="deals" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="heading-font text-3xl font-bold">
            Hot Deals & Offers
          </h2>
          <button className="flex items-center text-primary font-medium hover:underline">
            <span>View All</span>
            <ArrowRightIcon size={18} className="ml-1" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {promos.map((promo, index) => <motion.div key={promo.id} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} whileHover={{
          y: -5,
          transition: {
            duration: 0.2
          }
        }} className="rounded-xl overflow-hidden shadow-lg h-64 relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${promo.color} opacity-90 z-10`}></div>
              <img src={promo.image} alt={promo.title} className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
                    {promo.title}
                  </h3>
                  <p className="text-white/80 text-sm">{promo.description}</p>
                </div>
                <button className="bg-white text-primary font-medium px-5 py-2 rounded-full w-fit hover:bg-gray-100 transition-colors">
                  Order Now
                </button>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};