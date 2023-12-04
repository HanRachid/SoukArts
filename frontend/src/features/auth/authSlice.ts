import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface AuthState {
  user: {_id: string; name: string} | null;
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
      state.user = null;
    },
  },
});

export const {setLoginState, setLogoutState} = authSlice.actions;

export default authSlice.reducer;
