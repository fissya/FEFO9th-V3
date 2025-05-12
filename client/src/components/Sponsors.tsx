import { motion } from "framer-motion";

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-japanese font-bold text-foreground mb-4">Our <span className="text-primary">Sponsors</span></h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-foreground">We thank our generous sponsors who make FEFO possible each year.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {[...Array(8)].map((_, index) => (
            <motion.div 
              key={index}
              className="h-20 w-40 bg-gray-100 rounded-md flex items-center justify-center hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <span className="text-gray-500 font-bold">Sponsor Logo</span>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-foreground">
            Interested in sponsoring FEFO? <a href="#contact" className="text-primary hover:underline">Contact us</a> for sponsorship opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
