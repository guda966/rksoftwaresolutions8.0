import { motion } from "framer-motion";
import {
  Target, Lightbulb, Users, Award, BookOpen, Clock,
  Quote, CheckCircle2, TrendingUp, Star
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

/* ── Journey / Timeline ── */
const milestones = [
  { year: "2020", title: "The Beginning", desc: "Founded in Hyderabad with a single batch and a bold mission — turn aspiring professionals into job-ready IT experts." },
  { year: "2021", title: "First Placements", desc: "Achieved our first major placements in top IT firms, building trust with students and hiring partners alike." },
  { year: "2022", title: "Expanding Programs", desc: "Launched Data Science, Digital Marketing and Non-IT tracks. Campus upgraded to dedicated labs in Madhura Nagar." },
  { year: "2023", title: "200+ Hiring Partners", desc: "Onboarded 200+ companies across India. Placement rate crossed 90% — validating our industry-first approach." },
  { year: "2024", title: "3,000 Careers Built", desc: "Reached a significant milestone: 3,000+ students successfully placed in roles across India." },
  { year: "2025", title: "Way to Success, Stronger", desc: "Added Medical Billing, Cybersecurity and Salesforce. Growing into Telangana's most trusted training hub." },
];

/* ── Core Values ── */
const values = [
  { icon: BookOpen, color: "#3B82F6", title: "Excellence in Education", desc: "Never compromising on curriculum quality. Every module is industry-reviewed and practically driven." },
  { icon: Users, color: "#10B981", title: "Student-Centric", desc: "Every decision starts and ends with what's best for the student's career and long-term growth." },
  { icon: Clock, color: "#F59E0B", title: "Continuous Evolution", desc: "We update our syllabus regularly so our students are always ahead of market demands." },
  { icon: Award, color: "#8B5CF6", title: "Integrity & Trust", desc: "Honest counseling, transparent process, zero false promises. We say what we mean and deliver what we promise." },
];

/* ── Team ── */
const team = [
  { name: "Sunitha Reddy", role: "Senior Trainer — Python & Data Science", experience: "9+ Years", expertise: ["Python", "Machine Learning", "TensorFlow"], initials: "SR", color: "#8B5CF6" },
  { name: "Anil Sharma", role: "Trainer — Software Testing & Automation", experience: "8+ Years", expertise: ["Selenium", "TestNG", "API Testing"], initials: "AS", color: "#10B981" },
  { name: "Meena Patel", role: "Trainer — Digital Marketing & Non-IT", experience: "7+ Years", expertise: ["SEO/SEM", "Google Ads", "Social Media"], initials: "MP", color: "#F59E0B" },
  { name: "Kiran Babu", role: "Placement Head & Career Counselor", experience: "10+ Years", expertise: ["Career Guidance", "Corporate Relations", "Interview Coaching"], initials: "KB", color: "#EF4444" },
  { name: "Divya Rao", role: "Trainer — MERN Stack & UI/UX", experience: "6+ Years", expertise: ["React", "Node.js", "Figma"], initials: "DR", color: "#06B6D4" },
  { name: "Suresh Nair", role: "Trainer — Cloud & DevOps", experience: "8+ Years", expertise: ["AWS", "Docker", "Kubernetes"], initials: "SN", color: "#E95420" },
];

export default function About() {
  return (
    <div className="w-full bg-background">

      {/* ── Hero ── */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <FadeIn>
            <Badge className="bg-accent/15 text-accent border-accent/60 mb-6 text-sm font-bold px-4 py-1.5 shadow-[0_0_10px_rgba(245,197,24,0.15)]">
              Est. 2020 · Hyderabad, India
            </Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-5 text-white leading-tight">
              We Don't Just Teach Code.<br />
              <span className="text-accent">We Engineer Careers.</span>
            </h1>
            <p className="text-xl text-white/75 max-w-2xl mx-auto font-light leading-relaxed">
              Transforming fresh graduates and working professionals into confident, job-ready IT experts.
            </p>
          </FadeIn>

          {/* Quick stats */}
          <FadeIn delay={0.2} className="mt-12 flex flex-wrap justify-center gap-6 max-w-xl mx-auto">
            {[
              { val: "3K+", label: "Careers Built" },
              { val: "200+", label: "Hiring Partners" },
              { val: "90%+", label: "Placement Rate" },
            ].map((s, i) => (
              <div key={i} className="bg-white/10 backdrop-blur border border-white/15 rounded-2xl py-4 px-8">
                <p className="text-3xl font-display font-bold text-accent mb-1">{s.val}</p>
                <p className="text-white/70 text-sm font-medium">{s.label}</p>
              </div>
            ))}
          </FadeIn>
        </div>
      </section>

      {/* ── Founder / CEO Spotlight ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Photo column */}
            <FadeIn direction="left">
              <div className="flex justify-center">
                <div className="relative inline-block">
                  {/* Subtle glow behind photo */}
                  <div className="absolute inset-0 bg-accent/10 rounded-3xl blur-2xl scale-105 pointer-events-none" />
                  <img
                    src={`${import.meta.env.BASE_URL}images/ceo.jpeg`}
                    alt="G.V.Krishna Reddy — Founder & CEO, RK Software Solutions"
                    className="relative z-10 w-72 md:w-96 drop-shadow-2xl"
                  />
                </div>
              </div>
            </FadeIn>

            {/* Bio column */}
            <FadeIn direction="right">
              <div>
                <Badge className="bg-primary/5 text-primary border-primary/10 mb-4">Founder & CEO</Badge>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-1 leading-tight">
                  G.V.Krishna Reddy
                </h2>
                <p className="text-accent font-bold text-base mb-5 uppercase tracking-wide">
                  Founder & CEO — RK Software Solutions
                </p>

                {/* Pull quote */}
                <div className="relative mb-5 pl-5 border-l-4 border-accent">
                  <Quote size={18} className="text-accent/40 absolute -top-1 left-[-2px]" />
                  <p className="text-base text-muted-foreground italic leading-relaxed">
                    "I started RK Software Solutions to bridge the gap between education and industry — giving every student the real skills and confidence they need to land their dream job."
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  G.V.Krishna Reddy founded RK Software Solutions in 2020 with a clear goal: practical, job-focused training that actually gets people hired. Under his leadership, the institute has grown into one of Telangana's most trusted placement hubs. His philosophy: <strong className="text-primary">real skills, real projects, real jobs.</strong>
                </p>

                {/* Key achievements */}
                <div className="space-y-2.5 mb-7">
                  {[
                    "3,000+ students placed across India",
                    "200+ active hiring partners",
                    "Mentored 50+ batches from fresher to placement",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={15} className="text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>

              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Our Journey / Timeline ── */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeIn className="text-center mb-16">
            <Badge className="bg-accent/15 text-accent border-accent/60 mb-5 shadow-[0_0_10px_rgba(245,197,24,0.15)]">Since 2020</Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">Our Journey</h2>
            <p className="text-lg text-white/65 max-w-xl mx-auto">
              From a single batch in Hyderabad to shaping thousands of careers across India.
            </p>
          </FadeIn>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Centre line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2" />

            <div className="space-y-10">
              {milestones.map((m, i) => (
                <FadeIn key={i} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
                  <div className={`flex flex-col md:flex-row items-start md:items-center gap-6 ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                    {/* Content card */}
                    <div className="flex-1">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className="bg-white/8 backdrop-blur border border-white/10 rounded-2xl p-6 hover:bg-white/12 transition-colors"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-accent font-black text-xl">{m.year}</span>
                          <div className="flex-1 h-px bg-accent/20" />
                          <Star size={14} className="text-accent/60" />
                        </div>
                        <h3 className="text-white font-bold text-lg mb-1">{m.title}</h3>
                        <p className="text-white/60 text-sm leading-relaxed">{m.desc}</p>
                      </motion.div>
                    </div>

                    {/* Centre dot */}
                    <div className="hidden md:flex w-12 h-12 rounded-full bg-accent flex-shrink-0 items-center justify-center shadow-lg shadow-accent/30 z-10">
                      <TrendingUp size={18} className="text-primary" />
                    </div>

                    {/* Spacer */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-14">
            <Badge className="bg-primary/5 text-primary border-primary/10 mb-4">Purpose & Direction</Badge>
            <h2 className="text-4xl font-display font-bold mb-3">Mission & Vision</h2>
            <p className="text-muted-foreground text-lg">The north star that guides every decision we make.</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <Card className="h-full bg-white border-none shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <div className="h-[5px] bg-primary w-full" />
                <CardContent className="p-10">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-md">
                    <Target size={30} className="text-accent" />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4 text-primary">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To empower students and professionals with cutting-edge, practical skills through high-quality training — ensuring every learner is fully equipped to meet global industry standards and secure their dream career within 30–60 days.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="h-full bg-primary text-white border-none shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden relative">
                <div className="h-[5px] bg-accent w-full" />
                <div className="absolute -right-20 -bottom-20 w-64 h-64 border-[30px] border-white/5 rounded-full pointer-events-none" />
                <CardContent className="p-10 relative z-10">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-accent">
                    <Lightbulb size={30} />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4 text-white">Our Vision</h3>
                  <p className="text-white/75 leading-relaxed">
                    To be the most preferred and globally recognised IT training and placement hub — bridging the skill gap and building an ecosystem where every ambitious learner, regardless of background, can find their way to success.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-14">
            <Badge className="bg-primary/5 text-primary border-primary/10 mb-4">What We Stand For</Badge>
            <h2 className="text-4xl font-display font-bold mb-3">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that shape every class, every placement call, and every student interaction.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white border border-border rounded-2xl p-7 text-center hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-md group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: v.color }}
                  >
                    <v.icon size={26} className="text-white" />
                  </div>
                  <h3 className="font-bold text-primary mb-2">{v.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team / Faculty ── */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-14">
            <Badge className="bg-primary/5 text-primary border-primary/10 mb-4">The People Behind Your Success</Badge>
            <h2 className="text-4xl font-display font-bold mb-3">Meet Our Expert Faculty</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our trainers are active industry professionals who bring live projects, real experience, and genuine mentorship into every session.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {team.map((member, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 280 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 group"
                >
                  {/* Coloured top banner */}
                  <div
                    className="relative p-7 flex flex-col items-center text-white overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${member.color}dd, ${member.color})` }}
                  >
                    <div className="absolute top-0 right-0 w-28 h-28 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />

                    {/* Avatar */}
                    <div className="w-20 h-20 rounded-full bg-white/20 border-4 border-white/50 flex items-center justify-center text-2xl font-black mb-3 z-10 shadow-lg">
                      {member.initials}
                    </div>
                    <h3 className="text-lg font-bold text-center">{member.name}</h3>
                    <p className="text-white/80 text-xs text-center mt-1 px-4 leading-snug">{member.role}</p>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Award size={15} style={{ color: member.color }} />
                      <span className="text-sm font-semibold text-muted-foreground">{member.experience} Experience</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full"
                          style={{ color: member.color, backgroundColor: `${member.color}15` }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-primary relative overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl -translate-y-1/2 pointer-events-none hidden md:block" />
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-white/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none hidden md:block" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Ready to Start Your Success Journey?
            </h2>
            <p className="text-lg text-white/70 max-w-xl mx-auto mb-8">
              Join thousands of students who chose RK Software Solutions as their launchpad to a rewarding IT career.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/courses">
                <Button size="lg" className="bg-accent text-primary hover:bg-accent/90 font-bold px-8 h-13 text-base shadow-xl shadow-accent/20">
                  Explore Courses
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 font-semibold px-8 h-13 text-base">
                  Talk to Us
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}
