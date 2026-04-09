import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Seo } from "@/components/seo/Seo";
import NotFound from "@/pages/not-found";

import { Layout } from "@/components/layout/Layout";
import {
  localBusinessSchema,
  makeBreadcrumbSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/seo";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Courses from "@/pages/Courses";
import Placements from "@/pages/Placements";
import Contact from "@/pages/Contact";
import Careers from "@/pages/Careers";

const queryClient = new QueryClient();

function HomeRoute() {
  return (
    <>
      <Seo
        title="RK Software Solutions | Software Training & Placement Institute in Hyderabad"
        description="RK Software Solutions is a Hyderabad-based software training and placement institute offering Full Stack, Java, Python, DevOps, Testing, Digital Marketing, Medical Billing and more with job assistance."
        path="/"
        keywords={[
          "RK Software Solutions",
          "software training Hyderabad",
          "placement institute Hyderabad",
          "full stack course Hyderabad",
          "job assistance institute",
        ]}
        schemas={[websiteSchema, organizationSchema, localBusinessSchema]}
      />
      <Home />
    </>
  );
}

function AboutRoute() {
  return (
    <>
      <Seo
        title="About RK Software Solutions | Training Institute in Hyderabad"
        description="Learn about RK Software Solutions, our Hyderabad journey, founder vision, training philosophy, placement success, and mission to build job-ready careers."
        path="/about"
        keywords={["about RK Software Solutions", "training institute Hyderabad", "software institute Hyderabad"]}
        schemas={[makeBreadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])]}
      />
      <About />
    </>
  );
}

function CoursesRoute() {
  return (
    <>
      <Seo
        title="Courses at RK Software Solutions | IT & Non-IT Training Programs"
        description="Explore IT and non-IT courses at RK Software Solutions including Full Stack, Java, Python, React, AWS, DevOps, Testing, Digital Marketing, Tally, Spoken English, and more."
        path="/courses"
        keywords={[
          "IT courses Hyderabad",
          "full stack training Hyderabad",
          "Java course Hyderabad",
          "DevOps course Hyderabad",
          "digital marketing course Hyderabad",
        ]}
        schemas={[makeBreadcrumbSchema([{ name: "Home", path: "/" }, { name: "Courses", path: "/courses" }])]}
      />
      <Courses />
    </>
  );
}

function PlacementsRoute() {
  return (
    <>
      <Seo
        title="Placements at RK Software Solutions | Student Success & Hiring Partners"
        description="See placement outcomes at RK Software Solutions, student success stories, hiring partners, interview preparation support, and job-focused career assistance."
        path="/placements"
        keywords={["placements RK Software Solutions", "student placements Hyderabad", "job placement institute Hyderabad"]}
        schemas={[makeBreadcrumbSchema([{ name: "Home", path: "/" }, { name: "Placements", path: "/placements" }])]}
      />
      <Placements />
    </>
  );
}

function CareersRoute() {
  return (
    <>
      <Seo
        title="Careers at RK Software Solutions | Join Our Hyderabad Team"
        description="Explore careers at RK Software Solutions in Hyderabad and learn about our culture, team, and opportunities in training, placement support, counseling, and operations."
        path="/careers"
        keywords={["careers RK Software Solutions", "trainer jobs Hyderabad", "placement institute jobs Hyderabad"]}
        schemas={[makeBreadcrumbSchema([{ name: "Home", path: "/" }, { name: "Careers", path: "/careers" }])]}
      />
      <Careers />
    </>
  );
}

function ContactRoute() {
  return (
    <>
      <Seo
        title="Contact RK Software Solutions | Hyderabad Training Institute"
        description="Contact RK Software Solutions in Hyderabad for course counseling, admissions, training details, placements, and batch information."
        path="/contact"
        keywords={["contact RK Software Solutions", "training institute contact Hyderabad", "RK Software Solutions address"]}
        schemas={[
          makeBreadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]),
          localBusinessSchema,
        ]}
      />
      <Contact />
    </>
  );
}

function NotFoundRoute() {
  return (
    <>
      <Seo
        title="Page Not Found | RK Software Solutions"
        description="The page you are looking for could not be found."
        path="/404"
        noindex
      />
      <NotFound />
    </>
  );
}

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={HomeRoute} />
        <Route path="/about" component={AboutRoute} />
        <Route path="/courses" component={CoursesRoute} />
        <Route path="/placements" component={PlacementsRoute} />
        <Route path="/careers" component={CareersRoute} />
        <Route path="/contact" component={ContactRoute} />
        <Route component={NotFoundRoute} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
