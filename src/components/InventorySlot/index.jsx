import './index.css';

const InventorySlot = ({ item, toggle }) => {

    return(
        <section className='inventory-slot' onClick={ () => toggle(item) } >
            <p className={"item-avatar " + item.id }></p>
            <p className="item-name">{ item.name }</p>
            <p className="item-count">{ "Quantite  " + item.count }</p>
        </section>
    )
}

export default InventorySlot;