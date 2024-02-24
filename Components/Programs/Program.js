import React from 'react'
import "./Program.css"
import {programsData} from "../../data/programsData"
import rightArrow from "../../assets/rightArrow.png"

const Program = () => {
  return (
    <div>
    <div className='Heading'>
      <div className="progarm-H">Explore Our</div>
      <div className="progarm-H">Programs</div>
      <div className="progarm-H">To Shape You</div>
    </div>
    <div className="program-Head">
        {
            programsData.map((value)=>{
              return  <div className="cat">
                   <div className='imglogo'> {value.image}</div>
                    <span>{value.heading}</span>
                    <span>{value.details}</span>
                    <div className="join-now"><span>Join now</span><img src={rightArrow} className='imgs' /></div>
                </div>
            })
        }
    </div>
    </div>
  )
}

export default Program
