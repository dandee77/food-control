import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { GridIcon, ListIcon, SlidersHorizontalIcon, StarIcon, HeartIcon, ShoppingBagIcon, ClockIcon } from 'lucide-react';
interface FoodGridProps {
  searchQuery: string;
  filters: any;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}
export const FoodGrid: React.FC<FoodGridProps> = ({
  searchQuery,
  filters,
  sidebarOpen,
  setSidebarOpen
}) => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('popular');
  const foodItems = [{
    id: 1,
    name: 'Margherita Pizza',
    restaurant: "Tony's Pizzeria",
    price: 750,
    rating: 4.8,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop',
    category: 'Pizza',
    prepTime: '20-25 min',
    dietary: ['Vegetarian'],
    isPopular: true,
    description: 'Classic Italian pizza with fresh mozzarella, tomato sauce, and basil'
  }, {
    id: 2,
    name: 'Spicy Tuna Roll',
    restaurant: 'Sakura Sushi',
    price: 825,
    rating: 4.9,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
    category: 'Sushi',
    prepTime: '15-20 min',
    dietary: ['Gluten-Free'],
    isPopular: true,
    description: 'Fresh tuna with spicy mayo, cucumber, and avocado'
  }, {
    id: 3,
    name: 'Classic Cheeseburger',
    restaurant: 'Burger Haven',
    price: 650,
    rating: 4.7,
    reviews: 456,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
    category: 'Burgers',
    prepTime: '15-20 min',
    dietary: [],
    isPopular: true,
    description: 'Juicy beef patty with cheddar, lettuce, tomato, and special sauce'
  }, {
    id: 4,
    name: 'Chicken Alfredo',
    restaurant: 'Pasta Paradise',
    price: 800,
    rating: 4.6,
    reviews: 178,
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=400&h=300&fit=crop',
    category: 'Pasta',
    prepTime: '25-30 min',
    dietary: [],
    isPopular: false,
    description: 'Creamy alfredo sauce with grilled chicken and fettuccine'
  }, {
    id: 5,
    name: 'Caesar Salad',
    restaurant: 'Green Bowl',
    price: 550,
    rating: 4.5,
    reviews: 123,
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop',
    category: 'Salads',
    prepTime: '10-15 min',
    dietary: ['Vegetarian'],
    isPopular: false,
    description: 'Crisp romaine lettuce with parmesan, croutons, and caesar dressing'
  }, {
    id: 6,
    name: 'Chocolate Lava Cake',
    restaurant: 'Sweet Treats',
    price: 450,
    rating: 4.9,
    reviews: 567,
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=400&h=300&fit=crop',
    category: 'Desserts',
    prepTime: '10-12 min',
    dietary: ['Vegetarian'],
    isPopular: true,
    description: 'Warm chocolate cake with molten center, served with vanilla ice cream'
  }, {
    id: 7,
    name: 'Pad Thai',
    restaurant: 'Bangkok Kitchen',
    price: 700,
    rating: 4.7,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=400&h=300&fit=crop',
    category: 'Asian',
    prepTime: '20-25 min',
    dietary: ['Vegan'],
    isPopular: false,
    description: 'Stir-fried rice noodles with tofu, peanuts, and tamarind sauce'
  }, {
    id: 8,
    name: 'Beef Tacos',
    restaurant: 'El Toro Loco',
    price: 600,
    rating: 4.6,
    reviews: 298,
    image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=300&fit=crop',
    category: 'Mexican',
    prepTime: '15-18 min',
    dietary: [],
    isPopular: false,
    description: 'Seasoned beef with fresh salsa, cheese, and cilantro in corn tortillas'
  }, {
    id: 9,
    name: 'Butter Chicken',
    restaurant: 'Spice Route',
    price: 750,
    rating: 4.8,
    reviews: 412,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=300&fit=crop',
    category: 'Indian',
    prepTime: '25-30 min',
    dietary: ['Halal'],
    isPopular: true,
    description: 'Tender chicken in rich tomato cream sauce with aromatic spices'
  }, {
    id: 10,
    name: 'Greek Gyro',
    restaurant: 'Athens Grill',
    price: 625,
    rating: 4.7,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&h=300&fit=crop',
    category: 'Mediterranean',
    prepTime: '15-20 min',
    dietary: ['Halal'],
    isPopular: false,
    description: 'Grilled lamb with tzatziki, tomatoes, and onions in pita bread'
  }, {
    id: 11,
    name: 'Pepperoni Pizza',
    restaurant: "Tony's Pizzeria",
    price: 800,
    rating: 4.8,
    reviews: 345,
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop',
    category: 'Pizza',
    prepTime: '20-25 min',
    dietary: [],
    isPopular: true,
    description: 'Classic pepperoni with mozzarella and tomato sauce'
  }, {
    id: 12,
    name: 'Vegan Buddha Bowl',
    restaurant: 'Green Bowl',
    price: 700,
    rating: 4.6,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
    category: 'Salads',
    prepTime: '15-18 min',
    dietary: ['Vegan', 'Gluten-Free'],
    isPopular: false,
    description: 'Quinoa, roasted vegetables, chickpeas, and tahini dressing'
  }];
  return <div>
      {/* Toolbar */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden btn-secondary flex items-center">
              <SlidersHorizontalIcon size={18} className="mr-2" />
              Filters
            </button>
            <div className="flex items-center gap-2">
              <span className="text-sm text-textLight">View:</span>
              <button onClick={() => setViewMode('grid')} className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-primary text-white' : 'bg-gray-100 text-textLight'}`}>
                <GridIcon size={18} />
              </button>
              <button onClick={() => setViewMode('list')} className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-primary text-white' : 'bg-gray-100 text-textLight'}`}>
                <ListIcon size={18} />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-textLight">Sort by:</span>
            <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="px-4 py-2 border border-gray-200 rounded-lg outline-none focus:border-primary transition-colors">
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="time">Fastest Delivery</option>
            </select>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p className="text-sm text-textLight">
            Showing{' '}
            <span className="font-semibold text-textDark">
              {foodItems.length}
            </span>{' '}
            dishes
          </p>
        </div>
      </div>
      {/* Food Grid */}
      <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' : 'space-y-4'}>
        {foodItems.map((item, index) => <motion.div key={item.id} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.4,
        delay: index * 0.05
      }} onClick={() => navigate(`/food/${item.id}`)} className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer ${viewMode === 'list' ? 'flex' : ''}`}>
            {/* Image */}
            <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-48' : 'h-48'}`}>
              <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              {item.isPopular && <div className="absolute top-3 left-3 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full">
                  Popular
                </div>}
              <button onClick={e => {
            e.stopPropagation();
          }} className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                <HeartIcon size={18} className="text-primary" />
              </button>
            </div>
            {/* Content */}
            <div className="p-4 flex-1">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-bold text-lg text-textDark group-hover:text-primary transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-textLight">{item.restaurant}</p>
                </div>
                <div className="flex items-center bg-primary/10 text-primary px-2 py-1 rounded-full">
                  <StarIcon size={14} className="fill-primary mr-1" />
                  <span className="text-sm font-semibold">{item.rating}</span>
                </div>
              </div>
              <p className="text-sm text-textLight mb-3 line-clamp-2">
                {item.description}
              </p>
              {/* Dietary Tags */}
              {item.dietary.length > 0 && <div className="flex flex-wrap gap-2 mb-3">
                  {item.dietary.map(diet => <span key={diet} className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full">
                      {diet}
                    </span>)}
                </div>}
              {/* Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div className="flex items-center text-textLight text-sm">
                  <ClockIcon size={14} className="mr-1" />
                  <span>{item.prepTime}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xl font-bold text-primary">
                    ₱{item.price}
                  </span>
                  <button onClick={e => {
                e.stopPropagation();
              }} className="bg-primary text-white p-2 rounded-full hover:bg-primaryDark transition-colors">
                    <ShoppingBagIcon size={18} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>)}
      </div>
      {/* Load More */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 0.5
    }} className="mt-12 text-center">
        <button className="btn-secondary">Load More Dishes</button>
      </motion.div>
    </div>;
};