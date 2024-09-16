import { ShoppingOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";


function Header() {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <ShoppingOutlined className="text-4xl" />
                    <span className="ml-3 text-xl">QuickMart</span>
                </div>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                    <Link to={'/products'} className="mr-5 hover:text-gray-900 hover:underline hover:cursor-pointer">Products</Link>
                    <Link to={'/orders'} className="mr-5 hover:text-gray-900 hover:underline hover:cursor-pointer">Orders</Link>
                    <Link to={'/about'} className="mr-5 hover:text-gray-900 hover:underline hover:cursor-pointer">About Us</Link>
                </nav>
                <Link to={'/auth'} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                    Login
                    <ArrowRightOutlined className="ml-2" />
                </Link>
            </div>
        </header>
    )
};

export default Header;