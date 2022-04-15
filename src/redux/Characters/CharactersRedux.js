import connectCharApi from '../Api/characterApi';

const CHARACTERS = 'redux/actions/get_characters';
const NAME = 'redux/actions/get_characters/name';

const initialState = {
  name: '',
  chars: [],
};

const characters = (character, type) => ({
  type,
  payload: character,
});

export const getCharacter = ({ page, dispatch, name = '' }) => {
  connectCharApi(page, name).then(({ results }) => {
    dispatch(characters(name, NAME));
    dispatch(characters(results, CHARACTERS));
  }).catch(() => {});
};

/* export const getName = (name, dispatch) => {
  connectCharApi(name).then(({ search }) => {
    dispatch(characters(search));
  });
}; */

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHARACTERS:
      return { ...state, chars: action.payload };
    case NAME:
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

export default characterReducer;
