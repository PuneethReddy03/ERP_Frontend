import React, { useState } from 'react'
import Feedback from "./Feedback";

const Feedbackform = () => {
    const [data,Setdata]=useState([])
  return (
    <div>
      <form onSubmit={(e)=> {
        e.preventDefault();

      }}>
        <h2>Feedback</h2>
        <table id='feed'>
        <tr><input type="test" id="1" placeholder='CourseName'/></tr>
        <tr><input type="test" id="2" placeholder='Facultyname'/></tr>
        <tr><input type="test" id="3" placeholder='Ckskills'/></tr>
        <tr><input type="test" id="4" placeholder='Remarks'/></tr>
        </table>
        <input onSubmit={(e)=>{
            e.preventDefault();
          
        }}
        onClick={
            ()=>{
                const Fname = document.getElementById("1").value
                const Cname = document.getElementById("2").value
                const Ckskills = document.getElementById("3").value
                const Remarks = document.getElementById("4").value
                Setdata([...data,{Fname,Cname,Ckskills,Remarks}])
                
            }
        }
        type="submit"/>
        </form> 
        <Feedback data1={data}/>
    </div>
  );
};
export default Feedbackform;
