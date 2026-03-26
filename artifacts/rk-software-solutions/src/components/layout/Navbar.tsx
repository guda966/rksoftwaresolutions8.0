import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

function NavLogoAvatar() {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return <span className="text-accent font-bold text-xl">RK</span>;
  }
  return (
    <img
      src={`${import.meta.env.BASE_URL}images/logo.png`}
      alt="RK Logo"
      className="w-full h-full object-cover"
      onError={() => setFailed(true)}
    />
  );
}

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Placements", path: "/placements" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Top Bar - Only visible on desktop */}
      <div className="hidden md:flex bg-primary text-primary-foreground py-2 px-6 justify-between items-center text-sm font-medium">
        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-accent" />
            <span>+91-9876543210</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-accent" />
            <span>info@rksoftware.in</span>
          </div>
        </div>
        <div>
          <span className="text-accent">New batches starting every Monday!</span>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-lg shadow-md py-3"
            : "bg-white py-4"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="relative w-12 h-12 flex-shrink-0 rounded-full bg-primary flex items-center justify-center text-accent font-display font-bold text-xl overflow-hidden group-hover:shadow-lg transition-all duration-300">
                <NavLogoAvatar />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl leading-tight text-primary uppercase tracking-wide">
                  RK Software Solutions
                </span>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
                  Training & Placement Services
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location === link.path;
              return (
                <Link key={link.name} href={link.path}>
                  <span
                    className={`relative font-semibold text-sm transition-colors cursor-pointer py-2
                      ${isActive ? "text-primary" : "text-muted-foreground hover:text-primary"}
                    `}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent rounded-full" />
                    )}
                    {/* Hover underline effect */}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent rounded-full transition-all duration-300 group-hover:w-full opacity-0 hover:opacity-100" />
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <Button className="bg-accent text-primary hover:bg-accent/90 font-bold px-6 shadow-lg shadow-accent/20">
                Get Free Demo
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-primary p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-border animate-in slide-in-from-top-2">
            <nav className="flex flex-col px-4 py-6 gap-4">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.path}>
                  <div
                    className={`px-4 py-3 rounded-xl font-medium text-lg cursor-pointer ${
                      location === link.path
                        ? "bg-primary/5 text-primary border-l-4 border-accent"
                        : "text-muted-foreground hover:bg-gray-50"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </div>
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-border">
                <Link href="/contact">
                  <Button 
                    className="w-full bg-accent text-primary py-6 text-lg font-bold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Free Demo
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
