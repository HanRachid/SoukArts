import {RouteObj} from '../types';
import DashBoard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Privacy from './pages/Privacy';
import Register from './pages/Register';
import Termsofuse from './pages/TermsOfUse';

export default [
  {path: '/', element: <Home />, hasLayout: true},
  {path: '/login', element: <Login />, hasLayout: false},
  {path: '/register', element: <Register />, hasLayout: false},
  {path: '/dashboard', element: <DashBoard />, hasLayout: true},
  {path: '/termsofuse', element: <Termsofuse />, hasLayout: true},
  {path: '/privacy', element: <Privacy />, hasLayout: true},
] as RouteObj[];
