import { motion } from "framer-motion";
import { GraduationCap, Landmark, Handshake, Calendar, Users } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-japanese font-bold text-foreground mb-4">About <span className="text-primary">FEFO</span></h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-foreground">Learn about our annual educational olympiad that combines learning with fun through a Japanese cultural lens.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1581089778245-3ce67677f718?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Japanese education concept" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-japanese font-bold text-primary mb-4">Fun Education For Olympiad</h3>
            <p className="text-foreground mb-6">
              FEFO is an annual educational event organized by KARBIT and KIR, two leading extracurricular organizations at our school. Now in its 9th year, FEFO aims to promote learning through engaging competitions, exhibitions, and performances.
            </p>
            <p className="text-foreground mb-6">
              This year's theme draws inspiration from Japanese culture and philosophy, particularly the belief that education forms the foundation of a strong nation – "教育は国の柱" (Kyōiku wa kuni no hashira).
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-secondary p-6 rounded-lg">
                <div className="text-primary text-4xl mb-2">
                  <Calendar className="h-8 w-8" />
                </div>
                <h4 className="font-japanese font-bold text-lg mb-2">Since 2015</h4>
                <p className="text-sm text-foreground">Celebrating our 9th annual event with thousands of participants.</p>
              </div>
              <div className="bg-secondary p-6 rounded-lg">
                <div className="text-primary text-4xl mb-2">
                  <Users className="h-8 w-8" />
                </div>
                <h4 className="font-japanese font-bold text-lg mb-2">For Students</h4>
                <p className="text-sm text-foreground">Designed for junior high school students across Bandung Raya.</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <motion.div 
            className="bg-white border border-gray-100 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-16 h-16 bg-accent bg-opacity-20 rounded-full flex items-center justify-center mb-6 text-primary">
              <GraduationCap className="h-8 w-8" />
            </div>
            <h3 className="font-japanese font-bold text-xl mb-4">Educational Excellence</h3>
            <p className="text-foreground">FEFO promotes academic achievement through friendly competition and collaborative learning.</p>
          </motion.div>
          
          <motion.div 
            className="bg-white border border-gray-100 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-16 h-16 bg-accent bg-opacity-20 rounded-full flex items-center justify-center mb-6 text-primary">
              <Landmark className="h-8 w-8" />
            </div>
            <h3 className="font-japanese font-bold text-xl mb-4">Cultural Immersion</h3>
            <p className="text-foreground">This year's Japanese theme encourages students to explore and appreciate global cultures.</p>
          </motion.div>
          
          <motion.div 
            className="bg-white border border-gray-100 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="w-16 h-16 bg-accent bg-opacity-20 rounded-full flex items-center justify-center mb-6 text-primary">
              <Handshake className="h-8 w-8" />
            </div>
            <h3 className="font-japanese font-bold text-xl mb-4">Community Building</h3>
            <p className="text-foreground">FEFO connects students from across Bandung Raya, building lasting friendships and networks.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
