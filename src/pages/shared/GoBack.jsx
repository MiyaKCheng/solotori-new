import React from 'react';

const GoBackButton = () => {
    const goBack = () => {
        window.history.back();
    };

    return (
        <button onClick={goBack} style={buttonStyle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 26 26" fill="none">
                <path
                    d="M13 0C5.832 0 0 5.832 0 13C0 20.168 5.832 26 13 26C20.168 26 26 20.168 26 13C26 5.832 20.168 0 13 0ZM13 2C19.087 2 24 6.913 24 13C24 19.087 19.087 24 13 24C6.913 24 2 19.087 2 13C2 6.913 6.913 2 13 2ZM12.28 6.594L6.595 12.28L5.875 13L6.595 13.72L12.282 19.406L13.72 18L9.72 14H20V12H9.72L13.72 8L12.28 6.594Z"
                    fill="white"
                    fillOpacity="0.8"
                />
            </svg>
        </button>
    );
};

const buttonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    padding: '10px',
    borderRadius: '5px',
    cursor: 'pointer',
};

export default GoBackButton;
