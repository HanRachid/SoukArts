import {RouteObj} from '../types';
import DashBoard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Privacy from './pages/Privacy';
import Register from './pages/Register';
import Termsofuse from './pages/TermsOfUse';
import GlobalLayout from './layouts/GlobalLayout';
// import RugProducts from "./pages/RugProducts";
import ProductsList from './pages/CategoryProduct';
import ProductDetail from './pages/ProductDetail';
import Logout from './pages/Logout';
import SearchResult from './pages/SearchResults';
import ProductsList from './pages/ProductsList';
import Logout from './pages/Logout';
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
    path: '/categories/:category',
    element: <GlobalLayout Component={ProductsList} hasLayout={true} />,
  },
  {
    path: '/products/:product',
    element: <GlobalLayout Component={ProductDetail} hasLayout={true} />,
  },
  {
    path: '/logout',
    element: <GlobalLayout Component={Logout} hasLayout={true} />,
  },
  {
    path: '/search/:category/:terms',
    element: <GlobalLayout Component={SearchResult} hasLayout={true} />,
  },
] as RouteObj[];
