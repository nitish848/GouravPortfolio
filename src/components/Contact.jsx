import React, { useEffect } from 'react'
import "./contact.css"
import { BsLinkedin } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
import { LuWebhook } from 'react-icons/lu';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Contact = () => {
    useEffect(() => {
        // Animation for elements with the class 'swipe-fade-up'
        gsap.fromTo('.swipe-fade-up1', {
            opacity: 0,
            y: 50,
        }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.swipe-fade-up1', // The element you want to trigger the animation on
                start: 'top 80%', // Adjust this value based on when you want the animation to start
                markers: false, // This adds visual markers for debugging, you can remove this in production
            },
        });

        // Animation for elements with the class 'swipe-fade-right'
        gsap.fromTo('.swipe-fade-right1', {
            opacity: 0,
            x: -50,
        }, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.swipe-fade-right1', // The element you want to trigger the animation on
                start: 'top 80%', // Adjust this value based on when you want the animation to start
                markers: false, // This adds visual markers for debugging, you can remove this in production
            },
        });
    }, []);
    return (
        <div className='contact'>
            <h2>Contact</h2>
            <div className="contactDiv">
                <form action="" className='swipe-fade-up1'>
                    <h2>Get in Touch</h2>
                    <input type="text" placeholder='*Name' />
                    <input type="email" placeholder='*Email' />
                    <textarea cols="30" rows="10" placeholder='*Message'></textarea>
                    <button>Send</button>
                </form>
                <div className="contactInfo swipe-fade-right1">
                    <h2>Via</h2>
                    <p>+91 63598 51545</p>
                    <p className='email'>gauravbarai9@gmail.com</p>
                    <p className='social'><BsLinkedin />\in\gauravbarai</p>
                    <p className='social'><AiOutlineInstagram />gdesigns_official</p>
                    <p className='social'><LuWebhook />\in\gauravbarai</p>
                </div>
            </div>
            <p>©2023 Designed by Gaurav Barai | Developed by <a href="https://www.fiverr.com/nitishrana852">Nitish Rana</a></p>
        </div>
    )
}

export default Contact