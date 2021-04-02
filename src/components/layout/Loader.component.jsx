// #region Imports

import React from 'react';

import styled from 'styled-components';

import spinner from '../../../static/loader.gif';

// #endregion Imports

// #region Styled Components

const Loader = styled.img`
  width: 5rem;
  height: 5rem;
`;

// #endregion Styled Components

/***
 * O componente que representa o loader da aplicação
 */
const LoaderComponent = () => {
  return (
    <Loader src={spinner} alt="O loader da aplicação" className="card-img-top rounded mx-auto d-block mt-2" />
  );
}

export default LoaderComponent;