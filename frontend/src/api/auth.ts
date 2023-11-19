import { Dispatch, AnyAction } from '@reduxjs/toolkit';
import {User} from '../../types';
import { setLoginState, setLogoutState } from '../features/auth/authSlice';
const endpoint = import.meta.env.VITE_API_ENDPOINT + '/auth';

export async function registerUser(user: User) {
  const url: string = endpoint + '/register';

  const params: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
    mode: 'cors',
  };

  const register = await fetch(url, params);
  const response = await register.json();
  console.log(response);
  return response;
}

export async function loginUser(user: User, dispatch: Dispatch<AnyAction>) {
  const url = endpoint + '/login';

  const params : RequestInit= {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
    mode: 'cors',
    credentials: 'include',
  };

  try {
    const loginResponse = await fetch(url, params);
    const response = await loginResponse.json();
    console.log(response);

    if (loginResponse.ok) {
      // Successful login
      dispatch(setLoginState(response.user)); // Update the state with user info
    } else {
      // Login failed
      dispatch(setLogoutState());
    }

    return response;
  } catch (error) {
    console.error('Login error:', error);
    dispatch(setLogoutState());
  }
}
