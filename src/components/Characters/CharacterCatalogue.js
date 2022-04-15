import React from 'react';
import PropTypes from 'prop-types';
import './Characters.css';

const CharacterCatalogue = ({
  img, name, status, location, onClickEvent, gender, species, type,
}) => (
  <div
    className="d-flex card-catalogue"
    onClick={() => {
      onClickEvent({
        img, name, status, location, gender, species, type,
      });
    }}
    role="button"
    tabIndex={-1}
    onKeyUp={() => {}}
  >
    <img src={img} alt={name} />
    <div className="d-flex info-character-catalogue">
      <h1 className="d-flex character-name-cat white">{name}</h1>
      {(
        () => {
          if (status === 'Dead') {
            return (
              <div className="status-red white">
                <p>{status}</p>
              </div>
            );
          } if (status === 'Alive') {
            return (
              <div className="status-green white">
                <p>{status}</p>
              </div>
            );
          } return (
            <div className="status-gray white">
              <p>{status}</p>
            </div>
          );
        }
      )()}
      <h3 className="d-flex white location">
        Last location known:
        <br />
        {location.name}
      </h3>
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
  onClickEvent: PropTypes.func.isRequired,
  gender: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default CharacterCatalogue;
