const BASE_URL = 'https://rickandmortyapi.com/api';

const connectCharApi = async (page, name = '') => {
  const response = await fetch(`${BASE_URL}/character?page=${page}&name=${name}`);
  if (response.status !== 200) {
    throw response.status;
  }
  const data = await response.json();
  return data;
};

export default connectCharApi;
