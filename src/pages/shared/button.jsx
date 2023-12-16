import React from 'react';
import PopOutLine from './PopOutLine';

const getButtonStyles = (text) => ({
    buttonContainer: {
        display: 'flex',
        alignItems: 'center',
        height: '54px',
        width: '250px',
        borderRadius: '40px',
        border: '2px solid #FFF',
        background: '#D13200',
        justifyContent: 'center',
        gap: '5px', // Adjust the gap between the Shell icon and text
    },
    buttonText: {
        color: '#FFF',
        fontSize: '18px',
        fontWeight: 500,
        lineHeight: '38px',
        letterSpacing: '0.36px',
    },
});

function CustomButton({ text }) {
    const styles = getButtonStyles(text);

    return (
        <div style={styles.buttonContainer}>
            <a href="https://solotori.jp/" style={styles.buttonText}>{text}</a>
            <PopOutLine />
        </div>
    );
}

export default CustomButton;
