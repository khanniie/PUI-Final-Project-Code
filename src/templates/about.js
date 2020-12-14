import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import { Row, Col, Block } from "jsxstyle";
import { Helmet } from "react-helmet";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Post from "../components/post";
import Navigation from "../components/navigation";
import Img from "gatsby-image";

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      file: file(absolutePath: { regex: "images/me.jpg/" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Row width="100vw" boxSizing="content-box" alignItems="center">
      <SEO />
      <Layout path="/about">
        <Row
          width="100%"
          mediaQueries={{
            sm: "screen and (max-width: 640px)",
            lg: "screen and (min-width: 1280px)",
          }}
          smPaddingTop="0px"
          justifyContent="space-between"
          paddingTop="24px"
          paddingBottom="48px"
          flexWrap="wrap"
        >
          <Col
            mediaQueries={{
              sm: "screen and (max-width: 640px)",
              lg: "screen and (min-width: 1280px)",
            }}
            smWidth="100%"
            width="40%"
          >
            <h2>About me</h2>
            <Img fluid={data.file.childImageSharp.fluid} />
          </Col>
          <Col
            width="60%"
            mediaQueries={{
              sm: "screen and (max-width: 640px)",
              lg: "screen and (min-width: 1280px)",
            }}
            smWidth="100%"
            padding="0px 48px"
            smPadding="12px"
          >
            Hello, I'm currently a senior at Carnegie Mellon, studying Computer
            Science and Fine Art. I also have an additional major in
            Human-Computer Interaction.
            <div className="br" />
            I just finished working part-time for Google's AR team after interning with
            them last summer, prototyping cutting-edge AR experiences. The
            summer before that, I interned on Google's Material Research team,
            where I worked with Google Fonts and Material Design to research new
            web tools for variable fonts.
            <div className="br" />
            I have a strong technical background in computer science. I love
            designing joyful experiences and thinking about the future of
            ubiquitous computing.
            <div className="br" />
            <p>
              In my free time, I experiment with new pasta recipes and make
              lighthearted games with my art collective{" "}
              <a href="https://github.com/khanniie">Algorat</a>! I also have a
              dog named Mei Mei who's the light of my life.
            </p>
            <div className="br" />
            <div className="br" />
            <h2>Find me on</h2>
            <p>
              Github - <a href="https://github.com/khanniie">khanniie</a>
            </p>
            Email - constance.connie.ye@gmail.com
          </Col>
        </Row>
      </Layout>
    </Row>
  );
};

export default About;
