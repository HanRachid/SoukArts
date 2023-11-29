import {ReactElement} from 'react';

export type RouteObj = {
  path: string;
  element: ReactElement;
};

export type User = {
  username: string;
  email?: string;
  password: string;
};

type Product = {
  user_id: string | undefined;
  title: string;
  description: string;
  category: 'Vintage' | 'Handmade';
  price: number;
  quantity: number;
  images: FormData[];
};

type ProductUrl = {
  user_id: string | undefined;
  title: string;
  description: string;
  category: 'Vintage' | 'Handmade';
  price: number;
  quantity: number;
  images: string[];
};
type DashboardLink = {icon: ReactNode; path: string; title: string};
