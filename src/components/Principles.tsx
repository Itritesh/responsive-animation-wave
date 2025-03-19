
import { useInView } from 'react-intersection-observer';

const principles = [
  {
    number: "1",
    title: "Every voice is heard",
    description: "working to ensure nobody gets ignored or left behind."
  },
  {
    number: "2",
    title: "No vested interests",
    description: "basing my decisions solely on the needs of our community."
  },
  {
    number: "3",
    title: "Empowering locals",
    description: "supporting local initiatives, businesses and community organisations."
  },
  {
    number: "4",
    title: "Accessibility",
    description: "remaining an active participant in community life, prioritising direct contact with people in my electorate."
  },
  {
    number: "5",
    title: "Hard work",
    description: "doing everything possible to deliver for our community."
  },
  {
    number: "6",
    title: "Integrity",
    description: "following through, being accountable to the people who elected me, and admitting to any mistakes."
  },
  {
    number: "7",
    title: "Long-term thinking",
    description: "making decisions that reach beyond the election cycle."
  },
  {
    number: "8",
    title: "Evidence-based policy",
    description: "grounding my views in evidence and updating them when new evidence emerges."
  },
  {
    number: "9",
    title: "Collaboration",
    description: "working constructively with other MLAs wherever possible."
  },
  {
    number: "10",
    title: "Independence",
    description: "remaining free of influence from any party interests."
  }
];

const Principles = () => {
  return (
    <section className="py-20 bg-burgundy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-burgundy-950">
            MY <span className="text-hotpink-600">PRINCIPLES:</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          <div className="space-y-6">
            {principles.slice(0, 5).map((principle, index) => (
              <PrincipleItem key={index} {...principle} index={index} />
            ))}
          </div>
          <div className="space-y-6">
            {principles.slice(5).map((principle, index) => (
              <PrincipleItem key={index + 5} {...principle} index={index + 5} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

interface PrincipleItemProps {
  number: string;
  title: string;
  description: string;
  index: number;
}

const PrincipleItem = ({ number, title, description, index }: PrincipleItemProps) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
    rootMargin: '-50px 0px',
  });

  return (
    <div 
      ref={ref}
      className={`flex transition-all duration-700 delay-${index * 100} transform ${
        inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
    >
      <div className="mr-4 flex-shrink-0">
        <span className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-hotpink-100 text-hotpink-600 font-bold">
          {number}
        </span>
      </div>
      <div>
        <h3 className="text-xl font-bold text-burgundy-950">
          <span className="text-hotpink-600">{title}:</span>
        </h3>
        <p className="mt-1 text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default Principles;
