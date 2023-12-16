import React from "react";
import kv3dCloud from "../../../assets/img/kv-3d-cloud.png";

import cloudBg from "../../../assets/img/cloud-bg.png";
import cloud01 from "../../../assets/img/cloud01.png";
import cloud02 from "../../../assets/img/cloud02.png";

import cloud03 from "../../../assets/img/cloud03.png";
import cloud04 from "../../../assets/img/cloud04.png";
import cloud05 from "../../../assets/img/cloud05.png";

export default function KvBg() {

    return (
        <section className="absolute top-0 z-[-1]" width='100%'>
            <div className="grid grid-cols-4 gap-2 w-full">
                <img src={cloud01} alt="Cloud 01" className="col-start-1 col-span-2" />
                <img src={cloud02} alt="Cloud 02" className="col-start-1 col-end-3" />
                <img src={kv3dCloud} alt="3D Cloud" className="w-full" />
                <img src={cloud03} alt="Cloud 03" className="col-end-4 col-span-2" />
                <img src={cloud04} alt="Cloud 04" className="col-start-1 col-end-5" />
                <img src={cloud05} alt="Cloud 05" className="col-start-1 col-end-5" />
            </div>
            <img src={cloudBg} alt="Cloud Background" className="w-full" />
        </section>
    );
} 