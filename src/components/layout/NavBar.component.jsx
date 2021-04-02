// #region Imports

import React from 'react';

import '../../styles/components/NavBar.component.scss';
// import styled from 'styled-components';

// #endregion Imports

/***
 * O componente que representa 
 */
const NavBarComponent = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <a href="https://pokeapi.co/api/v2/pokemon" className="navbar-brand col-sm-3 col-md-2 mr-0 align-item-center">Pokedex</a>
    </nav>
  );
}

export default NavBarComponent;