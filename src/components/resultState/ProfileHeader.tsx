import { HiExternalLink, HiOutlineCalendar } from 'react-icons/hi'
import type { GithubUser } from '@/types/github-user'
import { formatJoinedDate } from '@/utils/format-joined-date'

interface Props {
  data: GithubUser
}
export default function ProfileHeader({ data }: Props) {
  return (
    <header className="flex gap-5 items-center flex-col md:flex-row">
      <article className="flex gap-3 flex-1 w-full min-w-0">
        <img
          src={data.avatarUrl}
          alt={`${data.name || data.login} avatar`}
          className="size-24 md:size-30 rounded-full ring-2 ring-outline-variant shrink-0"
        />
        <div className="flex flex-col gap-2 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-2xl font-bold break-words">
              {data.name || data.login}
            </h1>
            <span className="px-2 py-1 bg-surface-bright rounded-full font-mono text-[11px] uppercase tracking-wider text-on-surface text-center w-fit h-fit font-semibold shrink-0">
              {data.type}
            </span>
          </div>
          <div className="flex flex-col flex-1 min-w-0">
            <a
              href={data.htmlUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-on-surface-variant flex items-center gap-1 break-all hover:text-primary"
            >
              @{data.login}
              <HiExternalLink className="shrink-0" />
            </a>
            <span className="mb-2 flex items-center gap-1 text-on-surface-variant">
              <HiOutlineCalendar className="shrink-0" />
              {formatJoinedDate(data.createdAt)}
            </span>
          </div>
        </div>
      </article>

      <aside className="w-full md:w-fit">
        <a
          href={data.htmlUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block px-3 py-2 bg-surface-container-high border border-outline-variant rounded-md text-center text-on-surface hover:bg-surface-bright transition-colors"
        >
          View on Github
        </a>
      </aside>
    </header>
  )
}
