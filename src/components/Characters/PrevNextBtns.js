import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCharacter } from '../../redux/Characters/CharactersRedux';
import './PrevNextBtns.css';

const PrevNextBtns = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    getCharacter(page, dispatch);
  }, [page]);

  return (
    <div className=" d-flex prev-next-btns">
      { page
        ? <button className="prev-next-btn" type="button" onClick={() => setPage(page - 1)}>Previous</button>
        : '' }
      <button className="prev-next-btn" type="button" onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};
export default PrevNextBtns;
