import Footer from '@/components/home/Footer'
import Header from '@/components/home/Header'
import InitialCard from '@/components/initialState/InitialCard'
import GithubUserProfile from '@/components/resultState/GithubUserProfile'
import GithubUserSearchResults from '@/components/resultState/GithubUserSearchResults'
import { useGithubStore } from '@/store/github'
import { isEmail } from '@/utils/is-email'

function App() {
  const user = useGithubStore((state) => state.user)
  const isEmailQuery = isEmail(user)
  return (
    <div className="text-white px-4 pt-3 gap-8 flex flex-col items-center min-h-dvh">
      <Header />

      <main className="flex justify-center flex-1 w-full">
        {!user && <InitialCard />}
        {user && isEmailQuery && <GithubUserSearchResults email={user} />}
        {user && !isEmailQuery && <GithubUserProfile username={user} />}
      </main>

      <Footer />
    </div>
  )
}

export default App
