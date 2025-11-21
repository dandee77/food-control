import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon, ArrowLeftIcon, ArrowRightCircleIcon } from 'lucide-react';
import { FoodCard } from './FoodCard';
export const PopularDishes = () => {
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);
  const foods = [{
    id: 1,
    name: 'Classic Cheeseburger',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80',
    restaurant: 'Burger Palace',
    price: '$8.99',
    rating: 4.8,
    isPopular: true
  }, {
    id: 2,
    name: 'Margherita Pizza',
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80',
    restaurant: 'Pizza Express',
    price: '$12.99',
    rating: 4.7,
    isPopular: true
  }, {
    id: 3,
    name: 'California Roll',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80',
    restaurant: 'Sushi Master',
    price: '$9.99',
    rating: 4.9
  }, {
    id: 4,
    name: 'Chicken Burrito',
    image: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80',
    restaurant: 'Taco Fiesta',
    price: '$7.99',
    rating: 4.6,
    isPopular: true
  }, {
    id: 5,
    name: 'Pad Thai',
    image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80',
    restaurant: 'Noodle House',
    price: '$10.99',
    rating: 4.5
  }, {
    id: 6,
    name: 'Caesar Salad',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80',
    restaurant: 'Salad Bar',
    price: '$6.99',
    rating: 4.7
  }, {
    id: 7,
    name: 'Steak Frites',
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80',
    restaurant: 'Bistro Grill',
    price: '$18.99',
    rating: 4.8
  }, {
    id: 8,
    name: 'Chocolate Cake',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&h=300&q=80',
    restaurant: 'Sweet Treats',
    price: '$5.99',
    rating: 4.9,
    isPopular: true
  }];
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const {
        current
      } = scrollRef;
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  return <section className="section-padding bg-backgroundAlt">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="heading-font text-3xl font-bold">Popular Dishes</h2>
          <div className="flex items-center space-x-3">
            <button onClick={() => navigate('/shop')} className="flex items-center text-primary font-medium hover:underline">
              <span>View All</span>
              <ArrowRightIcon size={18} className="ml-1" />
            </button>
            <button onClick={() => scroll('left')} className="p-2 rounded-full bg-white border border-gray-200 text-primary hover:bg-primary hover:text-white transition-colors">
              <ArrowLeftIcon size={18} />
            </button>
            <button onClick={() => scroll('right')} className="p-2 rounded-full bg-white border border-gray-200 text-primary hover:bg-primary hover:text-white transition-colors">
              <ArrowRightIcon size={18} />
            </button>
          </div>
        </div>
        <div ref={scrollRef} className="flex overflow-x-auto scrollbar-hide space-x-4 pb-4 -mx-2 px-2" style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}>
          {foods.map((food, index) => <div key={food.id} className="min-w-[240px] max-w-[240px]">
              <FoodCard food={food} index={index} />
            </div>)}
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
        delay: 0.2
      }} className="mt-10 bg-white p-6 rounded-2xl shadow-lg flex flex-col md:flex-row items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">
              Hungry? We got you covered
            </h3>
            <p className="text-textLight">
              Download our mobile app for faster ordering and exclusive deals
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex items-center">
            <button className="btn-primary flex items-center">
              <span>Get the App</span>
              <ArrowRightCircleIcon size={18} className="ml-2" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>;
};