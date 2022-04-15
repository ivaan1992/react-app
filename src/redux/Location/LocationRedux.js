import connectLocationApi from '../Api/locationApi';

const PLANET = 'redux/actions/get_locations';

const initialState = [];

const location = (planet) => ({
  type: PLANET,
  payload: planet,
});

export const getLocations = (id, dispatch) => {
  connectLocationApi(id).then(({ results }) => {
    dispatch(location(results));
  });
};

const locationReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLANET:
      return action.payload;

    default:
      return state;
  }
};

export default locationReducer;
