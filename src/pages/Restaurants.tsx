import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { SearchIcon, SlidersHorizontalIcon, MapIcon, GridIcon, ListIcon, StarIcon, ClockIcon, TruckIcon, DollarSignIcon, AwardIcon, TrendingUpIcon } from 'lucide-react';
export const Restaurants = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('popular');
  const [selectedFilters, setSelectedFilters] = useState({
    cuisines: [] as string[],
    priceRange: [0, 4] as [number, number],
    rating: 0,
    distance: 10,
    openNow: false
  });
  const restaurants = [{
    id: 1,
    name: "Tony's Pizzeria",
    banner: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=400&fit=crop',
    profile: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=150&h=150&fit=crop',
    cuisine: 'Italian, Pizza',
    rating: 4.8,
    reviews: 1234,
    priceRange: '$$',
    deliveryTime: '20-30 min',
    deliveryFee: 100,
    distance: '2.3 km',
    sales: '500+ orders',
    isOpen: true,
    featured: true,
    popularDishes: ['Margherita Pizza', 'Pepperoni Pizza', 'Caesar Salad'],
    badges: ['Top Rated', 'Fast Delivery']
  }, {
    id: 2,
    name: 'Sakura Sushi',
    banner: 'https://images.unsplash.com/photo-1579027989536-b7b1f875659b?w=800&h=400&fit=crop',
    profile: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=150&h=150&fit=crop',
    cuisine: 'Japanese, Sushi',
    rating: 4.9,
    reviews: 892,
    priceRange: '$$$',
    deliveryTime: '25-35 min',
    deliveryFee: 150,
    distance: '3.1 km',
    sales: '350+ orders',
    isOpen: true,
    featured: true,
    popularDishes: ['Spicy Tuna Roll', 'California Roll', 'Miso Soup'],
    badges: ['Premium', "Chef's Choice"]
  }, {
    id: 3,
    name: 'Burger Haven',
    banner: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&h=400&fit=crop',
    profile: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=150&h=150&fit=crop',
    cuisine: 'American, Burgers',
    rating: 4.7,
    reviews: 2156,
    priceRange: '$$',
    deliveryTime: '15-25 min',
    deliveryFee: 75,
    distance: '1.8 km',
    sales: '800+ orders',
    isOpen: true,
    featured: true,
    popularDishes: ['Classic Cheeseburger', 'Bacon Burger', 'Fries'],
    badges: ['Most Popular', 'Value Deal']
  }, {
    id: 4,
    name: 'Spice Route',
    banner: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=400&fit=crop',
    profile: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=150&h=150&fit=crop',
    cuisine: 'Indian, Curry',
    rating: 4.8,
    reviews: 678,
    priceRange: '$$',
    deliveryTime: '30-40 min',
    deliveryFee: 125,
    distance: '4.2 km',
    sales: '420+ orders',
    isOpen: true,
    featured: false,
    popularDishes: ['Butter Chicken', 'Tikka Masala', 'Naan'],
    badges: ['Authentic']
  }, {
    id: 5,
    name: 'El Toro Loco',
    banner: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800&h=400&fit=crop',
    profile: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=150&h=150&fit=crop',
    cuisine: 'Mexican, Tacos',
    rating: 4.6,
    reviews: 945,
    priceRange: '$',
    deliveryTime: '20-30 min',
    deliveryFee: 100,
    distance: '2.7 km',
    sales: '650+ orders',
    isOpen: true,
    featured: false,
    popularDishes: ['Beef Tacos', 'Quesadilla', 'Guacamole'],
    badges: ['Budget Friendly']
  }, {
    id: 6,
    name: 'Bangkok Kitchen',
    banner: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800&h=400&fit=crop',
    profile: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=150&h=150&fit=crop',
    cuisine: 'Thai, Asian',
    rating: 4.7,
    reviews: 534,
    priceRange: '$$',
    deliveryTime: '25-35 min',
    deliveryFee: 125,
    distance: '3.5 km',
    sales: '380+ orders',
    isOpen: false,
    featured: false,
    popularDishes: ['Pad Thai', 'Green Curry', 'Tom Food'],
    badges: ['Spicy Options']
  }, {
    id: 7,
    name: 'Green Bowl',
    banner: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=400&fit=crop',
    profile: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=150&h=150&fit=crop',
    cuisine: 'Healthy, Salads',
    rating: 4.5,
    reviews: 423,
    priceRange: '$$',
    deliveryTime: '15-20 min',
    deliveryFee: 100,
    distance: '1.5 km',
    sales: '290+ orders',
    isOpen: true,
    featured: false,
    popularDishes: ['Caesar Salad', 'Buddha Bowl', 'Smoothie'],
    badges: ['Vegan Options', 'Healthy']
  }, {
    id: 8,
    name: 'Sweet Treats',
    banner: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&h=400&fit=crop',
    profile: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=150&h=150&fit=crop',
    cuisine: 'Desserts, Bakery',
    rating: 4.9,
    reviews: 1567,
    priceRange: '$$',
    deliveryTime: '10-15 min',
    deliveryFee: 50,
    distance: '1.2 km',
    sales: '920+ orders',
    isOpen: true,
    featured: true,
    popularDishes: ['Chocolate Cake', 'Cheesecake', 'Macarons'],
    badges: ['Dessert Specialist', 'Quick Delivery']
  }];
  const cuisineFilters = ['Italian', 'Japanese', 'American', 'Indian', 'Mexican', 'Thai', 'Healthy', 'Desserts'];
  return <div className="min-h-screen bg-backgroundAlt">
      <div className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 pt-32 pb-16 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="text-center mb-8">
            <motion.div initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} className="inline-flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm">
              <AwardIcon size={16} className="text-primary mr-2" />
              <span className="text-sm font-medium text-textDark">
                Discover Local Favorites
              </span>
            </motion.div>
            <h1 className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold text-textDark mb-4">
              Our <span className="text-primary">Restaurants</span>
            </h1>
            <p className="text-textLight text-lg mb-8 max-w-2xl mx-auto">
              From family-owned gems to culinary hotspots, explore the best
              dining experiences in your area
            </p>
            {/* Search Bar */}
            <div className="max-w-3xl mx-auto">
              <div className="relative bg-white rounded-2xl shadow-lg p-2 flex items-center">
                <SearchIcon className="ml-4 text-gray-400" size={20} />
                <input type="text" placeholder="Search restaurants, cuisines, or dishes..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="flex-1 px-4 py-3 outline-none text-textDark" />
                <button className="btn-primary">Search</button>
              </div>
            </div>
            {/* Quick Stats */}
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              {[{
              icon: '🍽️',
              label: '50+ Restaurants',
              value: 'Available'
            }, {
              icon: '⭐',
              label: '4.8 Average',
              value: 'Rating'
            }, {
              icon: '🚚',
              label: 'Fast',
              value: 'Delivery'
            }].map((stat, index) => <motion.div key={index} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.2 + index * 0.1
            }} className="flex items-center bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="text-2xl mr-2">{stat.icon}</span>
                  <div className="text-left">
                    <p className="text-xs text-textLight">{stat.value}</p>
                    <p className="text-sm font-semibold text-textDark">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>)}
            </div>
          </motion.div>
        </div>
      </div>
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full whitespace-nowrap font-medium shadow-md">
              <SlidersHorizontalIcon size={16} />
              All Filters
            </button>
            {cuisineFilters.map(cuisine => <button key={cuisine} className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full whitespace-nowrap font-medium transition-colors">
                {cuisine}
              </button>)}
          </div>
        </div>
      </div>
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Toolbar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-textDark mb-1">
              {restaurants.length} Restaurants Found
            </h2>
            <p className="text-sm text-textLight">Delivering to Malolos, Bulacan</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-textLight">View:</span>
              <button onClick={() => setViewMode('grid')} className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-primary text-white' : 'bg-gray-100 text-textLight'}`}>
                <GridIcon size={18} />
              </button>
              <button onClick={() => setViewMode('list')} className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-primary text-white' : 'bg-gray-100 text-textLight'}`}>
                <ListIcon size={18} />
              </button>
            </div>
            <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="px-4 py-2 border border-gray-200 rounded-lg outline-none focus:border-primary transition-colors">
              <option value="popular">Most Popular</option>
              <option value="rating">Highest Rated</option>
              <option value="distance">Nearest First</option>
              <option value="delivery-time">Fastest Delivery</option>
            </select>
          </div>
        </div>
        {/* Featured Section */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <TrendingUpIcon size={24} className="text-primary mr-2" />
            <h3 className="text-2xl font-bold">Featured This Week</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.filter(r => r.featured).map((restaurant, index) => <motion.div key={restaurant.id} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1
          }} onClick={() => navigate(`/restaurant/${restaurant.id}`)} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group">
                  {/* Banner */}
                  <div className="relative h-48 overflow-hidden">
                    <img src={restaurant.banner} alt={restaurant.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    {restaurant.isOpen ? <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Open Now
                      </div> : <div className="absolute top-4 left-4 bg-gray-800 text-white text-xs font-bold px-3 py-1 rounded-full">
                        Closed
                      </div>}
                    {/* Profile Picture Overlay */}
                    <div className="absolute -bottom-8 left-6">
                      <img src={restaurant.profile} alt={restaurant.name} className="w-20 h-20 rounded-2xl border-4 border-white shadow-lg object-cover" />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="pt-12 px-6 pb-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-textDark group-hover:text-primary transition-colors mb-1">
                          {restaurant.name}
                        </h3>
                        <p className="text-sm text-textLight">
                          {restaurant.cuisine}
                        </p>
                      </div>
                      <div className="flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full">
                        <StarIcon size={14} className="fill-primary mr-1" />
                        <span className="text-sm font-bold">
                          {restaurant.rating}
                        </span>
                      </div>
                    </div>
                    {/* Badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {restaurant.badges.map(badge => <span key={badge} className="text-xs bg-secondary/20 text-secondary font-semibold px-3 py-1 rounded-full">
                          {badge}
                        </span>)}
                    </div>
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3 mb-4 pb-4 border-b border-gray-100">
                      <div className="text-center">
                        <ClockIcon size={16} className="mx-auto text-textLight mb-1" />
                        <p className="text-xs text-textLight">
                          {restaurant.deliveryTime}
                        </p>
                      </div>
                      <div className="text-center">
                        <TruckIcon size={16} className="mx-auto text-textLight mb-1" />
                        <p className="text-xs text-textLight">
                          ₱{restaurant.deliveryFee}
                        </p>
                      </div>
                      <div className="text-center">
                        <DollarSignIcon size={16} className="mx-auto text-textLight mb-1" />
                        <p className="text-xs text-textLight">
                          {restaurant.priceRange}
                        </p>
                      </div>
                    </div>
                    {/* Popular Dishes */}
                    <div>
                      <p className="text-xs text-textLight mb-2">Popular:</p>
                      <p className="text-sm font-medium text-textDark line-clamp-1">
                        {restaurant.popularDishes.join(', ')}
                      </p>
                    </div>
                    {/* Footer */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                      <span className="text-xs text-textLight">
                        {restaurant.sales}
                      </span>
                      <span className="text-xs font-medium text-primary">
                        {restaurant.distance} away
                      </span>
                    </div>
                  </div>
                </motion.div>)}
          </div>
        </div>
        {/* All Restaurants */}
        <div>
          <h3 className="text-2xl font-bold mb-6">All Restaurants</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurants.map((restaurant, index) => <motion.div key={restaurant.id} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.05
          }} onClick={() => navigate(`/restaurant/${restaurant.id}`)} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer group">
                {/* Banner */}
                <div className="relative h-40 overflow-hidden">
                  <img src={restaurant.banner} alt={restaurant.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  {restaurant.isOpen ? <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Open
                    </div> : <div className="absolute top-3 left-3 bg-gray-800 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Closed
                    </div>}
                  <div className="absolute -bottom-6 left-4">
                    <img src={restaurant.profile} alt={restaurant.name} className="w-16 h-16 rounded-xl border-4 border-white shadow-lg object-cover" />
                  </div>
                </div>
                <div className="pt-10 px-4 pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-lg text-textDark group-hover:text-primary transition-colors">
                        {restaurant.name}
                      </h3>
                      <p className="text-xs text-textLight">
                        {restaurant.cuisine}
                      </p>
                    </div>
                    <div className="flex items-center bg-primary/10 text-primary px-2 py-1 rounded-full">
                      <StarIcon size={12} className="fill-primary mr-1" />
                      <span className="text-xs font-bold">
                        {restaurant.rating}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-textLight mb-3">
                    <span className="flex items-center">
                      <ClockIcon size={12} className="mr-1" />
                      {restaurant.deliveryTime}
                    </span>
                    <span className="flex items-center">
                      <TruckIcon size={12} className="mr-1" />$
                      {restaurant.deliveryFee}
                    </span>
                    <span>{restaurant.priceRange}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-textLight">{restaurant.sales}</span>
                    <span className="font-medium text-primary">
                      {restaurant.distance}
                    </span>
                  </div>
                </div>
              </motion.div>)}
          </div>
        </div>
      </div>
    </div>;
};