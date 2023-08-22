import React, { useEffect, useState } from 'react';
import './slider.css';
import sliderContent from './sliderContent.json';
import { MdNavigateNext } from 'react-icons/md';
import { GrFormPrevious } from 'react-icons/gr';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Slider = () => {
    useEffect(() => {
        // Animation for elements with the class 'swipe-fade-up'
        gsap.fromTo('.swipe-fade-up', {
            opacity: 0,
            y: 50,
        }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.swipe-fade-up', // The element you want to trigger the animation on
                start: 'top 80%', // Adjust this value based on when you want the animation to start
                markers: false, // This adds visual markers for debugging, you can remove this in production
            },
        });

        // Animation for elements with the class 'swipe-fade-right'
        gsap.fromTo('.swipe-fade-right', {
            opacity: 0,
            x: -50,
        }, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.swipe-fade-right', // The element you want to trigger the animation on
                start: 'top 80%', // Adjust this value based on when you want the animation to start
                markers: false, // This adds visual markers for debugging, you can remove this in production
            },
        });
    }, []);

    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [activeInnerSlideIndex, setActiveInnerSlideIndex] = useState(0);

    const handleOuterPrevSlide = () => {
        setActiveSlideIndex(prevIndex => (prevIndex === 0 ? sliderContent.length - 1 : prevIndex - 1));
        setActiveInnerSlideIndex(0);
    };

    const handleOuterNextSlide = () => {
        setActiveSlideIndex(prevIndex => (prevIndex === sliderContent.length - 1 ? 0 : prevIndex + 1));
        setActiveInnerSlideIndex(0);
    };

    const handleInnerPrevSlide = () => {
        setActiveInnerSlideIndex(prevIndex =>
            prevIndex === 0 ? sliderContent[activeSlideIndex].innerSlides.length - 1 : prevIndex - 1
        );
    };

    const handleInnerNextSlide = () => {
        setActiveInnerSlideIndex(prevIndex =>
            prevIndex === sliderContent[activeSlideIndex].innerSlides.length - 1 ? 0 : prevIndex + 1
        );
    };

    const outerSlide = sliderContent[activeSlideIndex];
    const innerSlide = outerSlide.innerSlides[activeInnerSlideIndex];

    return (
        <div className="slider" style={{
            backgroundImage: `url(/assets/home_poster${activeSlideIndex}.png)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundOrigin: 'border-box',
            backgroundPosition: 'center',
        }}>

            <h2>Games and Documents</h2>
            <div className="slides-container">

                {
                    activeSlideIndex == 3

                        ? <div className="slide">
                            <div className='docsDiv'>
                                <div className="docs">

                                </div>
                                <div className="docs">

                                </div>
                                <div className="docs">

                                </div>
                                <div className="docs">

                                </div>
                                <div className="docs">

                                </div>
                                <div className="docs">

                                </div>
                                <div className="docs">

                                </div>
                                <div className="docs">

                                </div>
                            </div>
                        </div> :
                        <div className="slide">
                            <div className="slideContent">
                                <div className="inner-slider swipe-fade-up">
                                    <div className="inner-slider-content" style={{ backgroundImage: `url(${innerSlide.img})` }}></div>

                                    <div className="inner-slider-controls">
                                        <button onClick={handleInnerPrevSlide}><GrFormPrevious /></button>
                                        <button onClick={handleInnerNextSlide}>< MdNavigateNext /></button>
                                    </div>
                                </div>
                                <div className="content swipe-fade-right">
                                    <h3>{innerSlide.innerTitle}</h3>
                                    <p className='text'>
                                        <span>{innerSlide.text1}</span>
                                        <span className="textLine"></span>
                                        <span>{innerSlide.text2}</span>
                                    </p>
                                    <p className='myrole'>
                                        <strong>My Role:</strong>
                                        <span>{innerSlide.role}</span>
                                    </p>
                                    <p>{innerSlide.description}</p>
                                    <button>GDD</button>
                                    <button>Website</button>
                                    <button>Download</button>
                                </div>
                            </div>
                        </div>
                }


            </div>
            <div className="pagination">
                {sliderContent.map((_, index) => (
                    <div key={index}>
                        {index === 3 ? (
                            <div className='slideindex'>
                                <div className='line'></div>
                                <div
                                    className={`pagination-square ${index === activeSlideIndex ? 'active' : ''} pagination-square${index}`}
                                    onClick={() => {
                                        setActiveSlideIndex(index);
                                        setActiveInnerSlideIndex(0);
                                    }}
                                ></div>
                            </div>
                        ) : (
                            <div
                                className={`pagination-square ${index === activeSlideIndex ? 'active' : ''} pagination-square${index}`}
                                onClick={() => {
                                    setActiveSlideIndex(index);
                                    setActiveInnerSlideIndex(0);
                                }}
                            ></div>
                        )}
                    </div>
                ))}

            </div>
        </div>
    );
};

export default Slider;



