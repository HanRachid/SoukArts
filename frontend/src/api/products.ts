import {Product} from '../../types';
const endpoint = import.meta.env.VITE_API_ENDPOINT + '/products';

export async function addProduct(product: Product) {
  const url: string = endpoint + '/addproduct';
  const params: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
    mode: 'cors',
  };

  const newProduct = await fetch(url, params);

  const response = await newProduct.json();
  if (response.error) {
    if (response.error === 'exists') {
      throw new Error('Product already exists!');
    }
  }

  return response;
}
