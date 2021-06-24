import React, { useEffect, useRef } from 'react';
import gsap, { Power1 } from 'gsap/gsap-core';

const IntroAnimation = () => {
    let introDiv = useRef(null);
    let introText1 = useRef(null);
    let introText2 = useRef(null);
    let introText3 = useRef(null);
    let slider = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ default: Power1.easeOut });
        tl.to(introText1, { y: '-0%', duration: 1, delay: .5 });
        tl.to(introText2, { y: '-0%', duration: 1, delay: .5 });
        tl.to(introText3, { y: '-0%', duration: 1, delay: .5 });
        tl.to(introDiv, { y: '-100%', duration: 1.5},)
        tl.to(slider, { y: '-100%', duration: 1.5, delay: -1.5 });
    }, [])
    return (
        <div>
            <div className="intro" ref={el => { introDiv = el }}>
                <div className="intro-text">
                    <h1 className="hide">
                        <span className="text" ref={el => { introText1 = el }}>Hello!</span>
                    </h1>
                    <h1 className="hide">
                        <span className="text" ref={el => { introText2 = el }}>Welcome to My</span>
                    </h1>
                    <h1 className="hide">
                        <span className="text" ref={el => { introText3 = el }}>Fullstack Portfolio.</span>
                    </h1>
                </div>
            </div>
            <div className="slider" ref={el => { slider = el }}></div>
        </div>
    )
}

export default IntroAnimation;