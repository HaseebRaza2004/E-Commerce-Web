import { data } from "autoprefixer";
import { createContext, useEffect, useState } from "react";


export const CartContext = createContext();

function CartContextProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(true);

    useEffect(() => {
        const items = localStorage.getItem("cartItems");
        if (items) {
            setCartItems([...JSON.parse(items)]);
        }
        setIsLoaded(false);
    }, []);

    useEffect(() => {
        if (!isLoaded) {
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
        }
    }, [cartItems]);

    function addItemToCart(item) {
        const arr = cartItems;
        const itemIndex = cartItems.findIndex((data) => data.id == item.id);
        if (itemIndex == -1) {
            arr.push({ ...item, quantity: 1 });
        } else {
            arr[itemIndex].quantity++;
        }
        setCartItems([...arr]);
    };

    function updateItemToCart(id, type) {
        const arr = [...cartItems];
        const itemIndex = cartItems.findIndex((data) => data.id == id);
        if (type == 'plus') {
            arr[itemIndex].quantity++;
        } else {
            arr[itemIndex].quantity--;
        }
        setCartItems([...arr]);
    }

    function removeItemFromCart(id) {
        const arr = cartItems;
        const itemIndex = cartItems.findIndex((data) => data.id == id);
        arr.splice(itemIndex, 1);
        setCartItems([...arr]);
    };

    function clearCart(id) {
        setCartItems([]);
      }

    function isItemAdded(id) {
        const arr = cartItems;
        const itemIndex = cartItems.findIndex((data) => data.id == id);
        if (itemIndex == -1) {
            return null;
        } else {
            return arr[itemIndex];
        }
    };

    return (
        <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart, updateItemToCart, isItemAdded, clearCart }}>{children}</CartContext.Provider>
    )
};

export default CartContextProvider;


//  <> </>
// () => {}
// ? :  $