import NavbarClient from '../components/NavbarClient';
import NavbarDefault from '../components/NavbarDefault';
import React from 'react';
import NavbarSeller from '../components/NavbarSeller';
import {useState} from 'react';

export default function NavBar(): React.ReactElement {
  const [userType, setUserType] = useState<string | null>('client');

  const handleUserTypeChange = (type: string) => {
    setUserType(type);
  };

  return (
    <div>
      <div>
        {userType === 'client' && <NavbarClient />}
        {userType === 'seller' && <NavbarSeller />}
        {(!userType || userType === 'default') && <NavbarDefault />}
      </div>

      {/* Bouton pour tester le changement de navbar RACHID */}
      <button onClick={() => handleUserTypeChange('client')}>Set Client</button>
      <button onClick={() => handleUserTypeChange('seller')}>Set Seller</button>
      <button onClick={() => handleUserTypeChange('default')}>
        Set Default
      </button>
    </div>
  );
}
