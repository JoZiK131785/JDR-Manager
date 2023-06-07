import './index.css';
import PropTypes from 'prop-types';

const SkillSlot = ({ level, progression, pallier, type, skill, toggle, index }) => {

    return(
        <section className={ index < 5 ? "skill-slot" : "skill-actif" } onClick={ () => toggle(index)}>
            <ul className="skill-numbers">
                <li className={ type + "-skill" }>{ level }</li>
                <li className="skill-learn">{ progression + " / " + pallier }</li>
            </ul>
            <p className={ type + "-skill" }>{ skill }</p>
        </section>
    )
}

SkillSlot.propTypes = {
    level: PropTypes.number,
    progression: PropTypes.number,
    pallier: PropTypes.number,
    type: PropTypes.string,
    skill: PropTypes.string,
}

export default SkillSlot;