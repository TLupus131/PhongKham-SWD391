import React from 'react';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import '../style/Service.css'
import { useState } from "react";
import { Paper } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStethoscope } from '@fortawesome/free-solid-svg-icons';

function CustomNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}></div>
    )
}

function CustomPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}></div>
    )
}

const Service = () => {
    const [services] = useState([
        {
            link: "https://cdn.benhvienthucuc.vn/wp-content/themes/tci-hospital/assets/images/home13_2_2.jpg",
            content: "Gói khám đa khoa"
        },
        {
            link: "https://cdn.benhvienthucuc.vn/wp-content/themes/tci-hospital/assets/images/home13_2_1.jpg",
            content: "Khám sức khỏe doanh nghiệp"
        },
        {
            link: "https://cdn.benhvienthucuc.vn/wp-content/themes/tci-hospital/assets/images/home13_2_3.jpg",
            content: "Khám chữa bệnh"
        },
        {
            link: "https://cdn.benhvienthucuc.vn/wp-content/themes/tci-hospital/assets/images/home13_2_4.jpg",
            content: "Thai sản trọn gói"
        },
    ]);
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow></CustomNextArrow>,
        prevArrow: <CustomPrevArrow></CustomPrevArrow>,
        responsive: [
            {
                breakpoint: 1170,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div>
            <h2 style={{ textTransform: 'uppercase', padding: '30px 0', marginTop: '20px', fontWeight: 'bolder' }}>Dịch vụ nổi bật</h2>
            <div className='section-specialty'>
                <div className='specialty-content'>
                    <Slider {...settings}>
                        {services ? (
                            services.map((service, index) => (
                                <Paper key={index} className={index === Math.floor(settings.slidesToShow / 2) ? "active" : ""}>
                                    <div style={{ display: 'flex', justifyContent: 'center', height: '640px', alignItems: 'center' }}>
                                        <div>
                                            <div
                                                className={index % 2 === 0 ? "img-customize1" : "img-customize2"}
                                                style={{ backgroundImage: `url(${service.link})` }}
                                            >
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', top: '-25px' }}>
                                                <div className='iconHolder'>
                                                    <FontAwesomeIcon style={{ backgroundColor: 'transparent', fontSize: '24px' }} icon={faStethoscope} />
                                                </div>
                                            </div>
                                            <h3>{service.content}</h3>
                                        </div>
                                    </div>
                                </Paper>
                            ))
                        ) : (
                            <p>Loading...</p>
                        )}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Service;