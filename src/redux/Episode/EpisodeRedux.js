import connectEpisodeApi from '../Api/episodeApi';

const EPISODE = 'redux/actions/get_episode';

const initialState = [];

const episode = (epi) => ({
  type: EPISODE,
  payload: epi,
});

export const getEpisode = (id, dispatch) => {
  connectEpisodeApi(id).then(({ results }) => {
    dispatch(episode(results));
  });
};

const episodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case EPISODE:
      return action.payload;

    default:
      return state;
  }
};

export default episodeReducer;
