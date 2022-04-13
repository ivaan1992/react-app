import React from 'react';
import PropTypes from 'prop-types';

const EpisodeInfo = ({
  name, airDate, characters, episode,
}) => (
  <div>
    <h1>{name}</h1>
    <h4>{airDate}</h4>
    <img src={characters} alt={name} />
    <p>{episode}</p>
  </div>
);

EpisodeInfo.propTypes = {
  name: PropTypes.string.isRequired,
  airDate: PropTypes.string.isRequired,
  characters: PropTypes.string.isRequired,
  episode: PropTypes.string.isRequired,
};

export default EpisodeInfo;
