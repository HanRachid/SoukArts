import {CloudinaryImage, User} from '../../types';

const endpoint = import.meta.env.VITE_API_ENDPOINT + '/users';

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

export async function editUser(
  user: User & {localUrl: string | null} & {destroy_id: string | null},
  image: FormData
) {
  const url: string = endpoint + '/edit/' + user._id;

  const userToEdit = user;
  userToEdit.destroy_id = null;
  if (userToEdit.profile_image) {
    userToEdit.destroy_id = userToEdit.profile_image.public_id;
  }
  if (userToEdit.localUrl === null) {
    userToEdit.profile_image = {} as CloudinaryImage;
  } else if (
    userToEdit!.localUrl! &&
    userToEdit.localUrl!.split(':')[0] === 'blob'
  ) {
    const uploadedImage = await uploadImage(image);

    userToEdit.profile_image = uploadedImage;
  }

  const params: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userToEdit),
    mode: 'cors',
  };

  const editedUser = await fetch(url, params);
  const response = await editedUser.json();

  return response;
}
