
import Alert from 'react-bootstrap/Alert'
import React from "react";
import CssCall from "../assets/css/call.css"
import CallButton from "../images/call-button.png"

const Footer = () => {
    return(
        <Alert variant="success">
            <Alert.Heading>Hey, nice to see you</Alert.Heading>
            <p>
                Aww yeah, you successfully read this important alert message. This example
                text is going to run a bit longer so that you can see how spacing within an
                alert works with this kind of content.
            </p>
            <hr />
            <p className="mb-0">
                Whenever you need to, be sure to use margin utilities to keep things nice
                and tidy.
            </p>
            <div className="hotline-phone-ring-wrap">
              <div className="hotline-phone-ring">
                  <div className="hotline-phone-ring-circle"></div>
                  <div className="hotline-phone-ring-circle-fill"></div>
                  <div className="hotline-phone-ring-img-circle">
                      <a href="tel:0903319478" className="pps-btn-img">
                          <img src={CallButton} alt="Gọi điện thoại" width="50"/>
                      </a>
                  </div>
              </div>
              <div className="hotline-bar">
                  <a href="tel:0933943686">
                      <span className="text-hotline" style={{fontFamily: "Arial"}}>0933 943 686</span>
                  </a>
              </div>
          </div>
        </Alert>
    )
}
export default Footer