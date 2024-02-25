import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useBlogContentStore = create(
  persist(
    (set, get) => ({
      storagePost: {},
      setStoragePost: (storagePost) => set({ storagePost }),
    }),
    {
      name: 'blog-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
)