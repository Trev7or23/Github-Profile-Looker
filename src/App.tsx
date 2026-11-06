import Footer from './components/Footer'
import GithubUserProfile from './components/GithubUserProfile'
import InitialCard from './components/InitialCard'
import RecentUsers from './components/RecentUsers'
import SearchForm from './components/SearchForm'
import { useGithubStore } from './store/github'

function App() {
  const username = useGithubStore((state) => state.user)
  return (
    <div className="text-white pt-3 mx-auto gap-8 flex flex-col items-center min-h-dvh">
      <header className="flex justify-center flex-col">
        <SearchForm />
        <RecentUsers />
      </header>

      <main className="flex justify-center flex-1">
        {username && <GithubUserProfile username={username} />}
        {!username && <InitialCard />}
      </main>

      <Footer />
    </div>
  )
}

export default App
