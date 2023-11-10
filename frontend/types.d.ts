import {ReactElement} from 'react';

export type RouteObj = {
  path: string;
  element: ReactElement;
  hasLayout: boolean;
};
