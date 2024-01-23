/* eslint-disable react/prop-types */
import { AudioControlsContainerStyled, AudioControlsWrapperStyled, VolumeControlContainerStyled, VolumeControlBar, SongSliderContainerStyled, ProgressBarContainerStyled, ProgressBarStyled } from "./audioControls.styled";
import { IoPlayCircleSharp, IoPauseCircleSharp } from "react-icons/io5";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { MdVolumeUp } from "react-icons/md";
// import { useState } from "react";

export default function AudioControls({ onPlayPause, onNext, onPrevious, playingState, audioRef, audioMetaData }) {

    return (
        <>
            <AudioControlsContainerStyled>
                <AudioControlsWrapperStyled>
                    <span className="previous-icon">
                        <BiSkipPrevious onClick={onPrevious} />
                    </span>
                    {playingState ? (
                        <span>
                            <IoPauseCircleSharp key='pause' onClick={onPlayPause} />
                        </span>
                    ) : (
                        <span>
                            <IoPlayCircleSharp key='play' onClick={onPlayPause} />
                        </span>
                    )}
                    <span className="next-icon">
                        <BiSkipNext onClick={onNext} />
                    </span>
                </AudioControlsWrapperStyled>

                <SongSliderContainerStyled>
                    {audioMetaData && (
                        <>
                            <p>{audioRef.current.currentTime}</p>
                            <ProgressBarContainerStyled>
                                <ProgressBarStyled></ProgressBarStyled>
                            </ProgressBarContainerStyled>
                            <p>{audioRef.current.duration}</p>
                        </>
                    )}
                </SongSliderContainerStyled>

            </AudioControlsContainerStyled>
            <VolumeControlContainerStyled>
                <span className="react-icon"><MdVolumeUp /></span>
                <VolumeControlBar>

                </VolumeControlBar>
            </VolumeControlContainerStyled>
        </>
    )
}