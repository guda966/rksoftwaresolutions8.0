import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";
import { JobAlertPopup } from "./JobAlertPopup";
import { ScrollToTop } from "./ScrollToTop";
import { PageBreadcrumbs } from "./PageBreadcrumbs";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <Navbar />
      <main className="flex-grow">
        <PageBreadcrumbs />
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
      <JobAlertPopup />
      <ScrollToTop />
    </div>
  );
}
