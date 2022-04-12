import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacter } from '../../redux/Characters/CharactersRedux';
import CharacterInfo from './CharacterInfo';

const Characters = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const chars = useSelector((state) => state.characterReducer);
  console.log(chars);
  console.log('======================');
  useEffect(() => {
    getCharacter(page, dispatch);
  }, [page]);

  return (
    <div className="chars-container">
      { page > 1
        ? <button type="button" onClick={() => setPage(page - 1)}>Previous</button>
        : '' }
      <button type="button" onClick={() => setPage(page + 1)}>Next</button>
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
    </div>
  );
};

export default Characters;
