import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, ChevronUpIcon, PlusIcon } from 'lucide-react';
export const FoodCustomization = () => {
  const [expandedSections, setExpandedSections] = useState({
    size: true,
    extras: false,
    drinks: false,
    instructions: false
  });
  const [selectedSize, setSelectedSize] = useState('medium');
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [selectedDrink, setSelectedDrink] = useState<string | null>(null);
  const [specialInstructions, setSpecialInstructions] = useState('');
  const sizes = [{
    id: 'small',
    name: 'Small (10")',
    price: 0
  }, {
    id: 'medium',
    name: 'Medium (12")',
    price: 0
  }, {
    id: 'large',
    name: 'Large (14")',
    price: 150
  }];
  const extras = [{
    id: 'extra-cheese',
    name: 'Extra Cheese',
    price: 125,
    icon: '🧀'
  }, {
    id: 'mushrooms',
    name: 'Mushrooms',
    price: 75,
    icon: '🍄'
  }, {
    id: 'olives',
    name: 'Olives',
    price: 75,
    icon: '🫒'
  }, {
    id: 'peppers',
    name: 'Bell Peppers',
    price: 75,
    icon: '🫑'
  }, {
    id: 'onions',
    name: 'Onions',
    price: 50,
    icon: '🧅'
  }, {
    id: 'garlic',
    name: 'Extra Garlic',
    price: 50,
    icon: '🧄'
  }];
  const drinks = [{
    id: 'coke',
    name: 'Coca-Cola',
    price: 125,
    icon: '🥤'
  }, {
    id: 'sprite',
    name: 'Sprite',
    price: 125,
    icon: '🥤'
  }, {
    id: 'water',
    name: 'Bottled Water',
    price: 75,
    icon: '💧'
  }, {
    id: 'juice',
    name: 'Orange Juice',
    price: 150,
    icon: '🧃'
  }];
  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev]
    }));
  };
  const toggleExtra = (extraId: string) => {
    setSelectedExtras(prev => prev.includes(extraId) ? prev.filter(id => id !== extraId) : [...prev, extraId]);
  };
  return <div className="bg-white rounded-3xl shadow-md overflow-hidden">
      {/* Size Selection */}
      <div className="border-b border-gray-100">
        <button onClick={() => toggleSection('size')} className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors">
          <div className="flex items-center">
            <span className="text-2xl mr-3">📏</span>
            <h3 className="font-bold text-lg">Choose Size</h3>
          </div>
          {expandedSections.size ? <ChevronUpIcon size={20} className="text-gray-400" /> : <ChevronDownIcon size={20} className="text-gray-400" />}
        </button>
        <AnimatePresence>
          {expandedSections.size && <motion.div initial={{
          height: 0,
          opacity: 0
        }} animate={{
          height: 'auto',
          opacity: 1
        }} exit={{
          height: 0,
          opacity: 0
        }} transition={{
          duration: 0.3
        }} className="overflow-hidden">
              <div className="px-6 pb-6 space-y-3">
                {sizes.map(size => <button key={size.id} onClick={() => setSelectedSize(size.id)} className={`w-full flex items-center justify-between p-4 rounded-xl transition-all ${selectedSize === size.id ? 'bg-primary text-white shadow-md' : 'bg-gray-50 text-textDark hover:bg-gray-100'}`}>
                    <span className="font-medium">{size.name}</span>
                    <span className="font-bold">
                      {size.price === 0 ? 'Included' : `+₱${size.price}`}
                    </span>
                  </button>)}
              </div>
            </motion.div>}
        </AnimatePresence>
      </div>
      {/* Extras */}
      <div className="border-b border-gray-100">
        <button onClick={() => toggleSection('extras')} className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors">
          <div className="flex items-center">
            <span className="text-2xl mr-3">🍕</span>
            <div className="text-left">
              <h3 className="font-bold text-lg">Add Extras</h3>
              {selectedExtras.length > 0 && <p className="text-sm text-textLight">
                  {selectedExtras.length} selected
                </p>}
            </div>
          </div>
          {expandedSections.extras ? <ChevronUpIcon size={20} className="text-gray-400" /> : <ChevronDownIcon size={20} className="text-gray-400" />}
        </button>
        <AnimatePresence>
          {expandedSections.extras && <motion.div initial={{
          height: 0,
          opacity: 0
        }} animate={{
          height: 'auto',
          opacity: 1
        }} exit={{
          height: 0,
          opacity: 0
        }} transition={{
          duration: 0.3
        }} className="overflow-hidden">
              <div className="px-6 pb-6 grid grid-cols-2 gap-3">
                {extras.map(extra => <button key={extra.id} onClick={() => toggleExtra(extra.id)} className={`flex flex-col items-center p-4 rounded-xl transition-all ${selectedExtras.includes(extra.id) ? 'bg-primary text-white shadow-md' : 'bg-gray-50 text-textDark hover:bg-gray-100'}`}>
                    <span className="text-3xl mb-2">{extra.icon}</span>
                    <span className="font-medium text-sm text-center mb-1">
                      {extra.name}
                    </span>
                    <span className="text-xs font-bold">
                      +₱{extra.price}
                    </span>
                  </button>)}
              </div>
            </motion.div>}
        </AnimatePresence>
      </div>
      {/* Drinks */}
      <div className="border-b border-gray-100">
        <button onClick={() => toggleSection('drinks')} className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors">
          <div className="flex items-center">
            <span className="text-2xl mr-3">🥤</span>
            <div className="text-left">
              <h3 className="font-bold text-lg">Add a Drink</h3>
              {selectedDrink && <p className="text-sm text-textLight">
                  {drinks.find(d => d.id === selectedDrink)?.name}
                </p>}
            </div>
          </div>
          {expandedSections.drinks ? <ChevronUpIcon size={20} className="text-gray-400" /> : <ChevronDownIcon size={20} className="text-gray-400" />}
        </button>
        <AnimatePresence>
          {expandedSections.drinks && <motion.div initial={{
          height: 0,
          opacity: 0
        }} animate={{
          height: 'auto',
          opacity: 1
        }} exit={{
          height: 0,
          opacity: 0
        }} transition={{
          duration: 0.3
        }} className="overflow-hidden">
              <div className="px-6 pb-6 space-y-3">
                {drinks.map(drink => <button key={drink.id} onClick={() => setSelectedDrink(drink.id === selectedDrink ? null : drink.id)} className={`w-full flex items-center justify-between p-4 rounded-xl transition-all ${selectedDrink === drink.id ? 'bg-primary text-white shadow-md' : 'bg-gray-50 text-textDark hover:bg-gray-100'}`}>
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{drink.icon}</span>
                      <span className="font-medium">{drink.name}</span>
                    </div>
                    <span className="font-bold">
                      +₱{drink.price}
                    </span>
                  </button>)}
              </div>
            </motion.div>}
        </AnimatePresence>
      </div>
      {/* Special Instructions */}
      <div>
        <button onClick={() => toggleSection('instructions')} className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors">
          <div className="flex items-center">
            <span className="text-2xl mr-3">📝</span>
            <h3 className="font-bold text-lg">Special Instructions</h3>
          </div>
          {expandedSections.instructions ? <ChevronUpIcon size={20} className="text-gray-400" /> : <ChevronDownIcon size={20} className="text-gray-400" />}
        </button>
        <AnimatePresence>
          {expandedSections.instructions && <motion.div initial={{
          height: 0,
          opacity: 0
        }} animate={{
          height: 'auto',
          opacity: 1
        }} exit={{
          height: 0,
          opacity: 0
        }} transition={{
          duration: 0.3
        }} className="overflow-hidden">
              <div className="px-6 pb-6">
                <textarea value={specialInstructions} onChange={e => setSpecialInstructions(e.target.value)} placeholder="Any special requests? Let us know here..." className="w-full p-4 border-2 border-gray-200 rounded-xl outline-none focus:border-primary transition-colors resize-none" rows={4} />
              </div>
            </motion.div>}
        </AnimatePresence>
      </div>
    </div>;
};