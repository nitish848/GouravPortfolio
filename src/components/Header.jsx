import React, { useState, useEffect } from 'react';
import image from "../assets/Image.png";
import "./header.css";

const Header = () => {
    const [typedText, setTypedText] = useState('');
    const headerText = "Gaurav Game Designer [GGD]_";

    useEffect(() => {
        const typeText = (text, index) => {
            if (index <= text.length) {
                setTypedText(text.substring(0, index));
                setTimeout(() => typeText(text, index + 1), 100); // Adjust typing speed here
            }
        };

        typeText(headerText, 0);
    }, []);

    return (
        <div className='header'>
            <h1>GAURAV BARAI</h1>
            <div className="content">
                <h2>{typedText}</h2>
                <p className="fade-swipe-animation">
                    Hey there! I'm Gaurav, a game designer immersed in PC and console gaming. My skills are ever-evolving, drawing inspiration from psychology, philosophy, science, and the mysteries of extraterrestrial realms. Always at the forefront of industry trends, my ultimate goal is to create my own gaming studio.
                </p>
                <div className="btns">
                    <button id='btn1' className="swipe-fade-up-animation">See Games I’ve Designed</button>
                    <div className="btnsDiv">
                        <button id='btn2' className='swipe-fade-down-animation'>Contact</button>
                        <button id='btn3' className='swipe-fade-down-animation'>Resume</button>
                    </div>
                </div>
            </div>
            <div className="image">
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default Header;
