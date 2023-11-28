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
  title: string;
  description: string;
  category: 'Vintage' | 'Handmade';
  price: number;
  quantity: number;
  photos: Photo[];
};
