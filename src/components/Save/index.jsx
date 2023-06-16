import './index.css';
import { useEffect, useState, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCircleCheck } from '@fortawesome/free-solid-svg-icons'

const Save = () => {
    const [isSaving, setIsSaving] = useState(false);
    const [isSaved, setIsSaved] = useState(false);
    const [loaderLabel, setLoaderLabel] = useState("");

    const toggleIsSaving = () => {
        setIsSaving(prevIsSaving => !prevIsSaving);
    }
    
    const toggleIsSaved = () => {
        setIsSaved(prevIsSaved => !prevIsSaved);
    }

    const updatePlayerOnDB = useCallback((player) => {
        setLoaderLabel("Sauvegarde en cours...");

        fetch(`https://jdr-manager-server.vercel.app/players/${player._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(player),
        })
            .then(response => response.json())
            .then(data => {
                toggleIsSaved();
                setLoaderLabel("Sauvegarde réussie");
            })
            .catch(error => {
                setLoaderLabel("Erreur de sauvegarde : " + error);
            })
            .finally(() => {
                setTimeout(() => {
                    toggleIsSaving();
                    toggleIsSaved();
                    setLoaderLabel("");
                }, 2000);
            });
    }, []);

    useEffect(() => {
        if (isSaving) {
            const player = JSON.parse(localStorage.getItem('currentPlayer'));
            if (player) {
                updatePlayerOnDB(player);
            }
        }
    }, [isSaving, updatePlayerOnDB]);

    return (
        <section className="save-ui">
            {!isSaving ? (
                <button className="cta-brown-light" onClick={toggleIsSaving}>Save</button>
            ) : (
                <>
                    {isSaved ? (
                        <div className="menu-icon">
                            <FontAwesomeIcon icon={faFileCircleCheck} className="menu-button-icon" />
                        </div>
                    ) : (
                        <span className="loader"></span>
                    )}

                    <div className="loader-label">
                        <p>{loaderLabel}</p>
                    </div>
                </>
            )}
        </section>
    );
}

export default Save;
