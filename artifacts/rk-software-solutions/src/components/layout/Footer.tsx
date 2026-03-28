import { useState } from "react";
import { Link } from "wouter";
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail, ArrowRight, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

function FooterLogo() {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="flex flex-col">
        <span className="font-display font-bold text-xl text-white">RK Software Solutions</span>
        <span className="text-[10px] uppercase tracking-widest text-accent font-semibold">Way To Success</span>
      </div>
    );
  }
  return (
    <div className="bg-white rounded-xl px-4 py-2 inline-block shadow-lg">
      <img
        src={`${import.meta.env.BASE_URL}images/logo.png`}
        alt="RK Software Solutions"
        className="h-16 w-auto object-contain"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 border-t-[8px] border-accent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand Column */}
          <div className="space-y-6">
            <FooterLogo />
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              India's premier software training and placement institute. We bridge the gap between academic education and industry requirements to build successful careers.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a href="https://www.youtube.com/@RKSoftwareSolutionss" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-red-600 hover:text-white transition-colors" title="YouTube">
                <Youtube size={18} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100091978764310" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors" title="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/rk_softwaresolutions/" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors" title="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://www.linkedin.com/in/rk-software-solutions-45a144273" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors" title="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-display font-bold mb-6 text-white border-b-2 border-accent/50 inline-block pb-2">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Courses', href: '/courses' },
                { label: 'Placements', href: '/placements' },
                { label: 'Careers', href: '/careers' },
                { label: 'Contact Us', href: '/contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <span className="text-primary-foreground/80 hover:text-accent flex items-center gap-2 cursor-pointer transition-colors">
                      <ArrowRight size={14} className="text-accent" />
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Courses */}
          <div>
            <h3 className="text-xl font-display font-bold mb-6 text-white border-b-2 border-accent/50 inline-block pb-2">Popular Courses</h3>
            <ul className="space-y-4">
              {['Full Stack Development', 'Java Programming', 'Python with AI', 'Software Testing', 'Data Science', 'Digital Marketing'].map((course) => (
                <li key={course}>
                  <Link href="/courses">
                    <span className="text-primary-foreground/80 hover:text-accent flex items-center gap-2 cursor-pointer transition-colors">
                      <ArrowRight size={14} className="text-accent" />
                      {course}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-display font-bold mb-6 text-white border-b-2 border-accent/50 inline-block pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin size={20} className="text-accent flex-shrink-0 mt-1" />
                <span className="text-sm">301 & 402, 3rd Floor, Opp. SR Nagar Bus Stop, Madhura Nagar, Hyderabad – 500038, Telangana</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <Phone size={20} className="text-accent flex-shrink-0" />
                <a href="tel:+919063616867" className="text-sm hover:text-accent transition-colors">+91 90636 16867</a>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <Mail size={20} className="text-accent flex-shrink-0" />
                <a href="mailto:info@rksoftwaresolutions.in" className="text-sm hover:text-accent transition-colors">info@rksoftwaresolutions.in</a>
              </li>
            </ul>
            <div className="mt-6">
              <Link href="/contact">
                <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-primary transition-colors">
                  Send Inquiry
                </Button>
              </Link>
            </div>
          </div>

        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} RK Software Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
        <div className="mt-4 text-center text-primary-foreground/40 text-xs">
          Designed & Developed by{" "}
          <a href="https://www.leoaxis.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            Leoaxis Technologies Pvt. Ltd.
          </a>
        </div>
      </div>
    </footer>
  );
}
