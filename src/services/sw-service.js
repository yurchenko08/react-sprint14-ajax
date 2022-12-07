import axios from 'axios';

export const fetchData = (id, pathData, pathImage) => {
  return axios.all([
    axios.get(`https://www.swapi.tech/api/${pathData}/${id}`),
    axios.get(
      `https://starwars-visualguide.com/assets/img/${pathImage}/${id}.jpg`
    ),
  ]);
};
