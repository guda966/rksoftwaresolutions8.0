import { useState } from "react";
import { Code, Database, Globe, Layers, LayoutTemplate, Monitor, Smartphone, TestTube, Briefcase, Calculator, Users, MessageSquare, IndianRupee, LucideIcon } from "lucide-react";
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
  fees: string;
  icon: LucideIcon;
  mode: string;
  category: string;
  features: string[];
}

const itCourses: Course[] = [
  { id: 1, title: "Full Stack Development", duration: "6 Months", fees: "₹25,000", icon: Layers, mode: "Online/Offline", category: "Development", features: ["MERN/Java/Python Stack", "Real-time Projects", "Interview Prep"] },
  { id: 2, title: "Java Programming", duration: "3 Months", fees: "₹15,000", icon: Code, mode: "Online/Offline", category: "Development", features: ["Core & Adv Java", "Spring Boot", "Microservices"] },
  { id: 3, title: "Python Development", duration: "3 Months", fees: "₹15,000", icon: Globe, mode: "Online/Offline", category: "Development", features: ["Python Core", "Django/Flask", "REST APIs"] },
  { id: 4, title: "Data Science & AI", duration: "6 Months", fees: "₹30,000", icon: Database, mode: "Online/Offline", category: "Data & AI", features: ["Machine Learning", "Data Analytics", "Deep Learning"] },
  { id: 5, title: "Software Testing", duration: "3 Months", fees: "₹12,000", icon: TestTube, mode: "Online/Offline", category: "Testing", features: ["Manual Testing", "Selenium WebDriver", "API Testing"] },
  { id: 6, title: "MERN Stack", duration: "4 Months", fees: "₹18,000", icon: LayoutTemplate, mode: "Online/Offline", category: "Development", features: ["MongoDB, Express", "React.js", "Node.js"] },
  { id: 7, title: ".NET Development", duration: "3 Months", fees: "₹15,000", icon: Monitor, mode: "Online/Offline", category: "Development", features: ["C# & ASP.NET", "Entity Framework", "SQL Server"] },
  { id: 8, title: "Android Development", duration: "4 Months", fees: "₹18,000", icon: Smartphone, mode: "Online/Offline", category: "Mobile", features: ["Kotlin/Java", "App Architecture", "Play Store Pub"] },
  { id: 9, title: "Cloud Computing", duration: "4 Months", fees: "₹20,000", icon: Globe, mode: "Online/Offline", category: "Cloud & DevOps", features: ["AWS / Azure", "Cloud Architecture", "DevOps Basics"] },
  { id: 10, title: "DevOps Engineering", duration: "4 Months", fees: "₹22,000", icon: Monitor, mode: "Online/Offline", category: "Cloud & DevOps", features: ["Docker & Kubernetes", "CI/CD Pipelines", "Jenkins"] },
  { id: 11, title: "PHP Development", duration: "3 Months", fees: "₹12,000", icon: Code, mode: "Online/Offline", category: "Development", features: ["PHP Core", "Laravel Framework", "MySQL"] },
  { id: 12, title: "UI/UX Design", duration: "3 Months", fees: "₹14,000", icon: LayoutTemplate, mode: "Online/Offline", category: "Design", features: ["Figma & Prototyping", "Design Thinking", "User Research"] },
];

const nonItCourses: Course[] = [
  { id: 101, title: "Tally Prime with GST", duration: "2 Months", fees: "₹8,000", icon: Calculator, mode: "Offline", category: "Finance", features: ["Basic to Advanced", "GST Filing", "Payroll"] },
  { id: 102, title: "Digital Marketing", duration: "3 Months", fees: "₹12,000", icon: Globe, mode: "Online/Offline", category: "Marketing", features: ["SEO & SEM", "Social Media", "Google Ads"] },
  { id: 103, title: "HR Management", duration: "3 Months", fees: "₹10,000", icon: Users, mode: "Offline", category: "Management", features: ["Recruitment", "Payroll Management", "Labor Laws"] },
  { id: 104, title: "Business English", duration: "2 Months", fees: "₹6,000", icon: Briefcase, mode: "Online/Offline", category: "Communication", features: ["Email Etiquette", "Corporate Comms", "Presentations"] },
  { id: 105, title: "Spoken English", duration: "2 Months", fees: "₹5,000", icon: MessageSquare, mode: "Online/Offline", category: "Communication", features: ["Fluency Building", "Grammar", "Group Discussions"] },
  { id: 106, title: "Personality Development", duration: "1 Month", fees: "₹4,000", icon: Users, mode: "Offline", category: "Management", features: ["Confidence Building", "Body Language", "Interview Skills"] },
];

const itCategories = ["All", ...Array.from(new Set(itCourses.map((c) => c.category)))];
const nonItCategories = ["All", ...Array.from(new Set(nonItCourses.map((c) => c.category)))];

function CourseCard({ course }: { course: Course }) {
  return (
    <Card className="h-full border border-border hover:border-accent shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
      <CardContent className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-6">
          <div className="w-14 h-14 rounded-xl bg-primary/5 text-primary flex items-center justify-center">
            <course.icon size={28} />
          </div>
          <Badge variant="outline" className="bg-secondary/50 font-medium">
            {course.duration}
          </Badge>
        </div>

        <h3 className="text-xl font-bold font-display mb-1 text-primary">{course.title}</h3>
        <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wider">{course.mode}</p>

        <ul className="space-y-2 mb-6 flex-grow">
          {course.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 text-muted-foreground">
              <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></div>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 mb-4 p-3 bg-accent/5 rounded-lg border border-accent/20">
          <IndianRupee size={16} className="text-accent" />
          <span className="font-bold text-primary text-lg">{course.fees}</span>
          <span className="text-muted-foreground text-xs ml-auto">Total Fee</span>
        </div>

        <Link href={`/contact?course=${encodeURIComponent(course.title)}`}>
          <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold">
            Enquire Now
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
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
              activeCategory === cat
                ? "bg-primary text-white border-primary shadow-md"
                : "bg-white text-muted-foreground border-border hover:border-primary hover:text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((course, i) => (
          <FadeIn key={course.id} delay={i * 0.05}>
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
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">Our Training Programs</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
              Industry-aligned curriculum designed to make you job-ready from day one. Choose your path to success.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Courses Content */}
      <section className="container mx-auto px-4 md:px-6 py-16">
        <Tabs defaultValue="it" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-white p-2 shadow-xl rounded-2xl border border-border h-auto">
              <TabsTrigger
                value="it"
                className="text-lg px-8 py-3 rounded-xl data-[state=active]:bg-primary data-[state=active]:text-white font-bold transition-all"
              >
                IT Courses
              </TabsTrigger>
              <TabsTrigger
                value="non-it"
                className="text-lg px-8 py-3 rounded-xl data-[state=active]:bg-accent data-[state=active]:text-primary font-bold transition-all"
              >
                Non-IT Courses
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="it" className="mt-0 animate-in fade-in-50 duration-500">
            <CourseGrid courses={itCourses} categories={itCategories} />
          </TabsContent>

          <TabsContent value="non-it" className="mt-0 animate-in fade-in-50 duration-500">
            <div className="max-w-5xl mx-auto">
              <CourseGrid courses={nonItCourses} categories={nonItCategories} />
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
