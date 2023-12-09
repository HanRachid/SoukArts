import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import routes from './routes.tsx';
import {refreshLog} from './api/auth.ts';
import {useDispatch} from 'react-redux';
import {setLoginState} from './features/auth/authSlice.ts';
import {User} from '../types';
import {getAllProducts, getProducts} from './api/products.ts';
import {setProductsState} from './features/products/productsSlice.ts';
export const router = createBrowserRouter(routes);

export default function App(): React.ReactElement {
  const dispatch = useDispatch();
  refreshLog({} as User).then((result) => {
    dispatch(setLoginState(result));
    console.log(result);
  });
  getAllProducts().then((result) => {
    dispatch(setProductsState(result));
  });

  return <RouterProvider router={router} />;
}
