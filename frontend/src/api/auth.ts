import {User} from '../../types';
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
    credentials: 'include',
  };

  const login = await fetch(url, params);

  const response = await login.json();
  console.log(response);

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

  const login = await fetch(url, params);

  const response = await login.json();
  console.log(response);

  return response;
}
