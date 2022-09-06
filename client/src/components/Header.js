import styled from "styled-components";
import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LogoutBtn from "./회원가입/Logout";

const StyledHeader = styled.div`
  background-color: #393939;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
  display: grid;
  grid-template-columns: 50px 1fr 2fr;
  grid-column-gap: 20px;
`;
const StyleBody = styled.div`
  display: grid;
  margin: 0 auto;
`;
const StyledMenu = styled.div`
  width: 200px;
  &:hover {
    background-color: lightgray;
  }
`;
const StyledLogoLink = styled.div`
  color: #fff;
  text-decoration: none;
  display: inline-block;
  height: 40px;
  line-height: 50px;
  padding: 8px 8px;
  svg {
    /* margin-top: 10px; */
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
  b {
    font-weight: normal;
    margin-left: 2px;
  }
  button {
    content: "f16c";
    font-family: "Font Awesome\ 5 Free";
    width: 30px;
    height: 20px;
  }
`;

// const StyledForm = styled.form`

// `

const LoginedButton = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  position: relative;
  margin: 5px 5px;
  display: inline-block;
  padding: 3px 5px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  width: 50px;
  border-radius: 7px;
  font-family: "paybooc-Light", sans-serif;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  .buttonWrap {
    align-items: center;
    display: inline-block;
    width: 400px;
  }
  a {
    color: white;
    text-decoration: none;
    width: 30px;
    height: 30px;
  }
`;
const StyledInput = styled.input`
  display: inline-block;
  box-sizing: border-box;
  height: 50px;
  color: #fff;
  border: 1px solid #777;
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.1);
  margin-top: 9px;
  padding: 1rem 0 1rem 5rem;
  width: 70%;

  ::placeholder {
    color: rgb(207, 204, 204);
    letter-spacing: 0.05rem;
  }

  :focus {
    border: 3px solid rgb(48, 130, 197);
    outline: 4px solid rgb(223, 238, 249);
    outline-offset: -2px;
  }
`;
const StyledButton = styled.button`
  background-color: #d4dfe6;
  position: relative;
  padding: 10px 15px;
  border-radius: 7px;
  font-family: "paybooc-Light", sans-serif;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  &:hover {
    color: #d4dfe6;
    background-color: #6aafe6;
  }
`;
const StyledIconBox = styled.div`
  position: absolute;
  color: grey;
  font-size: 2.5rem;
  left: 10px;
  top: 50%;
  transform: translateY(-45%);
`;
const StyledFlex = styled.div`
  display: flex;
`;
function Header({ searchContent, setSearchContent }) {
  let isLogin = false;
  //로그아웃 리다이렉트
  const navigate = useNavigate();
  const onClickLogout = () => {
    navigate(`/Modal`);
  };

  if (sessionStorage.getItem("jwtToken") === null) {
    isLogin = false;
  } else {
    isLogin = true;
  }
  return (
    <StyledHeader>
      <StyleBody></StyleBody>
      <StyledMenu>
        <Link to="/">
          <Logo></Logo>
          <StyledLogoLink href="#">
            <span>icon</span>
            <b>Stack</b>Overflow{" "}
          </StyledLogoLink>
        </Link>
      </StyledMenu>
      <form action="" className="Search">
        <div id="profile">
          <StyledFlex>
            <StyledInput
              type="text"
              placeholder="Search..."
              value={searchContent}
              onChange={(e) => setSearchContent(e.target.value)}
            />

            {isLogin ? (
              <div>
                <div className="buttonWrap">
                  <LoginedButton>
                    <a href="#">icon1</a>
                  </LoginedButton>
                  <LoginedButton>
                    <a href="#">icon2</a>
                  </LoginedButton>
                  <LoginedButton>
                    <a href="#">icon3</a>
                  </LoginedButton>
                  {/* <StyledButton onClick={onClickLogout}>
                    <a href="#">Log out</a>
                  </StyledButton> */}
                  <LogoutBtn></LogoutBtn>
                </div>
              </div>
            ) : (
              <div>
                <Link to="/login">
                  <StyledButton>Log in</StyledButton>
                </Link>
                <Link to="/signup">
                  <StyledButton>Sign up</StyledButton>
                </Link>
              </div>
            )}
          </StyledFlex>
        </div>
      </form>
    </StyledHeader>
  );
}

export default Header;
