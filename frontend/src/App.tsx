import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import routes from './routes.tsx';
import {useEffect} from 'react';
import {refreshLog} from './api/auth.ts';
import {useDispatch} from 'react-redux';
import {setLoginState} from './features/auth/authSlice.ts';
import {User} from '../types';
import {getAllProducts} from './api/products.ts';
import {setProductsState} from './features/products/productsSlice.ts';
export const router = createBrowserRouter(routes);

export default function App(): React.ReactElement {
  const dispatch = useDispatch();
  useEffect(() => {
    refreshLog({} as User).then((result) => {
      console.log(result);

      dispatch(setLoginState(result));
    });
    getAllProducts().then((result) => {
      dispatch(setProductsState(result));
    });
  });

  return <RouterProvider router={router} />;
}
