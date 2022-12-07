import React from 'react';
import { fetchData } from '../services/sw-service';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Planets({ id }) {
  const [data, setData] = useState([]);
  const [image, setImage] = useState('');
  const pathData = 'planets';
  const pathImage = 'planets';
  useEffect(() => {
    fetchData(id, pathData, pathImage)
      .then(
        axios.spread((data, image) => {
          setData(data.data.result.properties);
          setImage(image.config.url);
        })
      )
      .catch((error) => {
        console.error(`Error: ${error}`);
        setImage(
          'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'
        );
        setData({
          name: "Sorry, we don't find planet by this id. Try the next",
        });
      });
  }, [id]);

  const { name, diameter, population, climate } = data;
  return (
    <div>
      <img src={image} alt='' />
      <h3>{name}</h3>
      <ul>
        <li>Diameter: {diameter}</li>
        <li>Population: {population}</li>
        <li>Climate: {climate}</li>
      </ul>
    </div>
  );
}

export default Planets;
