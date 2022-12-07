import { useState } from 'react';
import People from '../People';
import Planets from '../Planets';
import Starships from '../Starships';
import Header from '../Header';
import { Route, Routes } from 'react-router-dom';
import './app.css';
function App() {
  const [id, setId] = useState(1);
  const next = () => {
    setId(id + 1);
  };
  return (
    <div className='wrapper'>
      <Header />
      <button className='next-button' onClick={next}>
        Next
      </button>
      <Routes>
        <Route path='/' element={<People id={id} />} />
        <Route path='Planets' element={<Planets id={id} />} />
        <Route path='Starships' element={<Starships id={id} />} />
      </Routes>
    </div>
  );
}

export default App;
