import { Trophy, Star, Building2, TrendingUp, Quote } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const companies = [
  "TCS", "Infosys", "Wipro", "HCL", "Capgemini", 
  "Tech Mahindra", "Cognizant", "Accenture", "IBM", "Oracle", 
  "Amazon", "Flipkart", "Zomato", "Swiggy", "Paytm",
  "Deloitte", "L&T", "Mindtree", "Mphasis", "Hexaware"
];

const testimonials = [
  {
    name: "Rahul Kumar",
    course: "Full Stack Development",
    company: "TCS",
    package: "4.5 LPA",
    quote: "RK Software Solutions changed my life. The real-time projects and mock interviews gave me the confidence to clear the TCS interview in my first attempt.",
    initials: "RK",
    bg: "bg-blue-500"
  },
  {
    name: "Priya Sharma",
    course: "Data Science",
    company: "Accenture",
    package: "6.0 LPA",
    quote: "The trainers here are exceptional. They don't just teach theory; they show you how things work in the actual industry. Best decision of my career.",
    initials: "PS",
    bg: "bg-purple-500"
  },
  {
    name: "Mohammed Ali",
    course: "Java Programming",
    company: "Infosys",
    package: "4.0 LPA",
    quote: "I came from a non-IT background. The step-by-step approach and dedicated placement cell helped me transition smoothly into software development.",
    initials: "MA",
    bg: "bg-emerald-500"
  },
  {
    name: "Sneha Reddy",
    course: "Software Testing",
    company: "Cognizant",
    package: "3.8 LPA",
    quote: "100% placement assistance is not just a marketing gimmick here. They literally supported me until I got the offer letter.",
    initials: "SR",
    bg: "bg-pink-500"
  },
  {
    name: "Vikram Singh",
    course: "Python Development",
    company: "Wipro",
    package: "4.2 LPA",
    quote: "The curriculum is perfectly aligned with what product companies are looking for. The hands-on coding sessions were incredibly helpful.",
    initials: "VS",
    bg: "bg-amber-500"
  },
  {
    name: "Anjali Desai",
    course: "MERN Stack",
    company: "Tech Mahindra",
    package: "5.5 LPA",
    quote: "Building full-stack apps from scratch during the course made the technical interview round a breeze. Highly recommended!",
    initials: "AD",
    bg: "bg-indigo-500"
  }
];

export default function Placements() {
  return (
    <div className="w-full bg-background min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        {/* stock image of a handshake/business success */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32d7?w=1920&h=1080&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent border border-accent/30 px-4 py-2 rounded-full mb-6">
              <Trophy size={18} />
              <span className="font-semibold text-sm">Proven Success Record</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-white">Our Placement Success</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Your dream job is our ultimate goal. We prepare you for the industry and connect you with top employers.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Placement Stats Strip */}
      <section className="bg-accent py-8 shadow-lg relative z-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-around items-center gap-8 md:gap-4 text-primary text-center">
            <FadeIn delay={0.1} direction="up" className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-extrabold font-display">95%</span>
              <span className="font-semibold uppercase tracking-wider text-sm mt-1">Placement Rate</span>
            </FadeIn>
            <div className="hidden md:block w-px h-12 bg-primary/20"></div>
            <FadeIn delay={0.2} direction="up" className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-extrabold font-display">5000+</span>
              <span className="font-semibold uppercase tracking-wider text-sm mt-1">Students Placed</span>
            </FadeIn>
            <div className="hidden md:block w-px h-12 bg-primary/20"></div>
            <FadeIn delay={0.3} direction="up" className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-extrabold font-display">200+</span>
              <span className="font-semibold uppercase tracking-wider text-sm mt-1">Partner Companies</span>
            </FadeIn>
            <div className="hidden md:block w-px h-12 bg-primary/20"></div>
            <FadeIn delay={0.4} direction="up" className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-extrabold font-display">3.5<span className="text-2xl">LPA</span></span>
              <span className="font-semibold uppercase tracking-wider text-sm mt-1">Average Package</span>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Partner Companies */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <Building2 size={40} className="text-accent mx-auto mb-4" />
              <h2 className="text-4xl font-display font-bold mb-4">Our Hiring Partners</h2>
              <p className="text-lg text-muted-foreground">Top multinational corporations and fast-growing startups trust our trained professionals.</p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
            {companies.map((company, i) => (
              <FadeIn key={i} delay={i * 0.05} direction="up">
                <div className="h-20 bg-secondary/30 rounded-xl border border-border flex items-center justify-center p-4 hover:shadow-md hover:border-primary/20 hover:bg-white transition-all cursor-default group">
                  <span className="font-display font-bold text-lg text-muted-foreground group-hover:text-primary transition-colors">
                    {company}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-4xl font-display font-bold mb-4">Student Success Stories</h2>
              <p className="text-lg text-muted-foreground">Hear what our alumni have to say about their journey from training to placement.</p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((student, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Card className="h-full bg-white border-none shadow-lg hover:shadow-xl transition-shadow relative">
                  <CardContent className="p-8 pt-10 relative">
                    <Quote className="absolute top-6 right-6 text-accent/20" size={60} />
                    
                    <div className="flex items-center gap-4 mb-6 relative z-10">
                      <Avatar className={`w-16 h-16 border-2 border-white shadow-md ${student.bg}`}>
                        <AvatarFallback className="text-white font-bold text-xl bg-transparent">{student.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-bold text-lg text-primary">{student.name}</h4>
                        <p className="text-sm text-muted-foreground">{student.course}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-1 text-accent mb-4">
                      {[1,2,3,4,5].map(star => <Star key={star} size={16} fill="currentColor" />)}
                    </div>
                    
                    <p className="text-muted-foreground italic mb-6 relative z-10">"{student.quote}"</p>
                    
                    <div className="mt-auto pt-4 border-t border-border flex justify-between items-center">
                      <div className="text-sm">
                        <span className="text-muted-foreground">Placed at: </span>
                        <span className="font-bold text-primary">{student.company}</span>
                      </div>
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-200 border-none shadow-none">
                        {student.package}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
