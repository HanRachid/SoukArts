import {useState, useEffect} from 'react';
import {approveSeller, denySeller, getPendingSeller} from '../../api/seller';
import {CheckCircleIcon, XCircleIcon} from '@heroicons/react/24/outline';
import ModalComponent from '../alert/ModalComponent';
import {Seller} from '../../../types';
import {router} from '../../App';
import {useSelector} from 'react-redux';
const AllUsers: React.FC = () => {
  const [sellers, setSellers] = useState<Seller[]>([]);
  const [hoveredSeller, setHoveredSeller] = useState<Seller | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

  const fetchSellers = async () => {
    try {
      const response = await getPendingSeller();
      setSellers(response);
      console.log(response);
    } catch (error) {
      console.error('Error fetching sellers: ', error);
    }
  };
  const user = useSelector((state: any) =>
    state.auth.user ? state.auth.user.user : null
  );

  if (!user || user!.role! !== 'Admin') {
    router.navigate('/login');
  }

  useEffect(() => {
    fetchSellers();
  }, []);

  const handleMouseEnter = (e: React.MouseEvent, sellerName: Seller) => {
    const viewportWidth = window.innerWidth;
    const cursorX = e.clientX;
    const spaceLeft = cursorX;
    const spaceRight = viewportWidth - cursorX;
    const isSpaceOnRight = spaceRight >= spaceLeft;

    setIsHovering(true);
    setMousePosition({
      x: isSpaceOnRight ? cursorX : cursorX - 500, // Adjust width as needed
      y: e.clientY,
    });
    setHoveredSeller(sellerName);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setHoveredSeller(null);
  };

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
                  Card Holder
                </th>
                <th className='px-6 py-3 text-center font-secondary text-gray-500 uppercase tracking-wider'>
                  Language
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
              {sellers.map((seller, index) => (
                <tr
                  onMouseEnter={(e) => handleMouseEnter(e, seller)}
                  onMouseLeave={handleMouseLeave}
                  key={index}
                >
                  <td className='whitespace-nowrap px-28 py-2 font-medium text-gray-900 text-center'>
                    {seller.shop_name}
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
                    <span className='inline-flex overflow-hidden rounded-md border bg-white shadow-sm'>
                      {seller.status !== 'approved' && (
                        <button
                          className='inline-block border-e p-3 text-gray-700 hover:bg-green-300 hover:text-white focus:relative'
                          title='approve'
                          onClick={() => {
                            approveSeller(seller._id).then(() => {
                              fetchSellers();
                            });
                          }}
                        >
                          <CheckCircleIcon className='h-6 w-6' />
                        </button>
                      )}

                      <button
                        className='inline-block border-e p-3 text-gray-700 hover:bg-red-500 hover:text-white focus:relative'
                        title='deny'
                        onClick={() => {
                          denySeller(seller._id).then(() => {
                            fetchSellers();
                          });
                        }}
                      >
                        <XCircleIcon className='h-6 w-6' />
                      </button>
                    </span>
                  </td>

                  {isHovering && (
                    <ModalComponent
                      content={hoveredSeller}
                      position={mousePosition}
                    />
                  )}
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

export default AllUsers;
