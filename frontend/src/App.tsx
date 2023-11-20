import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import routes from './routes.tsx';
export const router = createBrowserRouter(routes);
import {store} from './app/store.ts';
import {useEffect} from 'react';

export default function App(): React.ReactElement {
  useEffect(() => {
    console.log(store.getState());
  }, [store]);
  return <RouterProvider router={router} />;
}
