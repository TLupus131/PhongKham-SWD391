import React, { useState, useEffect } from 'react';
import '../style/Doctor.css'
import { Paper } from "@mui/material";
import Slider from "react-slick"

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

const Doctor = () => {
    const [doctors] = useState([
        {
            link: "https://cdn.benhvienthucuc.vn/wp-content/uploads/2022/06/BS-Nguyen-Pham-Y-Nhi.jpg",
            degree: "Thầy thuốc ưu tú tiến sĩ bác sĩ",
            name: "Nguyễn Phạm Ý Nhi",
            role: "Giám đốc Bệnh viện Đa khoa Quốc tế Thu Cúc (286 Thụy Khuê)",
            content: ["Thầy thuốc ưu tú, TS.BS Nguyễn Phạm Ý Nhi là một nhà chuyên môn, nhà quản lý y tế xuất sắc. TS.BS Nguyễn Phạm Ý Nhi đã vinh dự nhận Huân chương lao động hạng ba cùng nhiều Bằng khen của Bộ trưởng Bộ y tế, Chủ tịch UBND thành phố Hà Nội trao tặng.",
                "Là chuyên gia đầu ngành về tim mạch trẻ em, bác sĩ Ý Nhi từng giữ nhiều chức vụ quan trọng như: Giám Đốc Bệnh viện Đa khoa Xanh Pôn Hà Nội, Chủ tịch Hội Nhi khoa Hà Nội. Bên cạnh hoạt động chuyên môn, bác sĩ Ý Nhi từng là đại biểu Quốc hội, tích cực đóng góp tiếng nói của mình về các vấn đề xã hội.",
                "Với bề dày thành tích trong công tác chuyên môn và quản lý, TS.BS Nguyễn Phạm Ý Nhi đã đồng hành và dẫn dắt Bệnh viện Đa khoa Quốc tế Thu Cúc TCI đạt được nhiều thành tựu nổi bật trên cương vị Giám đốc chuyên môn của Bệnh viện.",
                "Bác sĩ quản lý vận hành tối ưu phương pháp hội chẩn liên chuyên khoa, chỉ đạo và định hướng phối hợp hiệu quả giữa các chuyên gia, bác sĩ, kỹ thuật viên của các khoa trong toàn bệnh viện, trong nước và quốc tế. Từ đó giúp chẩn đoán nhanh, chính xác, không bỏ lọt bệnh, điều trị trúng đích, đúng bệnh."]
        },
        {
            link: "https://cdn.benhvienthucuc.vn/wp-content/uploads/2021/02/BS-Pham-Huy-Huyen-300x300.png",
            degree: [],
            name: "",
            role: "",
            content: []
        },
        {
            link: "https://cdn.benhvienthucuc.vn/wp-content/uploads/2021/03/bac-ha1-300x300.jpg",
            degree: [],
            name: "",
            role: "",
            content: []
        },
        {
            link: "https://cdn.benhvienthucuc.vn/wp-content/uploads/2022/02/le-ngoc-thuong-300x300.jpg",
            degree: [],
            name: "",
            role: "",
            content: []
        },
        {
            link: "https://cdn.benhvienthucuc.vn/wp-content/uploads/2023/02/vu-van-khien-300x300.jpg",
            degree: [],
            name: "",
            role: "",
            content: []
        },
        {
            link: "https://cdn.benhvienthucuc.vn/wp-content/uploads/2020/10/BS-Nguyen-Xuan-Thanh-300x300.png",
            degree: [],
            name: "",
            role: "",
            content: []
        },
        {
            link: "https://cdn.benhvienthucuc.vn/wp-content/uploads/2020/11/Nguyen-Van-Quynh-PGS-300x300.jpg",
            degree: [],
            name: "",
            role: "",
            content: []
        },
        {
            link: "https://cdn.benhvienthucuc.vn/wp-content/uploads/2022/02/Vu-Van-Trien-1-300x300.jpg",
            degree: [],
            name: "",
            role: "",
            content: []
        },
        {
            link: "https://cdn.benhvienthucuc.vn/wp-content/uploads/2021/11/Nguyen-Duc-Hoan-300x300.jpg",
            degree: [],
            name: "",
            role: "",
            content: []
        },
        {
            link: "https://cdn.benhvienthucuc.vn/wp-content/uploads/2021/01/BS-Nguyen-Van-Doanh-300x300.png",
            degree: [],
            name: "",
            role: "",
            content: []
        },
        {
            link: "https://cdn.benhvienthucuc.vn/wp-content/uploads/2020/06/BS-Nguyen-Thi-Kim-Loan-300x300.png",
            degree: [],
            name: "",
            role: "",
            content: []
        },
        {
            link: "https://cdn.benhvienthucuc.vn/wp-content/uploads/2020/12/Duong-Van-Tien-Truong-phong-kham-Tai-Mui-Hong1-300x300.jpg",
            degree: [],
            name: "",
            role: "",
            content: []
        },
        {
            link: "https://cdn.benhvienthucuc.vn/wp-content/uploads/2021/02/Nguyen_Thi_Mai_Hoa_-_Nhi-300x300.jpg",
            degree: [],
            name: "",
            role: "",
            content: []
        },
    ]);
    const [activeDoctorIndex, setActiveDoctorIndex] = useState(0);

    const [selectedDoctor, setSelectedDoctor] = useState(null);

    useEffect(() => {
        handleDoctorClick(activeDoctorIndex);
    }, [activeDoctorIndex]);

    const handleDoctorClick = (index) => {
        setSelectedDoctor(doctors[index]);
        setActiveDoctorIndex(index);
    };

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
        nextArrow: <CustomNextArrow></CustomNextArrow>,
        prevArrow: <CustomPrevArrow></CustomPrevArrow>,
        responsive: [
            {
                breakpoint: 1170,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='doctorBackdrop'>
            <div style={{ width: '100%' }}>
                <h2 className='doctorTitle' style={{ textTransform: 'uppercase', marginTop: '30px', padding: '30px 0', fontWeight: 'bolder' }}>Đội ngũ bác sĩ</h2>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className='infoBox'>
                        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img src={selectedDoctor?.link} alt={selectedDoctor?.name} />
                        </div>
                        <div style={{ flex: 1, textAlign: 'start', padding: '40px 40px 0px 40px', marginBottom: '20px' }}>
                            <h5 style={{ textTransform: 'uppercase' }}>{selectedDoctor?.degree}</h5>
                            <h2>{selectedDoctor?.name}</h2>
                            <p className="doctorRole">{selectedDoctor?.role}</p>
                            {selectedDoctor?.content.map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>
                <div style={{ padding: '50px 150px' }}>
                    <Slider {...settings}>
                        {doctors ? (
                            doctors.map((doctor, index) => (
                                <Paper key={index} onClick={() => handleDoctorClick(index)}>
                                    <div>
                                        <div className={`imgBox ${index === activeDoctorIndex ? 'activeBox' : ''}`}>
                                            <div
                                                className="img-customize"
                                                style={{ backgroundImage: `url(${doctor.link})` }}
                                            >
                                            </div>
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

export default Doctor;