import React from 'react'

import {Swiper,SwiperSlide} from 'swiper/react'

  // import Swiper styles

import './Slider.css'
const Slider = () => {
  return (
    <Swiper
    spaceBetween={1}
    slidesPerView={2}
    navigation
    className='m-4'
    scrollbar={{draggable:true}}
    onSlideChange={()=> console.log('slide change')}
    onSwiper={swiper=>console.log(swiper)}
    >
       <SwiperSlide>
        <img src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" style={{ width: 500, height: 300 }}/>
       </SwiperSlide>
       <SwiperSlide>
        <img src='https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' style={{ width: 500, height: 300 }}/>
       </SwiperSlide>
        <SwiperSlide>
            <img src='https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGludGVyaW9yJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' style={{ width: 500, height: 300 }}/>
        </SwiperSlide>
    </Swiper>
  )
}

export default Slider