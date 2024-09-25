import { ShoppingOutlined, ArrowRightOutlined, UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Avatar, Badge } from "antd";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import { AuthContext } from "../context/authContext";


function Header() {

    const { cartItems } = useContext(CartContext);
    const { user } = useContext(AuthContext);

    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <ShoppingOutlined className="text-4xl" />
                    <span className="ml-3 text-xl">QuickMart</span>
                </div>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                    <Link to={'/products'} className="mr-5 hover:text-gray-900 hover:underline hover:cursor-pointer">Products</Link>
                    <Link to={'/about'} className="mr-5 hover:text-gray-900 hover:underline hover:cursor-pointer">About Us</Link>
                </nav>
                {
                    user?.isLogin ? (
                        <div className="inline-flex items-center py-1 px-3 mt-4 md:mt-0">
                            <Link to={'/profile'}>
                                <Avatar className="m-2 cursor-pointer" size={40} icon={<UserOutlined />} />
                            </Link>
                            <Link to={'/cart'}>
                                <Badge count={cartItems.length}>
                                    <ShoppingCartOutlined className="text-4xl cursor-pointer" />
                                </Badge>
                            </Link>
                        </div>
                    ) : (
                        <Link to={'/auth'} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                            Login
                            <ArrowRightOutlined className="ml-2" />
                        </Link>
                    )
                }
            </div>
        </header>
    )
};

export default Header;