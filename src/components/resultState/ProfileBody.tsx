import type { ReactNode } from 'react'
import {
  HiOutlineBadgeCheck,
  HiOutlineLink,
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlineOfficeBuilding,
} from 'react-icons/hi'
import { BiLogoTwitter } from 'react-icons/bi'
import type { GithubUser } from '@/types/github-user'
import { formatUpdatedDate } from '@/utils/format-joined-date'

interface Props {
  data: GithubUser
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col gap-1 rounded-md border border-outline-variant bg-surface-container-low px-3 py-2">
      <dt className="text-[11px] font-semibold uppercase tracking-wider text-on-surface-variant">
        {label}
      </dt>
      <dd className="font-mono text-lg font-semibold text-on-surface">
        {value}
      </dd>
    </div>
  )
}

function Detail({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <li className="flex min-w-0 items-center gap-2 text-sm text-on-surface-variant">
      <span className="shrink-0 text-outline" aria-hidden="true">
        {icon}
      </span>
      <span className="min-w-0 break-words">{children}</span>
    </li>
  )
}

function withProtocol(url: string) {
  return /^https?:\/\//i.test(url) ? url : `https://${url}`
}

export default function ProfileBody({ data }: Props) {
  const blogUrl = data.blog ? withProtocol(data.blog) : undefined
  const twitterUrl = data.twitterUsername
    ? `https://x.com/${data.twitterUsername}`
    : undefined

  return (
    <div className="flex flex-col gap-5">
      {data.bio && (
        <p className="text-sm leading-relaxed text-on-surface-variant md:text-base">
          {data.bio}
        </p>
      )}

      <dl className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <Stat label="Repositories" value={data.publicRepos} />
        <Stat label="Gists" value={data.publicGists} />
        <Stat label="Followers" value={data.followers} />
        <Stat label="Following" value={data.following} />
      </dl>

      <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
        {data.company && (
          <Detail icon={<HiOutlineOfficeBuilding />}>{data.company}</Detail>
        )}
        {data.location && (
          <Detail icon={<HiOutlineLocationMarker />}>{data.location}</Detail>
        )}
        {blogUrl && (
          <Detail icon={<HiOutlineLink />}>
            <a
              href={blogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              {data.blog}
            </a>
          </Detail>
        )}
        {data.email && (
          <Detail icon={<HiOutlineMail />}>
            <a
              href={`mailto:${data.email}`}
              className="text-primary hover:underline"
            >
              {data.email}
            </a>
          </Detail>
        )}
        {twitterUrl && (
          <Detail icon={<BiLogoTwitter />}>
            <a
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              @{data.twitterUsername}
            </a>
          </Detail>
        )}
        {data.hireable !== undefined && (
          <Detail icon={<HiOutlineBadgeCheck />}>
            <span className={data.hireable ? 'text-secondary' : undefined}>
              {data.hireable ? 'Available for hire' : 'Not available for hire'}
            </span>
          </Detail>
        )}
      </ul>

      <p className="text-xs text-outline">{formatUpdatedDate(data.updatedAt)}</p>
    </div>
  )
}
