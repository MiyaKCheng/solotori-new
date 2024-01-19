const getTitleStyles = (text, marginLeft, marginLeftTittle) => ({
    container: {
        position: 'relative',
        overflow: 'hidden',
        height: '100px',
        width: '380px',
        borderRadius: '0 50px 50px 0',
        border: '1px solid',
        borderColor: '#f0967ded',
        background: ' radial-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255 , 0), rgba(255, 255, 255 , 0.2))',
        boxShadow: '-4px 0px 4px 0px rgba(240, 150, 125, 0.60), 4px 0px 4px 0px rgba(125, 157, 240, 0.40), 1px 3px 0px 0px rgba(125, 240, 207, 0.40)',
        backdropFilter: 'blur(4px)',
        marginLeft: marginLeft || '-80px',
    },
    background: {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'inherit',
        filter: 'blur(10px)',
        zIndex: -1,
    },
    title: {
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        marginLeft: marginLeftTittle || '90px',
        width: '330px',
        color: '#FFF',
        fontSize: '32px',
        fontWeight: 700,
        lineHeight: '38px',
        letterSpacing: '0.95px',
        textShadow: '1px 1px 2px rgba(115, 190, 244 , 0.8) , 0px 2px 1px rgba(125, 240, 207, 0.80), 3px 1px 2px rgb(250, 150, 125)',
        zIndex: 1,
    },
});

function Title({ text, marginLeft, marginLeftTittle }) {
    const styles = getTitleStyles(text, marginLeft, marginLeftTittle);

    return (
        <div style={styles.container}>
            <div style={styles.background}></div>
            <h4 style={styles.title}>{text}</h4>
        </div>
    );
}

export default Title;
