import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Trophy, Star, Building2, CheckCircle2,
  ArrowRight, Briefcase, Users, TrendingUp, Award,
  AlertCircle, Phone, BadgeCheck, Quote, Youtube
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

/* ─────────────────────────────────────────── */
/* ANIMATED COUNTER                             */
/* ─────────────────────────────────────────── */

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
          const current = eased * target;
          setCount(target % 1 !== 0 ? Math.round(current * 10) / 10 : Math.floor(current));
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

/* ─────────────────────────────────────────── */
/* DATA                                         */
/* ─────────────────────────────────────────── */

interface Company {
  name: string;
  short: string;
  brand: string;
  sector: string;
  domain: string;
  logo: string;           // direct logo image URL
}

const companies: Company[] = [
  { name: "Tata Consultancy Services", short: "TCS",        brand: "#003087", sector: "IT Services",     domain: "tcs.com",          logo: "https://www.google.com/s2/favicons?domain=tcs.com&sz=128" },
  { name: "Infosys",                   short: "Infosys",    brand: "#007CC2", sector: "IT Services",     domain: "infosys.com",      logo: "https://www.google.com/s2/favicons?domain=infosys.com&sz=128" },
  { name: "Wipro",                     short: "Wipro",      brand: "#341062", sector: "IT & Consulting", domain: "wipro.com",        logo: "https://www.google.com/s2/favicons?domain=wipro.com&sz=128" },
  { name: "HCL Technologies",          short: "HCL",        brand: "#0074B7", sector: "Technology",      domain: "hcltech.com",      logo: "https://www.google.com/s2/favicons?domain=hcltech.com&sz=128" },
  { name: "Capgemini",                 short: "Capgemini",  brand: "#0070AD", sector: "Consulting",      domain: "capgemini.com",    logo: "https://www.google.com/s2/favicons?domain=capgemini.com&sz=128" },
  { name: "Tech Mahindra",             short: "Tech-M",     brand: "#C4122F", sector: "IT Services",     domain: "techmahindra.com", logo: "https://www.google.com/s2/favicons?domain=techmahindra.com&sz=128" },
  { name: "Cognizant",                 short: "Cognizant",  brand: "#1279BB", sector: "Technology",      domain: "cognizant.com",    logo: "https://www.google.com/s2/favicons?domain=cognizant.com&sz=128" },
  { name: "Accenture",                 short: "Accenture",  brand: "#A100FF", sector: "Consulting",      domain: "accenture.com",    logo: "https://www.google.com/s2/favicons?domain=accenture.com&sz=128" },
  { name: "IBM",                       short: "IBM",        brand: "#1F70C1", sector: "Enterprise IT",   domain: "ibm.com",          logo: "https://www.google.com/s2/favicons?domain=ibm.com&sz=128" },
  { name: "Oracle",                    short: "Oracle",     brand: "#F80000", sector: "Enterprise SW",   domain: "oracle.com",       logo: "https://www.google.com/s2/favicons?domain=oracle.com&sz=128" },
  { name: "Amazon",                    short: "Amazon",     brand: "#FF9900", sector: "E-Commerce",      domain: "amazon.com",       logo: "https://www.google.com/s2/favicons?domain=amazon.com&sz=128" },
  { name: "Microsoft",                 short: "Microsoft",  brand: "#00A4EF", sector: "Cloud & SW",      domain: "microsoft.com",    logo: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=128" },
  { name: "Flipkart",                  short: "Flipkart",   brand: "#2874F0", sector: "E-Commerce",      domain: "flipkart.com",     logo: "https://www.google.com/s2/favicons?domain=flipkart.com&sz=128" },
  { name: "Deloitte",                  short: "Deloitte",   brand: "#86BC25", sector: "Consulting",      domain: "deloitte.com",     logo: "https://www.google.com/s2/favicons?domain=deloitte.com&sz=128" },
  { name: "Mphasis",                   short: "Mphasis",    brand: "#CC2233", sector: "IT Services",     domain: "mphasis.com",      logo: "https://www.google.com/s2/favicons?domain=mphasis.com&sz=128" },
  { name: "Hexaware",                  short: "Hexaware",   brand: "#E1261C", sector: "Technology",      domain: "hexaware.com",     logo: "https://www.google.com/s2/favicons?domain=hexaware.com&sz=128" },
  { name: "LTIMindtree",               short: "LTI",        brand: "#007DB8", sector: "IT Services",     domain: "ltimindtree.com",  logo: "https://www.google.com/s2/favicons?domain=ltimindtree.com&sz=128" },
  { name: "Paytm",                     short: "Paytm",      brand: "#00B9F1", sector: "FinTech",         domain: "paytm.com",        logo: "https://www.google.com/s2/favicons?domain=paytm.com&sz=128" },
  { name: "Zomato",                    short: "Zomato",     brand: "#E23744", sector: "Food Tech",       domain: "zomato.com",       logo: "https://www.google.com/s2/favicons?domain=zomato.com&sz=128" },
  { name: "Swiggy",                    short: "Swiggy",     brand: "#FC8019", sector: "Food Tech",       domain: "swiggy.com",       logo: "https://www.google.com/s2/favicons?domain=swiggy.com&sz=128" },
];

interface Testimonial {
  name: string;
  course: string;
  company: string;
  brand: string;
  package: string;
  salary: string;
  quote: string;
  initials: string;
  gradient: string;
  experience: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Rahul Kumar",
    course: "Full Stack Development",
    company: "TCS",
    brand: "#003087",
    package: "4.5 LPA",
    salary: "₹37,500 / month",
    quote: "RK Software Solutions changed my life. The real-time projects and mock interviews gave me the confidence to clear the TCS interview in my very first attempt. The trainers are truly industry veterans.",
    initials: "RK",
    gradient: "from-blue-500 to-blue-700",
    experience: "Fresher → TCS in 3 months",
  },
  {
    name: "Priya Sharma",
    course: "Data Science & ML",
    company: "Accenture",
    brand: "#A100FF",
    package: "6.0 LPA",
    salary: "₹50,000 / month",
    quote: "The trainers here are exceptional. They don't just teach theory — they walk you through real industry scenarios. Best career decision I've ever made. Grateful to the entire team.",
    initials: "PS",
    gradient: "from-purple-500 to-purple-700",
    experience: "Career switch from Banking",
  },
  {
    name: "Mohammed Ali",
    course: "Java Development",
    company: "Infosys",
    brand: "#007CC2",
    package: "4.0 LPA",
    salary: "₹33,333 / month",
    quote: "I came from a non-IT background. The step-by-step approach and dedicated placement cell helped me transition smoothly into software development. Couldn't have done it alone.",
    initials: "MA",
    gradient: "from-emerald-500 to-emerald-700",
    experience: "Non-IT background → IT",
  },
  {
    name: "Sneha Reddy",
    course: "Software Testing",
    company: "Cognizant",
    brand: "#1279BB",
    package: "3.8 LPA",
    salary: "₹31,666 / month",
    quote: "100% placement assistance is not a marketing gimmick here. They literally kept following up with me, preparing me, until I received my final offer letter. Truly dedicated staff.",
    initials: "SR",
    gradient: "from-pink-500 to-pink-700",
    experience: "Placed within 45 days",
  },
  {
    name: "Vikram Singh",
    course: "Python Development",
    company: "Wipro",
    brand: "#341062",
    package: "4.2 LPA",
    salary: "₹35,000 / month",
    quote: "The curriculum is perfectly aligned with what product companies are looking for. Hands-on sessions and weekly assignments kept me sharp. The mock tests were exactly like real interviews.",
    initials: "VS",
    gradient: "from-amber-500 to-amber-700",
    experience: "2nd attempt success",
  },
  {
    name: "Anjali Desai",
    course: "MERN Stack",
    company: "Tech Mahindra",
    brand: "#C4122F",
    package: "5.5 LPA",
    salary: "₹45,833 / month",
    quote: "Building full-stack apps from scratch during the course made the technical interview round a breeze. I got an offer 2 weeks after completing the program. Highly recommended!",
    initials: "AD",
    gradient: "from-indigo-500 to-indigo-700",
    experience: "Got offer in 2 weeks",
  },
];

const placementSteps = [
  { icon: Award,     title: "Resume Building",  desc: "ATS-optimised resume crafted by our HR experts to stand out." },
  { icon: Users,     title: "Mock Interviews",   desc: "Technical + HR rounds simulated with real interview panels."  },
  { icon: Briefcase, title: "Job Referrals",     desc: "Direct referrals to 200+ hiring partners actively hiring."    },
  { icon: TrendingUp,title: "Offer & Joining",   desc: "Full support from offer negotiation to day-one onboarding."   },
];

const placementHighlights = [
  {
    src: `${import.meta.env.BASE_URL}images/placement_1.jpeg`,
    title: "Recent Placement Celebrations",
    caption:
      "A closer look at individual congratulations posts and the milestones our learners reach when preparation turns into a real offer.",
    badge: "Latest Wins",
    aspect: "aspect-[4/5]",
  },
  {
    src: `${import.meta.env.BASE_URL}images/placement_2.jpeg`,
    title: "Batch-Wide Placement Boards",
    caption:
      "Large-format success boards that reflect the consistency of our classroom training, mock interviews, and placement support.",
    badge: "Placement Wall",
    aspect: "aspect-[4/5]",
  },
  {
    src: `${import.meta.env.BASE_URL}images/placement_3.jpeg`,
    title: "Growing Alumni Momentum",
    caption:
      "A wider snapshot of the student community building strong careers across multiple roles, companies, and career stages.",
    badge: "Alumni Network",
    aspect: "aspect-[4/5]",
  },
];

/* ─────────────────────────────────────────── */
/* FLIP CARD COMPONENT                          */
/* ─────────────────────────────────────────── */

function FlipCard({ student }: { student: Testimonial }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="flip-card h-80 cursor-pointer"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped(f => !f)}
      aria-label={`Testimonial from ${student.name}`}
    >
      <div className={`flip-inner ${flipped ? "flipped" : ""}`}>

        {/* ── FRONT ── */}
        <div className="flip-face flip-front rounded-2xl overflow-hidden shadow-lg bg-white">
          <div className={`h-1.5 w-full bg-gradient-to-r ${student.gradient}`} />
          <div className="p-6 flex flex-col h-full">
            {/* Avatar + Name */}
            <div className="flex items-center gap-4 mb-4">
              <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${student.gradient} flex items-center justify-center text-white font-bold text-xl shadow-md flex-shrink-0`}>
                {student.initials}
              </div>
              <div>
                <h4 className="font-bold text-base text-primary leading-tight">{student.name}</h4>
                <p className="text-xs text-muted-foreground">{student.course}</p>
                <div className="flex gap-0.5 text-accent mt-1">
                  {[1,2,3,4,5].map(s => <Star key={s} size={11} fill="currentColor" />)}
                </div>
              </div>
            </div>

            {/* Quote preview */}
            <div className="relative flex-1">
              <Quote className="absolute -top-1 -left-1 text-accent/15" size={40} />
              <p className="text-sm text-muted-foreground italic leading-relaxed pl-6 line-clamp-4">
                "{student.quote}"
              </p>
            </div>

            {/* Placed at */}
            <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src={`https://img.logo.dev/${student.company.toLowerCase().replace(/\s+/g, '')}.com?token=pk_D3Oy5HHoRsKMHMmzFMGXEA&size=40`}
                  alt={student.company}
                  className="h-5 w-auto object-contain"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <span className="text-sm font-bold text-primary">{student.company}</span>
              </div>
              <span className="text-xs text-muted-foreground italic">Tap to flip →</span>
            </div>
          </div>
        </div>

        {/* ── BACK ── */}
        <div
          className="flip-face flip-back rounded-2xl overflow-hidden shadow-xl"
          style={{ backgroundColor: student.brand }}
        >
          <div className="p-6 flex flex-col h-full text-white">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest opacity-70">Placed at</p>
                <h3 className="text-2xl font-display font-extrabold">{student.company}</h3>
              </div>
              <BadgeCheck size={32} className="opacity-80" />
            </div>

            {/* Full quote */}
            <p className="text-sm leading-relaxed opacity-90 italic flex-1">
              "{student.quote}"
            </p>

            {/* Details */}
            <div className="mt-4 pt-4 border-t border-white/20 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs opacity-70">Package</span>
                <span className="font-bold text-base">{student.package}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs opacity-70">Monthly Take-Home</span>
                <span className="font-semibold text-sm">{student.salary}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs opacity-70">Journey</span>
                <span className="font-semibold text-xs opacity-90">{student.experience}</span>
              </div>
              <div className="flex items-center gap-1.5 pt-1">
                <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${student.gradient} flex items-center justify-center text-white font-bold text-xs`}>
                  {student.initials}
                </div>
                <span className="font-bold text-sm">{student.name}</span>
                <span className="opacity-60 text-xs">· {student.course}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

/* ─────────────────────────────────────────── */
/* COMPANY LOGO CARD                            */
/* ─────────────────────────────────────────── */

function CompanyLogoTile({ company, delay = 0 }: { company: Company; delay?: number }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <FadeIn delay={delay}>
      <motion.div
        whileHover={{ scale: 1.04, y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className="group relative bg-white rounded-2xl flex flex-col items-center justify-between gap-2 shadow-md hover:shadow-2xl transition-shadow duration-300 cursor-default overflow-hidden"
        style={{ padding: "20px 16px 16px" }}
      >
        {/* Brand-colour top bar */}
        <div className="absolute top-0 left-0 right-0 h-[4px] rounded-t-2xl" style={{ backgroundColor: company.brand }} />

        {/* Logo area */}
        <div className="w-full flex items-center justify-center" style={{ height: 52 }}>
          {!imgFailed && (
            <img
              src={company.logo}
              alt={company.name}
              onLoad={() => setImgLoaded(true)}
              onError={() => setImgFailed(true)}
              className={`max-h-[44px] w-auto max-w-[120px] object-contain transition-opacity duration-300 ${imgLoaded ? "opacity-100" : "opacity-0 absolute"}`}
            />
          )}
          {(!imgLoaded || imgFailed) && (
            <span
              className="font-display font-black text-xl tracking-tight leading-none text-center select-none px-1"
              style={{ color: company.brand }}
            >
              {company.short}
            </span>
          )}
        </div>

        {/* Company name */}
        <p className="text-[11px] font-bold text-gray-700 text-center leading-snug group-hover:text-gray-900 transition-colors">
          {company.name}
        </p>

        {/* Sector pill */}
        <span
          className="text-[9px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full"
          style={{ color: company.brand, backgroundColor: `${company.brand}18` }}
        >
          {company.sector}
        </span>

        {/* Verified badge on hover */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <BadgeCheck size={14} style={{ color: company.brand }} />
        </div>
      </motion.div>
    </FadeIn>
  );
}

/* ─────────────────────────────────────────── */
/* HIRING PARTNERS GRID                        */
/* ─────────────────────────────────────────── */

function HiringPartnersGrid() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Dot-grid texture */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />
      {/* Glow blobs */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Header */}
        <FadeIn className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-accent/15 text-accent border border-accent/60 px-4 py-2 rounded-full mb-5 max-w-fit mx-auto shadow-[0_0_10px_rgba(245,197,24,0.15)]">
            <Building2 size={15} />
            <span className="text-sm font-bold tracking-wide">200+ Hiring Partners</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Where Our Students Work
          </h2>
          <p className="text-lg text-white/65 max-w-2xl mx-auto leading-relaxed">
            Our graduates are trusted by India's top IT companies and global multinationals across every major tech sector.
          </p>
        </FadeIn>

        {/* Company grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {companies.map((company, i) => (
            <CompanyLogoTile key={company.name} company={company} delay={i * 0.04} />
          ))}
        </div>

        {/* Footer caption */}
        <FadeIn className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-white/8 border border-white/10 rounded-2xl px-6 py-3">
            <BadgeCheck size={18} className="text-accent flex-shrink-0" />
            <p className="text-white/65 text-sm">
              Plus <span className="text-accent font-semibold">180+ more companies</span> across IT, FinTech, E-Commerce & Consulting
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────── */
/* PAGE                                         */
/* ─────────────────────────────────────────── */

function PlacementHighlightCard({
  item,
  delay = 0,
}: {
  item: (typeof placementHighlights)[number];
  delay?: number;
}) {
  return (
    <FadeIn delay={delay}>
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 260, damping: 24 }}
        className="group h-full overflow-hidden rounded-[22px] border border-border/60 bg-white shadow-[0_18px_48px_-40px_rgba(15,23,42,0.24)]"
      >
        <div className="relative overflow-hidden bg-slate-50">
          <div className={`overflow-hidden ${item.aspect} p-3 md:p-4`}>
            <img
              src={item.src}
              alt={item.title}
              className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
              loading="lazy"
            />
          </div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-accent/35 via-red-500/10 to-transparent" />
          <div className="absolute left-4 top-4">
            <span className="inline-flex items-center rounded-full border border-primary/10 bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-primary shadow-sm backdrop-blur">
              {item.badge}
            </span>
          </div>
        </div>

        <div className="p-4 md:p-5">
          <div className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.24em] text-primary/55">
            <span>Placement Highlights</span>
            <span className="h-px flex-1 bg-primary/10" />
          </div>
          <h3 className="text-base md:text-lg font-display font-bold tracking-tight text-primary">
            {item.title}
          </h3>
          <p className="mt-2 text-[13px] leading-6 text-muted-foreground">
            {item.caption}
          </p>
        </div>
      </motion.article>
    </FadeIn>
  );
}

export default function Placements() {
  return (
    <div className="w-full bg-background min-h-screen">

      {/* Hero */}
      <section className="bg-primary text-white py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32d7?w=1920&h=1080&fit=crop')] bg-cover bg-center" />
        <motion.div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
          animate={{ scale:[1,1.2,1], opacity:[0.3,0.6,0.3] }} transition={{ duration:6, repeat:Infinity }} />
        <motion.div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/5 blur-3xl"
          animate={{ scale:[1,1.3,1], opacity:[0.2,0.5,0.2] }} transition={{ duration:8, repeat:Infinity, delay:2 }} />

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <FadeIn>
            <motion.div initial={{ scale:0 }} animate={{ scale:1 }}
              transition={{ type:"spring", stiffness:200, delay:0.2 }}
              className="inline-flex items-center gap-2 bg-accent/15 text-accent border border-accent/60 px-5 py-2.5 rounded-full mb-8 max-w-fit mx-auto shadow-[0_0_12px_rgba(245,197,24,0.2)]">
              <Trophy size={18} />
              <span className="font-semibold text-sm">Proven Placement Record Since 2015</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-white leading-tight">
              Your Success is<br /><span className="text-accent">Our Mission</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light mb-10">
              We don't just train you — we walk with you until you land your dream job.
              95% of our students get placed within 60 days of course completion.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/courses">
                <Button className="bg-accent text-primary hover:bg-accent/90 font-bold px-8 py-6 text-lg shadow-2xl shadow-accent/30">
                  Explore Courses <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg">
                  Talk to Placement Team
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-accent py-10 shadow-xl relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-primary text-center">
            {[
              { target: 95,   suffix: "%",     label: "Placement Rate",  icon: TrendingUp },
              { target: 3000, suffix: "+",     label: "Students Placed", icon: Users      },
              { target: 200,  suffix: "+",     label: "Hiring Partners", icon: Building2  },
              { target: 3.5,  suffix: " LPA",  label: "Avg. Package",    icon: Briefcase  },
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1 }} className="flex flex-col items-center">
                <stat.icon size={24} className="mb-2 opacity-70" />
                <span className="text-4xl md:text-5xl font-extrabold font-display">
                  <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                </span>
                <span className="font-semibold uppercase tracking-wider text-sm mt-1 opacity-80">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center mb-14">
            <h2 className="text-4xl font-display font-bold mb-4">How We Get You Placed</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our structured 4-step process ensures you're always one step ahead.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-accent/20 via-accent to-accent/20 z-0" />
            {placementSteps.map((step,i) => (
              <motion.div key={i} initial={{ opacity:0, y:30 }}
                whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
                transition={{ delay:i*0.15 }} whileHover={{ y:-8 }}
                className="relative z-10 flex flex-col items-center text-center bg-white rounded-2xl p-7 shadow-lg border border-border">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-5 shadow-lg shadow-primary/20">
                  <step.icon className="text-accent" size={28} />
                </div>
                <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-accent text-primary text-sm font-bold flex items-center justify-center shadow">
                  {i+1}
                </div>
                <h3 className="font-bold text-lg text-primary mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Partners Grid */}
      <HiringPartnersGrid />

      {/* Important Note */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
            className="rounded-2xl border-2 border-amber-300 bg-amber-50 p-7 flex gap-5 items-start shadow-md">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
              <AlertCircle className="text-amber-600" size={26} />
            </div>
            <div>
              <h3 className="font-bold text-lg text-amber-900 mb-3">📌 Important Note on Placement Assistance</h3>
              <ul className="space-y-2.5 text-amber-800 text-sm">
                {[
                  "RK Software Solutions provides 100% Placement Assistance — this means we help you prepare and connect you with opportunities, not a guarantee of employment.",
                  "Job placement depends on individual performance in interviews, communication skills, and aptitude.",
                  "Students must maintain a minimum 80% attendance and complete all assigned projects to be eligible for placement support.",
                  "Our placement cell remains active for 1 year post course-completion for all enrolled students.",
                ].map((note,i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 size={15} className="text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Flip Testimonials */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center max-w-3xl mx-auto mb-6">
            <div className="inline-flex items-center gap-2 bg-primary/5 text-primary border border-primary/10 px-4 py-2 rounded-full mb-4">
              <Star size={16} fill="currentColor" />
              <span className="text-sm font-semibold">Alumni Speak</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Real Students, Real Wins</h2>
            <p className="text-lg text-muted-foreground">
              Hover over a card to reveal the full story and placement details.
            </p>
          </FadeIn>

          <p className="text-center text-xs text-muted-foreground mb-10 italic">
            (Hover or tap any card to flip)
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((student, i) => (
              <motion.div key={i}
                initial={{ opacity:0, y:40 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{ delay:i*0.1 }}>
                <FlipCard student={student} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Shorts — Student Success Stories */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
          <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <FadeIn className="mx-auto mb-14 max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-primary">
              <Trophy size={16} className="text-accent" />
              <span className="text-sm font-semibold">Placement Highlights</span>
            </div>
            <h2 className="text-4xl font-display font-bold tracking-tight text-primary md:text-5xl">
              Moments That Make The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Journey Real
              </span>
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              A visual look at the placement momentum our students build through training, interview preparation, and consistent support from the RK team.
            </p>
          </FadeIn>

          <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-3">
            <PlacementHighlightCard item={placementHighlights[0]} delay={0.05} />
            <PlacementHighlightCard item={placementHighlights[1]} delay={0.12} />
            <PlacementHighlightCard item={placementHighlights[2]} delay={0.2} />
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#FF0000] via-[#FFB300] to-[#1a237e]" />
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-50 rounded-full blur-3xl opacity-60" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-50 rounded-full blur-3xl opacity-60" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section header */}
          <FadeIn className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-3 bg-red-600 text-white px-5 py-2.5 rounded-full mb-5 shadow-lg shadow-red-200">
              <Youtube size={18} />
              <span className="text-sm font-bold tracking-wide">STUDENT SUCCESS SHORTS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Real Students.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-[#FFB300]">
                Real Results.
              </span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hear directly from our placed students — in their own words, on camera.
              These are authentic success stories from the RK Software Solutions family.
            </p>
          </FadeIn>

          {/* Shorts grid — portrait 9:16 */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mb-12 max-w-5xl mx-auto">
            {[
              { id: "4Y0NmKCGEYk", label: "Placed Student Story" },
              { id: "KPtlCuMdL1o", label: "Success Journey" },
              { id: "6gKIc5BvJU0", label: "Career Transformation" },
              { id: "v_27jDFDeQE", label: "Dream Job Achieved" },
              { id: "s4otnRZqzR0", label: "IT Career Launch" },
              { id: "hLAYY5e8Rgw", label: "Student Review" },
              { id: "Pkv_5lxTXDU", label: "Placement Experience" },
            ].map((short, i) => (
              <motion.div
                key={short.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col"
              >
                {/* Portrait embed */}
                <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-gray-100 hover:border-red-300 transition-colors group"
                  style={{ aspectRatio: "9/16" }}>
                  {/* YouTube brand pill */}
                  <div className="absolute top-2 left-2 z-10 flex items-center gap-1 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                    <Youtube size={10} /> Shorts
                  </div>
                  <iframe
                    src={`https://www.youtube.com/embed/${short.id}?rel=0&modestbranding=1`}
                    title={`RK Software Solutions — ${short.label}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
                {/* Label */}
                <p className="mt-2 text-center text-xs font-semibold text-muted-foreground line-clamp-1 px-1">
                  {short.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA strip */}
          <FadeIn>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-gradient-to-r from-red-600 to-red-700 rounded-3xl px-8 py-6 shadow-2xl shadow-red-200 max-w-2xl mx-auto">
              <div className="text-white text-center sm:text-left">
                <p className="font-bold text-lg leading-tight">Watch more on our channel</p>
                <p className="text-white/75 text-sm">20+ training videos & student stories — all free</p>
              </div>
              <a
                href="https://www.youtube.com/@RKSoftwareSolutionss"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0"
              >
                <Button className="bg-white text-red-600 hover:bg-red-50 font-bold px-6 py-3 shadow-lg">
                  <Youtube size={18} className="mr-2" /> Subscribe Free
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <motion.div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-accent/10 blur-3xl"
          animate={{ scale:[1,1.3,1] }} transition={{ duration:7, repeat:Infinity }} />
        <motion.div className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-white/5 blur-3xl"
          animate={{ scale:[1,1.2,1] }} transition={{ duration:9, repeat:Infinity, delay:3 }} />
        <div className="container mx-auto px-4 text-center relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-5">
              Ready to Join Our<br /><span className="text-accent">Success Story?</span>
            </h2>
            <p className="text-white/75 text-lg max-w-xl mx-auto mb-9">
              Enroll today and let our placement team work tirelessly to land you the career you deserve.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/courses">
                <Button className="bg-accent text-primary hover:bg-accent/90 font-bold px-8 py-6 text-lg shadow-2xl shadow-accent/30">
                  Browse Courses <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
              <a href="tel:+919063616867">
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg">
                  <Phone size={18} className="mr-2" /> Call Us Now
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
