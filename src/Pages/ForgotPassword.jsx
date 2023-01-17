import React ,{useState} from 'react'
import Layout from '../Compo/Layout/Layout'
import { Link ,useNavigate} from 'react-router-dom'
import {getAuth,sendPasswordResetEmail} from 'firebase/auth'
import { toast } from 'react-toastify'
const ForgotPassword = () => {
  const [email,setEmail] = useState("");
  const navigate=useNavigate();
const onSubmitHandler=async(e)=>{
  e.preventDefault();
  try{
const auth=getAuth();
await sendPasswordResetEmail(auth,email);
toast.success("email was sent");
navigate("/signin")
  }catch(error){
    toast.error("Something went wrong")
  }
}
  return (
    <Layout>
    <div className='container mt-4'>
    <h1>Reset Your Password</h1>
        <form className='container' onSubmit={onSubmitHandler}>
  <div className="  mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" 
    id="exampleInputEmail1"
     aria-describedby="emailHelp"
      value={email}
      onChange={(e)=> setEmail(e.target.value)}
     />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className='d-flex justify-content-between'>
  <button type="submit" className="btn btn-primary">Reset</button>
  <Link to="/signin">Sign In</Link>
  </div>
  
  </form>
    </div>
        

    </Layout>
  )
}

export default ForgotPassword