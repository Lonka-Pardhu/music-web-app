import styled from 'styled-components';

export const SearchFieldWrapper = styled.div`
    margin: 20px 0 0 280px;

    .react-icon{
      color:white;
      font-size: 18px;
    }
    .search-field-container{
      display: flex;
      height: 45px;
      align-items: center;
      justify-content: space-around;
      background-color: #1A1A1A;
      width: 350px;
      border-radius: 50px;
      margin: 0 20px;
    }
    
    .search-field-container > input{
      width: 240px;
      height: 30px;
      background-color: #1A1A1A;
      color: white;
      font-family: 'Poppins', sans-serif;
      border: none;
    }
    .search-field::placeholder {
      font-family: 'Poppins', sans-serif;
      font-size: 12px;
      font-weight: 300;
      color: white;
    }
    .search-field:focus{
      outline: none;
    }
`