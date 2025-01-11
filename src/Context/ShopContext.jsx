import React, { createContext, useState } from 'react';
import iphone_14_purple_color from '../Components/Assets/iphone_14_purple_color.jpg';
import iPhone_16_teal_color from '../Components/Assets/iPhone_16_teal_color.jpg';
import iPhone_16_white_color from '../Components/Assets/iPhone_16_white_color.jpg';

export const ShopContext = createContext();

const getDefaultCart = (products) => {
    let cart = {};
    for (let index = 0; index < products.length; index++) {
        cart[products[index].id] = 0;
    }
    return cart;
};

const ShopContextProvider = ({ children }) => {
    const [all_product, setAllProduct] = useState([
        { id: 2, name: 'Apple iPhone 14, 128GB, Purple - Unlocked (Renewed Premium)', new_price: '660.00', old_price: '620.50', image: iphone_14_purple_color },
        { id: 3, name: 'Boost Mobile | Apple iPhone 16 Plus (512 GB) - Teal [Locked]. Requires Unlimited Plan. Apple Intelligence.', new_price: '1160.00', old_price: '1200.50', image: iPhone_16_teal_color },
        { id: 4, name: 'Boost Mobile | Apple iPhone 16 Plus (256 GB) - White [Locked]. Requires Unlimited Plan. Apple Intelligence.', new_price: '1100.00', old_price: '1150.00', image: iPhone_16_white_color },
    ]);

    const [cartItems, setCartItems] = useState(() => getDefaultCart([
        { id: 2, name: 'Apple iPhone 14, 128GB, Purple - Unlocked (Renewed Premium)', new_price: '660.00', old_price: '620.50', image: iphone_14_purple_color },
        { id: 3, name: 'Boost Mobile | Apple iPhone 16 Plus (512 GB) - Teal [Locked]. Requires Unlimited Plan. Apple Intelligence.', new_price: '1160.00', old_price: '1200.50', image: iPhone_16_teal_color },
        { id: 4, name: 'Boost Mobile | Apple iPhone 16 Plus (256 GB) - White [Locked]. Requires Unlimited Plan. Apple Intelligence.', new_price: '1100.00', old_price: '1150.00', image: iPhone_16_white_color },
    ]));

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: Math.max(prev[itemId] - 1, 0) }));
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                if (itemInfo) {
                    totalAmount += parseFloat(itemInfo.new_price) * cartItems[item];
                }
            }
        }
        return totalAmount;
    };

    const getTotalCartItems = () => {
        let totalItem = 0 
        for (const item in cartItems)
        {
            if(cartItems[item]>0)
            {
                totalItem += cartItems[item];
            }

        }
        return totalItem;
    }

    const contextValue = { getTotalCartItems, getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart, setAllProduct };

    return (
        <ShopContext.Provider value={contextValue}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
