import React from 'react'
import "./Footer.css"
import linkedin from "../../assets/linkedin.png"
import instagram from "../../assets/instagram.png"



let message=()=>{
    alert('send it')
}



const Footer = () => {


  return (
    <div className='foot'>
        <div> <img src={linkedin} className='linkedin'/></div>
        <div>  <img src={instagram} className='linkedin'/></div>
        <div className='address'>
            Address-120 Hanuman Road shamli
        </div>
        <div className="email">
          <form className='mail'  >
            <input type="email" name='form_name' placeholder='Enter your Email' className='input '  />
            <button onClick={message}>join now</button>

          </form>
        </div>


      
        
      
    </div>
  )
}

export default Footer
