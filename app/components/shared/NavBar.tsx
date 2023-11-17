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
  margin: 0 10px;

  &:hover {
    text-decoration: underline;
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
