import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'


export const useGuestOnlineStatusStore = create(
    persist(
        (set, _) => ({
            isGuestOnline: false,
            setIsGuestOnline: (isGuestOnline) => set({ isGuestOnline }),
        }),
        {
            name: 'online-status',
            storage: createJSONStorage(() => localStorage),
        },
    ),
)