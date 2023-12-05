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
import Payment from './pages/Payment';
import DeliveryPayment from './pages/DeliveryPayment';
import ReviewPayment from './pages/ReviewPayment';
import PaymentLayout from './layouts/PaymentLayout';
import Favorite from './pages/Favorite';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './views/Dashboard';
import Products from './views/Products';
import AddNewProduct from './components/products/AddNewProduct';
import SellerLinks from './DashboardLinks/SellerLinks';
import Orders from './views/Orders';
import OrdersDetails from './components/orders/OrdersDetails';
import Settings from './views/Settings';
import Cart from './pages/Cart';

import StoreSeller from './pages/StoreSeller';
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
    path: '/deliverypayment',
    element: <PaymentLayout Component={DeliveryPayment} activeStep={0} />,
  },
  {
    path: '/payment',
    element: <PaymentLayout Component={Payment} activeStep={1} />,
  },
  {
    path: '/reviewpayment',
    element: <PaymentLayout Component={ReviewPayment} activeStep={2} />,
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
    path: '/Cart',
    element: <GlobalLayout Component={Cart} hasLayout={true} />,
  },
  {
    path: '/dashboard',
    element: (
      <DashboardLayout
        pageTitle={'Dashboard'}
        Component={Dashboard}
        links={SellerLinks}
      />
    ),
  },
  {
    path: '/Dashboard/Products',
    element: (
      <DashboardLayout
        pageTitle={'Dashboard/Products'}
        Component={Products}
        links={SellerLinks}
      />
    ),
  },
  {
    path: '/Dashboard/Orders',
    element: (
      <DashboardLayout
        pageTitle={'/Dashboard/Orders'}
        Component={Products}
        links={SellerLinks}
      />
    ),
  },
  {
    path: '/Dashboard/Stats',
    element: (
      <DashboardLayout
        pageTitle={'/Dashboard/Stats'}
        Component={Products}
        links={SellerLinks}
      />
    ),
  },
  {
    path: '/Dashboard/Finance',
    element: (
      <DashboardLayout
        pageTitle={'/Dashboard/Finance'}
        Component={Products}
        links={SellerLinks}
      />
    ),
  },
  {
    path: '/Dashboard/Settings',
    element: (
      <DashboardLayout
        pageTitle={'/Dashboard/Settings'}
        Component={Products}
        links={SellerLinks}
      />
    ),
  },
  {
    path: '/Dashboard/Marketing',
    element: (
      <DashboardLayout
        pageTitle={'/Dashboard/Marketing'}
        Component={Products}
        links={SellerLinks}
      />
    ),
  },
  {
    path: 'Dashboard/products/addNewProduct',
    element: (
      <DashboardLayout
        pageTitle={'Dashboard/Products'}
        Component={AddNewProduct}
        links={SellerLinks}
      />
    ),
  },
  {
    path: 'Dashboard/orders/ordersDetails',
    element: (
      <DashboardLayout
        pageTitle={'Dashboard/Orders'}
        Component={OrdersDetails}
        links={SellerLinks}
      />
    ),
  },
  {
    path: '/Store',
    element: <GlobalLayout Component={StoreSeller} hasLayout={true} />,
  },
] as RouteObj[];
