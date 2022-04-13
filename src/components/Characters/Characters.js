import React from 'react';
import { useSelector } from 'react-redux';
import CharacterInfo from './CharacterInfo';
import Pagination from './Pagination';

const Characters = () => {
  const chars = useSelector((state) => state.characterReducer);

  return (
    <div className="chars-container">
      {
          chars.map(({
            name, gender, status, image, id, location, species, type,
          }) => (
            <CharacterInfo
              key={id}
              name={name}
              gender={gender}
              status={status}
              img={image}
              location={location}
              species={species}
              type={type}
            />
          ))
      }
      <Pagination />
    </div>
  );
};

export default Characters;
