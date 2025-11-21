import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShopHero } from '../components/ShopHero';
import { FilterSidebar } from '../components/FilterSidebar';
import { FoodGrid } from '../components/FoodGrid';
export const Shop = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    categories: [] as string[],
    priceRange: [0, 50] as [number, number],
    dietary: [] as string[],
    rating: 0,
    sortBy: 'popular'
  });
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return <div className="min-h-screen bg-backgroundAlt">
      <ShopHero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5
        }} className={`lg:w-80 ${sidebarOpen ? 'block' : 'hidden lg:block'}`}>
            <FilterSidebar selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
          </motion.div>
          {/* Main Content */}
          <div className="flex-1">
            <FoodGrid searchQuery={searchQuery} filters={selectedFilters} sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          </div>
        </div>
      </div>
    </div>;
};