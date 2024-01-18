import styled from 'styled-components';

export const SongsListWrapper = styled.div`
    margin:30px 0 120px 300px;

.song-container{
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
}
.song-container:hover{
  background-color: #1A1A1A;
}
.song-coverImg-container{
  width: 40px;
  height: 40px;
}
.song-coverImg-container > img{
  border-radius: 3px;
  width: 100%;
  height: 100%;
}
.song-details-wrap-one{
  align-items: center;
  display: flex;
}
.song-name-artist{
  margin-left: 15px;
}
.song-name-artist > p:nth-child(1){
  font-size: 14px;
  margin: 0;
}
.song-name-artist > p:nth-child(2){
  font-size: 12px;
  color: #b3b2b2;
  margin: 0;
}
.song-duration-container > p{
  font-size: 14px;
}
`