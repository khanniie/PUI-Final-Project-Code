import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { CSSTransition } from "react-transition-group";

import Header from "./header";
import Footer from "./footer";
import { Col, Row } from "jsxstyle";

function Layout({ path, children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          logo {
            src
            alt
          }
          logoText
          copyrights
          mainMenu {
            title
            path
          }
        }
      }
    }
  `);
  const {
    title,
    logo,
    logoText,
    mainMenu,
    copyrights,
  } = data.site.siteMetadata;

  const [componentIn, setIn] = useState(false);

  useEffect(() => {
    function handleMount(status) {
      setIn(status);
    }
    handleMount(true);
    // Specify how to clean up after this effect:
    return function cleanup() {
      handleMount(false);
    };
  }, []);

  return (
    <CSSTransition
      timeout={5000}
      in={componentIn}
      classNames="fade"
      className={"layout"}
    >
      <Col
        paddingTop="32px"
        paddingLeft="5%"
        paddingRight="5%"
        alignItems="center"
        fontFamily="Open Sans"
        width="100%"
      >
        <Header
          siteTitle={title}
          siteLogo={logo}
          logoText={logoText}
          mainMenu={mainMenu}
          path={path}
        />
        <Col
          marginTop="56px"
          width="900px"
          alignItems="center"
          className="content"
          mediaQueries={{
            sm: "screen and (max-width: 640px)",
            md: "screen and (min-width: 640px) and (max-width: 950px)",
            lg: "screen and (min-width: 1280px)",
          }}
          smWidth="100%"
          mdWidth="90%"
          mdMarginTop="48px"
          smMarginTop="36px"
        >
          {children}
        </Col>
        <Footer copyrights={copyrights} />
      </Col>
    </CSSTransition>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
