import Songs from './songs'

export default function SongsList() {
    return (
        <>
            <div className="songs-list-wrapper">
                {Songs.map(song => (
                    <div className="song-container" key={song.id}>
                        <div className="song-coverImg-container">
                            <img src={song.songImage} alt="albumImage" />
                        </div>
                        <p>{song.songName}</p>
                        <p>{song.artist}</p>
                        <p>{song.duration}</p>
                    </div>
                ))}
            </div>
        </>
    )
}