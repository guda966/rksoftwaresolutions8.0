import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Star, Users, Briefcase, Award, TrendingUp, Code2, MonitorPlay, Bug, Target, Database, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/FadeIn";

interface StatItem {
  icon: React.ComponentType<{ size: number }>;
  target: number;
  suffix: string;
  label: string;
}

interface Testimonial {
  name: string;
  course: string;
  company: string;
  rating: number;
  quote: string;
  initials: string;
}

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
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setWordIdx((i) => (i + 1) % HERO_WORDS.length);
      }
    }
  }, [displayed, deleting, paused, wordIdx]);

  return (
    <span className="block">
      <span className="text-accent relative inline-block">
        {displayed || "\u00A0"}
        <span className="inline-block w-[3px] h-[0.85em] bg-accent ml-1 align-middle animate-pulse rounded-sm" />
        <span className="absolute bottom-1 left-0 w-full h-3 bg-accent/30 -z-10 rounded-full pointer-events-none" />
      </span>
    </span>
  );
}

function AnimatedCounter({ target, suffix, duration = 2000 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
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
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const testimonials: Testimonial[] = [
  {
    name: "Priya Sharma",
    course: "Full Stack Development",
    company: "Infosys",
    rating: 5,
    quote: "RK Software Solutions gave me everything I needed to land my dream job. The live projects and mock interviews were incredibly realistic. I cracked Infosys in my very first attempt!",
    initials: "PS",
  },
  {
    name: "Rahul Kumar",
    course: "Java Programming",
    company: "TCS",
    rating: 5,
    quote: "The trainers here are actual industry professionals who explain real-world concepts very clearly. Within 3 months of completing Java training, I got placed at TCS with a great package.",
    initials: "RK",
  },
  {
    name: "Ananya Reddy",
    course: "Software Testing",
    company: "Wipro",
    rating: 5,
    quote: "I had zero programming background but the structured approach at RK made it so easy to learn. Their placement team is amazing — they prepare you for every round of the interview.",
    initials: "AR",
  },
  {
    name: "Srinivas Rao",
    course: "Data Science & AI",
    company: "Capgemini",
    rating: 5,
    quote: "The Data Science curriculum here is miles ahead of any online platform. The hands-on experience with real datasets and industry mentors really made the difference in my career.",
    initials: "SR",
  },
  {
    name: "Deepika Nair",
    course: "Digital Marketing",
    company: "Amazon",
    rating: 5,
    quote: "I was skeptical about a career switch to Digital Marketing but RK Software Solutions made it seamless. From SEO to Google Ads, every module was practical and job-oriented.",
    initials: "DN",
  },
];

function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = (index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent((index + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 200);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goTo(current + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const prev = (current - 1 + testimonials.length) % testimonials.length;
  const next = (current + 1) % testimonials.length;

  return (
    <div className="relative">
      {/* Main Testimonial Card */}
      <div
        className={`transition-opacity duration-200 ${isAnimating ? "opacity-0" : "opacity-100"}`}
      >
        <Card className="max-w-3xl mx-auto border-none shadow-2xl bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-accent"></div>
          <CardContent className="p-10 md:p-14">
            <Quote size={48} className="text-accent/20 mb-6" />
            <p className="text-xl md:text-2xl text-foreground leading-relaxed italic mb-10 font-light">
              "{testimonials[current].quote}"
            </p>
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                {testimonials[current].initials}
              </div>
              <div>
                <p className="text-xl font-bold text-primary">{testimonials[current].name}</p>
                <p className="text-muted-foreground">{testimonials[current].course}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Badge className="bg-accent/10 text-accent border-accent/30 text-xs font-semibold">
                    Placed at {testimonials[current].company}
                  </Badge>
                  <div className="flex">
                    {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                      <Star key={i} size={14} className="text-accent fill-accent" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-6 mt-10">
        <button
          onClick={() => goTo(prev)}
          className="w-12 h-12 rounded-full border-2 border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all"
          aria-label="Previous"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current ? "w-8 h-3 bg-primary" : "w-3 h-3 bg-primary/20 hover:bg-primary/40"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => goTo(next)}
          className="w-12 h-12 rounded-full border-2 border-primary/20 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all"
          aria-label="Next"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

const stats: StatItem[] = [
  { icon: Users, target: 5000, suffix: "+", label: "Students Trained" },
  { icon: Briefcase, target: 200, suffix: "+", label: "Partner Companies" },
  { icon: TrendingUp, target: 95, suffix: "%", label: "Placement Rate" },
  { icon: Award, target: 10, suffix: "+", label: "Years Experience" },
];

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-start overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/90 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-primary/70 z-10" />
          <img
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
            alt="Technology Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-20 pt-10 pb-20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-10 xl:gap-16">

            {/* ── Left: Hero Text ── */}
            <div className="flex-1 min-w-0">
              <FadeIn direction="up">
                <Badge className="bg-accent/20 text-accent border-accent/30 hover:bg-accent/30 text-sm mb-6 px-4 py-1.5 backdrop-blur-sm">
                  WAY TO SUCCESS
                </Badge>
              </FadeIn>

              <FadeIn direction="up" delay={0.1}>
                <h1 className="text-3xl sm:text-4xl md:text-6xl xl:text-7xl font-display font-extrabold text-white leading-tight mb-6 tracking-tight">
                  <span className="block">Your Gateway to a</span>
                  <TypewriterWord />
                  <span className="block">IT Career</span>
                </h1>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <p className="text-lg md:text-xl xl:text-2xl text-white/80 mb-8 leading-relaxed font-light max-w-xl">
                  India's premier software training and placement institute. Master in-demand skills with industry experts and secure your dream job.
                </p>
              </FadeIn>

              <FadeIn direction="up" delay={0.3} className="flex flex-wrap gap-4">
                <Link href="/courses">
                  <Button size="lg" className="bg-accent text-primary hover:bg-accent/90 text-lg px-8 h-14 font-bold shadow-xl shadow-accent/20 border-none">
                    Explore Courses
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 text-lg px-8 h-14 font-semibold backdrop-blur-sm">
                    Get Free Demo
                  </Button>
                </Link>
              </FadeIn>

              <FadeIn direction="up" delay={0.5} className="mt-4">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {["PS","RK","AR","DN"].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-primary text-[10px] font-bold border-2 border-primary">{i}</div>
                    ))}
                  </div>
                  <p className="text-white/70 text-sm"><span className="text-accent font-bold">5,000+</span> students placed successfully</p>
                </div>
              </FadeIn>
            </div>

            {/* ── Right: YouTube Shorts auto-scroller ── */}
            <div className="hidden lg:flex flex-col items-center gap-3 shrink-0">
              {/* Label pill */}
              <div className="flex items-center gap-2 bg-red-600/90 backdrop-blur text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg mb-1">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#fff"/></svg>
                Student Success Stories
              </div>

              {/* Scrolling strip */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/10"
                style={{ height: "650px", width: "196px" }}>
                {/* fade masks */}
                <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-primary to-transparent z-10 pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-primary to-transparent z-10 pointer-events-none" />

                <div className="shorts-scroll-track flex flex-col gap-3 px-1 pt-1">
                  {/* Render 5 + duplicate for seamless loop */}
                  {[...["4Y0NmKCGEYk","KPtlCuMdL1o","6gKIc5BvJU0","v_27jDFDeQE","s4otnRZqzR0"],
                    ...["4Y0NmKCGEYk","KPtlCuMdL1o","6gKIc5BvJU0","v_27jDFDeQE","s4otnRZqzR0"]
                  ].map((id, i) => (
                    <a
                      key={`${id}-${i}`}
                      href={`https://www.youtube.com/shorts/${id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative rounded-2xl overflow-hidden flex-shrink-0 group shadow-lg"
                      style={{ width: "183px", height: "325px" }}
                    >
                      <img
                        src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                        alt="Student testimonial"
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                      {/* Play button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-red-600/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <svg viewBox="0 0 24 24" fill="white" className="w-4 h-4 ml-0.5"><polygon points="5,3 19,12 5,21" /></svg>
                        </div>
                      </div>
                      {/* Shorts badge */}
                      <div className="absolute top-2 left-2 flex items-center gap-1 bg-red-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#fff"/></svg>
                        Shorts
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <p className="text-white/50 text-[11px] text-center">Hover to pause · Click to watch</p>
            </div>

          </div>
        </div>

        <div className="absolute -bottom-1 left-0 right-0 w-full overflow-hidden leading-none text-background z-20">
          <svg className="block w-full h-[50px] md:h-[100px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section — Animated Counters */}
      <section className="py-12 bg-background relative z-30 -mt-10 md:-mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <FadeIn key={index} delay={index * 0.1} direction="up">
                <Card className="border-none shadow-xl shadow-primary/5 bg-white hover:-translate-y-2 transition-transform duration-300">
                  <CardContent className="p-6 md:p-8 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 text-accent">
                      <stat.icon size={32} />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
                      <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                    </h3>
                    <p className="text-muted-foreground font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-secondary/50 relative">
        <div
          className="absolute inset-0 opacity-[0.03] z-0"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/pattern-bg.png)` }}
        ></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Why Choose RK Software?</h2>
              <p className="text-lg text-muted-foreground">
                We provide a comprehensive learning ecosystem designed to transform beginners into industry-ready professionals.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Expert Trainers", desc: "Learn from professionals with 10+ years of real-time industry experience." },
              { title: "Live Projects", desc: "Gain hands-on experience by working on real-time corporate projects." },
              { title: "100% Placement", desc: "Dedicated placement cell with unlimited interview opportunities." },
              { title: "Flexible Batches", desc: "Choose between online, offline, weekend, or fast-track batches." },
              { title: "Industry Curriculum", desc: "Syllabus updated regularly to match current market demands." },
              { title: "Affordable Fees", desc: "Premium quality education at the most competitive fee structure." },
            ].map((feature, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-border hover:shadow-xl hover:border-accent/50 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-primary transition-colors text-primary">
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <FadeIn className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Popular Courses</h2>
              <p className="text-lg text-muted-foreground">High-demand skills that guarantee career growth.</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Link href="/courses">
                <Button variant="outline" className="font-semibold gap-2 border-primary text-primary hover:bg-primary hover:text-white group">
                  View All Courses
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Code2, title: "Full Stack Developer", duration: "6 Months", color: "bg-blue-500", desc: "Master MERN/Java/Python stack front to back." },
              { icon: Database, title: "Data Science & AI", duration: "6 Months", color: "bg-purple-500", desc: "Deep dive into ML, Python, Data Analytics." },
              { icon: Bug, title: "Software Testing", duration: "3 Months", color: "bg-red-500", desc: "Manual & Automation (Selenium) testing." },
              { icon: MonitorPlay, title: "UI/UX Design", duration: "3 Months", color: "bg-pink-500", desc: "Design thinking, Figma, prototyping." },
              { icon: Target, title: "Digital Marketing", duration: "3 Months", color: "bg-green-500", desc: "SEO, SEM, Social Media, Google Ads." },
              { icon: TrendingUp, title: "Tally Prime with GST", duration: "2 Months", color: "bg-amber-500", desc: "Complete business accounting solution." },
            ].map((course, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Card className="h-full border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <CardContent className="p-0">
                    <div className="p-8 relative">
                      <div className={`absolute top-0 right-0 w-32 h-32 ${course.color} rounded-full opacity-5 -translate-y-1/2 translate-x-1/4 group-hover:scale-150 transition-transform duration-700`}></div>
                      <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 text-primary">
                        <course.icon size={28} />
                      </div>
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-2xl font-bold font-display leading-tight">{course.title}</h3>
                      </div>
                      <Badge variant="secondary" className="mb-4 bg-secondary text-secondary-foreground font-medium">
                        {course.duration}
                      </Badge>
                      <p className="text-muted-foreground mb-8">{course.desc}</p>
                      <Link href="/contact">
                        <Button className="w-full bg-primary/5 text-primary hover:bg-primary hover:text-white border-none shadow-none font-semibold group-hover:bg-primary group-hover:text-white transition-colors">
                          Enquire Now
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Student Success Stories</h2>
              <p className="text-lg text-muted-foreground">
                Hear from our alumni who transformed their careers with RK Software Solutions.
              </p>
            </FadeIn>
          </div>
          <FadeIn>
            <TestimonialsCarousel />
          </FadeIn>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Start Your Success Journey Today</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
              Join thousands of successful alumni who have built rewarding careers in the IT industry through our programs.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-accent text-primary hover:bg-white hover:text-primary text-lg px-10 h-16 rounded-full font-bold shadow-2xl transition-all duration-300 transform hover:scale-105">
                Book Your Free Demo Class
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
