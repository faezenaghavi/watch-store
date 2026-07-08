// types/user.ts
import { CartItem } from "./cart";

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  phone?: string;
  address?: Address;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
}

export interface Order {
  id: string;
  date: string;
  status: "processing" | "shipped" | "delivered" | "cancelled";
  items: CartItem[];
  total: number;
}

export interface Discount {
  id: string;
  code: string;
  value: number;
  type: "percentage" | "fixed";
  expiresAt: string;
  isActive: boolean;
}
