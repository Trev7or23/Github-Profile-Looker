import { BiHistory } from 'react-icons/bi'
import { useGithubStore } from '../store/github'

export default function RecentUsers() {
  const recentUsers = useGithubStore((state) => state.recentUsers)
  const changeUser = useGithubStore((state) => state.changeUser)
  return (
    <section className="flex justify-between">
      <strong className="flex gap-1 items-center">
        <BiHistory />
        Recent
      </strong>
      <div className="flex gap-1">
        {recentUsers.slice(-4).map((user, index) => (
          <div
            onClick={() => changeUser(user)}
            key={index}
            className="py-1 px-2  rounded-xl bg-surface-bright/70 text-center text-xs font-bold cursor-pointer"
          >
            @{user}
          </div>
        ))}
      </div>
    </section>
  )
}
