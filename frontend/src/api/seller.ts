import {Seller} from '../../types';

const endpoint = import.meta.env.VITE_API_ENDPOINT + '/seller';

export async function addSeller(seller: Seller) {
  const url: string = endpoint + '/addseller';

  const params: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(seller),
    mode: 'cors',
  };

  const newSeller = await fetch(url, params);
  const response = await newSeller.json();
  if (response.error) {
    if (response.error === 'exists') {
      throw new Error('Seller already exists!');
    }
  }

  return response;
}
