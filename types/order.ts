import { CartItem } from "./cart";

export type OrderStatus = "processing" | "shipped" | "delivered";

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  date: string; // ISO timestamp
  status: OrderStatus;
}