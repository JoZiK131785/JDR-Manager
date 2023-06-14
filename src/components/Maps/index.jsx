// #region IMPORTS

import { useState } from 'react';

import { setMap } from "../../utils/functions";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import './index.css';

// #endregion

const Maps = () => {

    const [currentMap, setCurrentMap] = useState(1);

    const handleChangeMap = (e) => {
        setCurrentMap(e);
    }

    // #region RETURN

    return (
        <section className='map'>
            <div className="map-list">
                <button className="cta-brown-light" onClick={() => handleChangeMap(1)}>Nirn</button>
                <button className="cta-brown-light" onClick={() => handleChangeMap(2)}>Tamriel</button>
                <button className="cta-brown-light" onClick={() => handleChangeMap(3)}>Belkarth</button>
            </div>
            <div className="first-panel">
                <div className="second-panel">
                    <div className={ "map-panel" }>
                        <TransformWrapper>
                            <TransformComponent>
                                <img src={process.env.PUBLIC_URL + setMap(currentMap)} alt="" />
                            </TransformComponent>
                        </TransformWrapper>
                    </div>
                </div>
            </div>
        </section>
    );

    // #endregion
    
}

export default Maps;