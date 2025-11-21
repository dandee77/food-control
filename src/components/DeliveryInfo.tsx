import React from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, TruckIcon, CreditCardIcon, ClockIcon, PhoneIcon } from 'lucide-react';
interface DeliveryInfoProps {
  restaurantInfo: {
    name: string;
    address: string;
    phone: string;
    rating: number;
    distance: string;
  };
}
export const DeliveryInfo: React.FC<DeliveryInfoProps> = ({
  restaurantInfo
}) => {
  const paymentMethods = [{
    name: 'Credit Card',
    icon: '💳'
  }, {
    name: 'Debit Card',
    icon: '💳'
  }, {
    name: 'Apple Pay',
    icon: '🍎'
  }, {
    name: 'Google Pay',
    icon: 'G'
  }, {
    name: 'Cash',
    icon: '💵'
  }];
  return <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
      {/* Restaurant Location */}
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} whileInView={{
      opacity: 1,
      y: 0
    }} viewport={{
      once: true
    }} transition={{
      duration: 0.5
    }} className="bg-white rounded-3xl p-6 shadow-md">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mr-4">
            <MapPinIcon size={24} className="text-primary" />
          </div>
          <div>
            <h3 className="font-bold text-xl">Restaurant Location</h3>
            <p className="text-sm text-textLight">Nearest location to you</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <span className="text-lg">🏪</span>
            </div>
            <div>
              <p className="font-semibold text-textDark">
                {restaurantInfo.name}
              </p>
              <p className="text-sm text-textLight">{restaurantInfo.address}</p>
            </div>
          </div>
          <div className="flex items-center justify-between py-3 border-t border-gray-100">
            <div className="flex items-center text-textLight">
              <PhoneIcon size={16} className="mr-2" />
              <span className="text-sm">{restaurantInfo.phone}</span>
            </div>
            <div className="flex items-center text-primary">
              <span className="text-sm font-medium">
                {restaurantInfo.distance} away
              </span>
            </div>
          </div>
          <button className="w-full bg-primary/10 text-primary font-medium py-3 rounded-xl hover:bg-primary/20 transition-colors">
            View on Map
          </button>
        </div>
      </motion.div>
      {/* Delivery & Payment */}
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
      delay: 0.1
    }} className="bg-white rounded-3xl p-6 shadow-md">
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center mr-4">
            <TruckIcon size={24} className="text-secondary" />
          </div>
          <div>
            <h3 className="font-bold text-xl">Delivery Information</h3>
            <p className="text-sm text-textLight">Fast and reliable service</p>
          </div>
        </div>
        <div className="space-y-4 mb-6">
          <div className="flex items-center justify-between p-4 bg-amber-50 rounded-xl">
            <div className="flex items-center">
              <ClockIcon size={20} className="text-amber-600 mr-3" />
              <div>
                <p className="font-semibold text-textDark">Estimated Time</p>
                <p className="text-sm text-textLight">20-25 minutes</p>
              </div>
            </div>
            <span className="text-2xl">⚡</span>
          </div>
          <div className="flex items-center justify-between p-4 bg-green-50 rounded-xl">
            <div className="flex items-center">
              <TruckIcon size={20} className="text-green-600 mr-3" />
              <div>
                <p className="font-semibold text-textDark">Delivery Fee</p>
                <p className="text-sm text-textLight">Free over ₱1,000</p>
              </div>
            </div>
            <span className="font-bold text-green-600">₱150</span>
          </div>
        </div>
        <div className="pt-4 border-t border-gray-100">
          <p className="text-sm font-semibold text-textDark mb-3">
            Accepted Payment Methods
          </p>
          <div className="flex flex-wrap gap-2">
            {paymentMethods.map((method, index) => <div key={index} className="flex items-center bg-gray-50 px-3 py-2 rounded-lg">
                <span className="text-lg mr-2">{method.icon}</span>
                <span className="text-xs font-medium text-textDark">
                  {method.name}
                </span>
              </div>)}
          </div>
        </div>
      </motion.div>
    </div>;
};