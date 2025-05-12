import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Students in a competition"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Cultural performance"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Exhibition booth"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Students collaborating"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1551845251-9ea4f58c2953?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Award ceremony"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Workshop session"
  }
];

const Gallery = () => {
  const [isPaused, setIsPaused] = useState(false);

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <section id="gallery" className="py-20 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-japanese font-bold text-foreground mb-4">Event <span className="text-primary">Gallery</span></h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-foreground">Experience the excitement and energy of previous FEFO events through our photo gallery.</p>
        </motion.div>
      </div>

      <div className="gallery-container w-full py-8">
        <div 
          className="gallery-scroll" 
          style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
        >
          {/* First set of images */}
          <div className="flex space-x-4 pr-4">
            {galleryImages.map((image) => (
              <div key={image.id} className="rounded-lg overflow-hidden shadow-md h-64 w-96 flex-shrink-0">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          
          {/* Duplicate set for continuous scrolling */}
          <div className="flex space-x-4 pr-4">
            {galleryImages.map((image) => (
              <div key={`dup-${image.id}`} className="rounded-lg overflow-hidden shadow-md h-64 w-96 flex-shrink-0">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <Button 
          onClick={togglePause}
          className="bg-primary text-white hover:bg-opacity-90 transition-all duration-200"
        >
          {isPaused ? (
            <>
              <Play className="mr-2 h-4 w-4" /> Play Gallery
            </>
          ) : (
            <>
              <Pause className="mr-2 h-4 w-4" /> Pause Gallery
            </>
          )}
        </Button>
      </div>
    </section>
  );
};

export default Gallery;
