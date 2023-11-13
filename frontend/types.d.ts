import {ReactElement} from 'react';

export type RouteObj = {
  path: string;
  element: ReactElement;
  hasLayout: boolean;
};

export type User = {
  username: string;
  email: string;
  password: string;
};
