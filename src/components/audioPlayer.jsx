import { useEffect, useRef } from "react"

export default function AudioPlayer({ pickedSong }) {

    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.load();
        }
    }, [pickedSong])

    if (!pickedSong) {
        return (
            <>
                <div className="audio-player-default-container">
                    <h2>Please click on any of the songs above</h2>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="audio-player-container">
                <div className="audio-player-wrapper">
                    <div className="active-song-details-wrap">
                        <div className="active-song-image-container">
                            <img src={pickedSong.songImage} alt="albumImage" />
                        </div>
                        <div className="active-song-details">
                            <p>{pickedSong.songName}</p>
                            <p>{pickedSong.artist}</p>
                        </div>
                    </div>
                    <audio controls autoPlay ref={audioRef}>
                        <source src={pickedSong.audioFile} />
                    </audio>
                </div>
            </div>
        </>
    )
}