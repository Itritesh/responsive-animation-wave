
import { useInView } from 'react-intersection-observer';

const Biography = () => {
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
        <h2 
          className={`text-3xl sm:text-4xl font-bold text-burgundy-950 mb-12 transition-all duration-700 transform ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          MY <span className="text-hotpink-600">STORY</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div 
            className={`lg:col-span-3 transition-all duration-700 delay-100 transform ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <div className="space-y-6 text-lg">
              <p>
                Despite being born into a political family, I was never interested in politics growing up.
              </p>
              <p>
                I began paying closer attention to politics after starting a family of my own, and was disappointed to 
                see a lack of courageous leadership in the face of simultaneous housing, climate and mental health crises.
              </p>
              <p>
                I felt we needed more independently-minded, forward-looking politicians who were committed to 
                acting in our community's long-term best interests.
              </p>
              <p>
                That's why I volunteered to support David Pocock's values-based campaign to become the ACT's first 
                independent senator in 2022. I asked for a job when he was elected and spent the next two years 
                working as one of Senator Pocock's advisers.
              </p>
              <p>
                In a bid to bring the independent movement to the ACT Legislative Assembly, I launched Independents 
                for Canberra in early 2024. Twenty candidates ended up running under our banner, working together 
                wherever possible while retaining our independence.
              </p>
              <p>
                On 19 October 2024, I was one of two independent candidates elected to become a Member of the 
                Legislative Assembly, breaking a 23-year drought for independents in ACT politics.
              </p>
              <p>
                I believe we are at our best when we come together to form communities based on trust and mutual 
                respect. Reflecting this belief, my approach to politics is grounded in honesty, integrity and 
                collaboration.
              </p>
            </div>
          </div>
          
          <div 
            className={`lg:col-span-2 transition-all duration-700 delay-200 transform ${
              inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            <div className="bg-gray-200 rounded-lg h-full min-h-[400px] image-container">
              <div className="h-full w-full relative">
                {/* This would be replaced with a proper image in a real implementation */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Profile Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
