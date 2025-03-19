
import { useEffect } from 'react';
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import ValueStatement from "@/components/ValueStatement";
import Principles from "@/components/Principles";
import ConnectionMethods from "@/components/ConnectionMethods";
import MediaReleases from "@/components/MediaReleases";
import Newsletter from "@/components/Newsletter";
import Biography from "@/components/Biography";
import Footer from "@/components/Footer";

const Index = () => {
  // Smooth scroll to top on page load
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <main>
        <Hero />
        <div className="text-center py-8 bg-burgundy-900 text-white font-medium text-lg sm:text-xl">
          INDEPENDENT MEMBER FOR KURRAJONG IN THE ACT LEGISLATIVE ASSEMBLY
        </div>
        <ValueStatement />
        <Principles />
        <ConnectionMethods />
        <MediaReleases />
        <Newsletter />
        <Biography />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
