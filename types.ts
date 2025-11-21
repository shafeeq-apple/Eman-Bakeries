
export enum ProductCategory {
  BREAD = 'Daily Breads',
  RUSK = 'Rusks & Crackers',
  SWEETS = 'Sweet Bakery',
  HEALTH = 'Healthy Options',
  HORECA = 'Hospitality Collection'
}

export interface Product {
  id: string;
  name: string;
  description: string;
  category: ProductCategory;
  imageUrl: string;
  calories?: number;
}

export interface Distributor {
  id: string;
  name: string;
  address: string;
  city: string;
  region: string;
  phone: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  type: 'Retail' | 'Wholesale' | 'Factory Outlet';
}

export interface NavItem {
  label: string;
  href: string;
}

export interface StatData {
  name: string;
  value: number;
}
