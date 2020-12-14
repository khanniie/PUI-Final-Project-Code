import React from "react";
import { Link } from "gatsby";
import { Box, Row, Col, Inline, InlineBlock } from "jsxstyle";

class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.menu = props.mainMenu;
    this.path = props.path;
    this.state = {
      menuItem: null,
    };
  }

  render(props) {
    return (
      <Row
        width="45%"
        justifyContent="space-between"
        alignItems="flex-end"
        fontFamily="EB Garamond"
        fontSize="30px"
        mediaQueries={{
          tiny: "screen and (max-width: 400px)",
          sm: "screen and (min-width: 400px) and (max-width: 640px)",
          md: "screen and (min-width: 640px) and (max-width: 1280px)",
          lg: "screen and (min-width: 1280px)",
        }}
        smWidth="100%"
        mdWidth="60%"
        tinyWidth="100%"

      >
        {this.menu.map((menuItem, index) => {
          const wordSpacing = 1;
          const pixels = menuItem.title.length * wordSpacing;

          const pathMatch = menuItem.path === this.path;

          return (
            <div key={index}>
              <Row
                props={{ key: index }}
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  position="relative"
                  props={{
                    onMouseEnter: () => this.setState({ menuItem: index }),
                    onMouseLeave: () => this.setState({ menuItem: -1 }),
                  }}
                >
                  <Link to={menuItem.path}>
                    <InlineBlock
                      color={pathMatch ? "#6B70E6" : "black"}
                      transition="letter-spacing 500ms, margin-left 500ms"
                      letterSpacing={
                        this.state.menuItem == index
                          ? wordSpacing + "px"
                          : "0px"
                      }
                      marginLeft={this.state.menuItem == index
                        ? "-" + pixels / 2 + "px" : "0px"}
                    >
                      {menuItem.title}
                    </InlineBlock>
                    <Inline
                      width={this.state.menuItem == index ? "100%" : "0%"}
                      height="2px"
                      position="absolute"
                      left={this.state.menuItem == index ? "0%" : "50%"}
                      bottom="0"
                      backgroundColor={pathMatch ? "#6B70E688" : "#44444466"}
                      transitionDuration="500ms"
                      pointerEvents="none"
                    />
                  </Link>
                </Box>
              </Row>
            </div>
          );
        })}
      </Row>
    );
  }
}

// const menuIcon = `M4 34H40V30H4V34ZM4 24H40V20H4V24ZM4 10V14H40V10H4Z`
// const toggleIcon = `M22 41C32.4934 41 41 32.4934 41 22C41 11.5066 32.4934 3 22
// 3C11.5066 3 3 11.5066 3 22C3 32.4934 11.5066 41 22 41ZM7 22C7
// 13.7157 13.7157 7 22 7V37C13.7157 37 7 30.2843 7 22Z`

const Menu = ({ mainMenu, path }) => {
  return <MainMenu mainMenu={mainMenu} path={path} />;
};

export default Menu;
