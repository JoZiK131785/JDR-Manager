import './index.css';

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

export default SkillSlot;