import './index.css';

const ArmorMainSlot = ({ item }) => {

    return(
        <section className='armor-main-slot'>
            <p className={"armor-main-avatar " + item.id }></p>
            <p className="armor-main-name">{ item.name }</p>
            <p className="armor-main-weight">{ "P : " + item.weight }</p>
            <p className="armor-main-level">{ "Niv " + item.level }</p>
            <p className="armor-main-enchantement">{ item.enchantement }</p>
        </section>
    )
}

export default ArmorMainSlot;