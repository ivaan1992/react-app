import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getCharacter } from '../../redux/Characters/CharactersRedux';

const Details = ({ isVisible, onClickEvent }) => {
  const dispatch = useDispatch();
  const {
    img, name, gender, location, species, type, status,
  } = useSelector((state) => state.characterReducer.details);

  useEffect(() => {
    getCharacter(dispatch);
  }, []);

  return (
    <>
      { isVisible ? (
        <div>
          <button onClick={onClickEvent} type="button">CLOSE</button>
          <img src={img} alt={name} />
          <div className="info">
            <h1>{name}</h1>
            <p>{gender}</p>
            <p>{status}</p>
            <p>{location.name}</p>
            <p>{species}</p>
            <p>{type}</p>
          </div>
        </div>

      )
        : (
          <></>
        )}
    </>
  );
};

export default Details;

Details.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClickEvent: PropTypes.func.isRequired,
};
