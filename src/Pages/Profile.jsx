import React,{useState,useEffect} from 'react'
import Layout from '../Compo/Layout/Layout'
import { toast } from 'react-toastify'
import { Navigate, useNavigate } from 'react-router-dom'
import { getAuth,updateProfile } from 'firebase/auth'
import {db} from "../firebase.config"
import {FaEdit} from 'react-icons/fa'
import {MdDoneOutline} from 'react-icons/md'
import { doc, setDoc, updateDoc} from "firebase/firestore";
import { async } from '@firebase/util'
const Profile = () => {
    const auth=getAuth();
    const navigate=useNavigate()
    const[changeDetails,setChangeDetails]=useState(false)
    const [formData,setFormData]=useState(
        {
            name:auth.currentUser.displayName,
            email:auth.currentUser.email
        }
    )
    const{name,email}=formData
 const logoutHandler=()=>{
    auth.signOut()
    toast.success("Successfully Logout")
    navigate("/")
 }
  const onChange=(e)=>{
    setFormData((prevState)=>({
      ...prevState,
       [e.target.id]:e.target.id,
    }))
  }
   //submit handler
   const onSubmit=async()=>{
   try{
if(auth.currentUser.displayName!==name){
  await updateProfile(auth.currentUser,{
    displayName:name,
  });
  const userRef=doc(db,'users',auth.currentUser.uid);
  await updateDoc(userRef,{name});
  toast.success("User Updated!");
}
   }catch(error){
console.log(error)
toast("something went wrong")
   }
   } 
  return (
    <Layout>
       <div className=" container mt-4 w-50 d-flex justify-content-between">
        <h4>Profile Details</h4>
        <button className="btn btn-danger"
        onClick={logoutHandler}>Logout</button>
       </div>
       <div className="card container" style={{width:' 18rem'}}>
  <div className='card-header'>
    <div className=' d-flex justify-content-between'>
      <p>User Personal Details</p>
      <span style={{cursor:'pointer'}}
      onClick={()=> {changeDetails && onSubmit();
       setChangeDetails(prevState=> !prevState)
       }}
      >
        {changeDetails?<MdDoneOutline color='green'/>:<FaEdit color='red'/>}
      </span>
    </div>
  </div>
  <div className="card-body">
  <form>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" value={name}
      onChange={onChange}
      disabled={!changeDetails}
    />
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
      onChange={onChange}
      value={email}
      disabled={!changeDetails}
    />
  </div>
</form>
  </div>
</div>
    </Layout>
  )
}

export default Profile