import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes.tsx';
import { useEffect } from 'react';
import { refreshLog } from './api/auth.ts';
import { useDispatch } from 'react-redux';
import { User } from '../types';
import { store } from './app/store.ts';
export const router = createBrowserRouter(routes);

export default function App(): React.ReactElement {
  const dispatch = useDispatch();

  useEffect(() => {
    refreshLog({} as User, dispatch).then((result) => {
      console.log(result);
    });
  }, [store.getState().auth.user]);
  return <RouterProvider router={router} />;
}
