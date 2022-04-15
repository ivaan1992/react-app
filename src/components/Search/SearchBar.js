import React from 'react';
import { useDispatch } from 'react-redux';
import { getCharacter } from '../../redux/Characters/CharactersRedux';
import '../Characters/Characters.css';

const SearchBar = () => {
  const dispatch = useDispatch();
  /* const filterName = (searchName) => {
    const nameState = useSelector((state) => state.characterReducer);
    const dispatch = useDispatch();
    const resultSearch = nameState.filter((element) => {
      if (element.name.toString().toLowerCase().include(searchName.toLowerCase())) {
        return element;
      } return element;
    });

    dispatch(resultSearch);
  }; */
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

  //   const filter = (searchByName) => {
  //     const searchResult = getCharacter.filter((char) => {
  //       if (char.name.toString().toLowerCase().includes(searchByName.toLowerCase)) {
  //         return char;
  //       }
  //     });
  //   };

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
