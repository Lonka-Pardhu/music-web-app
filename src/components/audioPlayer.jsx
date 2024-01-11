import { useEffect, useState } from "react"

export default function AudioPlayer({ clickedSong }) {

    // const [audio, setAudio] = useState(new Audio())
    // useEffect(() => {
    //     if (clickedSong) {
    //         // audio.pause();

    //         const newAudio = new Audio(clickedSong.audioFile);
    //         setAudio(newAudio)
    //         audio.play();
    //     }
    // }, [clickedSong, audio])

    if (!clickedSong) {
        return (
            <>
                <h2>Please click on any of the songs above</h2>
            </>
        )
    }
    return (
        <>
            <div className="audio-player-container">
                <div className="audio-player-wrapper">
                    <div className="active-song-details-wrap">
                        <div className="active-song-image-container">
                            <img src={clickedSong.songImage} alt="albumImage" />
                        </div>
                        <div className="active-song-details">
                            <p>{clickedSong.songName}</p>
                            <p>{clickedSong.artist}</p>
                        </div>
                    </div>
                    <audio controls autoPlay>
                        <source src={clickedSong.audioFile} />
                    </audio>
                </div>
            </div>
        </>
    )
}