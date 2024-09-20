import { useContext, useState } from "react";
import { CartContext } from "../context/cartContext";

function AddToCart() {

  const { cartItems, removeItemFromCart, updateItemToCart } = useContext(CartContext);

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen container mx-auto py-10">
      <div className="max-w-4xl mx-auto p-5 shadow-lg rounded-lg">
        <h1 className="text-2xl font-semibold text-gray-700 mb-5">Shopping Cart</h1>

        {cartItems.length > 0 ? (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="mb-6 p-4 border-b">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img className="w-20 h-20 object-cover rounded-lg mr-4" src={item.thumbnail} alt={item.category} />
                    <div>
                      <h2 className="text-lg font-semibold">{item.title}</h2>
                      <p className="text-gray-600">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <p className="text-lg font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                </div>

                {/* quantity and remove options */}
                <div className="flex justify-between items-center mt-4">  
                  <div className="flex items-center">
                    <div className="flex items-center">
                      <div className="flex items-center space-x-2">
                        <button
                          className="bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition duration-300"
                          onClick={() => {
                            if (item.quantity <= 1) {
                              button = disabled;
                            } else {
                              updateItemToCart(item.id, 'minus');
                            }
                          }}
                        >
                          −
                        </button>
                        <input
                          type="number"
                          value={item.quantity}
                          className="hover:cursor-not-allowed py-1 px-1 text-center text-lg border border-gray-300 rounded-md shadow-sm focus:outline-none"
                          readOnly
                        />
                        <button
                          className="bg-green-500 text-white px-3 py-1 rounded-full hover:bg-green-600 transition duration-300"
                          onClick={() => updateItemToCart(item.id, 'plus')}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    className="ml-4 py-1 px-3 rounded-lg border border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                    onClick={() => removeItemFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <div className="flex justify-between items-center mt-6">
              <h2 className="text-xl font-semibold"></h2>
              <p className="text-xl font-semibold">Total Price : ${totalPrice.toFixed(2)}</p>
            </div>

            <div className="mt-8 text-right">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                Proceed to Checkout
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}
      </div>
    </div>
  )
}

export default AddToCart;

//  <> </>
// () => {}
// ? :  $