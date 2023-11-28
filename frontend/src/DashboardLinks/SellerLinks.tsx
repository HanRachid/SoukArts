import {FaBagShopping, FaCartShopping, FaShop} from 'react-icons/fa6';
import {
  IoCash,
  IoHelpCircleOutline,
  IoHome,
  IoSettingsSharp,
} from 'react-icons/io5';
import {ImStatsDots} from 'react-icons/im';
import {DashboardLink} from '../../types';
export default [
  {
    icon: <IoHome />,
    path: '/Dashboard',
    title: 'Dashboard',
  },
  {
    icon: <FaBagShopping />,
    path: '/Dashboard/Products',
    title: 'Products',
  },
  {
    icon: <FaCartShopping />,
    path: '/Dashboard/Orders',
    title: 'Orders',
  },
  {
    icon: <ImStatsDots />,
    path: '/Dashboard/Stats',
    title: 'Stats',
  },
  {
    icon: <IoCash />,
    path: '/Dashboard/Finance',
    title: 'Finance',
  },
  {
    icon: <IoSettingsSharp />,
    path: '/Dashboard/Settings',
    title: 'Settings',
  },
  {
    icon: <FaShop />,
    path: '/Dashboard/Marketing',
    title: 'Marketing',
  },
  {
    icon: <IoHelpCircleOutline />,
    path: '/Dashboard/Help',
    title: 'Help',
  },
] as DashboardLink[];
