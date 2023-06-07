// #region IMPORTS

import './index.css';

import UserMenu from '../UserMenu';
/* import InventaireMenu from '../InventaireMenu'; */
import SkillsMenu from '../SkillsMenu';
import SpellsMenu from '../SpellsMenu';

// #endregion

const TesoMenu = ({ index, player }) => {

    function updatePlayerOnDB(player)
    {
        fetch(`http://localhost:4000/players/${player._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(player),
        })
            .then(response => response.json())
            .catch(error => console.error('Error updating player:', error));
    }

    // #region RETURN

    return (

        <section className={ index === 1 ? "teso-main-menu-hide" : "teso-main-menu" }>

            { index === 2 ? <UserMenu player={ player } /> : undefined }
            
            {/* { index === 3 && <InventaireMenu player={ player } /> } */}

            { index === 4 && <SkillsMenu player={ player } /> }

            { index === 5 && <SpellsMenu player={ player } /> }

            { index === 6 && "6" }

        </section>
    );

    // #endregion
}

export default TesoMenu;