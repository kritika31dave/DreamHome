import React from "react";
import Home from "./Pages/Home";
import Offers from "./Pages/Offers";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Profile from "./Pages/Profile";
import ForgotPassword from "./Pages/ForgotPassword";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import PrivateRouter from "./Compo/PrivateRouter";
import Category from "./Pages/Category";
import Listing from "./Pages/Listing";

function App() {
  return (
    <BrowserRouter>
    <ToastContainer/>
      <Routes>
      
        <Route path='/' element={<Home/>}/>
        <Route path='/category/:categoryName' element={<Category/>}/>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<PrivateRouter/>}>
          <Route path="/profile" element={<Profile/>}/>
        </Route>
        <Route path="/forgotpassword" element={<ForgotPassword/>}></Route>
        <Route path='/category/:categoryName/:listingId' element={<Listing/>}/>
        <Route path="/offers" element={<Offers/>}></Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
