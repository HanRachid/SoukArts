import NavbarClient from '../components/navbar/NavbarClient';
import NavbarDefault from '../components/navbar/NavbarDefault';
import React, {useEffect} from 'react';
import NavbarSeller from '../components/navbar/NavbarSeller';
import NavbarPending from '../components/navbar/NavbarPending';
import {useSelector} from 'react-redux';

export default function NavBar(): React.ReactElement {
  const user = useSelector((state: any) => state.auth.user);
  const products = useSelector((state: any) => state.products.products);
  console.log(products);
  console.log(user);

  return (
    <div>
      <div>
        {user?.role === 'seller' && <NavbarSeller />}
        {user?.role === 'user' && <NavbarClient />}
        {user?.role === 'Pending' && <NavbarPending />}
        {!user?.role && <NavbarDefault />}
      </div>

      {/* Bouton pour tester le changement de navbar RACHID */}
    </div>
  );
}
