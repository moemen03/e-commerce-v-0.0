import React from 'react'
import img1 from "../../Assets/images2/XCM_Manual_1396328_4379575_Egypt_EG_BAU_GW_DC_SL_Bags_Wallets_379x304_1X._SY304_CB650636675_.jpg"
import img2 from "../../Assets/images2/XCM_Manual_1533480_5305769_379x304_1X._SY304_CB616236518_.jpg"
import sliderImg1 from "../../Assets/images2/41nN4nvKaAL._AC_SY200_.jpg"
import sliderImg2 from "../../Assets/images2/61cSNgtEISL._AC_SY200_.jpg"
import sliderImg3 from "../../Assets/images2/1681511964020.jpeg"
import Slider from 'react-slick'
import SubSlider from '../subSlider/subSlider'

function MainSlider() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };


    return (
        <> 
            <div className="row m-auto">
                <div className='col-md-3'></div>
                <div className="col-md-3 p-0 mb-3">
                    <Slider {...settings}>

                        <img height={400} className='w-100' src={sliderImg1} alt="" />
                        <img height={400} className='w-100' src={sliderImg2} alt="" />
                        <img height={400} className='w-100' src={sliderImg3} alt="" />

                    </Slider>
                </div>
                <div className="col-md-3 p-0">
                    <img height={200} className='w-100' src={img1} alt="" />
                    <img height={200} className='w-100' src={img2} alt="" />
                </div>
                <div className='col-md-3'></div>
            </div>
            
        </>
    )
}

export default MainSlider