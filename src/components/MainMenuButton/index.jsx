// #region IMPORTS

import './index.css';

// #endregion

const MainMenuButton = ({ toggle, bool, toggleIndex }) => {

    // #region FUNCTIONS

    const handleClick = () => {
        toggle();
        toggleIndex(1);
    };

    // #endregion
    // #region RETURN

    return(
        <div id="main-menu-button" className={ bool ? "open" : undefined } onClick={ handleClick }>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )

    // #endregion
    
}

export default MainMenuButton;
