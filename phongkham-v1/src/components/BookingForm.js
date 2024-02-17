import React from 'react';
import '../style/BookingForm.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axiosConfig";

const BookingForm = () => {
    const [formData, setFormData] = useState({
        accountId: 1,
        staffId: 1,
        doctorId: 1,
        name: "",
        phone: "",
        address: "",
        symptom: "",
        status: 0
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const respone = await api.post("/api/bookings/create", formData, {
                headers: { "Content-Type": "application/json" },
            });
            navigate("/");
        } catch (error) {
            console.error("Error submitting data:", error);
        }
    };
    return (
        <div className='background2'>
            <div className='container2'>
                <div className='note'>
                    <h1>Lưu ý</h1>
                    <p>Quý khách vui lòng gửi thông tin chi tiết để chúng tôi có thể sắp xếp cuộc hẹn.</p>
                    <hr></hr>
                    <li>
                        Lịch hẹn có hiệu lực sau khi được xác nhận chính thức từ Hệ thống.
                    </li>
                    <li>
                        Vui lòng cung cấp thông tin chính xác để được phục vụ tốt nhất. Trong trường hợp cung cấp sai thông tin email & điện thoại, việc xác nhận cuộc hẹn sẽ không hiệu lực.
                    </li>
                    <li>
                        Quý khách sử dụng dịch vụ Đặt hẹn trực tuyến, xin vui lòng đặt trước ít nhất là 24 giờ trước khi đến khám.
                    </li>
                    <li>
                        Trong những trường hợp khẩn cấp hoặc nghi ngờ có các triệu chứng nguy hiểm, quý khách nên ĐẾN TRỰC TIẾP hoặc trung tâm y tế gần nhất để kịp thời xử lý.
                    </li>
                </div>
                <div className='bookingForm'>
                    <form onSubmit={handleSubmit}>
                        <h1>Đặt lịch khám</h1>
                        <div className='inputValue'>
                            <input
                                id="name"
                                name='name'
                                type='text'
                                placeholder="Họ và tên (*)"
                                onChange={handleChange}
                            />
                            <br></br>
                            <input
                                id="phone"
                                name='phone'
                                type='text'
                                placeholder="Số điện thoại (*)"
                                onChange={handleChange}
                            />
                            <br></br>
                            <input
                                id="address"
                                name='address'
                                type='text'
                                placeholder="Nơi đăng kí khám chữa bệnh"
                                onChange={handleChange}
                            />
                            <br></br>
                            <textarea
                                id="symptom"
                                name='symptom'
                                type='text'
                                placeholder="Triệu chứng"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="my-4">
                            <button type="submit" className="booking-btn">
                                Đặt lịch khám
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingForm;