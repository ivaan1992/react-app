import React from 'react';
import { useDispatch } from 'react-redux';
import { getCharacter } from '../../redux/Characters/CharactersRedux';
import '../Characters/Characters.css';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name } = Object.fromEntries(new FormData(e.target));
    getCharacter({ page: '', name, dispatch });
  };

  const handleChange = (e) => {
    if (e.target.value === '') {
      getCharacter({ page: '', name: '', dispatch });
    }
  };

  return (
    <form className="search-char-form" onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        name="name"
        placeholder="Search by Name"
        className="search-bar-char"
      />
      <button className="search-bar-name" type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
