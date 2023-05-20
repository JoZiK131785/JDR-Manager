// #region IMPORTS

import "./index.css";

import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import PlayerMainCard from "../PlayerMainCard";

// #endregion

const SelectPlayer = () => {

    // #region INIT

    const [isLoading, setIsLoading] = useState(false);
    const [loaderLabel, setLoaderLabel] = useState("Chargement...");
    const [playersList, setPlayersList] = useState([]);
    const [currentPlayer, setCurrentPlayer] = useState(null);
    const { userId } = useParams();

    // #endregion
    // #region FUNCTIONS

    useEffect(() => {
        setIsLoading(true);
        setLoaderLabel("Chargement des joueurs...");

        const fetchPlayers = async () => {
    
            fetch("https://jdr-manager-server.vercel.app/players")
                .then((response) => response.json())
                .then((data) => setPlayersList(data.filter((player) => player.userId === userId)))
                .catch(() => console.log("error fetch players"))
                .finally(() => setIsLoading(false))
        };

        fetchPlayers();

    }, [ userId ]);

    useEffect(() => {
        if(currentPlayer === null && playersList.length > 0)
            setCurrentPlayer(playersList[0])
    }, [ playersList, currentPlayer ]);

    // #endregion
    // #region RETURN

    return (

        <div className="select-player">

            {!isLoading ? (

                <>

                    <div className="select-player-panel">

                        <div className="player-cta">

                            <ul className="player-list">
                                {playersList.map((player) => (
                                    <li key={ player._id } className="cta-brown-light"> { player.name } </li>
                                ))}
                            </ul>

                            <button className="cta-brown-light" disabled >Add New Player</button>

                            <button className="cta-brown">Play</button>

                        </div>

                        <div className="player-panel">
                            { currentPlayer && <PlayerMainCard player={ currentPlayer } />}
                        </div>

                    </div>

                </>

            ) : (

                <>
                
                    <span className="loader"></span>

                    <div className="loader-label">
                        <p>{loaderLabel}</p>
                    </div>

                </>
                
            )}

        </div>

    )

    // #endregion
}

export default SelectPlayer;