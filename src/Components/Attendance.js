import React from 'react'
import Attendances from './Attendances'
const Attendance = () => {
  return (
    <div>
      <h2> Student Attendance</h2>
      <table>
        <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>BRANCH</th>
            <th>ACTIONS</th>
        </tr>
        <tr>
            <td>2300030566</td>
            <td>Eswar</td>
            <td>CSE</td>
            <td>
               <Attendances/>
            </td>
        </tr>
        <tr>
            <td>2300030998</td>
            <td>Puneeth</td>
            <td>CSE</td>
            <td>
               <Attendances/>
            </td>
        </tr>
        <tr>
            <td>2300090230</td>
            <td>Laxman</td>
            <td>CS&IT</td>
            <td>
               <Attendances/>
            </td>
        </tr>
        <tr>
            <td>2300030286</td>
            <td>Prasad</td>
            <td>CSE</td>
            <td>
            <Attendances/>
            </td>
        </tr>
        <tr>
            <td>2300030901</td>
            <td>Keerthi</td>
            <td>CSE</td>
            <td>
            <Attendances/>
            </td>
        </tr>
      </table>
    </div>
  )
}

export default Attendance