import React from 'react'
import img1 from "../../Assets/images2/XCM_Manual_1396328_4379575_Egypt_EG_BAU_GW_DC_SL_Bags_Wallets_379x304_1X._SY304_CB650636675_.jpg"
import img2 from "../../Assets/images2/XCM_Manual_1533480_5305769_379x304_1X._SY304_CB616236518_.jpg"
import img3 from "../../Assets/images2/1681511121316.png"
import img4 from "../../Assets/images2/1681511156008.png"
import img5 from "../../Assets/images2/1681511179514.png"
import img6 from "../../Assets/images2/1681511368164.png"
import img7 from "../../Assets/images2/1681511392672.png"
import img8 from "../../Assets/images2/1681511427130.png"
import img9 from "../../Assets/images2/1681511452254.png"

import Slider from 'react-slick'

function SubSlider() {

    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true
    };


    return (
        <div className='mb-5'> 

            <h3 className='text-main fw-bolder'>Shop popular Categories :</h3>
            <Slider {...settings}>

                <div style="width: 246.833px;">
                <img width={"246"} height={"200"} src={img1} alt="" />
                </div>
                <div style="width: 246.833px;">
                <img width={"246"} height={"200"} src={img2} alt="" />
                </div>
                <div style="width: 246.833px;">
                <img width={"246"} height={"200"} src={img3} alt="" />
                </div>
                <div style="width: 246.833px;">
                <img width={"246"} height={"200"} src={img4} alt="" />
                </div>
                <div style="width: 246.833px;">
                <img width={"246"} height={"200"} src={img5} alt="" />
                </div>
                <div style="width: 246.833px;">
                <img width={"246"} height={"200"} src={img6} alt="" />
                </div>
                <div style="width: 246.833px;">
                <img width={"246"} height={"200"} src={img7} alt="" />
                </div>
                <div style="width: 246.833px;">
                <img width={"246"} height={"200"} src={img8} alt="" />
                </div>
                <div style="width: 246.833px;">
                <img width={"246"} height={"200"} src={img9} alt="" />
                </div>

            </Slider>
        </div>
    )
}

export default SubSlider