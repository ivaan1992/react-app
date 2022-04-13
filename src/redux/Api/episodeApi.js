const BASE_URL = 'https://rickandmortyapi.com/api';

const connectEpisodeApi = async (page) => {
  const response = await fetch(`${BASE_URL}/episode?page=${page}`);
  const data = await response.json();
  return data;
};

export default connectEpisodeApi;
