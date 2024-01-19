import React from 'react';
import PopOutLine from './PopOutLine';

const getButtonStyles = () => ({
    buttonContainer: {
        display: 'flex',
        alignItems: 'center',
        height: '54px',
        width: '250px',
        borderRadius: '40px',
        border: '2px solid #FFF',
        background: '#D13200',
        justifyContent: 'center',
        gap: '5px', //  between the Shell and text
        boxShadow: '0px 4px 4px rgba(255, 255, 255, 0.25)',
    },
    buttonText: {
        color: '#FFF',
        fontSize: '18px',
        fontWeight: 700,
        lineHeight: '38px',
        letterSpacing: '0.36px',
    },
});

function CustomButton({ text, link }) {
    const styles = getButtonStyles();

    return (
        <div style={styles.buttonContainer}>
            <a href={link} style={styles.buttonText}>{text}</a>
            <PopOutLine />
        </div >
    );
}

export default CustomButton;
