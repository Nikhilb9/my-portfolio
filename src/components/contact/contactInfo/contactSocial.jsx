import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./contactSocial.scss";


// import FacebookIcon from "../../../assets/contact/facebook.svg";
// import TwitterIcons from "../../../assets/contact/twitter.svg";
// import DribbleIcon from "../../../assets/contact/dribble.svg";
import GithubIcon from "../../../assets/contact/github.png";




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
          <a href="https://github.com/Nikhilb9/" target="blank">
            <img style={{ height: "30px" }} src={GithubIcon} alt="Twitter" />
          </a>
        </Col> 
        <Col xs={12} lg={1} className="contact__social">
          {/* <img src={DribbleIcon} alt="Dribble" /> */}
          <a href="https://www.linkedin.com/in/nikhil-baisoya-375269188" target="blank">
            <img hre style={{ height: "30px" }} src="https://img.icons8.com/android/50/000000/linkedin.png" alt="Dribble" />
          </a>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default contactSocial;
