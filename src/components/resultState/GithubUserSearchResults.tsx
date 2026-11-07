import { useQuery } from '@tanstack/react-query'
import Card from '@/components/shared/Card'
import GithubUserProfile from '@/components/resultState/GithubUserProfile'
import SearchResultsSkeleton from '@/components/loadingState/SearchResultsSkeleton'
import { githubUserSearchByEmailOptions } from '@/services/githubQueries'
import { mapGithubUserSearchItem } from '@/services/githubUserSearch.mapper'
import { useGithubStore } from '@/store/github'
import type { GithubUserSearchResponse } from '@/types/github-user-search-response'

interface Props {
  email: string
}

export default function GithubUserSearchResults({ email }: Props) {
  const changeUser = useGithubStore((state) => state.changeUser)
  const { data, isPending, error } = useQuery({
    ...githubUserSearchByEmailOptions(email),
    select: (response: GithubUserSearchResponse) => ({
      totalCount: response.total_count,
      users: response.items.map(mapGithubUserSearchItem),
    }),
  })

  const users = data?.users ?? []
  const isSingleMatch = users.length === 1

  if (isPending) {
    return <SearchResultsSkeleton />
  }

  if (error) {
    return (
      <div className="bg-container w-full max-w-3xl rounded-md border border-outline-variant p-5 text-center text-red-400 md:p-6">
        Error: {error.message}
      </div>
    )
  }

  if (users.length === 0) {
    return (
      <Card className="w-full max-w-3xl h-fit">
        <section className="flex gap-5 flex-col items-center">
          <h2 className="text-2xl font-bold text-center">No users found</h2>
          <p className="text-on-surface-variant text-center">
            No public GitHub users found for {email}
          </p>
        </section>
      </Card>
    )
  }

  if (isSingleMatch) {
    return <GithubUserProfile username={users[0].login} />
  }

  return (
    <Card className="w-full max-w-3xl h-fit">
      <section className="flex flex-col gap-5">
        <header className="flex flex-col gap-1">
          <h2 className="text-2xl font-bold">Users found</h2>
          <p className="text-sm text-on-surface-variant">
            {data?.totalCount}{' '}
            {data?.totalCount === 1 ? 'user' : 'users'} with a public email
          </p>
        </header>

        <ul className="flex flex-col gap-3">
          {users.map((user) => (
            <li key={user.login}>
              <button
                type="button"
                onClick={() => changeUser(user.login)}
                className="w-full flex items-center gap-3 rounded-md border border-outline-variant bg-surface-container-low px-3 py-2 cursor-pointer hover:bg-surface-bright transition-colors"
              >
                <img
                  src={user.avatarUrl}
                  alt={`${user.login} avatar`}
                  className="size-10 rounded-full ring-2 ring-outline-variant shrink-0"
                />
                <span className="font-mono text-sm text-on-surface break-all">
                  @{user.login}
                </span>
                <span className="ml-auto text-[11px] uppercase font-semibold tracking-wider text-on-surface-variant">
                  {user.type}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </section>
    </Card>
  )
}
