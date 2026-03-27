import { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase, Users, TrendingUp, Heart, CheckCircle2,
  Bell, FileText, Send, ArrowRight, Linkedin,
  Clock, Search, Star, Handshake, UserCheck, BadgeCheck
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

/* ── Why Work With Us ── */
const perks = [
  {
    icon: TrendingUp,
    color: "#3B82F6",
    title: "Growth-First Culture",
    desc: "We invest in our people. Regular upskilling workshops, certifications, and a clear path to grow your career.",
  },
  {
    icon: Heart,
    color: "#EF4444",
    title: "Passionate Team",
    desc: "Work alongside mentors who genuinely care about students and about each other. No toxic politics — just good work.",
  },
  {
    icon: Briefcase,
    color: "#8B5CF6",
    title: "Impactful Work",
    desc: "Every role here directly changes a student's life. Your contribution translates into real placement success stories.",
  },
  {
    icon: Users,
    color: "#10B981",
    title: "Collaborative Environment",
    desc: "Flat hierarchy, open feedback, and a supportive team that celebrates wins together.",
  },
];

/* ── Hiring Process Steps ── */
const hiringSteps = [
  {
    step: "01",
    icon: FileText,
    color: "#3B82F6",
    title: "Submit Your Resume",
    desc: "Fill the form below with your details and area of interest. We review every submission personally.",
  },
  {
    step: "02",
    icon: Search,
    color: "#8B5CF6",
    title: "Initial Screening",
    desc: "Our HR team reviews your profile and reaches out within 3–5 working days if there's a fit.",
  },
  {
    step: "03",
    icon: Star,
    color: "#F59E0B",
    title: "Skills Assessment",
    desc: "A short task or demo session tailored to the role — no trick questions, just real-world scenarios.",
  },
  {
    step: "04",
    icon: Handshake,
    color: "#10B981",
    title: "Interview",
    desc: "A friendly conversation with the team lead. We want to know you — your experience, goals, and approach.",
  },
  {
    step: "05",
    icon: UserCheck,
    color: "#EF4444",
    title: "Offer & Onboarding",
    desc: "Offer letter shared within 48 hours. A structured onboarding ensures you hit the ground running.",
  },
];

/* ── Resume Form ── */
const roleOptions = [
  "IT Trainer (Full Stack / Java / Python)",
  "IT Trainer (Data Science / AI / ML)",
  "IT Trainer (Software Testing / QA)",
  "IT Trainer (Cloud / DevOps)",
  "Non-IT Trainer (Medical Billing & Coding)",
  "Non-IT Trainer (Digital Marketing / HR)",
  "Placement Coordinator",
  "Business Development Executive",
  "Front Desk / Admin Executive",
  "Other / Open to Discuss",
];

function ResumeForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notify, setNotify] = useState(false);
  const [notifyEmail, setNotifyEmail] = useState("");
  const [notifyDone, setNotifyDone] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  }

  function handleNotify(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setNotifyDone(true);
  }

  return (
    <div className="grid lg:grid-cols-2 gap-10 items-start">

      {/* ── Resume Submission ── */}
      <div className="bg-white rounded-3xl shadow-xl border border-border p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
            <FileText size={20} className="text-accent" />
          </div>
          <div>
            <h3 className="text-xl font-bold font-display text-primary">Submit Your Resume</h3>
            <p className="text-sm text-muted-foreground">We'll keep you in mind for future openings</p>
          </div>
        </div>

        {submitted ? (
          <div className="text-center py-10">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BadgeCheck size={32} className="text-green-600" />
            </div>
            <h4 className="text-lg font-bold text-primary mb-2">Profile Received!</h4>
            <p className="text-muted-foreground text-sm max-w-xs mx-auto">
              Thank you for your interest. We'll review your profile and reach out when a matching role opens up.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="c-name">Full Name *</Label>
                <Input id="c-name" placeholder="e.g. Priya Reddy" required />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="c-phone">Phone Number *</Label>
                <Input id="c-phone" placeholder="+91 90636 16867" required />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="c-email">Email Address *</Label>
              <Input id="c-email" type="email" placeholder="you@example.com" required />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="c-role">Role You're Interested In *</Label>
              <select
                id="c-role"
                required
                className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                <option value="">Select a role…</option>
                {roleOptions.map((r) => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="c-exp">Years of Experience</Label>
                <select
                  id="c-exp"
                  className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  <option value="">Select…</option>
                  <option>Fresher (0–1 yr)</option>
                  <option>1–3 years</option>
                  <option>3–5 years</option>
                  <option>5–8 years</option>
                  <option>8+ years</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="c-mode">Preferred Mode</Label>
                <select
                  id="c-mode"
                  className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  <option value="">Select…</option>
                  <option>Offline (Hyderabad)</option>
                  <option>Online</option>
                  <option>Hybrid</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="c-linkedin">LinkedIn / Portfolio URL</Label>
              <Input id="c-linkedin" placeholder="https://linkedin.com/in/yourname" />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="c-msg">Brief Introduction *</Label>
              <textarea
                id="c-msg"
                required
                rows={3}
                placeholder="Tell us a bit about yourself, your skills and what you're looking for…"
                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-5 text-base shadow-lg shadow-primary/20"
            >
              {loading ? (
                <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Submitting…</span>
              ) : (
                <span className="flex items-center gap-2"><Send size={16} />Submit My Profile</span>
              )}
            </Button>
          </form>
        )}
      </div>

      {/* ── Right Side: Job Alert + Info ── */}
      <div className="flex flex-col gap-6">

        {/* Job Alert Card */}
        <div className="bg-primary rounded-3xl p-7 text-white relative overflow-hidden">
          <div className="absolute -top-8 -right-8 w-36 h-36 bg-accent/10 rounded-full blur-2xl" />
          <div className="flex items-center gap-3 mb-4 relative z-10">
            <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center">
              <Bell size={20} className="text-accent" />
            </div>
            <div>
              <p className="font-bold text-white">Get Job Alerts</p>
              <p className="text-white/60 text-xs">Be first to know when we hire</p>
            </div>
          </div>

          {notifyDone ? (
            <div className="flex items-center gap-2 bg-green-500/20 border border-green-400/30 rounded-xl px-4 py-3 relative z-10">
              <CheckCircle2 size={18} className="text-green-400 flex-shrink-0" />
              <p className="text-sm text-white font-medium">You're on the list! We'll notify you.</p>
            </div>
          ) : (
            <form onSubmit={handleNotify} className="flex gap-2 relative z-10">
              <Input
                type="email"
                required
                value={notifyEmail}
                onChange={(e) => setNotifyEmail(e.target.value)}
                placeholder="your@email.com"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:bg-white/15"
              />
              <Button type="submit" className="bg-accent text-primary font-bold hover:bg-accent/90 px-4 flex-shrink-0">
                <Bell size={15} />
              </Button>
            </form>
          )}
        </div>

        {/* Currently Hiring Status */}
        <div className="bg-white rounded-3xl border border-border shadow-md p-6">
          <div className="flex items-center gap-3 mb-4">
            <Briefcase size={20} className="text-primary" />
            <h4 className="font-bold text-primary">Current Openings</h4>
          </div>
          <div className="text-center py-6">
            <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock size={24} className="text-gray-400" />
            </div>
            <p className="font-semibold text-gray-700 mb-1">No openings right now</p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We're not actively hiring at the moment, but great talent is always welcome. Submit your profile above — we'll reach out when something fits.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-accent/8 border border-accent/20 rounded-xl px-4 py-2.5 mt-2">
            <Bell size={14} className="text-accent flex-shrink-0" />
            <p className="text-xs text-primary font-medium">
              Subscribe above to get an email the moment we post a new role.
            </p>
          </div>
        </div>

        {/* What to expect */}
        <div className="bg-secondary/50 rounded-3xl border border-border p-6">
          <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
            <CheckCircle2 size={17} className="text-accent" />
            What to Expect
          </h4>
          <ul className="space-y-3">
            {[
              "CV reviewed within 3–5 business days",
              "Friendly, transparent hiring process",
              "No surprise rounds or trick questions",
              "Timely feedback at every stage",
              "Offer within 48 hrs of final round",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <ArrowRight size={14} className="text-accent mt-0.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Careers() {
  return (
    <div className="w-full bg-background min-h-screen pb-24">

      {/* ── Hero ── */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent border border-accent/30 px-4 py-2 rounded-full mb-6 text-sm font-bold">
              <Briefcase size={14} />
              Join Our Team
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-5 text-white leading-tight">
              Build a Career That<br />
              <span className="text-accent">Makes a Difference</span>
            </h1>
            <p className="text-xl text-white/75 max-w-2xl mx-auto font-light leading-relaxed mb-8">
              We're always on the lookout for passionate trainers, coordinators and professionals who love helping students succeed.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-5 py-2.5 rounded-full text-white/80 text-sm">
              <Clock size={14} className="text-accent" />
              <span><strong className="text-white">No active openings</strong> right now — but we'd love to hear from you!</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Why Work With Us ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-14">
            <Badge className="bg-primary/5 text-primary border-primary/10 mb-4">Why RK Software?</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-3">Why Work With Us</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              More than a job — a place where your work genuinely transforms lives every day.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="group bg-white border border-border rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md"
                    style={{ backgroundColor: perk.color }}
                  >
                    <perk.icon size={26} className="text-white" />
                  </div>
                  <h3 className="font-bold text-primary mb-2">{perk.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{perk.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hiring Flow ── */}
      <section className="py-20 bg-secondary/40 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-14">
            <Badge className="bg-primary/5 text-primary border-primary/10 mb-4">Our Process</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-3">How We Hire</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Transparent, fair, and friendly — from first contact to your first day.
            </p>
          </FadeIn>

          {/* Steps */}
          <div className="relative">
            {/* Connector line (desktop) */}
            <div className="hidden lg:block absolute top-[46px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-border to-transparent z-0" />

            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {hiringSteps.map((s, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-white rounded-2xl p-5 shadow-sm border border-border flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300"
                  >
                    {/* Step number bubble */}
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-3 shadow-md relative"
                      style={{ backgroundColor: s.color }}
                    >
                      <s.icon size={22} className="text-white" />
                      <span
                        className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full text-[10px] font-black flex items-center justify-center bg-white border-2 shadow-sm"
                        style={{ color: s.color, borderColor: s.color }}
                      >
                        {s.step}
                      </span>
                    </div>
                    <h4 className="font-bold text-primary text-sm mb-1.5 leading-tight">{s.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Resume Form + Job Alert ── */}
      <section className="py-20 bg-white" id="apply">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-12">
            <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">Open Application</Badge>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-3">
              Drop Your Resume Anytime
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              No openings today doesn't mean no opportunity tomorrow. Submit your profile and we'll call when the right role opens.
            </p>
          </FadeIn>

          <ResumeForm />
        </div>
      </section>

    </div>
  );
}
