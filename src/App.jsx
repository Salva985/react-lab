import Hobbies from './components/Hobbies.jsx'
import SongsList from './components/SongList.jsx'
import songs from './data/songs.json'

function App() {
  const firstName = 'Salva'
  const lastName = 'Marchese'
  const hobbies = ['Scuba diving', 'Web development', 'Tecno music', 'Cats', 'Travel']

  return (
    <main className='container'>
      <header className='header'>
        <h1>{firstName}</h1>
        <h2>{lastName}</h2>
      </header>

      <section className='profile'>
        <img
          src="/profile.jpg"
          alt="Profile of Salva Marchese"
          width="200"
          height="200"
          className="avatar"
        />
        <p>
          Visit my GitHub:{' '}
          <a href="https://github.com/Salva985" target="_blank" rel="noreferrer">
            GitHub Salva985
          </a>
        </p>
      </section>

      <Hobbies items={hobbies} />
      <SongsList songs={songs} />
    </main>
  )
}

export default App