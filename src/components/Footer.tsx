
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-burgundy-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-10">
          <div className="inline-block">
            <Link to="/" className="flex flex-col items-center" aria-label="Thomas Emerson">
              <div className="text-center mb-6">
                <span className="text-2xl uppercase tracking-wider font-bold">INDEPENDENTS</span>
                <br />
                <span className="text-hotpink-500 text-2xl font-bold uppercase tracking-wider">FOR CANBERRA</span>
              </div>
            </Link>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-hotpink-500 transition-colors social-icon">
                <Instagram size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-hotpink-500 transition-colors social-icon">
                <Facebook size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-hotpink-500 transition-colors social-icon">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-burgundy-800 pt-8 max-w-3xl mx-auto text-center text-white/80 text-sm">
          <p className="mb-6">
            I acknowledge all Traditional Custodians of Country and their many generations of stewardship over the beautiful place we call home. I deeply respect and value our local Elders' relentless march toward reconciliation, and share their commitment to Closing the Gap.
          </p>
          <p className="text-white/60">
            Authorised by Thomas Emerson MLA
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
