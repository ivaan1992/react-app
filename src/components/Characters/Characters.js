import React from 'react';
import { useSelector } from 'react-redux';
import CharacterCatalogue from './CharacterCatalogue';
import PrevNextBtns from './PrevNextBtns';
import './Characters.css';

const Characters = () => {
  const chars = useSelector((state) => state.characterReducer);

  return (
    <div className="d-flex chars-container">
      <div className="chars-cards">
        {
            chars.map(({
              name, gender, status, image, id, location, species, type,
            }) => (
              <CharacterCatalogue
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
      </div>
      <PrevNextBtns />
    </div>
  );
};

export default Characters;
