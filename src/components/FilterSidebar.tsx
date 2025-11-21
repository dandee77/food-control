import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SlidersHorizontalIcon, XIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
interface FilterSidebarProps {
  selectedFilters: {
    categories: string[];
    priceRange: [number, number];
    dietary: string[];
    rating: number;
    sortBy: string;
  };
  setSelectedFilters: (filters: any) => void;
}
export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  selectedFilters,
  setSelectedFilters
}) => {
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    price: true,
    dietary: true,
    rating: true
  });
  const categories = [{
    name: 'Pizza',
    count: 45
  }, {
    name: 'Burgers',
    count: 38
  }, {
    name: 'Sushi',
    count: 29
  }, {
    name: 'Pasta',
    count: 34
  }, {
    name: 'Salads',
    count: 27
  }, {
    name: 'Desserts',
    count: 41
  }, {
    name: 'Asian',
    count: 52
  }, {
    name: 'Mexican',
    count: 31
  }, {
    name: 'Indian',
    count: 28
  }, {
    name: 'Mediterranean',
    count: 24
  }];
  const dietaryOptions = [{
    name: 'Vegetarian',
    icon: '🥗'
  }, {
    name: 'Vegan',
    icon: '🌱'
  }, {
    name: 'Gluten-Free',
    icon: '🌾'
  }, {
    name: 'Dairy-Free',
    icon: '🥛'
  }, {
    name: 'Keto',
    icon: '🥑'
  }, {
    name: 'Halal',
    icon: '🕌'
  }];
  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev]
    }));
  };
  const toggleCategory = (category: string) => {
    const newCategories = selectedFilters.categories.includes(category) ? selectedFilters.categories.filter(c => c !== category) : [...selectedFilters.categories, category];
    setSelectedFilters({
      ...selectedFilters,
      categories: newCategories
    });
  };
  const toggleDietary = (dietary: string) => {
    const newDietary = selectedFilters.dietary.includes(dietary) ? selectedFilters.dietary.filter(d => d !== dietary) : [...selectedFilters.dietary, dietary];
    setSelectedFilters({
      ...selectedFilters,
      dietary: newDietary
    });
  };
  const clearAllFilters = () => {
    setSelectedFilters({
      categories: [],
      priceRange: [0, 50],
      dietary: [],
      rating: 0,
      sortBy: 'popular'
    });
  };
  const hasActiveFilters = selectedFilters.categories.length > 0 || selectedFilters.dietary.length > 0 || selectedFilters.rating > 0;
  return <div className="bg-white rounded-2xl shadow-md p-6 sticky top-24">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <SlidersHorizontalIcon size={20} className="text-primary mr-2" />
          <h2 className="font-bold text-lg">Filters</h2>
        </div>
        {hasActiveFilters && <button onClick={clearAllFilters} className="text-sm text-primary hover:text-primaryDark transition-colors">
            Clear All
          </button>}
      </div>
      {/* Categories */}
      <div className="mb-6">
        <button onClick={() => toggleSection('categories')} className="flex items-center justify-between w-full mb-3">
          <h3 className="font-semibold text-textDark">Categories</h3>
          {expandedSections.categories ? <ChevronUpIcon size={18} className="text-gray-400" /> : <ChevronDownIcon size={18} className="text-gray-400" />}
        </button>
        {expandedSections.categories && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="space-y-2 max-h-64 overflow-y-auto">
            {categories.map(category => <label key={category.name} className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors">
                <div className="flex items-center">
                  <input type="checkbox" checked={selectedFilters.categories.includes(category.name)} onChange={() => toggleCategory(category.name)} className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary" />
                  <span className="ml-3 text-sm text-textDark">
                    {category.name}
                  </span>
                </div>
                <span className="text-xs text-textLight">
                  ({category.count})
                </span>
              </label>)}
          </motion.div>}
      </div>
      <div className="border-t border-gray-100 my-6" />
      {/* Price Range */}
      <div className="mb-6">
        <button onClick={() => toggleSection('price')} className="flex items-center justify-between w-full mb-3">
          <h3 className="font-semibold text-textDark">Price Range</h3>
          {expandedSections.price ? <ChevronUpIcon size={18} className="text-gray-400" /> : <ChevronDownIcon size={18} className="text-gray-400" />}
        </button>
        {expandedSections.price && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }}>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-textLight">
                ${selectedFilters.priceRange[0]}
              </span>
              <span className="text-sm text-textLight">
                ${selectedFilters.priceRange[1]}+
              </span>
            </div>
            <input type="range" min="0" max="50" value={selectedFilters.priceRange[1]} onChange={e => setSelectedFilters({
          ...selectedFilters,
          priceRange: [0, parseInt(e.target.value)]
        })} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary" />
            <div className="grid grid-cols-3 gap-2 mt-3">
              {['$', '$$', '$$$'].map((price, index) => <button key={price} onClick={() => setSelectedFilters({
            ...selectedFilters,
            priceRange: [0, (index + 1) * 15]
          })} className={`py-2 rounded-lg text-sm font-medium transition-colors ${selectedFilters.priceRange[1] <= (index + 1) * 15 ? 'bg-primary text-white' : 'bg-gray-100 text-textLight hover:bg-gray-200'}`}>
                  {price}
                </button>)}
            </div>
          </motion.div>}
      </div>
      <div className="border-t border-gray-100 my-6" />
      {/* Dietary Preferences */}
      <div className="mb-6">
        <button onClick={() => toggleSection('dietary')} className="flex items-center justify-between w-full mb-3">
          <h3 className="font-semibold text-textDark">Dietary Preferences</h3>
          {expandedSections.dietary ? <ChevronUpIcon size={18} className="text-gray-400" /> : <ChevronDownIcon size={18} className="text-gray-400" />}
        </button>
        {expandedSections.dietary && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="grid grid-cols-2 gap-2">
            {dietaryOptions.map(option => <button key={option.name} onClick={() => toggleDietary(option.name)} className={`p-3 rounded-xl text-sm font-medium transition-all ${selectedFilters.dietary.includes(option.name) ? 'bg-primary text-white shadow-md' : 'bg-gray-50 text-textDark hover:bg-gray-100'}`}>
                <span className="text-lg mb-1 block">{option.icon}</span>
                {option.name}
              </button>)}
          </motion.div>}
      </div>
      <div className="border-t border-gray-100 my-6" />
      {/* Rating */}
      <div>
        <button onClick={() => toggleSection('rating')} className="flex items-center justify-between w-full mb-3">
          <h3 className="font-semibold text-textDark">Minimum Rating</h3>
          {expandedSections.rating ? <ChevronUpIcon size={18} className="text-gray-400" /> : <ChevronDownIcon size={18} className="text-gray-400" />}
        </button>
        {expandedSections.rating && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="space-y-2">
            {[4.5, 4.0, 3.5, 3.0].map(rating => <button key={rating} onClick={() => setSelectedFilters({
          ...selectedFilters,
          rating
        })} className={`w-full p-3 rounded-lg text-left transition-colors ${selectedFilters.rating === rating ? 'bg-primary text-white' : 'bg-gray-50 text-textDark hover:bg-gray-100'}`}>
                <div className="flex items-center">
                  <span className="font-medium">{rating}</span>
                  <span className="ml-2 text-secondary">★</span>
                  <span className="ml-1 text-sm opacity-80">& above</span>
                </div>
              </button>)}
          </motion.div>}
      </div>
    </div>;
};