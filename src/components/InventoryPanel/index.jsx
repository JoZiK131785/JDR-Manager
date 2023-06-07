import './index.css';

import { useState, useEffect } from 'react';

import InventorySlot from '../InventorySlot';
import ItemMenu from '../ItemMenu';

const InventairePanel = ({ player, index }) => {

    const [currentItem, setCurrentItem] = useState(undefined);
    const [menuBool, setMenuBool] = useState(false);
    const [artisanatItems, setArtisanatItems] = useState([]);
    const [potionItems, setPotionItems] = useState([]);
    const [sacItems, setSacItems] = useState([]);

    useEffect(() => {
        setArtisanatItems(player.inventaire.filter((item) => item.type === 'Artisanat'));
        setPotionItems(player.inventaire.filter((item) => item.type === 'Potion'));
        setSacItems(player.inventaire.filter((item) => item.type !== 'Artisanat' && item.type !== 'Potion' && item.type !== 'Arme' && item.type !== 'Armure'));
    }, [ player ])

    function setCurrentItemFunction(item)
    {
        setCurrentItem(item);
        setMenuBool(true);
    }

    return(
        <section className='inventory-panel'>
            <div className="inventory-content">
                { index === 3 && ( potionItems.map((item) => ( <InventorySlot key={item.name} item={ item } toggle={ setCurrentItemFunction } /> )))}
                { index === 4 && ( artisanatItems.map((item) => ( <InventorySlot key={item.name} item={ item } toggle={ setCurrentItemFunction } /> )))}
                { index === 5 && ( sacItems.map((item) => ( <InventorySlot key={item.name} item={ item } toggle={ setCurrentItemFunction } /> )))}
            </div>
            <div className="inventory-menu-panel">
                { menuBool && <ItemMenu item={ currentItem } /> }
            </div>
        </section>
    )
}

export default InventairePanel;