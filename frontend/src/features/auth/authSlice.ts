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
    setLoginState: (
      state,
      action: PayloadAction<{_id: string; name: string}>
    ) => {
      state.user = action.payload;
    },
    setLogoutState: (state) => {
      state.user = {role: 'disconnected'};
    },
  },
});

export const {setLoginState, setLogoutState} = authSlice.actions;

export default authSlice.reducer;
