import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { UserIcon, WalletIcon, ShoppingBagIcon, HeartIcon, SettingsIcon, LogOutIcon, CreditCardIcon, MapPinIcon, BellIcon, AwardIcon, ClockIcon, CheckCircleIcon, TruckIcon, ChefHatIcon } from 'lucide-react';
export const Account = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('profile');
  const tabs = [{
    id: 'profile',
    name: 'Profile',
    icon: UserIcon
  }, {
    id: 'wallet',
    name: 'Wallet',
    icon: WalletIcon
  }, {
    id: 'orders',
    name: 'Orders',
    icon: ShoppingBagIcon
  }, {
    id: 'favorites',
    name: 'Favorites',
    icon: HeartIcon
  }, {
    id: 'rewards',
    name: 'Rewards',
    icon: AwardIcon
  }, {
    id: 'settings',
    name: 'Settings',
    icon: SettingsIcon
  }];
  const orders = [{
    id: '#12345',
    date: '2024-01-15',
    items: ['Margherita Pizza', 'Caesar Salad'],
    total: 28.99,
    status: 'delivered',
    restaurant: "Tony's Pizzeria",
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=100&h=100&fit=crop'
  }, {
    id: '#12344',
    date: '2024-01-14',
    items: ['Spicy Tuna Roll', 'Miso Soup'],
    total: 24.5,
    status: 'delivered',
    restaurant: 'Sakura Sushi',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=100&h=100&fit=crop'
  }, {
    id: '#12343',
    date: '2024-01-13',
    items: ['Classic Cheeseburger', 'Fries', 'Coke'],
    total: 18.99,
    status: 'delivered',
    restaurant: 'Burger Haven',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=100&h=100&fit=crop'
  }];
  const favorites = [{
    id: 1,
    name: 'Margherita Pizza',
    restaurant: "Tony's Pizzeria",
    price: 14.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=200&h=200&fit=crop'
  }, {
    id: 2,
    name: 'Spicy Tuna Roll',
    restaurant: 'Sakura Sushi',
    price: 16.5,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=200&h=200&fit=crop'
  }, {
    id: 3,
    name: 'Butter Chicken',
    restaurant: 'Spice Route',
    price: 14.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=200&h=200&fit=crop'
  }, {
    id: 4,
    name: 'Chocolate Lava Cake',
    restaurant: 'Sweet Treats',
    price: 8.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=200&h=200&fit=crop'
  }];
  return <div className="min-h-screen bg-backgroundAlt pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="bg-gradient-to-r from-primary to-primaryDark rounded-3xl p-8 mb-8 text-white">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
              <span className="text-4xl">👨‍🍳</span>
            </div>
            <div className="text-center md:text-left flex-1">
              <h1 className="text-3xl font-bold mb-2">Welcome back, Kirk!</h1>
              <p className="text-white/90">Member since January 2024</p>
            </div>
            <div className="flex gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center">
                <p className="text-2xl font-bold">24</p>
                <p className="text-sm text-white/80">Orders</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-center">
                <p className="text-2xl font-bold">⭐ 4.9</p>
                <p className="text-sm text-white/80">Rating</p>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Tabs */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <motion.div initial={{
          opacity: 0,
          x: -20
        }} animate={{
          opacity: 1,
          x: 0
        }} className="lg:w-64">
            <div className="bg-white rounded-2xl shadow-md p-4 sticky top-24">
              <nav className="space-y-2">
                {tabs.map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${activeTab === tab.id ? 'bg-primary text-white shadow-md' : 'text-textDark hover:bg-gray-50'}`}>
                    <tab.icon size={20} />
                    <span className="font-medium">{tab.name}</span>
                  </button>)}
                <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-all mt-4">
                  <LogOutIcon size={20} />
                  <span className="font-medium">Logout</span>
                </button>
              </nav>
            </div>
          </motion.div>
          {/* Content */}
          <motion.div key={activeTab} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.3
        }} className="flex-1">
            {/* Profile Tab */}
            {activeTab === 'profile' && <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-md p-6">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <UserIcon size={24} className="mr-3 text-primary" />
                    Personal Information
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-textLight mb-2">
                        Full Name
                      </label>
                      <input type="text" defaultValue="Kirk Doe" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl outline-none focus:border-primary transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-textLight mb-2">
                        Email
                      </label>
                      <input type="email" defaultValue="Kirk.doe@example.com" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl outline-none focus:border-primary transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-textLight mb-2">
                        Phone
                      </label>
                      <input type="tel" defaultValue="+1 (555) 123-4567" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl outline-none focus:border-primary transition-colors" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-textLight mb-2">
                        Birthday
                      </label>
                      <input type="date" defaultValue="1990-01-15" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl outline-none focus:border-primary transition-colors" />
                    </div>
                  </div>
                  <button className="mt-6 btn-primary">Save Changes</button>
                </div>
                <div className="bg-white rounded-2xl shadow-md p-6">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <MapPinIcon size={24} className="mr-3 text-primary" />
                    Saved Addresses
                  </h2>
                  <div className="space-y-4">
                    {['Home', 'Work', 'Other'].map((type, index) => <div key={index} className="border-2 border-gray-200 rounded-xl p-4 hover:border-primary transition-colors">
                        <div className="flex items-start justify-between">
                          <div>
                            <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-2">
                              {type}
                            </span>
                            <p className="text-textDark font-medium">
                              123 Main Street, Apt 4B
                            </p>
                            <p className="text-sm text-textLight">
                              Malolos, Bulacan 10001
                            </p>
                          </div>
                          <button className="text-primary hover:text-primaryDark">
                            Edit
                          </button>
                        </div>
                      </div>)}
                    <button className="w-full border-2 border-dashed border-gray-300 rounded-xl p-4 text-primary hover:border-primary hover:bg-primary/5 transition-all">
                      + Add New Address
                    </button>
                  </div>
                </div>
              </div>}
            {/* Wallet Tab */}
            {activeTab === 'wallet' && <div className="space-y-6">
                <div className="bg-gradient-to-br from-primary to-primaryDark rounded-3xl p-8 text-white shadow-xl">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-white/80 text-sm mb-1">
                        Available Balance
                      </p>
                      <h2 className="text-4xl font-bold">$45.50</h2>
                    </div>
                    <WalletIcon size={48} className="opacity-20" />
                  </div>
                  <div className="flex gap-4">
                    <button className="flex-1 bg-white text-primary font-bold py-3 rounded-xl hover:bg-white/90 transition-colors">
                      Add Money
                    </button>
                    <button className="flex-1 bg-white/20 backdrop-blur-sm text-white font-bold py-3 rounded-xl hover:bg-white/30 transition-colors">
                      Withdraw
                    </button>
                  </div>
                </div>
                <div className="bg-white rounded-2xl shadow-md p-6">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <CreditCardIcon size={24} className="mr-3 text-primary" />
                    Payment Methods
                  </h2>
                  <div className="space-y-4">
                    <div className="border-2 border-primary rounded-xl p-4 bg-primary/5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                            VISA
                          </div>
                          <div>
                            <p className="font-medium">•••• 4242</p>
                            <p className="text-sm text-textLight">
                              Expires 12/25
                            </p>
                          </div>
                        </div>
                        <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                          Default
                        </span>
                      </div>
                    </div>
                    <button className="w-full border-2 border-dashed border-gray-300 rounded-xl p-4 text-primary hover:border-primary hover:bg-primary/5 transition-all">
                      + Add Payment Method
                    </button>
                  </div>
                </div>
                <div className="bg-white rounded-2xl shadow-md p-6">
                  <h2 className="text-2xl font-bold mb-6">
                    Transaction History
                  </h2>
                  <div className="space-y-4">
                    {[{
                  type: 'order',
                  amount: -28.99,
                  date: 'Jan 15, 2024',
                  desc: 'Order #12345'
                }, {
                  type: 'refund',
                  amount: 15.5,
                  date: 'Jan 14, 2024',
                  desc: 'Refund - Order #12340'
                }, {
                  type: 'topup',
                  amount: 50.0,
                  date: 'Jan 10, 2024',
                  desc: 'Wallet Top-up'
                }].map((transaction, index) => <div key={index} className="flex items-center justify-between p-4 bg-backgroundAlt rounded-xl">
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${transaction.type === 'order' ? 'bg-red-100 text-red-600' : transaction.type === 'refund' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'}`}>
                            {transaction.type === 'order' ? '↓' : '↑'}
                          </div>
                          <div>
                            <p className="font-medium">{transaction.desc}</p>
                            <p className="text-sm text-textLight">
                              {transaction.date}
                            </p>
                          </div>
                        </div>
                        <span className={`font-bold ${transaction.amount < 0 ? 'text-red-600' : 'text-green-600'}`}>
                          {transaction.amount < 0 ? '-' : '+'}$
                          {Math.abs(transaction.amount).toFixed(2)}
                        </span>
                      </div>)}
                  </div>
                </div>
              </div>}
            {/* Orders Tab */}
            {activeTab === 'orders' && <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-md p-6">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <ShoppingBagIcon size={24} className="mr-3 text-primary" />
                    Order History
                  </h2>
                  <div className="space-y-4">
                    {orders.map((order, index) => <motion.div key={order.id} initial={{
                  opacity: 0,
                  y: 20
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  delay: index * 0.1
                }} className="border-2 border-gray-200 rounded-2xl p-6 hover:border-primary transition-colors">
                        <div className="flex flex-col md:flex-row gap-6">
                          <img src={order.image} alt={order.items[0]} className="w-24 h-24 rounded-xl object-cover" />
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <h3 className="font-bold text-lg mb-1">
                                  {order.restaurant}
                                </h3>
                                <p className="text-sm text-textLight mb-2">
                                  {order.date}
                                </p>
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full flex items-center">
                                    <CheckCircleIcon size={14} className="mr-1" />
                                    {order.status}
                                  </span>
                                  <span className="text-sm text-textLight">
                                    {order.id}
                                  </span>
                                </div>
                              </div>
                              <div className="text-right">
                                <p className="text-2xl font-bold text-primary">
                                  ${order.total.toFixed(2)}
                                </p>
                              </div>
                            </div>
                            <div className="mb-4">
                              <p className="text-sm text-textLight mb-2">
                                Items:
                              </p>
                              <p className="text-sm font-medium">
                                {order.items.join(', ')}
                              </p>
                            </div>
                            <div className="flex gap-3">
                              <button className="btn-primary text-sm">
                                Reorder
                              </button>
                              <button onClick={() => navigate(`/order/${order.id.replace('#', '')}`)} className="btn-secondary text-sm">
                                View Details
                              </button>
                            </div>
                          </div>
                        </div>
                      </motion.div>)}
                  </div>
                </div>
              </div>}
            {/* Favorites Tab */}
            {activeTab === 'favorites' && <div className="bg-white rounded-2xl shadow-md p-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <HeartIcon size={24} className="mr-3 text-primary fill-primary" />
                  Your Favorites
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {favorites.map((item, index) => <motion.div key={item.id} initial={{
                opacity: 0,
                scale: 0.9
              }} animate={{
                opacity: 1,
                scale: 1
              }} transition={{
                delay: index * 0.1
              }} className="border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-primary transition-all group cursor-pointer">
                      <div className="relative h-40">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md">
                          <HeartIcon size={18} className="text-primary fill-primary" />
                        </button>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                        <p className="text-sm text-textLight mb-3">
                          {item.restaurant}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xl font-bold text-primary">
                            ${item.price}
                          </span>
                          <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primaryDark transition-colors">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </motion.div>)}
                </div>
              </div>}
            {/* Rewards Tab */}
            {activeTab === 'rewards' && <div className="space-y-6">
                <div className="bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 rounded-3xl p-8 text-white shadow-xl">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-white/90 text-sm mb-1">Your Points</p>
                      <h2 className="text-5xl font-bold">2,450</h2>
                    </div>
                    <AwardIcon size={64} className="opacity-20" />
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm">Progress to Gold Status</span>
                      <span className="text-sm font-bold">75%</span>
                    </div>
                    <div className="w-full h-3 bg-white/30 rounded-full overflow-hidden">
                      <div className="h-full bg-white rounded-full" style={{
                    width: '75%'
                  }}></div>
                    </div>
                    <p className="text-xs text-white/80 mt-2">
                      550 points to go!
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-2xl shadow-md p-6">
                  <h2 className="text-2xl font-bold mb-6">Available Rewards</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[{
                  points: 500,
                  reward: '$5 Off Next Order',
                  icon: '🎁'
                }, {
                  points: 1000,
                  reward: 'Free Delivery (3x)',
                  icon: '🚚'
                }, {
                  points: 1500,
                  reward: 'Free Dessert',
                  icon: '🍰'
                }, {
                  points: 2000,
                  reward: '$20 Off Next Order',
                  icon: '💰'
                }].map((reward, index) => <div key={index} className="border-2 border-gray-200 rounded-2xl p-6 hover:border-primary transition-colors">
                        <div className="text-4xl mb-3">{reward.icon}</div>
                        <h3 className="font-bold text-lg mb-2">
                          {reward.reward}
                        </h3>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-textLight">
                            {reward.points} points
                          </span>
                          <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm hover:bg-primaryDark transition-colors">
                            Redeem
                          </button>
                        </div>
                      </div>)}
                  </div>
                </div>
              </div>}
            {/* Settings Tab */}
            {activeTab === 'settings' && <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-md p-6">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <BellIcon size={24} className="mr-3 text-primary" />
                    Notifications
                  </h2>
                  <div className="space-y-4">
                    {[{
                  label: 'Order Updates',
                  desc: 'Get notified about your order status'
                }, {
                  label: 'Promotions',
                  desc: 'Receive special offers and deals'
                }, {
                  label: 'New Restaurants',
                  desc: 'Know when new restaurants join'
                }, {
                  label: 'Email Newsletter',
                  desc: 'Weekly food recommendations'
                }].map((setting, index) => <div key={index} className="flex items-center justify-between p-4 bg-backgroundAlt rounded-xl">
                        <div>
                          <p className="font-medium">{setting.label}</p>
                          <p className="text-sm text-textLight">
                            {setting.desc}
                          </p>
                        </div>
                        <label className="relative inline-block w-12 h-6">
                          <input type="checkbox" defaultChecked className="sr-only peer" />
                          <div className="w-full h-full bg-gray-300 rounded-full peer-checked:bg-primary transition-colors cursor-pointer"></div>
                          <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-6"></div>
                        </label>
                      </div>)}
                  </div>
                </div>
                <div className="bg-white rounded-2xl shadow-md p-6">
                  <h2 className="text-2xl font-bold mb-6">
                    Privacy & Security
                  </h2>
                  <div className="space-y-4">
                    <button className="w-full text-left p-4 bg-backgroundAlt rounded-xl hover:bg-gray-100 transition-colors">
                      <p className="font-medium">Change Password</p>
                      <p className="text-sm text-textLight">
                        Update your password regularly
                      </p>
                    </button>
                    <button className="w-full text-left p-4 bg-backgroundAlt rounded-xl hover:bg-gray-100 transition-colors">
                      <p className="font-medium">Two-Factor Authentication</p>
                      <p className="text-sm text-textLight">
                        Add an extra layer of security
                      </p>
                    </button>
                    <button className="w-full text-left p-4 bg-backgroundAlt rounded-xl hover:bg-gray-100 transition-colors">
                      <p className="font-medium">Delete Account</p>
                      <p className="text-sm text-red-500">
                        Permanently delete your account
                      </p>
                    </button>
                  </div>
                </div>
              </div>}
          </motion.div>
        </div>
      </div>
    </div>;
};