export interface GithubUser {
  login: string
  avatarUrl: string
  url: string
  htmlUrl: string
  followersUrl: string
  followingUrl: string
  followers: number
  following: number
  createdAt: Date
  type: string
  name?: string
}
