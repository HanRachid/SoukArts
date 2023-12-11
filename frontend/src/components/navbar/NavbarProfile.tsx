import {RiMessage2Line} from 'react-icons/ri';
import {MdOutlineLocalOffer} from 'react-icons/md';
import avatarNavbar from '../../assets/navbar/avatarNavbar.svg';
import {MdOutlineLogout} from 'react-icons/md';
import {RiSettings3Line} from 'react-icons/ri';
import {LuCreditCard} from 'react-icons/lu';
import {GrNotes} from 'react-icons/gr';
import {logoutUser} from '../../api/auth';
import {useDispatch, useSelector} from 'react-redux';
import {router} from '../../App';
import {setLogoutState} from '../../features/auth/authSlice';
import {Link} from 'react-router-dom';

const NavbarSellerProfile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.auth.user);
  return (
    <div className='absolute top-[135px] right-56 font-secondary w-64 h-auto bg-colorBeigeLight border-t-4 border-b-4 border-colorGold px-4 py-4 z-[999]'>
      {/* RACHID si besoin change ci dessus le top et le right pour le positionnementdu dropdown */}
      <div className='flex items-center gap-2 border-b border-colorGold mb-4 pb-4'>
        <div>
          <img
            src={
              user.user
                ? user.user.profile_image.url
                : 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80'
            }
            className='inline-block h-10 w-10 rounded-full border-2'
            alt='imgProfile'
          />
        </div>
        <div className='flex gap-1'>
          <p>{user?.user.first_name}</p>
          <p>{user?.user.last_name}</p>
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-2 '>
          <GrNotes />
          <p>Purchases and reviews</p>
        </div>
        <div className='flex items-center gap-2 border-b border-colorGold mb-4 pb-4'>
          <RiMessage2Line />
          <p>Messages</p>
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-2 '>
          <LuCreditCard />
          <p>Gift card balance:0.00</p>
        </div>

        <div className='flex items-center gap-2 border-b border-colorGold mb-4 pb-4'>
          <MdOutlineLocalOffer />
          <p>Special offers</p>
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <div className='flex items-center gap-2'>
          <RiSettings3Line />
          <Link to='/profile'>
            <div className='group flex w-full items-center px-2 py-2 font-secondary hover:text-colorGold hover:scale-[1.02] transition-all duration-300'>
              <span className='z-10'>
                Account setting
                <span className='absolute bottom-0 left-0 w-full h-0.5 bg-colorGold transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300'></span>
              </span>
            </div>
          </Link>
        </div>

        <div className='flex items-center gap-2 '>
          <MdOutlineLogout />
          <button
            onClick={() =>
              logoutUser().then(() => {
                dispatch(setLogoutState());
                router.navigate('/');
              })
            }
          >
            <div className='group flex w-full items-center px-2 py-2 font-secondary hover:text-colorGold hover:scale-[1.02] transition-all duration-300'>
              <span className='z-10'>
                Logout
                <span className='absolute bottom-0 left-0 w-full h-0.5 bg-colorGold transform scale-x-0 origin-left transition-transform group-hover:scale-x-100 duration-300'></span>
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarSellerProfile;
