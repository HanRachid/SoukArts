import {User} from '../../types';

const endpoint = import.meta.env.VITE_API_ENDPOINT;

export async function registerUser(user: User) {
  const url: string = endpoint + '/auth/register';
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
}
