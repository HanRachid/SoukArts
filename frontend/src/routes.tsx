import {RouteObj} from '../types';
import Home from './pages/Home';
import Login from './pages/Login';
import Privacy from './pages/Privacy';
import Register from './pages/Register';
import Termsofuse from './pages/TermsOfUse';
import GlobalLayout from './layouts/GlobalLayout';
import ProductDetail from './pages/ProductDetail';
import SearchResult from './pages/SearchResults';
import ProductsList from './pages/ProductsList';
import Logout from './pages/Logout';
import Favorite from './pages/Favorite';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './views/Dashboard';
import Products from './views/Products';
import AddNewProduct from './components/products/AddNewProduct';

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
  {
    path: '/favorite',
    element: <GlobalLayout Component={Favorite} hasLayout={true} />,
  },
  {
    path: '/dashboard',
    element: <DashboardLayout pageTitle={'Dashboard'} Component={Dashboard} />,
  },
  {
    path: '/Dashboard/Products',
    element: (
      <DashboardLayout pageTitle={'Dashboard/Products'} Component={Products} />
    ),
  },
  {
    path: '/Dashboard/Orders',
    element: (
      <DashboardLayout pageTitle={'/Dashboard/Orders'} Component={Products} />
    ),
  },
  {
    path: '/Dashboard/Stats',
    element: (
      <DashboardLayout pageTitle={'/Dashboard/Stats'} Component={Products} />
    ),
  },
  {
    path: '/Dashboard/Finance',
    element: (
      <DashboardLayout pageTitle={'/Dashboard/Finance'} Component={Products} />
    ),
  },
  {
    path: '/Dashboard/Settings',
    element: (
      <DashboardLayout pageTitle={'/Dashboard/Settings'} Component={Products} />
    ),
  },
  {
    path: '/Dashboard/Marketing',
    element: (
      <DashboardLayout
        pageTitle={'/Dashboard/Marketing'}
        Component={Products}
      />
    ),
  },
  {
    path: 'Dashboard/products/addNewProduct',
    element: (
      <DashboardLayout
        pageTitle={'Dashboard/Products'}
        Component={AddNewProduct}
      />
    ),
  },
] as RouteObj[];
