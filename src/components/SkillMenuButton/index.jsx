import './index.css';

const SkillMenuButton = ({ type, player, count, index, toggleSkillindex }) => {

    function setSkills()
    {
        const newPlayer = player;
        let progression = 0;
        let pallier = 0;

        switch (index) {

            case 5:

            progression = newPlayer.skills.mainsNues.progression;
            pallier = newPlayer.skills.mainsNues.pallier;

                if(progression + count >= pallier)
                {
                    newPlayer.skills.mainsNues.level++;
                    newPlayer.skills.mainsNues.progression = progression + count - pallier;
                    newPlayer.skills.mainsNues.pallier = newPlayer.skills.mainsNues.level - 20;
                }
                else
                {                   
                    newPlayer.skills.mainsNues.progression = progression + count;
                }

                // MAJ du joueur dans le localStorage
                localStorage.setItem('currentPlayer', JSON.stringify(newPlayer))

                toggleSkillindex(1)

                break;

            case 6:

            progression = newPlayer.skills.uneMain.progression;
            pallier = newPlayer.skills.uneMain.pallier;

                if(progression + count >= pallier)
                {
                    newPlayer.skills.uneMain.level++;
                    newPlayer.skills.uneMain.progression = progression + count - pallier;
                    newPlayer.skills.uneMain.pallier = newPlayer.skills.uneMain.level;
                }
                else
                    newPlayer.skills.uneMain.progression = progression + count;

                // MAJ du joueur dans le localStorage
                localStorage.setItem('currentPlayer', JSON.stringify(newPlayer))

                toggleSkillindex(1)

                break;

            case 7:

            progression = newPlayer.skills.deuxMains.progression;
            pallier = newPlayer.skills.deuxMains.pallier;

                if(progression + count >= pallier)
                {
                    newPlayer.skills.deuxMains.level++;
                    newPlayer.skills.deuxMains.progression = progression + count - pallier;
                    newPlayer.skills.deuxMains.pallier = newPlayer.skills.deuxMains.level;
                }
                else
                    newPlayer.skills.deuxMains.progression = progression + count;

                // MAJ du joueur dans le localStorage
                localStorage.setItem('currentPlayer', JSON.stringify(newPlayer))

                toggleSkillindex(1)

                break;

            case 8:

            progression = newPlayer.skills.bouclier.progression;
            pallier = newPlayer.skills.bouclier.pallier;

                if(progression + count >= pallier)
                {
                    newPlayer.skills.bouclier.level++;
                    newPlayer.skills.bouclier.progression = progression + count - pallier;
                    newPlayer.skills.bouclier.pallier = newPlayer.skills.bouclier.level;
                }
                else
                    newPlayer.skills.bouclier.progression = progression + count;

                // MAJ du joueur dans le localStorage
                localStorage.setItem('currentPlayer', JSON.stringify(newPlayer))

                toggleSkillindex(1)

                break;

            case 9:

            progression = newPlayer.skills.arc.progression;
            pallier = newPlayer.skills.arc.pallier;

                if(progression + count >= pallier)
                {
                    newPlayer.skills.arc.level++;
                    newPlayer.skills.arc.progression = progression + count - pallier;
                    newPlayer.skills.arc.pallier = newPlayer.skills.arc.level;
                }
                else
                    newPlayer.skills.arc.progression = progression + count;

                // MAJ du joueur dans le localStorage
                localStorage.setItem('currentPlayer', JSON.stringify(newPlayer))

                toggleSkillindex(1)

                break;

            case 10:

            progression = newPlayer.skills.baton.progression;
            pallier = newPlayer.skills.baton.pallier;

                if(progression + count >= pallier)
                {
                    newPlayer.skills.baton.level++;
                    newPlayer.skills.baton.progression = progression + count - pallier;
                    newPlayer.skills.baton.pallier = newPlayer.skills.baton.level;
                }
                else
                    newPlayer.skills.baton.progression = progression + count;

                // MAJ du joueur dans le localStorage
                localStorage.setItem('currentPlayer', JSON.stringify(newPlayer))

                toggleSkillindex(1)

                break;

            case 11 :

            progression = newPlayer.skills.intimidation.progression;
            pallier = newPlayer.skills.intimidation.pallier;

                if(progression + count >= pallier)
                {
                    newPlayer.skills.intimidation.level++;
                    newPlayer.skills.intimidation.progression = progression + count - pallier;
                    newPlayer.skills.intimidation.pallier = newPlayer.skills.intimidation.level - 20;
                }
                else
                    newPlayer.skills.intimidation.progression = progression + count;

                // MAJ du joueur dans le localStorage
                localStorage.setItem('currentPlayer', JSON.stringify(newPlayer))

                toggleSkillindex(2)

                break;

            case 12:

            progression = newPlayer.skills.endurance.progression;
            pallier = newPlayer.skills.endurance.pallier;

                if(progression + count >= pallier)
                {
                    newPlayer.skills.endurance.level++;
                    newPlayer.skills.endurance.progression = progression + count - pallier;
                    newPlayer.skills.endurance.pallier = newPlayer.skills.endurance.level - 20;
                }
                else
                    newPlayer.skills.endurance.progression = progression + count;

                // MAJ du joueur dans le localStorage
                localStorage.setItem('currentPlayer', JSON.stringify(newPlayer))

                toggleSkillindex(2)

                break;

            case 13:

            progression = newPlayer.skills.persuasion.progression;
            pallier = newPlayer.skills.persuasion.pallier;

                if(progression + count >= pallier)
                {
                    newPlayer.skills.persuasion.level++;
                    newPlayer.skills.persuasion.progression = progression + count - pallier;
                    newPlayer.skills.persuasion.pallier = newPlayer.skills.persuasion.level - 20;
                }
                else
                    newPlayer.skills.persuasion.progression = progression + count;

                // MAJ du joueur dans le localStorage
                localStorage.setItem('currentPlayer', JSON.stringify(newPlayer))

                toggleSkillindex(2)

                break;

            case 14:

            progression = newPlayer.skills.vigilance.progression;
            pallier = newPlayer.skills.vigilance.pallier;

                if(progression + count >= pallier)
                {
                    newPlayer.skills.vigilance.level++;
                    newPlayer.skills.vigilance.progression = progression + count - pallier;
                    newPlayer.skills.vigilance.pallier = newPlayer.skills.vigilance.level - 20;
                }
                else
                    newPlayer.skills.vigilance.progression = progression + count;

                // MAJ du joueur dans le localStorage
                localStorage.setItem('currentPlayer', JSON.stringify(newPlayer))

                toggleSkillindex(2)

                break;

            case 15:

            progression = newPlayer.skills.marchandage.progression;
            pallier = newPlayer.skills.marchandage.pallier;

                if(progression + count >= pallier)
                {
                    newPlayer.skills.marchandage.level++;
                    newPlayer.skills.marchandage.progression = progression + count - pallier;
                    newPlayer.skills.marchandage.pallier = newPlayer.skills.marchandage.level - 20;
                }
                else
                    newPlayer.skills.marchandage.progression = progression + count;

                // MAJ du joueur dans le localStorage
                localStorage.setItem('currentPlayer', JSON.stringify(newPlayer))

                toggleSkillindex(2)

                break;

            case 16:

            progression = newPlayer.skills.fouille.progression;
            pallier = newPlayer.skills.fouille.pallier;

                if(progression + count >= pallier)
                {
                    newPlayer.skills.fouille.level++;
                    newPlayer.skills.fouille.progression = progression + count - pallier;
                    newPlayer.skills.fouille.pallier = newPlayer.skills.fouille.level - 20;
                }
                else
                    newPlayer.skills.fouille.progression = progression + count;

                // MAJ du joueur dans le localStorage
                localStorage.setItem('currentPlayer', JSON.stringify(newPlayer))

                toggleSkillindex(2)

                break;
            
            case 17:

            progression = newPlayer.skills.artisanat.progression;
            pallier = newPlayer.skills.artisanat.pallier;

                if(progression + count >= pallier)
                {
                    newPlayer.skills.artisanat.level++;
                    newPlayer.skills.artisanat.progression = progression + count - pallier;
                    newPlayer.skills.artisanat.pallier = newPlayer.skills.artisanat.level;
                }
                else
                    newPlayer.skills.artisanat.progression = progression + count;

                // MAJ du joueur dans le localStorage
                localStorage.setItem('currentPlayer', JSON.stringify(newPlayer))

                toggleSkillindex(2)

                break;

            case 18:

            progression = newPlayer.skills.armureLourde.progression;
            pallier = newPlayer.skills.armureLourde.pallier;

                if(progression + count >= pallier)
                {
                    newPlayer.skills.armureLourde.level++;
                    newPlayer.skills.armureLourde.progression = progression + count - pallier;
                    newPlayer.skills.armureLourde.pallier = newPlayer.skills.armureLourde.level;
                }
                else
                    newPlayer.skills.armureLourde.progression = progression + count;

                // MAJ du joueur dans le localStorage
                localStorage.setItem('currentPlayer', JSON.stringify(newPlayer))

                toggleSkillindex(2)

                break;

            case 19:

            progression = newPlayer.skills.perception.progression;
            pallier = newPlayer.skills.perception.pallier;

                if(progression + count >= pallier)
                {
                    newPlayer.skills.perception.level++;
                    newPlayer.skills.perception.progression = progression + count - pallier;
                    newPlayer.skills.perception.pallier = newPlayer.skills.perception.level - 20;
                }
                else
                    newPlayer.skills.perception.progression = progression + count;

                // MAJ du joueur dans le localStorage
                localStorage.setItem('currentPlayer', JSON.stringify(newPlayer))

                toggleSkillindex(3)

                break;

            case 20:

            progression = newPlayer.skills.illusion.progression;
            pallier = newPlayer.skills.illusion.pallier;

                if(progression + count >= pallier)
                {
                    newPlayer.skills.illusion.level++;
                    newPlayer.skills.illusion.progression = progression + count - pallier;
                    newPlayer.skills.illusion.pallier = newPlayer.skills.illusion.level;
                }
                else
                    newPlayer.skills.illusion.progression = progression + count;

                // MAJ du joueur dans le localStorage
                localStorage.setItem('currentPlayer', JSON.stringify(newPlayer))

                toggleSkillindex(3)

                break;

            case 21:

            progression = newPlayer.skills.alteration.progression;
            pallier = newPlayer.skills.alteration.pallier;

                if(progression + count >= pallier)
                {
                    newPlayer.skills.alteration.level++;
                    newPlayer.skills.alteration.progression = progression + count - pallier;
                    newPlayer.skills.alteration.pallier = newPlayer.skills.alteration.level;
                }
                else
                    newPlayer.skills.alteration.progression = progression + count;

                // MAJ du joueur dans le localStorage
                localStorage.setItem('currentPlayer', JSON.stringify(newPlayer))

                toggleSkillindex(3)

                break;

            case 22:

            progression = newPlayer.skills.destruction.progression;
            pallier = newPlayer.skills.destruction.pallier;

                if(progression + count >= pallier)
                {
                    newPlayer.skills.destruction.level++;
                    newPlayer.skills.destruction.progression = progression + count - pallier;
                    newPlayer.skills.destruction.pallier = newPlayer.skills.destruction.level;
                }
                else
                    newPlayer.skills.destruction.progression = progression + count;

                // MAJ du joueur dans le localStorage
                localStorage.setItem('currentPlayer', JSON.stringify(newPlayer))

                toggleSkillindex(3)

                break;

            case 23:

            progression = newPlayer.skills.guerison.progression;
            pallier = newPlayer.skills.guerison.pallier;

                if(progression + count >= pallier)
                {
                    newPlayer.skills.guerison.level++;
                    newPlayer.skills.guerison.progression = progression + count - pallier;
                    newPlayer.skills.guerison.pallier = newPlayer.skills.guerison.level;
                }
                else
                    newPlayer.skills.guerison.progression = progression + count;

                // MAJ du joueur dans le localStorage
                localStorage.setItem('currentPlayer', JSON.stringify(newPlayer))

                toggleSkillindex(3)

                break;

            case 24:

            progression = newPlayer.skills.conjuration.progression;
            pallier = newPlayer.skills.conjuration.pallier;

                if(progression + count >= pallier)
                {
                    newPlayer.skills.conjuration.level++;
                    newPlayer.skills.conjuration.progression = progression + count - pallier;
                    newPlayer.skills.conjuration.pallier = newPlayer.skills.conjuration.level;
                }
                else
                    newPlayer.skills.conjuration.progression = progression + count;

                // MAJ du joueur dans le localStorage
                localStorage.setItem('currentPlayer', JSON.stringify(newPlayer))

                toggleSkillindex(3)

                break;

            case 25:

            progression = newPlayer.skills.enchantement.progression;
            pallier = newPlayer.skills.enchantement.pallier;

                if(progression + count >= pallier)
                {
                    newPlayer.skills.enchantement.level++;
                    newPlayer.skills.enchantement.progression = progression + count - pallier;
                    newPlayer.skills.enchantement.pallier = newPlayer.skills.enchantement.level;
                }
                else
                    newPlayer.skills.enchantement.progression = progression + count;

                // MAJ du joueur dans le localStorage
                localStorage.setItem('currentPlayer', JSON.stringify(newPlayer))

                toggleSkillindex(3)

                break;

            case 26:

            progression = newPlayer.skills.armureLegere.progression;
            pallier = newPlayer.skills.armureLegere.pallier;

                if(progression + count >= pallier)
                {
                    newPlayer.skills.armureLegere.level++;
                    newPlayer.skills.armureLegere.progression = progression + count - pallier;
                    newPlayer.skills.armureLegere.pallier = newPlayer.skills.armureLegere.level;
                }
                else
                    newPlayer.skills.armureLegere.progression = progression + count;

                // MAJ du joueur dans le localStorage
                localStorage.setItem('currentPlayer', JSON.stringify(newPlayer))

                toggleSkillindex(3)

                break;

            case 27:

            progression = newPlayer.skills.connaissances.progression;
            pallier = newPlayer.skills.connaissances.pallier;

                if(progression + count >= pallier)
                {
                    newPlayer.skills.connaissances.level++;
                    newPlayer.skills.connaissances.progression = progression + count - pallier;
                    newPlayer.skills.connaissances.pallier = newPlayer.skills.connaissances.level - 20;
                }
                else
                    newPlayer.skills.connaissances.progression = progression + count;

                // MAJ du joueur dans le localStorage
                localStorage.setItem('currentPlayer', JSON.stringify(newPlayer))

                toggleSkillindex(4)

                break;

            case 28:

            progression = newPlayer.skills.agilite.progression;
            pallier = newPlayer.skills.agilite.pallier;

                if(progression + count >= pallier)
                {
                    newPlayer.skills.agilite.level++;
                    newPlayer.skills.agilite.progression = progression + count - pallier;
                    newPlayer.skills.agilite.pallier = newPlayer.skills.agilite.level;
                }
                else
                    newPlayer.skills.agilite.progression = progression + count;

                // MAJ du joueur dans le localStorage
                localStorage.setItem('currentPlayer', JSON.stringify(newPlayer))

                toggleSkillindex(4)

                break;

            case 29:

            progression = newPlayer.skills.discretion.progression;
            pallier = newPlayer.skills.discretion.pallier;

                if(progression + count >= pallier)
                {
                    newPlayer.skills.discretion.level++;
                    newPlayer.skills.discretion.progression = progression + count - pallier;
                    newPlayer.skills.discretion.pallier = newPlayer.skills.discretion.level - 20;
                }
                else
                    newPlayer.skills.discretion.progression = progression + count;

                // MAJ du joueur dans le localStorage
                localStorage.setItem('currentPlayer', JSON.stringify(newPlayer))

                toggleSkillindex(4)

                break;

            case 30:

            progression = newPlayer.skills.crochetage.progression;
            pallier = newPlayer.skills.crochetage.pallier;

                if(progression + count >= pallier)
                {
                    newPlayer.skills.crochetage.level++;
                    newPlayer.skills.crochetage.progression = progression + count - pallier;
                    newPlayer.skills.crochetage.pallier = newPlayer.skills.crochetage.level - 20;
                }
                else
                    newPlayer.skills.crochetage.progression = progression + count;

                // MAJ du joueur dans le localStorage
                localStorage.setItem('currentPlayer', JSON.stringify(newPlayer))

                toggleSkillindex(4)

                break;

            case 31:

            progression = newPlayer.skills.precision.progression;
            pallier = newPlayer.skills.precision.pallier;

                if(progression + count >= pallier)
                {
                    newPlayer.skills.precision.level++;
                    newPlayer.skills.precision.progression = progression + count - pallier;
                    newPlayer.skills.precision.pallier = newPlayer.skills.precision.level - 20;
                }
                else
                    newPlayer.skills.precision.progression = progression + count;

                // MAJ du joueur dans le localStorage
                localStorage.setItem('currentPlayer', JSON.stringify(newPlayer))

                toggleSkillindex(4)

                break;

            case 32:

            progression = newPlayer.skills.vol.progression;
            pallier = newPlayer.skills.vol.pallier;

                if(progression + count >= pallier)
                {
                    newPlayer.skills.vol.level++;
                    newPlayer.skills.vol.progression = progression + count - pallier;
                    newPlayer.skills.vol.pallier = newPlayer.skills.vol.level - 20;
                }
                else
                    newPlayer.skills.vol.progression = progression + count;

                // MAJ du joueur dans le localStorage
                localStorage.setItem('currentPlayer', JSON.stringify(newPlayer))

                toggleSkillindex(4)

                break;

            case 33:

            progression = newPlayer.skills.alchimie.progression;
            pallier = newPlayer.skills.alchimie.pallier;

                if(progression + count >= pallier)
                {
                    newPlayer.skills.alchimie.level++;
                    newPlayer.skills.alchimie.progression = progression + count - pallier;
                    newPlayer.skills.alchimie.pallier = newPlayer.skills.alchimie.level;
                }
                else
                    newPlayer.skills.alchimie.progression = progression + count;

                // MAJ du joueur dans le localStorage
                localStorage.setItem('currentPlayer', JSON.stringify(newPlayer))

                toggleSkillindex(4)

                break;

            case 34:

            progression = newPlayer.skills.armureMoyenne.progression;
            pallier = newPlayer.skills.armureMoyenne.pallier;

                if(progression + count >= pallier)
                {
                    newPlayer.skills.armureMoyenne.level++;
                    newPlayer.skills.armureMoyenne.progression = progression + count - pallier;
                    newPlayer.skills.armureMoyenne.pallier = newPlayer.skills.armureMoyenne.level;
                }
                else
                    newPlayer.skills.armureMoyenne.progression = progression + count;

                // MAJ du joueur dans le localStorage
                localStorage.setItem('currentPlayer', JSON.stringify(newPlayer))

                toggleSkillindex(4)

                break;
        
            default:
                break;
        }
    }

    return(
        <div className={ "skill-button " + type } onClick={ () => setSkills() } >{ type }</div>
    )
}

export default SkillMenuButton;