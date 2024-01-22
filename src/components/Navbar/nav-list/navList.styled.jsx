import { styled } from "styled-components";

export const NavListContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 20px 0px 0px 20px;
`

export const NavListStyled = styled.div`

  display: flex;
  align-items: center;
  height: 40px;
  width: 150px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  cursor: pointer;

    &:hover {
    background-color: #1A1A1A;
  }

  > p,span {
      margin: 0 0 0 20px;
      font-size: 13px;
      color: white;
      transition: color 0.5s ease, letter-spacing 0.3s ease;
    }

    > span{
      color: white;
      font-size: 18px;
    }


  &:hover > p,
  &:hover > span {
    color: #f83821;
    letter-spacing: 2px;
  }
`;

export const UserPlaylistContainerStyled = styled.div`
    margin: 40px 0 0 30px;

`
export const UserPlaylistHeadingStyled = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
    color: white;
    font-weight: 600;
`

export const UserPlayListWrapperStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const UserPlaylistStyled = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    
    > p,span{
    margin: 0 0 0 10px;
    font-size: 13px;
    color: white;
  }

  >span{
    font-size: 16px;
  }
`