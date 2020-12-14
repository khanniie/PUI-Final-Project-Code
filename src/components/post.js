import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import Navigation from "./navigation";
import TinyPost from "./tinyPost";
import { Row, Col, Box } from "jsxstyle";

const Post = props => {
  let {
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
    previousPost,
    nextPost,
  } = props;
  const previousPath = previousPost && previousPost.frontmatter.path;
  const previousLabel = previousPost && previousPost.frontmatter.title;
  const nextPath = nextPost && nextPost.frontmatter.path;
  const nextLabel = nextPost && nextPost.frontmatter.title;

  return (
    <Col className="post-container" width="100%">
      <Box fontFamily="Domaine" fontSize="40px">
        {title}
      </Box>
      <Box fontFamily="EB Garamond" fontSize="24px" marginBottom="24px">
        {date}
      </Box>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Navigation
        previousPath={previousPath}
        previousLabel={previousLabel}
        nextPath={nextPath}
        nextLabel={nextLabel}
      />
    </Col>
  );
};

export default Post;
