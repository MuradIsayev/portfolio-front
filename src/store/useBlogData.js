import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useBlogDataStore = create(
  persist(
    (set, get) => ({
      storagePost: {},
      setStoragePost: (storagePost) => set({ storagePost }),
    }),
    {
      name: 'blog-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    },
  ),
)