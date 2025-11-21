import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Star, Clock, Tag } from 'lucide-react';
interface RestaurantCardProps {
  restaurant: {
    id: number;
    name: string;
    image: string;
    cuisine: string;
    rating: number;
    deliveryTime: string;
    deliveryFee: string;
    promoCode?: string;
  };
  index: number;
}
export const RestaurantCard: React.FC<RestaurantCardProps> = ({
  restaurant,
  index
}) => {
  const navigate = useNavigate();
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.5,
    delay: index * 0.1
  }} whileHover={{
    y: -8,
    transition: {
      duration: 0.2
    }
  }} onClick={() => navigate(`/restaurant/${restaurant.id}`)} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
      <div className="relative h-48">
        <img src={restaurant.image} alt={restaurant.name} className="w-full h-full object-cover" />
        {restaurant.promoCode && <div className="absolute top-4 right-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
            <Tag size={12} className="mr-1" />
            {restaurant.promoCode}
          </div>}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold text-lg">{restaurant.name}</h3>
          <div className="flex items-center bg-primary/10 text-primary px-2 py-1 rounded-full">
            <Star size={14} className="fill-primary" />
            <span className="ml-1 text-sm font-medium">
              {restaurant.rating}
            </span>
          </div>
        </div>
        <p className="text-textLight text-sm mb-3">{restaurant.cuisine}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-textLight">
            <Clock size={14} />
            <span className="ml-1 text-xs">{restaurant.deliveryTime}</span>
          </div>
          <span className="text-xs font-medium">
            {restaurant.deliveryFee} delivery
          </span>
        </div>
      </div>
    </motion.div>;
};