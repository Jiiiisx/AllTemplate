import { Testimonial, GalleryItem, Step, SiteConfig, NavLink } from './types';

export const SITE_CONFIG: SiteConfig = {
  name: "Brew & Co",
  seo: {
    title: "Brew & Co | Modern Coffee Experience Austin",
    description: "Experience the finest single-origin coffee in Austin. Minimalist atmosphere, scientific precision, and artisanal roasts.",
    keywords: "specialty coffee, austin cafe, minimalist coffee shop, single origin beans"
  },
  contact: {
    whatsapp: "6280000000000",
    maps: "https://goo.gl/maps/example",
    address: "Your Street Name No. 123, Your City"
  },
  hero: {
    badge: "Since 2024 — Origin Focused",
    title: "Pure",
    subtitle: "Extraction.",
    cta: "Explore Menu",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCW9LgEvQjzVLK2bW57TVokL8RgzMq08ZgXcRFPuPGcOHMynMPOD19VeCiYul5MHUPoiK_0XLUIAYRgGICmn-4D1nkph9fafQqea7G_vf4UT2MbDujcT1aNsvuts9ci9PHO-aYBORRfpwUnx_vHc4k7AVSGzxvCNuLsnooyr8HxwqUYPOoRYDcMTg85nV-CL0xABIUUkM4CWyUiCkoRpWSzxBgc0yHLUWi5elPmanPVQsaVJZIX6pZRkJwCqu6qDClXWSYGnvVpQJKX"
  },
  menu: {
    badge: "The Collection",
    title: "Seasonal",
    subtitle: "Selection",
    categories: [
      {
        name: "Black",
        items: [
          { name: "Ethiopia Guji", price: "$5.5", description: "Jasmine, Peach, Bergamot" },
          { name: "Colombia Huila", price: "$5.0", description: "Chocolate, Red Apple, Panela" }
        ]
      },
      {
        name: "White",
        items: [
          { name: "Flat White", price: "$4.5", description: "Double shot, silky microfoam" },
          { name: "Cortado", price: "$4.0", description: "1:1 ratio, intense & creamy" }
        ]
      }
    ]
  },
  about: {
    badge: "Our Philosophy",
    title: "Minimalist",
    subtitle: "Complexity.",
    description: "We strip away the noise to focus on the essential. Every roast profile is a study in precision, and every space we build is a canvas for your creative focus.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAV4SDD_OD-N6hvagzhk_akh9aE7IX9_rnq2Sa2cZb_laycWA9mGS2NIKqS_jSqGwyxNe85lN8uj3pdN8RkxQjLDOaEQv_eruKlgGuhKEaBtptWpZcPKz1sQeWTMzW0pdhJAJIWa3eHMD00I3otomwR2cbAxOiY9-_tL0dE5bseEcBNuvF511nf0u5IrVwX9__ljLlplvmMJ-2z9n18EMOHrFj_sXEgI5QoIT829mS6EBsUZZ6no4fqLegVa4WCLJTYngVXzzZ4tDeD",
    feature: {
      title: "Single Origin",
      description: "Directly traded, seasonally harvested beans."
    }
  },
  footer: {
    description: "Redefining the coffee ritual through minimalist aesthetics and scientific precision. Austin, Texas.",
    connect: [
      { label: "Instagram", href: "#" },
      { label: "Journal", href: "#" },
      { label: "Wholesale", href: "#" }
    ],
    hours: [
      { days: "Mon — Fri", time: "07 — 20" },
      { days: "Sat — Sun", time: "08 — 21" }
    ],
    copyright: "© 2024 Brew & Co. Coffee Roasters"
  },
  featuredIn: ["Forbes", "Wired", "Monocle", "Wallpaper*"],
  stats: [
    { label: "Extraction Temp", value: "92.4°C", desc: "Thermal stability for flavor clarity." },
    { label: "Bean Selection", value: "Top 2%", desc: "Only the highest specialty grade." },
    { label: "Roast Precision", value: "0.1s", desc: "Micro-controlled heat profiles." }
  ]
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "Philosophy", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Visuals", href: "#gallery" },
  { label: "Community", href: "#testimonials" }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: '"The clarity of flavor in their pour-overs is unmatched. A masterclass in minimalism."',
    author: "Jordan S.",
    role: "UX Lead",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9m_aB04PD836n9gv4b6gLN-KL0i3ABDs7vuSVP5O7_Jml0XtNscV-VPHK1pzOFE6HsEypjpF2dhDcvSzIwY1l-lt9oV1n5VsT5c05rjPzoknIq_7Z__7sAfWS8pw-QP5rXkbxKGvuORNbTvTbutzHl_YOTidn3wY-1HS6UUISkwUm7S-afvXwfMT48F7mtgalZ7d1LgAx14LbEr3rjF3YQFfE9Mvv_Qy_YrsQsqKKk6-LYCkfLssjtsqfmiZvSFSxRiWjI9dz41Pm"
  },
  {
    quote: '"An architectural gem. Every corner is designed for deep thought and better coffee."',
    author: "Elena R.",
    role: "Architect",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAB4Tl9ihyJuox21AyitqkF1xD5bcdwyhQdlIbNSpXGTbTcZb_ti6zRZT27gzkCs2Qh4AlXdUUn3Bx2eH-mx_KZZvMfJL6mql6HYScs8Hob2RWVPNVtSaiUzN6eTP11l1FtUPAQ4W2YLlCap1Y5xKBXkve5n66FzaRyOiu2ssoHV-E-e8gdizprpyyChCJDJQzEuKjr_vjNHxYSqiGDZzbg1z3QdMflXzQPQ0CHnGBtTtJpnXquBk5pW0_bH7T7JeL7xMfb7SucJJ6X"
  },
  {
    quote: '"Consistent, scientific, yet soulful. Brew & Co is the only place that understands the ritual."',
    author: "Marcus T.",
    role: "Engineer",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuATVqHhXSMCxhmdQx_UmFUHAJVtBoyzROgiPZvbbdojPMxtVuHAcsEXNit4AXmBsUdqg5iVZz_0ZeBVuORA0QbMCPbnRwPw6PQrk3ow3gyShneYslH802I2ZTX30PVpccNs4oF9F7jgC1zdiAQxtswP72i1HdPcZqY898tZpHTT-GTHTKD_7YJHpKHXmIo6PfbNB20SroK6DlsErEznLI2EEQxkijmt8Jg6xAjHv348P67_EcY1jUnN5leAGI4tslTV__YC4c6TooK1"
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIS8fp5uRFtzA7s8xHbfVPimyJmpSfNaC1Pajl8N_yXCtK5V0vhsVLapWdC_UnC93q9UvuZKQb3aCIjO69ZtwSuAcKnKo6cf-gM56lidv5-_VQMpAir6PFub8PaHFKPwA1Llk891iB8K1UVKMmg6ipelVuuipwzVAZ1tW9yz9k9OgIBv2A6Kyomg3-u57a-clB2saJg1zG9QhjvoHIuT6-SyDjZf12sjJ6xinsHB6t_6_08bcFLyEZfq3wjRdLqKezbxSJzaPb5KyH",
    alt: "People socializing",
    span: "md:col-span-6 lg:col-span-4",
    height: "h-[400px] md:h-[600px]",
    mt: "mt-0"
  },
  {
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVarGgJ9JLp7TRBz7MQdL7L9s-M1eiA303isNyYYlqacg4eaKQrIiYOSTFYUTneUaVdsDRzKxUzDGraIao1lm61QRfE0o9__guYXPfbm3xKFV53FlNALqjrpzOA9JVql46b68bJXyFoJiV8q3Z0bpNSDENGIDMdzt-MO63yXY77idEcgVw50dFSol4XWtCuCtzJH4ypSiiIlQyLlK9pDB0819YVdDVUVs1NLusA-pgD-KQ_uYcl_KQsO-L_gcv86Zyg5mFtQy7efoK",
    alt: "Latte art",
    span: "md:col-span-6 lg:col-span-4",
    height: "h-[400px] md:h-[600px]",
    mt: "md:mt-24"
  },
  {
    url: "https://lh3.googleusercontent.com/aida-public/AB6AXuAV4SDD_OD-N6hvagzhk_akh9aE7IX9_rnq2Sa2cZb_laycWA9mGS2NIKqS_jSqGwyxNe85lN8uj3pdN8RkxQjLDOaEQv_eruKlgGuhKEaBtptWpZcPKz1sQeWTMzW0pdhJAJIWa3eHMD00I3otomwR2cbAxOiY9-_tL0dE5bseEcBNuvF511nf0u5IrVwX9__ljLlplvmMJ-2z9n18EMOHrFj_sXEgI5QoIT829mS6EBsUZZ6no4fqLegVa4WCLJTYngVXzzZ4tDeD",
    alt: "Coffee beans",
    span: "md:col-span-6 lg:col-span-4",
    height: "h-[400px] md:h-[600px]",
    mt: "mt-0 md:mt-12"
  }
];

export const STEPS: Step[] = [
  { id: "01", title: "The Source", description: "Ethical labor and biodiversity.", mt: "mt-0" },
  { id: "02", title: "The Roast", description: "Highlighting terroir in small batches.", mt: "lg:mt-32" },
  { id: "03", title: "The Pour", description: "A ritual of absolute precision.", mt: "lg:mt-64" }
];