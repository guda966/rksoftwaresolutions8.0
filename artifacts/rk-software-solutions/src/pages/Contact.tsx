import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Mail, Clock, Send, Navigation, Image, Star, ExternalLink } from "lucide-react";

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
                      <div className="w-12 h-12 rounded-full bg-accent/20 text-accent flex items-center justify-center flex-shrink-0">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-1">Our Location</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          RK Software Solutions<br />
                          Near Bus Stand, Hyderabad<br />
                          Telangana — 500001, India
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-md bg-white">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/20 text-accent flex items-center justify-center flex-shrink-0">
                        <Phone size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-1">Phone & WhatsApp</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          +91 98765 43210<br />
                          +91 98765 43211
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-md bg-white">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/20 text-accent flex items-center justify-center flex-shrink-0">
                        <Mail size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-1">Email Address</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          info@rksoftware.in<br />
                          placements@rksoftware.in
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-none shadow-md bg-white">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/20 text-accent flex items-center justify-center flex-shrink-0">
                        <Clock size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-1">Office Hours</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          Mon - Sat: 9:00 AM - 8:00 PM<br />
                          Sunday: 10:00 AM - 2:00 PM
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

      {/* ── Visit Our Institute ── */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-white/5 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <FadeIn className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent border border-accent/30 px-4 py-2 rounded-full mb-5">
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
                lines: ["RK Software Solutions", "Near Bus Stand, Hyderabad", "Telangana — 500001, India"],
              },
              {
                icon: Clock,
                title: "Visit Hours",
                lines: ["Mon – Sat: 9:00 AM – 8:00 PM", "Sunday: 10:00 AM – 2:00 PM", "Walk-ins welcome anytime"],
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
