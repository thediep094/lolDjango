export interface IProduct {
  id: number;
  _id: number;
  img: string;
  name: string;
  price: number;
  compare_at_price: number;
  description: string;
  estimate_ship_date: string;
  itemType: string;
  tags: [
    {
      title: string;
      color: string;
      background: string;
    }
  ];
  thumbnail_images: IImage[];
  images: IImage[];
  quantity?: number;
  item: any;
}

export interface IImage {
  alt: string;
  img: string;
}

export interface IComment {
  rate: number;
  content: string;
  _id: string;
  userId: string;
  productId: string;
  rate: number;
  cmt: string;
  account: string;
  createdAt: string;
  updatedAt: string;
  fullname: string[];
  ingame: string[];
}
