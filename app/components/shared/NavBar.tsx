import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: right;
  padding: 10px 20px;
  margin-top: 20px;
`;

const NavLink = styled.a`
  text-decoration: none;
  margin: 10px 30px;
  color: #fff;
  border: 2px solid transparent;
  padding: 10px 20px;

  &:hover {
    border: 2px solid #fff;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
  }
`;

export const NavBar = () => {
  return (
    <Nav>
      <NavLink href="https://www.coinlore.com/cryptocurrency-data-api" target="_blank">
        API Documentation
      </NavLink>
      <NavLink href="https://github.com/joelsantz/crypto-million" target="_blank">
        Project Repository
      </NavLink>
    </Nav>
  );
};
