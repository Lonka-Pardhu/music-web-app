import styled from 'styled-components';

export const AudioPlayerContainer = styled.div`

    width: 100%;
    background-color: #121212;
    position: fixed;
    bottom: 0;
    left:0;
    color: white;

  .audio-player-wrapper{
    display: flex;
    align-items: center;
    margin: 20px 0 0 140px; /*eidt*/
  }
  .active-song-details-wrap{
    display: flex;
    align-items: center;
    margin-right:120px;
  }
  .active-song-details{
    margin-left: 15px;
  }
  .active-song-details > p:nth-child(1){
    font-size: 14px;
    margin: 0;
  }
  .active-song-details > p:nth-child(2){
    font-size: 12px;
    color: #b3b2b2;
    margin: 0;
  }
  .active-song-image-container{
    width: 60px;
    height: 60px;
  }
  .active-song-image-container > img{
    border-radius: 5px;
    width: 100%;
    height: 100%;
  }
`