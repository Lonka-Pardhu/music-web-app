import styled from 'styled-components';

export const SongsListWrapperStyled = styled.div`
  margin:30px 0 120px 300px;
`

export const SongContainerStyled = styled.div`
  width: 450px;
  height: 60px;
  margin-top: 20px;
  padding: 0 20px 0 20px;
  background-color: #121212;
  color: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.3s ease;
  cursor: pointer;

  &:hover{
  background-color: #1A1A1A;
}
`

export const SongDetailsContainerStyled = styled.div`
  align-items: center;
  display: flex;
`
export const SongDurationContainerStyled = styled.div`
  > p{
  font-size: 13px;
  font-weight: 300;
}
`

export const SongImgContainerStyled = styled.div`
  width: 40px;
  height: 40px;

  > img{
  border-radius: 3px;
  width: 100%;
  height: 100%;
}
`
export const SongNameArtistStyled = styled.div`
  margin-left: 15px;

  > p:nth-child(1){
    font-size: 14px;
    margin: 0;
  }
  > p:nth-child(2){
    font-size: 12px;
    color: #b3b2b2;
    margin: 0;
}
`