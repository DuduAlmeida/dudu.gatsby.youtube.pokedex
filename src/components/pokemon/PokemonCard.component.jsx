// #region Imports

import React, { useState } from 'react';

// import styles from '../styles/components/PokemonCard.component.scss';

// #endregion Imports

/***
 * O componente que representa o card de cada pokémon da aplicação
 */
const PokemonCardComponent = (props) => {

  // #region States

  const [name, setName] = useState(!!props.name ? props.name : '');
  const [url, setUrl] = useState(!!props.url ? props.url : '');
  const [pokemonIndex, setPokemonIndex] = useState(url.split('pokemon/')[1].split('/')[0]);
  const [imageUrl, setImageUrl] = useState(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonIndex}.png`);

  // #endregion States

  return (
    <div className="col-md-3 col-sm-6 mb-5">
      <div className="card">
        <h5 className="card-header">{pokemonIndex}</h5>

        <div className="card-body">
          <h6 className="card-title mx-auto">{
            name
              .toLowerCase()
              .split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.substring(1))
              .join(' ')
          }</h6>
        </div>
      </div>
    </div>
  );
}

export default PokemonCardComponent;