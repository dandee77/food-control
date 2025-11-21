import React, { useState, createContext, useContext } from 'react';
interface CartItem {
  id: number;
  name: string;
  restaurant: string;
  price: number;
  quantity: number;
  image: string;
  customizations?: {
    size?: string;
    extras?: string[];
    drink?: string;
    instructions?: string;
  };
}
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  getCartTotal: () => number;
  getCartCount: () => number;
}
const CartContext = createContext<CartContextType | undefined>(undefined);
export const CartProvider: React.FC<{
  children: ReactNode;
}> = ({
  children
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([{
    id: 1,
    name: 'Margherita Pizza',
    restaurant: "Tony's Pizzeria",
    price: 750,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=200&h=200&fit=crop',
    customizations: {
      size: 'Medium',
      extras: ['Extra Cheese']
    }
  }, {
    id: 2,
    name: 'Spicy Tuna Roll',
    restaurant: 'Sakura Sushi',
    price: 825,
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=200&h=200&fit=crop'
  }]);
  const [cartOpen, setCartOpen] = useState(false);
  const addToCart = (item: CartItem) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? {
          ...i,
          quantity: i.quantity + item.quantity
        } : i);
      }
      return [...prev, item];
    });
  };
  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };
  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems(prev => prev.map(item => item.id === id ? {
      ...item,
      quantity
    } : item));
  };
  const clearCart = () => {
    setCartItems([]);
  };
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };
  return <CartContext.Provider value={{
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartOpen,
    setCartOpen,
    getCartTotal,
    getCartCount
  }}>
      {children}
    </CartContext.Provider>;
};
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};