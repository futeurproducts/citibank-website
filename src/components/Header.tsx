import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setOpenDropdown(null);
    if (openDropdown) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [openDropdown]);

  const navigation = [
    { label: "Platform", href: "/about" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Results", href: "/case-study" },
    { label: "Pilot", href: "/pilot" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent",
      )}
    >
      {/* Main Navigation */}
      <nav className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
        <Link 
          to="/" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-3"
        >
          <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            className="font-sans text-xl font-black tracking-tighter text-foreground uppercase"
            whileHover={{ scale: 1.05 }}
            style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif", letterSpacing: '-0.02em' }}
          >
              LUMIQ AI for Citi
          </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <li key={item.href} className="relative">
                <Link
                  to={item.href}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-sm font-medium text-foreground/70 transition-colors duration-150 hover:text-foreground relative group"
                >
                  {item.label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
          </Link>
              </li>
            ))}
            <li>
              <a
                href="https://citi.demo.futeurcredx.com/demo/citi"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-150 hover:bg-blue-600"
              >
                Demo &rarr;
              </a>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground lg:hidden"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-foreground/10 bg-background lg:hidden max-h-[calc(100vh-160px)] overflow-y-auto">
          <ul className="container mx-auto px-4 py-4">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="block py-3 text-foreground hover:text-primary transition-colors duration-150"
                >
                  {item.label}
          </Link>
              </li>
            ))}
            <li>
              <a
                href="https://citi.demo.futeurcredx.com/demo/citi"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-3 text-blue-500 font-medium hover:text-blue-600 transition-colors duration-150"
              >
                Demo &rarr;
              </a>
            </li>
          </ul>
      </div>
      )}
    </header>
  );
}
