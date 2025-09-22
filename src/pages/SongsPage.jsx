import SongsList from '../components/SongsList.jsx'
import songs from '../data/songs.json'

export default function SongsPage() {
  return (
    <main className="container">
      <h3>Favorite Songs</h3>
      <SongsList songs={songs} />
    </main>
  )
}