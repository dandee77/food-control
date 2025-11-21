import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { StarIcon, PlusIcon } from 'lucide-react';
interface RelatedItemsProps {
  currentItemId: number;
  category: string;
}
export const RelatedItems: React.FC<RelatedItemsProps> = ({
  currentItemId,
  category
}) => {
  const navigate = useNavigate();
  const relatedItems = [{
    id: 2,
    name: 'Pepperoni Pizza',
    restaurant: "Tony's Pizzeria",
    price: 15.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop'
  }, {
    id: 3,
    name: 'Veggie Supreme',
    restaurant: "Tony's Pizzeria",
    price: 14.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400&h=300&fit=crop'
  }, {
    id: 4,
    name: 'BBQ Chicken Pizza',
    restaurant: "Tony's Pizzeria",
    price: 16.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop'
  }, {
    id: 5,
    name: 'Hawaiian Pizza',
    restaurant: "Tony's Pizzeria",
    price: 14.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=400&h=300&fit=crop'
  }];
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} transition={{
    duration: 0.5
  }}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="heading-font text-3xl font-bold">You Might Also Like</h2>
        <button className="text-primary font-medium hover:text-primaryDark transition-colors">
          View All
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedItems.map((item, index) => <motion.div key={item.id} initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.4,
        delay: index * 0.1
      }} onClick={() => navigate(`/food/${item.id}`)} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group">
            <div className="relative h-40 overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <button className="absolute bottom-3 right-3 bg-white rounded-full p-2 shadow-md hover:bg-primary hover:text-white transition-colors">
                <PlusIcon size={16} />
              </button>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-textDark mb-1 group-hover:text-primary transition-colors">
                {item.name}
              </h3>
              <p className="text-sm text-textLight mb-3">{item.restaurant}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-primary">
                  ${item.price}
                </span>
                <div className="flex items-center">
                  <StarIcon size={14} className="fill-secondary text-secondary mr-1" />
                  <span className="text-sm font-medium">{item.rating}</span>
                </div>
              </div>
            </div>
          </motion.div>)}
      </div>
    </motion.div>;
};