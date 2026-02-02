export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export interface GalleryItem {
  url: string;
  alt: string;
  span: string;
  height: string;
  mt: string;
}

export interface Step {
  id: string;
  title: string;
  description: string;
  mt: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface MenuItem {
  name: string;
  price: string;
  description: string;
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export interface FeatureStat {
  label: string;
  value: string;
  desc: string;
}

export interface SiteConfig {
  name: string;
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
  contact: {
    whatsapp: string;
    maps: string;
    address: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
    image: string;
  };
  menu: {
    badge: string;
    title: string;
    subtitle: string;
    categories: MenuCategory[];
  };
  about: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    feature: {
      title: string;
      description: string;
    };
  };
  footer: {
    description: string;
    connect: NavLink[];
    hours: { days: string; time: string }[];
    copyright: string;
  };
  featuredIn: string[];
  stats: FeatureStat[];
}
