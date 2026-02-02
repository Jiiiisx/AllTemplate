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

export interface SiteConfig {
  name: string;
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
    image: string;
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
}