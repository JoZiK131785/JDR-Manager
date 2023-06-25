import './index.css';

import React, { useState } from 'react';

const ItemMenu = ({ item }) => {
    const [value, setValue] = useState(0);

    let { id, name, count, weight, description } = item

    function handleChange(event) {
        let newValue = event.target.value;
        if (newValue < 0)
            newValue = 0;
        else if (newValue >= count)
            newValue = count;

        setValue(newValue);
    }

    return(
        <>
            <div className='item-menu-panel'>
                <p className={"item-avatar " + id }></p>
                <p className="item-name">{ name }</p>
                <p className="item-count">{ "Qt : " + count }</p>
                <p className="item-weight">{ "P : " + weight + " (" + (weight*count).toFixed(1) + ")" }</p>
                <p className="item-description">{ description }</p>
            </div>
            <div className="item-menu-actions">
                <button onClick={ () => setValue(value === 0 ? 0 : value - 1) } >-</button>
                <input type="text" value={ value } maxLength={2} onChange={handleChange} />
                <button onClick={ () => setValue(value >= count ? count : value + 1) } >+</button>
                <button>Utiliser</button>
            </div>
        </>
    )
}

export default ItemMenu;