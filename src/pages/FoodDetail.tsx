import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, StarIcon, HeartIcon, ShareIcon, MapPinIcon, ClockIcon, TruckIcon } from 'lucide-react';
import { FoodCustomization } from '../components/FoodCustomization';
import { ReviewsSection } from '../components/ReviewsSection';
import { DeliveryInfo } from '../components/DeliveryInfo';
import { RelatedItems } from '../components/RelatedItems';
export const FoodDetail = () => {
  const {
    id
  } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  // Mock data - in real app, fetch based on id
  const foodItem = {
    id: 1,
    name: 'Margherita Pizza',
    restaurant: "Tony's Pizzeria",
    price: 14.99,
    rating: 4.8,
    reviews: 234,
    description: 'A classic Italian masterpiece featuring San Marzano tomato sauce, fresh mozzarella di bufala, hand-picked basil leaves, and extra virgin olive oil on our signature wood-fired crust. Each pizza is crafted with love and baked to perfection in our traditional brick oven.',
    images: ['https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop', 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=600&fit=crop'],
    category: 'Pizza',
    prepTime: '20-25 min',
    dietary: ['Vegetarian'],
    calories: 850,
    isPopular: true,
    restaurant_info: {
      name: "Tony's Pizzeria",
      address: '123 Main Street, Malolos, Bulacan 10001',
      phone: '(555) 123-4567',
      rating: 4.7,
      distance: '1.2 miles'
    }
  };
  return <div className="min-h-screen bg-backgroundAlt pt-20">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-4">
        <button onClick={() => navigate(-1)} className="flex items-center text-textLight hover:text-primary transition-colors">
          <ArrowLeftIcon size={20} className="mr-2" />
          Back to Menu
        </button>
      </div>
      {/* Main Content */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Images */}
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5
        }}>
            {/* Main Image */}
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl mb-4 aspect-square">
              <img src={foodItem.images[selectedImage]} alt={foodItem.name} className="w-full h-full object-cover" />
              {foodItem.isPopular && <div className="absolute top-6 left-6 bg-secondary text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                  Popular Choice
                </div>}
              <div className="absolute top-6 right-6 flex gap-2">
                <button onClick={() => setIsFavorite(!isFavorite)} className={`p-3 rounded-full backdrop-blur-sm transition-all ${isFavorite ? 'bg-primary text-white' : 'bg-white/90 text-primary'}`}>
                  <HeartIcon size={20} className={isFavorite ? 'fill-white' : ''} />
                </button>
                <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                  <ShareIcon size={20} className="text-primary" />
                </button>
              </div>
            </div>
            {/* Thumbnail Images */}
            <div className="grid grid-cols-3 gap-4">
              {foodItem.images.map((image, index) => <button key={index} onClick={() => setSelectedImage(index)} className={`aspect-square rounded-2xl overflow-hidden transition-all ${selectedImage === index ? 'ring-4 ring-primary shadow-lg' : 'opacity-60 hover:opacity-100'}`}>
                  <img src={image} alt={`${foodItem.name} ${index + 1}`} className="w-full h-full object-cover" />
                </button>)}
            </div>
          </motion.div>
          {/* Right Column - Details */}
          <motion.div initial={{
          opacity: 0,
          x: 20
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="space-y-6">
            {/* Header */}
            <div className="bg-white rounded-3xl p-6 shadow-md">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h1 className="heading-font text-3xl md:text-4xl font-bold text-textDark mb-2">
                    {foodItem.name}
                  </h1>
                  <button onClick={() => navigate('/')} className="text-primary hover:text-primaryDark font-medium flex items-center">
                    <MapPinIcon size={16} className="mr-1" />
                    {foodItem.restaurant}
                  </button>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center bg-primary/10 text-primary px-3 py-2 rounded-full mb-2">
                    <StarIcon size={18} className="fill-primary mr-1" />
                    <span className="text-lg font-bold">{foodItem.rating}</span>
                  </div>
                  <span className="text-xs text-textLight">
                    ({foodItem.reviews} reviews)
                  </span>
                </div>
              </div>
              {/* Quick Info */}
              <div className="flex flex-wrap gap-3 mb-4">
                <div className="flex items-center bg-amber-50 text-amber-700 px-3 py-2 rounded-full">
                  <ClockIcon size={16} className="mr-2" />
                  <span className="text-sm font-medium">
                    {foodItem.prepTime}
                  </span>
                </div>
                <div className="flex items-center bg-green-50 text-green-700 px-3 py-2 rounded-full">
                  <span className="text-sm font-medium">
                    {foodItem.calories} cal
                  </span>
                </div>
                {foodItem.dietary.map(diet => <div key={diet} className="flex items-center bg-blue-50 text-blue-700 px-3 py-2 rounded-full">
                    <span className="text-sm font-medium">{diet}</span>
                  </div>)}
              </div>
              {/* Description */}
              <p className="text-textLight leading-relaxed">
                {foodItem.description}
              </p>
            </div>
            {/* Price & Quantity */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-6 border-2 border-primary/20">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-sm text-textLight block mb-1">
                    Price
                  </span>
                  <span className="text-4xl font-bold text-primary">
                    ${foodItem.price.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center bg-white rounded-2xl shadow-md">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-3 text-primary hover:bg-gray-50 rounded-l-2xl transition-colors">
                    <span className="text-2xl font-bold">−</span>
                  </button>
                  <span className="px-6 py-3 text-xl font-bold text-textDark">
                    {quantity}
                  </span>
                  <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-3 text-primary hover:bg-gray-50 rounded-r-2xl transition-colors">
                    <span className="text-2xl font-bold">+</span>
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-primary/20">
                <span className="text-lg font-semibold text-textDark">
                  Total
                </span>
                <span className="text-2xl font-bold text-primary">
                  ${(foodItem.price * quantity).toFixed(2)}
                </span>
              </div>
            </div>
            {/* Customization */}
            <FoodCustomization />
            {/* Add to Cart Button */}
            <motion.button whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} className="w-full bg-primary text-white font-bold text-lg py-4 rounded-2xl shadow-lg hover:bg-primaryDark transition-colors">
              Add to Cart - ${(foodItem.price * quantity).toFixed(2)}
            </motion.button>
          </motion.div>
        </div>
        {/* Delivery Info */}
        <DeliveryInfo restaurantInfo={foodItem.restaurant_info} />
        {/* Reviews */}
        <ReviewsSection rating={foodItem.rating} totalReviews={foodItem.reviews} />
        {/* Related Items */}
        <RelatedItems currentItemId={foodItem.id} category={foodItem.category} />
      </div>
    </div>;
};