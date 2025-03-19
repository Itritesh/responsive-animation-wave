
import { ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const ValueStatement = () => {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section 
      ref={sectionRef}
      className={`py-20 bg-white transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-burgundy-950 mb-12">
          WHAT I <span className="text-hotpink-600">STAND FOR:</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <ul className="space-y-6">
              {valueItems.slice(0, 5).map((item, index) => (
                <ValueItem 
                  key={index} 
                  {...item} 
                  index={index} 
                  isVisible={inView} 
                />
              ))}
            </ul>
          </div>
          
          <div className="hidden md:block bg-gray-200 rounded-lg image-container">
            <div className="h-full w-full rounded-lg relative">
              {/* This would be replaced with a proper image in a real implementation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-500 text-lg">Profile Image</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <ul className="space-y-6">
            {valueItems.slice(5).map((item, index) => (
              <ValueItem 
                key={index + 5} 
                {...item} 
                index={index + 5} 
                isVisible={inView} 
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

interface ValueItemProps {
  prefix: string;
  highlights: string[];
  text: string;
  index: number;
  isVisible: boolean;
}

const ValueItem = ({ prefix, highlights, text, index, isVisible }: ValueItemProps) => {
  return (
    <li 
      className={`flex items-start transition-all duration-1000 delay-${index * 100} transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
    >
      <ArrowRight className="h-6 w-6 text-hotpink-600 mt-0.5 flex-shrink-0" />
      <div className="ml-3">
        <p className="text-lg text-gray-800">
          <span className="font-medium">{prefix}</span>{' '}
          {highlights.map((highlight, i) => (
            <span key={i}>
              <span className="text-hotpink-600 font-medium">{highlight}</span>
              {i < highlights.length - 1 && ', '}
            </span>
          ))}{' '}
          {text}
        </p>
      </div>
    </li>
  );
};

const valueItems = [
  {
    prefix: "Quality",
    highlights: ["housing", "healthcare", "education"],
    text: "for all, regardless of income or background."
  },
  {
    prefix: "A",
    highlights: ["future for young people"],
    text: "to feel excited about."
  },
  {
    prefix: "Canberra as a",
    highlights: ["world leader"],
    text: "in healthy living, community building and sustainability."
  },
  {
    prefix: "Tackling root causes of the",
    highlights: ["mental health crisis"],
    text: "."
  },
  {
    prefix: "Reducing the level of",
    highlights: ["disadvantage"],
    text: "in our city."
  },
  {
    prefix: "Safety for",
    highlights: ["women", "children"],
    text: "."
  },
  {
    prefix: "Supporting locals to build",
    highlights: ["successful businesses"],
    text: "."
  },
  {
    prefix: "Greater vision and funding for our",
    highlights: ["environment"],
    text: "."
  },
  {
    prefix: "Sophisticated",
    highlights: ["active travel"],
    text: "infrastructure."
  },
  {
    prefix: "More",
    highlights: ["transparency", "efficiency"],
    text: "in government spending."
  },
];

export default ValueStatement;
