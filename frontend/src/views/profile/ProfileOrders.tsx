import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {getOrders} from '../../api/orders';
import {CheckCircleIcon, XCircleIcon} from '@heroicons/react/24/outline';

const ProfileOrders: React.FC = () => {
  const user = useSelector((state: any) => state.auth.user.user);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getOrders(user._id).then((res) => {
      setOrders(res);
    });
  });

  return (
    <div className='flex flex-col h-screen'>
      <div className='flex-grow overflow-auto'>
        <div className='min-w-full border border-gray-200 rounded-lg'>
          <table className='min-w-full divide-y divide-gray-200 bg-white text-sm'>
            <thead className='bg-gray-50'>
              <tr>
                <th className='text-center font-secondary text-gray-500 uppercase tracking-wider'>
                  Shop Name
                </th>
                <th className='px-6 py-3 text-center font-secondary text-gray-500 uppercase tracking-wider'>
                  Language
                </th>
                <th className='px-6 py-3 text-center font-secondary text-gray-500 uppercase tracking-wider'>
                  Business Email
                </th>
                <th className='px-6 py-3 text-center font-secondary text-gray-500 uppercase tracking-wider'>
                  Status
                </th>
                <th className='px-6 py-3 text-center font-secondary text-gray-500 uppercase tracking-wider'>
                  Action
                </th>
              </tr>
            </thead>

            <tbody className='divide-y divide-gray-200'>
              {orders.map((seller, index) => (
                <tr key={index}>
                  <td className='whitespace-nowrap px-28 py-2 font-medium text-gray-900 text-center'>
                    {seller.order[0].seller_id.shop_name}
                  </td>
                  <td className='sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14 py-2 text-gray-700 overflow-hidden text-ellipsis align-middle max-w-[90%] text-center'>
                    {seller.language}
                  </td>
                  <td className='sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14 py-2 text-gray-700 overflow-hidden text-ellipsis align-middle max-w-[90%] text-center'>
                    {seller.business_email}
                  </td>
                  <td className='sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14 py-2 text-gray-700 overflow-hidden text-ellipsis align-middle max-w-[90%] text-center'>
                    {seller.status}
                  </td>
                  <td className='sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14 py-2 text-gray-700 overflow-hidden text-ellipsis align-middle max-w-[90%] text-center'>
                    <span className='inline-flex overflow-hidden rounded-md border bg-white shadow-sm'></span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className='rounded-b-lg border-t border-gray-200 px-4 py-2'>
          <ol className='flex justify-end gap-1 text-xs font-medium'>
            <li>
              <a
                href='#'
                className='inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180'
              >
                <span className='sr-only'>Prev Page</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-3 w-3'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href='#'
                className='block h-8 w-8 rounded border border-gray-100 bg-colorGold text-center leading-8 text-white'
              >
                1
              </a>
            </li>

            <li>
              <a
                href='#'
                className='block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900'
              >
                2
              </a>
            </li>

            <li>
              <a
                href='#'
                className='inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180'
              >
                <span className='sr-only'>Next Page</span>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-3 w-3'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ProfileOrders;
