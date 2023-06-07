import './index.css';

const ArmorSlot = ({ item }) => {

    return(
        <section className='armor-slot'>
            <p className={"armor-avatar " + item.id }></p>
            <p className="armor-name">{ item.name }</p>
            <p className="armor-weight">{ "P : " + item.weight }</p>
            <p className="armor-degats"></p>
            <p className="armor-level">{ "Niv " + item.level }</p>
            <p className="armor-enchantement">{ item.enchantement }</p>
            <button className="armor-cta">{ "<>" }</button>
        </section>
    )
}

export default ArmorSlot;