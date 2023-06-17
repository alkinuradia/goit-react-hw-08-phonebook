import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
padding: 6px 12px;
    font-size: 14px;
    font-weight: 700;
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    background-color: white;
    outline: none;
    border-radius: 10px;
    :hover,
    :focus {
       color: #8f8c8c;
      background-color: beige;
    }`;

export const StyledNavigation = styled.nav`
  display: flex;
  align-items: baseline;
  gap: 10px;
  font-weight: 500;
  
`;