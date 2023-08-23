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

    const handleInnerPrevSlide = () => {
        setActiveInnerSlideIndex(prevIndex =>
            prevIndex === 0 ? sliderContent[0].games[activeSlideIndex].images.length - 1 : prevIndex - 1
        );
    };

    const handleInnerNextSlide = () => {
        setActiveInnerSlideIndex(prevIndex =>
            prevIndex === sliderContent[0].games[activeSlideIndex].images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const outerSlide = sliderContent[0].games[activeSlideIndex];
    let innerSlideData = [];
    if (activeSlideIndex === 3) {
        innerSlideData = outerSlide.data;
    } else {
        innerSlideData = outerSlide.images[activeInnerSlideIndex];
    }

    return (
        <div className="slider" id="slider" style={{
            backgroundImage: `url(/assets/${outerSlide.bg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundOrigin: 'border-box',
            backgroundPosition: 'center',
            position: 'relative',
        }}>
            <div className="gradient-overlay"></div>

            <h2>Games and Documents</h2>
            <div className="slides-container">

                {
                    activeSlideIndex == 3

                        ? <div className="slide">
                            <div className="docsDiv">
                                {innerSlideData.map((doc, index) => (
                                    <div key={index} className="docs">
                                        <a href={doc.link} target="_blank" rel="noopener noreferrer">
                                            <img src={doc.img} alt={`Document ${index}`} />
                                        </a>
                                    </div>
                                ))}
                            </div>

                        </div> :
                        <div className="slide">
                            <div className="slideContent">
                                <div className="inner-slider swipe-fade-up">
                                    <div className="inner-slider-content">

                                        {
                                            activeInnerSlideIndex === 0 ? (
                                                <iframe
                                                    width="560"
                                                    height="315"
                                                    src={innerSlideData}
                                                    title="YouTube Video Player"
                                                    frameBorder="0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                ></iframe>
                                            ) : (
                                                <div className="inner-slider-content" style={{ backgroundImage: `url(${innerSlideData})` }}></div>
                                            )
                                        }
                                    </div>

                                    <div className="inner-slider-controls">
                                        <button onClick={handleInnerPrevSlide}><GrFormPrevious /></button>
                                        <button onClick={handleInnerNextSlide}>< MdNavigateNext /></button>
                                    </div>
                                    <div className="inner-pagination">
                                        {sliderContent[0].games[activeSlideIndex].images.map((_, index) => (
                                            <div
                                                key={index}
                                                className={`inner-pagination-square ${index === activeInnerSlideIndex ? 'active' : ''}`}
                                                onClick={() => setActiveInnerSlideIndex(index)}
                                            ></div>
                                        ))}
                                    </div>
                                </div>
                                <div className="content swipe-fade-right">
                                    <h3>{outerSlide.title}</h3>
                                    <p className='text'>
                                        <span>{outerSlide.text1}</span>
                                        <span className="textLine"></span>
                                        <span>{outerSlide.text2}</span>
                                    </p>
                                    <p className='myrole'>
                                        <strong>My Role:</strong>
                                        <span>{outerSlide.role}</span>
                                    </p>
                                    <p>{outerSlide.description}</p>
                                    <a href={outerSlide.gddLink}><button>GDD</button></a>
                                    <a href={outerSlide.websiteLink}> <button>Website</button></a>
                                    <a href={outerSlide.downloadLink}> <button>Download</button></a>
                                </div>
                            </div>
                        </div>
                }


            </div>
            <div className="pagination">
                {sliderContent[0].games.map((_, index) => (
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



