import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

const showcaseItems = [
  {
    id: 1,
    title: "Robotics Exhibition",
    description: "Experience cutting-edge robotics technology created by our school's robotics club. Interactive demonstrations throughout the day.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    location: "Main Hall",
    time: "10:00 AM - 4:00 PM"
  },
  {
    id: 2,
    title: "Cultural Performance",
    description: "Our drama and cultural arts clubs present an immersive Japanese-inspired performance celebrating educational values.",
    image: "https://pixabay.com/get/gea6eedfdb4b4c527572b3e3234ef738399a7fa2f3b2dd6eab33cc0821fe8d5ca1190ef0ea3b894c7c82cd15a9c9999fe61fc63750406d86a63c0b8928dc58f55_1280.jpg",
    location: "Auditorium",
    time: "1:00 PM - 2:30 PM"
  },
  {
    id: 3,
    title: "Science Exhibition",
    description: "Explore fascinating scientific experiments and innovations developed by our science club members.",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    location: "Science Building",
    time: "9:00 AM - 5:00 PM"
  },
  {
    id: 4,
    title: "Calligraphy Workshop",
    description: "Learn the art of Japanese calligraphy in this hands-on workshop led by the Art Club. Materials provided.",
    image: "https://pixabay.com/get/g2849d086d28c8b1fd827399b36f7c50a13bc1938a22bc4186823104a08727bbf2f440cd507f507cf7b265701fc35abd95d51b04aa718373090703031b3731912_1280.jpg",
    location: "Art Room",
    time: "11:00 AM - 3:00 PM"
  },
  {
    id: 5,
    title: "Music Performance",
    description: "Our Music Club presents a fusion of traditional Japanese and contemporary music throughout the event.",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    location: "Music Hall",
    time: "12:00 PM - 4:00 PM"
  },
  {
    id: 6,
    title: "Culinary Demonstration",
    description: "Join our Culinary Club as they prepare and share Japanese-inspired dishes, with tasting opportunities.",
    image: "https://pixabay.com/get/g652786747481798136f4f30b6c3939a1f4a01ceefe8df40b7aea2e8d94b1a0b540005035bd9115ccff8f4607c8cb0b9f55e1e5374cd1d44aebda43714ba0f17b_1280.jpg",
    location: "Food Court",
    time: "10:30 AM - 2:30 PM"
  }
];

const Showcase = () => {
  return (
    <section id="showcase" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-japanese font-bold text-foreground mb-4">Showcase & <span className="text-primary">Exhibitions</span></h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-foreground">Discover the exciting performances and exhibitions presented by our school clubs.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => (
            <motion.div 
              key={item.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-japanese font-bold text-xl mb-2 text-primary">{item.title}</h3>
                <p className="text-foreground mb-4">{item.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-2 text-primary" /> {item.location}
                  <Clock className="h-4 w-4 ml-4 mr-2 text-primary" /> {item.time}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
