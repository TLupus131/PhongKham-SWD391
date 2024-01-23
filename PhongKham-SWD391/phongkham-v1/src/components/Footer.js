import React from 'react';
import '../style/Footer.css'

const Footer = () => {
    return (
        <>
            <div className='footerTitle'>
                <div style={{ flex: 1 }}>
                    <h4>Hotline 1</h4>
                    <p>
                        This is some content for hotline.
                    </p>
                </div>
                <div style={{ flex: 1 }}>
                    <h4>Hotline 2</h4>
                    <p>
                        This is some content for hotline.
                    </p>
                </div>
                <div style={{ flex: 1 }}>
                    <h4>Hotline 3</h4>
                    <p>
                        This is some content for hotline.
                    </p>
                </div>
            </div>
            <div class="bg-light footer">
                <div class="container">
                    <div class="row">
                        <div class="col text-left">
                            <div class="">
                                <p><strong>LIÊN HỆ</strong></p>
                                <hr class="my-3"></hr>
                                <span>Email: <a href="mailto:contact@giupviec.vn">contact@nhasach</a></span> <br></br>
                                <span>Hotline: <a href="tel:0963822522">some content for hotline</a></span>
                            </div>
                        </div>
                        <div class="col text-left">
                            <div class="">
                                <p><strong>CÔNG TY</strong></p>
                                <hr class="my-3"></hr>
                                <ul class="list-unstyled">
                                    <li><a href="#">Khách hàng</a></li>
                                    <li><a href="#">Liên hệ</a></li>
                                    <li><a href="#">Tuyển dụng</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col text-left">
                            <div class="">
                                <p><strong>CHÍNH SÁCH & ĐIỀU KHOẢN</strong></p>
                                <hr class="my-3"></hr>
                                <ul class="rules-ul">
                                    <li><a href="#">Chính sách thanh toán</a></li>
                                    <li><a href="#">Chính sách xử lý khiếu nại</a></li>
                                    <li><a href="#">Chính sách vận chuyển và giao nhận</a></li>
                                    <li><a href="#">Chính sách đổi trả và hoàn tiền</a></li>
                                    <li><a href="#">Chính sách bảo hành</a></li>
                                    <li><a href="#">Chính sách bảo mật thông tin</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ backgroundColor: '#006632' }}>
                <div class="text-center">
                    <span class="rights-text">Phongkham Ⓒ 2024 All Rights Reserved | HỆ THỐNG Y TẾ</span>
                </div>
            </div>
        </>
    );
};

export default Footer;