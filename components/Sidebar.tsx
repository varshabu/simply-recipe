import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Spacings from '../tokens/Spacings';

type SidebarProps = {
  /**
   * open or closed state of side bar
   */
  open: boolean;
};

const Sidebar = ({ open }: SidebarProps) => {
  return (
    <Ul open={open}>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Recipes</a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a>Categories</a>
        </Link>
      </li>
      <li>
        <Link href="/trivia">
          <a>Food Trivia</a>
        </Link>
      </li>
      <li>
        <Link href="/joke">
          <a>Food Joke</a>
        </Link>
      </li>
    </Ul>
  );
};

export default Sidebar;

const Ul = styled.ul<{ open: boolean }>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  text-transform: uppercase;
  li {
    padding: ${Spacings.medium} 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    text-align: center;
    background-color: white;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: ${Spacings.xxxxxLarge};
    right: 0;
    width: 100%;
    transition: transform 0.3s ease-in-out;
    z-index: 10;
    li {
      font-size: 21px;
      padding: ${Spacings.large} 0;
      border: 1px solid #ffd977;
    }
  }
`;
