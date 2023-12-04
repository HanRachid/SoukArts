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
  category: string;
  price: number;
  quantity: number;
  images: FormData[];
};

type DashboardLink = {icon: ReactNode; path: string; title: string};
