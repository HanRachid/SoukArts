import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Cart, ProductState} from '../../../types';

const initialState: ProductState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    setCartState: (state, action: PayloadAction<Cart[]>) => {
      state.cart = action.payload;
    },
  },
});

export const {setCartState} = cartSlice.actions;

export default cartSlice.reducer;
