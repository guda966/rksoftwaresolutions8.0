import { Target, Lightbulb, Users, Award, BookOpen, Clock } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&h=1080&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
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
              {/* stock image of diverse students coding */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=1000&fit=crop" 
                  alt="Students learning" 
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
                {/* Decorative background element */}
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
    </div>
  );
}
