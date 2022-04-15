import React from 'react';
import PropTypes from 'prop-types';
import './Characters.css';

const CharacterCatalogue = ({
  img, name, status, location, gender, species,
}) => (
  <div className="d-flex card-catalogue">
    <img src={img} alt={name} />
    <div className="d-flex info-character-catalogue">
      <h1 className="d-flex character-name-cat white">{name}</h1>
      {(
        () => {
          if (status === 'Dead') {
            return (
              <div className="status-red white">{status}</div>
            );
          } if (status === 'Alive') {
            return (
              <div className="status-green white">{status}</div>
            );
          } return (
            <div className="status-gray white">{status}</div>
          );
        }
      )()}
      <h3 className="d-flex location white">{gender}</h3>
      <h3 className="d-flex location white">{species}</h3>
      <h3 className="d-flex white location">{location.name}</h3>

    </div>
  </div>
);

CharacterCatalogue.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  location: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  species: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
};

export default CharacterCatalogue;
