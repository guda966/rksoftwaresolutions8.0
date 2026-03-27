import { motion } from "framer-motion";
import {
  Trophy, Star, Building2, Quote, CheckCircle2,
  ArrowRight, Briefcase, Users, TrendingUp, Award,
  AlertCircle, Phone
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface Company {
  name: string;
  abbr: string;
  color: string;
  text: string;
}

const companies: Company[] = [
  { name: "TCS", abbr: "TCS", color: "#003087", text: "#ffffff" },
  { name: "Infosys", abbr: "INFY", color: "#007CC2", text: "#ffffff" },
  { name: "Wipro", abbr: "WIPRO", color: "#341062", text: "#ffffff" },
  { name: "HCL Tech", abbr: "HCL", color: "#0074B7", text: "#ffffff" },
  { name: "Capgemini", abbr: "CAP", color: "#0070AD", text: "#ffffff" },
  { name: "Tech Mahindra", abbr: "TECH-M", color: "#d11010", text: "#ffffff" },
  { name: "Cognizant", abbr: "CTG", color: "#1279BB", text: "#ffffff" },
  { name: "Accenture", abbr: "ACN", color: "#A100FF", text: "#ffffff" },
  { name: "IBM", abbr: "IBM", color: "#1F70C1", text: "#ffffff" },
  { name: "Oracle", abbr: "ORCL", color: "#F80000", text: "#ffffff" },
  { name: "Amazon", abbr: "AMZN", color: "#FF9900", text: "#131A22" },
  { name: "Microsoft", abbr: "MSFT", color: "#00A4EF", text: "#ffffff" },
  { name: "Flipkart", abbr: "FK", color: "#2874F0", text: "#ffffff" },
  { name: "Deloitte", abbr: "DTT", color: "#86BC25", text: "#ffffff" },
  { name: "Mphasis", abbr: "MPH", color: "#CC2233", text: "#ffffff" },
  { name: "Hexaware", abbr: "HEX", color: "#E1261C", text: "#ffffff" },
  { name: "Mindtree", abbr: "MTCL", color: "#007DB8", text: "#ffffff" },
  { name: "Paytm", abbr: "PAYTM", color: "#00B9F1", text: "#ffffff" },
  { name: "Zomato", abbr: "ZMT", color: "#E23744", text: "#ffffff" },
  { name: "Swiggy", abbr: "SWG", color: "#FC8019", text: "#ffffff" },
];

const testimonials = [
  {
    name: "Rahul Kumar",
    course: "Full Stack Development",
    company: "TCS",
    companyColor: "#003087",
    package: "4.5 LPA",
    quote: "RK Software Solutions changed my life. The real-time projects and mock interviews gave me the confidence to clear the TCS interview in my first attempt.",
    initials: "RK",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    name: "Priya Sharma",
    course: "Data Science",
    company: "Accenture",
    companyColor: "#A100FF",
    package: "6.0 LPA",
    quote: "The trainers here are exceptional. They don't just teach theory; they show you how things work in the actual industry. Best decision of my career.",
    initials: "PS",
    gradient: "from-purple-500 to-purple-700",
  },
  {
    name: "Mohammed Ali",
    course: "Java Programming",
    company: "Infosys",
    companyColor: "#007CC2",
    package: "4.0 LPA",
    quote: "I came from a non-IT background. The step-by-step approach and dedicated placement cell helped me transition smoothly into software development.",
    initials: "MA",
    gradient: "from-emerald-500 to-emerald-700",
  },
  {
    name: "Sneha Reddy",
    course: "Software Testing",
    company: "Cognizant",
    companyColor: "#1279BB",
    package: "3.8 LPA",
    quote: "100% placement assistance is not just a marketing gimmick here. They literally supported me until I got the offer letter.",
    initials: "SR",
    gradient: "from-pink-500 to-pink-700",
  },
  {
    name: "Vikram Singh",
    course: "Python Development",
    company: "Wipro",
    companyColor: "#341062",
    package: "4.2 LPA",
    quote: "The curriculum is perfectly aligned with what product companies are looking for. The hands-on coding sessions were incredibly helpful.",
    initials: "VS",
    gradient: "from-amber-500 to-amber-700",
  },
  {
    name: "Anjali Desai",
    course: "MERN Stack",
    company: "Tech Mahindra",
    companyColor: "#d11010",
    package: "5.5 LPA",
    quote: "Building full-stack apps from scratch during the course made the technical interview round a breeze. Highly recommended!",
    initials: "AD",
    gradient: "from-indigo-500 to-indigo-700",
  },
];

const placementSteps = [
  { icon: Award, title: "Resume Building", desc: "Professional resume crafted by our HR experts to stand out from the crowd." },
  { icon: Users, title: "Mock Interviews", desc: "Multiple rounds of technical and HR mock interviews with expert feedback." },
  { icon: Briefcase, title: "Job Referrals", desc: "Direct referrals to 200+ partner companies actively hiring our graduates." },
  { icon: TrendingUp, title: "Offer & Joining", desc: "Full support from offer letter negotiation to first-day onboarding." },
];

function CompanyCard({ company }: { company: Company }) {
  return (
    <motion.div
      whileHover={{ scale: 1.06, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex-shrink-0 w-44 h-20 rounded-2xl flex flex-col items-center justify-center gap-1 px-4 shadow-sm hover:shadow-xl transition-shadow cursor-default border border-white/20"
      style={{ backgroundColor: company.color }}
    >
      <span
        className="font-display font-extrabold text-lg leading-none tracking-wider"
        style={{ color: company.text }}
      >
        {company.abbr}
      </span>
      <span
        className="text-[10px] font-medium tracking-widest uppercase opacity-75 leading-none"
        style={{ color: company.text }}
      >
        {company.name}
      </span>
    </motion.div>
  );
}

function LogoMarquee() {
  const row1 = [...companies.slice(0, 10), ...companies.slice(0, 10)];
  const row2 = [...companies.slice(10), ...companies.slice(10)];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 mb-14 text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 bg-primary/5 text-primary border border-primary/10 px-4 py-2 rounded-full mb-4">
            <Building2 size={16} />
            <span className="text-sm font-semibold">200+ Hiring Partners</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Where Our Students Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our graduates are trusted by India's top IT companies and global multinationals.
          </p>
        </FadeIn>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="relative mb-5">
        <div className="flex gap-4 logo-track-left">
          {row1.map((c, i) => <CompanyCard key={`r1-${i}`} company={c} />)}
        </div>
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative">
        <div className="flex gap-4 logo-track-right">
          {row2.map((c, i) => <CompanyCard key={`r2-${i}`} company={c} />)}
        </div>
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}

export default function Placements() {
  return (
    <div className="w-full bg-background min-h-screen">

      {/* Hero */}
      <section className="bg-primary text-white py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32d7?w=1920&h=1080&fit=crop')] bg-cover bg-center" />
        <motion.div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white/5 blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <FadeIn>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-accent/20 text-accent border border-accent/30 px-5 py-2.5 rounded-full mb-8"
            >
              <Trophy size={18} />
              <span className="font-semibold text-sm">Proven Placement Record Since 2015</span>
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-white leading-tight">
              Your Success is<br />
              <span className="text-accent">Our Mission</span>
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
              { value: "95%", label: "Placement Rate", icon: TrendingUp },
              { value: "5000+", label: "Students Placed", icon: Users },
              { value: "200+", label: "Hiring Partners", icon: Building2 },
              { value: "3.5 LPA", label: "Avg. Package", icon: Briefcase },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex flex-col items-center"
              >
                <stat.icon size={24} className="mb-2 opacity-70" />
                <span className="text-4xl md:text-5xl font-extrabold font-display">{stat.value}</span>
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
              Our structured 4-step placement process ensures you're always one step ahead.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-4 gap-6 relative">
            <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-accent/20 via-accent to-accent/20 z-0" />
            {placementSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -8 }}
                className="relative z-10 flex flex-col items-center text-center bg-white rounded-2xl p-7 shadow-lg border border-border"
              >
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-5 shadow-lg shadow-primary/20">
                  <step.icon className="text-accent" size={28} />
                </div>
                <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-accent text-primary text-sm font-bold flex items-center justify-center shadow">
                  {i + 1}
                </div>
                <h3 className="font-bold text-lg text-primary mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Scrolling Company Logos */}
      <LogoMarquee />

      {/* Important Note */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border-2 border-amber-300 bg-amber-50 p-7 flex gap-5 items-start shadow-md"
          >
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
              <AlertCircle className="text-amber-600" size={26} />
            </div>
            <div>
              <h3 className="font-bold text-lg text-amber-900 mb-3">
                📌 Important Note on Placement Assistance
              </h3>
              <ul className="space-y-2.5 text-amber-800 text-sm">
                {[
                  "RK Software Solutions provides 100% Placement Assistance — this means we help you prepare and connect you with opportunities, not a guarantee of employment.",
                  "Job placement depends on individual performance in interviews, communication skills, and aptitude.",
                  "Students must maintain a minimum 80% attendance and complete all assigned projects to be eligible for placement support.",
                  "We do not charge any extra placement fees. All placement support is fully included in your course fee.",
                  "Our placement cell remains active for 1 year post course-completion for all enrolled students.",
                ].map((note, i) => (
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

      {/* Success Stories */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/5 text-primary border border-primary/10 px-4 py-2 rounded-full mb-4">
              <Star size={16} fill="currentColor" />
              <span className="text-sm font-semibold">Alumni Speak</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Real Students, Real Wins</h2>
            <p className="text-lg text-muted-foreground">Every success story is a reminder of what's possible. You could be next.</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((student, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
              >
                <Card className="h-full bg-white border-none shadow-lg hover:shadow-2xl transition-shadow overflow-hidden">
                  <div className={`h-2 w-full bg-gradient-to-r ${student.gradient}`} />
                  <CardContent className="p-7 pt-6 relative">
                    <Quote className="absolute top-5 right-5 text-accent/15" size={64} />

                    <div className="flex items-center gap-4 mb-5">
                      <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${student.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0`}>
                        {student.initials}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-primary leading-tight">{student.name}</h4>
                        <p className="text-xs text-muted-foreground font-medium">{student.course}</p>
                        <div className="flex gap-0.5 text-accent mt-1">
                          {[1,2,3,4,5].map(s => <Star key={s} size={12} fill="currentColor" />)}
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm italic leading-relaxed mb-6 relative z-10">
                      "{student.quote}"
                    </p>

                    <div className="flex justify-between items-center pt-4 border-t border-border">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-6 h-6 rounded text-[9px] font-bold flex items-center justify-center text-white"
                          style={{ backgroundColor: student.companyColor }}
                        >
                          {student.company.slice(0, 2)}
                        </div>
                        <span className="text-sm font-bold text-primary">{student.company}</span>
                      </div>
                      <Badge className="bg-green-100 text-green-800 border-none font-bold">
                        📦 {student.package}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-accent/10 blur-3xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-white/5 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 9, repeat: Infinity, delay: 3 }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-5">
              Ready to Join Our<br />
              <span className="text-accent">Success Story?</span>
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
              <a href="tel:+919876543210">
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
