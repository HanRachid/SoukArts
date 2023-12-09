import {Dispatch, AnyAction} from '@reduxjs/toolkit';
import {User} from '../../types';

import {store} from '../app/store';
const endpoint = import.meta.env.VITE_API_ENDPOINT + '/auth';

export async function registerUser(user: Partial<User>) {
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

export async function loginUser(user: Partial<User>) {
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

  const loginResponse = await fetch(url, params);
  const response = await loginResponse.json();
  console.log(response);
  return response;
}

export async function refreshLog(user: User) {
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

  const loginResponse = await fetch(url, params);
  const response = await loginResponse.json();

  return response;
}

export async function logoutUser() {
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

  return response;
}
