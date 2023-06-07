import './index.css';

const WeaponSlot = ({ item }) => {

    return(
        <section className='armor-slot'>
            <p className={"armor-avatar " + item.id }></p>
            <p className="armor-name">{ item.name }</p>
            <p className="armor-weight">{ "P : " + item.weight }</p>
            <p className="armor-degats">{ item.degats }</p>
            <p className="armor-level">{ "Niv " + item.level }</p>
            <p className="armor-enchantement">{ item.enchantement }</p>
            <button className="weapon-a">1</button>
            <button className="weapon-b">2</button>
        </section>
    )
}

export default WeaponSlot;