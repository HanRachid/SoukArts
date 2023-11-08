import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './layouts/Navbar.tsx';
import Footer from './layouts/Footer.tsx';
import Home from './pages/Home.tsx';
import DashBoard from './pages/Dashboard.tsx';
import Login from './pages/login';
export default function App() {
  return (
    <div className='bg-gray-50 w-full h-full '>
      <BrowserRouter>
        <div className='flex flex-col min-h-screen'>
          {/* <Navbar /> */}

          <div className='flex-1 flex flex-col'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/dashboard' element={<DashBoard />} />
            </Routes>
          </div>

          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    </div>
  );
}
