import React, { useRef } from 'react';

const Clipboard = () => {
    const textToCopy = '#SOLOTORI #一人旅募集中 #世界観同化 #NewNormal';
    const buttonRef = useRef(null);

    const handleCopyClick = () => {
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);

        textarea.select();
        document.execCommand('copy');

        document.body.removeChild(textarea);

        buttonRef.current.innerText = '＃コピーした！';
        // popup message
        window.alert('スペでの＃をコピーした！');
    };

    return (
        <button
            ref={buttonRef}
            onClick={handleCopyClick}
            style={{
                borderRadius: '40px',
                height: '54px',
                width: '250px',
                border: '2px solid #FFF',
                color: '#FFF',
                fontSize: '18px',
                fontWeight: 500,
                lineHeight: '38px',
                letterSpacing: '0.36px',
                cursor: 'pointer',
                background: '#D13200',
                marginTop: '10px',
            }}
        >
            ＃一括でコピー
        </button>
    );
};

export default Clipboard;
