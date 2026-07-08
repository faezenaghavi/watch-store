export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  gender: "men" | "women" | "unisex";
  image: string;
  description: string;
  features: string[];
  inStock: boolean;
  slug?: string;
  discount?: boolean;
  isNew?: boolean;
  isLimited?: boolean;
}
