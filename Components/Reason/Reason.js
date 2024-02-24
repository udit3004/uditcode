import React from 'react'
import "./Reason.css"
import {plansData} from "../../data/plansData"
import whiteTick from "../../assets/whiteTick.png"


const Reason = () => {
  return (
    <div>
      <div className="head">
        <span>READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span>WITH US</span>
        </div> 
        <div className="plan">
           {plansData.map((value,i)=>{
               
                   return (
                    <>
                   <div className='plan1' key={i}>
                    {value.icon}
                    <span>{value.name}</span>
                    <span>${value.price}</span>
                    <div className="feature">
                        {
                            value.features.map((val,i)=>{
                                return (
                                    <>
                                    <div className="plans" key={i}>
                                         <img src={whiteTick} alt=''  />
                                            <span key={i}>{val}</span>
                                            
                                    </div>
                                    
                                    </>
                                )
                            })
                        }
                        <button className='join-btn'>Join now</button>
                        
                    </div>

                    </div>
                    </>)
           })
        }
        </div>


      
    </div>
  )
}

export default Reason
