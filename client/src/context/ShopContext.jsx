import { createContext, useContext, useState } from "react";
import { products } from "../assets/assets.js";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

export const ShopContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const currency = "$";
  const shippingFee = 10;

  const addToCart = (product, selectSize) => {
    setCartItems((prev) => {
      return [
        ...prev,
        {
          id: product._id,
          name: product.name,
          price: product.price,
          image: product.image,
          size: selectSize,
          quantity: 1,
        },
      ];
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
      ),
    );
  };

  const value = {
    currency,
    products,
    navigate,
    addToCart,
    cartItems,
    shippingFee,
    removeFromCart,
    increaseQuantity,
    decreseQuantity,
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export const useShopContext = () => {
  return useContext(ShopContext);
};
