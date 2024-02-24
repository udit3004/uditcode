import React from 'react'
import "./hero.css"
import Header from '../Header/Header'

import hero_image_back from "../../assets/hero_image_back.png"
import heart from "../../assets/heart.png"

import imgbody from "../../assets/imgbody.png"



const Hero = () => {
   console.log("render")

    return (
        <div className='hero'>
            <div className="left-hero">
                <Header />
                <div className="the-add">
                    <div ></div>
                    <span >The Best Fitness Club in Delhi/NCR</span>
                </div>

                <div className="hero-text">
                    <div>
                        <span>Shape </span>
                        <span>Your</span>
                    </div>
                    <span>
                        Ideal Body
                    </span>
                    <div className='Text-about'>
                        <span>
                            Plus Fitness offers you the opportunity to access more than 300 gyms worldwide
                        </span>
                    </div>
                </div>
                <div className="figure">
                    <div className="one">
                        <span >
                            +140
                        </span>
                        <span>
                            EXPERT COACH
                        </span>
                    </div>
                    <div className="one">
                        <span >
                            +978
                        </span>
                        <span>
                            MEMBER JOIN
                        </span>
                    </div>
                    <div className="one">
                        <span >
                            +50
                        </span>
                        <span>
                            FITNESS PROGRAM
                        </span>
                    </div>
                </div>
                <div className='btn'>
               <button className='btn-1 first '>
                GET STARTED
               </button>
               <button className='btn-1 second'>
              LEARN MORE
               </button>
                </div>
            </div>
            <div className="right-hero">
            <button type='button' className='btn-join'>Join now</button>
               
                <div className="heart-rate">
                
                <img src={heart} alt=''/>
                <span>Heart Rate</span>
                <span>116 bpm</span>
            </div>
            <img src={imgbody} alt='' className='img-hero'/>
            <img src={hero_image_back} alt='' className='img-hero-back'/>
               
            </div>
           
           
            
        </div>
    )
}

export default Hero
