import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useBlogDataStore = create(
  persist(
    (set, get) => ({
      posts: [],
      getPostBySlug: (slug) => get().posts.find((post) => post.slug === slug),
      setPosts: (posts) => set({ posts }),
      addPost: (post) => set({ posts: [...get().posts, post] }),
    }),
    {
      name: 'blog-storage', // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    },
  ),
)