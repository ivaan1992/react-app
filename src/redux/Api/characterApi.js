const BASE_URL = 'https://rickandmortyapi.com/api';

const connectCharApi = async (page = 1) => {
  const response = await fetch(`${BASE_URL}/character?page=${page}`);
  const data = await response.json();
  return data;
};

export default connectCharApi;
