import {RouteObj} from '../types';
import DashBoard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Privacy from './pages/Privacy';
import Register from './pages/Register';
import Termsofuse from './pages/TermsOfUse';
import GlobalLayout from './layouts/GlobalLayout';
import RugProducts from './pages/RugProducts';
import Cart from './pages/Cart';

export default [
  {
    path: '/',
    element: <GlobalLayout Component={Home} hasLayout={true} />,
  },
  {
    path: '/login',
    element: <GlobalLayout Component={Login} hasLayout={false} />,
  },
  {
    path: '/register',
    element: <GlobalLayout Component={Register} hasLayout={false} />,
  },
  {
    path: '/dashboard',
    element: <GlobalLayout Component={DashBoard} hasLayout={false} />,
  },
  {
    path: '/termsofuse',
    element: <GlobalLayout Component={Termsofuse} hasLayout={false} />,
  },
  {
    path: '/privacy',
    element: <GlobalLayout Component={Privacy} hasLayout={false} />,
  },
  {
    path: '/cart',
    element: <GlobalLayout Component={Cart} hasLayout={true} />,
  },
  {
    path: '/category/rugs',
    element: <GlobalLayout Component={RugProducts} hasLayout={true} />,
  },
] as RouteObj[];
