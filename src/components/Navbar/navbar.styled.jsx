import { styled } from "styled-components";

export const NavContainer = styled.div`
    position: fixed;
    height: 100vh;
    width: 220px;
    background-color: #121212;

.nav-head{
    display: flex;
    color: white;
  }
  .app-logo-container{
    height: 80px;
    width: 80px;
  }
  .main-logo{
    height: 100%;
    width: 100%;
    animation: spin 5s linear infinite;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .app-name-container {
    margin: 15px 0 0 0;
    font-family: 'Dela Gothic One', sans-serif;
  }
  .app-name-container > p:nth-child(1) {
    margin: 0;
  }
  .app-name-container > p:nth-child(2) {
    margin: -10px 0  0 0;
  }
  .nav-list-container{
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 20px 0px 0px 20px;
  }
  .nav-list{
    display: flex;
    align-items: center;
    height: 40px;
    width: 150px;
    border-radius: 5px;
  }
  
  .nav-list:hover span,
  .nav-list:hover p {
    color: #F83821;
    letter-spacing: 2px; 
  }
  .nav-list:hover{
    background-color: #1A1A1A;
  }
  .nav-list{
    transition: background-color 0.3s ease;
    cursor: pointer;
  }
  .react-icon{
    color:white;
    font-size: 18px;
  }
  .nav-list > p,span{
    margin: 0 0 0 20px;
    font-size: 13px;
    color: white;
    transition: color 0.5s ease,letter-spacing 0.3s ease;
  }
  
  /* Nav user playlist */
  .nav-user-playlist-container{
    margin: 40px 0 0 30px;
  }
  .user-playlist-heading{
    display: flex;
    align-items: center;
    font-size: 16px;
    color: white;
    font-weight: 600;
  }
  .user-playlists-container{
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .u-playlist{
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .u-playlist > p,span{
    margin: 0 0 0 10px;
    font-size: 13px;
    color: white;
  }
`