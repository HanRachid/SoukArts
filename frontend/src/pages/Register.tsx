import logo from '../assets/login/logo1.png';
import login_side_image from '../assets/login/login_image_side.png';
import logo_google from '../assets/login/google-svgrepo-com.svg';
import logo_apple from '../assets/login/apple-color-svgrepo-com.svg';
import {Link} from 'react-router-dom';
import {loginUser, registerUser} from '../api/auth';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import {useState} from 'react';
import {User} from '../../types';
import {useDispatch} from 'react-redux';

import {RegisterSchema} from './validation/RegisterValidation';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import {router} from '../App';

export default function Register() {
  const dispatch = useDispatch();
  const onSubmit = (
    values: User,
    {setSubmitting}: {setSubmitting: (isSubmitting: boolean) => void}
  ) => {
    registerUser(values)
      .then((response) => {
        console.log(response);
      })

      .finally(() => {
        setSubmitting(false);
      });
  };

  {
    /*terms checked*/
  }
  const [termsChecked, setTermsChecked] = useState(false);

  {
    /*Show/Hide password*/
  }
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className='w-screen flex items-center justify-between overflow-hidden'>
      <div className='w-1/2 h-full px-32'>
        <div className='h-44 w-full flex-col flex items-center justify-center'>
          <Link to='/'>
            <img src={logo} alt='logo' />
          </Link>
          <h2 className='text-3xl mt-2 font-primary'>Get started now!</h2>
        </div>
        <Formik
          initialValues={{username: '', email: '', password: ''}}
          validationSchema={RegisterSchema}
          onSubmit={onSubmit}
        >
          {({isSubmitting, errors, touched}) => (
            <Form className='space-y-6 w-full'>
              <div className='w-full flex items-start justify-center flex-col'>
                <label className='pb-1.5 font-secondary'>Username</label>
                <Field
                  className={`w-full py-2 px-3 focus:outline-colorBlack border-2 rounded-bl-xl rounded-tr-xl bg-gray-50 ${
                    errors.username && touched.username ? 'border-red-500' : ''
                  }`}
                  type='text'
                  placeholder='Enter your username'
                  name='username'
                />
                <ErrorMessage
                  name='username'
                  component='div'
                  className='text-red-500'
                />
              </div>

              <div className='w-full flex items-start justify-center flex-col'>
                <label className='pb-1.5 font-secondary'>Email address</label>
                <Field
                  className={`w-full py-2 px-3 focus:outline-colorBlack border-2 rounded-bl-xl rounded-tr-xl bg-gray-50 ${
                    errors.email && touched.email ? 'border-red-500' : ''
                  }`}
                  type='email'
                  placeholder='Enter your email'
                  name='email'
                />
                <ErrorMessage
                  name='email'
                  component='div'
                  className='text-red-500'
                />
              </div>

              <div className='w-full flex items-start justify-center flex-col'>
                <div className='relative flex justify-between items-center w-full'>
                  <label className='pb-1.5 font-secondary'>Password</label>
                  <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                    className='cursor-pointer absolute right-5 top-11'
                    onClick={togglePasswordVisibility}
                  />
                </div>
                <Field
                  className={`w-full py-2 px-3 focus:outline-colorBlack border-2 rounded-bl-xl rounded-tr-xl bg-gray-50 ${
                    errors.password && touched.password ? 'border-red-500' : ''
                  }`}
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Enter your password'
                  name='password'
                />
                <ErrorMessage
                  name='password'
                  component='div'
                  className='text-red-500'
                />
              </div>
              <div className=''>
                <input
                  type='checkbox'
                  name='checkbox'
                  checked={termsChecked}
                  onChange={() => setTermsChecked(!termsChecked)}
                />
                <label className='ml-2 text-sm font-medium'>
                  I agree to the{' '}
                  <span>
                    <Link className='underline' to='/'>
                      terms & policy
                    </Link>
                  </span>
                </label>
              </div>
              {!termsChecked && (
                <div className='text-red-500'>
                  Please agree to the terms and policy.
                </div>
              )}

              <div className='w-full flex items-center justify-center'>
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full bg-colorGold py-2.5 rounded-bl-xl rounded-tr-xl text-gray-50 font-semibold font-secondary hover:scale-[1.02] transition-all duration-30'
                >
                  Sign In
                </button>
              </div>

              <div className='flex items-center justify-center'>
                <div className='w-full h-0.5 bg-gray-300'></div>

                <p className='px-4  '>Or</p>
                <div className='w-full h-0.5 bg-gray-300'></div>
              </div>
            </Form>
          )}
        </Formik>

        <div className='w-full pt-10'>
          <div className='flex items-center gap-10 justify-center'>
            <button className='w-full py-2  border-black border-2 rounded-bl-xl rounded-tr-xl font-medium text-lg bg-white/50 hover:scale-[1.02] transition-all duration-100'>
              <div className='flex items-center justify-evenly'>
                <img className='w-9' src={logo_google} alt='logo_google' />
                <p className='font-secondary'>Sign in with Google</p>
              </div>
            </button>
            <button className='w-full py-2  border-black border-2 rounded-bl-xl rounded-tr-xl font-medium text-lg bg-white/50 hover:scale-[1.02] transition-all duration-100'>
              <div className='flex items-center justify-evenly'>
                <img className='w-9' src={logo_apple} alt='logo_apple' />
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
