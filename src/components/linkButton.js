import React, {useState} from "react";
import { Link } from "gatsby";
import { Box } from "jsxstyle";
import FloatingDots from "./floatingDots"

const LinkButton = props => {
  let { text, link, internal, passInProps } = props;

  const wordSpacing = 0.8;
  const pixels = text.length * wordSpacing;

  var innerHTML = (
    <Box
      className="linkButton"
      component="button"
      border="1px solid rgba(0, 0, 0, 0.4)"
      color="rgba(0, 0, 0, 0.7)"
      padding="8px"
      borderRadius="16px"
      padding="16px 24px 16px 24px"
      marginRight="4px"
      marginBottom="4px"
      cursor="pointer"
      fontSize="16px"
      //fontStyle="italic"
      hoverPaddingLeft={24 - pixels / 2 + "px"}
      hoverPaddingRight={24 - pixels / 2 + "px"}
      hoverLetterSpacing={wordSpacing + "px"}
      transitionDuration="250ms"
      transitionTimingFunction="ease-in-out"
      background="rgba(0, 0, 0, 0)"
      position="relative"
      overflow="hidden"
      zIndex="0"
      hoverBackgroundColor="rgba(250, 255, 255)"
      background="white"
    >
      {text}{" "}
      {internal ? (
        ""
      ) : (
        <Box
          opacity="0.6"
          marginLeft="4px"
          marginTop="-1px"
          marginBottom="-1px"
          width="16px"
          component="img"
          props={{ src: "../images/external.svg" }}
        />
      )}
      <FloatingDots/>
    </Box>
  );

  if(link == null){
    return  <Box {...passInProps}>{innerHTML}</Box>;
  }

  return <Box {...passInProps}>
  {internal ? (
    <Link to={link} key={"link" + text + link} className="wrapper">
      {innerHTML}
    </Link>
  ) : (
    <a
      href={link}
      target="__blank"
      key={"link" + text + link}
      className="wrapper"
    >
      {innerHTML}
    </a>
  )}</Box>
};

export default LinkButton;
