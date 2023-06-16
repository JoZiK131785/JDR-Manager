// #region IMPORTS

import './index.css';

import UserMenu from '../UserMenu';
import InventaireMenu from '../InventaireMenu';
import SkillsMenu from '../SkillsMenu';
import SpellsMenu from '../SpellsMenu';
import Maps from '../Maps';
import Save from '../Save';

// #endregion

const TesoMenu = ({ index, player }) => {

    // #region RETURN

    return (

        <section className={ index === 1 ? "teso-main-menu-hide" : "teso-main-menu" }>

            { index === 2 ? <UserMenu player={ player } /> : undefined }
            
            { index === 3 && <InventaireMenu player={ player } /> }

            { index === 4 && <SkillsMenu player={ player } /> }

            { index === 5 && <SpellsMenu player={ player } /> }

            { index === 6 && <Maps /> }

            { index === 7 && <Save /> }

        </section>
    );

    // #endregion
}

export default TesoMenu;