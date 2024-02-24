import React, { useRef, useState } from 'react';
import "./App.css"


function New() {
  const [value,setvalue]=useState()
  let [count,setcount]=useState(0)

  let add=()=>{
    isNaN(value) ? alert("Enter a number") : setcount(parseInt(count)+parseInt(value))
   
   

  }
  let sub=()=>{
    isNaN(value) ? alert("Enter a number") : setcount(parseInt(count)-parseInt(value))
  }
  return (
    <main>
      
      <div className="center">
       <br />Enter a value to Add/Subtract
        <br/>
      <center> {count}</center> 
        <br/>
        <input type="text" value={value} onChange={(e)=>{setvalue(e.target.value)}}/><br/>
        <button className="btn"  onClick={add}>Add</button><br/>
        <button className="btn"  onClick={sub}>Sub</button>
      </div>


    </main>
  );
}

export default New;