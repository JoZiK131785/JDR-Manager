import './index.css';
import PropTypes from 'prop-types';

const TypePanel = ({ level, type }) => {

    return(
        <div className={ "jet-info jet-info-" + type }> { level } </div>
    )
}

TypePanel.propTypes = {
    type: PropTypes.string,
    color: PropTypes.string,
    value: PropTypes.string,
}

export default TypePanel;