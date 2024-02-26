/* eslint-disable react/prop-types */
import button from './assets/round-button.svg';

const RoundButton = ({ className }) => {
    return (
        <div className="round-button">
            <img src={button} />
            <i className={className}></i>
        </div>
    );
}

export default RoundButton;