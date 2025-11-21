import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeftIcon, CheckCircleIcon, ClockIcon, PhoneIcon, MapPinIcon, UserIcon, TruckIcon, PackageIcon, ChefHatIcon, UtensilsIcon, CreditCardIcon, ReceiptIcon, MessageCircleIcon, StarIcon, NavigationIcon, InfoIcon } from 'lucide-react';
import { ChatSidebar } from '../components/ChatSidebar';

export const OrderDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showContactDriver, setShowContactDriver] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatTarget, setChatTarget] = useState<'driver' | 'restaurant'>('driver');

  const order = {
    id: '#ORD-2024-1156',
    status: 'delivering',
    placedAt: '2:45 PM',
    estimatedDelivery: '3:15 PM',
    restaurant: {
      name: "Tony's Pizzeria",
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=150&h=150&fit=crop',
      address: '123 Main Street, Malolos, Bulacan 10001',
      phone: '+1 (555) 123-4567'
    },
    driver: {
      name: 'James Wilson',
      image: 'https://i.pravatar.cc/150?img=12',
      phone: '+1 (555) 987-6543',
      rating: 4.9,
      totalDeliveries: 1250,
      vehicle: 'Honda Civic - ABC 1234'
    },
    deliveryAddress: '456 Park Avenue, Apt 5B, Malolos, Bulacan 10022',
    items: [
      {
        id: 1,
        name: 'Margherita Pizza',
        quantity: 2,
        price: 750,
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=100&h=100&fit=crop',
        customization: 'Extra cheese, No onions'
      },
      {
        id: 2,
        name: 'Caesar Salad',
        quantity: 1,
        price: 500,
        image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=100&h=100&fit=crop',
        customization: 'Dressing on the side'
      },
      {
        id: 3,
        name: 'Garlic Bread',
        quantity: 1,
        price: 300,
        image: 'https://images.unsplash.com/photo-1573140401552-3fab0b24306f?w=100&h=100&fit=crop'
      }
    ],
    pricing: {
      subtotal: 2300,
      deliveryFee: 150,
      serviceFee: 75,
      tip: 250,
      tax: 200,
      total: 2975
    },
    paymentMethod: {
      type: 'Credit Card',
      last4: '4242',
      brand: 'Visa'
    },
    timeline: [
      {
        status: 'placed',
        label: 'Order Placed',
        time: '2:45 PM',
        completed: true,
        icon: ReceiptIcon
      },
      {
        status: 'confirmed',
        label: 'Restaurant Confirmed',
        time: '2:47 PM',
        completed: true,
        icon: CheckCircleIcon
      },
      {
        status: 'preparing',
        label: 'Preparing Your Food',
        time: '2:50 PM',
        completed: true,
        icon: ChefHatIcon
      },
      {
        status: 'ready',
        label: 'Ready for Pickup',
        time: '3:05 PM',
        completed: true,
        icon: PackageIcon
      },
      {
        status: 'delivering',
        label: 'Out for Delivery',
        time: '3:08 PM',
        completed: false,
        icon: TruckIcon
      },
      {
        status: 'delivered',
        label: 'Delivered',
        time: '3:15 PM',
        completed: false,
        icon: CheckCircleIcon
      }
    ]
  };

  const currentStatusIndex = order.timeline.findIndex(item => item.status === order.status);

  return (
    <div className="min-h-screen bg-backgroundAlt">
      <div className="relative bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('/account')}
            className="flex items-center text-primary hover:text-primary/80 font-medium mb-6 transition-colors"
          >
            <ArrowLeftIcon size={20} className="mr-2" />
            Back to Orders
          </motion.button>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="heading-font text-4xl md:text-5xl font-bold text-textDark mb-4">
              Order <span className="text-primary">Tracking</span>
            </h1>
            <p className="text-textLight text-lg mb-2">Order ID: {order.id}</p>
            <p className="text-sm text-textLight">Placed at {order.placedAt}</p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8 pb-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-3xl shadow-xl p-8"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-textDark">Delivery Status</h2>
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="bg-green-500/10 text-green-600 px-4 py-2 rounded-full font-semibold text-sm"
                >
                  {order.status === 'delivering' ? 'On the Way' : 'Processing'}
                </motion.div>
              </div>

              <div className="relative">
                {order.timeline.map((step, index) => (
                  <motion.div
                    key={step.status}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex gap-4 mb-8 last:mb-0"
                  >
                    <div className="relative flex flex-col items-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.1, type: 'spring' }}
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          step.completed
                            ? 'bg-green-500 text-white'
                            : index === currentStatusIndex
                            ? 'bg-primary text-white'
                            : 'bg-gray-200 text-gray-400'
                        } shadow-lg relative z-10`}
                      >
                        <step.icon size={20} />
                      </motion.div>
                      {index !== order.timeline.length - 1 && (
                        <div
                          className={`w-1 flex-1 mt-2 mb-2 ${
                            step.completed ? 'bg-green-500' : 'bg-gray-200'
                          } transition-all duration-500`}
                          style={{ minHeight: '40px' }}
                        />
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3
                            className={`font-bold text-lg mb-1 ${
                              step.completed || index === currentStatusIndex
                                ? 'text-textDark'
                                : 'text-textLight'
                            }`}
                          >
                            {step.label}
                          </h3>
                          <p className="text-sm text-textLight">{step.time}</p>
                        </div>
                        {step.completed && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring' }}
                          >
                            <CheckCircleIcon size={20} className="text-green-500" />
                          </motion.div>
                        )}
                      </div>
                      {index === currentStatusIndex && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="mt-3 bg-primary/5 rounded-xl p-4"
                        >
                          <p className="text-sm text-primary font-medium">
                            Your order is currently being delivered. Estimated arrival: {order.estimatedDelivery}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl shadow-xl p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-textDark">Your Items</h2>
                <span className="text-sm text-textLight">{order.items.length} items</span>
              </div>
              <div className="space-y-4">
                {order.items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex gap-4 p-4 bg-backgroundAlt rounded-2xl hover:shadow-md transition-shadow"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-xl object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-bold text-textDark">{item.name}</h3>
                          {item.customization && (
                            <p className="text-xs text-textLight mt-1">{item.customization}</p>
                          )}
                        </div>
                        <span className="font-bold text-primary">₱{item.price}</span>
                      </div>
                      <span className="text-sm text-textLight">Qty: {item.quantity}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-3xl shadow-xl p-8"
            >
              <h2 className="text-2xl font-bold text-textDark mb-6">Payment Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between text-textLight">
                  <span>Subtotal</span>
                  <span>₱{order.pricing.subtotal}</span>
                </div>
                <div className="flex justify-between text-textLight">
                  <span>Delivery Fee</span>
                  <span>₱{order.pricing.deliveryFee}</span>
                </div>
                <div className="flex justify-between text-textLight">
                  <span>Service Fee</span>
                  <span>₱{order.pricing.serviceFee}</span>
                </div>
                <div className="flex justify-between text-textLight">
                  <span>Tip</span>
                  <span className="text-green-600">₱{order.pricing.tip}</span>
                </div>
                <div className="flex justify-between text-textLight">
                  <span>Tax</span>
                  <span>₱{order.pricing.tax}</span>
                </div>
                <div className="border-t-2 border-gray-200 pt-4 flex justify-between items-center">
                  <span className="text-xl font-bold text-textDark">Total</span>
                  <span className="text-2xl font-bold text-primary">
                    ₱{order.pricing.total}
                  </span>
                </div>
                <div className="mt-4 flex items-center gap-3 p-4 bg-backgroundAlt rounded-xl">
                  <div className="w-12 h-8 bg-blue-500 rounded flex items-center justify-center">
                    <CreditCardIcon size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-textLight">Paid with</p>
                    <p className="font-semibold text-textDark">
                      {order.paymentMethod.brand} •••• {order.paymentMethod.last4}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl shadow-xl p-6"
            >
              <h3 className="text-xl font-bold text-textDark mb-6 flex items-center">
                <TruckIcon size={24} className="mr-2 text-primary" />
                Your Driver
              </h3>
              <div className="text-center mb-6">
                <motion.img
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', bounce: 0.4 }}
                  src={order.driver.image}
                  alt={order.driver.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-primary/20 shadow-lg"
                />
                <h4 className="text-xl font-bold text-textDark mb-1">{order.driver.name}</h4>
                <div className="flex items-center justify-center gap-1 text-secondary mb-2">
                  <StarIcon size={16} className="fill-secondary" />
                  <span className="font-semibold">{order.driver.rating}</span>
                  <span className="text-xs text-textLight">
                    ({order.driver.totalDeliveries} deliveries)
                  </span>
                </div>
                <p className="text-sm text-textLight">{order.driver.vehicle}</p>
              </div>

              <div className="space-y-3 mb-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowContactDriver(!showContactDriver)}
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  <PhoneIcon size={18} />
                  Call Driver
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setChatTarget('driver');
                    setChatOpen(true);
                  }}
                  className="w-full btn-secondary flex items-center justify-center gap-2"
                >
                  <MessageCircleIcon size={18} />
                  Send Message
                </motion.button>
              </div>

              {showContactDriver && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="bg-backgroundAlt rounded-xl p-4 mb-4"
                >
                  <p className="text-sm text-textDark font-medium mb-2">Driver Contact</p>
                  <p className="text-sm text-textLight">{order.driver.phone}</p>
                </motion.div>
              )}

              <div className="border-t border-gray-100 pt-6">
                <h4 className="font-semibold text-textDark mb-3 flex items-center">
                  <MapPinIcon size={18} className="mr-2 text-primary" />
                  Delivery Address
                </h4>
                <p className="text-sm text-textLight mb-4">{order.deliveryAddress}</p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-backgroundAlt rounded-xl hover:bg-gray-200 transition-colors font-medium text-textDark"
                >
                  <NavigationIcon size={18} />
                  Track on Map
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-3xl shadow-xl p-6"
            >
              <h3 className="text-xl font-bold text-textDark mb-4 flex items-center">
                <UtensilsIcon size={24} className="mr-2 text-primary" />
                Restaurant Info
              </h3>
              <div className="flex gap-4 mb-4">
                <img
                  src={order.restaurant.image}
                  alt={order.restaurant.name}
                  className="w-16 h-16 rounded-xl object-cover shadow-md"
                />
                <div>
                  <h4 className="font-bold text-textDark mb-1">{order.restaurant.name}</h4>
                  <div className="flex items-center text-xs text-textLight mb-1">
                    <MapPinIcon size={12} className="mr-1" />
                    <span className="line-clamp-2">{order.restaurant.address}</span>
                  </div>
                  <div className="flex items-center text-xs text-textLight">
                    <PhoneIcon size={12} className="mr-1" />
                    <span>{order.restaurant.phone}</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  <PhoneIcon size={18} />
                  Call Restaurant
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setChatTarget('restaurant');
                    setChatOpen(true);
                  }}
                  className="w-full btn-secondary flex items-center justify-center gap-2"
                >
                  <MessageCircleIcon size={18} />
                  Send Message
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-3xl shadow-xl p-6 border-2 border-primary/20"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <InfoIcon size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-textDark mb-2">Need Help?</h4>
                  <p className="text-sm text-textLight mb-3">
                    Our support team is available 24/7 to assist you with any issues.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    Contact Support →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <ChatSidebar
        isOpen={chatOpen}
        onClose={() => setChatOpen(false)}
        restaurantName={chatTarget === 'driver' ? order.driver.name : order.restaurant.name}
      />
    </div>
  );
};
