import {ProductUrl} from '../../types';
const endpoint = import.meta.env.VITE_API_ENDPOINT + '/products';

export async function addProduct(product: ProductUrl) {
  const url: string = endpoint + '/addproduct';
  const uploadedImages: Object[] = [];
  for (let image of product.formData) {
    const uploadedImage = await uploadImage(image);
    uploadedImages.push(uploadedImage);
  }

  const uploadedProduct = {...product, images: uploadedImages};

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

async function uploadImage(image: FormData) {
  const url = 'http://api.cloudinary.com/v1_1/dmgfba0uv/image/upload';
  const params: RequestInit = {
    method: 'POST',
    body: image,
  };
  const upload = await fetch(url, params);
  const result = await upload.json();
  console.log(result);

  return result;
}

export async function editProduct(data: ProductUrl) {
  const url: string = endpoint + '/editproduct/' + data._id;
  const uploadedImages: Object[] = [];
  console.log('data:');

  console.log(data);
  for (let image of data.formData) {
    console.log(image.get('file'));

    const uploadedImage = await uploadImage(image);
    uploadedImages.push(uploadedImage);
  }
  console.log(uploadedImages);

  const uploadedProduct = {
    ...data,
    images: [...uploadedImages, ...data.images],
  };
  console.log('uploadedProduct:');

  console.log(uploadedProduct);

  const params: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(uploadedProduct),
    mode: 'cors',
  };

  const editedProduct = await fetch(url, params);

  const response = await editedProduct.json();

  return response;
}

export async function deleteProduct(id: string) {
  const url: string = endpoint + '/deleteproduct/' + id;

  const params: RequestInit = {
    method: 'POST',
  };
  const remove = await fetch(url, params);
  const result = await remove.json();
  return result;
}

export async function getProducts(id: string) {
  const url: string = endpoint + '/product/' + id;
  const products = await fetch(url);
  const result = await products.json();

  return result;
}

export async function getAllProducts() {
  const url: string = endpoint + '/allproducts/';
  const product = await fetch(url);
  const result = await product.json();

  return result;
}
