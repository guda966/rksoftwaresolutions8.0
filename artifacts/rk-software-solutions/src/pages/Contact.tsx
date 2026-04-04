import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Mail, Clock, Send, Navigation, Image, Star, ExternalLink } from "lucide-react";
import { GoogleReviews } from "@/components/ui/GoogleReviews";

import { FadeIn } from "@/components/ui/FadeIn";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { contactFormSchema, type ContactFormValues, useSubmitContact } from "@/hooks/use-contact";

export default function Contact() {
  const { toast } = useToast();
  const submitContact = useSubmitContact();
  
  // To handle pre-selected course from URL query string
  const [searchParams, setSearchParams] = useState(new URLSearchParams());
  
  useEffect(() => {
    setSearchParams(new URLSearchParams(window.location.search));
  }, []);

  const preselectedCourse = searchParams.get("course") || "";

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      courseId: preselectedCourse,
      message: "",
    },
  });

  // Update form if URL changes
  useEffect(() => {
    if (preselectedCourse) {
      form.setValue("courseId", preselectedCourse);
    }
  }, [preselectedCourse, form]);

  const onSubmit = (data: ContactFormValues) => {
    submitContact.mutate(data, {
      onSuccess: (res) => {
        toast({
          title: "Message Sent!",
          description: res.message,
          variant: "default",
          className: "bg-green-50 border-green-200 text-green-900",
        });
        form.reset();
      },
      onError: () => {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again or call us directly.",
          variant: "destructive",
        });
      }
    });
  };

  const courses = [
    "Full Stack Development", "Java Programming", "Python Development",
    "Data Science & AI", "Software Testing", "MERN Stack", 
    ".NET Development", "Digital Marketing", "Tally Prime with GST", "Other"
  ];

  return (
    <div className="w-full bg-background min-h-screen">
      {/* Page Header */}
      <section className="bg-primary text-white py-20 relative overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">Get In Touch</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
              Have questions about our courses or placement support? Our career counselors are here to help you.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24 bg-secondary/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            
            {/* Contact Details Column */}
            <div className="lg:col-span-2 space-y-8">
              <FadeIn direction="right">
                <div className="mb-8">
                  <h2 className="text-3xl font-display font-bold text-primary mb-4">Contact Information</h2>
                  <p className="text-muted-foreground">Reach out to us directly or visit our campus for a face-to-face counseling session.</p>
                </div>

                <div className="space-y-6">
                  <Card className="border-none shadow-md bg-white">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <MapPin size={22} className="text-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-1">Our Location</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          301 & 402, 3rd Floor<br />
                          Opp. SR Nagar Bus Stop, Madhura Nagar<br />
                          Hyderabad – 500038, Telangana
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-md bg-white">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <Phone size={22} className="text-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-1">Phone & WhatsApp</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          <a href="tel:+919063616867" className="hover:text-primary">+91 90636 16867</a>
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-md bg-white">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <Mail size={22} className="text-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-1">Email Address</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          <a href="mailto:info@rksoftwaresolutions.in" className="hover:text-primary">info@rksoftwaresolutions.in</a>
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-md bg-white">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <Clock size={22} className="text-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-1">Office Hours</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Mon - Sat: 9:00 AM - 8:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </FadeIn>
            </div>

            {/* Form & Map Column */}
            <div className="lg:col-span-3 space-y-8">
              <FadeIn direction="left">
                <Card className="border border-border shadow-xl bg-white overflow-hidden">
                  <div className="h-2 bg-primary w-full"></div>
                  <CardContent className="p-8 md:p-10">
                    <h3 className="text-2xl font-display font-bold text-primary mb-6">Send us a Message</h3>
                    
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-foreground">Full Name</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter your name" className="bg-secondary/20" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-foreground">Phone Number</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter your mobile number" type="tel" className="bg-secondary/20" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-foreground">Email Address</FormLabel>
                                <FormControl>
                                  <Input placeholder="Enter your email" type="email" className="bg-secondary/20" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="courseId"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-foreground">Course of Interest</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                                  <FormControl>
                                    <SelectTrigger className="bg-secondary/20">
                                      <SelectValue placeholder="Select a course" />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    {courses.map(course => (
                                      <SelectItem key={course} value={course}>{course}</SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground">Your Message</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="How can we help you?" 
                                  className="min-h-[120px] bg-secondary/20" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button 
                          type="submit" 
                          className="w-full sm:w-auto bg-accent text-primary hover:bg-primary hover:text-white text-lg px-10 py-6 font-bold flex items-center gap-2 transition-colors"
                          disabled={submitContact.isPending}
                        >
                          {submitContact.isPending ? "Sending..." : "Submit Inquiry"}
                          {!submitContact.isPending && <Send size={20} />}
                        </Button>
                      </form>
                    </Form>
                  </CardContent>
                </Card>
              </FadeIn>

              {/* Embedded Google Map */}
              <FadeIn direction="up" delay={0.2}>
                <div className="w-full rounded-2xl overflow-hidden shadow-xl border border-border">
                  <iframe
                    title="RK Software Solutions Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d476.2!2d78.4408251!3d17.4396746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb918904b99407%3A0xf7b6427f4281c2fc!2sRK%20Software%20Solutions!5e0!3m2!1sen!2sin!4v1711484400000!5m2!1sen!2sin"
                    width="100%"
                    height="340"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* ── Google Reviews ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeIn className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#4285F4]/10 text-[#4285F4] border border-[#4285F4]/20 px-4 py-2 rounded-full mb-5">
              <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-sm font-semibold">Google Reviews</span>
            </div>
            <h2 className="text-4xl font-display font-bold text-primary mb-3">What Students Say</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Real reviews from our students on Google — unfiltered and verified.
            </p>
          </FadeIn>
          <GoogleReviews />
        </div>
      </section>

      {/* ── Visit Our Institute ── */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-white/5 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeIn className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-accent/15 text-accent border border-accent/60 px-4 py-2 rounded-full mb-5 max-w-fit mx-auto shadow-[0_0_10px_rgba(245,197,24,0.15)]">
              <MapPin size={16} />
              <span className="text-sm font-semibold">See Our Institute</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Visit Us in Person
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Walk into our campus, meet our trainers, and experience the learning environment before you enrol. We're always happy to show you around.
            </p>
          </FadeIn>

          {/* Full-width map */}
          <FadeIn delay={0.1}>
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 mb-10">
              <iframe
                title="RK Software Solutions — Full Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d952.4!2d78.4407593!3d17.4396924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb918904b99407%3A0xf7b6427f4281c2fc!2sRK%20Software%20Solutions!5e0!3m2!1sen!2sin!4v1711484400000!5m2!1sen!2sin"
                width="100%"
                height="480"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeIn>

          {/* Info strip + CTA buttons */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              {
                icon: MapPin,
                title: "Address",
                lines: ["301 & 402, 3rd Floor", "Opp. SR Nagar Bus Stop, Madhura Nagar", "Hyderabad – 500038, Telangana"],
              },
              {
                icon: Clock,
                title: "Visit Hours",
                lines: ["Mon – Sat: 9:00 AM – 8:00 PM", "Sunday: Closed", "Walk-ins welcome anytime"],
              },
              {
                icon: Star,
                title: "On Google",
                lines: ["⭐⭐⭐⭐⭐ Rated on Google Maps", "View student reviews & photos", "Check real-time opening hours"],
              },
            ].map((card, i) => (
              <FadeIn key={i} delay={i * 0.1} direction="up">
                <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                      <card.icon size={20} className="text-accent" />
                    </div>
                    <h4 className="font-bold text-base">{card.title}</h4>
                  </div>
                  {card.lines.map((line, j) => (
                    <p key={j} className="text-white/70 text-sm leading-relaxed">{line}</p>
                  ))}
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Action buttons */}
          <FadeIn className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://www.google.com/maps/place/RK+Software+Solutions/@17.4396746,78.4408251,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb918904b99407:0xf7b6427f4281c2fc!8m2!3d17.4396746!4d78.4408251!16s%2Fg%2F11pzrrr3g0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-accent text-primary hover:bg-accent/90 font-bold px-8 py-5 text-base shadow-xl shadow-accent/20">
                <Navigation size={18} className="mr-2" /> Get Directions
              </Button>
            </a>
            <a
              href="https://www.google.com/maps/place/RK+Software+Solutions/@17.4396924,78.4407593,3a,75y,90t/data=!3m8!1e5!3m6!1sAF1QipMSxF5sSZrMTJE6LYoO3MNdtVf4vypFq4l7v2uq!2e10!3e10!6shttps:%2F%2Flh3.googleusercontent.com%2Fp%2FAF1QipMSxF5sSZrMTJE6LYoO3MNdtVf4vypFq4l7v2uq%3Dw203-h360-k-no!7i1080!8i1920!4m17!1m7!3m6!1s0x3bcb918904b99407:0xf7b6427f4281c2fc!2sRK+Software+Solutions!8m2!3d17.4396746!4d78.4408251!16s%2Fg%2F11pzrrr3g0!3m8!1s0x3bcb918904b99407:0xf7b6427f4281c2fc!8m2!3d17.4396746!4d78.4408251!10e5!14m1!1BCgIgARICCAQ!16s%2Fg%2F11pzrrr3g0!18m1!1e1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-5 text-base">
                <Image size={18} className="mr-2" /> View Photos &amp; Videos on Google Maps
                <ExternalLink size={14} className="ml-2 opacity-70" />
              </Button>
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
