// #region IMPORTS

import './reset.css';
import './index.css';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import SelectPlayer from './components/SelectPlayer';

// #endregion IMPORTS

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/select/:userId" element={<SelectPlayer />}></Route>
    </Routes>
  );
}

export default App;
