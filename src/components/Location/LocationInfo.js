import React from 'react';
import PropTypes from 'prop-types';

const LocationInfo = ({
  name, type, dimension, residents,
}) => (
  <div>
    <h1>{name}</h1>
    <p>{type}</p>
    <p>{dimension}</p>
    <img src={residents} alt={name} />
  </div>
);

LocationInfo.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  dimension: PropTypes.string.isRequired,
  residents: PropTypes.string.isRequired,
  // image: PropTypes.string.isRequired,
};

export default LocationInfo;
