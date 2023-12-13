import {Link} from '../../types';
import {FaCartShopping} from 'react-icons/fa6';
import {IoHome} from 'react-icons/io5';
export default [
  {
    icon: <IoHome />,
    path: '/Profile',
    title: 'Profile',
  },
  {
    icon: <FaCartShopping />,
    path: '/Profile/Orders',
    title: 'Orders',
  },
] as Link[];
