import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 0 16px;
  .login_wrap {
    font-weight: 700;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 2px solid lightgray;
  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 10px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  &.active {
    color: white;
    background-color: darkslategray;
    border-bottom: 4px solid greenyellow;
  }
`;