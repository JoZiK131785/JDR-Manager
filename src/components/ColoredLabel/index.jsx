import './index.css';
import PropTypes from 'prop-types';

const ColoredLabel = ({type, color, value}) => {

    return(
        <li className={ type + "-user-" + color }> { value } </li>
    )
}

ColoredLabel.propTypes = {
    type: PropTypes.string,
    color: PropTypes.string,
}

export default ColoredLabel;