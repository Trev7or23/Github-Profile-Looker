import { useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import ProfileSkeleton from '@/components/loadingState/ProfileSkeleton'
import ProfileBody from '@/components/resultState/ProfileBody'
import ProfileHeader from '@/components/resultState/ProfileHeader'
import { githubUserOptions } from '@/services/githubQueries'
import { mapGithubUser } from '@/services/githubUser.mapper'
import { useGithubStore } from '@/store/github'

interface Props {
  username: string
}
export default function GithubUserProfile({ username }: Props) {
  const setNewRecentUser = useGithubStore((state) => state.setNewRecentUser)
  const { data, isPending, error } = useQuery({
    ...githubUserOptions(username),
    select: (user) => mapGithubUser(user),
  })

  useEffect(() => {
    if (data) {
      setNewRecentUser(data.login)
    }
  }, [data, setNewRecentUser])

  if (isPending) {
    return <ProfileSkeleton />
  }
  if (error) {
    return (
      <div className="bg-container w-full max-w-3xl rounded-md border border-outline-variant p-5 text-center text-red-400 md:p-6">
        Error: {error.message}
      </div>
    )
  }

  return (
    <section className="bg-container w-full max-w-3xl rounded-md border border-outline-variant p-5 md:p-6 flex flex-col gap-5">
      <ProfileHeader data={data} />
      <ProfileBody data={data} />
    </section>
  )
}
