import './index.css';

const WeaponMainSlot = ({ item }) => {

    return(
        <section className='weapon-main-slot'>
            <p className={"weapon-main-avatar " + item.id }></p>
            <p className="weapon-main-name">{ item.name }</p>
            <p className="weapon-main-weight">{ "P : " + item.weight }</p>
            <p className="weapon-main-degats">{ item.degats }</p>
            <p className="weapon-main-level">{ "Niv " + item.level }</p>
            <p className="weapon-main-enchantement">{ item.enchantement }</p>
            <button className="weapon-main-cta">{ "<>" }</button>
        </section>
    )
}

export default WeaponMainSlot;