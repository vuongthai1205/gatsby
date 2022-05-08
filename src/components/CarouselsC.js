import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import  Advert2 from "../images/advert.png"
import Icon from "../images/icon.png"


const CarouselsC = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src= {Advert2}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Icon}
                alt="Second slide"
                />
            </Carousel.Item>
            </Carousel>
    )
}

export default CarouselsC