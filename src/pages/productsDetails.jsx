import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { CartContext } from "../context/cartContext";
import { Image } from "antd";

function ProdutsDetails() {

  const { addItemToCart, isItemAdded } = useContext(CartContext);

  const navigate = useNavigate();
  const { id } = useParams();
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  // console.log(id);

  // Show Product Throw Id 
  useEffect(() => {
    setNotFound(false);
    axios.get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        // console.log(res);
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        // console.log(err);
        setNotFound(true);
        setLoading(false);
      })
  }, []);

  const { brand, title, rating, description, warrantyInformation, shippingInformation, price, thumbnail } = products;

  return (
    <div className="container mx-auto">

      {
        loading ?
          <h1 className="text-center m-5">Loading...</h1>
          :
          notFound ?
            navigate('/notFound')
            :
            <section className="text-gray-600 body-font overflow-hidden">
              <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                  <Image
                    alt="ecommerce"
                    className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                    src={thumbnail}
                  />
                  <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 className="text-sm title-font text-gray-500 tracking-widest">
                      {brand}
                    </h2>
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                      {title}
                    </h1>
                    <div className="flex mb-4">
                      <span className="flex items-center">
                        <svg
                          fill="currentColor"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          className="w-4 h-4 text-indigo-500"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        <span className="text-gray-600 ml-3">{rating}</span>
                      </span>
                    </div>
                    <p className="leading-relaxed">
                      {description}
                    </p>
                    <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                      <div className="flex">
                        <span className="mr-3">Warranty : {warrantyInformation}</span>
                      </div>
                      <div className="flex ml-6 items-center">
                        <span className="mr-3">Shipping : {shippingInformation}</span>
                      </div>
                    </div>
                    <div className="flex">
                      <span className="title-font font-medium text-2xl text-gray-900">
                        ${price}
                      </span>
                      <button onClick={() => { addItemToCart(products) }} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                        {
                          isItemAdded(products.id) ?
                            `Added (${isItemAdded(products.id).quantity})`
                            : `Add to Cart`
                        }
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
      }

    </div>
  )
}

export default ProdutsDetails;


//  <> </>
// () => {}
// ? :  $  