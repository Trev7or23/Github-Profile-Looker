import { useQuery } from '@tanstack/react-query'
import { githubUserOptions } from '../services/githubQueries'
import { mapGithubUser } from '../services/githubUser.mapper'
import Header from './githubUser/Header'

interface Props {
  username: string
}
export default function GithubUserProfile({ username }: Props) {
  const { data, isPending, error } = useQuery({
    ...githubUserOptions(username),
    select: (user) => mapGithubUser(user),
  })

  if (isPending) {
    return <div>loading...</div>
  }
  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <section className="bg-container mx-7 rounded-xl lg:w-170  p-7 flex flex-col gap-5 ">
      <Header data={data} />
    </section>
  )
}
