export interface FoodItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'Nepali' | 'Indian' | 'Chinese' | 'Fast Food' | 'Beverages' | 'Desserts';
  image: string;
  rating: number;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  image: string;
  discount: string;
}
