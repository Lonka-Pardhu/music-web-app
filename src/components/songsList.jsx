// import Songs from './songs.json'
import songCover from '../media/memory-reboot.jpg'
// import songAudio from '../media/memory-reboot-voj.mp3'
// import songArtist from '../media/voj.jpg'

export default function SongsList() {
    return (
        <>
            <div className="song-container">
                <div className="song-coverImg-container">
                    <img src={songCover} alt="albumImage" />
                </div>
                <p>Memory Reboot</p>
                <p>VOJ</p>
            </div>
        </>
    )
}