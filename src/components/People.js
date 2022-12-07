import React from 'react';
import { fetchData } from '../services/sw-service';
import { useEffect, useState } from 'react';
import axios from 'axios';

function People({ id }) {
  const [data, setData] = useState([]);
  const [image, setImage] = useState('');
  const pathData = 'people';
  const pathImage = 'characters';
  useEffect(() => {
    fetchData(id, pathData, pathImage)
      .then(
        axios.spread((data, image) => {
          setData(data.data.result.properties);
          setImage(image.config.url);
        })
      )
      .catch((error) => console.error(`Error: ${error}`));
  }, [id]);
  const { name, gender, birth_year, eye_color } = data;
  return (
    <div>
      <img src={image} alt='' />
      <h3>{name}</h3>
      <ul>
        <li>Gender: {gender}</li>
        <li>Birth Year: {birth_year}</li>
        <li>Eye color: {eye_color}</li>
      </ul>
    </div>
  );
}

export default People;
