
export interface NavLink {
  label: string;
  href: string;
}

export interface FeatureStat {
  icon: string;
  title: string;
  description: string;
}

export interface Product {
  id: string;
  title: string;
  price: string;
  img: string;
  offset?: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  img: string;
  offset?: string;
}

export interface JournalItem {
  alt: string;
  img: string;
  span: string;
  height: string;
  mt?: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
    image: string;
  };
  featuredIn: string[];
  stats: FeatureStat[];
  philosophy: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    cta: string;
    image: string;
  };
  shop: {
    badge: string;
    title: string;
    products: Product[];
    cta: string;
  };
  story: {
    badge: string;
    title: string;
    quote: string;
    description: string;
    signature: string;
    image: string;
  };
  journal: {
    title: string;
    subtitle: string;
    badge: string;
    items: JournalItem[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    badge: string;
    items: Testimonial[];
  };
  footer: {
    description: string;
    socials: { icon: string; href: string }[];
    sitemap: NavLink[];
    customerCare: NavLink[];
    newsletter: {
      title: string;
      description: string;
    };
    copyright: string;
  };
}
