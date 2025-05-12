import { motion } from "framer-motion";
import { CheckCircle, Calculator, FlaskRound, Languages, Code, Calendar, Trophy } from "lucide-react";

const competitions = [
  {
    icon: <Calculator />,
    title: "Mathematics Olympiad",
    description: "Test your mathematical prowess through challenging problems that require creative thinking and analytical skills.",
    tags: ["Individual", "Junior High", "2 Rounds"],
    day: "Day 1",
    prize: "Cash Prizes"
  },
  {
    icon: <FlaskRound />,
    title: "Science Challenge",
    description: "Engage in fascinating scientific experiments and theoretical questions across physics, chemistry, and biology.",
    tags: ["Team (3)", "Junior High", "Theory & Practical"],
    day: "Day 1 & 2",
    prize: "Science Kits"
  },
  {
    icon: <Languages />,
    title: "Language & Literature",
    description: "Showcase your linguistic talents through creative writing, speech, and literary analysis with a Japanese cultural lens.",
    tags: ["Individual", "Junior High", "Multiple Categories"],
    day: "Day 2",
    prize: "Books & Certificates"
  },
  {
    icon: <Code />,
    title: "Coding Competition",
    description: "Solve computational problems and develop creative solutions in this exciting programming challenge.",
    tags: ["Team (2)", "Junior High", "Problem Solving"],
    day: "Day 2",
    prize: "Tech Gadgets"
  }
];

const highlights = [
  "Represent your school in prestigious academic contests",
  "Win attractive prizes and certificates",
  "Improve your problem-solving skills",
  "Experience a friendly competitive atmosphere",
  "Network with like-minded students from across Bandung Raya"
];

const Competition = () => {
  return (
    <section id="competition" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-japanese font-bold text-foreground mb-4"><span className="text-primary">Competitions</span> & Challenges</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-foreground">Test your knowledge and skills in our exciting competitions designed for junior high school students.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Competition environment" 
              className="rounded-lg shadow-lg mb-8"
            />
            
            <div className="bg-secondary p-8 rounded-lg">
              <h3 className="text-2xl font-japanese font-bold text-primary mb-4">Competition Highlights</h3>
              <ul className="space-y-3">
                {highlights.map((highlight, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                  >
                    <CheckCircle className="text-primary h-5 w-5 mt-1 mr-3" />
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="space-y-6">
            {competitions.map((competition, index) => (
              <motion.div 
                key={index} 
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mr-4">
                    {competition.icon}
                  </div>
                  <h3 className="font-japanese font-bold text-xl">{competition.title}</h3>
                </div>
                <p className="text-foreground mb-4">{competition.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {competition.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-accent bg-opacity-20 text-primary text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>
                    <Calendar className="inline h-4 w-4 mr-1 text-primary" /> {competition.day}
                  </span>
                  <span>
                    <Trophy className="inline h-4 w-4 mr-1 text-primary" /> {competition.prize}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competition;
