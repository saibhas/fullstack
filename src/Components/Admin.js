import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../Style/Admin.css';

function Admin() {
    const [user,setUser]=useState();
    const [password,setpassword]=useState();
    const nav =useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
         //Add Vechicle
        if(user==='AD-001' && password==='AD-001'){
            nav('/addvehicle')
        }
        else if(user==='AD-002' && password==='AD-002'){
            nav('/vehiclelist')
        }
        else if(user==='AD-003' && password==='AD-003'){
            nav('/vehiclelist')
        }
        else if(user==='AD-004' && password==='AD-004'){
            nav('/vehiclelist')
        }

        //Route
        else if(user==='AD-005' && password==='AD-005'){
            nav('/createroute')
        } 
        else if(user==='AD-006' && password==='AD-006'){
            nav('/routeList')
        } else if(user==='AD-007' && password==='AD-007'){
            nav('/editroute/:id')
        } else if(user==='AD-008' && password==='AD-008'){
            nav('/routeList')
        } 

        //Driver
        
        else if(user==='AD-009' && password==='AD-009'){
            nav('/adddriver')
        } 
        else if(user==='AD-010' && password==='AD-010'){
            nav('/driverlist')
        }
        else if(user==='AD-011' && password==='AD-011'){
            nav('/driverlist')
        }
        else if(user==='AD-012' && password==='AD-012'){
            nav('/driverlist')
        }

        //User Profile
        
        else if(user==='US-001' && password==='US-001'){
            nav('/addprofile')
        }
        else if(user==='US-002' && password==='US-002'){
            nav('/viewreservation')
        }
        else if(user==='US-003' && password==='US-003'){
            nav('/booking/:id')
        }
        else if(user==='US-004' && password==='US-004'){
            nav('/resrvationbyuseid/:id')
        }
        else{
            alert('Hey enter a correct ID and Password');
        }

    }

  return (
    <div className='admin-h1'>
         <h1>Sundara Travels</h1>
    <div className='admin-c'>
     <div className='admin-1'>
     <form onSubmit={handleSubmit} className='admin-form'>
      <label>Admin ID</label><input type='text' value={user} placeholder='Admin ID' required onChange={(e)=>{setUser(e.target.value)}}/>
      <label>Password</label><input type='password' value={password} placeholder='Password' required onChange={(e)=>{setpassword(e.target.value)}}/>
      <button type='submit' className='admin-button'>Submit</button>
     </form>
     </div>
     <div className='admin-img' ></div>
    </div>
    </div>
  )
}

export default Admin;