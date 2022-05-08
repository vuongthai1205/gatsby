import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import Img1 from "../images/img-04.jpg"
import Img2 from "../images/img-03.jpg"


const CarouselsC = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src= {Img1}
                alt="First slide"
                // style={{height: 90 + "vh", objectFit: "cover"}}
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Img2}
                alt="Second slide"
                // style={{height: 90 + "vh", objectFit: "cover"}}

                />
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselsC