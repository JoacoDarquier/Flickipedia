import { Link } from "react-router-dom";

export function Navigation() {
    return (
        <nav className="bg-gray-900 p-4 mb-4">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
                <Link to="/titles" className="text-3xl font-bold text-red-600 hover:text-red-500 mb-2 sm:mb-0">
                    FlickiPedia
                </Link>
                <Link 
                    to="/titles-create" 
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                    Create Title
                </Link>
            </div>
        </nav>
    );
}