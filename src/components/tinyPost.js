import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import LazyLoad from 'react-lazyload';
import { Row, Col, Block } from "jsxstyle";
import Img from "gatsby-image";
import Navigation from "./navigation";
import { toKebabCase } from "../helpers";
import LinkButton from "../components/linkButton";
import { CSSTransition } from "react-transition-group";
import Video from "../components/Video";

const TinyPost = ({
  title,
  date,
  path,
  coverImage,
  coverVideo,
  author,
  excerpt,
  tags,
  html,
  links,
  readMoreButton,
  previousPost,
  nextPost,
}) => {
  let externalLinks = links.length > 0 ? links.split(";") : [];
  externalLinks = externalLinks.map(frag => frag.split(","));

  let buttons =
    readMoreButton.length > 0
      ? [
          <LinkButton
            key={title + "read"}
            link={path}
            text={readMoreButton}
            internal={true}
          />,
        ]
      : [];
  buttons = buttons.concat(
    externalLinks.map((frag, index) => (
      <LinkButton
        key={title + index}
        link={frag[1]}
        text={frag[0]}
        internal={false}
      />
    )),
  );

  return (
    <div className="listitem" key={title}>
      <Row
        borderRadius="12"
        border="1px solid rgba(0, 0, 0, 0.15)"
        borderRadius="16px"
        alignItems="center"
        justifyContent="space-between"
        padding="56px 64px"
        smPadding="32px 24px"
        mdPadding="40px 32px"
        width="900px"
        marginBottom="48px"
        mediaQueries={{
          sm: "screen and (max-width: 640px)",
          md: "screen and (min-width: 640px) and (max-width: 910px)",
          lg: "screen and (min-width: 1280px)",
        }}
        smWidth="90vw"
        mdWidth="640px"
        flexWrap="wrap"
      >
        <Col
          width="40%"
          mediaQueries={{
            sm: "screen and (max-width: 640px)",
            md: "screen and (min-width: 640px) and (max-width: 910px)",
            lg: "screen and (min-width: 1280px)",
          }}
          mdWidth="55%"
          smWidth="100%"
        >
          <Block fontFamily="Domaine" fontSize="24px" margin="0px 0px 24px 0px">
            {title}
          </Block>
          <Block
            margin="0px 0px 24px 0px"
            fontSize="16px"
            color="rgba(0, 0, 0, 0.7)"
          >
            {excerpt}
          </Block>
          <Row
            mediaQueries={{
              sm: "screen and (max-width: 640px)",
              lg: "screen and (min-width: 1280px)",
            }}
            smJustifyContent="center"
            smAlignItems="center"
            flexWrap="wrap"
            smMarginBottom="12px"
          >
            {buttons}
          </Row>
        </Col>
        <Block
          mediaQueries={{
            sm: "screen and (max-width: 640px)",
            md: "screen and (min-width: 640px) and (max-width: 910px)",
            lg: "screen and (min-width: 1280px)",
          }}
          width="50%"
          mdWidth="35%"
          smWidth="100%"
        >
          <Video coverImage={coverImage} coverVideo={coverVideo}/>
        </Block>
      </Row>
    </div>
  );
};

export default TinyPost;
