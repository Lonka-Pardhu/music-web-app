/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react"
import { AudioPlayerContainerStyled, AudioPlayerWrapperStyled, ActiveSongWrapperStyled, ActiveSongImageContainerStyled, ActiveSongDetailsStyled } from "./audioPlayer.styled";
import { AudioPlayerDefaultStyled } from "./audioPlayerDefault.styled";
import { AudioControlsContainerStyled, AudioControlsWrapperStyled, VolumeControlContainerStyled, VolumeControlBar, SongSliderContainerStyled, ProgressBarContainerStyled, ProgressBarStyled } from "./audioControls.styled";
import { IoPlayCircleSharp, IoPauseCircleSharp } from "react-icons/io5";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { MdVolumeUp } from "react-icons/md";

export default function AudioPlayer({ pickedSong, isPlaying, setIsPlaying }) {

    const [audioMetaData, setAudioMetaData] = useState(false);
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
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
    }
    const handleNext = () => {
        console.log('next clicked')
    }
    const handlePrevious = () => {
        console.log('previous clicked')
    }

    const handleMetaDataLoad = () => {
        setAudioMetaData(true);
        const filteredDuration = Math.floor(audioRef.current.duration)
        setDuration(filteredDuration);
    }
    const handleTimeUpdate = () => {
        const filteredTime = Math.floor(audioRef.current.currentTime)
        setCurrentTime(filteredTime);
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

                <audio autoPlay onTimeUpdate={handleTimeUpdate} onLoadedMetadata={handleMetaDataLoad} style={{ display: "none" }} ref={audioRef}>
                    <source src={pickedSong.audioFile} />
                </audio>

                <AudioControlsContainerStyled>
                    <AudioControlsWrapperStyled>
                        <span className="previous-icon">
                            <BiSkipPrevious onClick={handlePrevious} />
                        </span>
                        {isPlaying ? (
                            <span>
                                <IoPauseCircleSharp key='pause' onClick={handlePlayPause} />
                            </span>
                        ) : (
                            <span>
                                <IoPlayCircleSharp key='play' onClick={handlePlayPause} />
                            </span>
                        )}
                        <span className="next-icon">
                            <BiSkipNext onClick={handleNext} />
                        </span>
                    </AudioControlsWrapperStyled>

                    <SongSliderContainerStyled>
                        {audioMetaData && (
                            <>
                                <p>{currentTime}</p>
                                <ProgressBarContainerStyled>
                                    <ProgressBarStyled></ProgressBarStyled>
                                </ProgressBarContainerStyled>
                                <p>{duration}</p>
                            </>
                        )}
                    </SongSliderContainerStyled>

                </AudioControlsContainerStyled>
                <VolumeControlContainerStyled>
                    <span className="react-icon"><MdVolumeUp /></span>
                    <VolumeControlBar>

                    </VolumeControlBar>
                </VolumeControlContainerStyled>
            </AudioPlayerWrapperStyled>
        </AudioPlayerContainerStyled>
    )
}