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
import Logout from './pages/Logout';
import Payment from './pages/Payment';
import DeliveryPayment from './pages/DeliveryPayment';
import ReviewPayment from './pages/ReviewPayment';
import PaymentLayout from './layouts/PaymentLayout';

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
    element: <GlobalLayout Component={DashBoard} hasLayout={true} />,
  },
  {
    path: '/termsofuse',
    element: <GlobalLayout Component={Termsofuse} hasLayout={true} />,
  },
  {
    path: '/privacy',
    element: <GlobalLayout Component={Privacy} hasLayout={true} />,
  },
  {
    path: '/cart',
    element: <GlobalLayout Component={Cart} hasLayout={true} />,
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
    element: <PaymentLayout Component={ReviewPayment} activeStep={2}  />,
  },
  {
    path: '/category/rugs',
    element: <GlobalLayout Component={RugProducts} hasLayout={true} />,
  },
  {
    path: '/logout',
    element: <GlobalLayout Component={Logout} hasLayout={true} />,
  },
] as RouteObj[];
