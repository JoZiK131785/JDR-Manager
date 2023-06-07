// #region IMPORTS

import './index.css';

// #endregion

const SpellSlot = ({ spellsName, spellsSchool, spellsCount, spellsDesc, type }) => {
    
    // #region RETURN

    return(

        <li className="spell-slot">

            <p className="spell-title" >{ spellsName }</p>

            <p className={ "spell-school spell-" + spellsSchool } >{ spellsSchool }</p>

            <p className="spell-count" >{ type === "mundus" ? spellsCount + " Crit" : type === "sort" ? spellsCount : "X" }</p>

            <p className="spell-desc" >{ spellsDesc }</p>
            
        </li>
    )

    // #endregion
}

export default SpellSlot;