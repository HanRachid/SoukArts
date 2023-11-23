import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AuthState {
  user: {id: string; name: string} | null;
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
      action: PayloadAction<{id: string; name: string}>
    ) => {
      state.user = action.payload;
    },
    setLogoutState: (state) => {
      state.user = null;
    },
  },
});

export const {setLoginState, setLogoutState} = authSlice.actions;

export default authSlice.reducer;
