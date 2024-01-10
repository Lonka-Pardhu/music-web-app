import Songs from './songs'

export default function SongsList() {
    return (
        <>
            <div className="songs-list-wrapper">
                {Songs.map(song => (
                    <div className="song-container" key={song.id}>
                        <div className="song-details-wrap-one">
                            <div className="song-coverImg-container">
                                <img src={song.songImage} alt="albumImage" />
                            </div>
                            <div className="song-name-artist">
                                <p>{song.songName}</p>
                                <p>{song.artist}</p>
                            </div>
                        </div>
                        <div className="song-duration-container">
                            <p>{song.duration}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}