import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <button>
              <Link to='/'>People</Link>
            </button>
            <button>
              <Link to='/Planets'>Planets</Link>
            </button>
            <button>
              <Link to='/Starships'>Starships</Link>
            </button>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
