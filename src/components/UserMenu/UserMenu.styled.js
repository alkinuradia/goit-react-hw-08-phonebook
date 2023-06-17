import styled from 'styled-components';

export const StyledUserMenu = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;
  font-weight: 500;
  `;
export const LogoutBtn = styled.button`
padding: 6px 12px;
font-size: 14px;
font-weight: 700;
color: black;
text-decoration: none;
text-transform: uppercase;
background-color: white;
border: 1px solid black;
outline: none;
border-radius: 10px;
    :hover,
    :focus {
     color: #8f8c8c;
      background-color: beige;
    border: 1px solid skyblue;
    }
`;