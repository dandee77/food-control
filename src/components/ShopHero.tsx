import React from 'react';
import { motion } from 'framer-motion';
import { SearchIcon, UtensilsIcon } from 'lucide-react';
interface ShopHeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}
export const ShopHero: React.FC<ShopHeroProps> = ({
  searchQuery,
  setSearchQuery
}) => {
  return <div className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 pt-24 pb-16 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent rounded-full blur-2xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} className="text-center">
          {/* Badge */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm">
            <UtensilsIcon size={16} className="text-primary mr-2" />
            <span className="text-sm font-medium text-textDark">
              Fresh Daily Selection
            </span>
          </motion.div>
          {/* Title */}
          <motion.h1 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold text-textDark mb-4">
            Our <span className="text-primary">Menu</span>
          </motion.h1>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="text-textLight text-lg mb-8 max-w-2xl mx-auto">
            Explore our carefully curated selection of dishes from the finest
            restaurants in town
          </motion.p>
          {/* Search Bar */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.5
        }} className="max-w-2xl mx-auto">
            <div className="relative bg-white rounded-2xl shadow-lg p-2 flex items-center">
              <SearchIcon className="ml-4 text-gray-400" size={20} />
              <input type="text" placeholder="Search for dishes, cuisines, or restaurants..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="flex-1 px-4 py-3 outline-none text-textDark" />
              <button className="btn-primary">Search</button>
            </div>
          </motion.div>
          {/* Quick Stats */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.6
        }} className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
            {[{
            label: '500+ Dishes',
            value: 'Available'
          }, {
            label: '50+ Restaurants',
            value: 'Partners'
          }, {
            label: '4.8★',
            value: 'Average Rating'
          }].map((stat, index) => <div key={index} className="flex items-center bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="font-semibold text-primary mr-2">
                  {stat.label}
                </span>
                <span className="text-textLight">{stat.value}</span>
              </div>)}
          </motion.div>
        </motion.div>
      </div>
    </div>;
};