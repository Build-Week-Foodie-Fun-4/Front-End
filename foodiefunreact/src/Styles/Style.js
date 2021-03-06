import styled from 'styled-components';

export const StyledFormDiv = styled.div`
    // border: 1px solid red;
    width: 50%;
    margin: 0 auto;
    margin-top: 2%;
    margin-bottom: 2%;
`;

export const StyledInput= styled.input`
    width: 50%;
    line-height: 30px;
    ::placeholder 
    {
       padding: 2%;
       font-size: 1rem;
       font-family: 'Roboto', sans-serif;
    }
    font-size: 1.5rem;
    font-family: 'Roboto', sans-serif;
`;

export const StyledButton = styled.button`
    margin-top: 5%;
    margin-bottom: 2%;
    width: 50%;
    font-size: 1.5rem;
    border-radius: 5px;
    font-family: 'Roboto', sans-serif;
    &:hover
    {
        background: gold;
    }
`;

export const StyledLabel = styled.label`
    display: block;
    margin-bottom: 2%;
    margin-top: 2%;
    text-align: left;
    margin-left: 25%;
    font-family: 'Roboto', sans-serif;
    color: white;
`;

export const StyledH1 = styled.p`
    font-size: 2rem;
    margin: 3%;
    font-family: 'Monoton', cursive;
    color: white;
`;

export const StyledCard = styled.div`
    border: 5px dashed gray;
    width: 20%;
    background: lightgray;
    &:hover
    {
        background: gold;
        cursor: pointer;
    }
`;

export const StyledContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

export const StyledText = styled.p`
    font-family: 'Roboto', sans-serif;
    color: black;
    font-size: 1.5rem;
`;