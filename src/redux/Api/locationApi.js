const BASE_URL = 'https://rickandmortyapi.com/api';

const connectLocationApi = async (page) => {
  const response = await fetch(`${BASE_URL}/location?page=${page}`);
  console.log(response);
  const data = await response.json();
  return data;
};

export default connectLocationApi;
