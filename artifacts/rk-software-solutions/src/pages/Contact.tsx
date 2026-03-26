import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

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

              {/* Map Placeholder */}
              <FadeIn direction="up" delay={0.2}>
                <div className="w-full h-[300px] bg-muted rounded-xl border border-border overflow-hidden relative shadow-inner group cursor-pointer flex items-center justify-center">
                  <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=400&fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500"></div>
                  <div className="relative z-10 flex flex-col items-center p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                    <MapPin size={40} className="text-primary mb-2" />
                    <span className="font-display font-bold text-lg text-primary">Find Us on Google Maps</span>
                    <span className="text-sm text-muted-foreground mt-1">Click to open directions</span>
                  </div>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
