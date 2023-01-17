import React from 'react'
import Layout from '../Compo/Layout/Layout'
import { useNavigate } from 'react-router-dom'
import Slider from '../Compo/Layout/Slider'
const Home = () => {
  const navigate=useNavigate()
  const img="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  const img1="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  return (
    <Layout>
     <Slider
      
     />
      <h1>Category</h1>

      <div className='container mt-4'>
        <div className='row'>
          <div className='col-md-5'>
          <div className="Imagecontainer">
  <img src={img} alt="Rent" style={{width:"100%"}}/>
  <button className="btn"
  onClick={()=>navigate('/category/rent')}
  >To Rent</button>
</div>
          </div>
          <div className='col-md-5'>
          <div className="Imagecontainer">
  <img src={img1} alt="Rent" style={{width:"100%"}}/>
  <button className="btn"
   onClick={()=>navigate('/category/sale')}
  >To Sale</button>
</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home