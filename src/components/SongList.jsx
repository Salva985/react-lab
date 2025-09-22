function formatDuration(totalSeconds) {
    const m = Math.floor(totalSeconds / 60)
    const s = totalSeconds % 60
    return `${m}:${String(s).padStart(2, '0')}`
}

export default function SongsList({ songs = [] }) {
    return (
        <section>
            <h3>Favorite Songs</h3>
            <ul className="songs">
                {songs.map((song) => (
                    <li key={`${song.title}-${song.album}`} className="song-card">
                        <img
                            src={song.albumImage}
                            alt={`${song.album} cover`}
                            width="120"
                            height="120"
                        />
                        <div className="song-meta">
                            <strong>{song.title}</strong>
                            <span>Album: {song.album}</span>
                            <span>Duration: {formatDuration(song.duration)}</span>
                            <span>Rating: 
                                {'★'.repeat(song.rating)}{'☆'.repeat(5 - song.rating)}
                            </span>
                        </div> 
                    </li>
                ))}
            </ul>
        </section>
    )
}