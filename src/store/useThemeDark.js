import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'


export const useThemeStore = create(
  persist(
    (set, _) => ({
      isThemeDark: false,
      setIsThemeDark: (isThemeDark) => set({ isThemeDark }),
    }),
    {
      name: 'theme-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)