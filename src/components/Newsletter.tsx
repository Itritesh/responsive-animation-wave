
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { toast } from '@/components/ui/use-toast';

const Newsletter = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    suburb: '',
    postcode: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Subscribed successfully!",
        description: "You'll receive updates from Thomas Emerson.",
        variant: "default",
      });
      setFormData({
        fullName: '',
        email: '',
        suburb: '',
        postcode: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section 
      ref={ref}
      className="py-16 bg-burgundy-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          className={`text-3xl sm:text-4xl font-bold text-white text-center mb-8 transition-all duration-700 transform ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          STAY IN THE LOOP
        </h2>
        
        <form 
          onSubmit={handleSubmit}
          className={`max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-700 transform ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="bg-white/10 text-white border-0 rounded-md py-3 px-4 focus:ring-2 focus:ring-hotpink-600 focus:bg-white/15 transition-all"
          />
          
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-white/10 text-white border-0 rounded-md py-3 px-4 focus:ring-2 focus:ring-hotpink-600 focus:bg-white/15 transition-all"
          />
          
          <input
            type="text"
            name="suburb"
            placeholder="Suburb"
            value={formData.suburb}
            onChange={handleChange}
            className="bg-white/10 text-white border-0 rounded-md py-3 px-4 focus:ring-2 focus:ring-hotpink-600 focus:bg-white/15 transition-all"
          />
          
          <input
            type="text"
            name="postcode"
            placeholder="Postcode"
            value={formData.postcode}
            onChange={handleChange}
            className="bg-white/10 text-white border-0 rounded-md py-3 px-4 focus:ring-2 focus:ring-hotpink-600 focus:bg-white/15 transition-all"
          />
          
          <div className="col-span-1 md:col-span-2 lg:col-span-4 flex justify-center mt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-hotpink-600 hover:bg-hotpink-700 text-white font-medium px-8 py-3 rounded-md transition-all ${
                isSubmitting ? 'opacity-75 cursor-not-allowed' : 'button-hover'
              }`}
            >
              {isSubmitting ? 'SUBSCRIBING...' : 'SUBSCRIBE FOR UPDATES'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
