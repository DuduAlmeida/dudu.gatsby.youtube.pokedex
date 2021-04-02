// #region Imports

import React, { useState } from 'react';

import styled from 'styled-components';

import LoaderComponent from '../layout/Loader.component';

// import styles from '../styles/components/PokemonCard.component.scss';

// #endregion Imports

// #region Styled Components

const Sprite = styled.img`
  width: 5rem;
  height: 5rem;
  /* display: none; */
`;

// #endregion Styled Components

/***
 * O componente que representa o card de cada pokémon da aplicação
 */
const PokemonCardComponent = (props) => {

  // #region States

  const [isLoadingImage, setIsLoadingImage] = useState(true);
  const [url, setUrl] = useState(!!props.url ? props.url : '');
  const [name, setName] = useState(!!props.name ? props.name : '');
  const [pokemonIndex, setPokemonIndex] = useState(url.split('pokemon/')[1].split('/')[0]);
  const [imageUrl, setImageUrl] = useState(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonIndex}.png`);

  // #endregion States

  return (
    <div className="col-md-3 col-sm-6 mb-5">
      <div className="card">
        <h5 className="card-header">{pokemonIndex}</h5>

        {
          !!isLoadingImage ? (
            <>
              <LoaderComponent></LoaderComponent>
            </>
          ) : null
        }

        <Sprite
          className="card-img-top rounded mx-auto mt-2"
          src={imageUrl}
          alt={name + 'Pokémon Image'}
          onLoad={() => setIsLoadingImage(false)}
          style={
            !!isLoadingImage ? { display: 'none' } : null
          }
        ></Sprite>

        <div className="card-body">
          <h6 className="card-title">{
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