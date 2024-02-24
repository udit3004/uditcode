import React, { useState } from 'react'
import "./Testinfo.css"
import {testimonialsData} from "../../data/testimonialsData"
import rightArrow from "../../assets/rightArrow.png" 
import leftArrow from "../../assets/leftArrow.png"

const Testinfo = () => {
   let [select,useselect]= useState(0)
   const lengths=testimonialsData.length

   let rightchange=()=>{
    if(select<lengths-1){

    useselect(select+1)
    }else{
      useselect(0)
      
    }
  
   }

   let leftchange=()=>{
    if(select!=0){
      useselect(select-1)
    }else{
      useselect(2)
    }
   }
  return (
    <div className='Test'>
        <div className="left">
            <span>Testimonial</span>
            <span>What they</span>
            <span>say about us</span>
            <span>{testimonialsData[select].review}</span>
            <span>
            <span>{testimonialsData[select].name}-{" "}</span>
            {testimonialsData[select].status}
            </span>
        </div>
        <div className="right">
            <div className='arrow'>
                <img src={rightArrow} onClick={rightchange}/> 
                <img src={leftArrow} onClick={leftchange} className='arrows' />
                </div>
            

          <div className="imgs">
            <img src={testimonialsData[select].image } />
          </div>
        </div>
       
      
    </div>
  )
}

export default Testinfo
