import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Star, Users, Briefcase, Award, TrendingUp, Code2, MonitorPlay, Bug, Target, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/ui/FadeIn";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary">
        {/* Background Image / Pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/90 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-transparent z-10" />
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
            alt="Technology Background" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <div className="max-w-3xl">
            <FadeIn direction="up">
              <Badge className="bg-accent/20 text-accent border-accent/30 hover:bg-accent/30 text-sm mb-6 px-4 py-1.5 backdrop-blur-sm">
                WAY TO SUCCESS
              </Badge>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                Your Gateway to a <span className="text-accent relative inline-block">
                  Successful
                  {/* Decorative underline */}
                  <span className="absolute bottom-1 left-0 w-full h-3 bg-accent/30 -z-10 rounded-full"></span>
                </span> IT Career
              </h1>
            </FadeIn>
            
            <FadeIn direction="up" delay={0.2}>
              <p className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed font-light max-w-2xl">
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
          </div>
        </div>
        
        {/* Decorative shape */}
        <div className="absolute -bottom-1 left-0 right-0 w-full overflow-hidden leading-none text-background z-20">
          <svg className="block w-full h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-background relative z-30 -mt-10 md:-mt-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { icon: Users, count: "5000+", label: "Students Trained" },
              { icon: Briefcase, count: "200+", label: "Partner Companies" },
              { icon: TrendingUp, count: "95%", label: "Placement Rate" },
              { icon: Award, count: "10+", label: "Years Experience" },
            ].map((stat, index) => (
              <FadeIn key={index} delay={index * 0.1} direction="up">
                <Card className="border-none shadow-xl shadow-primary/5 bg-white hover:-translate-y-2 transition-transform duration-300">
                  <CardContent className="p-6 md:p-8 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 text-accent">
                      <stat.icon size={32} />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">{stat.count}</h3>
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
        <div className="absolute inset-0 opacity-[0.03] z-0" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/pattern-bg.png)` }}></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Why Choose RK Software?</h2>
              <p className="text-lg text-muted-foreground">We provide a comprehensive learning ecosystem designed to transform beginners into industry-ready professionals.</p>
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
                      {/* Decorative background circle */}
                      <div className={`absolute top-0 right-0 w-32 h-32 ${course.color} rounded-full opacity-5 -translate-y-1/2 translate-x-1/4 group-hover:scale-150 transition-transform duration-700`}></div>
                      
                      <div className={`w-14 h-14 rounded-2xl ${course.color}/10 flex items-center justify-center mb-6 text-${course.color.replace('bg-', '')}`}>
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

      {/* CTA Banner */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {/* Abstract circles */}
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
