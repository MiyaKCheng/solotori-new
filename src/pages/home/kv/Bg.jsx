import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import cloud01 from "../../../assets/img/cloud01.png";
import cloud02 from "../../../assets/img/cloud02.png";
import cloud03 from "../../../assets/img/cloud03.png";
import cloudBg from "../../../assets/img/cloud-bg.png";
import kv3dCloud from "../../../assets/img/kv-3d-cloud.png";
export default function KvBg() {
    return (
        <div className="kv-bg-container" style={{ overflow: "hidden" }}>
            <Parallax pages={3} style={{ height: "100vh" }}>
                {/* Cloud Background */}
                <ParallaxLayer offset={0} speed={0} style={{ backgroundImage: `url(${cloudBg})`, backgroundSize: "cover" }} />

                {/* Cloud Layers for KV Area */}
                <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
                    <img src={cloud01} style={{ display: "block", width: "10%", marginLeft: "10%" }} alt="Cloud 01" />
                    <img src={cloud02} style={{ display: "block", width: "20%", marginLeft: "75%" }} alt="Cloud 02" />
                    <img src={cloud03} style={{ display: "block", width: "20%", marginLeft: "70%" }} alt="Cloud 03" />
                </ParallaxLayer>

                {/* 3D Cloud for KV Area */}
                <ParallaxLayer offset={1} speed={0.1}>
                    <img src={kv3dCloud} style={{ display: "block", width: "100%" }} alt="3D Cloud" />
                </ParallaxLayer>
            </Parallax>
        </div>
    );
}
