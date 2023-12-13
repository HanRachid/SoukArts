import {PopulatedProduct} from '../../types';
const endpoint = import.meta.env.VITE_API_ENDPOINT + '/orders';

export async function addOrder(order: PopulatedProduct[], user_id: string) {
  const url: string = endpoint + '/createorder';
  const params: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({order, user_id}),
    mode: 'cors',
    credentials: 'include',
  };
  const newOrder = await fetch(url, params);
  const response = newOrder.json();
  return response;
}

export async function getOrders(id: string) {
  const url: string = endpoint + '/getorders/' + id;
  const params: RequestInit = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    mode: 'cors',
    credentials: 'include',
  };
  const orders = await fetch(url, params);
  const response = orders.json();
  return response;
}
