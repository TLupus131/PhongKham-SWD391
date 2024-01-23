import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { useState } from "react";
import "../style/Slider.css";

const Slider = () => {
    const [banners] = useState([
        {
            link: "https://cdn.benhvienthucuc.vn/wp-content/uploads/2024/01/giai-chay-t1-24-1920x500-1.jpg",
        },
        {
            link: "https://cdn.benhvienthucuc.vn/wp-content/uploads/2024/01/gian-hang-suc-khoe-tet-2024-1900x500-1.jpg",
        },
        {
            link: "https://cdn.benhvienthucuc.vn/wp-content/uploads/2024/01/hop-qua-tet-2024-1920x500-1.jpg",
        },
        {
            link: "https://cdn.benhvienthucuc.vn/wp-content/uploads/2023/12/uu-dai-noi-soi-tieu-hoa-t1-24-1920x500-1.jpg",
        },
        {
            link: "https://cdn.benhvienthucuc.vn/wp-content/uploads/2024/01/uu-dai-thai-san-t2-24-1920x500-1.jpg",
        },
        {
            link: "https://cdn.benhvienthucuc.vn/wp-content/uploads/2024/01/uu-dai-kham-nhi-t1-24-1920x500-1.jpg",
        },
        {
            link: "https://cdn.benhvienthucuc.vn/wp-content/uploads/2023/12/uu-dai-ksk-t1-24-1920x500-1.jpg",
        },
    ]);
    return (
        <div>
            <Carousel indicators={false}>
                {banners ? (
                    banners.map((banner, index) => (
                        <Paper key={index}>
                            <div className="movie-card-container">
                                <div
                                    className="movie-card"
                                    style={{ backgroundImage: `url(${banner.link})` }}
                                ></div>
                            </div>
                        </Paper>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </Carousel>
        </div>
    );
};

export default Slider;
