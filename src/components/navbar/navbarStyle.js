import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
    height: 80px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    font-size: 1rem;
    top: 0;
    z-index: 10;
`;

export const NavContainer = styled.div`
    height: 80px;
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
`;

export const NavLogo = styled(LinkR)`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.4rem;
    font-weight: bold;
    text-decoration: none;
    color: #000;
    cursor: pointer;
`;

export const NavMenu = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLink = styled(LinkS)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: 1rem;
    color: #000;
    text-decoration: none;
    padding: 0 1rem;
    cursor: pointer;
`;

export const NavConnect = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NavButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 15px
`;

export const NavBtn = styled(LinkR)`
    padding: 10px 20px;
    background: #00b4d8;
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 20px;
    text-decoration: none;
`