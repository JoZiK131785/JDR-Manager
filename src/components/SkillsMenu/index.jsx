import './index.css';

import React, { useState, useEffect } from 'react';

import SkillSlot from '../SkillSlot';
import TypePanel from '../TypePanel';
import SkillMenuButton from '../SkillMenuButton';

const SkillsMenu = ({ player }) => {

    const [skillsIndex, setSkillsIndex] = useState(1);
    const [playerLevel, setPlayerLevel] = useState(0);
    const [typeSkill, setTypeSkill] = useState(undefined);

    useEffect(() => {

        switch (skillsIndex) {
            case 5:
                setTypeSkill('weapon');
                setPlayerLevel(player.skills.mainsNues.level);
                break;

            case 6:
                setTypeSkill('weapon');
                setPlayerLevel(player.skills.uneMain.level);
                break;

            case 7:
                setTypeSkill('weapon');
                setPlayerLevel(player.skills.deuxMains.level);
                break;

            case 8:
                setTypeSkill('weapon');
                setPlayerLevel(player.skills.bouclier.level);
                break;

            case 9:
                setTypeSkill('weapon');
                setPlayerLevel(player.skills.arc.level);
                break;

            case 10:
                setTypeSkill('weapon');
                setPlayerLevel(player.skills.baton.level);
                break;

            case 11:
                setTypeSkill('warrior');
                setPlayerLevel(player.skills.intimidation.level);
                break;

            case 12:
                setTypeSkill('warrior');
                setPlayerLevel(player.skills.endurance.level);
                break;

            case 13:
                setTypeSkill('warrior');
                setPlayerLevel(player.skills.persuasion.level);
                break;

            case 14:
                setTypeSkill('warrior');
                setPlayerLevel(player.skills.vigilance.level);
                break;

            case 15:
                setTypeSkill('warrior');
                setPlayerLevel(player.skills.marchandage.level);
                break;

            case 16:
                setTypeSkill('warrior');
                setPlayerLevel(player.skills.fouille.level);
                break;

            case 17:
                setTypeSkill('warrior');
                setPlayerLevel(player.skills.artisanat.level);
                break;

            case 18:
                setTypeSkill('warrior');
                setPlayerLevel(player.skills.armureLourde.level);
                break;

            case 19:
                setTypeSkill('sorcerer');
                setPlayerLevel(player.skills.perception.level);
                break;

            case 20:
                setTypeSkill('sorcerer');
                setPlayerLevel(player.skills.illusion.level);
                break;

            case 21:
                setTypeSkill('sorcerer');
                setPlayerLevel(player.skills.alteration.level);
                break;

            case 22:
                setTypeSkill('sorcerer');
                setPlayerLevel(player.skills.destruction.level);
                break;

            case 23:
                setTypeSkill('sorcerer');
                setPlayerLevel(player.skills.guerison.level);
                break;

            case 24:
                setTypeSkill('sorcerer');
                setPlayerLevel(player.skills.conjuration.level);
                break;

            case 25:
                setTypeSkill('sorcerer');
                setPlayerLevel(player.skills.enchantement.level);
                break;

            case 26:
                setTypeSkill('sorcerer');
                setPlayerLevel(player.skills.armureLegere.level);
                break;

            case 27:
                setTypeSkill('thief');
                setPlayerLevel(player.skills.connaissances.level);
                break;

            case 28:
                setTypeSkill('thief');
                setPlayerLevel(player.skills.agilite.level);
                break;

            case 29:
                setTypeSkill('thief');
                setPlayerLevel(player.skills.discretion.level);
                break;

            case 30:
                setTypeSkill('thief');
                setPlayerLevel(player.skills.crochetage.level);
                break;

            case 31:
                setTypeSkill('thief');
                setPlayerLevel(player.skills.precision.level);
                break;

            case 32:
                setTypeSkill('thief');
                setPlayerLevel(player.skills.vol.level);
                break;

            case 33:
                setTypeSkill('thief');
                setPlayerLevel(player.skills.alchimie.level);
                break;

            case 34:
                setTypeSkill('thief');
                setPlayerLevel(player.skills.armureMoyenne.level);
                break;
        
            default:
                break;
        }
    }, [skillsIndex, player])
    

    const toggleSkillsindex = ( index ) => {
        setSkillsIndex(index);
    }

    return(
        <ul className="skills-interface" >
            <li className="weapon-title" onClick={ () => toggleSkillsindex(1) }>ARME</li>
            <li className="warrior-title" onClick={ () => toggleSkillsindex(2) }>GUERRIER</li>
            <li className="sorcerer-title" onClick={ () => toggleSkillsindex(3) }>MAGE</li>
            <li className="thief-title" onClick={ () => toggleSkillsindex(4) }>VOLEUR</li>

            { skillsIndex === 1 || skillsIndex === 5 ? <SkillSlot level={ player.skills.mainsNues.level } progression={ player.skills.mainsNues.progression } pallier={ player.skills.mainsNues.pallier } type="weapon" skill='Mains Nues' toggle={ () => toggleSkillsindex(5) } index={ skillsIndex } /> : undefined }
            { skillsIndex === 1 || skillsIndex === 6 ? <SkillSlot level={ player.skills.uneMain.level } progression={ player.skills.uneMain.progression } pallier={ player.skills.uneMain.pallier } type="weapon" skill='Une Main' toggle={ () => toggleSkillsindex(6) } index={ skillsIndex } /> : undefined }
            { skillsIndex === 1 || skillsIndex === 7 ? <SkillSlot level={ player.skills.deuxMains.level } progression={ player.skills.deuxMains.progression } pallier={ player.skills.deuxMains.pallier } type="weapon" skill='Deux Mains' toggle={ () => toggleSkillsindex(7) } index={ skillsIndex } /> : undefined }
            { skillsIndex === 1 || skillsIndex === 8 ? <SkillSlot level={ player.skills.bouclier.level } progression={ player.skills.bouclier.progression } pallier={ player.skills.bouclier.pallier } type="weapon" skill='Bouclier' toggle={ () => toggleSkillsindex(8) } index={ skillsIndex } /> : undefined }
            { skillsIndex === 1 || skillsIndex === 9 ? <SkillSlot level={ player.skills.arc.level } progression={ player.skills.arc.progression } pallier={ player.skills.arc.pallier } type="weapon" skill='Arc' toggle={ () => toggleSkillsindex(9) } index={ skillsIndex } /> : undefined }
            { skillsIndex === 1 || skillsIndex === 10 ? <SkillSlot level={ player.skills.baton.level } progression={ player.skills.baton.progression } pallier={ player.skills.baton.pallier } type="weapon" skill='Baton' toggle={ () => toggleSkillsindex(10) } index={ skillsIndex } /> : undefined }
            
            { skillsIndex === 2 || skillsIndex === 11 ? <SkillSlot level={ player.skills.intimidation.level } progression={ player.skills.intimidation.progression } pallier={ player.skills.intimidation.pallier } type="warrior" skill='Intimidation' toggle={ () => toggleSkillsindex(11) } index={ skillsIndex } /> : undefined }
            { skillsIndex === 2 || skillsIndex === 12 ? <SkillSlot level={ player.skills.endurance.level } progression={ player.skills.endurance.progression } pallier={ player.skills.endurance.pallier } type="warrior" skill='Endurance' toggle={ () => toggleSkillsindex(12) } index={ skillsIndex } /> : undefined }
            { skillsIndex === 2 || skillsIndex === 13 ? <SkillSlot level={ player.skills.persuasion.level } progression={ player.skills.persuasion.progression } pallier={ player.skills.persuasion.pallier } type="warrior" skill='Persuasion' toggle={ () => toggleSkillsindex(13) } index={ skillsIndex } /> : undefined }
            { skillsIndex === 2 || skillsIndex === 14 ? <SkillSlot level={ player.skills.vigilance.level } progression={ player.skills.vigilance.progression } pallier={ player.skills.vigilance.pallier } type="warrior" skill='Vigilance' toggle={ () => toggleSkillsindex(14) } index={ skillsIndex } /> : undefined }
            { skillsIndex === 2 || skillsIndex === 15 ? <SkillSlot level={ player.skills.marchandage.level } progression={ player.skills.marchandage.progression } pallier={ player.skills.marchandage.pallier } type="warrior" skill='Marchandage' toggle={ () => toggleSkillsindex(15) } index={ skillsIndex } /> : undefined }
            { skillsIndex === 2 || skillsIndex === 16 ? <SkillSlot level={ player.skills.fouille.level } progression={ player.skills.fouille.progression } pallier={ player.skills.fouille.pallier } type="warrior" skill='Fouille' toggle={ () => toggleSkillsindex(16) } index={ skillsIndex } /> : undefined }
            { skillsIndex === 2 || skillsIndex === 17 ? <SkillSlot level={ player.skills.artisanat.level } progression={ player.skills.artisanat.progression } pallier={ player.skills.artisanat.pallier } type="warrior" skill='Artisanat' toggle={ () => toggleSkillsindex(17) } index={ skillsIndex } /> : undefined }
            { skillsIndex === 2 || skillsIndex === 18 ? <SkillSlot level={ player.skills.armureLourde.level } progression={ player.skills.armureLourde.progression } pallier={ player.skills.armureLourde.pallier } type="warrior" skill='Armure Lourde' toggle={ () => toggleSkillsindex(18) } index={ skillsIndex } /> : undefined }
            
            { skillsIndex === 3 || skillsIndex === 19 ? <SkillSlot level={ player.skills.perception.level } progression={ player.skills.perception.progression } pallier={ player.skills.perception.pallier } type="sorcerer" skill='Perception' toggle={ () => toggleSkillsindex(19) } index={ skillsIndex } /> : undefined }
            { skillsIndex === 3 || skillsIndex === 20 ? <SkillSlot level={ player.skills.illusion.level } progression={ player.skills.illusion.progression } pallier={ player.skills.illusion.pallier } type="sorcerer" skill='Illusion' toggle={ () => toggleSkillsindex(20) } index={ skillsIndex } /> : undefined }
            { skillsIndex === 3 || skillsIndex === 21 ? <SkillSlot level={ player.skills.alteration.level } progression={ player.skills.alteration.progression } pallier={ player.skills.alteration.pallier } type="sorcerer" skill='Alteration' toggle={ () => toggleSkillsindex(21) } index={ skillsIndex } /> : undefined }
            { skillsIndex === 3 || skillsIndex === 22 ? <SkillSlot level={ player.skills.destruction.level } progression={ player.skills.destruction.progression } pallier={ player.skills.destruction.pallier } type="sorcerer" skill='Destruction' toggle={ () => toggleSkillsindex(22) } index={ skillsIndex } /> : undefined }
            { skillsIndex === 3 || skillsIndex === 23 ? <SkillSlot level={ player.skills.guerison.level } progression={ player.skills.guerison.progression } pallier={ player.skills.guerison.pallier } type="sorcerer" skill='Guerison' toggle={ () => toggleSkillsindex(23) } index={ skillsIndex } /> : undefined }
            { skillsIndex === 3 || skillsIndex === 24 ? <SkillSlot level={ player.skills.conjuration.level } progression={ player.skills.conjuration.progression } pallier={ player.skills.conjuration.pallier } type="sorcerer" skill='Conjuration' toggle={ () => toggleSkillsindex(24) } index={ skillsIndex } /> : undefined }
            { skillsIndex === 3 || skillsIndex === 25 ? <SkillSlot level={ player.skills.enchantement.level } progression={ player.skills.enchantement.progression } pallier={ player.skills.enchantement.pallier } type="sorcerer" skill='Enchantement' toggle={ () => toggleSkillsindex(25) } index={ skillsIndex } /> : undefined }
            { skillsIndex === 3 || skillsIndex === 26 ? <SkillSlot level={ player.skills.armureLegere.level } progression={ player.skills.armureLegere.progression } pallier={ player.skills.armureLegere.pallier } type="sorcerer" skill='Armure Legere' toggle={ () => toggleSkillsindex(26) } index={ skillsIndex } /> : undefined }
            
            { skillsIndex === 4 || skillsIndex === 27 ? <SkillSlot level={ player.skills.connaissances.level } progression={ player.skills.connaissances.progression } pallier={ player.skills.connaissances.pallier } type="thief" skill='Connaissances' toggle={ () => toggleSkillsindex(27) } index={ skillsIndex } /> : undefined }
            { skillsIndex === 4 || skillsIndex === 28 ? <SkillSlot level={ player.skills.agilite.level } progression={ player.skills.agilite.progression } pallier={ player.skills.agilite.pallier } type="thief" skill='Agilite' toggle={ () => toggleSkillsindex(28) } index={ skillsIndex } /> : undefined }
            { skillsIndex === 4 || skillsIndex === 29 ? <SkillSlot level={ player.skills.discretion.level } progression={ player.skills.discretion.progression } pallier={ player.skills.discretion.pallier } type="thief" skill='Discretion' toggle={ () => toggleSkillsindex(29) } index={ skillsIndex } /> : undefined }
            { skillsIndex === 4 || skillsIndex === 30 ? <SkillSlot level={ player.skills.crochetage.level } progression={ player.skills.crochetage.progression } pallier={ player.skills.crochetage.pallier } type="thief" skill='Crochetage' toggle={ () => toggleSkillsindex(30) } index={ skillsIndex } /> : undefined }
            { skillsIndex === 4 || skillsIndex === 31 ? <SkillSlot level={ player.skills.precision.level } progression={ player.skills.precision.progression } pallier={ player.skills.precision.pallier } type="thief" skill='Precision' toggle={ () => toggleSkillsindex(31) } index={ skillsIndex } /> : undefined }
            { skillsIndex === 4 || skillsIndex === 32 ? <SkillSlot level={ player.skills.vol.level } progression={ player.skills.vol.progression } pallier={ player.skills.vol.pallier } type="thief" skill='Vol' toggle={ () => toggleSkillsindex(32) } index={ skillsIndex } /> : undefined }
            { skillsIndex === 4 || skillsIndex === 33 ? <SkillSlot level={ player.skills.alchimie.level } progression={ player.skills.alchimie.progression } pallier={ player.skills.alchimie.pallier } type="thief" skill='Alchimie' toggle={ () => toggleSkillsindex(33) } index={ skillsIndex } /> : undefined }
            { skillsIndex === 4 || skillsIndex === 34 ? <SkillSlot level={ player.skills.armureMoyenne.level } progression={ player.skills.armureMoyenne.progression } pallier={ player.skills.armureMoyenne.pallier } type="thief" skill='Armure Moyenne' toggle={ () => toggleSkillsindex(34) } index={ skillsIndex } /> : undefined }

            { skillsIndex >= 5 ? <TypePanel level={ 10 - (Math.floor(playerLevel / 10)) } type={ typeSkill } /> : undefined }
            { skillsIndex >= 5 ? <TypePanel level={ 10 - (playerLevel - (Math.floor(playerLevel / 10)*10)) } type={ typeSkill } /> : undefined }
            { skillsIndex >= 5 ? <li className="buttons-list">
                <SkillMenuButton type="Critique" player={ player } count={ 3 } index={ skillsIndex } toggleSkillindex={ setSkillsIndex } />
                <SkillMenuButton type="Reussite" player={ player } count={ 1 } index={ skillsIndex } toggleSkillindex={ setSkillsIndex } />
                <SkillMenuButton type="Echec" player={ player } count={ 0 } />
            </li> : undefined }
        </ul>
    )
}

export default SkillsMenu;