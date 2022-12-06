import axios from 'axios';

export const fetchData = (id) => {
  return axios.all([
    axios.get(`https://www.swapi.tech/api/people/${id}`),
    axios.get(
      `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
    ),
  ]);
};
