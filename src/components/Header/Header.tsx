import React from 'react';

import './header.css';

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => (
  <header>
    <div className='wrapper'>
      <h1>{title}</h1>
    </div>
  </header>
);
