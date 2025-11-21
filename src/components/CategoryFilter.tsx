import React, { useState } from 'react';
import { motion } from 'framer-motion';
interface CategoryFilterProps {
  categories: string[];
}
export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories
}) => {
  const [activeCategory, setActiveCategory] = useState('All');
  return <div className="overflow-x-auto pb-4">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5
    }} className="flex space-x-3">
        {['All', ...categories].map((category, index) => <button key={category} onClick={() => setActiveCategory(category)} className={`px-5 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${activeCategory === category ? 'bg-primary text-white' : 'bg-gray-100 text-textLight hover:bg-gray-200'}`}>
            {category}
          </button>)}
      </motion.div>
    </div>;
};