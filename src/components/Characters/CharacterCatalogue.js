import React from 'react';
import PropTypes from 'prop-types';
import './Characters.css';

const CharacterCatalogue = ({
  img, name, status, location,
}) => (
  <div className="d-flex card-catalogue">
    <img src={img} alt={name} />
    <div className="info-character-catalogue">
      <h1 className="character-name-cat">{name}</h1>
      {(
        () => {
          if (status === 'Dead') {
            return (
              <div className="status-red">{status}</div>
            );
          } if (status === 'Alive') {
            return (
              <div className="status-green">{status}</div>
            );
          } return (
            <div className="status-gray">{status}</div>
          );
        }
      )()}
      <h3>{location.name}</h3>
    </div>
  </div>
);

CharacterCatalogue.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default CharacterCatalogue;
