import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { XIcon, MinusIcon, PlusIcon, ShoppingBagIcon, TrashIcon } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
export const CartSidebar = () => {
  const navigate = useNavigate();
  const {
    cartItems,
    cartOpen,
    setCartOpen,
    updateQuantity,
    removeFromCart,
    getCartTotal,
    getCartCount
  } = useCart();
  const subtotal = getCartTotal();
  const deliveryFee = subtotal > 20 ? 0 : 2.99;
  const tax = subtotal * 0.08;
  const total = subtotal + deliveryFee + tax;
  const handleCheckout = () => {
    setCartOpen(false);
    navigate('/checkout');
  };
  return <>
      {/* Backdrop */}
      <AnimatePresence>
        {cartOpen && <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} exit={{
        opacity: 0
      }} onClick={() => setCartOpen(false)} className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />}
      </AnimatePresence>
      {/* Sidebar */}
      <AnimatePresence>
        {cartOpen && <motion.div initial={{
        x: '100%'
      }} animate={{
        x: 0
      }} exit={{
        x: '100%'
      }} transition={{
        type: 'spring',
        damping: 25,
        stiffness: 200
      }} className="fixed right-0 top-0 h-full w-full sm:w-[450px] bg-white shadow-2xl z-50 flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-primaryDark text-white p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <ShoppingBagIcon size={24} className="mr-3" />
                  <h2 className="text-2xl font-bold">Your Order</h2>
                </div>
                <button onClick={() => setCartOpen(false)} className="p-2 hover:bg-white/20 rounded-full transition-colors">
                  <XIcon size={24} />
                </button>
              </div>
              <p className="text-white/90 text-sm">
                {getCartCount()} {getCartCount() === 1 ? 'item' : 'items'} in
                your cart
              </p>
            </div>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cartItems.length === 0 ? <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <ShoppingBagIcon size={48} className="text-gray-400" />
                  </div>
                  <h3 className="text-xl font-bold text-textDark mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-textLight mb-6">
                    Add some delicious items to get started!
                  </p>
                  <button onClick={() => {
              setCartOpen(false);
              navigate('/shop');
            }} className="btn-primary">
                    Browse Menu
                  </button>
                </div> : <>
                  {cartItems.map((item, index) => <motion.div key={item.id} initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} exit={{
              opacity: 0,
              x: 100
            }} transition={{
              delay: index * 0.05
            }} className="bg-backgroundAlt rounded-2xl p-4 relative group">
                      <div className="flex gap-4">
                        <img src={item.image} alt={item.name} className="w-20 h-20 rounded-xl object-cover" />
                        <div className="flex-1">
                          <h3 className="font-bold text-textDark mb-1">
                            {item.name}
                          </h3>
                          <p className="text-xs text-textLight mb-2">
                            {item.restaurant}
                          </p>
                          {/* Customizations */}
                          {item.customizations && <div className="text-xs text-textLight mb-2 space-y-1">
                              {item.customizations.size && <p>Size: {item.customizations.size}</p>}
                              {item.customizations.extras && item.customizations.extras.length > 0 && <p>
                                    Extras:{' '}
                                    {item.customizations.extras.join(', ')}
                                  </p>}
                            </div>}
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-primary">
                              ${(item.price * item.quantity).toFixed(2)}
                            </span>
                            {/* Quantity Controls */}
                            <div className="flex items-center bg-white rounded-lg shadow-sm">
                              <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 hover:bg-gray-50 rounded-l-lg transition-colors">
                                <MinusIcon size={14} className="text-primary" />
                              </button>
                              <span className="px-3 text-sm font-semibold">
                                {item.quantity}
                              </span>
                              <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 hover:bg-gray-50 rounded-r-lg transition-colors">
                                <PlusIcon size={14} className="text-primary" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Remove Button */}
                      <button onClick={() => removeFromCart(item.id)} className="absolute top-2 right-2 p-2 bg-red-50 text-red-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-100">
                        <TrashIcon size={16} />
                      </button>
                    </motion.div>)}
                </>}
            </div>
            {/* Footer - Order Summary */}
            {cartItems.length > 0 && <div className="border-t border-gray-200 p-6 space-y-4 bg-backgroundAlt">
                <div className="space-y-2">
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
                  {deliveryFee > 0 && <p className="text-xs text-amber-600 bg-amber-50 p-2 rounded-lg">
                      Add ${(20 - subtotal).toFixed(2)} more for free delivery!
                    </p>}
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-300">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-2xl font-bold text-primary">
                    ${total.toFixed(2)}
                  </span>
                </div>
                <motion.button whileHover={{
            scale: 1.02
          }} whileTap={{
            scale: 0.98
          }} onClick={handleCheckout} className="w-full bg-primary text-white font-bold py-4 rounded-2xl shadow-lg hover:bg-primaryDark transition-colors">
                  Proceed to Checkout
                </motion.button>
              </div>}
          </motion.div>}
      </AnimatePresence>
    </>;
};