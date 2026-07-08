export interface Brand {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  founded: number;
  origin: string;
  logo: string;
  slug?: string;
  productCount?: number;
}
