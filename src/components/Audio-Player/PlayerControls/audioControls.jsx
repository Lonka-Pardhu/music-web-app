/* eslint-disable react/prop-types */
import { AudioControlsContainer } from "./audioControls.styled";
import { IoPlayCircleSharp, IoPauseCircleSharp } from "react-icons/io5";
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
// import { useState } from "react";


export default function AudioControls({ onPlayPause, onNext, onPrevious, playingState }) {

    const playPauseIcon = playingState ? (
        <IoPlayCircleSharp key='play' onClick={onPlayPause} />
    ) : (
        <IoPauseCircleSharp key='pause' onClick={onPlayPause} />);

    const controlIconsArr = [
        <BiSkipPrevious key='previous' onClick={onPrevious} />,
        playPauseIcon,
        <BiSkipNext key='next' onClick={onNext} />
    ];

    return (
        <AudioControlsContainer>
            {controlIconsArr.map((icon, index) =>
                <span key={index} className="react-icon">{icon}</span>
            )}
        </AudioControlsContainer>
    )
}