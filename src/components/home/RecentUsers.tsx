import { BiHistory } from 'react-icons/bi'
import { useGithubStore } from '@/store/github'

export default function RecentUsers() {
  const recentUsers = useGithubStore((state) => state.recentUsers)
  const changeUser = useGithubStore((state) => state.changeUser)
  return (
    <section className="flex flex-wrap items-center justify-between gap-2 w-full max-w-3xl mx-auto">
      <strong className="flex gap-1 items-center">
        <BiHistory />
        Recent
      </strong>
      <div className="flex flex-wrap justify-end gap-1">
        {recentUsers.slice(-4).map((user) => (
          <button
            type="button"
            onClick={() => changeUser(user)}
            key={user}
            className="py-1 px-2 rounded-xl bg-surface-bright/70 text-center text-xs font-bold cursor-pointer hover:bg-surface-bright transition-colors max-w-32 truncate"
          >
            @{user}
          </button>
        ))}
      </div>
    </section>
  )
}
