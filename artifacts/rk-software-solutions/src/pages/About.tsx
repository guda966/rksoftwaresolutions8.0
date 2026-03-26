import { Target, Lightbulb, Users, Award, BookOpen, Clock, Linkedin, Mail } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TeamMember {
  name: string;
  role: string;
  experience: string;
  expertise: string[];
  initials: string;
  bgColor: string;
}

const team: TeamMember[] = [
  {
    name: "Ravi Kumar",
    role: "Founder & Lead Trainer — Java & Full Stack",
    experience: "12+ Years",
    expertise: ["Java", "Spring Boot", "Microservices"],
    initials: "RK",
    bgColor: "bg-blue-600",
  },
  {
    name: "Sunitha Reddy",
    role: "Senior Trainer — Python & Data Science",
    experience: "9+ Years",
    expertise: ["Python", "Machine Learning", "TensorFlow"],
    initials: "SR",
    bgColor: "bg-purple-600",
  },
  {
    name: "Anil Sharma",
    role: "Trainer — Software Testing & Automation",
    experience: "8+ Years",
    expertise: ["Selenium", "TestNG", "API Testing"],
    initials: "AS",
    bgColor: "bg-green-600",
  },
  {
    name: "Meena Patel",
    role: "Trainer — Digital Marketing & Non-IT",
    experience: "7+ Years",
    expertise: ["SEO/SEM", "Google Ads", "Social Media"],
    initials: "MP",
    bgColor: "bg-amber-600",
  },
  {
    name: "Kiran Babu",
    role: "Placement Head & Career Counselor",
    experience: "10+ Years",
    expertise: ["Career Guidance", "Corporate Relations", "Interview Coaching"],
    initials: "KB",
    bgColor: "bg-red-600",
  },
  {
    name: "Divya Rao",
    role: "Trainer — MERN Stack & UI/UX",
    experience: "6+ Years",
    expertise: ["React", "Node.js", "Figma"],
    initials: "DR",
    bgColor: "bg-teal-600",
  },
];

export default function About() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop')" }}
        ></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <FadeIn>
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 text-white">About RK Software Solutions</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              We don't just teach code; we engineer careers. Discover our journey, mission, and the values that drive us.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=1000&fit=crop"
                  alt="Students learning at RK Software Solutions"
                  className="w-full h-full object-cover aspect-[4/5]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="text-3xl font-display font-bold text-accent mb-2">10+ Years</p>
                  <p className="text-lg font-medium">Of Excellence in IT Education</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="space-y-6">
                <h2 className="text-4xl font-display font-bold text-primary">Our Story</h2>
                <div className="w-20 h-2 bg-accent rounded-full mb-8"></div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded over a decade ago, RK Software Solutions was born out of a simple observation: there is a massive gap between what academic institutions teach and what the IT industry actually needs.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We started with a small batch of 10 students and a vision to provide real-time, project-based training. Today, we have grown into one of India's most trusted software training institutes, having successfully trained and placed over 5,000 students in top MNCs.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our motto, <strong className="text-primary font-bold">"Way To Success"</strong>, reflects our commitment to guiding every student step-by-step—from learning fundamentals to mastering advanced concepts, and finally, cracking the toughest interviews.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-8">
                  <div className="border-l-4 border-accent pl-4">
                    <p className="text-3xl font-bold text-primary mb-1">5K+</p>
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Careers Built</p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <p className="text-3xl font-bold text-primary mb-1">200+</p>
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Hiring Partners</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-secondary/30 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-4xl font-display font-bold mb-4">Mission & Vision</h2>
              <p className="text-muted-foreground text-lg">The purpose and direction that guide everything we do.</p>
            </FadeIn>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <Card className="h-full bg-white border-none shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                <div className="h-2 bg-primary w-full"></div>
                <CardContent className="p-10">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                    <Target size={32} />
                  </div>
                  <h3 className="text-3xl font-display font-bold mb-4">Our Mission</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    To empower students and professionals with cutting-edge technical skills through high-quality, accessible, and practical training, ensuring they are fully equipped to meet global industry standards and secure their dream careers.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="h-full bg-primary text-primary-foreground border-none shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden relative">
                <div className="h-2 bg-accent w-full absolute top-0 left-0"></div>
                <div className="absolute -right-20 -bottom-20 w-64 h-64 border-[30px] border-white/5 rounded-full pointer-events-none"></div>
                <CardContent className="p-10 relative z-10">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 text-accent">
                    <Lightbulb size={32} />
                  </div>
                  <h3 className="text-3xl font-display font-bold mb-4 text-white">Our Vision</h3>
                  <p className="text-lg text-primary-foreground/80 leading-relaxed font-light">
                    To be the most preferred and globally recognized IT training and placement hub, bridging the skill gap and fostering an ecosystem where innovation, learning, and success thrive together.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-4xl font-display font-bold mb-4">Our Core Values</h2>
              <p className="text-lg text-muted-foreground">The principles that guide our teaching and our interactions with students every single day.</p>
            </FadeIn>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, title: "Excellence in Education", desc: "Never compromising on the quality of curriculum and training delivery." },
              { icon: Users, title: "Student-Centric Approach", desc: "Every decision we make puts the student's career and growth first." },
              { icon: Clock, title: "Continuous Evolution", desc: "Constantly updating our methods to keep pace with rapid tech advancements." },
              { icon: Award, title: "Integrity & Trust", desc: "Honest counseling, transparent promises, and genuine placement support." },
            ].map((value, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="up">
                <div className="text-center p-6">
                  <div className="w-20 h-20 mx-auto bg-secondary rounded-full flex items-center justify-center mb-6 shadow-inner text-primary relative">
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent/50 animate-[spin_10s_linear_infinite]"></div>
                    <value.icon size={32} className="relative z-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team / Faculty Section */}
      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <FadeIn>
              <h2 className="text-4xl font-display font-bold mb-4">Meet Our Expert Faculty</h2>
              <p className="text-lg text-muted-foreground">
                Our trainers are working professionals with deep industry experience who bring real-world knowledge into every classroom.
              </p>
            </FadeIn>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="up">
                <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                  <CardContent className="p-0">
                    {/* Top banner with initials avatar */}
                    <div className={`${member.bgColor} p-8 flex flex-col items-center text-white relative overflow-hidden`}>
                      <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                      <div className="w-20 h-20 rounded-full bg-white/20 border-4 border-white/50 flex items-center justify-center text-3xl font-bold mb-4 z-10">
                        {member.initials}
                      </div>
                      <h3 className="text-xl font-bold text-center">{member.name}</h3>
                      <p className="text-white/80 text-sm text-center mt-1">{member.role}</p>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Award size={16} className="text-accent" />
                        <span className="text-sm font-semibold text-muted-foreground">{member.experience} Experience</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill) => (
                          <Badge key={skill} variant="secondary" className="bg-secondary text-secondary-foreground font-medium">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-3 mt-5">
                        <a
                          href="#"
                          className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors text-sm font-medium text-muted-foreground hover:text-primary"
                          aria-label={`LinkedIn profile of ${member.name}`}
                        >
                          <Linkedin size={15} /> LinkedIn
                        </a>
                        <a
                          href="#"
                          className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg border border-border hover:border-accent hover:bg-accent/5 transition-colors text-sm font-medium text-muted-foreground hover:text-accent"
                          aria-label={`Email ${member.name}`}
                        >
                          <Mail size={15} /> Email
                        </a>
                      </div>
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
