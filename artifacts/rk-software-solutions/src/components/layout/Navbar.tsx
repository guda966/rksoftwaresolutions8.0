import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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

const TICKER_MESSAGES = [
  "🎓 New batches starting every Monday!",
  "🚀 100% Job Assistance for all enrolled students",
  "💼 200+ Hiring Partners across India",
  "📞 Call us: +91-9876543210",
  "⭐ 5000+ Students Placed Successfully",
];

function AnnouncementTicker() {
  const repeated = [...TICKER_MESSAGES, ...TICKER_MESSAGES];
  return (
    <div className="hidden md:block bg-primary text-primary-foreground py-1.5 overflow-hidden relative">
      <div className="flex items-center">
        <div className="ticker-track flex gap-16 whitespace-nowrap">
          {repeated.map((msg, i) => (
            <span key={i} className="text-sm font-medium text-accent shrink-0">
              {msg}
              <span className="text-white/40 ml-16">|</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function FreeDemoModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  }

  function handleOpenChange(val: boolean) {
    if (!val) {
      onClose();
      setTimeout(() => setSubmitted(false), 300);
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <GraduationCap className="text-accent w-5 h-5" />
            </div>
            <div>
              <DialogTitle className="text-lg font-display text-primary">
                Book Your Free Demo
              </DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">
                Experience our teaching style — 100% free, no commitment.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-primary mb-2">You're Registered!</h3>
            <p className="text-muted-foreground text-sm">
              Our team will call you within 24 hours to confirm your free demo session.
            </p>
            <Button
              className="mt-6 bg-accent text-primary font-bold hover:bg-accent/90"
              onClick={() => handleOpenChange(false)}
            >
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="demo-name">Your Name *</Label>
                <Input id="demo-name" placeholder="e.g. Ravi Kumar" required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="demo-phone">Phone Number *</Label>
                <Input id="demo-phone" placeholder="+91 98765 43210" required />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="demo-course">Course of Interest *</Label>
              <select
                id="demo-course"
                required
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Select a course…</option>
                <option>Full Stack Development</option>
                <option>Python & Data Science</option>
                <option>Java Development</option>
                <option>React.js / Node.js</option>
                <option>Manual & Automation Testing</option>
                <option>DevOps & Cloud</option>
                <option>Digital Marketing</option>
                <option>Business Analytics</option>
                <option>Other</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="demo-email">Email (optional)</Label>
              <Input id="demo-email" type="email" placeholder="you@example.com" />
            </div>
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-accent text-primary font-bold hover:bg-accent/90 py-5 text-base shadow-lg shadow-accent/20"
            >
              {loading ? "Booking…" : "Book Free Demo Now"}
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              We'll call you within 24 hours. No spam, ever.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);

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
      <AnnouncementTicker />

      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-lg shadow-md py-3"
            : "bg-white py-4"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
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
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Button
              onClick={() => setDemoOpen(true)}
              className="bg-accent text-primary hover:bg-accent/90 font-bold px-6 shadow-lg shadow-accent/20"
            >
              Get Free Demo
            </Button>
          </div>

          <button
            className="lg:hidden text-primary p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

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
                <Button
                  className="w-full bg-accent text-primary py-6 text-lg font-bold"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setDemoOpen(true);
                  }}
                >
                  Get Free Demo
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      <FreeDemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  );
}
