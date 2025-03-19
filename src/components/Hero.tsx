
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        if (scrolled < window.innerHeight) {
          heroRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
          heroRef.current.style.opacity = `${1 - scrolled / 1000}`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-burgundy-950">
      <div 
        ref={heroRef}
        className="absolute inset-0 bg-gradient-to-r from-burgundy-950 to-burgundy-900"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute w-96 h-96 rounded-full bg-hotpink-500 blur-3xl -top-20 -left-20"></div>
          <div className="absolute w-96 h-96 rounded-full bg-burgundy-700 blur-3xl bottom-10 right-10"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full pt-16">
          <div className="text-white space-y-6 max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight heading-animation">
              A VOICE FOR OUR <span className="text-hotpink-500">COMMUNITY</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-white/90 subheading-animation">
              FREE OF PARTY LINES AND VESTED INTERESTS
            </h2>
            <p className="text-lg sm:text-xl leading-relaxed text-white/80 text-animation">
              Advocating for people who feel forgotten, pushing for more 
              ambitious action from our government, and holding decision 
              makers to account.
            </p>
            <div className="pt-4 button-animation">
              <Link to="/subscribe" className="inline-block bg-hotpink-600 hover:bg-hotpink-700 text-white font-medium px-6 py-3 rounded-md transition-all button-hover">
                SUBSCRIBE
              </Link>
            </div>
          </div>
          <div className="hidden lg:block animate-fade-in image-container">
            <div className="bg-gray-200 h-[500px] w-full rounded-lg relative overflow-hidden">
              {/* This would be replaced with a proper image in a real implementation */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-burgundy-900/70 to-burgundy-950/70">
                <span className="text-white/30 text-lg">Profile Image</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white/70 text-sm mb-2">Scroll Down</span>
        <svg className="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
