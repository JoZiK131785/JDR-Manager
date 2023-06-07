import './index.css';

import { useState, useEffect } from 'react';

import ArmorSlot from '../ArmorSlot';
import ArmorMainSlot from '../ArmorMainSlot';

const ArmorPanel = ({ player }) => {

    const [armorItems, setArmorItems] = useState([]);
    const [activeArmorItems, setActiveArmorItems] = useState([]);

    useEffect(() => {
        setArmorItems(player.inventaire.filter((item) => item.type === 'Armure'));
        setActiveArmorItems(player.armor);
    }, [ player ])

    return(
        <section className='armor-panel'>
            <div className="armor-content">
                { ( armorItems.map((item) => ( <ArmorSlot key={item.name} item={ item } /> )))}
            </div>
            <div className="current-armor">
                { player.armor[0] && <ArmorMainSlot key={player.armor[0].name} item={ player.armor[0] } /> }
                { player.armor[1] && <ArmorMainSlot key={player.armor[1].name} item={ player.armor[1] } /> }
                { player.armor[2] && <ArmorMainSlot key={player.armor[2].name} item={ player.armor[2] } /> }
                { player.armor[3] && <ArmorMainSlot key={player.armor[3].name} item={ player.armor[3] } /> }
                { player.armor[4] && <ArmorMainSlot key={player.armor[4].name} item={ player.armor[4] } /> }
            </div>
        </section>
    )
}

export default ArmorPanel;