import {createSlice} from '@reduxjs/toolkit';

export const favoritesDisplaySlice = createSlice({
  name: 'favoritesDisplay',
  initialState: {
    showFavorites: true,
  },
  reducers: {
    setShowFavorites: (state, action) => {
      state.showFavorites = action.payload;
    },
  },
});

export const {setShowFavorites} = favoritesDisplaySlice.actions;

export default favoritesDisplaySlice.reducer;
