
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-grow flex items-center justify-center bg-white py-20">
        <div className="text-center max-w-lg px-4">
          <h1 className="text-6xl font-bold text-burgundy-950 mb-4">404</h1>
          <p className="text-2xl text-burgundy-900 mb-8">The page you're looking for can't be found.</p>
          <Link 
            to="/" 
            className="bg-hotpink-600 hover:bg-hotpink-700 text-white font-medium px-6 py-3 rounded-md inline-block transition-all hover:shadow-lg transform hover:-translate-y-1 duration-300"
          >
            Return to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
