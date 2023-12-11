import {Link} from '../../types';
import {IoHome} from 'react-icons/io5';
import {FaUsers} from 'react-icons/fa';
export default [
  {
    icon: <IoHome />,
    path: '/Admin',
    title: 'Pending Sellers',
  },
  {
    icon: <FaUsers />,
    path: '/Admin/Users',
    title: 'All users',
  },
] as Link[];
