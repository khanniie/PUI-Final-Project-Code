import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Row, Col, Block, InlineBlock } from "jsxstyle";
import { Helmet } from "react-helmet";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Post from "../components/post";
import Img from "gatsby-image";
const URL = "https://drive.google.com/file/d/1mbgDZQReKJSd0BnbugT8uPDyUgmeRrYD/view?usp=sharing"

const Resume = () => {
  const data = useStaticQuery(graphql`
    query ResumeQuery {
      file: file(absolutePath: { regex: "assets/resume.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <>
      <Col boxSizing="content-box" alignItems="center" paddingBottom="48px">
        <SEO />
        <Layout path="/resume">
          <Col paddingBottom="48px" width="100%" justifyContent="center" alignItems="center">
          <InlineBlock margin="0px 0px 24px 0px">→ Download from <a target="_blank" href={URL}>Google Drive link</a></InlineBlock>
          <Row
            border="1px solid rgba(0, 0, 0, 0.2)"
            boxShadow="8px 8px 24px rgba(0, 0, 0, 0.1)"
            width="90%"
            maxWidth="900px"
            mediaQueries={{
              md: "screen and (max-width: 400px)",
            }}
            justifyContent="center"
            alignItems="center"
            mdDisplay="none"
          >
            <Img style={{width: "100%"}} fluid={data.file.childImageSharp.fluid} />
          </Row>
          <Row
            width="100%"
            mediaQueries={{
              md: "screen and (max-width: 400px)",
            }}
            display="none"
            mdDisplay="block"
          >
            Alas! Your screen width is too small to display the resume PDF. 
            Please view my resume through <a target="_blank" href={URL}>this link</a> instead.
          </Row>
          </Col>
        </Layout>
      </Col>
    </>
  );
};

export default Resume;
