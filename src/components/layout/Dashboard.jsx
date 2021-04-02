// #region Imports

import React from 'react';

import PokemonList from '../pokemon/PokemonList.component';

// import styles from '../styles/components/Dashboard.component.scss';

// #endregion Imports

/***
 * O componente que representa o dashboard da aplicação
 */
const DashboardComponent = () => {
  return (
    <div className="row">
      <div className="col">

        <PokemonList></PokemonList>
      </div>
    </div>
  );
}

export default DashboardComponent;