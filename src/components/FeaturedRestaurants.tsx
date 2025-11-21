import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import { RestaurantCard } from './RestaurantCard';
export const FeaturedRestaurants = () => {
  const navigate = useNavigate();
  const restaurants = [{
    id: 1,
    name: 'Burger Palace',
    image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    cuisine: 'American, Burgers',
    rating: 4.8,
    deliveryTime: '15-25 min',
    deliveryFee: '₱100',
    promoCode: '30% OFF'
  }, {
    id: 2,
    name: 'Sushi Master',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    cuisine: 'Japanese, Sushi',
    rating: 4.9,
    deliveryTime: '25-35 min',
    deliveryFee: '₱150'
  }, {
    id: 3,
    name: 'Pizza Express',
    image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    cuisine: 'Italian, Pizza',
    rating: 4.7,
    deliveryTime: '20-30 min',
    deliveryFee: '₱75',
    promoCode: 'FREE DELIVERY'
  }, {
    id: 4,
    name: 'Taco Fiesta',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    cuisine: 'Mexican, Tacos',
    rating: 4.6,
    deliveryTime: '20-35 min',
    deliveryFee: '₱100'
  }, {
    id: 5,
    name: 'Noodle House',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    cuisine: 'Asian, Noodles',
    rating: 4.5,
    deliveryTime: '25-40 min',
    deliveryFee: '₱125'
  }, {
    id: 6,
    name: 'Salad Bar',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80',
    cuisine: 'Healthy, Salads',
    rating: 4.7,
    deliveryTime: '15-25 min',
    deliveryFee: '₱100',
    promoCode: 'BUY 1 GET 1'
  }];
  return <section className="section-padding">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="heading-font text-3xl font-bold">
            Featured Restaurants
          </h2>
          <button onClick={() => navigate('/restaurants')} className="flex items-center text-primary font-medium hover:underline">
            <span>View All</span>
            <ArrowRightIcon size={18} className="ml-1" />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant, index) => <RestaurantCard key={restaurant.id} restaurant={restaurant} index={index} />)}
        </div>
      </div>
    </section>;
};