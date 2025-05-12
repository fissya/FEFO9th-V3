import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Showcase from "@/components/Showcase";
import Competition from "@/components/Competition";
import Gallery from "@/components/Gallery";
import Sponsors from "@/components/Sponsors";
import Faq from "@/components/Faq";
import Register from "@/components/Register";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Showcase />
      <Competition />
      <Gallery />
      <Sponsors />
      <Faq />
      <Register />
      <Footer />
    </div>
  );
};

export default Home;
