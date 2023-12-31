import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {User} from '../../../types';

interface AuthState {
  user: Partial<User> | null;
}

const initialState: AuthState = {
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoginState: (state, action: PayloadAction<Partial<User>>) => {
      state.user = action.payload;
    },
    setLogoutState: (state) => {
      state.user = {user: {role: 'disconnected'}} as any;
    },
  },
});

export const {setLoginState, setLogoutState} = authSlice.actions;

export default authSlice.reducer;
