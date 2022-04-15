import React from 'react';
import PropTypes from 'prop-types';

const EpisodeInfo = ({
  id,
}) => (
  <option
    type="button"
    value={id}
  >
    Episode
    {' '}
    {id.toString()}
  </option>
);

EpisodeInfo.propTypes = {
  id: PropTypes.number.isRequired,
};

export default EpisodeInfo;
