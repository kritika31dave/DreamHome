import React,{useState,useEffect} from 'react'
import {getDoc,doc} from 'firebase/firestore'
import {db} from '../firebase.config'
import { getAuth } from 'firebase/auth'
import { useNavigate,Link,useParams } from 'react-router-dom'
import Layout from '../Compo/Layout/Layout'
import Spinner from '../Compo/Spinner'
import SwipeCore,{EffectCoverflow,Navigation,Pagination} from 'swiper'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { FaBath, FaBed } from 'react-icons/fa'
SwipeCore.use([EffectCoverflow,Pagination])
const Listing = () => {
    const [listing,setListing]=useState(null)
    const [loading,setLoading]=useState(false)
    const navigate=useNavigate()
    const params=useParams()
    const auth=getAuth()
    useEffect(()=>{
       const fetchListing=async()=>{
           const docRef=doc(db,'listings',params.listingId)
           const docSnap =await getDoc(docRef)
           if(docSnap.exists()){
            console.log(docSnap.data())
            setListing(docSnap.data())
            setLoading(false)

           }
       }
       fetchListing()
    },[params.listingId])
    if(loading){ return <Spinner/>}
  return (
    <Layout>
        <div className='container d-flex justify-content-center align-items-center mt-4'>
        
        <div className="card" style={{width: "600px"}}>
        {/*<div className='card-header'>
           {
            listing.imgUrls === undefined? (<Spinner/>):(
                <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1}
                coverflowEffect={{
                    rotate:50,
                    stretch:0,
                    depth:100,
                    modifier:1,
                    slideShadows:true
                }}
                pagination={true}
                //className="mySwipe"
                >
                {
                    listing.imgUrls.map((url,index)=>(
                       <SwiperSlide key={index}>
                        <img
                            src={listing.imgUrls[index]}
                            height={400}
                            width={800}
                            alt={listing.name}
                            
                        />
                       </SwiperSlide> 
                    ))
                }

                </Swiper>
            )
           }
        </div>*/}
        <div className="card-body">
         <h3>{listing.name}</h3>
         <h6>
            Price:{" "}
            {listing.offer ? listing.discountedPrice:listing.regularPrice} Rs
         </h6>
         <p>Property For:{listing.type ==='rent' ?"Rent":"Sale"}</p>
         <p>{listing.offer && (
              <span>{listing.regularPrice-listing.discountedPrice} Discount</span>
         )}</p>
         <p><FaBed/>
            {listing.bedrooms>1 
            ?`${listing.bedrooms} Bedrooms`
            :'1 Bedroom'
            }
         </p>
         <p><FaBath/>
            {listing.bathrooms>1 
            ?`${listing.bathdrooms} Bathrooms`
            :'1 Bathroom'
            }
         </p>
         <p>
            {listing.parking ? `Parking spot` : "no spot for parking" }
         </p>
         <p>
            {listing.furnished ? `furnished house`: "not furnished"}
         </p>
       </div>
       </div>
       </div>
    </Layout>
  )
}

export default Listing
