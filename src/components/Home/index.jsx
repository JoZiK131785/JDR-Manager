// #region IMPORTS

import './index.css'

import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

// #endregion

const Home = () => {

    // #region INIT

    const navigate = useNavigate();

    const [loginUserName, setLoginUserName] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [logError, setLogError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [loaderLabel, setLoaderLabel] = useState("Chargement...");
    const usernameRef = useRef(null);

    // #endregion
    // #region FUNCTIONS

    const handleLogin = (e) => {
        e.preventDefault();

        /* const fetchCreate = async () => {

            setIsLoading(true);
            setLoaderLabel("Creation du compte...");

            const url = 'https://jdr-manager-server.vercel.app/register';
            const data = {
                email: loginUserName,
                password: loginPassword
            };
    
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch(() => setLogError(true))
            .finally(() => setIsLoading(false))
        };

        fetchCreate(); */

        const fetchLogin = async () => {

            setIsLoading(true);
            setLoaderLabel("Chargement du compte...");

            const url = 'https://jdr-manager-server.vercel.app/login';
            const data = {
                email: loginUserName,
                password: loginPassword
            };
    
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then((response) => response.json())
            .then((data) => tryLogin(data))
            .catch(() => setLogError(true))
            .finally(() => setIsLoading(false))
        };

        fetchLogin();
    };

    function tryLogin(data)
    {
        if(data.token)
        {
            navigate(`/select/${data.id}`)
        }
        else if(data.message === "Passwords does not match")
        {
            console.log("MDP incorrect");
            console.log(data)
        }
        else if(data.message === "Email not found")
        {
            console.log("Email incorrect");
            console.log(data)
        }
        else
            console.log("Error login")
    }

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
                                    className="cta-brown-light"
                                    placeholder="Username"
                                    value={loginUserName}
                                    onChange={(e) => setLoginUserName(e.target.value)}
                                    ref={usernameRef}
                                    required
                                />
    
                                <input
                                    type="password"
                                    className="cta-brown-light"
                                    placeholder="Password"
                                    value={loginPassword}
                                    onChange={(e) => setLoginPassword(e.target.value)}
                                    required
                                />
                            </div>

                            <button className="cta-brown" type="submit">Se connecter</button>

                            {logError && <p className="log-error">Erreur de connexion</p>}

                        </form>
    
                        <div className="scinder"></div>
    
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

};

export default Home;
