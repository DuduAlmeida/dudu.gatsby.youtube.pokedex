// #region Imports

import React, { useEffect, useState } from 'react';
import axios from 'axios';

import PokemonCardComponent from './PokemonCard.component';
import { environment } from '../../environment/environment';

// import styles from '../styles/components/PokemonList.component.scss';

// #endregion Imports

/***
 * O componente que representa o componente com a lista de pokémons da aplicação
 */
const PokemonListComponent = () => {

  // #region States

  const [pokemonList, setPokemonList] = useState([]);

  // #endregion States

  // #region Public Properties

  /***
   * Api url to the get pokemon list
   */
  const url = environment.api.baseUrl + environment.api.pokemon.base;

  // #endregion Public Properties

  // #region Public Methods

  const fetchListPokemonsFromAPI = async () => {
    const res = await axios.get(url);
    setPokemonList(res.data['results']);
  }

  // #endregion Public Methods

  // #region OnInit

  fetchListPokemonsFromAPI();

  // #endregion OnInit

  return (
    <div className="row">
      {
        pokemonList.map((pokemon, index) => {
          return <PokemonCardComponent
            key={index}
            name={pokemon.name}
            url={pokemon.url}
          ></PokemonCardComponent>
        })
      }
    </div>
  );
}

export default PokemonListComponent;