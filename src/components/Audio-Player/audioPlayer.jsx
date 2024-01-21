/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react"
import { AudioPlayerContainer } from "./audioPlayer.styled";
import { AudioPlayerDefault } from "./audioPlayerDefault.styled";
import AudioControls from "./PlayerControls/audioControls"

export default function AudioPlayer({ pickedSong }) {

    const [isPlaying, setIsPlaying] = useState(false)

    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.load();
        }
    }, [pickedSong])

    const handlePlayPause = () => {
        setIsPlaying(prev => !prev)
        console.log('play clicked')
    }
    const handleNext = () => {
        console.log('next clicked')
    }
    const handlePrevious = () => {
        console.log('previous clicked')
    }

    if (!pickedSong) {
        return (
            <AudioPlayerDefault>
                <h2>Please click on any of the songs above</h2>
            </AudioPlayerDefault>
        )
    }

    return (
        <AudioPlayerContainer>
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
                {/* <audio controls autoPlay ref={audioRef}>
                        <source src={pickedSong.audioFile} />
                    </audio> */}
                <AudioControls
                    onPlayPause={handlePlayPause}
                    onNext={handleNext}
                    onPrevious={handlePrevious}
                    playingState={isPlaying}
                />
            </div>
        </AudioPlayerContainer>
    )
}