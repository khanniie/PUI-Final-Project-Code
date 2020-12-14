import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Row, Col, Block, Box} from "jsxstyle";
import { Helmet } from "react-helmet";
import SEO from "../components/seo";
import Layout from "../components/layout";
import TinyPost from "../components/tinyPost";
import { Link as SLink, Element as SElement, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { CSSTransition } from "react-transition-group";

const faceExpressionClassNames = ["normal", "XD", "O"]

class SmileyIcon extends React.Component{

  render(){

    return(
      <>
        <Box 
            position="absolute" 
            left="9px" 
            transform={`translate3d(0px, ${this.props.offsetY * this.props.h - 68}px, 0px)`}
          >
          <Box position="relative" width="32px" height="200px">
            <Row 
              position="absolute"
              left="0"
              top="0"
              width="100%" 
              height="100%" 
              justifyContent="center" 
              alignItems="center"
              zIndex="300"
            >
            <svg className="smiley icon" width="32" height="32" viewBox="0 0 256 256">
              <g fill="none" stroke="#6B70E6" strokeWidth="20">
              <circle cx="128" cy="128" r="112" fill="white"/>
              <path className={"face-feature eyes-" + faceExpressionClassNames[this.props.faceExpression] + "-left"} strokeLinecap="round"/>
              <path className={"face-feature eyes-" + faceExpressionClassNames[this.props.faceExpression] + "-right"} strokeLinecap="round"/>
              <path className={"face-feature mouth-" + faceExpressionClassNames[this.props.faceExpression]} strokeLinecap="round"/>
              </g>
            </svg>
            </Row>
            <Row 
              position="absolute"
              left="0"
              top="0"
              width="100%" 
              height="100%" 
              justifyContent="center" 
              alignItems="center"
              transform="translate3d(-1px, 0px, 0px)"
            >
              <svg height="200" width="80" viewBox="0 0 64 200">
              <defs>
                <linearGradient id="myGradient" gradientTransform="rotate(90)">
                <stop offset="0%"  stopColor="#BBB" />
                  <stop offset="20%"  stopColor="#6B70E6" />
                  <stop offset="70%" stopColor="#6B70E6" />
                  <stop offset="100%"  stopColor="#BBB" />
                </linearGradient>
              </defs>
              <rect x="32" width="6" height="200" fill="url('#myGradient')" />
              </svg>
            </Row>
          </Box>
        </Box>
        <Col 
          width="3px" 
          background="#BBB"
          height="100%" 
        />
        </>
      )
  }

}

class Projects extends React.Component{

  constructor(props){
    super(props)
    this.state ={
      faceExpression: 0,
      offsetY: 0
    }
    this.onSetNav = this.onSetNav.bind(this)
    this.onScroll = this.onScroll.bind(this)
    this.h
    let de = document.documentElement;
    if (self.innerHeight) {this.h = window.innerHeight;}
    else if (de && de.clientHeight) {this.h = de.clientHeight;}
    else if (document.body) {this.h = document.body.clientHeight;}
    
  }

  onScroll(e){
      this.setState({offsetY: window.scrollY/document.body.offsetHeight})
  }

  componentDidMount(){
    window.addEventListener("scroll", this.onScroll)
    scrollSpy.update();
  }

onSetNav(){
   let idx = (this.state.faceExpression + 1) % faceExpressionClassNames.length
    this.setState(
      {
        faceExpression : idx
      })
}

render (){
  const {
    allMarkdownRemark: { edges: posts },
  } = this.props.data;

  const sortedPosts = posts.sort((post1, post2) => {
    const postOrder1 = post1.node.frontmatter.order;
    const postOrder2 = post2.node.frontmatter.order;

    if (postOrder1 > postOrder2) {
      return 1;
    } else {
      return -1;
    }
  }, posts);

  return (
    <>
      <Col width="100%" boxSizing="content-box" alignItems="center">
        <SEO />
        <Layout path="/projects">
        <CSSTransition 
          in={this.state.offsetY > 0.02} 
          timeout={300} 
          classNames="navbar"
          unmountOnExit
        >
          <Col 
            mediaQueries={{
              sm: "screen and (max-width: 1000px)",
              lg: "screen and (min-width: 1000px)",
            }}
            smDisplay="none"
            backgroundColor="white"
            mdBoxShadow="12px 12px 12px rgba(0, 0, 0, 0.2)"
            position="fixed" 
            left="0px" 
            top="0px" 
            height="100%" 
            width="180px" 
            alignItems="flex-start"
            paddingLeft="24px"
            zIndex="300"
            className="nav"
          >
            <SmileyIcon 
              faceExpression={this.state.faceExpression} 
              offsetY={this.state.offsetY} 
              h={this.h}
            />
            <Col 
              position="absolute" 
              width="100%" 
              height="100%" 
              paddingTop="0px" 
              justifyContent="space-evenly" 
              paddingLeft="24px"
            >
              {sortedPosts.map(({node}, idx) => {
                const {
                  id,
                  excerpt: autoExcerpt,
                  frontmatter: {
                    title
                  },
                } = node;
                return (
                <SLink 
                  onSetActive={this.onSetNav}
                  activeClass="selectedLink"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  to={title} 
                  key={`n${idx}`}
                >
                  <Box fontSize="12px" 
                    textDecoration="none" 
                    fontStyle="normal"
                    color="rgba(0, 0, 0, 0.5)"
                    hoverCursor="pointer"
                    >
                      {title}
                    </Box>
                </SLink>)
              })
            }
            </Col>
          </Col>
          </CSSTransition>
          <Row
            fontStyle="italic"
            color="rgba(0, 0, 0, 0.4)"
            marginTop="32px"
            marginBottom="16px"
          >
            Scroll down to view selected projects.
          </Row>
          <Col paddingBottom="80px">
            {sortedPosts.map(({ node }, index) => {
              const {
                id,
                excerpt: autoExcerpt,
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
                  readMoreButton,
                },
              } = node;

              return (
                <SElement key={"index" + index} name={title}>
                  <TinyPost
                    title={title}
                    date={date}
                    path={path}
                    author={author}
                    coverImage={coverImage}
                    coverVideo={coverVideo}
                    links={links}
                    tags={tags}
                    readMoreButton={readMoreButton}
                    excerpt={excerpt}
                  />
                </SElement>
              );
            })}
          </Col>
        </Layout>
      </Col>
    </>
  );
};
}

//sort: { fields: [frontmatter___date], order: DESC }
export const postsQuery = graphql`
  query($limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//posts//" } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date
            path
            author
            excerpt
            tags
            coverImage {
              publicURL
            }
            coverVideo {
              publicURL
            }
            links
            readMoreButton
            order
          }
        }
      }
    }
  }
`;

export default Projects;
