/* eslint-disable react/prop-types */
const AeroButton = ({ label }) => {
    return (
        <button className="aero-button" role="button"><span className="text">{label}</span></button>
    );
}

export default AeroButton;