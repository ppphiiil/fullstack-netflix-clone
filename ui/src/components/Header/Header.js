import React from 'react';
import Navbar from '../Navbar/Navbar';
import SearchField from '../SearchField/SearchField';
import './Header.css';
import '../SearchField/SearchField.css';

export default function Header() {
  return (
    <div className="header-container">
      <Navbar />
      <SearchField />
    </div>
  );
}
