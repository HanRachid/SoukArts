import {combineReducers, configureStore} from '@reduxjs/toolkit';
import authReducer from '../../../features/auth/authSlice';
import favoritesDisplayReducer from '../../../features/favoritesDisplaySlice';

const rootReducer = combineReducers({
  auth: authReducer,
  favoritesDisplay: favoritesDisplayReducer,
  // other reducers...
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
  reducer: rootReducer,
});
