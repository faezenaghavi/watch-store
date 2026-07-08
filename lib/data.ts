import { Brand } from "@/types/brand";
import { Product } from "@/types/product";

export const brands: Brand[] = [
  {
    id: "rolex",
    name: "Rolex",
    tagline: "A Crown for Every Achievement",
    description:
      "Founded in 1905, Rolex is the world's most recognized luxury watch brand, synonymous with precision, prestige, and timeless design.",
    image: "/public/images/Rolex.jpeg",
    founded: 1905,
    origin: "Geneva, Switzerland",
    logo: "♛",
  },
  {
    id: "omega",
    name: "Omega",
    tagline: "The Choice of Legends",
    description:
      "Since 1848, Omega has been crafting exceptional timepieces worn by explorers, astronauts, and style icons worldwide.",
    image: "/images/Omega.jpeg",
    founded: 1848,
    origin: "Biel/Bienne, Switzerland",
    logo: "Ω",
  },
  {
    id: "tissot",
    name: "Tissot",
    tagline: "Innovators by Tradition",
    description:
      "Tissot has been pioneering watchmaking innovation since 1853, offering Swiss precision at accessible luxury price points.",
    image: "/images/TISSOT.jpeg",
    founded: 1853,
    origin: "Le Locle, Switzerland",
    logo: "T+",
  },
  {
    id: "casio",
    name: "Casio",
    tagline: "Creativity and Contribution",
    description:
      "From the iconic G-Shock to elegant Edifice, Casio redefines what a timepiece can be with cutting-edge technology.",
    image: "/images/CASIO.jpeg",
    founded: 1946,
    origin: "Tokyo, Japan",
    logo: "C",
  },
  {
    id: "seiko",
    name: "Seiko",
    tagline: "Moving Ahead, Touching Hearts",
    description:
      "Seiko's dedication to innovation has produced world-firsts in watchmaking, from Spring Drive to kinetic technology.",
    image: "/images/SEIKO.jpeg",
    founded: 1881,
    origin: "Tokyo, Japan",
    logo: "S",
  },
  {
    id: "citizen",
    name: "Citizen",
    tagline: "Better Starts Now",
    description:
      "Citizen pioneered Eco-Drive technology, creating light-powered watches that never need a battery replacement.",
    image: "/images/Citizen.jpeg",
    founded: 1918,
    origin: "Tokyo, Japan",
    logo: "C",
  },
  {
    id: "orient",
    name: "Orient",
    tagline: "Traditional Craft, Modern Vision",
    description:
      "Orient Star represents Japanese mechanical watchmaking at its finest, blending tradition with contemporary aesthetics.",
    image: "/images/Orient.jpeg",
    founded: 1950,
    origin: "Tokyo, Japan",
    logo: "O",
  },
  {
    id: "longines",
    name: "Longines",
    tagline: "Elegance is an Attitude",
    description:
      "With over 190 years of heritage, Longines embodies the elegance of Swiss watchmaking tradition.",
    image: "/images/Longines.jpeg",
    founded: 1832,
    origin: "Saint-Imier, Switzerland",
    logo: "L",
  },
  {
    id: "fossil",
    name: "Fossil",
    tagline: "Long Live Vintage",
    description:
      "Fossil combines vintage-inspired design with modern functionality, creating accessible style for every wrist.",
    image: "/images/Fossil.jpeg",
    founded: 1984,
    origin: "Richardson, Texas, USA",
    logo: "F",
  },
  {
    id: "tagheuer",
    name: "Tag Heuer",
    tagline: "Don't Crack Under Pressure",
    description:
      "Tag Heuer's racing DNA and avant-garde spirit create bold chronographs that push the boundaries of precision.",
    image: "/images/TAGheuer.jpeg",
    founded: 1860,
    origin: "La Chaux-de-Fonds, Switzerland",
    logo: "TH",
  },
];

export const products: Product[] = [
  {
    id: "rolex-submariner",
    name: "Submariner Date",
    brand: "rolex",
    price: 14500,
    originalPrice: 16000,
    rating: 4.9,
    reviews: 324,
    gender: "men",
    image: "https://picsum.photos/seed/subm1/400/500",
    description:
      "The quintessential dive watch, the Submariner Date features a 41mm Oystersteel case with a black Cerachrom bezel insert.",
    features: [
      "41mm Oystersteel",
      "Calibre 3235",
      "300m Water Resistant",
      "Cerachrom Bezel",
    ],
    inStock: true,
  },
  {
    id: "omega-seamaster",
    name: "Seamaster Planet Ocean",
    brand: "omega",
    price: 8200,
    rating: 4.8,
    reviews: 218,
    gender: "men",
    image: "https://picsum.photos/seed/seam2/400/500",
    description:
      "The Planet Ocean blends diving heritage with contemporary luxury, featuring a titanium case and co-axial movement.",
    features: [
      "43.5mm Titanium",
      "Calibre 8900",
      "600m Water Resistant",
      "Co-Axial Escapement",
    ],
    inStock: true,
  },
  {
    id: "tissot-prx",
    name: "PRX Powermatic 80",
    brand: "tissot",
    price: 725,
    originalPrice: 850,
    rating: 4.7,
    reviews: 512,
    gender: "men",
    image: "https://picsum.photos/seed/prx3/400/500",
    description:
      "The PRX revives the 1978 classic with its signature integrated bracelet and flat barrel case.",
    features: [
      "40mm Steel",
      "Powermatic 80",
      "80h Power Reserve",
      "Sapphire Crystal",
    ],
    inStock: true,
  },
  {
    id: "casio-gshock",
    name: "G-Shock MR-G",
    brand: "casio",
    price: 3200,
    rating: 4.6,
    reviews: 189,
    gender: "men",
    image: "https://picsum.photos/seed/gshk4/400/500",
    description:
      "The pinnacle of G-Shock engineering, the MR-G uses titanium and advanced materials for ultimate toughness.",
    features: [
      "Titanium Case",
      "Solar Powered",
      "Multiband 6",
      "200m Water Resistant",
    ],
    inStock: true,
  },
  {
    id: "seiko-presage",
    name: "Presage Sharp Edge",
    brand: "seiko",
    price: 950,
    originalPrice: 1100,
    rating: 4.7,
    reviews: 287,
    gender: "men",
    image: "https://picsum.photos/seed/pres5/400/500",
    description:
      "The Presage Sharp Edge series showcases Japanese craftsmanship with its textured dial inspired by traditional patterns.",
    features: [
      "40.5mm Steel",
      "6R35 Movement",
      "72h Power Reserve",
      "Enamel Dial",
    ],
    inStock: true,
  },
  {
    id: "rolex-datejust",
    name: "Datejust 31",
    brand: "rolex",
    price: 9650,
    rating: 4.9,
    reviews: 176,
    gender: "women",
    image: "https://picsum.photos/seed/djst6/400/500",
    description:
      "The Datejust 31 in Everose gold with a diamond-set bezel is the epitome of feminine elegance.",
    features: [
      "31mm Everose",
      "Calibre 2236",
      "100m Water Resistant",
      "Diamond Bezel",
    ],
    inStock: true,
  },
  {
    id: "omega-constellation",
    name: "Constellation",
    brand: "omega",
    price: 5800,
    originalPrice: 6400,
    rating: 4.8,
    reviews: 143,
    gender: "women",
    image: "https://picsum.photos/seed/cons7/400/500",
    description:
      "The Constellation features the iconic claws and polished bezel with Roman numerals in a refined 28mm case.",
    features: [
      "28mm Steel & Gold",
      "Calibre 4061",
      "50m Water Resistant",
      "Mother of Pearl Dial",
    ],
    inStock: true,
  },
  {
    id: "citizen-ecodrive",
    name: "Eco-Drive Silhouette",
    brand: "citizen",
    price: 395,
    rating: 4.5,
    reviews: 321,
    gender: "women",
    image: "https://picsum.photos/seed/eco8/400/500",
    description:
      "The Eco-Drive Silhouette harnesses any light source for power, wrapped in a sleek minimalist design.",
    features: [
      "32mm Steel",
      "Eco-Drive",
      "Never Needs Battery",
      "Sapphire Crystal",
    ],
    inStock: true,
  },
  {
    id: "longines-master",
    name: "Master Collection",
    brand: "longines",
    price: 2200,
    originalPrice: 2500,
    rating: 4.7,
    reviews: 98,
    gender: "men",
    image: "https://picsum.photos/seed/mast9/400/500",
    description:
      "The Master Collection chronograph embodies classical Swiss watchmaking with its silver flinqué dial.",
    features: [
      "42mm Steel",
      "L688 Column Wheel",
      "66h Power Reserve",
      "Chronograph",
    ],
    inStock: true,
  },
  {
    id: "tagheuer-carrera",
    name: "Carrera Chronograph",
    brand: "tagheuer",
    price: 5350,
    rating: 4.8,
    reviews: 267,
    gender: "men",
    image: "https://picsum.photos/seed/carr10/400/500",
    description:
      "Born on the racetrack, the Carrera Chronograph features the Heuer 02 in-house movement with 80-hour power reserve.",
    features: [
      "44mm Steel",
      "Heuer 02",
      "80h Power Reserve",
      "Tachymeter Bezel",
    ],
    inStock: true,
  },
  {
    id: "orient-bambino",
    name: "Orient Bambino",
    brand: "orient",
    price: 320,
    rating: 4.5,
    reviews: 456,
    gender: "men",
    image: "https://picsum.photos/seed/bamb11/400/500",
    description:
      "The Bambino is a dress watch icon, featuring a domed crystal and vintage-inspired dial at an unbeatable price.",
    features: [
      "40.5mm Steel",
      "F6724 Automatic",
      "40h Power Reserve",
      "Domed Crystal",
    ],
    inStock: true,
  },
  {
    id: "fossil-gen6",
    name: "Gen 6 Vintage",
    brand: "fossil",
    price: 265,
    originalPrice: 310,
    rating: 4.3,
    reviews: 534,
    gender: "women",
    image: "https://picsum.photos/seed/fos12/400/500",
    description:
      "The Gen 6 Vintage blends classic Fossil aesthetics with smart functionality and a rose gold finish.",
    features: ["40mm Steel", "Wear OS", "Heart Rate Monitor", "GPS Built-in"],
    inStock: true,
  },
  {
    id: "longines-dolcevita",
    name: "DolceVita",
    brand: "longines",
    price: 1900,
    rating: 4.6,
    reviews: 112,
    gender: "women",
    image: "https://picsum.photos/seed/dolc13/400/500",
    description:
      "The DolceVita captures the sweet Italian lifestyle in a rectangular steel case with refined details.",
    features: [
      "23x37mm Steel",
      "L595 Quartz",
      "30m Water Resistant",
      "Roman Numerals",
    ],
    inStock: true,
  },
  {
    id: "omega-aquaterra",
    name: "Aqua Terra 38",
    brand: "omega",
    price: 6100,
    rating: 4.8,
    reviews: 195,
    gender: "men",
    image: "https://picsum.photos/seed/aqua14/400/500",
    description:
      "The Aqua Terra combines maritime heritage with a teak-pattern dial and Master Chronometer certification.",
    features: [
      "38mm Steel",
      "Calibre 8800",
      "150m Water Resistant",
      "Master Chronometer",
    ],
    inStock: true,
  },
  {
    id: "rolex-ladydatejust",
    name: "Lady-Datejust",
    brand: "rolex",
    price: 11200,
    originalPrice: 12000,
    rating: 4.9,
    reviews: 89,
    gender: "women",
    image: "https://picsum.photos/seed/ldj15/400/500",
    description:
      "The Lady-Datejust in yellow gold with a president bracelet is the ultimate symbol of feminine sophistication.",
    features: [
      "28mm Yellow Gold",
      "Calibre 2236",
      "100m Water Resistant",
      "Jubilee Dial",
    ],
    inStock: true,
  },
  {
    id: "tagheuer-monaco",
    name: "Monaco",
    brand: "tagheuer",
    price: 7200,
    rating: 4.9,
    reviews: 156,
    gender: "men",
    image: "https://picsum.photos/seed/mona16/400/500",
    description:
      "The iconic square-cased Monaco, forever linked to Steve McQueen, features the Calibre Heuer 02 movement.",
    features: ["39mm Steel", "Heuer 02", "80h Power Reserve", "Square Case"],
    inStock: true,
  },
];

// ─── Helper Functions ───

export function getProductsByBrand(brandId: string): Product[] {
  return products.filter((p) => p.brand === brandId);
}

export function getProductsByGender(gender: "men" | "women"): Product[] {
  return products.filter((p) => p.gender === gender);
}

export function getBrandById(brandId: string): Brand | undefined {
  return brands.find((b) => b.id === brandId);
}

export function getFeaturedProducts(): Product[] {
  return products.slice(0, 8);
}

export function getNewArrivals(): Product[] {
  return products.slice(8, 16);
}
