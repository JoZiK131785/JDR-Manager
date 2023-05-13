// #region IMPORTS

import './reset.css';
import './index.css';
import './app.css';

import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';

// #endregion IMPORTS

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
}

export default App;
