import './index.css';

import ColoredLabel from '../ColoredLabel'

import { setAvatar } from "../../utils/functions";

import { useState } from 'react';

const UserMenu = ({ player }) => {
    const [critique, setCritique] = useState(player.attributes.critique);
    const [mundusValue, setMundusValue] = useState(0);

    const { avatar, race, level, progression, vita, magicka, stamina } = player.attributes;

    const handleMundusChange = (event) => {
        setMundusValue(event.target.value);
      };

      const setMundus = () => {

        if (mundusValue === '') {
          return; // Ne rien faire si aucune valeur n'a été saisie
        }
    
        const valueToRemove = parseInt(mundusValue, 10);
        if (isNaN(valueToRemove)) {
          return; // Ne rien faire si la valeur saisie n'est pas un nombre
        }
    
        const newCritique = critique - valueToRemove;
        if (newCritique < 0) {
          return; // Ne rien faire si la nouvelle valeur de critique est négative
        }
    
        setCritique(newCritique);
    
        // Mettre à jour le joueur dans le localStorage avec la nouvelle valeur de critique
        const newPlayer = { ...player, attributes: { ...player.attributes, critique: newCritique } };
        localStorage.setItem('currentPlayer', JSON.stringify(newPlayer));
      };

    return(
        <ul className="user-interface">
            <li className={ "user-avatar " + setAvatar(avatar) }></li>
            <li className="user-name">{ player.name }</li>
            <li className="user-race">{ race }</li>
            <li className="user-level">Niveau</li>
            <li className="user-progression-level">{ level }</li>
            <li className="user-bar-level">
                <div className="user-bar-level-actu" style={{ width: `${(progression / 10) * 100}%` }}></div>
            </li>
            <li className="user-mundus">Critique</li>
            <li className="user-progression-mundus">{ critique }</li>
            <input type="text" className='mundus-input cta-brown-light' value={mundusValue} onChange={handleMundusChange} />
            <div className='mundus-down cta-brown-light' onClick={ () => setMundus() } >-</div>
            <ColoredLabel type="regen" color="title" value="REGEN"/>
            <ColoredLabel type="actu" color="title" value="ACTU"/>
            <ColoredLabel type="max" color="title" value="MAX"/>
            <ColoredLabel type="regen" color="vita" value={ "+ " + vita.regen } />
            <ColoredLabel type="actu" color="vita" value={ vita.actu }/>
            <ColoredLabel type="max" color="vita" value={ "/ " + vita.max } />
            <ColoredLabel type="regen" color="magicka" value={ "+ " + magicka.regen } />
            <ColoredLabel type="actu" color="magicka" value={ magicka.actu }/>
            <ColoredLabel type="max" color="magicka" value={ "/ " + magicka.max } />
            <ColoredLabel type="regen" color="stamina" value={ "+ " + stamina.regen } />
            <ColoredLabel type="actu" color="stamina" value={ stamina.actu }/>
            <ColoredLabel type="max" color="stamina" value={ "/ " + stamina.max } />
        </ul>
    )
}

export default UserMenu;
