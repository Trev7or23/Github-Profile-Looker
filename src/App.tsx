import Footer from '@/components/home/Footer'
import Header from '@/components/home/Header'
import InitialCard from '@/components/initialState/InitialCard'
import GithubUserProfile from '@/components/resultState/GithubUserProfile'
import { useGithubStore } from '@/store/github'

function App() {
  const username = useGithubStore((state) => state.user)
  return (
    <div className="text-white px-4 pt-3 gap-8 flex flex-col items-center min-h-dvh">
      <Header />

      <main className="flex justify-center flex-1 w-full">
        {username && <GithubUserProfile username={username} />}
        {!username && <InitialCard />}
      </main>

      <Footer />
    </div>
  )
}

export default App
