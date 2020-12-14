import React from "react";
import { Row, Col } from "jsxstyle";

const Footer = () => (
  <Col
    className="footerCopyrights"
    width="100%"
    component="footer"
    fontSize="13px"
    color="rgba(0, 0, 0, 0.2)"
    height="50px"
    zIndex="1"
    justifyContent="center"
  >
    <Row width="100%" justifyContent="center" textAlign="center">
      ヽ(© ▽ ©)ノ Built with React and Gatsby by Connie
    </Row>
    <Row width="100%" justifyContent="center">
      Last updated Nov 30, 2020
    </Row>
  </Col>
);

export default Footer;
