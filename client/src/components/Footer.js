import styled from "styled-components";
import React from "react";
import Logo from "./Logo";

function Footer() {
  return (
    <StyledFooter>
      <StyledLogoLink>
        <Logo></Logo>
        <div id="wrap">
          <div className="footer-menus">
            <b>STACK OVERFLOW</b>
            <div>Questions</div>
            <div>Help</div>
          </div>
          <div className="footer-menus">
            <b>PRODUCTS</b>
            <div>
              <div>Teams</div>
              <div>Advertising</div>
              <div>Collectives</div>
              <div>Talent</div>
            </div>
          </div>
          <div className="footer-menus">
            <b>COMPANY</b>
            <div>Teams</div>
            <div>About</div>
            <div>Press</div>
            <div>Work Here</div>
            <div>Teams</div>
            <div>Legal</div>
            <div>Privacy Policy</div>
            <div>Terms of Service</div>
            <div>Contact Us</div>
            <div>Cookie Settings</div>
          </div>
          <div className="footer-menus">
            <b>STACK EXCHANGE NETWORK</b>
            <div>About</div>
            <div>Technology</div>
            <div>Culture & recreation</div>
            <div>Life & arts</div>
            <div>Science</div>
            <div>Professional</div>
            <div>Business</div>
            <div>API</div>
          </div>
        </div>
      </StyledLogoLink>
    </StyledFooter>
  );
}

export default Footer;
const StyledFooter = styled.div`
  background-color: #393939;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
  /* display: grid;
    grid-template-columns: 100px 1fr 300px;
    grid-column-gap: 20px; */
  b {
    font-weight: normal;
    margin-left: 2px;
  }
  #wrap {
    display: flex;
    justify-content: center;
  }
`;

const StyledLogoLink = styled.a`
  color: #fff;
  width: 1000px;
  text-decoration: none;
  display: inline-block;
  height: 650px;
  line-height: 50px;
  padding: 8px 8px;
  svg {
    margin-top: 10px;
    display: inline-block;
  }
  span {
    display: inline-block;
    padding-left: 5px;
    padding-top: 15px;
    line-height: 30px;
    font-size: 1.2rem;
    font-weight: 300;
  }

  .footer-menus {
    display: inline-block;
    margin: 20px;
    /* display: grid;
      grid-template-columns: 100px 1fr 300px;
      grid-column-gap: 20px; */
  }
`;
