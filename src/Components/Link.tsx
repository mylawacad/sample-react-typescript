import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";

interface linkprops {
  to: string;
  children: React.ReactNode;
}

const LinkComponent: React.FC<linkprops> = (props: linkprops) => {
  const { to, children } = props;
  return (
    <React.Fragment>
      <Nav.Link as={Link} to={to}>
        {children}
      </Nav.Link>
    </React.Fragment>
  )
};

export default LinkComponent;
