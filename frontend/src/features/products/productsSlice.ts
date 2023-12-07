import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface ProductState {
  products: {} | null;
}

const initialState: ProductState = {
  products: {},
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductsState: (
      state,
      action: PayloadAction<{_id: string; name: string}>
    ) => {
      state.products = action.payload;
    },
  },
});

export const {setProductsState} = productsSlice.actions;

export default productsSlice.reducer;
