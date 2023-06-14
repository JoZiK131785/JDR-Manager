import './index.css';

import ColoredLabel from '../ColoredLabel'

import { setAvatar } from "../../utils/functions";

const UserMenu = ({ player }) => {

    const { avatar, race, level, progression, vita, magicka, stamina } = player.attributes;

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
