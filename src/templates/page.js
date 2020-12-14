import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import SEO from "../components/seo";
import Layout from "../components/layout";
import Post from "../components/post";
import { Helmet } from "react-helmet";
import LinkButton from "../components/linkButton";
import {Box} from "jsxstyle"

const BlogPostTemplate = ({ data, pageContext }) => {
  const {
    frontmatter: {
      title,
      date,
      path,
      author,
      coverImage,
      coverVideo,
      links,
      excerpt,
      tags,
    },
    excerpt: autoExcerpt,
    id,
    html,
  } = data.markdownRemark;
  const { next, previous } = pageContext;

  const [scrollY, setScrollY] = useState(false);

  const scrollEventHandler = () => {
    if(document.scrollingElement.scrollTop > 70){
      setScrollY(true)
    } else {
      setScrollY(false)
    }
  }

  useEffect(() => {
    function handleMount() {
      window.addEventListener('scroll', scrollEventHandler);
    }
    handleMount();
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.removeEventListener('scroll', scrollEventHandler);
    };
  }, []);

  return (
    <Layout>
      <SEO title={title} description={excerpt || autoExcerpt} />
      {scrollY ? ( <LinkButton 
        text="Return to top ↑" 
        internal={true}
        passInProps={
          {position:"fixed", 
          zIndex:"1", 
          left: "5%", 
          top:"5%", 
          className:"return-button", 
          props: {onClick: (() => {document.scrollingElement.scrollTop = 0})}
          }
        }
      />) : ""}
     
      <Post
        key={id}
        title={title}
        date={date}
        path={path}
        author={author}
        coverImage={coverImage}
        coverVideo={coverVideo}
        links={links}
        html={html}
        tags={tags}
        previousPost={previous}
        nextPost={next}
      />
    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query($path: String) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
        date
        path
        author
        excerpt
        tags
        coverImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        coverVideo {
          publicURL
        }
        links
      }
      id
      html
      excerpt
    }
  }
`;
