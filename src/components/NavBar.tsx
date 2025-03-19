
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-burgundy-950/95 backdrop-blur-md py-2 shadow-md' : 'bg-burgundy-950 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-2"
              aria-label="Home"
            >
              <div className="text-white font-bold">
                <span className="text-xl sm:text-2xl uppercase tracking-wider">THOMAS</span>
                <br />
                <span className="text-hotpink-500 text-xl sm:text-2xl font-bold uppercase tracking-wider">EMERSON</span>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="bg-hotpink-500 text-white text-xs px-2 py-0.5 rounded">MLA</span>
                  <span className="text-white text-xs sm:text-sm">INDEPENDENT MEMBER FOR KURRAJONG</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/voting-record" className="text-white hover:text-hotpink-500 transition-colors nav-link py-2">
              VOTING RECORD
            </Link>
            <Link to="/media-releases" className="text-white hover:text-hotpink-500 transition-colors nav-link py-2">
              MEDIA RELEASES
            </Link>
            <Link to="/events" className="text-white hover:text-hotpink-500 transition-colors nav-link py-2">
              EVENTS
            </Link>
            <Link to="/updates" className="text-white hover:text-hotpink-500 transition-colors nav-link py-2">
              UPDATES
            </Link>
            <Link to="/contact" className="text-white hover:text-hotpink-500 transition-colors nav-link py-2">
              GET IN TOUCH
            </Link>
            <button className="bg-hotpink-600 hover:bg-hotpink-700 text-white px-4 py-2 rounded-md transition-all hover:shadow-lg transform hover:-translate-y-0.5 duration-300">
              SUBSCRIBE
            </button>
            <div className="flex items-center space-x-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-hotpink-500 transition-colors social-icon">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-hotpink-500 transition-colors social-icon">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-hotpink-500 transition-colors social-icon">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMobileMenu}
              className="text-white p-2 rounded-md focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-burgundy-950 z-50 overflow-y-auto transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button 
            onClick={toggleMobileMenu}
            className="text-white p-2 rounded-md focus:outline-none"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-6 pt-8 pb-12 px-4">
          <Link 
            to="/" 
            className="flex items-center space-x-2 mb-8"
            onClick={toggleMobileMenu}
          >
            <div className="text-white font-bold">
              <span className="text-2xl uppercase tracking-wider">THOMAS</span>
              <br />
              <span className="text-hotpink-500 text-2xl font-bold uppercase tracking-wider">EMERSON</span>
              <div className="flex items-center space-x-2 mt-1">
                <span className="bg-hotpink-500 text-white text-xs px-2 py-0.5 rounded">MLA</span>
                <span className="text-white text-sm">INDEPENDENT MEMBER</span>
              </div>
            </div>
          </Link>
          <Link 
            to="/voting-record" 
            className="w-full text-white hover:text-hotpink-500 text-xl py-3 text-center border-b border-gray-700"
            onClick={toggleMobileMenu}
          >
            VOTING RECORD
          </Link>
          <Link 
            to="/media-releases" 
            className="w-full text-white hover:text-hotpink-500 text-xl py-3 text-center border-b border-gray-700"
            onClick={toggleMobileMenu}
          >
            MEDIA RELEASES
          </Link>
          <Link 
            to="/events" 
            className="w-full text-white hover:text-hotpink-500 text-xl py-3 text-center border-b border-gray-700"
            onClick={toggleMobileMenu}
          >
            EVENTS
          </Link>
          <Link 
            to="/updates" 
            className="w-full text-white hover:text-hotpink-500 text-xl py-3 text-center border-b border-gray-700"
            onClick={toggleMobileMenu}
          >
            UPDATES
          </Link>
          <Link 
            to="/contact" 
            className="w-full text-white hover:text-hotpink-500 text-xl py-3 text-center border-b border-gray-700"
            onClick={toggleMobileMenu}
          >
            GET IN TOUCH
          </Link>
          <button className="bg-hotpink-600 hover:bg-hotpink-700 text-white px-6 py-3 rounded-md transition-all w-full hover:shadow-lg mt-4">
            SUBSCRIBE
          </button>
          <div className="flex items-center space-x-8 mt-8">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-hotpink-500 transition-colors social-icon">
              <Instagram size={28} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-hotpink-500 transition-colors social-icon">
              <Facebook size={28} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-hotpink-500 transition-colors social-icon">
              <Twitter size={28} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
