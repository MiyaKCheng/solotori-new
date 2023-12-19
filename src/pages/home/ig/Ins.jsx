import React from "react";
import InsSection from "./InsSection";
import Title from "../../shared/title";
import CustomButton from "../../shared/button";
function Ins() {
    const instagramLink = "https://www.instagram.com/solotori_official/";
    return (
        <section id="ins" className="my-20">
            <Title text="みんなの旅" />
            <div style={{ position: "relative" }} className="mt-10">
                <InsSection />
                <h4 className="absolute right-[-75px] top-[50%] text-white rotate-90 text-3xl font-semibold tracking-[3.6px]">#SOLOTORI</h4>
            </div>
            <div className="mt-10 mx-[20%]" >
                <CustomButton text="公式インスタ" link={instagramLink} />
            </div>
        </section>
    );
}

export default Ins;
