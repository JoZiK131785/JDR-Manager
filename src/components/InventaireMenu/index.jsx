import './index.css';

import React, { useState } from 'react';

import InventairePanel from '../InventoryPanel';
import WeaponPanel from '../WeaponPanel';
import ArmorPanel from '../ArmorPanel';

const InventaireMenu = ({ player }) => {
    const [inventoryIndex, setInventoryIndex] = useState(1);

    const toggleInventoryIndex = ( index ) => {
        setInventoryIndex(index);
    }

    function setPlayerWeight()
    {
        let weight = 0;
        player.inventaire.forEach((item) => {
            item.count ? weight += item.weight * item.count : weight += item.weight;
        });
        
        return weight;
    }

    return(
        <section className="inventory-interface" >
            <ul className='inventory-buttons'>
                <li className="inventory-main-button" onClick={ () => toggleInventoryIndex(1) }>Armes</li>
                <li className="inventory-main-button" onClick={ () => toggleInventoryIndex(2) }>Armure</li>
                <li className="inventory-main-button" onClick={ () => toggleInventoryIndex(3) }>Potion</li>
                <li className="inventory-main-button" onClick={ () => toggleInventoryIndex(4) }>Artisanat</li>
                <li className="inventory-main-button" onClick={ () => toggleInventoryIndex(5) }>Sac</li>
                <li className="inventory-main-button" onClick={ () => toggleInventoryIndex(6) }>+</li>
                <li className="inventory-weight">{ setPlayerWeight() + " / " + player.attributes.encombrement }</li>
            </ul>
            <div className="inventory-main-panel">
                { inventoryIndex === 1 && <WeaponPanel player={ player } /> }
                { inventoryIndex === 2 && <ArmorPanel player={ player } /> }
                { inventoryIndex > 2 && <InventairePanel player={ player } index={ inventoryIndex } /> }
            </div>
        </section>
    )
}

export default InventaireMenu;