import { FoodItem, Review, Offer } from '../types';

export const FOOD_ITEMS: FoodItem[] = [
  {
    id: '1',
    name: 'Authentic Chicken Momo',
    price: 250,
    description: 'Freshly steamed handmade dumplings filled with spiced chicken mince.',
    category: 'Nepali',
    image: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
  },
  {
    id: '2',
    name: 'Special Nepali Thali',
    price: 450,
    description: 'A complete meal with rice, dal, seasonal curry, saag, pickles, and curd.',
    category: 'Nepali',
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
  },
  {
    id: '3',
    name: 'Veg Chowmein',
    price: 180,
    description: 'Stir-fried noodles with fresh vegetables and aromatic Nepali spices.',
    category: 'Chinese',
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&q=80&w=800',
    rating: 4.5,
  },
  {
    id: '4',
    name: 'Daddy\'s Burger',
    price: 320,
    description: 'Juicy chicken patty, melted cheese, and fresh greens in a toasted bun.',
    category: 'Fast Food',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800',
    rating: 4.7,
  },
  {
    id: '5',
    name: 'Loaded Pepperoni Pizza',
    price: 650,
    description: 'Classic cheese and pepperoni pizza with a signature thin crust.',
    category: 'Fast Food',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800',
    rating: 4.6,
  },
  {
    id: '6',
    name: 'Chicken Sekuwa',
    price: 350,
    description: 'Traditional Nepali charcoal-grilled skewered chicken marinated in special herbs.',
    category: 'Nepali',
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&q=80&w=800',
    rating: 4.8,
  },
  {
    id: '7',
    name: 'Cold Coffee with Ice Cream',
    price: 220,
    description: 'Rich, creamy coffee blended with vanilla ice cream and chocolate drizzle.',
    category: 'Beverages',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&q=80&w=800',
    rating: 4.4,
  },
  {
    id: '8',
    name: 'Egg Fried Rice',
    price: 240,
    description: 'Wok-tossed rice with eggs, seasonal veggies, and light soy sauce.',
    category: 'Chinese',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=800',
    rating: 4.3,
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Anish Thapa',
    rating: 5,
    comment: 'Best momo in Butwal. Great environment and fast service. Highly recommended for families!',
  },
  {
    id: '2',
    name: 'Sita Sharma',
    rating: 5,
    comment: 'Very tasty food and clean restaurant. Loved the family atmosphere. The Nepali Thali is a must-try.',
  },
  {
    id: '3',
    name: 'Prabhat Giri',
    rating: 4,
    comment: 'Affordable prices and great taste. The delivery service in Butwal is also quite fast.',
  }
];

export const OFFERS: Offer[] = [
  {
    id: '1',
    title: 'Family Combo Deal',
    description: 'Get a full course family meal at a discounted price.',
    discount: '20% OFF',
    image: 'https://images.unsplash.com/photo-1516714435131-44eb12443916?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '2',
    title: 'Pizza Party',
    description: 'Buy 2 Large Pizzas and get a 1L Coke absolutely free!',
    discount: 'FREE COKE',
    image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&q=80&w=800',
  }
];

export const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1428515613728-6b4607e44363?auto=format&fit=crop&q=80&w=800',
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800',
];
