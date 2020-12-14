import React, {useState} from "react";
import { Row, Col, Block, Box, Inline } from "jsxstyle";
import SEO from "../components/seo";
import Layout from "../components/layout";
import homepage from '../assets/homepage_1.mp4'
import homepage_d from '../assets/homepage_design.mp4'
import homepage_t from '../assets/tech2_2.mp4'
import homepage_thumb from '../images/homepage_thumb.jpg'
import homepage_d_thumb from '../images/homepage_d.jpg'
import homepage_t_thumb from '../images/homepage_t.jpg'
import LazyLoad from 'react-lazyload';
import { CSSTransition } from "react-transition-group";
import { prop } from "rambdax";

const homepage_default = (
  <Row
      mediaQueries={{
      sm: "screen and (max-width: 640px)",
      md: "screen and (min-width: 640px) and (max-width: 1280px)",
      lg: "screen and (min-width: 1280px)",
    }}
    position="relative"
    width="80%"
    smWidth="150%"
    smMarginLeft="-40%"
    alignItems="center"
    key="h1"
    >
      <LazyLoad placeholder={<img style={{width: "100%", marginTop: "-30px"}} src={homepage_thumb}/>}>
      <video
        autoPlay
        muted
        playsInline
        loop
        width="100%"
        style={{marginTop: "-40px"}}
        poster={homepage_thumb}
      >
        <source src={homepage} type="video/mp4" />
      </video>
      </LazyLoad>
    </Row>
)

class HoverItem extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      hovered: false
    }
  }

  render(){
   return (
     <>
   <Row 
      position="absolute"
      left="0"
      top="0"
      zIndex="0"
      justifyContent="center"
      alignItems="center"
      props={{onMouseEnter: () => this.setState({hovered: true}), onMouseLeave: () => this.setState({hovered:false})}}
      transform={`translate3d(${this.props.x}px, ${this.props.y}px, 0px)`}
    >
      <Box 
        zIndex="0"
        className="bubble"
        backgroundColor="white"
        zIndex="0"
        width="40px"
        height="40px"
        borderRadius="40px"
        opacity="0.3"
      />
      <Box 
        position="absolute"
        backgroundColor="white"
        zIndex="1"
        width="30px"
        height="30px"
        borderRadius="30px"
        opacity="0.7"
      ></Box>
       <CSSTransition 
        in={this.state.hovered} 
        timeout={300} 
        classNames="alert"
        unmountOnExit
        >
      <Box 
        textAlign="center"
        position="absolute"
        bottom="100%"
        color="black"
        fontStyle="italic"
        padding="12px"
        width="200px"
        borderRadius="12px"
        backgroundColor="rgba(255, 255, 255, 0.8)"
        zIndex="200"
      >
        {this.props.content}
      </Box></CSSTransition>
    </Row>
    </>
    )
  }
}

class HoverPage extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      videoLoaded: false
    }
    this.setVideoDims = this.setVideoDims.bind(this)
  }

  setVideoDims(e){
    this.vWid = e.target.clientWidth;
    this.vHei = e.target.clientHeight;
    this.setState({videoLoaded: true})
  }

  render(){
    return (
      <Row
      mediaQueries={{
      sm: "screen and (max-width: 640px)",
      md: "screen and (min-width: 640px) and (max-width: 1280px)",
      lg: "screen and (min-width: 1280px)",
    }}
    position="relative"
    width="100%"
    smWidth="150%"
    height="100%"
    overflow="hidden"
    smMarginLeft="-40%"
    alignItems="center"
    key="h3"
    justifyContent="flex-end"
    >
      <Inline position="relative" width="70%">
      <video
        muted
        playsInline
        width="100%"
        autoPlay
        loop
        poster={this.props.thumb}
        onLoadedData={this.setVideoDims}
      >
        <source src={this.props.videoSrc} type="video/mp4" />
      </video>
      {(this.state.videoLoaded) && this.props.hoverPoints.map((e, idx) => 
        <HoverItem key={"hi" + idx} x={e[0] * this.vWid} content={e[2]} y={e[1] * this.vHei}/>)}
      </Inline>
    </Row>
    )
  }
}

const t_hoverpoints = [
  [0.45, 0.4, "Physical computing"],
  [0.52, 0.2, "Android, Unity, AR"],
  [0.7, 0.6, "Web development, C/C++ programming, Machine learning"]
]

const d_hoverpoints = [
  [0.4, 0.45, "Design research: user journeys, personas, interviews"],
  [0.3, 0.8, "Interaction design and interface design"],
  [0.7, 0.6, "3D modeling, illustration, sticker-making"]
] 

const homepage_design = (
  <HoverPage videoSrc={homepage_d} thumb={homepage_d_thumb} hoverPoints={d_hoverpoints} key="des"/> 
)

const homepage_tech = (
  <HoverPage videoSrc={homepage_t} thumb={homepage_t_thumb} hoverPoints={t_hoverpoints} key="coputers"/>
)

const mapping = {
  0: [homepage_default, "#E4F7FF", "#0095d5"], 
  1: [homepage_design, "#E0ECDF", "#799e73"],
  2: [homepage_tech, "#D9DAED", "#5264af"]
}

const Index = () => {
  const [homepageVid, setHomepageVid] = useState(0);
  const col = mapping[homepageVid][1]
  
  return (
    <Row 
      width="100vw" 
      min-height="100vh" 
      boxSizing="content-box" 
      backgroundColor={col}>
      <SEO />
      <Layout path="/">
        <Col
          height="calc(97vh - 182px)"
          smHeight="calc(98vh - 230px)"
          width="100vw"
          paddingLeft="5vw"
          justifyContent="center"
          alignItems="flex-start"
          mediaQueries={{
            sm: "screen and (max-width: 640px)",
            md: "screen and (min-width: 640px) and (max-width: 1280px)",
            lg: "screen and (min-width: 1280px)",
          }}
        >
          <Box
            fontWeight="600"
            fontSize="30px"
            width="35%"
            mediaQueries={{
              sm: "screen and (max-width: 640px)",
              md: "screen and (min-width: 640px) and (max-width: 1280px)",
              lg: "screen and (min-width: 1280px)",
            }}
            smWidth="100%"
            smFontSize="20px"
            zIndex="1"
          >
            Hi! 👋 I'm 
              <Inline props={{onClick: () => setHomepageVid(0)}}
                borderRadius={(homepageVid == 0) ? "px": "12px"}
                hoverCursor="pointer"
                marginLeft="8px"
                color={mapping[0][2]}
                borderBottom={(homepageVid == 0) ? "2px solid " + mapping[0][2]: ""}
              >
                Connie
              </Inline>, a 
              <Inline props={{onClick: () => setHomepageVid(1)}}
                marginLeft="8px"
                borderRadius={(homepageVid == 1) ? "px": "12px"}
                hoverCursor="pointer"
                color={mapping[1][2]}
                borderBottom={(homepageVid == 1) ? "2px solid " + mapping[1][2]: ""}
              >
                {"design"}
              </Inline> 
              <Inline props={{onClick: () => setHomepageVid(2)}}
                marginLeft="8px"
                borderRadius={(homepageVid == 2) ? "px": "12px"}
                hoverCursor="pointer"
                color={mapping[2][2]}
                borderBottom={(homepageVid == 2) ? "2px solid " + mapping[2][2]: ""}
              >
                {"engineer"}
              </Inline>. 
            <br/>
            I love creating playful tools for others
            and researching new possibilities in technology.
          </Box>
          <Row
            mediaQueries={{
              sm: "screen and (max-width: 640px)",
              md: "screen and (min-width: 640px) and (max-width: 1280px)",
              lg: "screen and (min-width: 1280px)",
            }}
            lgPosition="absolute"
            mdPosition="absolute"
            position="relative"
            left="0px"
            top="0px"
            width="100%"
            height="100%"
            zIndex="0"
            justifyContent="flex-end"
          >
            {mapping[homepageVid][0]}
          </Row>
        </Col>
        <Row 
            position="fixed"
            bottom="10%"
            zIndex="30" 
            width="120px" 
            justifyContent="space-evenly" 
            alignItems="center">
            {
              Object.values(mapping).map((dot, idx) => (<Row 
              height={homepageVid == idx? "40px" : "20px"}
              key={"dot" + idx}
              width={homepageVid == idx? "40px" : "20px"}
              borderRadius="50%"
              padding="4px"
              hoverCursor="pointer"
              justifyContent="center"
              alignItems="center"
              border={homepageVid == idx? "3px dashed white" : ""}
              props={{onClick: () => setHomepageVid(idx)}}
              ><Box width="90%" borderRadius="50%" height="90%" backgroundColor={!(homepageVid == idx)? "#999" : dot[2]}></Box></Row>))
            }
          </Row>
      </Layout>
    </Row>
  );
};

export default Index;
