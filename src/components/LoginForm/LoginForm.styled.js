import styled from 'styled-components';

export const Form = styled.form`
display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
`;

export const Title = styled.title`
font-size: 24px;
    text-align: center;
`;

export const FormLabel = styled.label`
display: flex;
    justify-content: space-between;
`;

export const LabelTitle = styled.span`
font-size: 24px;
    white-space: nowrap;
    margin-right: 20px;
`;

export const Input = styled.input`
height: 35px;
    width: 70%;
    border: 2px solid lightgray;
    border-radius: 6px;
    font-size: 18px;
    font-weight: 500;
`