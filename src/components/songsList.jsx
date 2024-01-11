import { useState, useEffect } from 'react'
import AudioPlayer from './audioPlayer'
import Songs from './songs'

export default function SongsList() {
    const [clickedSong, setClickedSong] = useState(null);

    useEffect(() => {
        if (clickedSong !== null) {
            console.log(clickedSong)
        }
    }, [clickedSong])

    const handleClick = (song) => {
        setClickedSong(song);
    }
    return (
        <>
            <div className="songs-list-wrapper">
                {Songs.map(song => (
                    <div className="song-container" key={song.id} onClick={() => { handleClick(song) }}>
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
            {clickedSong && <AudioPlayer clickedSong={clickedSong} />}
        </>
    )
}