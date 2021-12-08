import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: rgba(76, 175, 80, 0);
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 0 3vw 0 3vw;
  align-items: center;
`;

export const NavLink = styled(Link)`
  color: #27311F;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-size: 1rem;
  cursor: pointer;
  &.active {
    color: #718561;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #808080;
  @media screen and (max-width: 1050px) {
    display: block;
    top: 0px;
    right: 0;
    font-size: 1.8rem;
    cursor: pointer;
}
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 1050px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  padding-left: 1rem;
  @media screen and (max-width: 1050px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  font-size: 18px;
  background: ${props => props.black ? "#191A1A" : "#27311F"};
  color: ${props => props.black ? "#EDF0EB" : "white"};
  width: 200px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  text-decoration: none;
`;

export const NavIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`