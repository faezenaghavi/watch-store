import { Product } from './product'; // این خط اضافه شد

export interface CartItem {
  product: Product;
  quantity: number;
}