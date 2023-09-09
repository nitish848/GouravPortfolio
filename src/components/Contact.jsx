import React, { useEffect, useRef } from 'react'
import "./contact.css"
import { BsLinkedin } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
import { SiLinktree } from 'react-icons/si';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import emailjs from 'emailjs-com';
gsap.registerPlugin(ScrollTrigger);
const Contact = () => {
    const form = useRef();
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
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_awr7grp', 'template_rdvaz0q', form.current, 'NMgrrT0ai1b98ar3R')
            .then((result) => {
                console.log(form.current)
                console.log(result.text);
            }, (error) => {
                console.log(form.current)
                console.log(error.text);
            });
    };
    return (
        <div className='contact' id='contact'>
            <h2>Contact</h2>
            <div className="contactDiv">
                <form action="" className='swipe-fade-up1' ref={form} onSubmit={sendEmail}>
                    <h2>Get in Touch</h2>
                    <input type="text" name='name' placeholder='*Name' />
                    <input type="email" name='email' placeholder='*Email' />
                    <textarea cols="30" rows="10" name='message' placeholder='*Message'></textarea>
                    <button type='submit' >Send</button>
                </form>
                <div className="contactInfo swipe-fade-right1">
                    <h2>Via</h2>
                    <a href="tel:+91 63598 51545"><p>+91 63598 51545</p></a>
                    <a href="mailto:gauravbarai9@gmail.com"><p className='email'>gauravbarai9@gmail.com</p></a>
                    <a href="https://www.linkedin.com/in/gauravbarai/"><p className='social'><BsLinkedin />\in\gauravbarai</p></a>
                    <a href="https://www.instagram.com/_gauravbarai/"><p className='social'><AiOutlineInstagram />gdesigns_official</p></a>
                    <a href="https://linktr.ee/gauravbarai"> <p className='social'><SiLinktree />\in\gauravbarai</p></a>

                </div>
            </div>
            <p>©2023 Designed by Gaurav Barai | Developed by <a href="https://www.fiverr.com/nitishrana852">Nitish Rana</a></p>
        </div>
    )
}

export default Contact