import connectCharApi from '../Api/characterApi';

const CHARACTERS = 'redux/actions/get_characters';

const initialState = [];

const characters = (character) => ({
  type: CHARACTERS,
  payload: character,
});

export const getCharacter = (page, dispatch) => {
  connectCharApi(page).then(({ results }) => {
    dispatch(characters(results));
  });
};

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHARACTERS:
      return action.payload;

    default:
      return state;
  }
};

export default characterReducer;
