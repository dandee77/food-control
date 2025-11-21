import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { StarIcon, ClockIcon, MapPinIcon, PhoneIcon, GlobeIcon, HeartIcon, ShareIcon, MessageCircleIcon, TruckIcon, DollarSignIcon, AwardIcon, InfoIcon, ImageIcon, UtensilsIcon, ThumbsUpIcon, ChevronDownIcon, MapIcon } from 'lucide-react';
import { ChatSidebar } from '../components/ChatSidebar';
export const RestaurantDetail = () => {
  const {
    id
  } = useParams();
  const [activeTab, setActiveTab] = useState('menu');
  const [chatOpen, setChatOpen] = useState(false);
  const restaurant = {
    id: 1,
    name: "Tony's Pizzeria",
    banner: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&h=400&fit=crop',
    profile: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200&h=200&fit=crop',
    cuisine: 'Italian, Pizza',
    rating: 4.8,
    reviews: 1234,
    priceRange: '$$',
    deliveryTime: '20-30 min',
    deliveryFee: 100,
    distance: '2.3 km',
    isOpen: true,
    openingHours: {
      monday: '11:00 AM - 10:00 PM',
      tuesday: '11:00 AM - 10:00 PM',
      wednesday: '11:00 AM - 10:00 PM',
      thursday: '11:00 AM - 10:00 PM',
      friday: '11:00 AM - 11:00 PM',
      saturday: '11:00 AM - 11:00 PM',
      sunday: '12:00 PM - 9:00 PM'
    },
    address: '123 Main Street, Malolos, Bulacan 10001',
    phone: '+1 (555) 123-4567',
    website: 'www.tonyspizzeria.com',
    description: 'Family-owned Italian pizzeria serving authentic Neapolitan-style pizza since 1985. We use only the finest imported ingredients and traditional wood-fired ovens to create the perfect pizza every time.',
    badges: ['Top Rated', 'Fast Delivery', 'Family Owned'],
    photos: ['https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop', 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop', 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400&h=300&fit=crop']
  };
  const menuCategories = [{
    name: 'Popular',
    items: [{
      id: 1,
      name: 'Margherita Pizza',
      description: 'Classic Italian pizza with fresh mozzarella, tomato sauce, and basil',
      price: 750,
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=200&h=200&fit=crop',
      isPopular: true,
      rating: 4.9
    }, {
      id: 2,
      name: 'Pepperoni Pizza',
      description: 'Traditional pepperoni with mozzarella and tomato sauce',
      price: 800,
      image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=200&h=200&fit=crop',
      isPopular: true,
      rating: 4.8
    }]
  }, {
    name: 'Pizza',
    items: [{
      id: 3,
      name: 'BBQ Chicken Pizza',
      description: 'Grilled chicken, BBQ sauce, red onions, and cilantro',
      price: 850,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=200&h=200&fit=crop',
      rating: 4.7
    }, {
      id: 4,
      name: 'Veggie Supreme',
      description: 'Bell peppers, mushrooms, onions, olives, and tomatoes',
      price: 750,
      image: 'https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=200&h=200&fit=crop',
      rating: 4.6
    }]
  }, {
    name: 'Salads',
    items: [{
      id: 5,
      name: 'Caesar Salad',
      description: 'Crisp romaine lettuce with parmesan, croutons, and caesar dressing',
      price: 500,
      image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=200&h=200&fit=crop',
      rating: 4.5
    }]
  }, {
    name: 'Drinks',
    items: [{
      id: 6,
      name: 'Italian Soda',
      description: 'Refreshing flavored soda with a splash of cream',
      price: 200,
      image: 'https://images.unsplash.com/photo-1437418747212-8d9709afab22?w=200&h=200&fit=crop',
      rating: 4.4
    }]
  }];
  const reviews = [{
    id: 1,
    author: 'Sarah Kirkson',
    avatar: 'https://i.pravatar.cc/150?img=1',
    rating: 5,
    date: '2 days ago',
    comment: 'Pinakamasarap na pizza! Ang crust ay perpektong crispy at laging fresh ang mga ingredients.',
    helpful: 24,
    images: ['https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&h=200&fit=crop']
  }, {
    id: 2,
    author: 'Mike Chen',
    avatar: 'https://i.pravatar.cc/150?img=2',
    rating: 5,
    date: '1 week ago',
    comment: 'Kahanga-hangang kalidad at sulit na sulit. Ang delivery ay napakabilis din!',
    helpful: 18
  }, {
    id: 3,
    author: 'Emily Rodriguez',
    avatar: 'https://i.pravatar.cc/150?img=3',
    rating: 4,
    date: '2 weeks ago',
    comment: 'Napakasarap na pizza, tunay na Italian lasa. Ang service ay napakahusay.',
    helpful: 12
  }];
  const tabs = [{
    id: 'menu',
    label: 'Menu',
    icon: UtensilsIcon
  }, {
    id: 'reviews',
    label: 'Reviews',
    icon: StarIcon
  }, {
    id: 'about',
    label: 'About',
    icon: InfoIcon
  }, {
    id: 'photos',
    label: 'Photos',
    icon: ImageIcon
  }];
  return <div className="min-h-screen bg-backgroundAlt pt-20">
      {/* Hero Banner */}
      <div className="relative h-80 overflow-hidden">
        <img src={restaurant.banner} alt={restaurant.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        {/* Action Buttons */}
        <div className="absolute top-6 right-6 flex gap-3">
          <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg">
            <HeartIcon size={20} className="text-primary" />
          </button>
          <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors shadow-lg">
            <ShareIcon size={20} className="text-textDark" />
          </button>
        </div>
      </div>
      {/* Restaurant Info Card */}
      <div className="container mx-auto px-4 -mt-32 relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="bg-white rounded-3xl shadow-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Profile Picture */}
            <div className="flex-shrink-0">
              <img src={restaurant.profile} alt={restaurant.name} className="w-32 h-32 rounded-2xl object-cover shadow-lg" />
            </div>
            {/* Info */}
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="heading-font text-4xl font-bold text-textDark mb-2">
                    {restaurant.name}
                  </h1>
                  <p className="text-lg text-textLight mb-3">
                    {restaurant.cuisine}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {restaurant.badges.map(badge => <span key={badge} className="bg-secondary/20 text-secondary text-sm font-semibold px-4 py-1 rounded-full">
                        {badge}
                      </span>)}
                  </div>
                </div>
                {restaurant.isOpen && <span className="bg-green-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                    Open Now
                  </span>}
              </div>
              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-backgroundAlt rounded-xl">
                  <div className="flex items-center justify-center mb-2">
                    <StarIcon size={20} className="text-secondary fill-secondary mr-1" />
                    <span className="text-2xl font-bold text-textDark">
                      {restaurant.rating}
                    </span>
                  </div>
                  <p className="text-xs text-textLight">
                    {restaurant.reviews} reviews
                  </p>
                </div>
                <div className="text-center p-4 bg-backgroundAlt rounded-xl">
                  <ClockIcon size={20} className="mx-auto text-primary mb-2" />
                  <p className="text-sm font-bold text-textDark">
                    {restaurant.deliveryTime}
                  </p>
                  <p className="text-xs text-textLight">Delivery</p>
                </div>
                <div className="text-center p-4 bg-backgroundAlt rounded-xl">
                  <TruckIcon size={20} className="mx-auto text-primary mb-2" />
                  <p className="text-sm font-bold text-textDark">
                    ₱{restaurant.deliveryFee}
                  </p>
                  <p className="text-xs text-textLight">Delivery Fee</p>
                </div>
                <div className="text-center p-4 bg-backgroundAlt rounded-xl">
                  <DollarSignIcon size={20} className="mx-auto text-primary mb-2" />
                  <p className="text-sm font-bold text-textDark">
                    {restaurant.priceRange}
                  </p>
                  <p className="text-xs text-textLight">Price Range</p>
                </div>
              </div>
              {/* Contact Info */}
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center text-textLight">
                  <MapPinIcon size={16} className="mr-2" />
                  <span>{restaurant.address}</span>
                </div>
                <div className="flex items-center text-textLight">
                  <PhoneIcon size={16} className="mr-2" />
                  <span>{restaurant.phone}</span>
                </div>
                <div className="flex items-center text-textLight">
                  <GlobeIcon size={16} className="mr-2" />
                  <span>{restaurant.website}</span>
                </div>
              </div>
            </div>
          </div>
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-gray-100">
            <button className="btn-primary flex-1 md:flex-none">
              Order Delivery
            </button>
            <button className="btn-secondary flex-1 md:flex-none">
              Order Pickup
            </button>
            <button onClick={() => setChatOpen(true)} className="btn-secondary flex-1 md:flex-none flex items-center justify-center">
              <MessageCircleIcon size={18} className="mr-2" />
              Chat
            </button>
          </div>
        </motion.div>
        <div className="bg-white rounded-2xl shadow-md mb-8">
          <div className="flex overflow-x-auto">
            {tabs.map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 font-medium transition-all ${activeTab === tab.id ? 'text-primary border-b-2 border-primary' : 'text-textLight hover:text-textDark'}`}>
                <tab.icon size={18} />
                {tab.label}
              </button>)}
          </div>
        </div>
        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Menu Tab */}
            {activeTab === 'menu' && <div className="space-y-8">
                {menuCategories.map((category, categoryIndex) => <motion.div key={category.name} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: categoryIndex * 0.1
            }} className="bg-white rounded-2xl shadow-md p-6">
                    <h3 className="text-2xl font-bold mb-6 flex items-center">
                      {category.name === 'Popular' && <AwardIcon size={24} className="mr-2 text-secondary" />}
                      {category.name}
                    </h3>
                    <div className="space-y-4">
                      {category.items.map(item => <div key={item.id} className="flex gap-4 p-4 rounded-xl hover:bg-backgroundAlt transition-colors cursor-pointer group">
                          <img src={item.image} alt={item.name} className="w-24 h-24 rounded-xl object-cover group-hover:scale-105 transition-transform" />
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h4 className="font-bold text-lg text-textDark group-hover:text-primary transition-colors">
                                  {item.name}
                                </h4>
                                <p className="text-sm text-textLight line-clamp-2">
                                  {item.description}
                                </p>
                              </div>
                              {item.isPopular && <span className="bg-secondary/20 text-secondary text-xs font-bold px-2 py-1 rounded-full">
                                  Popular
                                </span>}
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <span className="text-xl font-bold text-primary">
                                  ₱{item.price}
                                </span>
                                {item.rating && <div className="flex items-center text-sm">
                                    <StarIcon size={14} className="text-secondary fill-secondary mr-1" />
                                    <span className="font-medium">
                                      {item.rating}
                                    </span>
                                  </div>}
                              </div>
                              <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primaryDark transition-colors">
                                Add
                              </button>
                            </div>
                          </div>
                        </div>)}
                    </div>
                  </motion.div>)}
              </div>}
            {/* Reviews Tab */}
            {activeTab === 'reviews' && <div className="bg-white rounded-2xl shadow-md p-6">
                <h3 className="text-2xl font-bold mb-6">Customer Reviews</h3>
                {/* Rating Overview */}
                <div className="flex items-center gap-8 mb-8 pb-8 border-b border-gray-100">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary mb-2">
                      {restaurant.rating}
                    </div>
                    <div className="flex items-center justify-center mb-1">
                      {[...Array(5)].map((_, i) => <StarIcon key={i} size={16} className={`${i < Math.floor(restaurant.rating) ? 'fill-secondary text-secondary' : 'text-gray-300'}`} />)}
                    </div>
                    <p className="text-sm text-textLight">
                      {restaurant.reviews} reviews
                    </p>
                  </div>
                  <div className="flex-1 space-y-2">
                    {[5, 4, 3, 2, 1].map(stars => <div key={stars} className="flex items-center gap-3">
                        <span className="text-sm font-medium w-8">
                          {stars}★
                        </span>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-secondary rounded-full" style={{
                      width: `${stars === 5 ? 70 : stars === 4 ? 20 : 5}%`
                    }} />
                        </div>
                      </div>)}
                  </div>
                </div>
                {/* Reviews List */}
                <div className="space-y-6">
                  {reviews.map(review => <div key={review.id} className="pb-6 border-b border-gray-100 last:border-0">
                      <div className="flex items-start gap-4">
                        <img src={review.avatar} alt={review.author} className="w-12 h-12 rounded-full object-cover" />
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h4 className="font-semibold text-textDark">
                                {review.author}
                              </h4>
                              <p className="text-sm text-textLight">
                                {review.date}
                              </p>
                            </div>
                            <div className="flex items-center">
                              {[...Array(5)].map((_, i) => <StarIcon key={i} size={14} className={`${i < review.rating ? 'fill-secondary text-secondary' : 'text-gray-300'}`} />)}
                            </div>
                          </div>
                          <p className="text-textLight mb-3">
                            {review.comment}
                          </p>
                          {review.images && <div className="flex gap-2 mb-3">
                              {review.images.map((img, i) => <img key={i} src={img} alt="Review" className="w-20 h-20 rounded-lg object-cover" />)}
                            </div>}
                          <button className="flex items-center text-sm text-textLight hover:text-primary transition-colors">
                            <ThumbsUpIcon size={16} className="mr-2" />
                            Helpful ({review.helpful})
                          </button>
                        </div>
                      </div>
                    </div>)}
                </div>
              </div>}
            {/* About Tab */}
            {activeTab === 'about' && <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-md p-6">
                  <h3 className="text-2xl font-bold mb-4">About Us</h3>
                  <p className="text-textLight leading-relaxed">
                    {restaurant.description}
                  </p>
                </div>
                <div className="bg-white rounded-2xl shadow-md p-6">
                  <h3 className="text-2xl font-bold mb-4">Opening Hours</h3>
                  <div className="space-y-3">
                    {Object.entries(restaurant.openingHours).map(([day, hours]) => <div key={day} className="flex items-center justify-between">
                          <span className="font-medium capitalize text-textDark">
                            {day}
                          </span>
                          <span className="text-textLight">{hours}</span>
                        </div>)}
                  </div>
                </div>
              </div>}
            {/* Photos Tab */}
            {activeTab === 'photos' && <div className="bg-white rounded-2xl shadow-md p-6">
                <h3 className="text-2xl font-bold mb-6">Photos</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {restaurant.photos.map((photo, index) => <motion.img key={index} initial={{
                opacity: 0,
                scale: 0.9
              }} animate={{
                opacity: 1,
                scale: 1
              }} transition={{
                delay: index * 0.1
              }} src={photo} alt={`Photo ${index + 1}`} className="w-full h-48 object-cover rounded-xl cursor-pointer hover:scale-105 transition-transform" />)}
                </div>
              </div>}
          </div>
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Map */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <MapPinIcon size={20} className="mr-2 text-primary" />
                Location
              </h3>
              <div className="bg-gray-200 rounded-xl h-48 mb-4 flex items-center justify-center">
                <MapIcon size={48} className="text-gray-400" />
              </div>
              <p className="text-sm text-textLight mb-3">
                {restaurant.address}
              </p>
              <p className="text-sm font-medium text-primary">
                {restaurant.distance} away
              </p>
            </div>
            {/* Contact */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <div className="space-y-3">
                <a href={`tel:${restaurant.phone}`} className="flex items-center text-textLight hover:text-primary transition-colors">
                  <PhoneIcon size={18} className="mr-3" />
                  {restaurant.phone}
                </a>
                <a href={`https://${restaurant.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-textLight hover:text-primary transition-colors">
                  <GlobeIcon size={18} className="mr-3" />
                  {restaurant.website}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Chat Sidebar */}
      <ChatSidebar isOpen={chatOpen} onClose={() => setChatOpen(false)} restaurantName={restaurant.name} />
    </div>;
};