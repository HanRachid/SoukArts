import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './layouts/Navbar.tsx';
import Footer from './layouts/Footer.tsx';
import Home from './pages/Home.tsx';
import DashBoard from './pages/Dashboard.tsx';
import Termsofuse from './pages/Termsofuse.tsx';
import Privacy from './pages/Privacy.tsx';
export default function App() {
  return (
    <div className='bg-colorBeigeLight w-full h-full '>
      <BrowserRouter>
        <div className='flex flex-col min-h-screen'>
          <Navbar />

          <div className='flex-1 flex flex-col'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/dashboard' element={<DashBoard />} />
              <Route path='/termsofuse' element={<Termsofuse />} />
              <Route path='/privacy' element={<Privacy />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}
