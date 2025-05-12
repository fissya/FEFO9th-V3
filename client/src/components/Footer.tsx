import { Link } from "wouter";
import { Mail, MapPin, Phone } from "lucide-react";
import { 
  FaInstagram, 
  FaTwitter, 
  FaFacebook, 
  FaYoutube, 
  FaPaperPlane 
} from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { icon: <FaInstagram className="h-5 w-5" />, href: "#", label: "Instagram" },
    { icon: <FaTwitter className="h-5 w-5" />, href: "#", label: "Twitter" },
    { icon: <FaFacebook className="h-5 w-5" />, href: "#", label: "Facebook" },
    { icon: <FaYoutube className="h-5 w-5" />, href: "#", label: "YouTube" }
  ];

  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#showcase", label: "Showcase" },
    { href: "#competition", label: "Competitions" },
    { href: "#gallery", label: "Gallery" },
    { href: "#faq", label: "FAQ" },
    { href: "#register", label: "Register" }
  ];

  const contactInfo = [
    { 
      icon: <MapPin className="mt-1 mr-3 text-accent h-5 w-5" />, 
      content: "123 School Street, Bandung, West Java, Indonesia" 
    },
    { 
      icon: <Mail className="mt-1 mr-3 text-accent h-5 w-5" />, 
      content: "fefo@example.com" 
    },
    { 
      icon: <Phone className="mt-1 mr-3 text-accent h-5 w-5" />, 
      content: "+62 123 4567 890" 
    }
  ];

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-japanese font-bold mb-4">FEFO<span className="text-accent">9</span></h3>
            <p className="text-gray-300 mb-4">Fun Education For Olympiad - An annual educational event organized by KARBIT and KIR for junior high school students.</p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="text-white hover:text-accent transition-colors duration-200"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-japanese font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Contact */}
          <div>
            <h3 className="text-xl font-japanese font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  {item.icon}
                  <span className="text-gray-300">{item.content}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-xl font-japanese font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest updates about FEFO 9.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-md w-full focus:outline-none text-foreground"
                aria-label="Email for newsletter"
              />
              <button 
                type="submit" 
                className="bg-primary hover:bg-opacity-90 px-4 py-2 rounded-r-md transition-colors duration-200"
                aria-label="Subscribe"
              >
                <FaPaperPlane className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2023 FEFO 9. All rights reserved. Organized by KARBIT and KIR.</p>
          <p className="mt-2 text-sm">
            Designed with <span className="text-accent">❤</span> for educational excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
