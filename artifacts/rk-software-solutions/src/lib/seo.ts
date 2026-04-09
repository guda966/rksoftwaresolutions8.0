export const SITE_URL = "https://rksoftwaresolutions.in";
export const SITE_NAME = "RK Software Solutions";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/opengraph.jpg`;
export const BUSINESS_EMAIL = "info@rksoftwaresolutions.in";
export const BUSINESS_PHONE = "+91 90636 16867";
export const BUSINESS_ADDRESS = {
  streetAddress: "301 & 402, 3rd Floor, Opp. SR Nagar Bus Stop, Madhura Nagar",
  addressLocality: "Hyderabad",
  addressRegion: "Telangana",
  postalCode: "500038",
  addressCountry: "IN",
};

export type BreadcrumbItem = {
  name: string;
  path: string;
};

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

export function makeBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: absoluteUrl("/images/logo.png"),
  image: absoluteUrl("/opengraph.jpg"),
  email: BUSINESS_EMAIL,
  telephone: BUSINESS_PHONE,
  sameAs: ["https://www.google.com/maps/place/RK+Software+Solutions/@17.4396746,78.4408251,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb918904b99407:0xf7b6427f4281c2fc!8m2!3d17.4396746!4d78.4408251!16s%2Fg%2F11pzrrr3g0"],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: SITE_NAME,
  url: SITE_URL,
  image: absoluteUrl("/opengraph.jpg"),
  logo: absoluteUrl("/images/logo.png"),
  telephone: BUSINESS_PHONE,
  email: BUSINESS_EMAIL,
  address: {
    "@type": "PostalAddress",
    ...BUSINESS_ADDRESS,
  },
  areaServed: ["Hyderabad", "Telangana", "India"],
  openingHours: ["Mo-Sa 09:00-19:00"],
  hasMap: "https://www.google.com/maps/place/RK+Software+Solutions/@17.4396746,78.4408251,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb918904b99407:0xf7b6427f4281c2fc!8m2!3d17.4396746!4d78.4408251!16s%2Fg%2F11pzrrr3g0",
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
};
