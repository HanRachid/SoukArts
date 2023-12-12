import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PopulatedProduct} from '../../../types';

interface ProductState {
  cart: Array<PopulatedProduct>;
}

const initialState: ProductState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cartSlice',
  initialState,
  reducers: {
    setCartState: (state, action: PayloadAction<PopulatedProduct[]>) => {
      state.cart = action.payload;
    },
  },
});

export const {setCartState} = cartSlice.actions;

export default cartSlice.reducer;
