import React from "react";
import { Row, Box } from "jsxstyle";
import LinkButton from "../components/linkButton";

const Navigation = ({ nextPath, previousPath, nextLabel, previousLabel }) =>
  previousPath || nextPath ? (
    <Row
      marginTop="40px"
      justifyContent={!previousPath ? "flex-end" : "space-between"}
    >
      {previousPath && (
        <LinkButton
          text={"← " + previousLabel}
          internal={true}
          link={previousPath}
        />
      )}
      {nextPath && (
        <LinkButton text={nextLabel + " →"} internal={true} link={nextPath} />
      )}
    </Row>
  ) : null;

export default Navigation;
