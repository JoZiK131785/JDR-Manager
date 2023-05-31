// #region IMPORTS

import './index.css';

import React, { useState } from 'react';

import MainMenuButton from '../MainMenuButton';
import MenuButton from '../MenuButton';

// #endregion

const MenuUI = ({ toggle }) => {

    // #region INIT

    const [isOpen, setIsOpen] = useState(false);

    // #endregion
    // #region FUNCTIONS

    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
    }

    // #endregion
    // #region RETURN

    return (
        <section className="menu-ui">
            <ul className="menu-ui-buttons">
                <MainMenuButton toggle={ toggleIsOpen } bool={ isOpen } toggleIndex={ toggle } />
                <MenuButton type="info" bool={ isOpen } toggle={ toggle } />
                <MenuButton type="inventaire" bool={ isOpen } toggle={ toggle } />
                <MenuButton type="competences" bool={ isOpen } toggle={ toggle } />
                <MenuButton type="sorts" bool={ isOpen } toggle={ toggle } />
                <MenuButton type="roll" bool={ isOpen } toggle={ toggle } />
            </ul>
        </section>
    );

    // #endregion
    
}

export default MenuUI;