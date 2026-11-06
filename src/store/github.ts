import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface State {
  user: string
  inputValue: string
  setInputValue: (inputValue: string) => void
  recentUsers: string[]
  changeUser: (username: string) => Promise<void>
}
export const useGithubStore = create<State>()(
  persist(
    (set, get) => ({
      user: '',
      inputValue: '',
      recentUsers: [],
      changeUser: async (username) => {
        if (!username) return
        const currentRecentUsers = get().recentUsers

        const filtered = currentRecentUsers.filter(
          (user) => user.toLowerCase() !== username.toLowerCase(),
        )
        const users = filtered.map((user) => user.toLowerCase())
        const updatedRecentUsers = [...users, username.toLowerCase()].slice(-5)

        set({
          user: username,
          recentUsers: updatedRecentUsers,
          inputValue: username,
        })
      },
      setInputValue: (inputValue: string) => set({ inputValue }),
    }),
    {
      name: 'github-profile-looker:recent-users',
      version: 1,
      partialize: (state) => ({ recentUsers: state.recentUsers }),
      merge: (persistedState, currentState) => {
        const persisted = persistedState as Partial<State>
        const recentUsers = Array.isArray(persisted.recentUsers)
          ? persisted.recentUsers
              .filter((user): user is string => typeof user === 'string')
              .slice(-5)
          : currentState.recentUsers

        return { ...currentState, recentUsers }
      },
    },
  ),
)
