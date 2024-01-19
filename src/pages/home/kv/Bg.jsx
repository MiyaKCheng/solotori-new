import React from "react";
import { useSpring, animated } from "react-spring";
import cloud01 from "../../../assets/img/cloud01.png";
import cloud02 from "../../../assets/img/cloud02.png";
import cloud06 from "../../../assets/img/cloud06.png";
import cloud07 from "../../../assets/img/cloud07.png";
import cloud08 from "../../../assets/img/cloud08.png";
import cloudBg from "../../../assets/img/cloudBg.png";
import kv3dCloud from "../../../assets/img/kv-3d-cloud.png";

const KvBg = () => {
    const [{ offset }, set] = useSpring(() => ({ offset: 0 }));

    const handleScroll = () => {
        const scrollY = window.scrollY;
        console.log('Scroll Position:', scrollY);
        set({ offset: scrollY });
    };

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div>
            {/* Cloud Background */}
            <div
                style={{
                    backgroundImage: `url(${cloudBg})`,
                    backgroundSize: "cover",
                    height: "900px",
                    width: "100%",
                    position: "absolute",
                    top: -50,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: -10,
                    opacity: "0.7",

                }} />

            {/* Cloud Layers for KV Area */}
            <animated.img
                src={cloud02}
                style={{
                    display: "block",
                    width: "100%",
                    marginLeft: "-38%",
                    marginTop: "-80px",
                    position: "absolute",
                    transform: offset.to((o) => `translateY(-${o * 0.3}px)`),
                    zIndex: -1,
                    opacity: "0.9",
                }}
                alt="Cloud top left"
            />
            <animated.img
                src={cloud01}
                style={{
                    display: "block",
                    width: "100%",
                    marginLeft: "-50%",
                    marginTop: "40%",
                    position: "absolute",
                    transform: offset.to((o) => `translateY(-${o * 0.15}px)`),
                    zIndex: "-1",
                    opacity: "0.5",
                }}
                alt="Cloud 03"
            />

            {/* 3D Cloud for KV Area */}
            <animated.img
                src={kv3dCloud}
                style={{
                    display: "block",
                    width: "100%",
                    position: "absolute",
                    transform: offset.to((o) => `translateY(${o * 0.05}px)`),
                    left: "-80px",
                    marginTop: "280px",
                    zIndex: -1,
                    opacity: "1"
                }}
                alt="3D Cloud"
            />
            <animated.img
                src={cloud01}
                style={{
                    display: "block",
                    width: "100%",
                    marginLeft: "50%",
                    marginTop: "80%",
                    position: "absolute",
                    transform: offset.to((o) => `translateY(-${o * 0.6}px)`),
                    zIndex: "-40",
                    opacity: "0.5",
                }}
                alt="Cloud 01"
            />
            <animated.img
                src={cloud07}
                style={{
                    display: "block",
                    width: "100%",
                    marginLeft: "-10%",
                    marginTop: "920px",
                    position: "absolute",
                    transform: offset.to((o) => `translateY(-${o * 0.3}px)`),
                    zIndex: 0,
                    opacity: "0.9",
                }}
                alt="Cloud"
            />
            <animated.img
                src={cloud06}
                style={{
                    display: "block",
                    width: "100%",
                    marginLeft: "50%",
                    marginTop: "1100px",
                    position: "absolute",
                    transform: offset.to((o) => `translateY(-${o * 0.3}px)`),
                    zIndex: 0,
                    opacity: "0.5",
                }}
                alt="Cloud 01"
            />
            <animated.img
                src={cloud02}
                style={{
                    display: "block",
                    width: "100%",
                    marginLeft: "-5%",
                    marginTop: "1570px",
                    position: "absolute",
                    transform: offset.to((o) => `translateY(-${o * 0.3}px)`),
                    zIndex: 0,
                    opacity: "0.3",
                }}
                alt="Cloud 01"
            />
            <animated.img
                src={cloud08}
                style={{
                    display: "block",
                    width: "100%",
                    marginLeft: "10%",
                    marginTop: "1450px",
                    position: "absolute",
                    transform: offset.to((o) => `translateY(-${o * 0.3}px)`),
                    zIndex: 0,
                    opacity: "0.5",
                }}
                alt="Cloud 01"
            />
            <animated.img
                src={cloud01}
                style={{
                    display: "block",
                    width: "100%",
                    marginLeft: "30%",
                    marginTop: "2300px",
                    position: "absolute",
                    transform: offset.to((o) => `translateY(-${o * 0.5}px)`),
                    zIndex: "5",
                    opacity: "0.5",
                }}
                alt="Cloud 01"
            />
        </div>


    );
};

export default KvBg;
