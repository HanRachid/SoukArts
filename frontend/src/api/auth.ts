import {User} from '../../types';
import {router} from '../App';
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

export async function loginUser(user: User) {
  const url: string = endpoint + '/login';
  const params: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
    mode: 'cors',
  };

  const login = await fetch(url, params);

  const response = await login.json();

  console.log(response);

  return response;
}
