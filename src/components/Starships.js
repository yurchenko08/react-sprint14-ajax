import React from 'react';
import { fetchData } from '../services/sw-service';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Starships({ id }) {
  const [data, setData] = useState([]);
  const [image, setImage] = useState('');
  const pathData = 'starships';
  const pathImage = 'starships';
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
        setData({
          name: "Sorry, we don't find starship by this id. Try the next",
          passengers: 'I dont know',
          length: 'Khm...',
          model: 'Sorry...',
        });
        setImage(
          'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'
        );
      });
  }, [id]);

  const { name, passengers, length, model } = data;
  return (
    <div>
      <img src={image} alt='' />
      <h3>{name}</h3>
      <ul>
        <li>Model: {model}</li>
        <li>Length: {length}</li>
        <li>Passengers: {passengers}</li>
      </ul>
    </div>
  );
}

export default Starships;
