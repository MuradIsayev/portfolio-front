import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'


export const useMessageInputStore = create(
    persist(
        (set, _) => ({
            message: '',
            setMessage: (message) => set({ message }),
        }),
        {
            name: 'message-input',
            storage: createJSONStorage(() => localStorage),
        },
    ),
)