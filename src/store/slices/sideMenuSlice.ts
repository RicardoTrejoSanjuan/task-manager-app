import { createSlice } from '@reduxjs/toolkit';

interface SideMenuState {
  isOpen: boolean;
}

const initialState: SideMenuState = {
  isOpen: true,
};

export const sideMenuSlice = createSlice({
  name: 'sideMenu',
  initialState,
  reducers: {
    toggleMenu(state) {
      state.isOpen = !state.isOpen;
    },
    open(state) {
      state.isOpen = true;
    },
    close(state) {
      state.isOpen = false;
    },
  },
});

export const { toggleMenu, open, close } = sideMenuSlice.actions;
