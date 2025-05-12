import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqItems = [
  {
    question: "Who can participate in FEFO 9?",
    answer: "FEFO 9 is open to all junior high school students (grades 7-9) from schools across Bandung Raya. Both individuals and teams can register depending on the specific competition."
  },
  {
    question: "How do I register for competitions?",
    answer: "Registration is simple! Click the \"Register Now\" button at the top of this page, which will take you to our registration form. Fill in your details, select the competitions you wish to participate in, and submit. You'll receive a confirmation email with further instructions."
  },
  {
    question: "Is there a registration fee?",
    answer: "Yes, there is a nominal registration fee that varies by competition. Individual events are Rp 50,000 per participant, while team events are Rp 100,000 per team. The fee covers event materials, certificates, and refreshments during the event."
  },
  {
    question: "When and where will FEFO 9 be held?",
    answer: "FEFO 9 will be held on November 18-19, 2023, at our school campus. The exact address and schedule will be sent to registered participants via email. The event runs from 8:00 AM to 5:00 PM each day."
  },
  {
    question: "What should I bring to the event?",
    answer: "Please bring your student ID, registration confirmation, writing materials, and any specific items required for your competition (which will be detailed in your confirmation email). Lunch and snacks will be provided for all participants."
  },
  {
    question: "Can I participate in multiple competitions?",
    answer: "Yes, you can register for multiple competitions as long as they don't have scheduling conflicts. Note that separate registration fees apply for each competition. Check the detailed schedule in your registration confirmation to avoid conflicts."
  }
];

const Faq = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    if (openItem === index) {
      setOpenItem(null);
    } else {
      setOpenItem(index);
    }
  };

  return (
    <section id="faq" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-japanese font-bold text-foreground mb-4">Frequently Asked <span className="text-primary">Questions</span></h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-foreground">Find answers to common questions about FEFO 9.</p>
        </motion.div>

        <div className="max-w-3xl mx-auto divide-y divide-gray-200">
          {faqItems.map((item, index) => (
            <motion.div 
              key={index} 
              className={`py-6 px-4 rounded-lg cursor-pointer ${openItem === index ? 'bg-primary bg-opacity-5' : 'hover:bg-primary hover:bg-opacity-5'}`}
              onClick={() => toggleItem(index)}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg text-foreground">{item.question}</h3>
                <span className="text-primary text-xl">
                  {openItem === index ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                </span>
              </div>
              {openItem === index && (
                <motion.div 
                  className="mt-4 text-foreground"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{item.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
