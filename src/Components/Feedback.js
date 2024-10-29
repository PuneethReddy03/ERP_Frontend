import React from 'react'

const Feedback = ({data1}) => {
  
  return (
    
  <div>
    
    {
      data1.map((items,index)=>(
        
        <div key={index} >
          <h2>Feedbackform</h2>
          <table> 
            <tr>
            <th>Facultyname</th>
            <th>CourseName</th>
            <th>Ckskills</th>
            <th>Remarks</th>
            </tr>
            <tr>
        <td>{items.Fname}</td>
        <td> {items.Cname}</td>
        <td>{items.Ckskills}</td>
        <td> {items.Remarks} </td>
        </tr>
          </table>
        </div>
      
      ))
    } 
    
    </div>
  )
}

export default Feedback