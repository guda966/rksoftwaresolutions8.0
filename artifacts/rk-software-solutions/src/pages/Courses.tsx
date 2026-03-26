import { Code, Database, Globe, Layers, LayoutTemplate, Monitor, Smartphone, TestTube, Briefcase, Calculator, Users, MessageSquare } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { FadeIn } from "@/components/ui/FadeIn";

const itCourses = [
  { id: 1, title: "Full Stack Development", duration: "6 Months", icon: Layers, mode: "Online/Offline", features: ["MERN/Java/Python Stack", "Real-time Projects", "Interview Prep"] },
  { id: 2, title: "Java Programming", duration: "3 Months", icon: Code, mode: "Online/Offline", features: ["Core & Adv Java", "Spring Boot", "Microservices"] },
  { id: 3, title: "Python Development", duration: "3 Months", icon: Globe, mode: "Online/Offline", features: ["Python Core", "Django/Flask", "REST APIs"] },
  { id: 4, title: "Data Science & AI", duration: "6 Months", icon: Database, mode: "Online/Offline", features: ["Machine Learning", "Data Analytics", "Deep Learning"] },
  { id: 5, title: "Software Testing", duration: "3 Months", icon: TestTube, mode: "Online/Offline", features: ["Manual Testing", "Selenium WebDriver", "API Testing"] },
  { id: 6, title: "MERN Stack", duration: "4 Months", icon: LayoutTemplate, mode: "Online/Offline", features: ["MongoDB, Express", "React.js", "Node.js"] },
  { id: 7, title: ".NET Development", duration: "3 Months", icon: Monitor, mode: "Online/Offline", features: ["C# & ASP.NET", "Entity Framework", "SQL Server"] },
  { id: 8, title: "Android Development", duration: "4 Months", icon: Smartphone, mode: "Online/Offline", features: ["Kotlin/Java", "App Architecture", "Play Store Pub"] },
];

const nonItCourses = [
  { id: 101, title: "Tally Prime with GST", duration: "2 Months", icon: Calculator, mode: "Offline", features: ["Basic to Advanced", "GST Filing", "Payroll"] },
  { id: 102, title: "Digital Marketing", duration: "3 Months", icon: Globe, mode: "Online/Offline", features: ["SEO & SEM", "Social Media", "Google Ads"] },
  { id: 103, title: "HR Management", duration: "3 Months", icon: Users, mode: "Offline", features: ["Recruitment", "Payroll Management", "Labor Laws"] },
  { id: 104, title: "Business English", duration: "2 Months", icon: Briefcase, mode: "Online/Offline", features: ["Email Etiquette", "Corporate Comms", "Presentations"] },
  { id: 105, title: "Spoken English", duration: "2 Months", icon: MessageSquare, mode: "Online/Offline", features: ["Fluency Building", "Grammar", "Group Discussions"] },
  { id: 106, title: "Personality Dev.", duration: "1 Month", icon: Users, mode: "Offline", features: ["Confidence Building", "Body Language", "Interview Skills"] },
];

function CourseCard({ course }: { course: any }) {
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
        
        <h3 className="text-2xl font-bold font-display mb-2 text-primary">{course.title}</h3>
        <p className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">{course.mode}</p>
        
        <ul className="space-y-3 mb-8 flex-grow">
          {course.features.map((feature: string, idx: number) => (
            <li key={idx} className="flex items-center gap-2 text-muted-foreground">
              <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></div>
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Link href={`/contact?course=${encodeURIComponent(course.title)}`}>
          <Button className="w-full bg-primary hover:bg-primary/90 text-white font-semibold">
            Enquire Now
          </Button>
        </Link>
      </CardContent>
    </Card>
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
      <section className="container mx-auto px-4 md:px-6 -mt-8 relative z-10">
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {itCourses.map((course, i) => (
                <FadeIn key={course.id} delay={i * 0.05}>
                  <CourseCard course={course} />
                </FadeIn>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="non-it" className="mt-0 animate-in fade-in-50 duration-500">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {nonItCourses.map((course, i) => (
                <FadeIn key={course.id} delay={i * 0.05}>
                  <CourseCard course={course} />
                </FadeIn>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
