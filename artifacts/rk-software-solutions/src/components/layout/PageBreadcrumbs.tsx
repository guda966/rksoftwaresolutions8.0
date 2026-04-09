import { Link, useLocation } from "wouter";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

type Crumb = {
  label: string;
  href?: string;
};

const staticLabels: Record<string, string> = {
  "/about": "About",
  "/courses": "Courses",
  "/placements": "Placements",
  "/careers": "Careers",
  "/contact": "Contact",
};

export function PageBreadcrumbs() {
  const [location] = useLocation();

  if (location === "/" || location === "/404") {
    return null;
  }

  const crumbs: Crumb[] = [{ label: "Home", href: "/" }];
  crumbs.push({ label: staticLabels[location] ?? "Page" });

  return (
    <div className="border-b border-border bg-secondary/40">
      <div className="container mx-auto px-4 md:px-6 py-3">
        <Breadcrumb>
          <BreadcrumbList>
            {crumbs.map((crumb, index) => {
              const isLast = index === crumbs.length - 1;

              return (
                <BreadcrumbItem key={`${crumb.label}-${index}`}>
                  {isLast || !crumb.href ? (
                    <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link href={crumb.href}>{crumb.label}</Link>
                    </BreadcrumbLink>
                  )}
                  {!isLast && <BreadcrumbSeparator />}
                </BreadcrumbItem>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </div>
  );
}
