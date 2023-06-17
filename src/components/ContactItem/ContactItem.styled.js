import styled from 'styled-components';

export const Item = styled.li`
   display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 10px 20px;
    /* &:not(:last-child) {
        margin-bottom: 30px;
    } */
   
`;

export const ContactNumber = styled.a`
  width: 50%;
    text-decoration: none;
    font-size: 16px;
    color: #000;
    &:hover {
    color: grey;
    text-decoration: underline;
  }
    
`


export const Button = styled.button`
 
    padding:10px;
    width: 100px;
  font-weight: 400;
  font-size: 15px;
  line-height: 1.25;
  background-color: skyblue;
  border:none;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
  
`;