import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { PlusIcon, Star } from 'lucide-react';
interface FoodCardProps {
  food: {
    id: number;
    name: string;
    image: string;
    restaurant: string;
    price: string;
    rating: number;
    isPopular?: boolean;
  };
  index: number;
}
export const FoodCard: React.FC<FoodCardProps> = ({
  food,
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
    y: -5,
    transition: {
      duration: 0.2
    }
  }} onClick={() => navigate(`/food/${food.id}`)} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer">
      <div className="relative h-40">
        <img src={food.image} alt={food.name} className="w-full h-full object-cover" />
        {food.isPopular && <div className="absolute top-3 left-3 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full">
            Popular
          </div>}
        <button onClick={e => {
        e.stopPropagation();
      }} className="absolute bottom-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-primary hover:text-white transition-colors duration-300">
          <PlusIcon size={16} />
        </button>
      </div>
      <div className="p-3">
        <h3 className="font-medium text-base mb-1">{food.name}</h3>
        <p className="text-textLight text-xs mb-2">{food.restaurant}</p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-primary">{food.price}</span>
          <div className="flex items-center">
            <Star size={14} className="fill-secondary text-secondary" />
            <span className="ml-1 text-xs font-medium">{food.rating}</span>
          </div>
        </div>
      </div>
    </motion.div>;
};