import styled from "styled-components";

export const AudioControlsContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 240px;  
`
export const AudioControlsWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: -10px;

  > span{
    margin: 0 5px 0 5px;
    font-size: 45px;

    &.previous-icon,
    &.next-icon{
      font-size: 40px;
    }

    > svg {
      cursor:pointer;
    }
  }
  
`
{/* //! Work here */ }
export const SongSliderContainerStyled = styled.div`
  cursor:pointer;
`

export const ProgressBarContainerStyled = styled.div`
  width: 450px;
  height: 4px;
  background-color: aliceblue;
  border-radius: 10px;
  `

export const ProgressBarStyled = styled.div`
  background-color: #f83821;
  height: 100%;
  width: 50%;
  border-radius: 10px;
`
{/* //! Work here */ }
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