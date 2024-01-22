/* eslint-disable react/prop-types */
import { AudioControlsContainerStyled } from "./audioControls.styled";
import { IoPlayCircleSharp, IoPauseCircleSharp } from "react-icons/io5";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
// import { useState } from "react";


export default function AudioControls({ onPlayPause, onNext, onPrevious, playingState }) {

    return (
        <AudioControlsContainerStyled>
            <span className="react-icon">
                <BiSkipPrevious onClick={onPrevious} />
            </span>
            {playingState ? (
                <span className="react-icon">
                    <IoPauseCircleSharp key='pause' onClick={onPlayPause} />
                </span>
            ) : (
                <span className="react-icon">
                    <IoPlayCircleSharp key='play' onClick={onPlayPause} />
                </span>
            )}
            <span className="react-icon">
                <BiSkipNext onClick={onNext} />
            </span>


        </AudioControlsContainerStyled>
    )
}