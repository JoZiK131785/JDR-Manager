// #region IMPORTS

import "./index.css";

import React, { useState, useEffect } from "react";

import setAvatar from "../../utils/functions";

// #endregion

const PlayerMainCard = ({ player }) => {

    // #region INIT

    const { name, attributes, session } = player;
    const { title, content } = session;
    const { race, level } = attributes;
    
    const [width, setWidth] = useState(window.innerWidth);

    // #endregion
    // #region FUNCTIONS

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // #endregion
    // #region RETURN

    return (
        <div className="player-main-card">
            
            <div className={ 'avatar-image avatar-panel ' + setAvatar(player) }></div>
            <h2>{ name }</h2>
            <h3>{ race }</h3>
            <h4>{ 'Niveau ' + level }</h4>
            { width > 800 && <p className="title-label">Derniere session : <span>{ title }</span></p> }
            { width > 800 && <p className="content-label">{ content }</p> }
            
        </div>
    )

    // #endregion
}

export default PlayerMainCard;