import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { JapanesePattern } from "@/images/JapanesePattern";
import { SakuraPattern } from "@/images/SakuraPattern";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 pb-20 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5">
        <JapanesePattern />
      </div>
      <div className="absolute inset-0 opacity-10">
        <SakuraPattern />
      </div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute -top-20 -right-20 w-40 h-40 bg-accent bg-opacity-20 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute top-40 -left-10 w-20 h-20 bg-primary bg-opacity-10 rounded-full"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h5 className="text-primary font-japanese tracking-widest mb-4">9TH ANNUAL EVENT</h5>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-japanese font-bold text-foreground mb-4">
              FEFO <span className="text-primary">2023</span>
            </h1>
            <h2 className="text-xl sm:text-2xl font-heading text-foreground mb-6">
              Fun Education For Olympiad <br />
              <span className="text-primary font-japanese">教育は国の柱</span>
              <span className="text-foreground font-light italic"> - Education is the pillar of a nation</span>
            </h2>
            <p className="text-foreground mb-8 max-w-lg mx-auto md:mx-0">
              Join us for the 9th annual FEFO event, organized by KARBIT and KIR. An exciting educational Olympics with a Japanese theme for junior high school students across Bandung Raya.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Button 
                size="lg" 
                asChild
                className="bg-primary hover:bg-opacity-90 text-white font-bold"
              >
                <a href="#register">
                  Register Now <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                asChild
                className="bg-secondary hover:bg-opacity-80 text-foreground font-bold"
              >
                <a href="#about">
                  Learn More <ChevronDown className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="hidden md:block relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Japanese-inspired educational setting" 
              className="rounded-lg shadow-xl transform -rotate-2 hover:rotate-0 transition-all duration-300"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-lg transform rotate-12"></div>
            <div className="absolute top-1/2 -right-8 w-16 h-16 bg-primary bg-opacity-10 rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
