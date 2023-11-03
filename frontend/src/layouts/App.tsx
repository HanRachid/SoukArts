import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from '../layouts/Navbar.tsx';
import Footer from '../layouts/Footer.tsx';
import Home from '../pages/Home.tsx';
import DashBoard from '../pages/Dashboard.tsx';
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/dashboard' element={<DashBoard />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}
