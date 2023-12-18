import React from "react";
import { useSpring, animated } from "react-spring";
import cloud01 from "../../../assets/img/cloud01.png";
import cloud02 from "../../../assets/img/cloud02.png";
import cloudBg from "../../../assets/img/cloud-bg.png";
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
        <div className="kv-bg-container" style={{}}>
            {/* Cloud Background */}
            <div
                style={{
                    backgroundImage: `url(${cloudBg})`,
                    backgroundSize: "cover",
                    height: "100vh",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: -50,
                    overflow: "visitable",
                }}
            />

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
                    zIndex: "-1",
                }}
                alt="Cloud 01"
            />
            <animated.img
                src={cloud01}
                style={{
                    display: "block",
                    width: "100%",
                    marginLeft: "50%",
                    marginTop: "80%",
                    position: "absolute",
                    transform: offset.to((o) => `translateY(-${o * 0.8}px)`),
                    zIndex: "-40",
                    opacity: "0.5",
                }}
                alt="Cloud 01"
            />
            <animated.img
                src={cloud01}
                style={{
                    display: "block",
                    width: "80%",
                    marginLeft: "-30%",
                    marginTop: "70%",
                    position: "absolute",
                    transform: offset.to((o) => `translateY(-${o * 0.15}px)`),
                    zIndex: "-1",
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
                }}
                alt="3D Cloud"
            />
        </div>
    );
};

export default KvBg;
