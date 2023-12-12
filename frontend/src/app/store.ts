import {combineReducers, configureStore} from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import favoritesDisplayReducer from '../features/display/favoritesDisplaySlice';
import productsReducer from '../features/products/productsSlice';
import cartReducer from '../features/cart/cartSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  favoritesDisplay: favoritesDisplayReducer,
  products: productsReducer,
  cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
