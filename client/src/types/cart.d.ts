import { IProduct } from "./product";

export interface ICartItem {
  account: string;
  created_at: string;
  id: number;
  item: IProduct;
  updated_at: string;
  quantity: number;
}
