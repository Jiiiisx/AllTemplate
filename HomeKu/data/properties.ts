
export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  sqft: string;
  mainImage: string;
  gallery: string[];
  description: string;
  amenities: string[];
}

export const properties: Property[] = [
  {
    id: "zenith-atrium",
    title: "The Zenith Atrium",
    location: "ZURICH, SWITZERLAND",
    price: "$1,450,000",
    beds: 4,
    baths: 3,
    sqft: "3,200",
    mainImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1613977257592-4871e5fcd7c4?auto=format&fit=crop&q=80&w=1200"
    ],
    description: "A masterpiece of modern architecture, The Zenith Atrium offers unparalleled views of the Swiss Alps. Every corner is designed with precision, blending natural materials with cutting-edge technology.",
    amenities: ["Private Elevator", "Wine Cellar", "Infinity Pool", "Smart Home System"]
  },
  {
    id: "ember-forest",
    title: "Ember Forest Lodge",
    location: "BRITISH COLUMBIA, CA",
    price: "$890,000",
    beds: 2,
    baths: 1,
    sqft: "1,150",
    mainImage: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1449156733864-dd5471bb7427?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1464146072230-91cabc968266?auto=format&fit=crop&q=80&w=1200"
    ],
    description: "Nestled within the ancient pines of British Columbia, this lodge is a sanctuary for those seeking silence and luxury. Experience the warmth of cedar walls and the crackle of a stone fireplace.",
    amenities: ["Outdoor Hot Tub", "Floor-to-ceiling Windows", "Solar Powered", "Hiking Trails Access"]
  },
  {
    id: "lumina-villa",
    title: "Lumina Villa",
    location: "SANTORINI, GREECE",
    price: "$2,100,000",
    beds: 3,
    baths: 3,
    sqft: "2,800",
    mainImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?auto=format&fit=crop&q=80&w=1200"
    ],
    description: "Suspended over the Aegean Sea, Lumina Villa is a tribute to light and water. Its white-washed walls capture the glow of the Mediterranean sun, offering a lifestyle of pure serenity.",
    amenities: ["Private Deck", "Sun Terrace", "Chef's Kitchen", "Panoramic Sea Views"]
  },
  {
    id: "marina-pavilion",
    title: "The Marina Pavilion",
    location: "DUBAI, UAE",
    price: "$3,750,000",
    beds: 5,
    baths: 6,
    sqft: "5,400",
    mainImage: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1200"
    ],
    description: "A pinnacle of desert luxury, The Marina Pavilion combines grand proportions with intimate details. Featuring a private dock and a state-of-the-art wellness suite, it defines modern waterfront living.",
    amenities: ["Private Dock", "Wellness Suite", "Home Cinema", "24/7 Concierge"]
  }
];
