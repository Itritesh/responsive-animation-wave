
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const releases = [
  {
    id: 1,
    title: "Nowhere to Turn for First Nations Women in Canberra",
    date: "March 07, 2025",
    excerpt: "Tanya Keed, former Chair of the ACT Aboriginal and Torres Strait Islander Elected Body, and Thomas Emerson MLA, Independent Member for Kurrajong, are today calling on the ACT Government to invest in establishing a culturally safe family and domestic violence crisis service",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Action Needed on Food Relief",
    date: "February 04, 2025",
    excerpt: "Independent MLA Thomas Emerson will use his first Private Member's Motion in the Assembly today to call for the development and delivery of a coordinated ACT Food Relief Action Plan.",
    imageUrl: "/placeholder.svg",
  },
  {
    id: 3,
    title: "Step Toward Strata Commissioner",
    date: "January 21, 2025",
    excerpt: "Independent MLA Thomas Emerson has applauded today's announcement of a Legislative Assembly Committee inquiry into the management of strata properties.",
    imageUrl: "/placeholder.svg",
  }
];

const MediaReleases = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section 
      ref={ref}
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className={`text-3xl sm:text-4xl font-bold text-burgundy-950 transition-all duration-700 transform ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}>
            MEDIA <span className="text-hotpink-600">RELEASES</span>
          </h2>
          <Link 
            to="/media-releases" 
            className={`text-burgundy-950 hover:text-hotpink-600 transition-colors flex items-center transition-all duration-700 transform ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            See all Media Releases <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {releases.map((release, index) => (
            <ReleaseCard 
              key={release.id} 
              release={release} 
              index={index} 
              isVisible={inView} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ReleaseCardProps {
  release: {
    id: number;
    title: string;
    date: string;
    excerpt: string;
    imageUrl: string;
  };
  index: number;
  isVisible: boolean;
}

const ReleaseCard = ({ release, index, isVisible }: ReleaseCardProps) => {
  return (
    <div 
      className={`bg-white rounded-lg overflow-hidden shadow-md transition-all duration-700 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="bg-gray-200 h-48 image-container">
        <div className="h-full w-full rounded-t-lg relative">
          {/* This would be replaced with a proper image in a real implementation */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-gray-500 text-lg">Image</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-burgundy-950 mb-2">{release.title}</h3>
        <p className="text-gray-500 mb-4">{release.date}</p>
        <p className="text-gray-700 mb-6 line-clamp-3">{release.excerpt}</p>
        <Link 
          to={`/media-releases/${release.id}`} 
          className="text-hotpink-600 hover:text-hotpink-700 font-medium inline-flex items-center transition-colors"
        >
          READ MORE <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
  );
};

export default MediaReleases;
