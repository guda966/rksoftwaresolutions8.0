import { useState } from "react";
import {
  Code2, Database, Globe, Layers, LayoutTemplate, Monitor,
  Smartphone, TestTube, Briefcase, Calculator, Users, MessageSquare,
  Cloud, Shield, BarChart3, Terminal, Server, Cpu, PieChart,
  HeartPulse, LucideIcon
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { FadeIn } from "@/components/ui/FadeIn";

interface Course {
  id: number;
  title: string;
  duration: string;
  icon: LucideIcon;
  color: string;
  mode: string;
  category: string;
  features: string[];
  approach: string;
}

const itCourses: Course[] = [
  {
    id: 1, title: "Full Stack Development", duration: "60 Days",
    icon: Layers, color: "#3B82F6", mode: "Online / Offline", category: "Development",
    features: ["MERN / Java / Python Stack", "Real-time Projects", "REST & GraphQL APIs"],
    approach: "Build 3 end-to-end projects covering frontend, backend & deployment.",
  },
  {
    id: 2, title: "Java Programming", duration: "45 Days",
    icon: Code2, color: "#E76F00", mode: "Online / Offline", category: "Development",
    features: ["Core & Advanced Java", "Spring Boot", "Microservices & REST"],
    approach: "Concept-first teaching with real corporate use-case assignments daily.",
  },
  {
    id: 3, title: "Python Development", duration: "45 Days",
    icon: Code2, color: "#3776AB", mode: "Online / Offline", category: "Development",
    features: ["Python Core & OOP", "Django / Flask", "REST API Development"],
    approach: "Hands-on coding from Day 1 with weekly mini-projects.",
  },
  {
    id: 4, title: "React.js", duration: "45 Days",
    icon: Globe, color: "#0EA5E9", mode: "Online / Offline", category: "Development",
    features: ["Hooks & Context API", "Redux Toolkit", "React Query & Routing"],
    approach: "Component-driven development building a full SPA from scratch.",
  },
  {
    id: 5, title: "Node.js & Express", duration: "45 Days",
    icon: Server, color: "#339933", mode: "Online / Offline", category: "Development",
    features: ["Node.js Core", "Express & REST APIs", "JWT Auth & MongoDB"],
    approach: "Build scalable backends with real-world authentication systems.",
  },
  {
    id: 6, title: "MERN Stack", duration: "60 Days",
    icon: LayoutTemplate, color: "#06B6D4", mode: "Online / Offline", category: "Development",
    features: ["MongoDB, Express, React", "Node.js", "Full Deployment on AWS"],
    approach: "Integrated project covering every layer of a modern web app.",
  },
  {
    id: 7, title: "Angular", duration: "45 Days",
    icon: Globe, color: "#DD0031", mode: "Online / Offline", category: "Development",
    features: ["TypeScript & Decorators", "RxJS & Observables", "NgRx State Mgmt"],
    approach: "Enterprise-style app development following Angular best practices.",
  },
  {
    id: 8, title: "Data Science & AI", duration: "60 Days",
    icon: Database, color: "#8B5CF6", mode: "Online / Offline", category: "Data & AI",
    features: ["Machine Learning (Scikit)", "Data Analytics & EDA", "Deep Learning Basics"],
    approach: "Case-study driven learning with Kaggle-style problem solving.",
  },
  {
    id: 9, title: "Data Analytics & Power BI", duration: "45 Days",
    icon: BarChart3, color: "#F59E0B", mode: "Online / Offline", category: "Data & AI",
    features: ["SQL & Excel Analytics", "Power BI Dashboards", "Tableau Basics"],
    approach: "Real business datasets used to build executive-ready dashboards.",
  },
  {
    id: 10, title: "Software Testing", duration: "45 Days",
    icon: TestTube, color: "#EF4444", mode: "Online / Offline", category: "Testing",
    features: ["Manual Testing & STLC", "Selenium WebDriver", "API Testing (Postman)"],
    approach: "Defect lifecycle training with live bug tracking in JIRA.",
  },
  {
    id: 11, title: ".NET Development", duration: "45 Days",
    icon: Monitor, color: "#512BD4", mode: "Online / Offline", category: "Development",
    features: ["C# & ASP.NET Core", "Entity Framework", "SQL Server & Azure"],
    approach: "Enterprise application development aligned with Microsoft stack jobs.",
  },
  {
    id: 12, title: "Android Development", duration: "60 Days",
    icon: Smartphone, color: "#3DDC84", mode: "Online / Offline", category: "Mobile",
    features: ["Kotlin / Java", "Jetpack Compose", "Play Store Publishing"],
    approach: "Build and publish a real app covering UI, APIs and local storage.",
  },
  {
    id: 13, title: "Cloud Computing (AWS)", duration: "60 Days",
    icon: Cloud, color: "#FF9900", mode: "Online / Offline", category: "Cloud & DevOps",
    features: ["EC2, S3, Lambda", "VPC & IAM Security", "AWS Certified prep"],
    approach: "Lab-heavy sessions with live AWS console hands-on every day.",
  },
  {
    id: 14, title: "DevOps Engineering", duration: "60 Days",
    icon: Terminal, color: "#E95420", mode: "Online / Offline", category: "Cloud & DevOps",
    features: ["Docker & Kubernetes", "CI/CD with Jenkins", "Terraform & Ansible"],
    approach: "Pipeline-first learning — deploy real apps from Day 1.",
  },
  {
    id: 15, title: "Cybersecurity", duration: "60 Days",
    icon: Shield, color: "#DC2626", mode: "Online / Offline", category: "Security",
    features: ["Ethical Hacking Basics", "Network Security", "CEH Concepts"],
    approach: "Capture-the-flag exercises and penetration testing labs.",
  },
  {
    id: 16, title: "Salesforce", duration: "45 Days",
    icon: Cpu, color: "#00A1E0", mode: "Online / Offline", category: "CRM & ERP",
    features: ["Admin & Developer Track", "Apex & Visualforce", "Salesforce Certification"],
    approach: "Trailhead-integrated learning with sandbox org access.",
  },
  {
    id: 17, title: "SQL & Database Management", duration: "30 Days",
    icon: Database, color: "#00758F", mode: "Online / Offline", category: "Data & AI",
    features: ["SQL Core to Advanced", "Stored Procedures", "Query Optimization"],
    approach: "300+ practice queries with real e-commerce schema exercises.",
  },
  {
    id: 18, title: "PHP Development", duration: "45 Days",
    icon: Code2, color: "#777BB4", mode: "Online / Offline", category: "Development",
    features: ["PHP Core & OOP", "Laravel Framework", "MySQL Integration"],
    approach: "Build a CMS and e-commerce module from scratch.",
  },
  {
    id: 19, title: "UI/UX Design", duration: "45 Days",
    icon: LayoutTemplate, color: "#FF3366", mode: "Online / Offline", category: "Design",
    features: ["Figma & Prototyping", "Design Systems", "Usability Testing"],
    approach: "Freelance-style project briefs to build a real design portfolio.",
  },
  {
    id: 20, title: "Business Intelligence", duration: "45 Days",
    icon: PieChart, color: "#7C3AED", mode: "Online / Offline", category: "Data & AI",
    features: ["Power BI Advanced", "DAX & Data Modelling", "Report Automation"],
    approach: "End-to-end BI project from raw data to published Power BI app.",
  },
];

const nonItCourses: Course[] = [
  {
    id: 101, title: "Tally Prime with GST", duration: "30 Days",
    icon: Calculator, color: "#2563EB", mode: "Offline", category: "Finance",
    features: ["Basic to Advanced Tally", "GST Filing & Returns", "Payroll & Inventory"],
    approach: "Daily practice on live company data with monthly closing exercises.",
  },
  {
    id: 102, title: "Digital Marketing", duration: "45 Days",
    icon: Globe, color: "#EA4335", mode: "Online / Offline", category: "Marketing",
    features: ["SEO & SEM", "Social Media Marketing", "Google Ads & Analytics"],
    approach: "Live campaign management on real ad accounts from Day 1.",
  },
  {
    id: 103, title: "Medical Billing & Coding", duration: "60 Days",
    icon: HeartPulse, color: "#16A34A", mode: "Online / Offline", category: "Healthcare",
    features: ["ICD-10 & CPT Coding", "Insurance Claims Process", "HIPAA Compliance"],
    approach: "Work on simulated patient records and US insurance billing workflows.",
  },
  {
    id: 104, title: "HR Management", duration: "45 Days",
    icon: Users, color: "#7C3AED", mode: "Offline", category: "Management",
    features: ["Recruitment & Onboarding", "Payroll Management", "Labour Laws & Compliance"],
    approach: "Role-play based training with mock HR interviews and HR software.",
  },
  {
    id: 105, title: "Business English", duration: "30 Days",
    icon: Briefcase, color: "#0F766E", mode: "Online / Offline", category: "Communication",
    features: ["Professional Email Writing", "Corporate Communication", "Presentation Skills"],
    approach: "Daily speaking drills and live email/presentation critiques.",
  },
  {
    id: 106, title: "Spoken English", duration: "30 Days",
    icon: MessageSquare, color: "#D97706", mode: "Online / Offline", category: "Communication",
    features: ["Fluency & Pronunciation", "Grammar in Context", "Group Discussions"],
    approach: "Immersive classroom with zero tolerance for silence — speak every class.",
  },
  {
    id: 107, title: "Personality Development", duration: "30 Days",
    icon: Users, color: "#BE185D", mode: "Offline", category: "Management",
    features: ["Confidence Building", "Body Language Mastery", "Interview & GD Skills"],
    approach: "Weekly mock interviews and public speaking in front of real panels.",
  },
];

const itCategories = ["All", ...Array.from(new Set(itCourses.map((c) => c.category)))];
const nonItCategories = ["All", ...Array.from(new Set(nonItCourses.map((c) => c.category)))];

function CourseCard({ course }: { course: Course }) {
  return (
    <Card className="h-full border-0 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden group">
      {/* Coloured gradient header with icon */}
      <div
        className="relative p-5 flex items-start justify-between overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${course.color}18 0%, ${course.color}35 100%)` }}
      >
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0"
          style={{ backgroundColor: course.color }}
        >
          <course.icon size={24} className="text-white" />
        </div>

        <div className="flex flex-col items-end gap-1">
          <span
            className="text-xs font-bold px-2.5 py-1 rounded-full"
            style={{ backgroundColor: `${course.color}25`, color: course.color }}
          >
            {course.duration}
          </span>
          <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
            {course.mode}
          </span>
        </div>

        {/* Decorative circle */}
        <div
          className="absolute -bottom-6 -right-6 w-20 h-20 rounded-full opacity-10 group-hover:scale-150 transition-transform duration-700"
          style={{ backgroundColor: course.color }}
        />
      </div>

      <CardContent className="p-5 flex flex-col flex-grow">
        {/* Category */}
        <Badge
          variant="outline"
          className="self-start mb-2 text-[10px] font-bold uppercase tracking-wider border-0"
          style={{ backgroundColor: `${course.color}12`, color: course.color }}
        >
          {course.category}
        </Badge>

        {/* Title */}
        <h3 className="text-lg font-bold font-display text-primary mb-3 leading-snug">{course.title}</h3>

        {/* Tech stack pills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {course.features.map((f, i) => (
            <span
              key={i}
              className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-secondary text-muted-foreground"
            >
              {f}
            </span>
          ))}
        </div>

        {/* Approach */}
        <div className="mt-auto mb-4 p-3 rounded-xl border-l-4 bg-gray-50" style={{ borderColor: course.color }}>
          <p className="text-[11px] font-semibold uppercase tracking-wide mb-0.5" style={{ color: course.color }}>
            Our Approach
          </p>
          <p className="text-xs text-muted-foreground leading-relaxed">{course.approach}</p>
        </div>

        <Link href={`/contact?course=${encodeURIComponent(course.title)}`}>
          <Button
            className="w-full text-white font-bold text-sm shadow-md hover:opacity-90 transition-opacity"
            style={{ backgroundColor: course.color }}
          >
            Enquire Now →
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

function CourseGrid({ courses, categories }: { courses: Course[]; categories: string[] }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? courses
    : courses.filter((c) => c.category === activeCategory);

  return (
    <div>
      {/* Category Filter */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-10 justify-start sm:flex-wrap sm:justify-center sm:overflow-x-visible sm:pb-0 no-scrollbar">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`flex-shrink-0 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border ${
              activeCategory === cat
                ? "bg-primary text-white border-primary shadow-md"
                : "bg-white text-muted-foreground border-border hover:border-primary hover:text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filtered.map((course, i) => (
          <FadeIn key={course.id} delay={i * 0.04}>
            <CourseCard course={course} />
          </FadeIn>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-muted-foreground">
          No courses found in this category.
        </div>
      )}
    </div>
  );
}

export default function Courses() {
  return (
    <div className="w-full bg-background min-h-screen pb-24">
      {/* Header */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-white/5 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent border border-accent/30 px-4 py-2 rounded-full mb-6 text-sm font-bold">
              🎓 Job-Ready in 30–60 Days
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-white">
              Our Training Programs
            </h1>
            <p className="text-xl text-white/75 max-w-2xl mx-auto font-light leading-relaxed">
              Industry-aligned curriculum designed to make you placement-ready fast. 
              Intensive, practical, and 100% job-focused.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Courses Content */}
      <section className="container mx-auto px-4 md:px-6 py-16">
        <Tabs defaultValue="it" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-white p-1.5 sm:p-2 shadow-xl rounded-2xl border border-border h-auto w-full sm:w-auto">
              <TabsTrigger
                value="it"
                className="flex-1 sm:flex-none text-sm sm:text-lg px-4 sm:px-8 py-2.5 sm:py-3 rounded-xl data-[state=active]:bg-primary data-[state=active]:text-white font-bold transition-all"
              >
                💻 IT Courses
              </TabsTrigger>
              <TabsTrigger
                value="non-it"
                className="flex-1 sm:flex-none text-sm sm:text-lg px-4 sm:px-8 py-2.5 sm:py-3 rounded-xl data-[state=active]:bg-accent data-[state=active]:text-primary font-bold transition-all"
              >
                📋 Non-IT Courses
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="it" className="mt-0 animate-in fade-in-50 duration-500">
            <CourseGrid courses={itCourses} categories={itCategories} />
          </TabsContent>

          <TabsContent value="non-it" className="mt-0 animate-in fade-in-50 duration-500">
            <CourseGrid courses={nonItCourses} categories={nonItCategories} />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
