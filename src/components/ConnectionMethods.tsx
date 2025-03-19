
import { Calendar, Mail, FileText, Bell } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const ConnectionMethods = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section 
      ref={ref} 
      className="py-20 bg-burgundy-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-16 transition-all duration-700 transform ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          HOW I STAY CONNECTED
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ConnectionCard 
            icon={<Calendar className="h-12 w-12 text-white" />}
            title="Hosting fortnightly mobile offices and quarterly community forums."
            buttonText="SEE EVENTS"
            buttonLink="/events"
            delay={1}
            isVisible={inView}
          />
          
          <ConnectionCard 
            icon={<Mail className="h-12 w-12 text-white" />}
            title="Circulating regular community updates via my mailing list."
            buttonText="SEE UPDATES"
            buttonLink="/updates"
            delay={2}
            isVisible={inView}
          />
          
          <ConnectionCard 
            icon={<FileText className="h-12 w-12 text-white" />}
            title="Publishing an explanation of all significant votes on my website."
            buttonText="SEE VOTING RECORD"
            buttonLink="/voting-record"
            delay={3}
            isVisible={inView}
          />
          
          <ConnectionCard 
            icon={<Bell className="h-12 w-12 text-white" />}
            title="Sharing the day-to-day happenings of my office on social media."
            socialLinks={true}
            delay={4}
            isVisible={inView}
          />
        </div>
      </div>
    </section>
  );
};

interface ConnectionCardProps {
  icon: React.ReactNode;
  title: string;
  buttonText?: string;
  buttonLink?: string;
  socialLinks?: boolean;
  delay: number;
  isVisible: boolean;
}

const ConnectionCard = ({ 
  icon, 
  title, 
  buttonText, 
  buttonLink, 
  socialLinks, 
  delay, 
  isVisible 
}: ConnectionCardProps) => {
  return (
    <div 
      className={`flex flex-col items-center text-center transition-all duration-700 ease-in-out transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${delay * 100}ms` }}
    >
      <div className="mb-5">
        {icon}
      </div>
      <p className="text-lg mb-6">{title}</p>
      
      {buttonText && buttonLink && (
        <Link 
          to={buttonLink} 
          className="mt-auto bg-hotpink-600 hover:bg-hotpink-700 text-white px-6 py-3 rounded-md inline-block transition-all button-hover"
        >
          {buttonText}
        </Link>
      )}
      
      {socialLinks && (
        <div className="mt-auto flex space-x-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-hotpink-600 hover:bg-hotpink-700 p-3 rounded-md inline-flex items-center justify-center transition-all button-hover">
            <Instagram size={24} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-hotpink-600 hover:bg-hotpink-700 p-3 rounded-md inline-flex items-center justify-center transition-all button-hover">
            <Facebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-hotpink-600 hover:bg-hotpink-700 p-3 rounded-md inline-flex items-center justify-center transition-all button-hover">
            <Twitter size={24} />
          </a>
        </div>
      )}
    </div>
  );
};

export default ConnectionMethods;
