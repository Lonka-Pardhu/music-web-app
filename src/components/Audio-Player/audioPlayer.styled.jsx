import styled from 'styled-components';

export const AudioPlayerContainerStyled = styled.div`
  width: 100%;
  height: 90px;
  background-color: #121212;
  position: fixed;
  bottom: 0;
  left: 0;
  color: white;
`;

export const AudioPlayerWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* margin: 20px 0 0 140px; */
`

export const ActiveSongWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  /* margin-right: 120px; */
`;

export const ActiveSongImageContainerStyled = styled.div`
  width: 60px;
  height: 60px;

  > img {
    border-radius: 5px;
    width: 100%;
    height: 100%;
  }
`;

export const ActiveSongDetailsStyled = styled.div`
  margin-left: 15px;

  > p:nth-child(1) {
    font-size: 14px;
    margin: 0;
  }

  > p:nth-child(2) {
    font-size: 12px;
    color: #b3b2b2;
    margin: 0;
  }
`;