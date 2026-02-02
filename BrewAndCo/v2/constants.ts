import { SiteConfig, NavLink } from './types';

export const SITE_CONFIG: SiteConfig = {
  name: "Brew & Co",
  tagline: "Artisanal Story & Shop",
  seo: {
    title: "Brew & Co | Artisanal Story & Shop",
    description: "Discover the journey of coffee from soil to cup. Shop our artisanal roasts and experience true craftsmanship.",
    keywords: "artisanal coffee, coffee roastery, specialty coffee beans, brew guide"
  },
  contact: {
    whatsapp: "6281234567890",
    maps: "https://goo.gl/maps/example",
    address: "456 Artisan Way, Austin, TX"
  },
  menu: {
    badge: "The Full List",
    title: "Our Coffee",
    subtitle: "Selection",
    categories: [
      {
        name: "Hand Brew",
        items: [
          { name: "V60 Pour Over", price: "$6.0", description: "Choice of seasonal single origin beans." },
          { name: "Japanese Iced", price: "$6.5", description: "Flash-chilled for bright acidity." }
        ]
      },
      {
        name: "Espresso Based",
        items: [
          { name: "Oat Milk Latte", price: "$5.5", description: "Creamy, nutty, and naturally sweet." },
          { name: "The Signature", price: "$6.0", description: "Our secret blend with hints of spice." }
        ]
      }
    ]
  },
  hero: {
    badge: "Small Batch • Artisanal Roast",
    title: "Purely",
    subtitle: "Artisanal.",
    cta: "Shop Collections",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCW9LgEvQjzVLK2bW57TVokL8RgzMq08ZgXcRFPuPGcOHMynMPOD19VeCiYul5MHUPoiK_0XLUIAYRgGICmn-4D1nkph9fafQqea7G_vf4UT2MbDujcT1aNsvuts9ci9PHO-aYBORRfpwUnx_vHc4k7AVSGzxvCNuLsnooyr8HxwqUYPOoRYDcMTg85nV-CL0xABIUUkM4CWyUiCkoRpWSzxBgc0yHLUWi5elPmanPVQsaVJZIX6pZRkJwCqu6qDClXWSYGnvVpQJKX"
  },
  featuredIn: ["Vogue", "GQ", "BuzzFeed", "LIFESTYLE"],
  stats: [
    { icon: "verified", title: "100% Arabica", description: "Premium single-origin beans." },
    { icon: "eco", title: "Sustainably Sourced", description: "Directly traded relationships." },
    { icon: "local_fire_department", title: "Artisanal Roast", description: "Small-batch roasted in Austin." }
  ],
  philosophy: {
    badge: "Our Philosophy",
    title: "Minimalist",
    subtitle: "Complexity.",
    description: "We strip away the noise to focus on the essential. Every roast profile is a study in precision.",
    cta: "Read our Manifesto",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAV4SDD_OD-N6hvagzhk_akh9aE7IX9_rnq2Sa2cZb_laycWA9mGS2NIKqS_jSqGwyxNe85lN8uj3pdN8RkxQjLDOaEQv_eruKlgGuhKEaBtptWpZcPKz1sQeWTMzW0pdhJAJIWa3eHMD00I3otomwR2cbAxOiY9-_tL0dE5bseEcBNuvF511nf0u5IrVwX9__ljLlplvmMJ-2z9n18EMOHrFj_sXEgI5QoIT829mS6EBsUZZ6no4fqLegVa4WCLJTYngVXzzZ4tDeD"
  },
  shop: {
    badge: "Curated Selection",
    title: "Shop Collections",
    cta: "View All Products",
    products: [
      { id: "1", title: "Artisanal Whole Beans", price: "$24.00", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDCegTcew92QhqPwYLOtSyjHI_vX5385CWK_s4RtyC-VC5q4JZgzQwWN99QuZw359SwQzrFW_RyucH6qbSYVPQsPqZBaSUtGAzjw9mFaAGQ0qS7I10AN0M751r-Iy1jUAXvHOABLQfHre4DZrJFXDh-__vyD1TnQ_eEnKgVY6P5UNpyuBCyy2POiNHIuiaYbwMOh-_WvfXm6UAwBmTyfFwn7GaiaR77yYw1G-EtbSbaPqYXgzUNcBgO4-wj1HwOvlo6wQyEidxVLzcj" },
      { id: "2", title: "Cold Brew Concentrate", price: "$18.00", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC5xU8fHTI7uYK1ToY7VqGYJWTvOg0LePIjnW71C7JHkAgbi-4nlJE0-NSxdL241gEOkyKkAFIkUAvbKWOjU9Zjlr2fSVE9iQGs0SfbVWuKKWROKWFC1ZiJpk1e3v1dPpQp8ZZi_bEugXEt_zKZsLPHjiKM-YeecRGdZtq6CtqJkukiA-UppNJFdVBXihJueBEQfbCDYZiTUHdzpfvw4cGucG8WV_AUShGOsLZOm0Z7TmHDAlWKI-EtHvH4TvQGukCw81yk0tkmnWaH", offset: "lg:mt-16" }
    ]
  },
  story: {
    badge: "Our Story",
    title: "Rooted in Dedication.",
    quote: "Why can't home-brewed coffee taste as vibrant as a professional pour-over?",
    description: "What started as a garage experiment became a mission to democratize specialty coffee.",
    signature: "The Founders",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9m_aB04PD836n9gv4b6gLN-KL0i3ABDs7vuSVP5O7_Jml0XtNscV-VPHK1pzOFE6HsEypjpF2dhDcvSzIwY1l-lt9oV1n5VsT5c05rjPzoknIq_7Z__7sAfWS8pw-QP5rXkbxKGvuORNbTvTbutzHl_YOTidn3wY-1HS6UUISkwUm7S-afvXwfMT48F7mtgalZ7d1LgAx14LbEr3rjF3YQFfE9Mvv_Qy_YrsQsqKKk6-LYCkfLssjtsqfmiZvSFSxRiWjI9dz41Pm"
  },
  journal: {
    title: "Visual",
    subtitle: "Journal.",
    badge: "Atmosphere & Precision Captured.",
    items: [
      { alt: "People socializing", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIS8fp5uRFtzA7s8xHbfVPimyJmpSfNaC1Pajl8N_yXCtK5V0vhsVLapWdC_UnC93q9UvuZKQb3aCIjO69ZtwSuAcKnKo6cf-gM56lidv5-_VQMpAir6PFub8PaHFKPwA1Llk891iB8K1UVKMmg6ipelVuuipwzVAZ1tW9yz9k9OgIBv2A6Kyomg3-u57a-clB2saJg1zG9QhjvoHIuT6-SyDjZf12sjJ6xinsHB6t_6_08bcFLyEZfq3wjRdLqKezbxSJzaPb5KyH", span: "col-span-12 md:col-span-8", height: "h-[600px]" }
    ]
  },
  testimonials: {
    title: "Voice of the",
    subtitle: "Regulars.",
    badge: "A sanctuary for the city's modern creatives.",
    items: [
      { quote: "A masterclass in minimalism.", name: "Elena R.", role: "Architect", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAB4Tl9ihyJuox21AyitqkF1xD5bcdwyhQdlIbNSpXGTbTcZb_ti6zRZT27gzkCs2Qh4AlXdUUn3Bx2eH-mx_KZZvMfJL6mql6HYScs8Hob2RWVPNVtSaiUzN6eTP11l1FtUPAQ4W2YLlCap1Y5xKBXkve5n66FzaRyOiu2ssoHV-E-e8gdizprpyyChCJDJQzEuKjr_vjNHxYSqiGDZzbg1z3QdMflXzQPQ0CHnGBtTtJpnXquBk5pW0_bH7T7JeL7xMfb7SucJJ6X" }
    ]
  },
  footer: {
    description: "Redefining the coffee ritual. Austin, Texas.",
    socials: [{ icon: "public", href: "#" }, { icon: "photo_camera", href: "#" }],
    sitemap: [
      { label: "Our Story", href: "#about" },
      { label: "Collections", href: "#full-menu" }
    ],
    customerCare: [
      { label: "Track Order", href: "#" },
      { label: "Contact Us", href: "#" }
    ],
    newsletter: {
      title: "Briefing",
      description: "Subscribe for limited drops."
    },
    copyright: "© 2024 Brew & Co. All rights reserved."
  }
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "Collections", href: "#full-menu" },
  { label: "Our Story", href: "#about" },
  { label: "Community", href: "#testimonials" }
];