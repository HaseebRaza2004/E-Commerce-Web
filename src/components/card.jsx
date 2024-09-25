import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import { ShoppingCartOutlined } from "@ant-design/icons";


function Cards({ item }) {

    const { isItemAdded } = useContext(CartContext);
    
    const isAdded = isItemAdded(item.id) ? true : false;
    
    const { thumbnail, category, title, price, id } = item

    return (
        <Link to={`/products/${id}`} className="lg:w-1/4 md:w-1/2 p-4 w-full shadow">
            <div>
                <div className="block relative h-48 rounded overflow-hidden">
                    {
                        isAdded && (
                            <ShoppingCartOutlined className="text-3xl absolute top-1 right-1" />
                        )}
                    <img
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={thumbnail}
                    />
                </div>
                <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        {category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                        {title}
                    </h2>
                    <p className="mt-1">{price}</p>
                </div>
            </div>
        </Link>
    )
}

export default Cards;