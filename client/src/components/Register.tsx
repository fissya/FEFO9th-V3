import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const Register = () => {
  const registrationSteps = [
    "Choose your competitions",
    "Fill in participant details",
    "Complete payment",
    "Receive confirmation and details"
  ];

  return (
    <section id="register" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-40 h-40 bg-accent bg-opacity-10 rounded-full transform translate-x-20 -translate-y-20"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-primary bg-opacity-5 rounded-full transform -translate-x-20 translate-y-20"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-xl border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-japanese font-bold text-foreground mb-4">Register for <span className="text-primary">FEFO 9</span></h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-foreground">Take the first step to join our exciting Japanese-themed educational olympiad!</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522748906645-95d8adfd52c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800" 
                alt="Cherry blossoms symbolizing education" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-japanese font-bold text-primary mb-6">Ready to Participate?</h3>
              <p className="text-foreground mb-6">Registration is open until October 31, 2023. Click the button below to fill out our registration form and secure your spot!</p>
              
              <div className="space-y-4">
                {registrationSteps.map((step, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <div className="w-10 h-10 bg-accent bg-opacity-20 rounded-full flex items-center justify-center mr-4 text-primary">
                      <Check className="h-5 w-5" />
                    </div>
                    <span>{step}</span>
                  </motion.div>
                ))}
              </div>
              
              <Button 
                size="lg"
                className="mt-8 w-full bg-primary hover:bg-opacity-90 text-white font-bold"
                asChild
              >
                <a href="https://example.com/register" target="_blank" rel="noopener noreferrer">
                  Register Now <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              
              <p className="text-sm text-gray-500 mt-4 text-center">
                Need assistance? Contact us at <a href="mailto:fefo@example.com" className="text-primary hover:underline">fefo@example.com</a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Register;
