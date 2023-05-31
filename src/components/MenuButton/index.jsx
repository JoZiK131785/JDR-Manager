// #region IMPORTS

import './index.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faScroll } from '@fortawesome/free-solid-svg-icons'
import { faWandSparkles } from '@fortawesome/free-solid-svg-icons'
import { faDiceD20 } from '@fortawesome/free-solid-svg-icons'

// #endregion

const MenuButton = ({ type, bool, toggle }) => {

    // #region RETURN

    return (
        <section className={ 'menu-button ' + (bool ? type + " open" : type + "-hide") }>
            { type === 'info' && <FontAwesomeIcon icon={faUser} className="menu-button-icon" onClick={ () => toggle(2) } /> }
            { type === 'inventaire' && <FontAwesomeIcon icon={faMagnifyingGlass} className="menu-button-icon" onClick={ () => toggle(3) } /> }
            { type === 'competences' && <FontAwesomeIcon icon={faScroll} className="menu-button-icon" onClick={ () => toggle(4) } /> }
            { type === 'sorts' && <FontAwesomeIcon icon={faWandSparkles} className="menu-button-icon" onClick={ () => toggle(5) } /> }
            { type === 'roll' && <FontAwesomeIcon icon={faDiceD20} className="menu-button-icon" onClick={ () => toggle(6) } /> }
        </section>
    );

    // #endregion
    
}

export default MenuButton;