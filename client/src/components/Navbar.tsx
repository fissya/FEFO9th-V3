import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#showcase", label: "Showcase" },
    { href: "#competition", label: "Competition" },
    { href: "#gallery", label: "Gallery" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <nav className={`fixed w-full bg-white bg-opacity-90 backdrop-blur-sm z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <a className="text-primary font-japanese font-bold text-xl">
                FEFO<span className="text-accent">9</span>
              </a>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="text-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#register" 
              className="bg-primary hover:bg-opacity-90 text-white px-4 py-2 rounded-md transition-all duration-200"
            >
              Register Now
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMobileMenu}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-white border-t border-gray-100 ${mobileMenuOpen ? '' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block px-3 py-2 rounded-md hover:bg-secondary hover:text-primary"
              onClick={closeMobileMenu}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#register"
            className="block px-3 py-2 bg-primary text-white rounded-md mt-4"
            onClick={closeMobileMenu}
          >
            Register Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
