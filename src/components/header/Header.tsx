import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderList = styled.ul`
  display: flex;
  list-style: none;
  li a, .header li a:visited{
    padding: 10px;
    text-decoration: none;
    color: #FFF;
    font-size: 20px;
  }
  li a:hover{
      font-size: 22px;
  }
`;

export default function Header() {
  return(
    <nav className='header'>
      <HeaderList>
        <li>
          <Link to="/" className='headerLink'>Home</Link>
        </li>
        <li>
          <Link to="/users">About</Link>
        </li>    
        <li>
          <Link to="/posts">Posts</Link>
        </li>    
      </HeaderList>
    </nav>  
  );
}