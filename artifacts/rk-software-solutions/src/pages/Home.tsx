import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import {
  ArrowRight, CheckCircle2, Star, Users, Briefcase, Award,
  TrendingUp, Code2, MonitorPlay, Bug, Target, Database,
  ChevronLeft, ChevronRight, Quote, GraduationCap,
  BookOpen, Laptop, ClipboardCheck, Rocket, PhoneCall,
  Shield, Clock, Zap, HeartHandshake
} from "lucide-react";
import { GoogleReviews } from "@/components/ui/GoogleReviews";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/FadeIn";
import { motion } from "framer-motion";

/* ─── Typewriter ─────────────────────────────────────── */
const HERO_WORDS = ["Successful", "Rewarding", "High-Paying", "Thriving", "Brilliant", "Promising"];

function TypewriterWord() {
  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) {
      const t = setTimeout(() => { setPaused(false); setDeleting(true); }, 1600);
      return () => clearTimeout(t);
    }
    const word = HERO_WORDS[wordIdx];
    if (!deleting) {
      if (displayed.length < word.length) {
        const t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), 80);
        return () => clearTimeout(t);
      } else {
        setPaused(true);
        return;
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setWordIdx((i) => (i + 1) % HERO_WORDS.length);
        return;
      }
    }
  }, [displayed, deleting, paused, wordIdx]);

  return (
    <span className="block">
      <span className="text-accent relative inline-block">
        {displayed || "\u00A0"}
        <span className="inline-block w-[2px] h-[0.8em] bg-accent ml-0.5 align-middle animate-pulse rounded-sm" />
      </span>
    </span>
  );
}

/* ─── Animated Counter ───────────────────────────────── */
function AnimatedCounter({ target, suffix, duration = 2000 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const startTime = performance.now();
        const animate = (now: number) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * target));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.3 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── Testimonials ───────────────────────────────────── */
const testimonials = [
  { name: "Priya Sharma", course: "Full Stack Development", company: "Infosys", rating: 5, quote: "RK Software Solutions gave me everything I needed. The live projects and mock interviews were incredibly realistic. I cracked Infosys in my very first attempt!", initials: "PS", color: "#3B82F6" },
  { name: "Rahul Kumar", course: "Java Programming", company: "TCS", rating: 5, quote: "The trainers here are actual industry professionals who explain real-world concepts very clearly. Within 3 months I got placed at TCS with a great package.", initials: "RK", color: "#10B981" },
  { name: "Ananya Reddy", course: "Software Testing", company: "Wipro", rating: 5, quote: "I had zero programming background but the structured approach at RK made it so easy. Their placement team is amazing — they prepare you for every interview round.", initials: "AR", color: "#8B5CF6" },
  { name: "Srinivas Rao", course: "Data Science & AI", company: "Capgemini", rating: 5, quote: "The Data Science curriculum here is miles ahead of any online platform. Real datasets and industry mentors made all the difference in my career.", initials: "SR", color: "#F59E0B" },
  { name: "Deepika Nair", course: "Digital Marketing", company: "Amazon", rating: 5, quote: "RK Software Solutions made my career switch seamless. From SEO to Google Ads, every module was practical and job-oriented. Couldn't be happier!", initials: "DN", color: "#EF4444" },
];

function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => { setCurrent((index + testimonials.length) % testimonials.length); setIsAnimating(false); }, 200);
  };

  useEffect(() => {
    const timer = setInterval(() => goTo(current + 1), 5000);
    return () => clearInterval(timer);
  }, [current]);

  const t = testimonials[current];

  return (
    <div className="relative">
      <div className={`transition-opacity duration-200 ${isAnimating ? "opacity-0" : "opacity-100"}`}>
        <Card className="max-w-3xl mx-auto border-none shadow-2xl bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full" style={{ backgroundColor: t.color }} />
          <CardContent className="p-8 md:p-12">
            <Quote size={40} className="mb-5 opacity-20" style={{ color: t.color }} />
            <p className="text-lg md:text-xl text-foreground leading-relaxed italic mb-8 font-light">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-lg" style={{ backgroundColor: t.color }}>
                {t.initials}
              </div>
              <div>
                <p className="text-lg font-bold text-primary">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.course}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Badge className="text-[10px] font-semibold border" style={{ color: t.color, backgroundColor: `${t.color}15`, borderColor: `${t.color}30` }}>
                    Placed at {t.company}
                  </Badge>
                  <div className="flex">
                    {Array.from({ length: t.rating }).map((_, i) => <Star key={i} size={12} className="text-accent fill-accent" />)}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center justify-center gap-5 mt-8">
        <button onClick={() => goTo(current - 1)} className="w-11 h-11 rounded-full border-2 border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all" aria-label="Previous">
          <ChevronLeft size={18} />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} className={`rounded-full transition-all duration-300 ${i === current ? "w-7 h-3 bg-primary" : "w-3 h-3 bg-primary/20 hover:bg-primary/40"}`} aria-label={`Testimonial ${i + 1}`} />
          ))}
        </div>
        <button onClick={() => goTo(current + 1)} className="w-11 h-11 rounded-full border-2 border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all" aria-label="Next">
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}

/* ─── Data ───────────────────────────────────────────── */
const stats = [
  { icon: Users, target: 3000, suffix: "+", label: "Students Placed" },
  { icon: Briefcase, target: 200, suffix: "+", label: "Hiring Partners" },
  { icon: TrendingUp, target: 90, suffix: "%+", label: "Placement Rate" },
  { icon: Award, target: 20, suffix: "+", label: "Courses Offered" },
];

const whyUs = [
  { icon: GraduationCap, color: "#3B82F6", title: "Expert Trainers", desc: "Learn from professionals with 8–12 years of real-time industry experience." },
  { icon: Laptop, color: "#10B981", title: "Live Projects", desc: "Hands-on experience through real corporate-grade projects every batch." },
  { icon: Rocket, color: "#F59E0B", title: "100% Placement Drive", desc: "Dedicated placement cell with unlimited interview opportunities until placed." },
  { icon: Clock, color: "#8B5CF6", title: "Flexible Batches", desc: "Online, offline, weekend and fast-track options — study at your pace." },
  { icon: Zap, color: "#EF4444", title: "Industry Curriculum", desc: "Syllabus updated every quarter to match current market demands." },
  { icon: HeartHandshake, color: "#06B6D4", title: "Personal Mentorship", desc: "1-on-1 career counseling, resume help, and mock interview preparation." },
];

const courses = [
  { icon: Code2, title: "Full Stack Development", duration: "60 Days", color: "#3B82F6", desc: "Master MERN / Java / Python stack — front to back." },
  { icon: Database, title: "Data Science & AI", duration: "60 Days", color: "#8B5CF6", desc: "ML, Python, Deep Learning & Data Analytics." },
  { icon: Bug, title: "Software Testing", duration: "45 Days", color: "#EF4444", desc: "Manual & Automation — Selenium, Postman, TestNG." },
  { icon: MonitorPlay, title: "UI/UX Design", duration: "45 Days", color: "#EC4899", desc: "Design thinking, Figma & prototyping." },
  { icon: Target, title: "Digital Marketing", duration: "45 Days", color: "#10B981", desc: "SEO, SEM, Social Media & Google Ads." },
  { icon: Shield, title: "Medical Billing & Coding", duration: "60 Days", color: "#F59E0B", desc: "ICD-10 coding, US insurance & HIPAA compliance." },
];

const steps = [
  { icon: PhoneCall, step: "01", title: "Free Counseling", desc: "Talk to our career advisor. Understand the right course for your goals." },
  { icon: BookOpen, step: "02", title: "Enroll & Learn", desc: "Join a batch, attend live classes with real-world projects and assignments." },
  { icon: ClipboardCheck, step: "03", title: "Practice & Certify", desc: "Work on mock projects, clear internal assessments, earn your certificate." },
  { icon: Briefcase, step: "04", title: "Get Placed", desc: "Attend unlimited drives. Our team works until you land your dream offer." },
];

const recentPlacements = [
  { src: "placement_4.jpeg", alt: "Recent RK Software Solutions placement success 1" },
  { src: "placement_5.jpeg", alt: "Recent RK Software Solutions placement success 2" },
  { src: "placement_6.jpeg", alt: "Recent RK Software Solutions placement success 3" },
  { src: "placement_7.jpeg", alt: "Recent RK Software Solutions placement success 4" },
  { src: "placement_8.jpeg", alt: "Recent RK Software Solutions placement success 5" },
];

/* ─── Main Component ─────────────────────────────────── */
export default function Home() {
  return (
    <div className="w-full">

      {/* ── Hero ── */}
      <section className="relative min-h-fit lg:min-h-[90vh] flex items-start overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70 z-10" />
          <img src={`${import.meta.env.BASE_URL}images/hero-bg.png`} alt="" className="w-full h-full object-cover" />
        </div>

        {/* Animated blobs — desktop only to avoid yellow bleed on mobile */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse pointer-events-none z-10 hidden md:block" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse pointer-events-none z-10 hidden md:block" style={{ animationDelay: "1s" }} />

        <div className="container mx-auto px-4 md:px-6 relative z-20 pt-10 pb-20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-10 xl:gap-16">

            {/* Left: Hero Text */}
            <div className="flex-1 min-w-0">
              <FadeIn direction="up">
                <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold mb-6 px-3 py-1.5 rounded-full border backdrop-blur-sm"
                  style={{ backgroundColor: "rgba(245,197,24,0.15)", color: "hsl(43 96% 60%)", borderColor: "rgba(245,197,24,0.3)" }}>
                  ✦ WAY TO SUCCESS
                </span>
              </FadeIn>

              <FadeIn direction="up" delay={0.1}>
                <h1 className="text-3xl sm:text-4xl md:text-6xl xl:text-7xl font-display font-extrabold text-white leading-tight mb-6 tracking-tight">
                  <span className="block">Your Gateway to a</span>
                  <TypewriterWord />
                  <span className="block">IT Career</span>
                </h1>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <p className="text-lg md:text-xl text-white/75 mb-8 leading-relaxed font-light max-w-xl">
                  Hyderabad's trusted software training & placement institute. Learn from industry pros and land your dream job in 30–60 days.
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.3} className="flex flex-wrap gap-4 mb-6">
                <Link href="/courses">
                  <Button size="lg" className="bg-accent text-primary hover:bg-accent/90 text-lg px-8 h-14 font-bold shadow-xl shadow-accent/20 border-none">
                    Explore Courses <ArrowRight size={18} className="ml-1" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 text-lg px-8 h-14 font-semibold backdrop-blur-sm">
                    Get Free Demo
                  </Button>
                </Link>
              </FadeIn>

              {/* Social proof */}
              <FadeIn direction="up" delay={0.45}>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {["PS","RK","AR","DN","SR"].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-primary text-[9px] font-bold border-2 border-primary">{i}</div>
                    ))}
                  </div>
                  <p className="text-white/65 text-sm"><span className="text-accent font-bold">3,000+</span> students placed successfully</p>
                </div>
              </FadeIn>

              {/* Trust badges + Google rating */}
              <FadeIn direction="up" delay={0.55}>
                <div className="flex flex-wrap items-center gap-3 mt-6">
                  {["⚡ 30-60 Day Programs", "🏆 200+ Hiring Partners", "🎯 Real Projects"].map(b => (
                    <span key={b} className="text-xs font-semibold text-white/60 bg-white/8 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur">{b}</span>
                  ))}
                  <div className="mt-1">
                    <GoogleReviews compact />
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right: YouTube Shorts scroller */}
            <div className="hidden lg:flex flex-col items-center gap-3 shrink-0">
              <div className="flex items-center gap-2 bg-red-600/90 backdrop-blur text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg mb-1">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#fff"/></svg>
                Student Success Stories
              </div>

              <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/10" style={{ height: "650px", width: "196px" }}>
                <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-primary to-transparent z-10 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-primary to-transparent z-10 pointer-events-none" />

                <div className="shorts-scroll-track flex flex-col gap-3 px-1 pt-1">
                  {[...["4Y0NmKCGEYk","KPtlCuMdL1o","6gKIc5BvJU0","v_27jDFDeQE","s4otnRZqzR0"],
                    ...["4Y0NmKCGEYk","KPtlCuMdL1o","6gKIc5BvJU0","v_27jDFDeQE","s4otnRZqzR0"]
                  ].map((id, i) => (
                    <a key={`${id}-${i}`} href={`https://www.youtube.com/shorts/${id}`} target="_blank" rel="noopener noreferrer"
                      className="relative rounded-2xl overflow-hidden flex-shrink-0 group shadow-lg" style={{ width: "183px", height: "325px" }}>
                      <img src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`} alt="Student testimonial" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-red-600/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4 ml-0.5"><polygon points="5,3 19,12 5,21" /></svg>
                        </div>
                      </div>
                      <div className="absolute top-2 left-2 flex items-center gap-1 bg-red-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#fff"/></svg>
                        Shorts
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <p className="text-white/45 text-[11px] text-center">Hover to pause · Click to watch</p>
            </div>

          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute -bottom-1 left-0 right-0 w-full overflow-hidden leading-none text-background z-20">
          <svg className="block w-full h-[50px] md:h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-12 bg-background relative z-30 -mt-8 md:-mt-14">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="up">
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white rounded-2xl shadow-xl shadow-primary/5 p-6 md:p-8 flex flex-col items-center text-center border border-border/50 hover:border-accent/30 transition-colors"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-4">
                    <stat.icon size={26} className="text-accent" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-display font-bold text-primary mb-1">
                    <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                  </h3>
                  <p className="text-muted-foreground text-sm font-medium">{stat.label}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recent Placements Showcase ── */}
      <section className="pb-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-10">
            <Badge className="bg-accent/15 text-accent border-accent/30 mb-4">Latest Success Stories</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">Recent Placements</h2>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto">
              Fresh wins from our latest student placement journey, captured and celebrated at RK Software Solutions.
            </p>
          </FadeIn>

          <div className="relative overflow-hidden rounded-[2rem] border border-primary/10 bg-gradient-to-br from-primary via-primary/95 to-primary/90 p-4 md:p-5 shadow-2xl shadow-primary/10">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 md:w-28 bg-gradient-to-r from-primary via-primary/85 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-20 md:w-28 bg-gradient-to-l from-primary via-primary/85 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "26px 26px" }} />

            <div className="ticker-track flex gap-4 md:gap-5 w-max">
              {[...recentPlacements, ...recentPlacements].map((item, index) => (
                <div
                  key={`${item.src}-${index}`}
                  className="group relative w-[240px] sm:w-[280px] md:w-[340px] shrink-0 overflow-hidden rounded-3xl border border-white/12 bg-white/8 backdrop-blur-sm shadow-xl"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}images/${item.src}`}
                    alt={item.alt}
                    className="h-[280px] sm:h-[320px] md:h-[360px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/15 to-transparent" />
                  <div className="absolute left-4 right-4 bottom-4 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md">
                    <p className="text-white text-sm font-semibold">RK Software Solutions Placement Drive</p>
                    <p className="text-white/70 text-xs mt-1">Industry-ready training. Real placements. Proven results.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <FadeIn delay={0.1} className="text-center mt-6">
            <p className="text-xs text-muted-foreground">Hover over the gallery to pause and view each placement highlight.</p>
          </FadeIn>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeIn className="text-center mb-14">
            <Badge className="bg-accent/15 text-accent border-accent/60 mb-5 shadow-[0_0_10px_rgba(245,197,24,0.15)]">Your Success Blueprint</Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-3">How It Works</h2>
            <p className="text-white/65 text-lg max-w-xl mx-auto">Four simple steps from zero to job-ready.</p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-[2px] bg-accent/20 z-0" />

            {steps.map((s, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative bg-white/8 backdrop-blur border border-white/12 rounded-2xl p-7 text-center hover:bg-white/14 transition-colors z-10"
                >
                  <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-4 shadow-lg shadow-accent/30">
                    <s.icon size={22} className="text-primary" />
                  </div>
                  <span className="text-accent/50 text-xs font-black uppercase tracking-widest mb-2 block">{s.step}</span>
                  <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="py-24 bg-secondary/40 relative">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeIn className="text-center max-w-2xl mx-auto mb-14">
            <Badge className="bg-primary/5 text-primary border-primary/10 mb-5">Why RK Software?</Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Built for Your Success</h2>
            <p className="text-lg text-muted-foreground">
              Every detail of our program is designed to get you placed — fast.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((f, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 280 }}
                  className="bg-white rounded-2xl p-7 shadow-sm border border-border hover:shadow-xl hover:border-accent/30 transition-all duration-300 group flex gap-5"
                >
                  <div
                    className="w-13 h-13 rounded-2xl flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300 shadow-md"
                    style={{ backgroundColor: `${f.color}18` }}
                  >
                    <f.icon size={22} style={{ color: f.color }} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1.5 text-primary">{f.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Popular Courses ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6">
            <FadeIn className="max-w-2xl">
              <Badge className="bg-primary/5 text-primary border-primary/10 mb-4">Most In-Demand</Badge>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-3">Popular Courses</h2>
              <p className="text-lg text-muted-foreground">High-demand skills with guaranteed career outcomes.</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link href="/courses">
                <Button variant="outline" className="font-semibold gap-2 border-primary text-primary hover:bg-primary hover:text-white group">
                  View All Courses <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 280 }}
                  className="bg-white rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group flex flex-col"
                >
                  {/* Coloured header */}
                  <div className="px-7 pt-7 pb-5 relative overflow-hidden" style={{ backgroundColor: `${course.color}12` }}>
                    <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-20" style={{ backgroundColor: course.color }} />
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-md" style={{ backgroundColor: course.color }}>
                      <course.icon size={22} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold font-display text-primary leading-tight">{course.title}</h3>
                    <span className="inline-block mt-2 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full" style={{ color: course.color, backgroundColor: `${course.color}18` }}>
                      {course.duration}
                    </span>
                  </div>

                  <div className="px-7 pb-7 pt-4 flex flex-col flex-1">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">{course.desc}</p>
                    <Link href="/contact">
                      <Button className="w-full font-semibold text-white border-none group-hover:brightness-110 transition-all" style={{ backgroundColor: course.color }}>
                        Enquire Now
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center max-w-2xl mx-auto mb-14">
            <Badge className="bg-primary/5 text-primary border-primary/10 mb-5">Student Stories</Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Real Results, Real People</h2>
            <p className="text-lg text-muted-foreground">
              Hear from our alumni who transformed their careers with RK Software Solutions.
            </p>
          </FadeIn>
          <FadeIn>
            <TestimonialsCarousel />
          </FadeIn>
        </div>
      </section>

      {/* ── Google Reviews ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-12">
            <Badge className="bg-[#4285F4]/10 text-[#4285F4] border-[#4285F4]/20 mb-5">Verified on Google</Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-3">Rated 5★ on Google</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Our students don't just say it in person — they say it on Google too.
            </p>
          </FadeIn>
          <GoogleReviews />
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none hidden md:block" />
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none hidden md:block" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <FadeIn>
            <Badge className="bg-accent/15 text-accent border-accent/60 mb-6 shadow-[0_0_10px_rgba(245,197,24,0.15)]">Limited Seats per Batch</Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-5">
              Start Your Journey Today
            </h2>
            <p className="text-lg text-white/70 max-w-xl mx-auto mb-10">
              New batches launching soon — limited seats available. Join 3,000+ alumni who chose RK as their launchpad.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-accent text-primary hover:bg-white hover:text-primary text-base px-10 h-14 rounded-full font-bold shadow-2xl transition-all duration-300 hover:scale-105">
                  Book Free Demo Class
                </Button>
              </Link>
              <Link href="/courses">
                <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 text-base px-8 h-14 rounded-full font-semibold">
                  Browse Courses
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
