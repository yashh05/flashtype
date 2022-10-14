import React from 'react';
import "./landing.css";
import flash from "C:/Users/lenovo/Desktop/projects/flashtype/src/assets/hero.png";
import Typewriter from 'typewriter-effect';

export default function Landing() {
    return (
        <div className='landing-container'>

            <div data-aos="fade-right" className='landing-left'>
                <h1 className='landing-header'>Can you type...</h1>
                <div className='typewriter-container'>
                    <Typewriter 
                        options={{
                            strings: ['Fast?!', 'Correct?!','Quick?!'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>

            <div className='landing-right'>
                <img data-aos="fade-left" className='flash-image' src={flash} alt="hero"></img>
            </div>
        </div>
    )
}