import { create } from 'zustand';

export const isThemeChangedStore = create(set => ({
  isThemeChanged: false,
  setIsThemeChanged: isThemeChanged => set({ isThemeChanged })
}));
