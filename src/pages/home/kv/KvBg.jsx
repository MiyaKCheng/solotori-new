import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import kv3dCloud from "../../../assets/img/kv-3d-cloud.png";
import cloudBg from "../../../assets/img/cloud-bg.png";
import cloud01 from "../../../assets/img/cloud01.png";
import cloud02 from "../../../assets/img/cloud02.png";
import cloud03 from "../../../assets/img/cloud03.png";
import cloud04 from "../../../assets/img/cloud04.png";
import cloud05 from "../../../assets/img/cloud05.png";
import "./KvBg.css"; // Import a CSS file for styling

export default function KvBg() {
    return (
        <div style={{ width: "100%", height: "100%", background: "#253237" }}>
            <Parallax pages={3}>
                {/* Cloud Background */}
                <ParallaxLayer offset={0} speed={0} style={{ backgroundImage: `url(${cloudBg})`, backgroundSize: "cover" }} />

                {/* Cloud Layers */}
                <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
                    <img src={cloud01} style={{ display: "block", width: "10%", marginLeft: "10%" }} alt="Cloud 01" />
                    <img src={cloud02} style={{ display: "block", width: "20%", marginLeft: "75%" }} alt="Cloud 02" />
                </ParallaxLayer>

                <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
                    <img src={cloud03} style={{ display: "block", width: "20%", marginLeft: "70%" }} alt="Cloud 03" />
                    <img src={cloud04} style={{ display: "block", width: "20%", marginLeft: "40%" }} alt="Cloud 04" />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
                    <img src={cloud05} style={{ display: "block", width: "20%", marginLeft: "55%" }} alt="Cloud 05" />
                </ParallaxLayer>

                {/* 3D Cloud */}
                <ParallaxLayer offset={1} speed={0.1}>
                    <img src={kv3dCloud} style={{ display: "block", width: "100%" }} alt="3D Cloud" />
                </ParallaxLayer>
            </Parallax>
        </div>
    );
}
