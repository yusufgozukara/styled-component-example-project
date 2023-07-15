import React from "react";
import Button from "./styles/Button.styled";
import StyledHeader, { Logo, Nav } from "./styles/Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Nav>
        <Logo src="./images/logo.png"></Logo>
        <div>
          <Button color="#A62440">Apply Courses</Button>
          <Button bg="#A62440">Talk to Adviser</Button>
        </div>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
