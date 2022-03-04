import React, { FC } from 'react';
import styled from 'styled-components';
import Spacings from '../tokens/Spacings';
import Burger from './Burger';

const Navbar: FC = () => {
  return (
    <Nav>
      <StyledHeader>SimplyRecipe</StyledHeader>
      <Burger />
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  width: 100%;
  height: ${Spacings.xxxxxLarge};
  padding: 0 ${Spacings.large};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #ffd977;
  background-color: white;
  position: sticky;
  top: 0;
  right: 0;
  z-index: 100;
`;

const StyledHeader = styled.h1`
  font-weight: bolder;
  font-size: ${Spacings.xLarge};
  text-shadow: 5px 2px 8px #ffd977;
`;
