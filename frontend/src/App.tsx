import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {RouteObj} from '../types';
import routes from './routes.tsx';
import GlobalLayout from './layouts/GlobalLayout.tsx';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {routes.map((route: RouteObj, index) => (
            <Route
              element={<GlobalLayout key={index} hasLayout={route.hasLayout} />}
            >
              <Route path={route.path} element={route.element} />
            </Route>
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}
