import { styled } from "styled-components";

export const NavContainerStyled = styled.div`
  position: fixed;
  height: 100%;
  width: 220px;
  background-color: #121212;
`

export const NavHeadStyled = styled.div`
    display: flex;
    color: white;
`

export const AppLogoContainerStyled = styled.div`
  height: 80px;
  width: 80px;

  > img{
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
`

export const AppNameContainerStyled = styled.div`
  margin: 15px 0 0 0;
  font-family: 'Dela Gothic One', sans-serif;

  > p:nth-child(1) {
    margin: 0;
  }

  > p:nth-child(2) {
    margin: -10px 0  0 0;
  }
`