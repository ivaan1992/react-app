import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CharacterCatalogue from './CharacterCatalogue';
import PrevNextBtns from './PrevNextBtns';
import SearchBar from '../Search/SearchBar';
import './Characters.css';
import Details from './Details';
import { setSelectedCharacter } from '../../redux/Characters/CharactersRedux';

const Characters = () => {
  const chars = useSelector((state) => state.characterReducer.chars);
  const [isSelected, setIsSelected] = useState(false);
  const dispatch = useDispatch();

  const handleSelectedChar = (selectedChar) => {
    setIsSelected(true);
    setSelectedCharacter({ character: selectedChar, dispatch });
  };

  const handleCloseSelectedChar = () => {
    setIsSelected(false);
    setSelectedCharacter({ character: {}, dispatch });
  };

  return (
    <div className="d-flex chars-container">
      <Details isVisible={isSelected} onClickEvent={handleCloseSelectedChar} />
      <SearchBar />
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
                onClickEvent={handleSelectedChar}
              />
            ))
        }
      </div>
      <PrevNextBtns />
    </div>
  );
};

export default Characters;
