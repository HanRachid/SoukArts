import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ProductUrl} from '../../../types';

interface ProductState {
  products: {} | null;
}

const initialState: ProductState = {
  products: [],
};

export const productsSlice = createSlice({
  name: 'productsSlice',
  initialState,
  reducers: {
    setProductsState: (state, action: PayloadAction<ProductUrl>) => {
      state.products = action.payload;
    },
  },
});

export const {setProductsState} = productsSlice.actions;

export default productsSlice.reducer;
