import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  user: { id: string; name: string } | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoginState: (state, action: PayloadAction<{ id: string; name: string }>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    setLogoutState: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { setLoginState, setLogoutState } = authSlice.actions;

export default authSlice.reducer;
