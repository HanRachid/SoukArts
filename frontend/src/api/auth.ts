import { Dispatch, AnyAction } from '@reduxjs/toolkit';
import { User } from '../../types';
import { setLoginState, setLogoutState } from '../features/auth/authSlice';
import { store } from '../app/store';
import { router } from '../App';
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
  if (response.error) {
    if (response.error === 'exists') {
      throw new Error('User already exists!');
    }
  }
  return response;
}

export async function loginUser(user: User, dispatch: Dispatch<AnyAction>) {
  const url = endpoint + '/login';

  const params: RequestInit = {
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

    if (loginResponse.ok) {
      // Successful login
      dispatch(setLoginState(response.user));
      if (store.getState().auth.user) {
        router.navigate('/');
      } // Update the state with user info
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

export async function refreshLog(user: User, dispatch: Dispatch<AnyAction>) {
  const url = endpoint + '/login';

  const params: RequestInit = {
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

    if (loginResponse.ok) {
      dispatch(setLoginState(response.user));
      if (!store.getState().auth.user) {
        dispatch(setLogoutState());
      }
    }

    return response;
  } catch (error) {
    console.error('Login error:', error);
    dispatch(setLogoutState());
  }
}

export async function logoutUser(dispatch: Dispatch<AnyAction>) {
  const url: string = endpoint + '/logout';

  const params: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },

    mode: 'cors',
    credentials: 'include',
  };

  const logout = await fetch(url, params);

  const response = await logout.json();

  if (!response.error) {
    dispatch(setLogoutState());
    console.log(store.getState());
  }

  return response;
}
