/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react"
import { AudioPlayerContainerStyled, AudioPlayerWrapperStyled, ActiveSongWrapperStyled, ActiveSongImageContainerStyled, ActiveSongDetailsStyled } from "./audioPlayer.styled";
import { AudioPlayerDefaultStyled } from "./audioPlayerDefault.styled";
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
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(isPlaying => !isPlaying)
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
            <AudioPlayerDefaultStyled>
                <h2>Please click on any of the songs above</h2>
            </AudioPlayerDefaultStyled>
        )
    }

    return (
        <AudioPlayerContainerStyled>
            <AudioPlayerWrapperStyled>
                <ActiveSongWrapperStyled>
                    <ActiveSongImageContainerStyled>
                        <img src={pickedSong.songImage} alt="albumImage" />
                    </ActiveSongImageContainerStyled>
                    <ActiveSongDetailsStyled>
                        <p>{pickedSong.songName}</p>
                        <p>{pickedSong.artist}</p>
                    </ActiveSongDetailsStyled>
                </ActiveSongWrapperStyled>
                <audio style={{ display: "none" }} ref={audioRef}>
                    <source src={pickedSong.audioFile} />
                </audio>
                <AudioControls
                    onPlayPause={handlePlayPause}
                    onNext={handleNext}
                    onPrevious={handlePrevious}
                    playingState={isPlaying}
                />
            </AudioPlayerWrapperStyled>
        </AudioPlayerContainerStyled>
    )
}