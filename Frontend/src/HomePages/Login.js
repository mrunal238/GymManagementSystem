//import './Signin.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useHistory} from 'react-router-dom'




const Login =()=>{
    const [Email ,setEmail]=useState('')
    const [Password ,setPassword]=useState('')

    const history = useHistory();

  useEffect(( ) => {
    if(sessionStorage.getItem('user-info')) {
      history.push("/add")
    }
  },[])

    const signinUser =()=>{
        if(Email.length===0){
            alert('Please enter email  !!!!')
        }else if(Password.length===0){
            alert('Please enter password  !!!!') 
        }else {
        const data = new FormData()

        
        data.append('Email', Email)
        data.append('Password', Password)
        axios.post('http://localhost:8080/users/authenticateUser', data).then((response) => {
            const result = response.data
            console.log(result.data);
            if (result.status === 'success') 
            {
             /*  alert('successfully Logged in') */
             
              if(result.data.role==="member"){
                localStorage.setItem('member_userid',result.data.user_id)
                localStorage.setItem('member_name',result.data.name)
                localStorage.setItem('member_email',result.data.email)
                localStorage.setItem('member_contact',result.data.contact)
                localStorage.setItem('member_address',result.data.address)
                localStorage.setItem('member_password',result.data.password)
                localStorage.setItem('member_role',result.data.role)
                history.push('/member')
              } else if (result.data.role==="trainer") {
                localStorage.setItem('train_name',result.data.name)
                localStorage.setItem('train_email',result.data.email)
                localStorage.setItem('train_contact',result.data.contact)
                localStorage.setItem('train_address',result.data.address)
                localStorage.setItem('train_password',result.data.password)
                localStorage.setItem('train_role',result.data.role)
                history.push('/trainer')
              } else if(result.data.role==="admin") {
                localStorage.setItem('admin_name',result.data.name)
                localStorage.setItem('admin_email',result.data.email)
                localStorage.setItem('admin_contact',result.data.contact)
                localStorage.setItem('admin_address',result.data.address)
                localStorage.setItem('admin_password',result.data.password)
                localStorage.setItem('admin_role',result.data.role)
                history.push('/admin')
              }
              
            } else {
              alert('error while logging in')
            }
          })
        }
    } 
   return (
       <div className="col-sm-6 offset-sm-3" style={{color:'orange',backgroundColor:"black"}}>
         <br/>
         <br/>
         <br/>
         <br/>
    
        <div className="mb-3">
            <label>Email</label>
            <input value={Email}  name="Email" onChange={(event)=>{setEmail(event.target.value)}} className="form-control" type="email" placeholder="Enter email"></input>
        </div>

        <div className="mb-3"> 
            <label>Password</label>
            <input value={Password} name="Password" onChange={(event)=>{setPassword(event.target.value)}} className="form-control" type="password" placeholder="Enter password"></input>
        </div>

        <div className="mb-3">
            <button onClick={signinUser}className="btn btn-success">SignIn</button>
        </div>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
       
       </div>
     
   )
}

export default Login;