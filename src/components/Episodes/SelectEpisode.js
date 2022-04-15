import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getEpisodes } from '../../redux/Episode/EpisodeRedux';

const SelectEpisode = ({ children, onChange }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getEpisodes({ dispatch });
  }, []);

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <select name="episodes" onChange={handleChange}>
      {children}
    </select>
  );
};

SelectEpisode.propTypes = {
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SelectEpisode;
