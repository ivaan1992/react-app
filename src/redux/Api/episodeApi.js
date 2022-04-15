const BASE_URL = 'https://rickandmortyapi.com/api';

const connectEpisodeApi = async (page = '1') => {
  const response = await fetch(`${BASE_URL}/episode?page=${page}`);
  const data = await response.json();
  return data;
};

export const getEpisodeApi = async (episode = '1') => {
  const response = await fetch(`${BASE_URL}/episode/${episode}`);
  const data = await response.json();
  return data;
};

export default connectEpisodeApi;
