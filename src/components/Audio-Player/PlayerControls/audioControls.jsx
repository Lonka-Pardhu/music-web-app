import { AudioControlsContainer } from "./audioControls.styled";
import { IoPlayCircleSharp } from "react-icons/io5";
import { IoPauseCircleSharp } from "react-icons/io5";
import { BiSkipNext } from "react-icons/bi";
import { BiSkipPrevious } from "react-icons/bi";


export default function AudioControls() {
    const controlIconsArr = [<BiSkipPrevious key='previous' />, <IoPlayCircleSharp key='play' />, <IoPauseCircleSharp key='pause' />, <BiSkipNext key='next' />];
    return (
        <AudioControlsContainer>
            {controlIconsArr.map((icon, index) => (
                <span key={index} className="react-icon">{icon}</span>
            ))}
        </AudioControlsContainer>
    )
}