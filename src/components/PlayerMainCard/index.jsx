// #region IMPORTS

import "./index.css";

import setAvatar from "../../utils/functions";

// #endregion

const PlayerMainCard = ({ player }) => {

    // #region INIT

    const { name, attributes, session } = player;
    const { title, content } = session;
    const { race, level } = attributes;

    // #endregion
    // #region FUNCTIONS



    // #endregion
    // #region RETURN

    return (
        <div className="player-main-card">
            
            <div className={ 'avatar-image avatar-panel ' + setAvatar(player) }></div>
            <h2>{ name }</h2>
            <h3>{ race }</h3>
            <h4>{ 'Niveau ' + level }</h4>
            <p className="title-label">Derniere session : <span>{ title }</span></p>
            <p className="content-label">{ content }</p>
            
        </div>
    )

    // #endregion
}

export default PlayerMainCard;