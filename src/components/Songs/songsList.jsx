import { useState } from 'react'
import Songs from '../songs'
import AudioPlayer from '../Audio-Player/audioPlayer';
import { SongsListWrapper } from './songsList.styled';


export default function SongsList() {
    const [clickedSong, setClickedSong] = useState(null);

    const handleClick = (song) => {
        setClickedSong(song);
    }
    const handlePlay = () => {
        console.log('play clicked')
    }
    const handlePause = () => {
        console.log('pause clicked')
    }
    const handleNext = () => {
        console.log('next clicked')
    }
    const handlePrevious = () => {
        console.log('previous clicked')
    }
    return (
        <SongsListWrapper>
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
            {/* <AudioPlayer /> */}
            {clickedSong ?
                (<AudioPlayer
                    pickedSong={clickedSong}
                    onPlay={handlePlay}
                    onNext={handleNext}
                    onPause={handlePause}
                    onPrevious={handlePrevious} />
                ) : (
                    <AudioPlayer />)}
        </SongsListWrapper>
    )
}