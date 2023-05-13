// #region IMPORTS

import './index.css'

import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

// #endregion

const Home = () => {

    // #region INIT

    const navigate = useNavigate();

    const [registerUserName, setRegisterUserName] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginUserName, setLoginUserName] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [playersList, setPlayersList] = useState([]);
    const [logError, setLogError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const usernameRef = useRef(null);

    // #endregion
    // #region FUNCTIONS

    useEffect(() => {
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
        }, 4000);

        /* const fetchPlayers = async () => {
            setIsLoading(true);
    
            fetch("http://localhost:4000/players")
                .then((response) => response.json())
                .then((data) => setPlayersList(data))
                .catch(() => setLogError(true))
                .finally(() => setIsLoading(false))
        };

        fetchPlayers(); */

    }, []);

    const handleRegister = (e) => {
        e.preventDefault();

        // Enleve les apostrophes et met le texte en minuscule
        const username = registerUserName.replace(/'/g, "").toLowerCase();

        // Crée un nouvel utilisateur
        const newUser = {
            name: username,
            password: registerPassword
        };

        // Ajoute le nouvel utilisateur à la liste des joueurs
        setPlayersList([...playersList, newUser]);

        // Enregistre le nouvel utilisateur dans le localstorage
        localStorage.setItem("currentPlayer", JSON.stringify(newUser));

        // Navigue vers la page de lobby
        navigate("/tesolobby");
    };

    const handleLogin = (e) => {
        e.preventDefault();

        // Enleve les apostrophes et met le texte en minuscule
        const username = loginUserName.replace(/'/g, "").toLowerCase();

        // Vérifie si l'utilisateur existe dans la liste des joueurs
        const user = playersList.find(element => element.name.replace(/'/g, "").toLowerCase() === username);

        if (user && user.password === loginPassword) {
            // Désactive l'erreur de connexion
            setLogError(false);

            // Enregistre l'utilisateur dans le localstorage
            localStorage.setItem("currentPlayer", JSON.stringify(user));

            // Navigue vers la page de lobby
            navigate("/tesolobby");
        } else {
            // Active l'erreur de connexion
            setLogError(true);

            // Réinitialise les champs de connexion
            setLoginUserName("");
            setLoginPassword("");
        }
    };

    // #endregion
    // #region RETURN

    return (
        <div className="home-main">
            {!isLoading ? (
                <>
                    <h1>JDR Manager</h1>
    
                    <div className="container-forms">
    
                        <div className="scinder"></div>
    
                        <form onSubmit={handleLogin}>
                            <div className="inputs">
                                <input
                                    type="text"
                                    className="input"
                                    placeholder="Username"
                                    value={loginUserName}
                                    onChange={(e) => setLoginUserName(e.target.value)}
                                    ref={usernameRef}
                                    required
                                />
    
                                <input
                                    type="password"
                                    className="input"
                                    placeholder="Password"
                                    value={loginPassword}
                                    onChange={(e) => setLoginPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button className="play-button" type="submit">Se connecter</button>
                            {logError && <p className="log-error">Erreur de connexion</p>}
                        </form>
    
                        <div className="scinder"></div>
    
                    </div>
                </>
            ) : (
                <span className="loader"></span>
            )}
        </div>
    );
};

export default Home;
