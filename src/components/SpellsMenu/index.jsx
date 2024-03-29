// #region IMPORTS

import './index.css';

import SpellSlot from '../SpellSlot';

// #endregion

const SpellsMenu = ({ player }) => {

    // #region INIT

    const { don1, don2, don3, mundus1, mundus2, mundus3, sort1, sort2, sort3 } = player.spells;
    const level = player.attributes.level;

    // #endregion
    // #region RETURN

    return(
        <ul className="spells-interface">
            <SpellSlot spellsName={ don1.name } spellsSchool={ don1.school } spellsCount={ don1.count } spellsDesc={ don1.desc } />
            { level < 5 ? undefined : <SpellSlot spellsName={ don2.name } spellsSchool={ don2.school } spellsCount={ don2.count } spellsDesc={ don2.desc } /> }
            { level < 10 ? undefined : <SpellSlot spellsName={ don3.name } spellsSchool={ don3.school } spellsCount={ don3.count } spellsDesc={ don3.desc } /> }
            <SpellSlot spellsName={ mundus1.name } spellsSchool={ mundus1.school } spellsCount={ mundus1.count } spellsDesc={ mundus1.desc } type="mundus" />
            <SpellSlot spellsName={ mundus2.name } spellsSchool={ mundus2.school } spellsCount={ mundus2.count } spellsDesc={ mundus2.desc } type="mundus" />
            { level < 10 ? undefined : <SpellSlot spellsName={ mundus3.name } spellsSchool={ mundus3.school } spellsCount={ mundus3.count } spellsDesc={ mundus3.desc }  type="mundus"/> }
            { sort1 === null ? undefined : <SpellSlot spellsName={ sort1.name } spellsSchool={ sort1.school } spellsCount={ sort1.count } spellsDesc={ sort1.desc } type="sort" /> }
            { sort2 === null ? undefined : <SpellSlot spellsName={ sort2.name } spellsSchool={ sort2.school } spellsCount={ sort2.count } spellsDesc={ sort2.desc } type="sort" /> }
            { sort3 === null ? undefined : <SpellSlot spellsName={ sort3.name } spellsSchool={ sort3.school } spellsCount={ sort3.count } spellsDesc={ sort3.desc } type="sort" /> }
        </ul>
    )

    // #endregion
}

export default SpellsMenu;
