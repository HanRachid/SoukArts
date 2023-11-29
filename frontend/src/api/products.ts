import {Product} from '../../types';
const endpoint = import.meta.env.VITE_API_ENDPOINT + '/products';

export async function addProduct(product: Product) {
  const url: string = endpoint + '/addproduct';
  const uploadedImages: Object[] = [];
  for (let image of product.images) {
    const uploadedImage = await uploadImage(image);
    uploadedImages.push(uploadedImage.url);
  }

  const uploadedProduct = {...product, images: uploadedImages};
  console.log(uploadedProduct);

  const params: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(uploadedProduct),
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

export async function uploadImage(image: FormData) {
  const url = 'http://api.cloudinary.com/v1_1/dmgfba0uv/image/upload';
  const params: RequestInit = {
    method: 'POST',
    body: image,
  };
  const upload = await fetch(url, params);
  const result = await upload.json();

  return result;
}

export async function editProduct(data: any) {}

export async function deleteProduct(id: string) {}

export async function getProducts(id: string) {
  const url: string = endpoint + '/' + id;
  const products = await fetch(url);
  const result = await products.json();

  return result;
}
