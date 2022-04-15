import connectEpisodeApi, { getEpisodeApi } from '../Api/episodeApi';

const EPISODE = 'redux/actions/get_episode';
const SELECTED_EPISODE = 'redux/actions/get_episode/selected_episode';
const TOTAL_EPISODES = 'redux/actions/get_episode/total';
const CHARACTERS = 'redux/actions/get_episode/characters';
const initialState = {
  episodes: [],
  selectedEpisode: {},
  total: 0,
  characters: [],
};

const episode = (payload, type) => ({
  type,
  payload,
});

const getCharacter = async (url) => {
  const response = await fetch(url);
  const character = await response.json();
  return character;
};

const getCharacters = (chars) => {
  const responseCharacters = chars.map((url) => getCharacter(url));
  return responseCharacters;
};

export const getEpisode = ({ episodeParam = '1', dispatch }) => {
  getEpisodeApi(episodeParam).then((results) => {
    dispatch(episode(results, SELECTED_EPISODE));
    Promise.all(getCharacters(results.characters)).then((characters) => {
      dispatch(episode(characters, CHARACTERS));
    });
  });
};

export const getEpisodes = ({ page = '1', dispatch }) => {
  connectEpisodeApi(page).then(({ results, info }) => {
    dispatch(episode(results, EPISODE));
    dispatch(episode(info.count, TOTAL_EPISODES));
    getEpisode({ dispatch, episodeParam: page });
  });
};

const episodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case EPISODE:
      return { ...state, episodes: action.payload };
    case SELECTED_EPISODE:
      return { ...state, selectedEpisode: action.payload };
    case TOTAL_EPISODES:
      return { ...state, total: action.payload };
    case CHARACTERS:
      return { ...state, characters: action.payload };
    default:
      return state;
  }
};

export default episodeReducer;
