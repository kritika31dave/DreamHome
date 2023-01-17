import React  from 'react'
import { Navigate,Outlet } from 'react-router-dom'
import Spinner from './Spinner'
import useAuthState from '../Hooks/useAuthState'
const PrivateRouter = () => {
    const {loggedIn,checkState}=useAuthState()
    if(checkState){
        return <Spinner/>
    }
  return loggedIn ? <Outlet/>:<Navigate to="/signin" />
    
  
}

export default PrivateRouter