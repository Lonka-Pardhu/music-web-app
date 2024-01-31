/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react"
import { AudioPlayerContainerStyled, AudioPlayerWrapperStyled, ActiveSongWrapperStyled, ActiveSongImageContainerStyled, ActiveSongDetailsStyled } from "./audioPlayer.styled";
import { AudioPlayerDefaultStyled } from "./audioPlayerDefault.styled";
import { AudioControlsContainerStyled, AudioControlsWrapperStyled, VolumeControlContainerStyled, VolumeControlBarStyled, VolumeChangeStyled, SongSliderContainerStyled, ProgressBarContainerStyled, ProgressBarStyled } from "./audioControls.styled";
import { IoPlayCircleSharp, IoPauseCircleSharp } from "react-icons/io5";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { MdVolumeUp } from "react-icons/md";

export default function AudioPlayer({ pickedSong, isPlaying, setIsPlaying }) {

    const [audioMetaData, setAudioMetaData] = useState(false);
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const audioRef = useRef(null);
    const progressBarRef = useRef(null);
    const songBarRef = useRef(null);
    const volumeControlBarRef = useRef(null);
    const volumeChangeRef = useRef(null);

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
        const totalSeconds = Math.floor(audioRef.current.duration)
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        setDuration({ minutes, seconds });
    }

    const handleTimeUpdate = () => {
        const currentSeconds = Math.floor(audioRef.current.currentTime);
        const minutes = Math.floor(currentSeconds / 60);
        const seconds = currentSeconds % 60;
        const progressBarWidth = (audioRef.current.currentTime / audioRef.current.duration) * 100;
        if (progressBarRef.current) {
            progressBarRef.current.style.width = `${progressBarWidth}%`;
        }
        setCurrentTime({ minutes, seconds });
    }

    const handleProgressBarClick = (e) => {
        const clickPosition = e.pageX - songBarRef.current.getBoundingClientRect().left;
        const clickPositionInPercent = (clickPosition / songBarRef.current.offsetWidth) * 100;

        //we get one percentage of seconds of current song from its total duration by dividing it with 100
        //we multiply it with the clicked position percentage of progress bar to get the seconds of song at clicked position
        const clickTimeInSeconds = (audioRef.current.duration / 100) * clickPositionInPercent;

        audioRef.current.currentTime = clickTimeInSeconds;
        // tho the OnTimeUpdateEvent event calls the below function on every current time change
        // calling the time update handling function on progress bar click so that there is no delay in updating the UI
        handleTimeUpdate();
    }

    const handleVolumeChange = (e) => {
        const volumeClickPosition = e.pageX - volumeControlBarRef.current.getBoundingClientRect().left;
        const volumeChangeInPercentage = (volumeClickPosition / volumeControlBarRef.current.offsetWidth) * 100;
        const volumeChangeValue = 0.01 * volumeChangeInPercentage;
        console.log(volumeChangeValue);
        audioRef.current.volume = volumeChangeValue;
        console.log(audioRef.current.volume)
        volumeChangeRef.current.style.width = `${volumeChangeInPercentage}%`

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
                                <p>{currentTime.minutes}:{currentTime.seconds < 10 ? '0' : ''}{currentTime.seconds}</p>
                                <ProgressBarContainerStyled ref={songBarRef} onClick={handleProgressBarClick}>
                                    <ProgressBarStyled ref={progressBarRef}></ProgressBarStyled>
                                </ProgressBarContainerStyled>
                                <p>{duration.minutes}:{duration.seconds < 10 ? '0' : ''}{duration.seconds}</p>
                            </>
                        )}
                    </SongSliderContainerStyled>

                </AudioControlsContainerStyled>
                <VolumeControlContainerStyled>
                    <span className="react-icon"><MdVolumeUp /></span>
                    <VolumeControlBarStyled ref={volumeControlBarRef} onClick={handleVolumeChange}>
                        <VolumeChangeStyled ref={volumeChangeRef}></VolumeChangeStyled>
                    </VolumeControlBarStyled>
                </VolumeControlContainerStyled>
            </AudioPlayerWrapperStyled>
        </AudioPlayerContainerStyled>
    )
}