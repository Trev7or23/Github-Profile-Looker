import { create } from 'zustand'

interface State {
  user: string
  inputValue: string
  setInputValue: (inputValue: string) => void
  recentUsers: string[]
  changeUser: (username: string) => Promise<void>
}
export const useGithubStore = create<State>((set, get) => ({
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
}))
