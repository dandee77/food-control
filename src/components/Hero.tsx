import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { SearchIcon } from 'lucide-react';
export const Hero = () => {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, 0.01, 0.9]
      }
    }
  };
  const foodCategories = [{
    name: 'Pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80'
  }, {
    name: 'Sushi',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80'
  }, {
    name: 'Burger',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80'
  }, {
    name: 'Pasta',
    image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80'
  }, {
    name: 'Dessert',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80'
  }];
  return <div className="relative bg-gradient-to-r from-primaryDark to-primary pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 0.2
      }} transition={{
        duration: 1.5
      }} className="absolute -top-20 -right-20 w-64 h-64 bg-secondary rounded-full blur-3xl" />
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 0.15
      }} transition={{
        duration: 1.5,
        delay: 0.3
      }} className="absolute -bottom-32 -left-20 w-80 h-80 bg-accent rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <motion.h1 variants={itemVariants} className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Delicious Food <br />
              <span className="text-secondary">Delivered To Your Door</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-white/80 text-lg mb-8 max-w-md mx-auto md:mx-0">
              Order from your favorite restaurants with just a few taps and
              enjoy the fastest delivery in town.
            </motion.p>
            <motion.div variants={itemVariants} className="bg-white p-2 rounded-full flex items-center mb-8 max-w-md mx-auto md:mx-0 shadow-lg">
              <div className="flex-1 flex items-center">
                <SearchIcon size={20} className="ml-2 text-gray-400" />
                <input type="text" placeholder="Search for food or restaurant..." className="w-full px-3 py-2 outline-none" />
              </div>
              <button className="btn-primary whitespace-nowrap">
                Find Food
              </button>
            </motion.div>
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center md:justify-start gap-6">
              {foodCategories.map((category, index) => <motion.div key={category.name} whileHover={{
              y: -5
            }} className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white mb-2">
                    <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-white text-sm font-medium">
                    {category.name}
                  </span>
                </motion.div>)}
            </motion.div>
          </div>
          {/* Right Content - Food Images */}
          <div className="w-full md:w-1/2 relative h-[400px] md:h-[500px]">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.6
          }} className="absolute top-0 left-1/2 md:left-1/4 transform -translate-x-1/2 w-64 h-64 z-20">
              <motion.img animate={{
              y: [0, -10, 0]
            }} transition={{
              repeat: Infinity,
              duration: 3,
              ease: 'easeInOut'
            }} src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&h=400&q=80" alt="Pizza" className="w-full h-full object-cover rounded-2xl shadow-xl border-8 border-white" />
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.9
          }} className="absolute top-1/4 left-1/4 md:left-2/3 transform -translate-x-1/2 w-48 h-48 z-10">
              <motion.img animate={{
              y: [0, -10, 0]
            }} transition={{
              repeat: Infinity,
              duration: 3.5,
              ease: 'easeInOut',
              delay: 0.5
            }} src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300&q=80" alt="Burger" className="w-full h-full object-cover rounded-2xl shadow-xl border-8 border-white" />
            </motion.div>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 1.2
          }} className="absolute bottom-0 left-2/3 md:left-1/2 transform -translate-x-1/2 w-56 h-56 z-30">
              <motion.img animate={{
              y: [0, -10, 0]
            }} transition={{
              repeat: Infinity,
              duration: 4,
              ease: 'easeInOut',
              delay: 1
            }} src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=350&h=350&q=80" alt="Pasta" className="w-full h-full object-cover rounded-2xl shadow-xl border-8 border-white" />
            </motion.div>
          </div>
        </motion.div>
        {/* Stats Section */}
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 1.5
      }} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[{
          value: '500+',
          label: 'Restaurants'
        }, {
          value: '25k+',
          label: 'Happy Customers'
        }, {
          value: '15+',
          label: 'Cities'
        }, {
          value: '30min',
          label: 'Avg. Delivery Time'
        }].map((stat, index) => <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {stat.value}
              </h3>
              <p className="text-white/80 text-sm">{stat.label}</p>
            </div>)}
        </motion.div>
      </div>
    </div>;
};