import './index.css';

import { useState, useEffect } from 'react';

import WeaponSlot from '../WeaponSlot';
import WeaponMainSlot from '../WeaponMainSlot';

const WeaponPanel = ({ player }) => {

    const [weaponsItems, setWeaponsItems] = useState([]);
    const [activeWeaponsItems, setActiveWeaponsItems] = useState([]);

    useEffect(() => {
        setWeaponsItems(player.inventaire.filter((item) => item.type === 'Arme'));
        setActiveWeaponsItems(player.weapons);
    }, [ player ])

    return(
        <section className='weapon-panel'>
            <div className="weapon-content">
                { ( weaponsItems.map((item) => ( <WeaponSlot key={item.name} item={ item } /> )))}
            </div>
            <div className="current-weapons">
                { ( activeWeaponsItems.map((item) => ( <WeaponMainSlot key={item.name} item={ item } /> )))}
            </div>
        </section>
    )
}

export default WeaponPanel;