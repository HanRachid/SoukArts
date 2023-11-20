import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import routes from './routes.tsx';
export const router = createBrowserRouter(routes);

console.log(window.localStorage);

export default function App(): React.ReactElement {
  return <RouterProvider router={router} />;
}
