import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./contactSocial.scss";


import FacebookIcon from "../../../assets/contact/facebook.svg";
import TwitterIcons from "../../../assets/contact/twitter.svg";
import DribbleIcon from "../../../assets/contact/dribble.svg";


const contactSocial = () => (
  <Row>
    <Col xs={12}>
      <Row center="xs">
        {/* <Col xs={12} lg={1} className="contact__social">
          <img src={FacebookIcon} alt="facebook" />
        </Col>
        <Col xs={12} lg={1} className="contact__social">
          <img src={TwitterIcons} alt="Twitter" />
        </Col> */}
        <Col xs={12} lg={1} className="contact__social">
          {/* <img src={DribbleIcon} alt="Dribble" /> */}
          <a href="https://www.linkedin.com/in/nikhil-baisoya-375269188">
            <img hre style={{ height: "30px" }} src="https://img.icons8.com/android/50/000000/linkedin.png" alt="Dribble" />
          </a>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default contactSocial;