import styled from "styled-components";

export const AudioControlsContainerStyled = styled.div`
  > span {
    color:white;
    font-size: 45px;
    cursor:pointer;
  }
`
// export const SongSlider

export const VolumeControlContainerStyled = styled.div`
  display: flex;
  align-items: center;

  > span{
    margin-top: 5px;
  }
`

export const VolumeControlBar = styled.div`
  height: 3px;
  width: 100px;
  background-color: aliceblue;
  border-radius: 5px;
  margin: 0 4px 0 4px;
`