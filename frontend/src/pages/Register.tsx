import logo from '../assets/login/logo1.png';
import login_side_image from '../assets/login/login_image_side.png';
import logo_gogole from '../assets/login/google-svgrepo-com.svg';
import logo_apple from '../assets/login/apple-color-svgrepo-com.svg';
import {Link} from 'react-router-dom';
export default function Register() {
  return (
    <section className='w-screen h-screen flex items-center justify-between overflow-hidden'>
      <div className='w-1/2 h-full px-32'>
        <div className='h-44 w-full flex-col flex items-center justify-center'>
          <Link to='/'>
            <img src={logo} alt='logo' />
          </Link>
          <h2 className='text-3xl mt-2 font-primary'>Get started now!</h2>
        </div>
        <div className='space-y-6 w-full'>
          <div className='w-full flex items-start justify-center flex-col'>
            <label className='pb-1.5 font-secondary'>Username</label>
            <input
              className='w-full py-2 px-3 focus:outline-colorBlack border-2 border-colorBeige/80 rounded-bl-xl rounded-tr-xl bg-gray-50'
              type='text'
              placeholder='Enter your username'
            />
          </div>

          <div className='w-full flex items-start justify-center flex-col'>
            <label className='pb-1.5 font-secondary'>Email adresse</label>
            <input
              className='w-full py-2 px-3 focus:outline-colorBlack border-2 border-colorBeige/80 rounded-bl-xl rounded-tr-xl bg-gray-50'
              type='email'
              placeholder='Enter your email'
            />
          </div>

          <div className='w-full flex items-start justify-center flex-col'>
            <div className='flex justify-between items-center w-full'>
              <label className='pb-1.5 font-secondary'>Password</label>
            </div>
            <input
              className='w-full py-2 px-3 focus:outline-colorBlack border-2 border-colorBeige/80 rounded-bl-xl rounded-tr-xl bg-gray-50'
              type='password'
              placeholder='Enter your password'
            />
          </div>
          <div className=''>
            <input type='checkbox' />
            <label className='pl-4 font-secondary'>
              I agree to the{' '}
              <Link className='underline' to='/'>
                terms & policy
              </Link>
            </label>
          </div>

          <div className='w-full flex items-center justify-center'>
            <button className='w-full bg-colorGold py-2.5 rounded-bl-xl rounded-tr-xl text-gray-50 font-semibold font-secondary hover:scale-[1.02] transition-all duration-30'>
              Sign In
            </button>
          </div>

          <div className='flex items-center justify-center'>
            <div className='w-full h-0.5 bg-gray-300'></div>

            <p className='px-4  '>Or</p>
            <div className='w-full h-0.5 bg-gray-300'></div>
          </div>
        </div>
        <div className='w-full pt-10'>
          <div className='flex items-center gap-10 justify-center'>
            <button className='w-full py-2  border-black border-2 rounded-bl-xl rounded-tr-xl font-medium text-lg bg-white/50 hover:scale-[1.02] transition-all duration-100'>
              <div className='flex items-center justify-evenly'>
                <img className='w-7' src={logo_gogole} alt='logo_google' />
                <p className='font-secondary'>Sign in with Google</p>
              </div>
            </button>
            <button className='w-full py-2  border-black border-2 rounded-bl-xl rounded-tr-xl font-medium text-lg bg-white/50 hover:scale-[1.02] transition-all duration-100'>
              <div className='flex items-center justify-evenly'>
                <img className='w-7' src={logo_apple} alt='logo_google' />
                <p className='font-secondary'>Sign in with Apple</p>
              </div>
            </button>
          </div>
          <p className='text-center text-lg mt-6'>
            Don’t have an account?{' '}
            <Link
              to='/login'
              className='text-[#0C2A92] hover:text-[#3553bd] scale-[1.02] transition-all duration-100 hover:bg-opacity-90'
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
      <div className='w-1/2 h-full rounded-l-3xl overflow-hidden'>
        <img
          className='w-full h-full'
          src={login_side_image}
          alt='side_image'
        />
      </div>
    </section>
  );
}
