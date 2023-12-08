import NavbarClient from '../components/navbar/NavbarClient';
import NavbarDefault from '../components/navbar/NavbarDefault';
import React, {useEffect} from 'react';
import NavbarSeller from '../components/navbar/NavbarSeller';
import {useState} from 'react';
import {store} from '../app/store';
import {User} from '../../types';
import NavbarPending from '../components/navbar/NavbarPending';
import {refreshLog} from '../api/auth';
import {useDispatch} from 'react-redux';

export default function NavBar(): React.ReactElement {
  const [user, setUser] = useState<Partial<User> | null>({} as User);
  const dispatch = useDispatch();
  useEffect(() => {
    refreshLog({} as User, dispatch).then(() => {
      setUser(store.getState().auth.user);
    });
  }, [store.getState().auth.user]);

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
