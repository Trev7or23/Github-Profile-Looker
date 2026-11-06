import { HiExternalLink, HiOutlineCalendar } from 'react-icons/hi'
import type { GithubUser } from '../../types/github-user'
import { formatJoinedDate } from '../../utils/format-joined-date'

interface Props {
  data: GithubUser
}
export default function Header({ data }: Props) {
  return (
    <header className="flex gap-5 items-center flex-col md:flex-row">
      <article className="flex gap-3 flex-1">
        <img src={data.avatarUrl} className="size-30 rounded-lg" />
        <div className="flex  flex-col gap-2">
          <div className="flex gap-2">
            <h1 className="text-2xl font-bold">{data.name || data.login}</h1>
            <span className="px-2 py-1 bg-surface-bright rounded-lg text-xs text-center w-fit h-fit text-white/90 font-bold">
              {data.type}
            </span>
          </div>
          <div className="flex flex-col flex-1">
            <a
              href={data.htmlUrl}
              target="_blank"
              className="text-md font-italic text-white/80 flex flex-1"
            >
              @{data.login}
              <HiExternalLink />
            </a>
            <span className="mb-2 flex items-center gap-1 text-white/80">
              <HiOutlineCalendar />
              {formatJoinedDate(new Date(data.createdAt))}
            </span>
          </div>
        </div>
      </article>

      <aside className="w-full md:w-fit">
        <a
          href={data.htmlUrl}
          target="_blank"
          className="block  px-3 py-2 bg-surface-bright rounded-xl text-center"
        >
          View on Github
        </a>
      </aside>
    </header>
  )
}
