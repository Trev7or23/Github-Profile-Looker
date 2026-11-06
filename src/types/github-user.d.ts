export interface GithubUser {
  login: string
  avatarUrl: string
  url: string
  htmlUrl: string
  followersUrl: string
  followingUrl: string
  followers: number
  following: number
  publicRepos: number
  publicGists: number
  createdAt: string
  updatedAt: string
  type: string
  name?: string
  bio?: string
  company?: string
  blog?: string
  location?: string
  email?: string
  twitterUsername?: string
  hireable?: boolean
}
