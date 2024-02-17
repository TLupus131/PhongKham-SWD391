import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import '../style/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const CustomNavbar = () => {
    const navigate = useNavigate();
    const userid = sessionStorage.getItem("id");

    const handleLoginClick = () => {
        navigate('/login');
    };

    const [navbarVisible, setNavbarVisible] = useState(false);

    const handleShowNavbar = () => {
        setNavbarVisible(true);
    };

    const handleHideNavbar = () => {
        setNavbarVisible(false);
    };

    const logout = () => {
        sessionStorage.clear();
        navigate("/");
    };

    const booking = () => {
        navigate("/booking");
    };

    useEffect(() => {
        const updateNavbarVisibility = () => {
            const shouldShowNavbar = window.innerWidth >= 992;
            setNavbarVisible(shouldShowNavbar);
        };

        updateNavbarVisibility();

        window.addEventListener('resize', updateNavbarVisibility);

        return () => {
            window.removeEventListener('resize', updateNavbarVisibility);
        };
    }, []);

    return (
        <Navbar expand="lg" className="navbar navbar-light bg-white" style={{ margin: 0, padding: 0 }}>
            <a class="navbar-brand" href="#">
                <img src="https://via.placeholder.com/150x50" alt="Logo" width="150" height="50"></img>
            </a>
            {navbarVisible ? (
                <Button className="navbar-hide-btn" onClick={handleHideNavbar}>
                    <FontAwesomeIcon style={{ backgroundColor: 'transparent', fontSize: '26px' }} icon={faXmark} />
                </Button>
            ) : (
                <Navbar.Toggle
                    aria-controls="navbarNav"
                    onClick={handleShowNavbar}
                />
            )}
            {navbarVisible && (
                <Navbar.Collapse id="navbarNav" className={`collapse navbar-collapse`}>
                    <Nav className="navbar-nav">
                        <Nav.Item>
                            <Nav.Link href='/'><strong>Trang chủ</strong></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href='#'><strong>Giới thiệu</strong></Nav.Link>
                        </Nav.Item>
                        <NavDropdown title={<strong>Điều trị</strong>} id="solutionsDropdown">
                            <NavDropdown.Item>Điều trị 1</NavDropdown.Item>
                            <NavDropdown.Item>Điều trị 2</NavDropdown.Item>
                            <NavDropdown.Item>Điều trị 3</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={<strong>Cơ sở vật chất và dịch vụ</strong>} id="servicesDropdown">
                            <NavDropdown.Item>1</NavDropdown.Item>
                            <NavDropdown.Item>2</NavDropdown.Item>
                            <NavDropdown.Item>3</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Item>
                            <Nav.Link href="tel:0982730924"><strong>Liên hệ</strong></Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="nav-item" style={{ display: 'flex', alignItems: 'center' }}>
                            <Button onClick={booking} className="contact-btn">Đặt lịch khám</Button>
                        </Nav.Item>
                    </Nav>
                    {userid ? (
                        <NavDropdown title={<strong>Xin chào quý khách</strong>} id="servicesDropdown">
                            <NavDropdown.Item>
                                <Nav.Link href='#' style={{ color: 'black' }}>Hồ sơ</Nav.Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Nav.Link onClick={logout} style={{ color: 'black' }}>Đăng xuất</Nav.Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    ) : (
                        <div>
                            <Nav className="navbar-nav">
                                <Nav.Item className="nav-item" style={{ display: 'flex', alignItems: 'center' }}>
                                    <Button onClick={handleLoginClick} className="contact-btn">Đăng nhập</Button>
                                </Nav.Item>
                            </Nav>
                        </div>
                    )}
                </Navbar.Collapse>
            )}
        </Navbar>
    );
};

export default CustomNavbar;
