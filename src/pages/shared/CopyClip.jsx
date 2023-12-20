import React, { useRef } from 'react';

const CopyClip = () => {
    const textToCopy = '#SOLOTORI #一人旅募集中 #世界観同化 #NewNormal';
    const buttonRef = useRef(null);

    const handleCopyClick = async () => {
        try {
            await navigator.clipboard.writeText(textToCopy);
            buttonRef.current.innerText = '＃コピーした！';
            // popup message
            window.alert('スペでの＃をコピーした！');
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
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

export default CopyClip;
