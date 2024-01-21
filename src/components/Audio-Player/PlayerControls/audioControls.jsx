/* eslint-disable react/prop-types */
import { AudioControlsContainer } from "./audioControls.styled";
import { IoPlayCircleSharp } from "react-icons/io5";
import { IoPauseCircleSharp } from "react-icons/io5";
import { BiSkipNext } from "react-icons/bi";
import { BiSkipPrevious } from "react-icons/bi";


export default function AudioControls({ onPlay, onPause, onNext, onPrevious }) {
    const controlIconsArr = [
        <BiSkipPrevious key='previous' onClick={onPrevious} />,
        <IoPlayCircleSharp key='play' onClick={onPlay} />,
        <IoPauseCircleSharp key='pause' onClick={onPause} />,
        <BiSkipNext key='next' onClick={onNext} />
    ];

    return (
        <AudioControlsContainer>
            {controlIconsArr.map((icon, index) => (
                <span key={index} className="react-icon">{icon}</span>
            ))}
        </AudioControlsContainer>
    )
}