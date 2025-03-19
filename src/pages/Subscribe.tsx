
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

const Subscribe = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-burgundy-950 mb-8 animate-fade-in">
            <span className="text-hotpink-600">SUBSCRIBE</span>
          </h1>
          <p className="text-xl text-burgundy-900 mb-12 animate-fade-in opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            Subscribe to Thomas Emerson's newsletter to stay updated.
          </p>
          <div className="bg-white rounded-lg animate-fade-in opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            <Newsletter />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Subscribe;
