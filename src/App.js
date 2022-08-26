// Assets & Utils
import './styles/index.css';

// Components & Pages
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useParams } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import Navigation from './components/Components/Navigation';
import Home from './components/Pages/Home/Home';
import Park from './components/Pages/Park/Park';
import Opened from './components/Pages/Opened/Opened';

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const [cookies, setCookie] = useCookies(['parks']);

  return (
    <Router>
      {typeof cookies.parks !== 'undefined'
        ? <Navigation showMenu={showMenu} closeButton={() => setShowMenu(!showMenu)} /> : ''}
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/edit' element={<Home />} />
          <Route path='/park/:id' element={<Park onShowMenu={() => setShowMenu(!showMenu)} />} />
          <Route path='/park/opened/:id' element={<Opened onShowMenu={() => setShowMenu(!showMenu)} />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;