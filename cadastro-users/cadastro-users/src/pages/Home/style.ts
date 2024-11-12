import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    padding-top: 50px;
    flex-direction: column;
    
`;

export const Form = styled.form`
    display: flex;
    padding: 30px;
    border-radius: 30px;
    background-color:#4180ab;
    flex-direction: column;
    gap: 20px;
    width: 500px;
    max-width: 50%;
    margin-bottom: 20px;
`;

export const Title = styled.h1`
    font-size: 30px;
    color: #FFFFFF;
    text-align: center;
`;

export const TextInput = styled.input`
    border: 1px solid #8ab3cf;
    border-radius: 50px;
    height: 40px;
    background-color: #e4ebf0;
    color: #FFFFFF;
    font-size: 16px;
    padding-left: 20px;
    padding-right: 20px;
    outline: none;
`;

export const SignUpButton = styled.button`
    border-radius: 30px;
    background: #ffffff;
    height: 40px;
    border: none;
    font-weight: bold;
    cursor: pointer;
    color: #4180ab;
    font-size: 14px;

    &:hover {
        background-color: #bdd1de;
        transition: all 300ms;
    }
`;

export const InfoContainer =  styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #4180ab;
    margin: 10px;
    padding: 10px;
    width: 500px;
    border-radius: 30px;
    flex-direction: row;
`;

export const TextContainer =  styled.div`
    width: 80%;
    padding: 15px;
`;

export const InfoText = styled.p`
    color: #FFFFFF;
    font-weight: bold;
`;

export const Span = styled.span`
    font-weight: normal;
`;

export const InfoButton = styled.button`
    width: 20%;
    padding: 15px;
    border: none;
    background-color: transparent;
    cursor: pointer;

    &:hover{
        opacity: 0.5;
    }
`;

export const ButtonImg = styled.img`
    width: 100%;
`;