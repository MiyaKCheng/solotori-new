import React from "react";
import _debounce from 'lodash/debounce';
import { useSpring, animated } from "react-spring";
import cloud01 from "../../../assets/img/cloud01.png";
import cloud02 from "../../../assets/img/cloud02.png";
import cloud06 from "../../../assets/img/cloud06.png";
import cloud07 from "../../../assets/img/cloud07.png";
import cloud08 from "../../../assets/img/cloud08.png";
import cloudBg from "../../../assets/img/cloudBg.png";
import kv3dCloud from "../../../assets/img/kv-3d-cloud.png";

const commonStyle = {
    display: "block",
    width: "100%",
    position: "absolute",

};

const KvBg = () => {

    const [{ offset }, set] = useSpring(() => ({
        offset: 0,
        config: { tension: 170, friction: 26 } // 調整這裡的數值
    }));
    const handleScroll = _debounce(() => {
        requestAnimationFrame(() => {
            const scrollY = window.scrollY;
            set({ offset: scrollY });
        });
    }, 20);
    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);
    //
    const transStyle = {
        willChange: "transform",
        transform: offset.to((o) => `translate3d(0, -${o * 0.5}px, 0)`),
        WebkitTransform: `translate3d(0, -${offset * 0.5}px, 0)`,
    };

    const cloudBgStyle = {
        backgroundImage: `url(${cloudBg})`,
        backgroundSize: "cover",
        height: "900px",
        width: "100%",
        ...commonStyle,
        top: -50,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -10,
        opacity: "0.7",
    };
    const kv3dCloudStyle = {
        ...commonStyle,
        left: "-80px",
        marginTop: "280px",
        zIndex: -1,
        opacity: "1",
    };

    // 
    const cloud02Style = {
        ...commonStyle,
        ...transStyle,
        marginLeft: "-38%",
        marginTop: "-80px",
        zIndex: -1,
        opacity: "0.9",
    };

    const cloud01Style = {
        ...commonStyle,
        transStyle,
        marginLeft: "50%",
        marginTop: "80%",
        zIndex: "-40",
        opacity: "0.5",
    };
    const cloud06Style = {
        ...commonStyle,
        ...transStyle,
        marginLeft: "50%",
        marginTop: "1100px",
        zIndex: 0,
        opacity: "0.5",
    };
    const cloud07Style = {
        ...commonStyle,
        ...transStyle,
        marginLeft: "-10%",
        marginTop: "920px",
        zIndex: 0,
        opacity: "0.9",
    };
    const cloud08Style = {
        ...commonStyle,
        ...transStyle,
        marginLeft: "10%",
        marginTop: "1450px",
        zIndex: 0,
        opacity: "0.5",
    };

    return (
        <div>
            {/* Cloud Background */}
            <div style={cloudBgStyle} />

            {/* Cloud Layers for KV Area */}
            <animated.img src={cloud02} style={cloud02Style} alt="Cloud top left" />
            <animated.img src={kv3dCloud} style={kv3dCloudStyle} alt="3D Cloud" />
            <animated.img src={cloud01} style={cloud01Style} alt="Cloud 01" />
            <animated.img src={cloud07} style={cloud07Style} alt="Cloud" />
            <animated.img src={cloud06} style={cloud06Style} alt="Cloud" />
            <animated.img src={cloud08} style={cloud08Style} alt="Cloud" />
        </div>


    );
};

export default KvBg;
