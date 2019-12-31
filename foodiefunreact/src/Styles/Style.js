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
    }
    font-size: 1.5rem;
`;

export const StyledButton = styled.button`
    margin-top: 5%;
    margin-bottom: 2%;
    width: 50%;
    font-size: 1.5rem;
    border-radius: 5px;
`;

export const StyledLabel = styled.label`
    display: block;
    margin-bottom: 2%;
    margin-top: 2%;
    text-align: left;
    margin-left: 25%;
`;

export const StyledH1 = styled.h1`
    font-size: 2rem;
    margin: 3%;
`;