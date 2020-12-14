import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";
import { Box, Row, Col, Inline } from "jsxstyle";

import Menu from "./menu";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.mainMenu = this.props.mainMenu;
    this.path = this.props.path;
    this.state = {
      hover: false,
    };
  }

  render() {
    const wordSpacing = 1;
    const pixels = "Connie Ye".length * wordSpacing;
    const pathMatch = "/" === this.path;
    return (
      <Row
        component="header"
        width="100%"
        justifyContent="space-between"
        zIndex="1"
        flexWrap="wrap"
      >
        <Link to="/">
          <Col
            fontFamily="Domaine Display"
            fontSize="40px"
            position="relative"
            justifyContent="flex-end"
            props={{
              onMouseEnter: () => this.setState({ hover: true }),
              onMouseLeave: () => this.setState({ hover: false }),
            }}
          >
            <Inline
              color={pathMatch ? "#6B70E6" : "black"}
              transitionDuration="500ms"
              letterSpacing={this.state.hover ? "1px" : "0px"}
              marginLeft={this.state.hover ? "-" + pixels / 2 + "px" : "0px"}
            >
              Connie Ye
            </Inline>
            <Inline
              width={this.state.hover ? "100%" : "0%"}
              height="2px"
              position="absolute"
              left={this.state.hover ? "0%" : "50%"}
              bottom="0"
              backgroundColor={pathMatch ? "#6B70E688" : "#44444466"}
              transitionDuration="500ms"
              pointerEvents="none"
            />
          </Col>
        </Link>
        <Menu mainMenu={this.mainMenu} path={this.path} />
      </Row>
    );
  }
}

export default Header;
