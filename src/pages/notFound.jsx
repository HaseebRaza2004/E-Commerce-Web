import { Link } from "react-router-dom";

function NotFound() {

    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
                <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                <p className="text-lg mb-8">Sorry, the page you're looking for does not exist.</p>
                <Link to={'/'}
                    className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors"
                >
                    Go to Homepage
                </Link>
            </div>
        </>
    )
}

export default NotFound;