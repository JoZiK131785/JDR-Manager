// #region IMPORTS

import './index.css';

import React, { useState } from 'react';

/* import PlayerList from '../PlayerList'; */
import MenuUI from '../MenuUI';
/* import StatusUI from '../StatusUI';
import TesoMenu from '../TesoMenu'; */

// #endregion

const TesInterface = () => {

  // #region INIT
  
  const [menuPanel, setMenuPanel] = useState(0);

  // #endregion
  // #region FUNCTIONS

  const toggleMenuPanel = ( index ) => {
      if(index === menuPanel)
          setMenuPanel(1);
      else
          setMenuPanel(index);
  }

  // #endregion
  // #region RETURN

  return (

    <section className="teso-lobby-panel">

      <MenuUI  toggle={ toggleMenuPanel } />

      {/* { menuPanel === 0 || menuPanel === 1 ? <StatusUI player={ JSON.parse(localStorage.getItem('currentPlayer')) }/> : undefined } */}
      
      {/* { menuPanel !== 0 ? <TesoMenu socket={ socket } player={ JSON.parse(localStorage.getItem('currentPlayer')) } index= { menuPanel } /> : undefined } */}

    </section>

  );

  // #endregion

};

export default TesInterface;