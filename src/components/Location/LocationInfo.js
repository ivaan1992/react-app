import React from 'react';
import PropTypes from 'prop-types';

const LocationInfo = ({
  name, type, dimension, residents, img,
}) => (
  <div>
    <h1>{name}</h1>
    <p>{type}</p>
    <p>{dimension}</p>
    <img src={img} alt={residents} />
  </div>
);

LocationInfo.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  dimension: PropTypes.string.isRequired,
  residents: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default LocationInfo;
