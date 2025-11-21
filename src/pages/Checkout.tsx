import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { MapPinIcon, CreditCardIcon, ClockIcon, TruckIcon, CheckCircleIcon, ChevronRightIcon, WalletIcon, DollarSignIcon } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
export const Checkout = () => {
  const navigate = useNavigate();
  const {
    cartItems,
    getCartTotal
  } = useCart();
  const [selectedAddress, setSelectedAddress] = useState('home');
  const [selectedPayment, setSelectedPayment] = useState('card');
  const [selectedTip, setSelectedTip] = useState(3);
  const [deliveryTime, setDeliveryTime] = useState('asap');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const subtotal = getCartTotal();
  const deliveryFee = subtotal > 20 ? 0 : 2.99;
  const tax = subtotal * 0.08;
  const tip = selectedTip;
  const total = subtotal + deliveryFee + tax + tip;
  const addresses = [{
    id: 'home',
    label: 'Home',
    address: '123 Main Street, Apt 4B, Malolos, Bulacan 10001'
  }, {
    id: 'work',
    label: 'Work',
    address: '456 Office Plaza, Suite 200, Malolos, Bulacan 10002'
  }];
  const paymentMethods = [{
    id: 'card',
    label: 'Credit Card',
    detail: '•••• 4242',
    icon: CreditCardIcon
  }, {
    id: 'wallet',
    label: 'Wallet',
    detail: '$45.50 available',
    icon: WalletIcon
  }, {
    id: 'cash',
    label: 'Cash on Delivery',
    detail: 'Pay when you receive',
    icon: DollarSignIcon
  }];
  const handlePlaceOrder = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccess(true);
      setTimeout(() => {
        navigate('/account');
      }, 2000);
    }, 1500);
  };
  return <div className="min-h-screen bg-backgroundAlt pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="mb-8">
          <h1 className="heading-font text-4xl font-bold mb-2">Checkout</h1>
          <p className="text-textLight">
            Complete your order in a few simple steps
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Forms */}
          <div className="lg:col-span-2 space-y-6">
            {/* Delivery Address */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <MapPinIcon size={24} className="mr-3 text-primary" />
                Delivery Address
              </h2>
              <div className="space-y-3">
                {addresses.map(addr => <button key={addr.id} onClick={() => setSelectedAddress(addr.id)} className={`w-full text-left p-4 rounded-xl border-2 transition-all ${selectedAddress === addr.id ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-gray-300'}`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
                            {addr.label}
                          </span>
                        </div>
                        <p className="text-sm text-textDark">{addr.address}</p>
                      </div>
                      {selectedAddress === addr.id && <CheckCircleIcon size={20} className="text-primary flex-shrink-0 ml-2" />}
                    </div>
                  </button>)}
                <button className="w-full border-2 border-dashed border-gray-300 rounded-xl p-4 text-primary hover:border-primary hover:bg-primary/5 transition-all">
                  + Add New Address
                </button>
              </div>
            </motion.div>
            {/* Delivery Time */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.1
          }} className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <ClockIcon size={24} className="mr-3 text-primary" />
                Delivery Time
              </h2>
              <div className="grid grid-cols-2 gap-3">
                <button onClick={() => setDeliveryTime('asap')} className={`p-4 rounded-xl border-2 transition-all ${deliveryTime === 'asap' ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-gray-300'}`}>
                  <p className="font-bold">ASAP</p>
                  <p className="text-sm text-textLight">20-25 min</p>
                </button>
                <button onClick={() => setDeliveryTime('scheduled')} className={`p-4 rounded-xl border-2 transition-all ${deliveryTime === 'scheduled' ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-gray-300'}`}>
                  <p className="font-bold">Schedule</p>
                  <p className="text-sm text-textLight">Choose time</p>
                </button>
              </div>
            </motion.div>
            {/* Payment Method */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2
          }} className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <CreditCardIcon size={24} className="mr-3 text-primary" />
                Payment Method
              </h2>
              <div className="space-y-3">
                {paymentMethods.map(method => <button key={method.id} onClick={() => setSelectedPayment(method.id)} className={`w-full text-left p-4 rounded-xl border-2 transition-all ${selectedPayment === method.id ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-gray-300'}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                          <method.icon size={24} className="text-primary" />
                        </div>
                        <div>
                          <p className="font-bold">{method.label}</p>
                          <p className="text-sm text-textLight">
                            {method.detail}
                          </p>
                        </div>
                      </div>
                      {selectedPayment === method.id && <CheckCircleIcon size={20} className="text-primary" />}
                    </div>
                  </button>)}
              </div>
            </motion.div>
            {/* Tip */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.3
          }} className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-2xl mr-3">💝</span>
                Add a Tip for Your Courier
              </h2>
              <div className="grid grid-cols-4 gap-3 mb-4">
                {[0, 2, 3, 5].map(amount => <button key={amount} onClick={() => setSelectedTip(amount)} className={`py-3 rounded-xl border-2 transition-all ${selectedTip === amount ? 'border-primary bg-primary text-white' : 'border-gray-200 hover:border-gray-300'}`}>
                    <p className="font-bold">
                      {amount === 0 ? 'No tip' : `$${amount}`}
                    </p>
                  </button>)}
              </div>
              <input type="number" placeholder="Custom amount" className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl outline-none focus:border-primary transition-colors" onChange={e => setSelectedTip(parseFloat(e.target.value) || 0)} />
            </motion.div>
            {/* Special Instructions */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.4
          }} className="bg-white rounded-2xl shadow-md p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <span className="text-2xl mr-3">📝</span>
                Special Instructions
              </h2>
              <textarea value={specialInstructions} onChange={e => setSpecialInstructions(e.target.value)} placeholder="Any special requests for the restaurant or courier?" className="w-full p-4 border-2 border-gray-200 rounded-xl outline-none focus:border-primary transition-colors resize-none" rows={4} />
            </motion.div>
          </div>
          {/* Right Column - Order Summary */}
          <div className="lg:col-span-1">
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} animate={{
            opacity: 1,
            x: 0
          }} className="bg-white rounded-2xl shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>
              {/* Items */}
              <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                {cartItems.map(item => <div key={item.id} className="flex gap-3">
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                    <div className="flex-1">
                      <p className="font-medium text-sm">{item.name}</p>
                      <p className="text-xs text-textLight mb-1">
                        {item.restaurant}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-textLight">
                          Qty: {item.quantity}
                        </span>
                        <span className="font-bold text-primary">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>)}
              </div>
              {/* Price Breakdown */}
              <div className="space-y-3 pt-6 border-t border-gray-200">
                <div className="flex justify-between text-sm">
                  <span className="text-textLight">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-textLight">Delivery Fee</span>
                  <span className="font-medium">
                    {deliveryFee === 0 ? <span className="text-green-600">FREE</span> : `$${deliveryFee.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-textLight">Tax</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-textLight">Courier Tip</span>
                  <span className="font-medium">${tip.toFixed(2)}</span>
                </div>
              </div>
              <div className="flex justify-between items-center pt-6 border-t border-gray-200 mb-6">
                <span className="text-lg font-bold">Total</span>
                <span className="text-2xl font-bold text-primary">
                  ${total.toFixed(2)}
                </span>
              </div>
              <motion.button whileHover={{
              scale: isLoading ? 1 : 1.02
            }} whileTap={{
              scale: isLoading ? 1 : 0.98
            }} onClick={handlePlaceOrder} disabled={isLoading} className="w-full bg-primary text-white font-bold py-4 rounded-2xl shadow-lg hover:bg-primaryDark transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed">
                {isLoading ? (
                  <>
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                    <span className="ml-2">Processing...</span>
                  </>
                ) : (
                  <>
                    Place Order
                    <ChevronRightIcon size={20} className="ml-2" />
                  </>
                )}
              </motion.button>
              <p className="text-xs text-center text-textLight mt-4">
                By placing your order, you agree to our Terms & Conditions
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      {showSuccess && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div initial={{ scale: 0, rotate: -180 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: 'spring', duration: 0.8 }} className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, type: 'spring', stiffness: 200 }} className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <motion.div initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5, duration: 0.5 }}>
                <CheckCircleIcon size={48} className="text-green-600" />
              </motion.div>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="text-3xl font-bold text-textDark mb-3">
              Order Placed!
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="text-textLight mb-6">
              Your order has been successfully placed. We'll prepare it right away!
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="flex items-center justify-center gap-2 text-sm text-textLight">
              <TruckIcon size={18} className="text-primary" />
              <span>Expected delivery in 20-25 minutes</span>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </div>;
};