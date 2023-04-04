export interface IProduct {
  id: number;
  img: string;
  name: string;
  price: number;
  compare_at_price: number;
  description: string;
  estimate_ship_date: string;
  tags: [
    {
      title: string;
      color: string;
      background: string;
    }
  ];
  thumbnail_images: [
    {
      alt: string;
      img: string;
    }
  ];
  images: [
    {
      alt: string;
      img: string;
    }
  ];
}
