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
    image: "/images/seiko1.jpeg",
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
    image: "/images/rolex1.jpeg",
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
    image: "/images/omega1.jpeg",
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
    id: "seiko-presage",
    name: "Presage Sharp Edge",
    brand: "seiko",
    price: 950,
    originalPrice: 1100,
    rating: 4.7,
    reviews: 287,
    gender: "men",
    image: "/images/seiko3.jpeg",
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
    image: "/images/rolex5.jpeg",
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
    image: "/images/omega2.jpeg",
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
    image: "images/citizen1.jpeg",
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
    id: "orient-bambino",
    name: "Orient Bambino",
    brand: "orient",
    price: 320,
    rating: 4.5,
    reviews: 456,
    gender: "men",
    image: "/images/orient1.jpeg",
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
   {
    id: "rolex-daytona",
    name: "Cosmograph Daytona",
    brand: "rolex",
    price: 18500,
    originalPrice: 19800,
    rating: 4.9,
    reviews: 412,
    gender: "men",
    image: "/images/rolex-daytona.jpeg",
    description:
      "A legendary chronograph inspired by motorsport performance, with a clean dial and precise timing functions.",
    features: ["40mm Oystersteel", "Automatic Chronograph", "100m Water Resistant", "Cerachrom Bezel"],
    inStock: true,
  },
  {
    id: "rolex-gmtmaster2",
    name: "GMT-Master II",
    brand: "rolex",
    price: 17200,
    rating: 4.9,
    reviews: 298,
    gender: "men",
    image: "/images/rolex-gmtmaster2.jpeg",
    description:
      "Designed for travelers, this GMT watch lets you track multiple time zones with effortless style.",
    features: ["40mm Oystersteel", "GMT Function", "Dual Time Zone", "Rotatable Bezel"],
    inStock: true,
  },
  {
    id: "omega-speedmaster",
    name: "Speedmaster Moonwatch",
    brand: "omega",
    price: 7300,
    rating: 4.9,
    reviews: 501,
    gender: "men",
    image: "/images/omega-speedmaster.jpeg",
    description:
      "An iconic chronograph with a rich space legacy, crafted for precision and everyday wear.",
    features: ["42mm Steel", "Manual Wind", "Chronograph", "Sapphire Crystal"],
    inStock: true,
  },
  {
    id: "omega-deville",
    name: "De Ville Prestige",
    brand: "omega",
    price: 5400,
    originalPrice: 5900,
    rating: 4.7,
    reviews: 174,
    gender: "women",
    image: "/images/omega-deville.jpeg",
    description:
      "Elegant and refined, this dress watch delivers timeless styling for formal and daily use.",
    features: ["36mm Steel", "Quartz Movement", "Roman Numerals", "Slim Profile"],
    inStock: true,
  },
  {
    id: "tissot-gentleman",
    name: "Gentleman Powermatic 80",
    brand: "tissot",
    price: 875,
    originalPrice: 980,
    rating: 4.8,
    reviews: 366,
    gender: "men",
    image: "/images/tissot-gentleman.jpeg",
    description:
      "A versatile everyday watch with a balanced design, strong movement, and premium finishing.",
    features: ["40mm Steel", "Powermatic 80", "80h Power Reserve", "Sapphire Crystal"],
    inStock: true,
  },
  {
    id: "tissot-seastar",
    name: "Seastar 1000",
    brand: "tissot",
    price: 925,
    rating: 4.7,
    reviews: 245,
    gender: "men",
    image: "/images/tissot-seastar.jpeg",
    description:
      "A robust dive watch built for water sports and adventure with a bold modern design.",
    features: ["43mm Steel", "300m Water Resistant", "Unidirectional Bezel", "Swiss Made"],
    inStock: true,
  },
  {
    id: "casio-edifice",
    name: "Edifice Chronograph",
    brand: "casio",
    price: 240,
    rating: 4.4,
    reviews: 418,
    gender: "men",
    image: "/images/casio-edifice.jpeg",
    description:
      "A sharp and sporty chronograph that combines speed-inspired styling with practical features.",
    features: ["45mm Steel", "Chronograph", "Date Display", "Scratch Resistant Crystal"],
    inStock: true,
  },
  {
    id: "casio-gshock-ranger",
    name: "G-Shock Rangeman",
    brand: "casio",
    price: 380,
    rating: 4.8,
    reviews: 529,
    gender: "men",
    image: "/images/casio-rangeman.jpeg",
    description:
      "A rugged outdoor watch with advanced durability and reliable performance in extreme conditions.",
    features: ["Shock Resistant", "Solar Powered", "Triple Sensor", "200m Water Resistant"],
    inStock: true,
  },
  {
    id: "seiko-prospex",
    name: "Prospex Diver",
    brand: "seiko",
    price: 1150,
    rating: 4.8,
    reviews: 301,
    gender: "men",
    image: "/images/seiko3.jpeg",
    description:
      "A professional-style diver watch with strong lume, solid case construction, and dependable mechanics.",
    features: ["45mm Steel", "Automatic Movement", "200m Water Resistant", "LumiBrite"],
    inStock: true,
  },
  {
    id: "seiko-cocktailtime",
    name: "Presage Cocktail Time",
    brand: "seiko",
    price: 780,
    originalPrice: 890,
    rating: 4.7,
    reviews: 260,
    gender: "women",
    image: "/images/seiko-cocktailtime.jpeg",
    description:
      "A refined dress watch inspired by classic cocktail culture, with a beautiful textured dial.",
    features: ["38.5mm Steel", "Automatic Movement", "Textured Dial", "Domed Crystal"],
    inStock: true,
  },
  {
    id: "citizen-promaster",
    name: "Promaster Diver",
    brand: "citizen",
    price: 475,
    rating: 4.6,
    reviews: 214,
    gender: "men",
    image: "/images/citizen2.jpeg",
    description:
      "A reliable dive watch powered by light and built for everyday adventure.",
    features: ["44mm Steel", "Eco-Drive", "200m Water Resistant", "Dive Bezel"],
    inStock: true,
  },
  {
    id: "citizen-tsuyosa",
    name: "Tsuyosa Automatic",
    brand: "citizen",
    price: 325,
    rating: 4.6,
    reviews: 387,
    gender: "women",
    image: "/images/citizen3.jpeg",
    description:
      "A colorful and modern everyday watch with a clean integrated-bracelet look.",
    features: ["40mm Steel", "Automatic Movement", "Date Window", "Integrated Bracelet"],
    inStock: true,
  },
  {
    id: "longines-hydroconquest",
    name: "HydroConquest",
    brand: "longines",
    price: 1550,
    rating: 4.7,
    reviews: 188,
    gender: "men",
    image: "/images/longines-hydroconquest.jpeg",
    description:
      "A sporty Swiss dive watch with strong presence, functional design, and reliable performance.",
    features: ["41mm Steel", "Automatic Movement", "300m Water Resistant", "Ceramic Bezel"],
    inStock: true,
  },
  {
    id: "longines-spirit",
    name: "Spirit",
    brand: "longines",
    price: 2100,
    rating: 4.8,
    reviews: 141,
    gender: "men",
    image: "/images/longines-spirit.jpeg",
    description:
      "A pilot-inspired watch that blends heritage styling with modern precision and elegance.",
    features: ["42mm Steel", "COSC Chronometer", "Automatic", "Anti-Reflective Sapphire"],
    inStock: true,
  },
  {
    id: "tagheuer-aquaracer",
    name: "Aquaracer Professional 200",
    brand: "tagheuer",
    price: 3450,
    rating: 4.8,
    reviews: 206,
    gender: "women",
    image: "/images/tagheuer-aquaracer.jpeg",
    description:
      "A contemporary sports watch built for versatility, water resistance, and refined styling.",
    features: ["30mm Steel", "Quartz Movement", "200m Water Resistant", "Diamond Markers"],
    inStock: true,
  },
  {
    id: "tagheuer-formula1",
    name: "Formula 1 Chronograph",
    brand: "tagheuer",
    price: 2950,
    rating: 4.7,
    reviews: 233,
    gender: "men",
    image: "/images/tagheuer-formula1.jpeg",
    description:
      "A motorsport-driven chronograph with bold details and a fast, energetic personality.",
    features: ["44mm Steel", "Chronograph", "Tachymeter", "Screw-Down Crown"],
    inStock: true,
  },
  {
    id: "orient-kamasu",
    name: "Kamasu Diver",
    brand: "orient",
    price: 420,
    rating: 4.6,
    reviews: 351,
    gender: "men",
    image: "/images/orient-kamasu.jpeg",
    description:
      "A value-packed diver watch with strong water resistance and a clean classic look.",
    features: ["41.8mm Steel", "Automatic Movement", "200m Water Resistant", "Sapphire Crystal"],
    inStock: true,
  },
  {
    id: "fossil-machine",
    name: "Machine Chronograph",
    brand: "fossil",
    price: 195,
    originalPrice: 240,
    rating: 4.4,
    reviews: 489,
    gender: "men",
    image: "/images/fossil-machine.jpeg",
    description:
      "A bold everyday chronograph with industrial design details and a casual lifestyle feel.",
    features: ["44mm Steel", "Chronograph", "Date Display", "Leather Strap"],
    inStock: true,
  },
  {
    id: "fossil-hybrid",
    name: "Hybrid HR",
    brand: "fossil",
    price: 220,
    rating: 4.3,
    reviews: 302,
    gender: "women",
    image: "/images/fossil-hybrid.jpeg",
    description:
      "A smart hybrid watch that keeps an analog feel while offering modern connected features.",
    features: ["Smart Hybrid", "Heart Rate Tracking", "Notifications", "Battery Saver Mode"],
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

// ─── Persian (fa) Translations ───
// این بخش صرفاً افزودنی است و آرایه‌های brands/products بالا و توابع کمکی
// دست‌نخورده باقی مانده‌اند تا هیچ بخش دیگری از پروژه دچار تغییر رفتار نشود.
// برای نمایش نسخه فارسی، از توابع getLocalizedBrand(s) / getLocalizedProduct(s)
// در پایین فایل با پاس دادن locale استفاده کنید.

type BrandTranslation = {
  name: string;
  tagline: string;
  description: string;
  origin: string;
};

type ProductTranslation = {
  name: string;
  description: string;
  features: string[];
};

export const brandTranslationsFa: Record<string, BrandTranslation> = {
  rolex: {
    name: "رولکس",
    tagline: "تاجی برای هر دستاورد",
    description:
      "رولکس که در سال ۱۹۰۵ تأسیس شد، شناخته‌شده‌ترین برند ساعت لوکس در جهان است؛ مترادف با دقت، اعتبار و طراحی ماندگار.",
    origin: "ژنو، سوئیس",
  },
  omega: {
    name: "امگا",
    tagline: "انتخاب اسطوره‌ها",
    description:
      "امگا از سال ۱۸۴۸ ساعت‌های استثنایی می‌سازد؛ ساعت‌هایی که کاشفان، فضانوردان و چهره‌های سبک در سراسر جهان بر مچ خود دارند.",
    origin: "بیل/بین، سوئیس",
  },
  tissot: {
    name: "تیسوت",
    tagline: "نوآوران به سنت",
    description:
      "تیسوت از سال ۱۸۵۳ پیشگام نوآوری در ساعت‌سازی بوده و دقت سوئیسی را در قیمتی مناسب‌تر ارائه می‌دهد.",
    origin: "لوکل، سوئیس",
  },
  casio: {
    name: "کاسیو",
    tagline: "خلاقیت و مشارکت",
    description:
      "از جی‌شاک نمادین تا ادیفایس شیک، کاسیو با فناوری پیشرفته مفهوم ساعت را بازتعریف می‌کند.",
    origin: "توکیو، ژاپن",
  },
  seiko: {
    name: "سیکو",
    tagline: "پیشرو در حرکت، لمس‌کننده قلب‌ها",
    description:
      "تعهد سیکو به نوآوری، اولین‌های جهانی در ساعت‌سازی را خلق کرده؛ از اسپرینگ درایو تا فناوری کینتیک.",
    origin: "توکیو، ژاپن",
  },
  citizen: {
    name: "سیتیزن",
    tagline: "بهتر، از همین حالا",
    description:
      "سیتیزن پیشگام فناوری اکو-درایو بود و ساعت‌های خورشیدی‌ای ساخت که هرگز نیاز به تعویض باتری ندارند.",
    origin: "توکیو، ژاپن",
  },
  orient: {
    name: "اورینت",
    tagline: "صنعتگری سنتی، چشم‌انداز مدرن",
    description:
      "اورینت استار بهترین نمونه ساعت‌سازی مکانیکی ژاپنی است؛ ترکیبی از سنت و زیبایی‌شناسی معاصر.",
    origin: "توکیو، ژاپن",
  },
  longines: {
    name: "لونژین",
    tagline: "ظرافت یک نگرش است",
    description:
      "لونژین با بیش از ۱۹۰ سال میراث، ظرافت سنت ساعت‌سازی سوئیس را در خود دارد.",
    origin: "سنت-ایمیه، سوئیس",
  },
  fossil: {
    name: "فسیل",
    tagline: "زنده‌باد کلاسیک",
    description:
      "فسیل طراحی الهام‌گرفته از سبک قدیمی را با عملکرد مدرن ترکیب می‌کند و سبکی در دسترس برای هر مچی خلق می‌کند.",
    origin: "ریچاردسون، تگزاس، آمریکا",
  },
  tagheuer: {
    name: "تگ هویر",
    tagline: "زیر فشار نشکن",
    description:
      "روح مسابقه‌ای و آوانگارد تگ هویر، کرونوگراف‌های جسورانه‌ای خلق می‌کند که مرزهای دقت را جابه‌جا می‌کنند.",
    origin: "لاشو-دو-فون، سوئیس",
  },
};

export const productTranslationsFa: Record<string, ProductTranslation> = {
  "rolex-submariner": {
    name: "ساب‌مارینر دیت",
    description:
      "ساعت غواصی کلاسیک؛ ساب‌مارینر دیت با بدنه ۴۱ میلی‌متری اویستراستیل و بزل سرامیکی مشکی.",
    features: [
      "بدنه ۴۱ میلی‌متری اویستراستیل",
      "موتور کالیبر ۳۲۳۵",
      "مقاوم در برابر آب تا ۳۰۰ متر",
      "بزل سرامیکی",
    ],
  },
  "omega-seamaster": {
    name: "سی‌مستر پلانت اوشن",
    description:
      "پلانت اوشن میراث غواصی را با لوکس معاصر ترکیب می‌کند؛ با بدنه‌ای از تیتانیوم و موتور کو-اکسیال.",
    features: [
      "بدنه ۴۳.۵ میلی‌متری تیتانیوم",
      "موتور کالیبر ۸۹۰۰",
      "مقاوم در برابر آب تا ۶۰۰ متر",
      "اسکیپمنت کو-اکسیال",
    ],
  },
  "tissot-prx": {
    name: "پی‌آرایکس پاورماتیک ۸۰",
    description:
      "پی‌آرایکس، مدل کلاسیک سال ۱۹۷۸ را با بند یکپارچه امضادار و بدنه بشکه‌ای صاف احیا می‌کند.",
    features: [
      "بدنه ۴۰ میلی‌متری استیل",
      "پاورماتیک ۸۰",
      "ذخیره انرژی ۸۰ ساعته",
      "کریستال یاقوت",
    ],
  },
  "casio-gshock": {
    name: "جی‌شاک ام‌آر-جی",
    description:
      "اوج مهندسی جی‌شاک؛ ام‌آر-جی از تیتانیوم و متریال‌های پیشرفته برای مقاومت نهایی بهره می‌برد.",
    features: [
      "بدنه تیتانیوم",
      "شارژ خورشیدی",
      "مولتی‌بند ۶",
      "مقاوم در برابر آب تا ۲۰۰ متر",
    ],
  },
  "seiko-presage": {
    name: "پرزاژ شارپ‌اج",
    description:
      "سری پرزاژ شارپ‌اج، صنعتگری ژاپنی را با صفحه‌ای بافت‌دار و الهام‌گرفته از الگوهای سنتی به نمایش می‌گذارد.",
    features: [
      "بدنه ۴۰.۵ میلی‌متری استیل",
      "موتور ۶R35",
      "ذخیره انرژی ۷۲ ساعته",
      "صفحه میناکاری",
    ],
  },
  "rolex-datejust": {
    name: "دیت‌جاست ۳۱",
    description:
      "دیت‌جاست ۳۱ با طلای اوروز و بزل الماس‌نشان، نماد ظرافت زنانه است.",
    features: [
      "بدنه ۳۱ میلی‌متری اوروز",
      "موتور کالیبر ۲۲۳۶",
      "مقاوم در برابر آب تا ۱۰۰ متر",
      "بزل الماس‌نشان",
    ],
  },
  "omega-constellation": {
    name: "کنستلیشن",
    description:
      "کنستلیشن با چنگک‌های نمادین و بزل صیقلی همراه با اعداد رومی، در بدنه‌ای ظریف ۲۸ میلی‌متری.",
    features: [
      "بدنه ۲۸ میلی‌متری استیل و طلا",
      "موتور کالیبر ۴۰۶۱",
      "مقاوم در برابر آب تا ۵۰ متر",
      "صفحه صدف",
    ],
  },
  "citizen-ecodrive": {
    name: "اکو-درایو سیلوئت",
    description:
      "اکو-درایو سیلوئت از هر منبع نوری برای تأمین انرژی بهره می‌برد؛ در طراحی مینیمال و شیک.",
    features: [
      "بدنه ۳۲ میلی‌متری استیل",
      "اکو-درایو",
      "هرگز نیاز به باتری ندارد",
      "کریستال یاقوت",
    ],
  },
  "longines-master": {
    name: "مستر کالکشن",
    description:
      "کرونوگراف مستر کالکشن، ساعت‌سازی کلاسیک سوئیس را با صفحه نقره‌ای فلینکه به نمایش می‌گذارد.",
    features: [
      "بدنه ۴۲ میلی‌متری استیل",
      "چرخ ستونی L688",
      "ذخیره انرژی ۶۶ ساعته",
      "کرونوگراف",
    ],
  },
  "tagheuer-carrera": {
    name: "کررا کرونوگراف",
    description:
      "متولد پیست مسابقه؛ کررا کرونوگراف دارای موتور داخلی هویر ۰۲ با ذخیره انرژی ۸۰ ساعته است.",
    features: [
      "بدنه ۴۴ میلی‌متری استیل",
      "موتور هویر ۰۲",
      "ذخیره انرژی ۸۰ ساعته",
      "بزل تاکی‌متر",
    ],
  },
  "orient-bambino": {
    name: "اورینت بامبینو",
    description:
      "بامبینو نماد ساعت‌های رسمی است؛ با کریستال گنبدی و صفحه‌ای الهام‌گرفته از سبک قدیمی، در قیمتی بی‌رقیب.",
    features: [
      "بدنه ۴۰.۵ میلی‌متری استیل",
      "موتور اتوماتیک F6724",
      "ذخیره انرژی ۴۰ ساعته",
      "کریستال گنبدی",
    ],
  },
  "fossil-gen6": {
    name: "جن ۶ ویینتیج",
    description:
      "جن ۶ ویینتیج زیبایی‌شناسی کلاسیک فسیل را با عملکرد هوشمند و روکش رزگلد ترکیب می‌کند.",
    features: ["بدنه ۴۰ میلی‌متری استیل", "Wear OS", "سنسور ضربان قلب", "GPS داخلی"],
  },
  "longines-dolcevita": {
    name: "دولچه‌ویتا",
    description:
      "دولچه‌ویتا سبک زندگی شیرین ایتالیایی را در بدنه‌ای مستطیلی از استیل با جزئیاتی ظریف به تصویر می‌کشد.",
    features: [
      "بدنه ۲۳×۳۷ میلی‌متری استیل",
      "کوارتز L595",
      "مقاوم در برابر آب تا ۳۰ متر",
      "اعداد رومی",
    ],
  },
  "omega-aquaterra": {
    name: "آکوا ترا ۳۸",
    description:
      "آکوا ترا میراث دریایی را با صفحه‌ای به الگوی چوب تیک و گواهی مستر کرونومتر ترکیب می‌کند.",
    features: [
      "بدنه ۳۸ میلی‌متری استیل",
      "موتور کالیبر ۸۸۰۰",
      "مقاوم در برابر آب تا ۱۵۰ متر",
      "مستر کرونومتر",
    ],
  },
  "rolex-ladydatejust": {
    name: "لیدی-دیت‌جاست",
    description:
      "لیدی-دیت‌جاست با طلای زرد و بند پرزیدنت، نماد نهایی ظرافت زنانه است.",
    features: [
      "بدنه ۲۸ میلی‌متری طلای زرد",
      "موتور کالیبر ۲۲۳۶",
      "مقاوم در برابر آب تا ۱۰۰ متر",
      "صفحه جوبیلی",
    ],
  },
  "tagheuer-monaco": {
    name: "موناکو",
    description:
      "موناکوی نمادین با بدنه مربعی، برای همیشه با استیو مک‌کوئین گره‌خورده و دارای موتور کالیبر هویر ۰۲.",
    features: [
      "بدنه ۳۹ میلی‌متری استیل",
      "موتور هویر ۰۲",
      "ذخیره انرژی ۸۰ ساعته",
      "بدنه مربعی",
    ],
  },
};

/**
 * برند را بر اساس locale، در صورت وجود ترجمه، لوکالایز می‌کند.
 * برای locale های غیر از "fa" یا در نبود ترجمه، همان برند اصلی بازگردانده می‌شود.
 */
export function getLocalizedBrand(brand: Brand, locale: string): Brand {
  if (locale !== "fa") return brand;
  const t = brandTranslationsFa[brand.id];
  if (!t) return brand;
  return {
    ...brand,
    name: t.name,
    tagline: t.tagline,
    description: t.description,
    origin: t.origin,
  };
}

/**
 * محصول را بر اساس locale، در صورت وجود ترجمه، لوکالایز می‌کند.
 */
export function getLocalizedProduct(product: Product, locale: string): Product {
  if (locale !== "fa") return product;
  const t = productTranslationsFa[product.id];
  if (!t) return product;
  return {
    ...product,
    name: t.name,
    description: t.description,
    features: t.features,
  };
}

export function getLocalizedBrands(locale: string): Brand[] {
  return brands.map((b) => getLocalizedBrand(b, locale));
}

export function getLocalizedProducts(locale: string): Product[] {
  return products.map((p) => getLocalizedProduct(p, locale));
}