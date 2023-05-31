import './index.css';
import PropTypes from 'prop-types';

const SpellSlot = ({ spellsName, spellsSchool, spellsCount, spellsDesc, type }) => {
    
    return(
        <li className="spell-slot">
            <p className="spell-title" >{ spellsName }</p>
            <p className={ "spell-school spell-" + spellsSchool } >{ spellsSchool }</p>
            <p className="spell-count" >{ type === "mundus" ? spellsCount + " Crit" : type === "sort" ? spellsCount : "X" }</p>
            <p className="spell-desc" >{ spellsDesc }</p>
        </li>
    )
}

SpellSlot.propTypes = {
    spellsName: PropTypes.string,
    spellsSchool: PropTypes.string,
    spellsCount: PropTypes.number,
    spellsDesc: PropTypes.string,
    type: PropTypes.string,
}

export default SpellSlot;