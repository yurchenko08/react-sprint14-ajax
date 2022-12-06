import { fetchData } from '../../services/sw-service';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [id, setId] = useState(1);
  const [image, setImage] = useState('');
  const next = () => {
    setId(id + 1);
  };

  useEffect(() => {
    fetchData(id)
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
      <header>
        <nav>
          <ul>
            <button>People</button>
            <button>Planets</button>
            <button>Starships</button>
          </ul>
        </nav>
      </header>
      <img
        src={image}
        alt=''
      />
      <h3>{name}</h3>
      <ul>
        <li>{gender}</li>
        <li>{birth_year}</li>
        <li>{eye_color}</li>
      </ul>
      <button onClick={next}>Next</button>
    </div>
  );
}

export default App;
